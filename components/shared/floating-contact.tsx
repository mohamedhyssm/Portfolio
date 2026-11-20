"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        aria-expanded={open}
        aria-controls="quick-contact"
        className="order-last grid size-12 cursor-pointer place-items-center rounded-full border border-white/30 bg-cobalt text-white shadow-lg"
      >
        {open ? <X size={20} aria-hidden="true" /> : <MessageCircle size={20} aria-hidden="true" />}
      </button>
      <ul id="quick-contact" hidden={!open} className="rounded-xl border border-border bg-card p-2 shadow-lg">
        {SOCIAL_LINKS.map(({ label, href, icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-muted">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current text-brand-link"><path d={icon} /></svg>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
