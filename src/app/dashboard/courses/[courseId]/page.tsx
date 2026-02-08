'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { mockData } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock } from 'lucide-react';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';

export default function CoursePage() {
  const params = useParams();
  const courseId = params.courseId as string;
  
  const course = mockData.courses.find(c => c.id === courseId);
  const { user } = useUser();
  const firestore = useFirestore();

  const profileRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [firestore, user]);

  const { data: userProfile, isLoading: isProfileLoading } = useDoc(profileRef);

  if (!course) {
    return (
        <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Course not found</h1>
        <Card>
            <CardHeader>
            <CardTitle>Oops!</CardTitle>
            </CardHeader>
            <CardContent>
            <p>
                We couldn't find the course you're looking for.
            </p>
             <Button asChild className="mt-4">
                <Link href="/dashboard/courses">Back to Courses</Link>
            </Button>
            </CardContent>
        </Card>
        </div>
    );
  }

  if (isProfileLoading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Course: <span className="capitalize">{course.name}</span>
        </h1>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="w-full">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="mt-2 h-4 w-3/4" />
                </div>
                <Skeleton className="h-10 w-24" />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const completedLevels = userProfile?.completedLevels || [];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">
        Course: <span className="capitalize">{course.name}</span>
      </h1>
      
      {course.levels.length > 0 ? (
        <div className="space-y-4">
            {course.levels.map((level, index) => {
                const isCompleted = completedLevels.includes(level.id);
                // A level is unlocked if it's the first OR the previous level is completed.
                const isUnlocked = index === 0 || completedLevels.includes(course.levels[index - 1].id);
                const isLocked = !isUnlocked;

                return (
                    <Card key={level.id}>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="flex items-center gap-2">
                                    {isLocked ? <Lock className="h-5 w-5 text-muted-foreground" /> : <span className="text-primary">{`Level ${level.levelNumber}`}</span>}
                                    <span className={isLocked ? 'text-muted-foreground' : ''}>{level.title}</span>
                                </CardTitle>
                                <CardDescription className="mt-2">{level.description}</CardDescription>
                            </div>
                            <Button asChild disabled={isLocked}>
                                <Link href={`/dashboard/courses/${courseId}/levels/${level.id}`}>
                                    {isCompleted ? 'Review' : 'Start'} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardHeader>
                    </Card>
                );
            })}
        </div>
      ) : (
        <Card>
            <CardHeader>
            <CardTitle>Coming Soon!</CardTitle>
            </CardHeader>
            <CardContent>
            <p>
                The levels and games for this course are under construction. Check
                back soon to start your learning adventure!
            </p>
            </CardContent>
        </Card>
      )}
    </div>
  );
}
