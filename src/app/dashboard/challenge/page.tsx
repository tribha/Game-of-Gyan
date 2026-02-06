import { CodeChallenge } from '@/components/game/code-challenge';
import { MCQChallenge } from '@/components/game/mcq-challenge';
import { mockData } from '@/lib/mock-data';

export default function DailyChallengePage() {
  const dailyChallenge = mockData.dailyChallenge;
  
  return (
    <div className="container mx-auto">
      {dailyChallenge.type === 'code' && (
        <CodeChallenge challenge={dailyChallenge} />
      )}
      {dailyChallenge.type === 'mcq' && (
        <MCQChallenge challenge={dailyChallenge} />
      )}
    </div>
  );
}
