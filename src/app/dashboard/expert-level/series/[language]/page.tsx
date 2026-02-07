
import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { expertChallenges } from '@/lib/expert-challenges';
import { notFound } from 'next/navigation';

export default function ExpertLanguagePage({ params }: { params: { language: string } }) {
    const { language } = params;

    const challengesForLanguage = expertChallenges.filter(c => c.language === language);

    if (challengesForLanguage.length === 0) {
        notFound();
    }

    const getLanguageName = (lang: string) => {
        switch (lang) {
            case 'cplusplus': return 'C++';
            case 'c': return 'C';
            case 'java': return 'Java';
            default: return lang;
        }
    };

    const languageName = getLanguageName(language);

    return (
        <div className="space-y-6">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">
            Expert Challenge: {languageName} Daily Routine
            </h1>
            <p className="text-muted-foreground">
            Complete the levels to finish the daily routine.
            </p>
        </div>
        <div className="space-y-4">
            {challengesForLanguage.map((challenge, index) => {
                return (
                    <Card key={challenge.id}>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="flex items-center gap-2">
                                     <span className="text-primary">{`Level ${index + 1}`}</span>
                                    <span>{challenge.title.split(': ')[1]}</span>
                                </CardTitle>
                                <CardDescription className="mt-2">{challenge.description}</CardDescription>
                            </div>
                            <Button asChild>
                                <Link href={`/dashboard/expert-level/challenge/${challenge.id}`}>
                                    Start <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardHeader>
                    </Card>
                );
            })}
        </div>
        </div>
    );
}
