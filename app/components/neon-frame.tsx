'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  color?: 'cyan' | 'violet';
  className?: string;
  delay?: number;
};

const glow = {
  cyan: ['0 0 12px rgba(6,182,212,0.25)', '0 0 34px rgba(6,182,212,0.6)', '0 0 12px rgba(6,182,212,0.25)'],
  violet: ['0 0 12px rgba(168,85,247,0.25)', '0 0 34px rgba(168,85,247,0.6)', '0 0 12px rgba(168,85,247,0.25)'],
};
const border = { cyan: 'border-cyan-400/50', violet: 'border-fuchsia-400/50' };

export function NeonFrame({ children, color = 'cyan', className = '', delay = 0 }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`rounded-2xl border ${border[color]} ${className}`}
      animate={reduce ? undefined : { boxShadow: glow[color] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay }}
      style={reduce ? { boxShadow: glow[color][0] } : undefined}
    >
      {children}
    </motion.div>
  );
}
