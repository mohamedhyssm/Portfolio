"use client";

import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

/** Pulls its children slightly toward the mouse pointer. */
export function Magnetic({ children, strength = 0.28 }: { children: ReactNode; strength?: number }) {
  const reduced = useReducedMotion();
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const x = useSpring(offsetX, { stiffness: 220, damping: 16, mass: 0.6 });
  const y = useSpring(offsetY, { stiffness: 220, damping: 16, mass: 0.6 });

  function pull(event: PointerEvent<HTMLSpanElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    offsetX.set((event.clientX - (bounds.left + bounds.width / 2)) * strength);
    offsetY.set((event.clientY - (bounds.top + bounds.height / 2)) * strength);
  }

  function release() {
    offsetX.set(0);
    offsetY.set(0);
  }

  return (
    <motion.span
      style={{ x, y, display: "inline-block" }}
      onPointerMove={pull}
      onPointerLeave={release}
      onPointerCancel={release}
    >
      {children}
    </motion.span>
  );
}
