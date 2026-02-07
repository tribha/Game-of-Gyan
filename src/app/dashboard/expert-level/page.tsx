
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const expertGames = [
  {
    id: 'codedex',
    title: 'Codedex',
    description:
      'Learn HTML, CSS, and Javascript by building real-world projects in this interactive coding game.',
    href: 'https://www.codedex.io/',
    imageId: 'expert-codedex',
    language: 'HTML',
  },
  {
    id: 'flexbox-froggy',
    title: 'Flexbox Froggy',
    description:
      'A fun game to help you learn CSS flexbox. Guide Froggy and friends to their lilypads!',
    href: 'https://flexboxfroggy.com/',
    imageId: 'expert-flexbox-froggy',
    language: 'CSS',
  },
  {
    id: 'elevator-saga',
    title: 'Elevator Saga',
    description:
      'Program the movement of elevators by writing a JavaScript algorithm to transport people efficiently.',
    href: 'https://play.elevatorsaga.com/',
    imageId: 'expert-elevator-saga',
    language: 'JavaScript',
  },
  {
    id: 'learn-git-branching',
    title: 'Learn Git Branching',
    description:
      'Master Git with this interactive game that visualizes complex commands like branching, merging, and rebasing.',
    href: 'https://learngitbranching.js.org/',
    imageId: 'expert-learn-git',
    language: 'Git',
  },
  {
    id: 'codingame',
    title: 'CodinGame',
    description:
      'An advanced platform where you solve complex challenges and programming puzzles in C, C++, and more.',
    href: 'https://www.codingame.com/',
    imageId: 'expert-c-game',
    language: 'C / C++',
  },
];

export default function ExpertLevelPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Expert Level Games
        </h1>
        <p className="text-muted-foreground">
          Challenge yourself with these advanced coding games from around the
          web.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {expertGames.map((game) => {
          const image = PlaceHolderImages.find((p) => p.id === game.imageId);
          return (
            <Card key={game.id} className="flex flex-col overflow-hidden">
              {image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={image.imageUrl}
                    alt={game.title}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{game.title}</CardTitle>
                  <Badge variant="secondary">{game.language}</Badge>
                </div>
                <CardDescription>{game.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className="w-full">
                  <a
                    href={game.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Now <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
