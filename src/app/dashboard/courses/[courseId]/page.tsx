
'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { mockData } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock } from 'lucide-react';

export default function CoursePage() {
  const params = useParams();
  const courseId = params.courseId as string;
  
  const course = mockData.courses.find(c => c.id === courseId);

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

  // For now, let's assume the first level is unlocked and others are locked.
  const completedLevels = 0; // This would come from user data later.

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">
        Course: <span className="capitalize">{course.name}</span>
      </h1>
      
      {course.levels.length > 0 ? (
        <div className="space-y-4">
            {course.levels.map((level, index) => {
                const isLocked = index > completedLevels;
                const isCompleted = index < completedLevels;

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
