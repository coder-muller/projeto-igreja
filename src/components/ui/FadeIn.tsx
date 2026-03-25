import { type ReactNode, useRef } from "react";
import { motion, useInView } from "motion/react";

type Direction = "up" | "left" | "none";

interface FadeInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  left: { x: -18 },
  none: {},
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.15,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
