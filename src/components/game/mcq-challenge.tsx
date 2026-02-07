
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { doc, updateDoc, arrayUnion, increment, collection, addDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { expertChallenges } from '@/lib/expert-challenges';

// Define the shape of the MCQ challenge
type MCQChallengeType = {
  id: string;
  type: 'mcq';
  language: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  content: {
    question: string;
    options: string[];
    answer: number;
  }
};

type MCQChallengeProps = {
  challenge: MCQChallengeType;
  courseId?: string;
  levelId?: string;
};

export function MCQChallenge({ challenge, courseId, levelId }: MCQChallengeProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'correct' | 'incorrect' | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const { user } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const profileRef = useMemoFirebase(() => {
    if (!user) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [firestore, user]);

  const isExpertChallenge = challenge.id.startsWith('expert-');

  useEffect(() => {
    const checkCompletion = async () => {
      if (profileRef) {
        const profileSnap = await getDoc(profileRef);
        const profileData = profileSnap.data();
        const completedItems = isExpertChallenge 
            ? profileData?.completedExpertChallenges 
            : profileData?.completedLevels;
        const currentId = isExpertChallenge ? challenge.id : levelId;

        if (completedItems?.includes(currentId)) {
          setIsCompleted(true);
        }
      }
    };
    checkCompletion();
  }, [profileRef, levelId, challenge.id, isExpertChallenge]);


  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setSubmissionStatus(null); // Reset status when user changes their answer
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
    
    if (!user || !profileRef) {
      toast({
        variant: 'destructive',
        title: 'Not logged in',
        description: 'You must be logged in to submit a challenge.',
      });
      return;
    }

    if (!isExpertChallenge && (!courseId || !levelId)) {
      toast({
        variant: 'destructive',
        title: 'Cannot Submit',
        description: 'This appears to be a standalone challenge and does not count towards course progress.',
      });
      return;
    }
    
    setIsSubmitting(true);

    const selectedIndex = challenge.content.options.indexOf(selectedOption);
    const isCorrect = selectedIndex === challenge.content.answer;

    if (isCorrect) {
      setSubmissionStatus('correct');
      try {
        const xpAmount = isExpertChallenge ? 75 : 25;
        const completionId = isExpertChallenge ? challenge.id : levelId!;
        const reason = isExpertChallenge ? `Completed expert challenge ${completionId}` : `Completed ${levelId}`;
        const updateField = isExpertChallenge ? 'completedExpertChallenges' : 'completedLevels';

        if (!isCompleted) {
            const profileUpdatePromise = updateDoc(profileRef, {
                xp: increment(xpAmount),
                [updateField]: arrayUnion(completionId),
            });

            const xpHistoryRef = collection(firestore, 'userProfiles', user.uid, 'xpHistory');
            const xpEntry: { [key: string]: any } = {
                userId: user.uid,
                amount: xpAmount,
                timestamp: serverTimestamp(),
                reason: reason,
            };

            if (courseId && !isExpertChallenge) xpEntry.courseId = courseId;
            if (levelId && !isExpertChallenge) xpEntry.levelId = levelId;
            
            const xpHistoryAddPromise = addDoc(xpHistoryRef, xpEntry);
            
            await Promise.all([profileUpdatePromise, xpHistoryAddPromise]);

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
          if (isExpertChallenge) {
            const challengesForLanguage = expertChallenges.filter(c => c.language === challenge.language);
            const currentIndex = challengesForLanguage.findIndex(c => c.id === challenge.id);
            const nextChallenge = challengesForLanguage[currentIndex + 1];

            if (nextChallenge) {
              router.push(`/dashboard/expert-level/challenge/${nextChallenge.id}`);
            } else {
              // Last challenge completed, go back to series page
              toast({ title: "Series Complete!", description: "Congratulations, you've completed all challenges in this series!" });
              router.push(`/dashboard/expert-level/series/${challenge.language}`);
            }
          } else {
            router.push(`/dashboard/courses/${courseId}`);
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
        description: 'That\'s not quite right. Try again!',
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{challenge.title}</CardTitle>
          <CardDescription>
            Language: {challenge.language} | Level: {challenge.level}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{challenge.content.question}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Your Answer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup value={selectedOption ?? undefined} onValueChange={handleOptionChange} className="space-y-2">
            {challenge.content.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-md border border-transparent has-[:checked]:border-primary has-[:checked]:bg-accent transition-all">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="font-mono text-base flex-1 cursor-pointer">{option}</Label>
              </div>
            ))}
          </RadioGroup>
          <Button onClick={handleSubmit} disabled={isSubmitting || isCompleted}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isCompleted ? <><CheckCircle className="mr-2" /> Completed</> : 'Submit'}
          </Button>

          {submissionStatus === 'correct' && (
             <Alert variant="default" className="border-green-500 text-green-700 dark:text-green-400">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <AlertTitle>Correct!</AlertTitle>
                <AlertDescription>Great job! You're on your way to the next level.</AlertDescription>
             </Alert>
          )}

          {submissionStatus === 'incorrect' && (
             <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Not Quite</AlertTitle>
                <AlertDescription>Give it another thought and try again.</AlertDescription>
             </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
