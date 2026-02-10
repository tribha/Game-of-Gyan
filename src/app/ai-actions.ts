'use server';

import { getSmartHint } from '@/ai/flows/smart-hint-system';
import { runCode } from '@/ai/flows/run-code';
import { chatWithBot, type ChatbotInput } from '@/ai/flows/chatbot';
import { z } from 'zod';

// Hint Action
const SmartHintActionSchema = z.object({
  language: z.string(),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  question: z.string(),
  attempts: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(0)
  ),
  studentCode: z.string(),
  initialCode: z.string(),
});

export type HintState = {
  hint?: string | null;
  error?: string;
};

export async function getHintAction(
  prevState: HintState,
  formData: FormData
): Promise<HintState> {
  try {
    const validatedDataResult = SmartHintActionSchema.safeParse({
      language: formData.get('language'),
      level: formData.get('level'),
      question: formData.get('question'),
      attempts: formData.get('attempts'),
      studentCode: formData.get('studentCode'),
      initialCode: formData.get('initialCode'),
    });
    
    if (!validatedDataResult.success) {
      return { error: 'Invalid input for hint generation.' };
    }

    const validatedData = validatedDataResult.data;
    const result = await getSmartHint(validatedData);
    
    if (result.hint) {
        return { hint: result.hint };
    } else {
        const attempts = validatedData.attempts;
        if (validatedData.studentCode.trim() === validatedData.initialCode.trim() || !validatedData.studentCode.trim()) {
          return { hint: "It looks like you haven't written any code yet. Give it a try before asking for a hint!" };
        }
        if (attempts < 2) {
            return { hint: "Good start! Keep trying! You're on the right track. Give it another go before asking for a more specific hint." };
        } else {
            return { hint: "It looks like you're stuck. Don't worry, that's part of learning! Double-check the problem description and see if you can spot any clues. You can also try searching online for similar problems." };
        }
    }

  } catch (e) {
    console.error('Hint generation failed:', e);
    return { error: 'Failed to generate hint. Please try again later.' };
  }
}

// Run Code Action
const RunCodeActionSchema = z.object({
  language: z.string(),
  question: z.string(),
  studentCode: z.string(),
});

export type RunCodeState = {
  stdout?: string;
  stderr?: string;
  error?: string;
};

export async function runCodeAction(
  prevState: RunCodeState,
  formData: FormData
): Promise<RunCodeState> {
  try {
    const validatedDataResult = RunCodeActionSchema.safeParse({
      language: formData.get('language'),
      question: formData.get('question'),
      studentCode: formData.get('studentCode'),
    });

    if (!validatedDataResult.success) {
      return { error: 'Invalid input for code execution.' };
    }

    const { language, question, studentCode } = validatedDataResult.data;

    const result = await runCode({
      language,
      question,
      code: studentCode,
    });

    return { stdout: result.stdout, stderr: result.stderr };
  } catch (e) {
    console.error('Code execution simulation failed:', e);
    return { error: 'Failed to run code. Please try again later.' };
  }
}

// Chatbot Action
const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type Message = z.infer<typeof MessageSchema>;

export type ChatState = {
  history: Message[];
  error?: string;
};

export async function chatbotAction(
  prevState: ChatState,
  formData: FormData
): Promise<ChatState> {
  const userMessage = formData.get('message') as string;
  if (!userMessage.trim()) {
    return prevState;
  }

  const newHistory: Message[] = [
    ...prevState.history,
    { role: 'user', content: userMessage },
  ];

  try {
    const modelResponse = await chatWithBot({ history: newHistory });
    if (!modelResponse || !modelResponse.content) {
      throw new Error('AI returned an empty response.');
    }
    return {
      history: [...newHistory, modelResponse],
    };
  } catch (e: any) {
    console.error('Chatbot action failed:', e);
    return {
      history: newHistory, // Keep user's message on error
      error: `Sorry, I'm having trouble connecting. The underlying error is: ${e.message}`,
    };
  }
}
