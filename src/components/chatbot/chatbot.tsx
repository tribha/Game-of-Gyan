'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Loader2, Send, X } from 'lucide-react';
import { getChatbotResponse } from '@/app/ai-actions';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { useUser } from '@/firebase';
import { type ChatbotInput } from '@/ai/flows/chatbot';

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<ChatbotInput['history']>([]);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();

  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth',
        });
    }
  }, [history, error, pending]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userMessage = (formData.get('message') as string) || '';
    if (!userMessage.trim() || pending) return;

    setPending(true);
    setError(null);
    formRef.current?.reset();
    inputRef.current?.focus();

    const newHistory = [...history, { role: 'user' as const, content: userMessage }];
    setHistory(newHistory);

    try {
      const response = await getChatbotResponse(newHistory);
      setHistory(prev => [...prev, { role: 'model' as const, content: response }]);
    } catch (e: any) {
      setError(e.message || 'Failed to get response from AI.');
      // Revert history to remove the user message that caused the error
      setHistory(history);
    } finally {
      setPending(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
        >
          <Bot className="h-7 w-7" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="w-[22rem] sm:w-[24rem] p-0 mr-4 mb-2"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex flex-col h-[60vh] sm:h-[70vh]">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                  <Avatar>
                      <AvatarFallback>🤖</AvatarFallback>
                  </Avatar>
                  <div>
                      <p className="font-semibold">Gyan</p>
                      <p className="text-xs text-muted-foreground">Your AI Tutor</p>
                  </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                  <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                          <AvatarFallback>🤖</AvatarFallback>
                      </Avatar>
                      <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                          <p className="text-sm">
                              Hi {user?.displayName || 'there'}! I'm Gyan. Ask me anything about coding or your learning quests! 🚀
                          </p>
                      </div>
                  </div>
                  {history.map((message, index) => (
                      <div
                          key={index}
                          className={cn(
                              'flex items-start gap-3',
                              message.role === 'user' && 'flex-row-reverse'
                          )}
                      >
                          <Avatar className="w-8 h-8">
                              <AvatarFallback>
                                  {message.role === 'user' ? (user?.displayName?.charAt(0) || 'U') : '🤖'}
                              </AvatarFallback>
                          </Avatar>
                          <div
                              className={cn(
                                  'p-3 rounded-lg max-w-[80%]',
                                  message.role === 'user'
                                      ? 'bg-primary text-primary-foreground'
                                      : 'bg-muted'
                              )}
                          >
                              <p className="text-sm">{message.content}</p>
                          </div>
                      </div>
                  ))}
                  {pending && (
                       <div className="flex items-start gap-3">
                          <Avatar className="w-8 h-8">
                              <AvatarFallback>🤖</AvatarFallback>
                          </Avatar>
                          <div className="bg-muted p-3 rounded-lg max-w-[80%] flex items-center">
                              <Loader2 className="h-4 w-4 animate-spin" />
                          </div>
                      </div>
                  )}
                  {error && (
                      <div className="flex items-start gap-3">
                          <Avatar className="w-8 h-8">
                              <AvatarFallback>🤖</AvatarFallback>
                          </Avatar>
                          <div className="bg-destructive/10 border border-destructive/20 text-destructive p-3 rounded-lg max-w-[80%]">
                              <p className="text-sm">
                                  Sorry, I'm having trouble connecting right now. Please try again later.
                              </p>
                          </div>
                      </div>
                  )}
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t">
              <form ref={formRef} onSubmit={handleSubmit} className="flex items-center gap-2">
                  <Input
                      ref={inputRef}
                      name="message"
                      placeholder="Ask a question..."
                      className="flex-1"
                      autoComplete="off"
                      disabled={pending}
                  />
                  <Button type="submit" size="icon" disabled={pending}>
                    {pending ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
              </form>
            </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
