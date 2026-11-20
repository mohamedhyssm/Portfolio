"use client";

import { useId, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectCard from "./projects-card";
import styles from "../studio.module.css";

const SWIPE_DISTANCE = 48;

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const total = projects.length;
  const [active, setActive] = useState(0);
  const dragStart = useRef<number | null>(null);
  const dragged = useRef(false);
  const statusId = useId();

  const go = (to: number) => setActive(((to % total) + total) % total);

  // Signed, circular distance from the active slide (e.g. -1, 0, 1 for three slides).
  function offsetOf(index: number) {
    let distance = (index - active + total) % total;
    if (distance > total / 2) distance -= total;
    return distance;
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(active - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(active + 1);
    }
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragStart.current = event.clientX;
    dragged.current = false;
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (dragStart.current !== null && Math.abs(event.clientX - dragStart.current) > 10) {
      dragged.current = true;
    }
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(distance) < SWIPE_DISTANCE) return;
    go(distance < 0 ? active + 1 : active - 1);
  }

  return (
    <section className={styles.carousel} aria-roledescription="carousel" aria-label="Selected projects">
      <div className={styles.carouselFrame}>
        <div className={styles.carouselControls}>
          <button type="button" onClick={() => go(active - 1)} className={styles.carouselButton}>
            <ChevronLeft size={22} aria-hidden="true" />
            <span className="sr-only">Previous project</span>
          </button>
          <button type="button" onClick={() => go(active + 1)} className={styles.carouselButton}>
            <ChevronRight size={22} aria-hidden="true" />
            <span className="sr-only">Next project</span>
          </button>
        </div>

        <div
          className={styles.carouselStage}
          tabIndex={0}
          role="group"
          aria-label="Projects. Use the left and right arrow keys to change project."
          aria-describedby={statusId}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (dragStart.current = null)}
          onClickCapture={(event) => {
            if (!dragged.current) return;
            dragged.current = false;
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          {projects.map((project, index) => {
            const offset = offsetOf(index);
            const isActive = offset === 0;

            return (
              <div
                key={project.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}`}
                className={styles.slide}
                data-active={isActive}
                data-far={Math.abs(offset) > 2}
                style={{ "--o": offset, "--abs": Math.abs(offset) } as CSSProperties}
                onFocusCapture={(event) => {
                  // Keyboard focus moving into a side card brings it to the front.
                  if (!isActive && event.target.matches(":focus-visible")) go(index);
                }}
                onClickCapture={(event) => {
                  // A click on a side card centers it instead of activating its controls.
                  if (isActive) return;
                  event.preventDefault();
                  event.stopPropagation();
                  go(index);
                }}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      </div>

      <p id={statusId} className="sr-only" role="status" aria-live="polite">
        Project {active + 1} of {total}: {projects[active].title}
      </p>

      <nav className={styles.carouselMarkers} aria-label="Choose a project">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            aria-label={`Go to ${project.title}`}
            aria-current={index === active ? "true" : undefined}
            onClick={() => go(index)}
          />
        ))}
      </nav>
    </section>
  );
}
