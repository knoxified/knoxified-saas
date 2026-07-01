'use client';

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = prefix + v.toFixed(decimals) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, prefix, suffix, decimals]);

  // Initial state is 0
  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
