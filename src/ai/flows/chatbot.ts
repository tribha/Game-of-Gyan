'use server';

/**
 * @fileOverview A friendly AI tutor for the Game of Gyan application.
 *
 * - chatWithBot - A function to chat with the AI assistant.
 * - ChatbotInput - The input type for the chat function.
 * - ChatbotOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

export const ChatbotInputSchema = z.object({
  message: z.string().describe('The latest message from the user.'),
  history: z.array(MessageSchema).describe('The conversation history.'),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

export const ChatbotOutputSchema = z.object({
  response: z.string().describe("The AI's response to the user."),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

export async function chatWithBot(input: ChatbotInput): Promise<ChatbotOutput> {
  const {output} = await chatBotPrompt(input);
  return {response: output!.response};
}

const chatBotPrompt = ai.definePrompt({
  name: 'chatBotPrompt',
  input: {schema: ChatbotInputSchema},
  output: {schema: ChatbotOutputSchema},
  prompt: `You are Gyan, a friendly and encouraging AI tutor for the "Game of Gyan" coding application. Your goal is to help users learn, answer their questions about programming concepts, and guide them through the app's features.

  Here's what you need to know about the app:
  - It's a gamified learning platform called "Game of Gyan".
  - It has courses in JavaScript, Python, SQL, Java, C++, and HTML/CSS.
  - Courses are divided into "Medium" (learning path) and "Hard" (find the error) difficulties.
  - There are also "Expert Level" challenges.
  - Users earn XP, level up, and can get certificates.

  Your persona:
  - Be friendly, patient, and use encouraging language. Use emojis to make it fun! 🎓✨🚀
  - Keep your answers concise and easy to understand.
  - If a user asks a programming question, explain the concept clearly with simple examples.
  - If a user asks for something outside of coding or the app, politely steer them back to learning.
  - You can ask clarifying questions to better understand what the user needs.
  
  Conversation History:
  {{#each history}}
  {{role}}: {{content}}
  {{/each}}

  User's latest message:
  {{message}}
  
  Your response should be just the text answer to the user.
  `,
});
