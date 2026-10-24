"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";

export default function SectionHeading({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay }}
      className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-zinc-100"
    >
      {children}
    </motion.h2>
  );
}