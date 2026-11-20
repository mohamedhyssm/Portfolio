"use client";

import { useState } from "react";
import { CreditCard, ReceiptText, Webhook } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import styles from "./studio.module.css";

const STEPS = [
  {
    label: "Payment",
    title: "Kashier payment",
    description: "I built a custom integration that connects Kashier payment processing with GoHighLevel.",
    Icon: CreditCard,
  },
  {
    label: "Webhook",
    title: "Payment event",
    description: "Webhooks carry payment events between the payment provider and the workflow.",
    Icon: Webhook,
  },
  {
    label: "Order",
    title: "GoHighLevel order",
    description: "The integration connects payment processing and webhook events to GoHighLevel orders.",
    Icon: ReceiptText,
  },
];

export function IntegrationFlow() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const step = STEPS[active];

  return (
    <div aria-labelledby="flow-title">
      <h3 id="flow-title">Kashier × GoHighLevel</h3>
      <ol className={styles.flowNodes}>
        <li className={styles.flowTrack} aria-hidden="true">
          <motion.span
            initial={false}
            animate={{ scaleX: active / (STEPS.length - 1) }}
            transition={{ duration: reduced ? 0 : 0.38, ease: [0.22, 0.74, 0.2, 1] }}
          />
        </li>
        {STEPS.map(({ label, Icon }, index) => (
          <li key={label}>
            <button
              type="button"
              aria-pressed={active === index}
              aria-controls="flow-detail"
              onClick={() => setActive(index)}
            >
              <span className={styles.flowIcon}><Icon size={22} aria-hidden="true" /></span>
              {label}
            </button>
          </li>
        ))}
      </ol>
      <div id="flow-detail" className={styles.flowDetail} aria-live="polite">
        <AnimatePresence mode={reduced ? "sync" : "wait"} initial={false}>
          <motion.div
            key={step.label}
            initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: reduced ? 0 : 0.17 }}
          >
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
