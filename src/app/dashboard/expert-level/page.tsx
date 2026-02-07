
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ExpertLevelPage() {
    const expertGames = [
        {
            language: 'cplusplus',
            name: 'C++ Daily Routine',
            description: 'A day in the life of a C++ programmer. Complete daily tasks using your coding skills.',
            href: '/dashboard/expert-level/series/cplusplus',
            image: PlaceHolderImages.find(p => p.id === 'expert-c-game'),
        },
        {
            language: 'java',
            name: 'Java Daily Routine',
            description: 'Live a day as a Java developer. Solve real-world problems with your code.',
            href: '/dashboard/expert-level/series/java',
            image: PlaceHolderImages.find(p => p.id === 'course-java')
        }
    ]
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
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {expertGames.map((game) => (
          <Card key={game.language} className="flex flex-col">
            {game.image && (
                 <div className="relative h-48 w-full">
                    <Image
                    src={game.image.imageUrl}
                    alt={game.image.description}
                    data-ai-hint={game.image.imageHint}
                    fill
                    className="object-cover rounded-t-lg"
                    />
                </div>
            )}
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6" />
                  <span>{game.name}</span>
                </CardTitle>
                <CardDescription>{game.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button asChild className="w-full">
                <Link href={game.href}>
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
