
'use client';

import React, { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { AlertCircle, Lightbulb, Loader2, Terminal, CheckCircle, ChevronLeft } from 'lucide-react';
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
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { doc, updateDoc, arrayUnion, increment, collection, addDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { expertChallenges } from '@/lib/expert-challenges';
import Link from 'next/link';
import { mockData } from '@/lib/mock-data';


type CodeChallengeType = {
  id: string;
  type: 'code';
  language: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  content: {
    question: string;
    initialCode: string;
  }
};

type CodeChallengeProps = {
  challenge: CodeChallengeType;
  courseId?: string;
  levelId?: string;
};

function HintSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="outline" disabled={pending}>
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

function RunCodeSubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={disabled ? 'cursor-not-allowed' : ''}>
            <Button type="submit" disabled={pending || disabled} className={disabled ? 'pointer-events-none' : ''}>
              {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Run Code
            </Button>
          </div>
        </TooltipTrigger>
        {disabled && (
          <TooltipContent>
            <p>In-browser execution is only supported for JavaScript.</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}


export function CodeChallenge({ challenge, courseId, levelId }: CodeChallengeProps) {
  const [code, setCode] = useState(challenge.content.initialCode);
  const [attempts, setAttempts] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

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

  const isExpertChallenge = challenge?.id?.startsWith('expert-');
  
  const handleHintAttempt = (formData: FormData) => {
    setAttempts(prev => prev + 1);
    hintFormAction(formData);
  }

  const handleSubmit = async () => {
    if (!user || !profileRef) {
      toast({ variant: 'destructive', title: 'Not logged in' });
      return;
    }

    if (!isExpertChallenge && (!courseId || !levelId)) {
      toast({
        variant: 'destructive',
        title: 'Cannot Submit',
        description: 'This challenge does not count towards course progress.',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const profileSnap = await getDoc(profileRef);
      const profileData = profileSnap.data();

      const completionId = isExpertChallenge ? challenge.id : levelId!;
      const completedItems = isExpertChallenge
        ? profileData?.completedExpertChallenges
        : profileData?.completedLevels;
      
      const alreadyCompleted = completedItems?.includes(completionId);

      if (alreadyCompleted) {
        toast({
          title: 'Already Completed',
          description: 'You have already earned XP for this challenge.',
        });
        setIsCompleted(true);
      } else {
        const xpAmount = isExpertChallenge ? 100 : 50;
        const updateField = isExpertChallenge ? 'completedExpertChallenges' : 'completedLevels';
        const reason = isExpertChallenge ? `Completed expert challenge ${completionId}` : `Completed ${levelId}`;

        // In a real app, you'd validate the code here. We'll simulate success.
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
        
        setIsCompleted(true);
        toast({
          title: 'Success!',
          description: `You completed the challenge and earned ${xpAmount} XP!`,
        });
      }

      // Navigate back after a short delay
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
            const course = mockData.courses.find(c => c.id === courseId);
            if (course && levelId) {
                const currentIndex = course.levels.findIndex(l => l.id === levelId);
                const nextLevel = course.levels[currentIndex + 1];

                if (nextLevel) {
                    router.push(`/dashboard/courses/${courseId}/levels/${nextLevel.id}`);
                } else {
                    // Last level, complete the course
                    if (profileRef) {
                         (async () => {
                            const profileSnap = await getDoc(profileRef);
                            const courseIsCompleted = profileSnap.data()?.completedCourses?.includes(courseId);
                            if (!courseIsCompleted) {
                                await updateDoc(profileRef, {
                                    completedCourses: arrayUnion(courseId)
                                });
                                toast({ title: "Course Complete!", description: `Congratulations! You've finished the ${course.name} course!` });
                            }
                         })();
                    }
                    router.push(`/dashboard/courses/${courseId}`);
                }
            } else {
                // Fallback
                router.push(`/dashboard/courses/${courseId}`);
            }
        }
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

  const isRunCodeDisabled = challenge.language !== 'javascript';

  const backLink = isExpertChallenge ? `/dashboard/expert-level/series/${challenge.language}` : `/dashboard/courses/${courseId}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        {isExpertChallenge && (
        <div className="flex items-center gap-4">
           <Button asChild variant="outline" size="icon">
              <Link href={backLink}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">{challenge.title}</h1>
        </div>
      )}
        <Card>
          <CardHeader>
            {!isExpertChallenge && <CardTitle className="text-2xl">{challenge.title}</CardTitle>}
            <CardDescription>
              Language: {challenge.language} | Level: {challenge.level}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{challenge.content.question}</p>
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
                    <input type="hidden" name="question" value={challenge.content.question} />
                    <input type="hidden" name="studentCode" value={code} />
                    <RunCodeSubmitButton disabled={isRunCodeDisabled}/>
                </form>

              <form action={handleHintAttempt}>
                <input type="hidden" name="language" value={challenge.language} />
                <input type="hidden" name="level" value={challenge.level} />
                <input type="hidden" name="question" value={challenge.content.question} />
                <input type="hidden" name="attempts" value={attempts} />
                <input type="hidden" name="studentCode" value={code} />
                <input type="hidden" name="initialCode" value={challenge.content.initialCode} />
                <HintSubmitButton />
              </form>
               <Button variant="secondary" onClick={handleSubmit} disabled={isSubmitting || isCompleted}>
                 {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                 {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" /> Completed</> : 'Submit'}
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
