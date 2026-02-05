
'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { StatsCard } from '@/components/dashboard/stats-card';
import { InProgressCourses } from '@/components/dashboard/in-progress-courses';
import { RecentAchievements } from '@/components/dashboard/recent-achievements';
import { OverviewChart } from '@/components/dashboard/overview-chart';
import { courses as allCourses, achievements } from '@/lib/mock-data';
import { Activity, BarChart, CheckCircle, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useUser, useDoc, useMemoFirebase, useFirestore } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';


export default function DashboardPage() {
  const { user } = useUser();
  const firestore = useFirestore();

  const userRef = useMemoFirebase(() => {
    if (!user) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);

  const profileRef = useMemoFirebase(() => {
    if(!user) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [firestore, user]);

  const { data: userData } = useDoc(userRef);
  const { data: userProfile, isLoading: isProfileLoading } = useDoc(profileRef);


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

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {userProfile?.name || userData?.username || user?.email}!
        </h1>
        <p className="text-muted-foreground">
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
            <StatsCard title="Level" value={currentLevel} icon={BarChart} />
            <StatsCard
              title="XP Points"
              value={userProfile?.xp.toLocaleString() ?? 0}
              icon={Activity}
            />
            <StatsCard
              title="Courses Completed"
              value={userProfile?.completedCourses.length ?? 0}
              icon={CheckCircle}
            />
            <StatsCard
              title="Coding Streak"
              value={`${userProfile?.streak ?? 0} days`}
              icon={Clock}
            />
          </>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>XP Overview</CardTitle>
            <CardDescription>
              Your XP gains over the last 7 days.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewChart />
          </CardContent>
        </Card>
        <div className="lg:col-span-2 space-y-6">
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
          <InProgressCourses courses={inProgressCourses} />
        </div>
      </div>
       <RecentAchievements achievements={achievements} />
    </div>
  );
}
