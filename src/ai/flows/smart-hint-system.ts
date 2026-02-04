'use server';

/**
 * @fileOverview Provides a smart hint system for coding games.
 *
 * - `getSmartHint` - A function that generates a hint based on the user's skill level and mistakes.
 * - `SmartHintInput` - The input type for the `getSmartHint` function.
 * - `SmartHintOutput` - The return type for the `getSmartHint` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartHintInputSchema = z.object({
  language: z.string().describe('The programming language of the coding game.'),
  level: z.enum(['beginner', 'intermediate', 'advanced']).describe('The skill level of the student.'),
  question: z.string().describe('The coding question the student is attempting to answer.'),
  attempts: z.number().describe('The number of failed attempts by the student.'),
  studentCode: z.string().describe('The code written by the student.'),
});
export type SmartHintInput = z.infer<typeof SmartHintInputSchema>;

const SmartHintOutputSchema = z.object({
  hint: z.string().describe('A hint to help the student answer the coding question, or null if no hint is needed.'),
});
export type SmartHintOutput = z.infer<typeof SmartHintOutputSchema>;

export async function getSmartHint(input: SmartHintInput): Promise<SmartHintOutput> {
  return smartHintFlow(input);
}

const smartHintPrompt = ai.definePrompt({
  name: 'smartHintPrompt',
  input: {schema: SmartHintInputSchema},
  output: {schema: SmartHintOutputSchema},
  prompt: `You are a coding tutor who provides hints to students learning to code. 

  The student is currently working on a problem in {{language}} at the {{level}} level. 
  The question they are trying to answer is: {{question}}.
  They have attempted the question {{attempts}} times.
  Here is the student's code: {{studentCode}}

  If the student has not fully exerted themselves (e.g. attempts is low and their code is blank), return null.
  Otherwise, provide a helpful hint based on their skill level and mistakes. The hint should be specific to the question and their code, and should guide them towards the correct answer without giving it away. Keep the hint short.

  If the student has attempted the question multiple times, provide a more detailed hint. 

  If the student has made many attempts and is still struggling, suggest they review the relevant concepts or seek help from a tutor. Be encouraging and supportive.

  If no hint is necessary, return null.
  `,
});

const smartHintFlow = ai.defineFlow(
  {
    name: 'smartHintFlow',
    inputSchema: SmartHintInputSchema,
    outputSchema: SmartHintOutputSchema,
  },
  async input => {
    const {output} = await smartHintPrompt(input);
    return output!;
  }
);
