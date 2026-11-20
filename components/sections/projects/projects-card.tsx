"use client";

import { useId, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import type { Project } from "@/data/projects";
import styles from "../studio.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const dialogTitle = useId();

  return (
    <article className={styles.projectCard}>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-label={`View ${project.title} project details`}
        aria-haspopup="dialog"
        className={styles.projectMedia}
      >
        <Image
          src={project.image}
          alt=""
          fill
          placeholder="blur"
          sizes="(max-width: 760px) 80vw, 640px"
          className={styles.projectImage}
        />
        <span className={styles.projectExpand}>
          <Maximize2 size={17} aria-hidden="true" />
        </span>
      </button>

      <div className={styles.projectCopy}>
        <p className={styles.projectType}>{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.facts && (
          <dl className={styles.projectFacts}>
            {project.facts.map(({ value, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className={styles.projectLinks}>
          <button type="button" className={styles.studioLink} onClick={() => dialog.current?.showModal()}>
            Project details
          </button>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.studioLink}>
              Visit site <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <dialog
        ref={dialog}
        aria-labelledby={dialogTitle}
        className={styles.projectDialog}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className={styles.dialogInner}>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Close project details"
            className={styles.projectClose}
          >
            <X size={21} aria-hidden="true" />
          </button>
          <Image
            src={project.image}
            alt={`${project.title} homepage`}
            sizes="(max-width: 950px) 92vw, 850px"
            className={styles.dialogImage}
          />
          <div className={styles.dialogCopy}>
            <h3 id={dialogTitle}>{project.title}</h3>
            <p>{project.description}</p>
            {project.highlights.length > 0 && (
              <ul className={styles.dialogHighlights}>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
            {project.tags.length > 0 && (
              <ul aria-label="Technologies" className={styles.skillTags}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </dialog>
    </article>
  );
}
