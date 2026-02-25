import React from 'react';
import { cn } from '@/lib/utils';

export function GameOfGyanLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-12 w-auto', className)}
      viewBox="0 0 320 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
    
      <g transform="translate(5, 5)">
        {/* Shield */}
        <path d="M25 0 L50 10 L50 30 C 50 45 25 50 25 50 C 25 50 0 45 0 30 L0 10 Z" fill="url(#logoGradient)"/>
        {/* Open Book */}
        <path d="M15 35 L15 18 L25 15 L35 18 L35 35 L25 32 Z" fill="white" />
      </g>

      {/* Text */}
      <text x="65" y="42" fontFamily="Poppins, sans-serif" fontSize="32" fontWeight="700" fill="currentColor">
        Game of Gyan
      </text>
    </svg>
  );
}
