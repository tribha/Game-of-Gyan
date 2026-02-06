'use client';

import React, { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { AlertCircle, Lightbulb, Loader2, Terminal, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { getHintAction, runCodeAction, type HintState, type RunCodeState } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useUser, useFirestore, useMemoFirebase, useDoc } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { doc, updateDoc, arrayUnion, increment, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';


type Challenge = {
  language: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  question: string;
  initialCode: string;
};

type CodeChallengeProps = {
  challenge: Challenge;
  courseId?: string;
  levelId?: string;
};

function HintSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Getting Hint...
        </>
      ) : (
        <>
          <Lightbulb className="mr-2 h-4 w-4" />
          Get Hint
        </>
      )}
    </Button>
  );
}

function RunCodeSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Run Code
    </Button>
  );
}


export function CodeChallenge({ challenge, courseId, levelId }: CodeChallengeProps) {
  const [code, setCode] = useState(challenge.initialCode);
  const [attempts, setAttempts] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const initialHintState: HintState = { hint: undefined, error: undefined };
  const [hintState, hintFormAction] = useActionState(getHintAction, initialHintState);
  
  const initialRunCodeState: RunCodeState = { stdout: undefined, stderr: undefined, error: undefined };
  const [runCodeState, runCodeFormAction] = useActionState(runCodeAction, initialRunCodeState);

  const profileRef = useMemoFirebase(() => {
    if (!user) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [firestore, user]);

  const { data: userProfile } = useDoc(profileRef);
  
  const handleHintAttempt = (formData: FormData) => {
    setAttempts(prev => prev + 1);
    hintFormAction(formData);
  }

  const handleSubmit = async () => {
    if (!user || !userProfile || !courseId || !levelId) {
      toast({
        variant: 'destructive',
        title: 'Cannot Submit',
        description: 'This is a daily challenge and does not count towards course progress.',
      });
      return;
    }

    if (userProfile.completedLevels?.includes(levelId)) {
      toast({
        title: 'Already Completed',
        description: 'You have already earned XP for this level.',
      });
       // Navigate back to the course page after a short delay
      setTimeout(() => {
        router.push(`/dashboard/courses/${courseId}`);
      }, 1500);
      return;
    }

    setIsSubmitting(true);
    try {
      const xpAmount = 50;
      // In a real app, you'd validate the code here. We'll simulate success.
      const profileUpdatePromise = updateDoc(profileRef!, {
        xp: increment(xpAmount),
        completedLevels: arrayUnion(levelId),
      });

      const xpHistoryRef = collection(firestore, 'userProfiles', user.uid, 'xpHistory');
      const xpHistoryAddPromise = addDoc(xpHistoryRef, {
        userId: user.uid,
        amount: xpAmount,
        timestamp: serverTimestamp(),
        reason: `Completed ${levelId}`,
        courseId: courseId,
        levelId: levelId
      });
      
      await Promise.all([profileUpdatePromise, xpHistoryAddPromise]);

      toast({
        title: 'Success!',
        description: `You completed the challenge and earned ${xpAmount} XP!`,
      });

      // Navigate back to the course page after a short delay
      setTimeout(() => {
        router.push(`/dashboard/courses/${courseId}`);
      }, 1500);

    } catch (error) {
      console.error('Error submitting solution:', error);
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: 'Could not save your progress. Please try again.',
      });
      setIsSubmitting(false);
    } 
  };
  
  const consoleOutput = runCodeState.stderr
    ? `❌ Error:\n\n${runCodeState.stderr}`
    : runCodeState.stdout
    ? `${runCodeState.stdout}`
    : runCodeState.error
    ? `🚨 System Error: ${runCodeState.error}`
    : '// Click "Run Code" to see the output';


  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{challenge.title}</CardTitle>
            <CardDescription>
              Language: {challenge.language} | Level: {challenge.level}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{challenge.question}</p>
          </CardContent>
        </Card>
        
        {hintState.hint && (
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Hint</AlertTitle>
            <AlertDescription>{hintState.hint}</AlertDescription>
          </Alert>
        )}
        {hintState.error && (
            <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{hintState.error}</AlertDescription>
            </Alert>
        )}
      </div>

      <div className="space-y-4">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Code Editor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="font-code h-64 min-h-[200px] bg-muted/50 text-base"
              placeholder="Write your code here..."
            />
            <div className="flex flex-wrap gap-2">
                <form action={runCodeFormAction}>
                    <input type="hidden" name="language" value={challenge.language} />
                    <input type="hidden" name="question" value={challenge.question} />
                    <input type="hidden" name="studentCode" value={code} />
                    <RunCodeSubmitButton />
                </form>

              <form action={handleHintAttempt}>
                <input type="hidden" name="language" value={challenge.language} />
                <input type="hidden" name="level" value={challenge.level} />
                <input type="hidden" name="question" value={challenge.question} />
                <input type="hidden" name="attempts" value={attempts} />
                <input type="hidden" name="studentCode" value={code} />
                <input type="hidden" name="initialCode" value={challenge.initialCode} />
                <HintSubmitButton />
              </form>
               <Button variant="secondary" onClick={handleSubmit} disabled={isSubmitting}>
                 {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                 Submit
               </Button>
            </div>
            
            <Card>
               <CardHeader className="flex flex-row items-center space-x-2 space-y-0 p-4">
                 <Terminal className="h-5 w-5"/>
                 <CardTitle className="text-base">Console</CardTitle>
               </CardHeader>
               <CardContent className="p-4 pt-0">
                <pre className="bg-muted p-4 rounded-md text-sm text-muted-foreground whitespace-pre-wrap">
                  <code>{consoleOutput}</code>
                </pre>
               </CardContent>
             </Card>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
