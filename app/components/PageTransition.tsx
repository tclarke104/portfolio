'use client';

import { useTransition, animated } from '@react-spring/web';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {

  return (
    <>
      {children}
    </>
  );
}
