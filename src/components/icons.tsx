import type { SVGProps } from 'react';

export function CodeConquerorLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 2l-2.1 4.9L7 8.5l4.9 2.1L13.5 17l2.1-4.9L20 10.5l-4.9-2.1L14 2z" />
      <path d="M4 21l3.5-3.5" />
      <path d="M15 9l-3 3" />
      <path d="M9 21a3 3 0 01-3-3v-1" />
      <path d="M21 15a3 3 0 01-3 3h-1" />
      <path d="M3 9a3 3 0 013-3h1" />
      <path d="M21 9a3 3 0 00-3-3h-1" />
    </svg>
  );
}
