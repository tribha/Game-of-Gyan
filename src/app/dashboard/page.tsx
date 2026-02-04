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
import { userProfile, courseProgress, achievements } from '@/lib/mock-data';
import { Activity, BarChart, CheckCircle, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function DashboardPage() {
  const totalXP = 1000;
  const currentLevel = Math.floor(userProfile.xp / totalXP);
  const xpForNextLevel = userProfile.xp % totalXP;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {userProfile.name}!
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s a summary of your journey so far. Keep conquering!
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Level" value={currentLevel} icon={BarChart} />
        <StatsCard
          title="XP Points"
          value={userProfile.xp.toLocaleString()}
          icon={Activity}
        />
        <StatsCard
          title="Courses Completed"
          value={userProfile.completedCourses}
          icon={CheckCircle}
        />
        <StatsCard
          title="Coding Streak"
          value={`${userProfile.streak} days`}
          icon={Clock}
        />
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
              <div className="space-y-2">
                 <Progress value={(xpForNextLevel / totalXP) * 100} />
                 <p className="text-sm text-muted-foreground text-center">
                  {xpForNextLevel.toLocaleString()} / {totalXP.toLocaleString()} XP
                </p>
              </div>
            </CardContent>
          </Card>
          <InProgressCourses courses={courseProgress} />
        </div>
      </div>
       <RecentAchievements achievements={achievements} />
    </div>
  );
}
