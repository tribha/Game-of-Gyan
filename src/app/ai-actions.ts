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
const ChatbotMessageSchema = z.string().min(1, 'Message cannot be empty.');

export type ChatState = {
  response?: string | null;
  error?: string;
  history: ChatbotInput['history'];
};

export async function chatWithBotAction(
  prevState: ChatState,
  formData: FormData
): Promise<ChatState> {
  const userMessage = (formData.get('message') as string) || '';

  const validation = ChatbotMessageSchema.safeParse(userMessage);
  if (!validation.success) {
      return { ...prevState, error: validation.error.flatten().formErrors[0] };
  }

  let history: ChatState['history'] = [];
  try {
      history = JSON.parse(formData.get('history') as string);
  } catch {
      // Start with empty history on parse error
  }

  const newHistoryWithUserMessage = [...history, { role: 'user' as const, content: userMessage }];

  try {
    const { response } = await chatWithBot({ history: newHistoryWithUserMessage });
    
    const finalHistory = [...newHistoryWithUserMessage, { role: 'model' as const, content: response }];

    return {
      history: finalHistory,
      response: response,
      error: undefined,
    };
  } catch (e) {
    console.error('Chatbot action failed:', e);
    // Return history with user message and an error to display
    return { 
      history: newHistoryWithUserMessage,
      error: 'Failed to get response from AI.',
    };
  }
}
