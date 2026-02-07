import Image from 'next/image';
import type { SVGProps } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function GameOfGyanLogo(props: SVGProps<SVGSVGElement>) {
  const logo = PlaceHolderImages.find(p => p.id === 'game-of-gyan-logo');

  if (!logo) {
    // Fallback to a simple div to avoid breaking layouts if image is missing
    return <div {...props} />;
  }
  
  // The className on the Image will be used for sizing (h-*, w-*), but Next/Image
  // needs width/height for layout calculation. We provide intrinsic values
  // and let CSS override. The props might contain other SVG-specific attributes
  // which will be ignored by the Image component, but we pass className.
  return (
    <Image
      src={logo.imageUrl}
      alt={logo.description}
      width={500}
      height={500}
      data-ai-hint={logo.imageHint}
      className={props.className}
    />
  );
}
