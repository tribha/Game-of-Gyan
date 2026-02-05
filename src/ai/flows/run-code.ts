'use server';

/**
 * @fileOverview Simulates code execution using an AI model.
 *
 * - `runCode` - A function that simulates running code and returns the output.
 * - `RunCodeInput` - The input type for the `runCode` function.
 * - `RunCodeOutput` - The return type for the `runCode` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const RunCodeInputSchema = z.object({
  language: z.string().describe('The programming language of the code.'),
  code: z.string().describe('The code to execute.'),
  question: z.string().describe('The context or question the code is trying to solve.'),
});
export type RunCodeInput = z.infer<typeof RunCodeInputSchema>;

export const RunCodeOutputSchema = z.object({
  stdout: z.string().describe('The simulated standard output of the code. If there are errors, this might be empty.'),
  stderr: z.string().describe('The simulated standard error output. If the code runs successfully, this should be empty.'),
});
export type RunCodeOutput = z.infer<typeof RunCodeOutputSchema>;

export async function runCode(input: RunCodeInput): Promise<RunCodeOutput> {
  return runCodeFlow(input);
}

const runCodePrompt = ai.definePrompt({
  name: 'runCodePrompt',
  input: {schema: RunCodeInputSchema},
  output: {schema: RunCodeOutputSchema},
  prompt: `You are an expert programmer acting as a code interpreter.
You will be given a snippet of code in {{language}}, along with the question it is supposed to answer.
Your task is to simulate the execution of this code and provide the standard output (stdout) and standard error (stderr).

Question: {{question}}
Code to execute:
\`\`\`{{language}}
{{code}}
\`\`\`

- Execute the code as if you were a real interpreter for the {{language}} language.
- If the code calls a function, execute that function with sample inputs that make sense for the question. For example, if the question is "write a function to add two numbers", you might call the function with \`add(2, 3)\`.
- If the code would produce output (e.g., via \`print()\`, \`console.log()\`), capture it in the \`stdout\` field.
- If the code would produce a syntax error, runtime error, or any other exception, capture the error message in the \`stderr\` field.
- If the code executes successfully without errors, the \`stderr\` field should be an empty string.
- If the code has no output statements but runs without error (e.g., it just defines a function), the \`stdout\` field should contain a message like "Execution completed with no output.".
- Do not add any conversational text or explanations. Only provide the JSON output.
`,
});

const runCodeFlow = ai.defineFlow(
  {
    name: 'runCodeFlow',
    inputSchema: RunCodeInputSchema,
    outputSchema: RunCodeOutputSchema,
  },
  async input => {
    const {output} = await runCodePrompt(input);
    return output!;
  }
);
