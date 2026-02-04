import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type Course = {
  id: string;
  name: string;
  progress: number;
};

export function InProgressCourses({ courses }: { courses: Course[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>In Progress</CardTitle>
        <CardDescription>Continue your learning journey.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{course.name}</span>
                <span className="text-sm text-muted-foreground">{course.progress}%</span>
              </div>
              <Progress value={course.progress} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
