import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Brand } from "@/components/shared/brand";
import { SOCIAL_LINKS } from "@/data/social";
import { CopyEmail } from "./copy-email";
import styles from "./studio.module.css";

const EMAIL = "mohamedhaytham.dev@gmail.com";

export default function Footer() {
  return (
    <footer id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className="site-container">
        <div className={styles.contactMain}>
          <div>
            <p className={styles.contactStatus}>Available for work</p>
            <h2 id="contact-title" className={styles.heading}>Let&apos;s work together.</h2>
          </div>
          <div className={styles.contactActions}>
            <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
              <Mail size={18} aria-hidden="true" /> Email me
            </a>
            <CopyEmail email={EMAIL} />
            <a href="/Full%20CV.pdf" download className={styles.contactOutline}>
              <Download size={17} aria-hidden="true" /> Download CV
            </a>
          </div>
        </div>
        <div className={styles.contactBottom}>
          <Brand />
          <ul className={styles.socialLinks}>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={styles.studioLink}>
                  {label} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
