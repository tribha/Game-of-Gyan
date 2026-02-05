'use client';

import { GameOfGyanLogo } from '@/components/icons';
import { format } from 'date-fns';

type CertificateProps = {
  studentName: string;
  courseName: string;
  completionDate: Date;
};

export function Certificate({
  studentName,
  courseName,
  completionDate,
}: CertificateProps) {
  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-2xl p-8 max-w-4xl mx-auto border-4 border-primary">
      <div className="border-2 border-primary p-6 relative">
        <div className="flex justify-center mb-4">
          <GameOfGyanLogo className="h-20 w-20 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-center text-primary tracking-wider mb-2">
          Game of Gyan
        </h1>
        <h2 className="text-2xl font-semibold text-center text-gray-600 mb-6">
          Certificate of Completion
        </h2>
        <p className="text-center text-lg text-gray-500 mb-6">
          This certificate is proudly presented to
        </p>
        <p className="text-center font-special text-7xl mb-6" style={{color: 'hsl(var(--accent))'}}>
          {studentName}
        </p>
        <p className="text-center text-lg text-gray-500 mb-6">
          for successfully completing the course
        </p>
        <p className="text-center text-3xl font-semibold text-primary mb-8">
          {courseName}
        </p>
        <div className="flex justify-between items-end">
          <div className="text-center">
            <p className="text-lg font-semibold border-t-2 border-gray-400 px-4 pt-2">
              Date
            </p>
            <p className="text-md text-gray-600">
              {format(completionDate, 'MMMM do, yyyy')}
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold border-t-2 border-gray-400 px-4 pt-2">
              Signature
            </p>
            <p className="text-md text-gray-600 font-headline">The Game of Gyan Team</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-primary"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-primary"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary"></div>
      </div>
    </div>
  );
}
