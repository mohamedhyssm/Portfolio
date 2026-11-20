import type { CSSProperties } from "react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { HeroMark } from "@/components/sections/hero-mark";
import { Magnetic } from "@/components/shared/magnetic";
import { PointerGlow } from "@/components/shared/pointer-glow";

function Letters({ text, start }: { text: string; start: number }) {
  return [...text].map((char, index) => (
    <span
      key={index}
      className="hero-letter"
      style={{ "--i": start + index } as CSSProperties}
    >
      {char}
    </span>
  ));
}

export function Hero() {
  return (
    <section id="home" className="hero-stage" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        <span className="hero-grid-bg" />
        <span className="hero-aurora">
          <i />
          <i />
          <i />
        </span>
      </div>
      <PointerGlow />

      <div className="site-container hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-role">Full Stack Developer</p>
            <h1 id="hero-title" className="hero-name">
              <span className="sr-only">Mohamed Haytham.</span>
              <span className="hero-line" aria-hidden="true">
                <Letters text="Mohamed" start={0} />
              </span>
              <span className="hero-line hero-line-accent" aria-hidden="true">
                <Letters text="Haytham." start={7} />
              </span>
            </h1>
            <p className="hero-description">
              I build scalable web applications, APIs, and full systems, from clean interfaces to the backend that powers them.
            </p>
            <div className="hero-actions flex flex-wrap items-center gap-3">
              <Magnetic>
                <a href="#projects" className="brand-button">
                  View projects <ArrowDown size={17} aria-hidden="true" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="brand-button brand-button-outline"
                >
                  Contact me <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </Magnetic>
            </div>
            <p className="hero-availability">
              <span aria-hidden="true" />
              Available for work
            </p>
          </div>

          <HeroMark />
        </div>

        <div className="hero-details">
          <p>
            <span>Working with</span> <strong>Next.js, NestJS</strong>
          </p>
          <p className="hero-location">
            <MapPin size={17} aria-hidden="true" />
            <strong>Alexandria, Egypt</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
