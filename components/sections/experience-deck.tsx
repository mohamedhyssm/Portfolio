"use client";

import { Tabs } from "@base-ui/react/tabs";
import { ArrowUpRight, CreditCard, Kanban, Mail, PanelsTopLeft, UserRoundPlus, Workflow } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { GROVE_ENGINE_WEBSITES } from "@/data/projects";
import { IntegrationFlow } from "./integration-flow";
import styles from "./studio.module.css";

const automationSteps = [
  { label: "Funnels", detail: "Capture new leads.", Icon: UserRoundPlus },
  { label: "Sales pipelines", detail: "Organize leads by sales stage.", Icon: Kanban },
  { label: "Email follow-ups", detail: "Keep leads and customers engaged.", Icon: Mail },
];

function AutomationFlow() {
  return (
    <>
      <h3>Lead management &amp; follow-ups</h3>
      <ol className={styles.automationSteps}>
        {automationSteps.map(({ label, detail, Icon }) => (
          <li key={label}>
            <span className={styles.automationIcon}><Icon size={18} aria-hidden="true" /></span>
            <div>
              <h4>{label}</h4>
              <p>{detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

function WebsitePreviews() {
  return (
    <>
      <h3>Websites built at Grove Engine</h3>
      <ul className={styles.experienceSites}>
        {GROVE_ENGINE_WEBSITES.map(({ title, image, link, description }) => (
          <li key={title}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Image src={image} alt="" sizes="(max-width: 520px) 22vw, 144px" />
              <div>
                <h4>{title} <ArrowUpRight size={16} aria-hidden="true" /></h4>
                <p>{description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

const cards = [
  { id: "payments", label: "Payments", Icon: CreditCard, Panel: IntegrationFlow },
  { id: "automation", label: "Automation", Icon: Workflow, Panel: AutomationFlow },
  { id: "websites", label: "Websites", Icon: PanelsTopLeft, Panel: WebsitePreviews },
];

const ROTATION_DELAY = 7000;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const preference = window.matchMedia(REDUCED_MOTION_QUERY);
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

export function ExperienceDeck() {
  const deckRef = useRef<HTMLDivElement>(null);
  const inView = useInView(deckRef, { amount: 0.5 });
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
  const [activeCard, setActiveCard] = useState(cards[0].id);
  const [pointerInside, setPointerInside] = useState(false);
  const [focusInside, setFocusInside] = useState(false);
  const canRotate = !reduceMotion && inView && !pointerInside && !focusInside;

  useEffect(() => {
    if (!canRotate) return;

    let timer: number | undefined;

    function scheduleRotation() {
      window.clearTimeout(timer);
      if (document.hidden) return;

      timer = window.setTimeout(() => {
        const index = cards.findIndex(({ id }) => id === activeCard);
        setActiveCard(cards[(index + 1) % cards.length].id);
      }, ROTATION_DELAY);
    }

    scheduleRotation();
    document.addEventListener("visibilitychange", scheduleRotation);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", scheduleRotation);
    };
  }, [activeCard, canRotate]);

  return (
    <Tabs.Root
      ref={deckRef}
      className={styles.experienceDeck}
      value={activeCard}
      onValueChange={setActiveCard}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") setPointerInside(true);
      }}
      onPointerLeave={() => setPointerInside(false)}
      onFocus={() => setFocusInside(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocusInside(false);
      }}
    >
      <Tabs.List className={styles.experienceTabs} aria-label="Work at Grove Engine" activateOnFocus>
        {cards.map(({ id, label, Icon }) => (
          <Tabs.Tab className={styles.experienceTab} key={id} value={id}>
            <Icon size={20} aria-hidden="true" />
            {label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {cards.map(({ id, Panel }) => (
        <Tabs.Panel className={styles.experiencePanel} key={id} value={id}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0.6, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 0.74, 0.2, 1] }}
          >
            <Panel />
          </motion.div>
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}
