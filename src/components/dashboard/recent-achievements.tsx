import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type Achievement = {
  id: string;
  name: string;
  date: string;
  iconUrl: string;
  imageHint: string;
};

export function RecentAchievements({ achievements }: { achievements: Achievement[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Achievements</CardTitle>
        <CardDescription>Your collection of conquered challenges.</CardDescription>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="flex space-x-4">
            {achievements.slice(0, 5).map((achievement) => (
              <Tooltip key={achievement.id}>
                <TooltipTrigger>
                  <div className="flex flex-col items-center gap-2">
                    <Image
                      src={achievement.iconUrl}
                      alt={achievement.name}
                      width={64}
                      height={64}
                      className="rounded-full border-2 border-primary/50 transition-transform hover:scale-110"
                      data-ai-hint={achievement.imageHint}
                    />
                     <span className="text-xs text-muted-foreground">{achievement.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">{achievement.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Unlocked on {achievement.date}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
