'use client';
import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Lock } from 'lucide-react';
import { expertChallenges } from '@/lib/expert-challenges';
import { notFound, useParams } from 'next/navigation';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';

export default function ExpertLanguagePage() {
    const params = useParams();
    const language = params.language as string;
    const { user } = useUser();
    const firestore = useFirestore();

    const profileRef = useMemoFirebase(() => {
        if (!user) return null;
        return doc(firestore, 'userProfiles', user.uid);
    }, [firestore, user]);

    const { data: userProfile, isLoading: isProfileLoading } = useDoc(profileRef);

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
    
    if (isProfileLoading) {
        return (
             <div className="space-y-6">
                <div>
                    <Skeleton className="h-9 w-1/2" />
                    <Skeleton className="mt-2 h-5 w-3/4" />
                </div>
                 <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div className="w-full">
                            <Skeleton className="h-6 w-1/2" />
                            <Skeleton className="mt-2 h-4 w-3/4" />
                            </div>
                            <Skeleton className="h-10 w-24" />
                        </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

    const completedChallenges = userProfile?.completedExpertChallenges || [];
    const completedForLanguage = challengesForLanguage.filter(c => completedChallenges.includes(c.id)).length;
    const progress = (completedForLanguage / challengesForLanguage.length) * 100;

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

        <Card>
            <CardHeader>
                <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
                 <Progress value={progress} className="mb-2" />
                <p className="text-sm text-muted-foreground text-center">
                    {completedForLanguage} of {challengesForLanguage.length} challenges completed
                </p>
            </CardContent>
        </Card>

        <div className="space-y-4">
            {challengesForLanguage.map((challenge, index) => {
                const isCompleted = completedChallenges.includes(challenge.id);
                // A challenge is unlocked if it's the first OR the previous one is completed.
                const isUnlocked = index === 0 || completedChallenges.includes(challengesForLanguage[index - 1].id);
                const isLocked = !isUnlocked;

                return (
                    <Card key={challenge.id}>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="flex items-center gap-2">
                                     {isLocked ? <Lock className="h-5 w-5 text-muted-foreground" /> : isCompleted ? <CheckCircle className="h-5 w-5 text-green-500" /> : <span className="text-primary">{`Level ${index + 1}`}</span>}
                                    <span className={isLocked ? 'text-muted-foreground' : ''}>{challenge.title.split(': ')[1]}</span>
                                </CardTitle>
                                <CardDescription className="mt-2">{challenge.description}</CardDescription>
                            </div>
                            <Button asChild disabled={isLocked}>
                                <Link href={`/dashboard/expert-level/challenge/${challenge.id}`}>
                                    {isCompleted ? 'Review' : 'Start'} <ArrowRight className="ml-2 h-4 w-4" />
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
