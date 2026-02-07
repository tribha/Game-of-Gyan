import { CodeChallenge } from '@/components/game/code-challenge';
import { MCQChallenge } from '@/components/game/mcq-challenge';
import { dailyChallenges } from '@/lib/daily-challenges';

export default function DailyChallengePage() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now as any) - (start as any);
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const dailyChallenge = dailyChallenges[dayOfYear % dailyChallenges.length];
  
  return (
    <div className="container mx-auto">
       <h1 className="text-3xl font-bold tracking-tight mb-6">Today's Challenge</h1>
      {dailyChallenge.type === 'code' && (
        <CodeChallenge challenge={dailyChallenge as any} />
      )}
      {dailyChallenge.type === 'mcq' && (
        <MCQChallenge challenge={dailyChallenge as any} />
      )}
    </div>
  );
}
