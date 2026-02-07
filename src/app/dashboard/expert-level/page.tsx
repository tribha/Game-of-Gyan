
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, ListChecks } from 'lucide-react';
import { expertChallenges } from '@/lib/expert-challenges';
import { Badge } from '@/components/ui/badge';

export default function ExpertLevelPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Expert Level Challenges
        </h1>
        <p className="text-muted-foreground">
          Test your skills with these advanced, built-in coding challenges.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {expertChallenges.map((challenge) => (
          <Card key={challenge.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  {challenge.type === 'code' ? <Code className="h-6 w-6" /> : <ListChecks className="h-6 w-6" />}
                  <span>{challenge.title}</span>
                </CardTitle>
                 <Badge variant="secondary" className="capitalize">{challenge.language}</Badge>
              </div>
              <CardDescription>{challenge.description}</CardDescription>
            </CardHeader>
             <CardContent className="mt-auto">
              <Button asChild className="w-full">
                <Link href={`/dashboard/expert-level/${challenge.id}`}>
                  Start Challenge <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
