"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import styles from "./studio.module.css";

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("error");
    }
  }

  return (
    <div>
      <button type="button" onClick={copyEmail} className={styles.copyButton}>
        {state === "copied" ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
        {state === "copied" ? "Email copied" : "Copy email"}
      </button>
      <p role="status" className={state === "error" ? styles.copyStatus : "sr-only"}>
        {state === "error" ? email : state === "copied" ? "Email address copied to the clipboard." : ""}
      </p>
    </div>
  );
}
