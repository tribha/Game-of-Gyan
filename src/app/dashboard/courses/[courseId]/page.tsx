
'use client';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CoursePage() {
  const params = useParams();
  const courseId = params.courseId as string;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">
        Course: <span className="capitalize">{courseId.replace('-', ' ')}</span>
      </h1>
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
    </div>
  );
}
