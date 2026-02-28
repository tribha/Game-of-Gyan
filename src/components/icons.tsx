import React from 'react';
import { cn } from '@/lib/utils';

export function GameOfGyanLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-12 w-auto overflow-visible', className)}
      viewBox="0 0 340 70"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main Gradient for the icon and text */}
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="50%" stopColor="hsl(var(--accent))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </linearGradient>

        {/* Glow Filter for the Artifact look */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Metallic/Texture Filter */}
        <filter id="metallic">
          <feSpecularLighting surfaceScale="5" specularConstant="0.75" specularExponent="20" lightingColor="#white" result="specOut">
            <fePointLight x="-5000" y="-10000" z="20000" />
          </feSpecularLighting>
          <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        {/* Shadow for depth */}
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>

      <g transform="translate(5, 5)" filter="url(#shadow)">
        {/* Outer Shield - The Game Element */}
        <path 
          d="M30 0 L60 12 L60 35 C 60 55 30 60 30 60 C 30 60 0 55 0 35 L0 12 Z" 
          fill="url(#logoGradient)" 
          filter="url(#metallic)"
        />
        
        {/* Inner Shield Border */}
        <path 
          d="M30 5 L52 15 L52 35 C 52 48 30 52 30 52 C 30 52 8 48 8 35 L8 15 Z" 
          fill="rgba(255,255,255,0.15)" 
        />

        {/* The Open Book - The "Gyan" Element */}
        <g transform="translate(15, 18)" filter="url(#glow)">
          {/* Pages */}
          <path d="M0 25 L0 5 L15 2 L30 5 L30 25 L15 22 Z" fill="white" />
          {/* Spine and separation */}
          <path d="M15 2 L15 22" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
          {/* Subtle line details for pages */}
          <path d="M5 8 L12 6 M5 12 L12 10 M5 16 L12 14" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
          <path d="M18 6 L25 8 M18 10 L25 12 M18 14 L25 16" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        </g>
      </g>

      {/* Text with optimized spacing and styling */}
      <text 
        x="75" 
        y="45" 
        fontFamily="Poppins, sans-serif" 
        fontSize="34" 
        fontWeight="800" 
        fill="url(#logoGradient)" 
        letterSpacing="-0.5"
        filter="url(#shadow)"
      >
        Game of Gyan
      </text>
      
      {/* Decorative dots/stars representing "levelling up" */}
      <circle cx="28" cy="15" r="1.5" fill="white" opacity="0.8" filter="url(#glow)" />
      <circle cx="35" cy="10" r="1" fill="white" opacity="0.6" />
      <circle cx="22" cy="12" r="1" fill="white" opacity="0.6" />
    </svg>
  );
}
