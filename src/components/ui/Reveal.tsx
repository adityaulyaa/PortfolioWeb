'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

export function Reveal({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  yOffset = 24,
  once = false,
  amount = 0.3
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}
