const MONOGRAM = "M23 77V31l19.5 25L62 31v46";
const RIGHT_STEM = "M85 31v46";
const BRIDGE = "M62 55h23";

/** CSS-only intro: the monogram draws itself, then the cobalt curtain lifts. */
export function IntroCurtain() {
  return (
    <div className="intro-curtain" aria-hidden="true">
      <svg viewBox="12 20 84 66" fill="none">
        <path pathLength="1" d={MONOGRAM} />
        <path pathLength="1" d={RIGHT_STEM} />
        <path pathLength="1" d={BRIDGE} />
      </svg>
    </div>
  );
}

/** Decorative reading-progress bar, driven by the page scroll in CSS only. */
export function ScrollProgress() {
  return <div className="scroll-progress" aria-hidden="true" />;
}
