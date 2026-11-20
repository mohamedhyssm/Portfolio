import { ExperienceDeck } from "./experience-deck";
import styles from "./studio.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience} aria-labelledby="experience-title">
      <div className={`site-container ${styles.experienceLayout}`}>
        <div>
          <h2 id="experience-title" className={styles.heading}>Experience</h2>
          <p className={styles.roleDate}>August 2026 to present</p>
          <h3 className={styles.roleTitle}>Full Stack Developer at Grove Engine</h3>
          <p className={styles.experienceCopy}>I build GoHighLevel integrations and marketing automation.</p>
          <ul className={styles.roleList}>
            <li>
              Built a custom Kashier payment integration for GoHighLevel, connecting payment processing
              with GHL orders and webhooks.
            </li>
            <li>Built marketing automations, funnels, and pipelines for lead management and sales processes.</li>
            <li>
              Created email campaigns and automated follow-up workflows for lead nurturing and customer
              communication.
            </li>
            <li>Build websites for clients, including training academies.</li>
          </ul>
        </div>
        <ExperienceDeck />
      </div>
    </section>
  );
}
