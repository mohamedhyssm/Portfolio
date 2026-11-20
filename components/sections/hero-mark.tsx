"use client";

import type { CSSProperties, PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

const MONOGRAM = "M23 77V31l19.5 25L62 31v46";
const RIGHT_STEM = "M85 31v46";
const BRIDGE = "M62 55h23";
const EASE = [0.22, 0.74, 0.2, 1] as const;
const DRAW_START = { pathLength: 0, opacity: 0 };
const DRAW_END = { pathLength: 1, opacity: 1 };
/** Seconds the intro curtain stays up; the drawing starts as it lifts. */
const INTRO = 1.45;
const SPRING = { stiffness: 175, damping: 24 };

const CHIPS = [
  { label: "Next.js", left: "6%", top: "13%" },
  { label: "NestJS", left: "72%", top: "10%" },
  { label: "PostgreSQL", left: "5%", top: "77%" },
  { label: "Redis", left: "79%", top: "57%" },
  { label: "TypeScript", left: "52%", top: "85%" },
];

export function HeroMark() {
  const reduceMotion = useReducedMotion();
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const x = useSpring(offsetX, SPRING);
  const y = useSpring(offsetY, SPRING);
  const rotateX = useSpring(tiltX, SPRING);
  const rotateY = useSpring(tiltY, SPRING);
  const initialStroke = reduceMotion ? false : DRAW_START;
  const base = reduceMotion ? 0 : INTRO;

  function moveMark(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    offsetX.set(px * 18);
    offsetY.set(py * 18);
    tiltY.set(px * 14);
    tiltX.set(-py * 14);
  }

  function centerMark() {
    offsetX.set(0);
    offsetY.set(0);
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <div
      className="hero-mark"
      aria-hidden="true"
      onPointerMove={moveMark}
      onPointerLeave={centerMark}
      onPointerCancel={centerMark}
    >
      <span className="hero-orbit" />
      <span className="hero-orbit hero-orbit-inner" />

      <motion.div
        className="hero-mark-light"
        initial={{ opacity: 0, x: "-30%" }}
        animate={
          reduceMotion ? { opacity: 0 } : { opacity: [0, 0.46, 0], x: "32%" }
        }
        transition={{
          opacity: {
            delay: base,
            duration: 0.82,
            times: [0, 0.58, 1],
            ease: EASE,
          },
          x: { delay: base, duration: 0.82, ease: EASE },
        }}
      />

      <motion.div className="hero-drawing" style={{ x, y, rotateX, rotateY }}>
        <svg className="hero-emblem" viewBox="-14 1 136 107" fill="none">
          <motion.g
            className="hero-mark-guides"
            stroke="currentColor"
            strokeWidth=".55"
            initial={reduceMotion ? false : { opacity: 0.16 }}
            animate={{ opacity: 0.54 }}
            transition={{ delay: base, duration: 0.3, ease: EASE }}
          >
            <path d="M8 16H100V93H8Z" />
            <path
              d="M2 31H106M2 77H106M23 11V99M85 11V99"
              strokeDasharray="1.4 2.8"
            />
            <path d="M3 16H13M8 11V21M95 93H105M100 88V98" />
          </motion.g>

          <motion.g
            className="hero-mark-shadow"
            transform="translate(2.7 3.8)"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: base + 0.36, duration: 0.32, ease: EASE }}
          >
            <path className="hero-mark-stroke" d={MONOGRAM} />
            <path className="hero-mark-stroke" d={RIGHT_STEM} />
          </motion.g>

          <motion.path
            className="hero-mark-stroke hero-mark-line hero-mark-bridge"
            d={BRIDGE}
            initial={initialStroke}
            animate={DRAW_END}
            transition={{ delay: base + 0.49, duration: 0.23, ease: EASE }}
          />
          <motion.path
            className="hero-mark-stroke hero-mark-line"
            d={MONOGRAM}
            initial={initialStroke}
            animate={DRAW_END}
            transition={{ delay: base, duration: 0.61, ease: EASE }}
          />
          <motion.path
            className="hero-mark-stroke hero-mark-line"
            d={RIGHT_STEM}
            initial={initialStroke}
            animate={DRAW_END}
            transition={{ delay: base + 0.14, duration: 0.38, ease: EASE }}
          />
        </svg>
      </motion.div>

      {CHIPS.map(({ label, left, top }, index) => (
        <span
          key={label}
          className="hero-chip"
          style={{ left, top, "--k": index } as CSSProperties}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
