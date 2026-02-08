import { Certificate } from '@/components/certificate/certificate';

export default function SampleCertificatePage() {
  const studentName = 'Your Name';
  const completionDate = new Date();
  const courseName = 'Sample Course';

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <Certificate
        studentName={studentName}
        courseName={courseName}
        completionDate={completionDate}
      />
    </div>
  );
}
