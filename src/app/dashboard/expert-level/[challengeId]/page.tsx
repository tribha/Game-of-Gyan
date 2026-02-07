
import { CodeChallenge } from '@/components/game/code-challenge';
import { MCQChallenge } from '@/components/game/mcq-challenge';
import { expertChallenges } from '@/lib/expert-challenges';
import { notFound } from 'next/navigation';

export default function ExpertChallengePage({ params }: { params: { challengeId: string } }) {
  const { challengeId } = params;

  const challenge = expertChallenges.find(c => c.id === challengeId);

  if (!challenge) {
    notFound();
  }
  
  return (
    <div className="container mx-auto">
       <h1 className="text-3xl font-bold tracking-tight mb-6">Expert Challenge: {challenge.title}</h1>
      {challenge.type === 'code' && (
        <CodeChallenge challenge={challenge as any} />
      )}
      {challenge.type === 'mcq' && (
        <MCQChallenge challenge={challenge as any} />
      )}
    </div>
  );
}
