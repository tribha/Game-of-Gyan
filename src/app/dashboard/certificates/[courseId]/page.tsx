'use client';

import { Certificate } from '@/components/certificate/certificate';
import { mockData } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';

export default function CertificateDisplayPage({ params }: { params: { courseId: string } }) {
  const { courseId } = params;
  const { user } = useUser();
  const firestore = useFirestore();

  const profileRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [firestore, user]);

  const { data: userProfile, isLoading: isProfileLoading } = useDoc(profileRef);

  // Find the course from mock data
  const course = mockData.courses.find(c => c.id === courseId);
  if (!course) {
    notFound();
  }
  
  const completionDate = new Date();
  
  if (isProfileLoading || !userProfile) {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-2xl p-8 max-w-4xl mx-auto border-4 border-primary">
                <Skeleton className="h-96 w-full" />
            </div>
        </div>
    )
  }

  const studentName = userProfile?.name || user?.email || 'Student';

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <Certificate 
        studentName={studentName}
        courseName={course.name}
        completionDate={completionDate}
      />
    </div>
  );
}
