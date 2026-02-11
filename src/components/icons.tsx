import React from 'react';

export function GameOfGyanLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Shadow to give depth */}
        <path d="M20 22H7C5.34315 22 4 20.6569 4 19V5C4 3.34315 5.34315 2 7 2H20V22Z" fill="black" fillOpacity="0.2"/>

        {/* Darker spine/back part of cover */}
        <path d="M7 2H5C4.44772 2 4 2.44772 4 3V21C4 21.5523 4.44772 22 5 22H7V2Z" fill="#5A1D11"/>
      
        {/* Page block */}
        <rect x="7" y="2" width="13" height="20" fill="#FDF8F0"/>
      
        {/* Main front cover */}
        <path d="M7 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H7V2Z" fill="#8C2D19"/>
      
        {/* Spine shadow/line */}
        <path d="M7 2V22" stroke="#5A1D11" strokeWidth="2"/>

        {/* Gold decoration on cover */}
        <rect x="12" y="6" width="4" height="4" rx="1" fill="#FFD700"/>
        <path d="M11 12H17" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 15H17" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    </svg>
  );
}
