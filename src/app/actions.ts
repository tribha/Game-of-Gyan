
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
    
    if (result.hint) {
        return { hint: result.hint };
    } else {
        // The model returns null if it thinks the user hasn't tried enough.
        // We can provide a generic encouraging message.
        const attempts = validatedData.data.attempts;
        if (attempts < 2) {
            return { hint: "Keep trying! You're on the right track. Give it another go before asking for a more specific hint." };
        } else {
            return { hint: "It looks like you're stuck. Double-check the problem description and see if you can spot any clues." };
        }
    }

  } catch (e) {
    console.error('Hint generation failed:', e);
    return { error: 'Failed to generate hint. Please try again later.' };
  }
}
