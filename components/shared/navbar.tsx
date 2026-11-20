"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "@/components/shared/brand";
import { ModeToggle } from "@/components/theme/toggle-mode";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-border bg-background/95">
      <nav aria-label="Main navigation" className="site-container flex h-[72px] items-center justify-between gap-4">
        <div onClick={() => setMobileOpen(false)}>
          <Brand />
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="nav-link">{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ModeToggle />
          <a href="#contact" className="nav-link hidden items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 md:inline-flex">
            Contact <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="grid size-9 cursor-pointer place-items-center rounded-lg border border-border md:hidden"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!mobileOpen} className="border-t border-border bg-background md:hidden">
        <ul className="site-container py-2">
          {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={() => setMobileOpen(false)} className="nav-link block py-3">{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
