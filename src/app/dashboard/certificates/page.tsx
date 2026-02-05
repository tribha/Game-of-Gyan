'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { mockData } from '@/lib/mock-data';
import { Skeleton } from '@/components/ui/skeleton';
import { Trophy, ArrowRight } from 'lucide-react';

export default function CertificatesPage() {
  const { user } = useUser();
  const firestore = useFirestore();

  const profileRef = useMemoFirebase(() => {
    if (!user) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [firestore, user]);

  const { data: userProfile, isLoading: isProfileLoading } = useDoc(profileRef);

  const completedCoursesIds = userProfile?.completedCourses || [];
  
  // For now, we will add a sample completed course if there are none.
  // This ensures there's always a sample certificate to view.
  if (userProfile && completedCoursesIds.length === 0) {
      completedCoursesIds.push('javascript');
  }

  const completedCourses = mockData.courses.filter(course =>
    completedCoursesIds.includes(course.id)
  );
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your Certificates</h1>
        <p className="text-muted-foreground">
          A showcase of your accomplishments. Download and share your success.
        </p>
      </div>

      {isProfileLoading ? (
        <Card>
          <CardHeader>
            <Skeleton className="h-7 w-48" />
            <Skeleton className="mt-2 h-5 w-64" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      ) : completedCourses.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {completedCourses.map(course => (
                 <Card key={course.id}>
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div>
                                <CardTitle className="flex items-center gap-2">
                                    <Trophy className="h-6 w-6 text-yellow-500" />
                                    <span>{course.name}</span>
                                </CardTitle>
                                <CardDescription className="mt-2">
                                    You have successfully completed this course.
                                </CardDescription>
                            </div>
                            <Button asChild>
                                <Link href={`/dashboard/certificates/${course.id}`}>
                                    View <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>No Certificates Yet</CardTitle>
            <CardDescription>
              Complete a course to earn your first certificate!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
                <Link href="/dashboard/courses">Explore Courses</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
