import { FindTheErrorChallenge } from '@/components/game/find-the-error-challenge';
import { hardChallenges } from '@/lib/hard-challenges';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default async function ExpertChallengePage({ params }: { params: Promise<{ challengeId: string }> }) {
  const { challengeId } = await params;

  const challenge = hardChallenges.find(c => c.id === challengeId);

  if (!challenge) {
    notFound();
  }
  
  return (
    <div className="container mx-auto">
       <div className="flex items-center gap-4 mb-6">
         <Button asChild variant="outline" size="icon">
            <Link href={`/dashboard/courses/hard/${challenge.language}`}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back to challenges</span>
            </Link>
          </Button>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Hard Mode: {challenge.title}</h1>
      </div>
      <FindTheErrorChallenge challenge={challenge} />
    </div>
  );
}
