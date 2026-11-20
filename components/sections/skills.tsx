"use client";

import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SKILL_CATEGORIES } from "@/data/skills";
import styles from "./studio.module.css";

export function Skills() {
  const [active, setActive] = useState(0);
  const category = SKILL_CATEGORIES[active];
  const selectionId = useId();
  const reduced = useReducedMotion();

  return (
    <section id="skills" className={styles.skills} aria-labelledby="skills-title">
      <div className={`site-container ${styles.skillsLayout}`}>
        <h2 id="skills-title" className={styles.heading}>Skills</h2>
        <div className={styles.skillBoard}>
          <div className={styles.skillNav} role="group" aria-label="Skill areas">
            {SKILL_CATEGORIES.map(({ id, label }, index) => (
              <button
                key={id}
                type="button"
                aria-pressed={active === index}
                aria-controls="skill-detail"
                onClick={() => setActive(index)}
              >
                {active === index && (
                  <motion.span
                    aria-hidden="true"
                    className={styles.skillIndicator}
                    layoutId={reduced ? undefined : selectionId}
                    transition={{ duration: 0.24 }}
                  />
                )}
                <span>{label}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className={styles.skillDetail} id="skill-detail" aria-live="polite">
            <AnimatePresence initial={false} mode={reduced ? "sync" : "wait"}>
              <motion.div
                key={category.id}
                initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: reduced ? 0 : 0.18 }}
              >
                <h3>{category.label}</h3>
                <p>{category.description}</p>
                <ul className={styles.skillTags}>
                  {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
