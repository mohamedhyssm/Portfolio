"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-border/60 dark:border-white/8"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-violet-500/6 dark:bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* ── Top: name + tagline + socials ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-300 text-xs font-bold tracking-[0.22em] uppercase shadow-sm">
            <Sparkles size={12} />
            Get in touch
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
            Let&apos;s{" "}
            <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              work together
            </span>
          </h2>

          <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
            Available for freelance work and full-time roles. If you have a
            project that needs real engineering, reach out.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            {SOCIAL_LINKS.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className={`group flex items-center gap-3 px-5 py-3 rounded-2xl border border-border/60 dark:border-white/10 bg-card/60 dark:bg-white/5 backdrop-blur-sm text-sm font-semibold text-foreground transition-all duration-300 shadow-sm hover:shadow-lg ${s.hoverBg} ${s.hoverText}`}
              >
                <span
                  className={`w-8 h-8 rounded-xl bg-linear-to-br ${s.accent} flex items-center justify-center text-white shadow-sm shrink-0`}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d={s.icon} />
                  </svg>
                </span>
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="my-14 h-px bg-linear-to-r from-transparent via-border/70 dark:via-white/10 to-transparent" />

        {/* ── Bottom: name + copyright ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm font-bold text-foreground">
            Mohamed Haytham
            <span className="ml-1.5 text-muted-foreground font-normal">
              — Full-Stack Web Developer
            </span>
          </p>

          <p className="text-xs text-muted-foreground/60">
            © {year} · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
