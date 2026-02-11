import React from 'react';

export function GameOfGyanLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer book cover */}
      <path
        d="M21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19Z"
        fill="#5A1D11"
        stroke="#5A1D11"
        strokeWidth="2"
      />

      {/* Open pages */}
      <path
        d="M4 5V19C4 19.3453 4.10328 19.6738 4.28899 19.949C6.42857 16.949 10 17 12 17C14 17 17.5714 16.949 19.711 19.949C19.8967 19.6738 20 19.3453 20 19V5C20 4.65467 19.8967 4.32621 19.711 4.051C17.5714 7.051 14 7 12 7C10 7 6.42857 7.051 4.28899 4.051C4.10328 4.32621 4 4.65467 4 5Z"
        fill="#FDF8F0"
      />

      {/* Spine */}
      <path d="M12 7V17" stroke="#5A1D11" strokeOpacity="0.5" strokeWidth="1" />

      {/* Page lines */}
      <path d="M6 9.5H10" stroke="#8C2D19" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M6 11.5H9" stroke="#8C2D19" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M6 13.5H10" stroke="#8C2D19" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M14 9.5H18" stroke="#8C2D19" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M14 11.5H17" stroke="#8C2D19" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M14 13.5H18" stroke="#8C2D19" strokeOpacity="0.6" strokeWidth="0.8" strokeLinecap="round" />
      
      {/* Bookmark */}
      <path d="M11 3H13V9L12 8L11 9V3Z" fill="#FFD700" stroke="#B8860B" strokeWidth="0.5" />
    </svg>
  );
}
