
'use client';
import React, { useMemo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { StatsCard } from '@/components/dashboard/stats-card';
import { InProgressCourses } from '@/components/dashboard/in-progress-courses';
import { Leaderboard } from '@/components/dashboard/leaderboard';
import { OverviewChart } from '@/components/dashboard/overview-chart';
import { courses as allCourses } from '@/lib/mock-data';
import { expertChallenges } from '@/lib/expert-challenges';
import { Activity, Award, Flame, Rocket, ShieldCheck } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useUser, useDoc, useMemoFirebase, useFirestore, useCollection } from '@/firebase';
import { doc, query, collection, where, orderBy, Timestamp } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';


export default function DashboardPage() {
  const { user } = useUser();
  const firestore = useFirestore();

  const userRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);

  const profileRef = useMemoFirebase(() => {
    if(!user || !firestore) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [firestore, user]);

  const { data: userData } = useDoc(userRef);
  const { data: userProfile, isLoading: isProfileLoading } = useDoc(profileRef);

  const sevenDaysAgo = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() - 7);
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const xpHistoryQuery = useMemoFirebase(() => {
      if (!user || !firestore) return null;
      return query(
        collection(firestore, 'userProfiles', user.uid, 'xpHistory'),
        where('timestamp', '>=', sevenDaysAgo)
      );
  }, [firestore, user, sevenDaysAgo]);

  const { data: xpHistory, isLoading: isXpHistoryLoading } = useCollection(xpHistoryQuery);

  const overviewChartData = useMemo(() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dailyTotals: { [key: string]: number } = {};

    if (xpHistory) {
        for (const entry of xpHistory) {
            const timestamp = entry.timestamp as Timestamp;
            if (timestamp) {
                const date = timestamp.toDate();
                const dateKey = date.toISOString().split('T')[0]; // YYYY-MM-DD
                if (!dailyTotals[dateKey]) {
                    dailyTotals[dateKey] = 0;
                }
                dailyTotals[dateKey] += entry.amount;
            }
        }
    }

    return Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateKey = d.toISOString().split('T')[0];
        return {
            name: days[d.getDay()],
            total: dailyTotals[dateKey] || 0
        };
    }).reverse();
  }, [xpHistory]);


  const totalXP = 1000;
  const currentLevel = userProfile ? Math.floor(userProfile.xp / totalXP) + 1 : 1;
  const xpForNextLevel = userProfile ? userProfile.xp % totalXP : 0;
  
  const inProgressCourses = React.useMemo(() => {
    if (!userProfile?.completedLevels) {
      return [];
    }

    return allCourses
      .map(course => {
        if (!course.levels || course.levels.length === 0) {
          return { id: course.id, name: course.name, progress: 0 };
        }
        const completedInCourse = course.levels.filter(level => 
          userProfile.completedLevels.includes(level.id)
        ).length;
        const progress = Math.round((completedInCourse / course.levels.length) * 100);
        return { id: course.id, name: course.name, progress };
      })
      .filter(course => course.progress > 0 && course.progress < 100);
  }, [userProfile]);
  
  const totalExpertChallenges = expertChallenges.length;
  const completedExpertChallenges = userProfile?.completedExpertChallenges?.length ?? 0;
  const expertProgress = totalExpertChallenges > 0 ? (completedExpertChallenges / totalExpertChallenges) * 100 : 0;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight font-headline">
          Welcome back, {userProfile?.name || userData?.username || user?.email}!
        </h1>
        <p className="text-muted-foreground text-lg">
          Here&apos;s a summary of your journey so far. Keep conquering!
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {isProfileLoading ? (
          <>
            <Skeleton className="h-28" />
            <Skeleton className="h-28" />
            <Skeleton className="h-28" />
            <Skeleton className="h-28" />
          </>
        ) : (
          <>
            <StatsCard title="Level" value={currentLevel} icon={ShieldCheck} />
            <StatsCard
              title="XP Points"
              value={userProfile?.xp.toLocaleString() ?? 0}
              icon={Flame}
            />
            <StatsCard
              title="Courses Completed"
              value={userProfile?.completedCourses.length ?? 0}
              icon={Award}
            />
            <StatsCard
              title="Coding Streak"
              value={`${userProfile?.streak ?? 0} days`}
              icon={Activity}
            />
          </>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>XP Overview</CardTitle>
              <CardDescription>
                Your XP gains over the last 7 days.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <OverviewChart data={overviewChartData} isLoading={isXpHistoryLoading} />
            </CardContent>
          </Card>
          <Leaderboard />
        </div>
        <div className="lg:col-span-1 space-y-6">
           <Card>
            <CardHeader>
              <CardTitle>Next Level</CardTitle>
               <CardDescription>
                You are level {currentLevel}. Keep it up!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isProfileLoading ? (
                <Skeleton className="h-8 w-full" />
              ) : (
                <div className="space-y-2">
                   <Progress value={(xpForNextLevel / totalXP) * 100} />
                   <p className="text-sm text-muted-foreground text-center">
                    {xpForNextLevel.toLocaleString()} / {totalXP.toLocaleString()} XP
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Rocket />
                    <span>Expert Level Progress</span>
                </CardTitle>
                <CardDescription>
                    Your progress in the expert challenges.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {isProfileLoading ? (
                    <Skeleton className="h-8 w-full" />
                ) : (
                    <div className="space-y-2">
                        <Progress value={expertProgress} />
                        <p className="text-sm text-muted-foreground text-center">
                            {completedExpertChallenges} / {totalExpertChallenges} Challenges
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
          <InProgressCourses courses={inProgressCourses} />
        </div>
      </div>
    </div>
  );
}
