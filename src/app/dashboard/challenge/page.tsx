import { CodeChallenge } from '@/components/game/code-challenge';
import { mockData } from '@/lib/mock-data';

export default function DailyChallengePage() {
  return (
    <div className="container mx-auto">
      <CodeChallenge challenge={mockData.dailyChallenge} />
    </div>
  );
}
