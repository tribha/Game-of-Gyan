import React from 'react';
import { cn } from '@/lib/utils';
import { BookMarked } from 'lucide-react';

export function GameOfGyanLogo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2 font-headline text-2xl font-bold text-primary', className)}>
       <BookMarked className="h-10 w-10" />
       <span className="text-foreground dark:text-sidebar-foreground">Game of Gyan</span>
    </div>
  );
}
