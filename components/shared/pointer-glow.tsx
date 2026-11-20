"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative light that follows the mouse inside its parent element.
 * The parent must be `position: relative`. Touch and pen input are ignored.
 */
export function PointerGlow() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return;

    let frame = 0;
    const move = (event: globalThis.PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = parent.getBoundingClientRect();
        parent.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
        parent.style.setProperty("--my", `${event.clientY - bounds.top}px`);
      });
    };

    parent.addEventListener("pointermove", move);
    return () => {
      parent.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <span ref={ref} className="pointer-glow" aria-hidden="true" />;
}
