import { Certificate } from '@/components/certificate/certificate';
import { mockData } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

// This is a server component for simplicity, as we're using mock data.
export default function CertificateDisplayPage({ params }: { params: { courseId: string } }) {
  const { courseId } = params;

  // Find the course from mock data
  const course = mockData.courses.find(c => c.id === courseId);
  if (!course) {
    notFound();
  }
  
  // For the sample, we'll hardcode the name and use the current date.
  const studentName = 'Tribha';
  const completionDate = new Date();

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
