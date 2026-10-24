"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function SectionHeading({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.h2
      initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay }}
      className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-zinc-100"
    >
      {children}
    </motion.h2>
  );
}