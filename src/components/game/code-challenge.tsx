'use client';

import { useState, useTransition } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
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

type Challenge = {
  language: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  question: string;
  initialCode: string;
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


export function CodeChallenge({ challenge }: { challenge: Challenge }) {
  const [code, setCode] = useState(challenge.initialCode);
  const [output, setOutput] = useState('// Click "Run Code" to see the output');
  const [attempts, setAttempts] = useState(0);

  const initialState: HintState = { hint: undefined, error: undefined };
  const [state, formAction] = useFormState(getHintAction, initialState);

  const handleRunCode = () => {
    setOutput('Simulating code execution...\nOutput: [2, 1] (example)');
  };
  
  const handleAttempt = (formData: FormData) => {
    setAttempts(prev => prev + 1);
    formAction(formData);
  }

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
                <SubmitButton />
              </form>
               <Button variant="secondary">Submit</Button>
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
