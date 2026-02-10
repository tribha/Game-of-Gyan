'use client';

import { useState, useRef, useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Loader2, Send, X } from 'lucide-react';
import { chatWithBotAction, type ChatState } from '@/app/ai-actions';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { useUser } from '@/firebase';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending}>
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Send className="h-4 w-4" />
      )}
    </Button>
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { user } = useUser();

  const initialState: ChatState = {
    response: undefined,
    error: undefined,
    history: [],
    userMessage: '',
  };

  const [state, formAction] = useActionState(chatWithBotAction, initialState);

  // When form action completes, reset and focus the input field
  useEffect(() => {
    if (formRef.current && (state.response || state.error)) {
      formRef.current.reset();
      inputRef.current?.focus();
    }
  }, [state]);
  

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [state.history, state.error]);


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
                    Hi {user?.displayName || 'there'}! I'm Gyan. How can I help you on your coding quest today? 🚀
                  </p>
                </div>
              </div>
              {state.history.map((message, index) => (
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
               {state.error && (
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
            <form ref={formRef} action={formAction} className="flex items-center gap-2">
              <input type="hidden" name="history" value={JSON.stringify(state.history)} />
              <Input
                ref={inputRef}
                name="message"
                placeholder="Ask a question..."
                className="flex-1"
                autoComplete="off"
              />
              <SubmitButton />
            </form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
