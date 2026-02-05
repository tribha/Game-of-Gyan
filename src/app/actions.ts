
'use server';

import { getSmartHint, type SmartHintInput } from '@/ai/flows/smart-hint-system';
import { z } from 'zod';
import { redirect } from 'next/navigation';

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
        // The model returns null if it thinks the user hasn't tried enough.
        // We can provide a generic encouraging message.
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
