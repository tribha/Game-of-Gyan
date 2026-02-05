'use client';

import React, { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { AlertCircle, Lightbulb, Loader2, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { getHintAction, type HintState } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { doc, updateDoc, arrayUnion, increment } from 'firebase/firestore';


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

function SubmitButton() {
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


export function CodeChallenge({ challenge, courseId, levelId }: CodeChallengeProps) {
  const [code, setCode] = useState(challenge.initialCode);
  const [output, setOutput] = useState('// Click "Run Code" to see the output');
  const [attempts, setAttempts] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const initialState: HintState = { hint: undefined, error: undefined };
  const [state, formAction] = useActionState(getHintAction, initialState);

  const profileRef = useMemoFirebase(() => {
    if (!user) return null;
    return doc(firestore, 'userProfiles', user.uid);
  }, [firestore, user]);

  const { data: userProfile } = useDoc(profileRef);

  const handleRunCode = () => {
    try {
      // This is not a real execution environment. It only checks for JavaScript syntax errors.
      // A real execution would require a sandboxed environment and test cases for each language.
      // For non-JavaScript languages, this check will likely result in a syntax error,
      // which is an acceptable fallback as the browser can only execute JavaScript.
      new Function(code);
      setOutput('✅ JavaScript syntax is valid.\n\n(Note: This is a syntax check only. It does not run your code or check for correct logic.)');
    } catch (e: any) {
      setOutput(`❌ Error in your code:\n\n${e.name}: ${e.message}`);
    }
  };
  
  const handleAttempt = (formData: FormData) => {
    setAttempts(prev => prev + 1);
    formAction(formData);
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
      return;
    }

    setIsSubmitting(true);
    try {
      // In a real app, you'd validate the code here. We'll simulate success.
      await updateDoc(profileRef!, {
        xp: increment(50),
        completedLevels: arrayUnion(levelId),
      });

      toast({
        title: 'Success!',
        description: 'You completed the challenge and earned 50 XP!',
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
        
        {state.hint && (
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Hint</AlertTitle>
            <AlertDescription>{state.hint}</AlertDescription>
          </Alert>
        )}
        {state.error && (
            <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
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
              <Button onClick={handleRunCode}>Run Code</Button>
              <form action={handleAttempt}>
                <input type="hidden" name="language" value={challenge.language} />
                <input type="hidden" name="level" value={challenge.level} />
                <input type="hidden" name="question" value={challenge.question} />
                <input type="hidden" name="attempts" value={attempts} />
                <input type="hidden" name="studentCode" value={code} />
                <input type="hidden" name="initialCode" value={challenge.initialCode} />
                <SubmitButton />
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
                  <code>{output}</code>
                </pre>
               </CardContent>
             </Card>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
