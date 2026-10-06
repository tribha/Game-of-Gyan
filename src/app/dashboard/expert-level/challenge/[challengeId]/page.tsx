import { CodeChallenge } from '@/components/game/code-challenge';
import { MCQChallenge } from '@/components/game/mcq-challenge';
import { expertChallenges } from '@/lib/expert-challenges';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default async function ExpertChallengePage({ params }: { params: Promise<{ challengeId: string }> }) {
  const { challengeId } = await params;

  const challenge = expertChallenges.find(c => c.id === challengeId);

  if (!challenge) {
    notFound();
  }
  
  return (
    <div className="container mx-auto">
       <div className="flex items-center gap-4 mb-6">
         <Button asChild variant="outline" size="icon">
            <Link href={`/dashboard/expert-level/series/${challenge.language}`}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back to challenges</span>
            </Link>
          </Button>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Expert Challenge: {challenge.title}</h1>
      </div>
      {challenge.type === 'code' && (
        <CodeChallenge challenge={challenge as any} />
      )}
      {challenge.type === 'mcq' && (
        <MCQChallenge challenge={challenge as any} />
      )}
    </div>
  );
}
