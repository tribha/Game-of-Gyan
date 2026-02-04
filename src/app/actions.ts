
'use server';

import { getSmartHint, type SmartHintInput } from '@/ai/flows/smart-hint-system';
import { z } from 'zod';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  // Mock login logic
  const email = formData.get('email');
  if (email) {
    redirect('/dashboard');
  }
}

const SmartHintActionSchema = z.object({
  language: z.string(),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  question: z.string(),
  attempts: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(0)
  ),
  studentCode: z.string(),
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
    const validatedData = SmartHintActionSchema.safeParse({
      language: formData.get('language'),
      level: formData.get('level'),
      question: formData.get('question'),
      attempts: formData.get('attempts'),
      studentCode: formData.get('studentCode'),
    });
    
    if (!validatedData.success) {
      return { error: 'Invalid input for hint generation.' };
    }

    const result = await getSmartHint(validatedData.data);
    return { hint: result.hint };

  } catch (e) {
    return { error: 'Failed to generate hint. Please try again.' };
  }
}
