"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, MotionStyle } from "motion/react";

export type AnimateOnViewProps = {
  children: React.ReactNode;
  initialOpacity?: number;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  amount?: number;
  style?: MotionStyle;
};

/**
 * Wrap any component to animate it into view when it enters the viewport.
 * Useful for staggered rows by passing increasing `delay` values.
 */
export default function AnimateOnView({
  children,
  initialOpacity = 0,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 20,
  amount = 0.3,
  style,
}: AnimateOnViewProps) {
  const offset = React.useMemo(() => {
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  }, [direction, distance]);

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: initialOpacity, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
