import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ProjectsCarousel from "./projects-carousel";
import styles from "../studio.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="work-title">
      <div className="site-container">
        <div className={styles.workHeader}>
          <h2 id="work-title" className={styles.heading}>Selected projects</h2>
          <a
            href="https://github.com/mohamedhyssm?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.studioLink}
          >
            More on GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <ProjectsCarousel projects={PROJECTS} />
      </div>
    </section>
  );
}
