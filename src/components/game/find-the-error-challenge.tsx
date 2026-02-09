
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle, 
  XCircle, 
  Loader2, 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { doc, updateDoc, arrayUnion, increment, collection, addDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { hardChallenges } from '@/lib/hard-challenges';

// Define the shape of the challenge
type FindTheErrorChallengeType = {
  id: string;
  language: string;
  title: string;
  description: string;
  code: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type FindTheErrorChallengeProps = {
  challenge: FindTheErrorChallengeType;
};

export function FindTheErrorChallenge({ challenge }: FindTheErrorChallengeProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'correct' | 'incorrect' | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const { user } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const profileRef = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [firestore, user]);

  useEffect(() => {
    const checkCompletion = async () => {
      if (profileRef && firestore) {
        const profileSnap = await getDoc(profileRef);
        const profileData = profileSnap.data();
        const completedItems = profileData?.completedHardChallenges;
        if (challenge.id && completedItems?.includes(challenge.id)) {
          setIsCompleted(true);
        }
      }
    };
    checkCompletion();
  }, [profileRef, firestore, challenge.id]);


  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setSubmissionStatus(null);
  };

  const handleSubmit = async () => {
    if (selectedOption === null) {
      toast({
        variant: 'destructive',
        title: 'No answer selected',
        description: 'Please select an option before submitting.',
      });
      return;
    }
    
    if (!user || !profileRef || !firestore) {
      toast({
        variant: 'destructive',
        title: 'Not logged in',
        description: 'You must be logged in to submit a challenge.',
      });
      return;
    }
    
    setIsSubmitting(true);

    const selectedIndex = challenge.options.indexOf(selectedOption);
    const isCorrect = selectedIndex === challenge.correctAnswer;

    if (isCorrect) {
      setSubmissionStatus('correct');
      try {
        if (!isCompleted) {
            const xpAmount = 100; 
            const updatePromise = updateDoc(profileRef, {
                xp: increment(xpAmount),
                completedHardChallenges: arrayUnion(challenge.id),
            });

            const xpHistoryRef = collection(firestore, 'userProfiles', user.uid, 'xpHistory');
            const xpHistoryPromise = addDoc(xpHistoryRef, {
                userId: user.uid,
                amount: xpAmount,
                timestamp: serverTimestamp(),
                reason: `Completed hard challenge: ${challenge.title}`,
            });

            await Promise.all([updatePromise, xpHistoryPromise]);

            toast({
                title: 'Correct!',
                description: `You earned ${xpAmount} XP!`,
            });
            setIsCompleted(true);
        } else {
             toast({
                title: 'Correct!',
                description: `You have already completed this challenge.`,
            });
        }
        
        setTimeout(() => {
           const challengesForLanguage = hardChallenges.filter(c => c.language === challenge.language);
           const currentIndex = challengesForLanguage.findIndex(c => c.id === challenge.id);
           const nextChallenge = challengesForLanguage[currentIndex + 1];

           if (nextChallenge) {
             router.push(`/dashboard/courses/hard/challenge/${nextChallenge.id}`);
           } else {
             toast({ title: "Series Complete!", description: "Congratulations, you've completed all 'Find the Error' challenges for this language!" });
             router.push(`/dashboard/courses/hard/${challenge.language}`);
           }
        }, 1500);

      } catch (error) {
        console.error('Error submitting solution:', error);
        toast({
          variant: 'destructive',
          title: 'Submission Failed',
          description: 'Could not save your progress. Please try again.',
        });
      } finally {
        setIsSubmitting(false);
      }

    } else {
      setSubmissionStatus('incorrect');
      toast({
        variant: 'destructive',
        title: 'Incorrect',
        description: "That's not quite right. Look closely and try again!",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <pre className="bg-muted p-4 rounded-md text-sm text-muted-foreground whitespace-pre-wrap font-code">
                        <code>{challenge.code}</code>
                    </pre>
                </CardContent>
            </Card>

             {submissionStatus === 'correct' && (
                <Alert variant="default" className="border-green-500 text-green-700 dark:text-green-400">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertTitle>Correct!</AlertTitle>
                    <AlertDescription>{challenge.explanation}</AlertDescription>
                </Alert>
            )}

            {submissionStatus === 'incorrect' && (
                <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertTitle>Not Quite</AlertTitle>
                    <AlertDescription>That's not the right error. Give it another thought and try again.</AlertDescription>
                </Alert>
            )}
        </div>
      
        <Card>
            <CardHeader>
            <CardTitle>Which of the following best describes the error?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <RadioGroup value={selectedOption ?? undefined} onValueChange={handleOptionChange} className="space-y-2">
                {challenge.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-md border border-transparent has-[:checked]:border-primary has-[:checked]:bg-accent transition-all">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="text-base flex-1 cursor-pointer">{option}</Label>
                </div>
                ))}
            </RadioGroup>
            <Button onClick={handleSubmit} disabled={isSubmitting || isCompleted}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isCompleted ? <><CheckCircle className="mr-2" /> Completed</> : 'Submit'}
            </Button>
            </CardContent>
        </Card>
    </div>
  );
}

    