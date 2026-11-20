import { ArrowUpRight, Boxes, CodeXml, Rocket } from "lucide-react";
import * as motion from "motion/react-client";
import { DECI_CERTIFICATE_URL } from "@/data/about";
import styles from "./studio.module.css";

const buildSteps = [
  {
    icon: Boxes,
    title: "Architecture",
    description: "Plan the system, model the data, and decide how the parts fit together.",
  },
  {
    icon: CodeXml,
    title: "Frontend & backend",
    description: "Build the interface, APIs, and database as one application.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Test the application end to end and deploy it to production.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className="site-container">
        <div className={styles.aboutLayout}>
          <div className={styles.aboutIntro}>
            <p className={styles.aboutLabel}>About me</p>
            <h2 id="about-title" className={styles.aboutTitle}>
              I build the <em>whole stack.</em>
            </h2>
            <p className={styles.aboutDescription}>
              I can take a platform, website, or custom system from idea to production on my own.
            </p>
          </div>

          <motion.div
            className={styles.buildPanel}
            initial="idle"
            whileInView="active"
            viewport={{ once: true, amount: 0.45 }}
          >
            <ol className={styles.buildSteps} aria-label="How I build">
              {buildSteps.map(({ icon: Icon, title, description }, index) => (
                <li className={styles.buildStep} key={title}>
                  <motion.span
                    className={styles.buildIcon}
                    aria-hidden="true"
                    variants={{ active: { scale: [1, 1.1, 1] } }}
                    transition={{ delay: index * 0.38, duration: 0.36, ease: "easeInOut" }}
                  >
                    <Icon size={22} />
                  </motion.span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className={styles.buildTrack} aria-hidden="true">
              <motion.span
                className={styles.buildSweep}
                variants={{ idle: { scaleY: 0 }, active: { scaleY: 1 } }}
                transition={{ duration: 1.1, ease: [0.22, 0.74, 0.2, 1] }}
              />
            </div>
          </motion.div>
        </div>

        <div className={styles.aboutCredential}>
          <p>I started coding with DECI in 2022 and completed Level Two in 2023.</p>
          <a className={styles.certificateLink} href={DECI_CERTIFICATE_URL} target="_blank" rel="noopener noreferrer">
            View DECI certificate <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
