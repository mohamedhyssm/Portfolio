"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/201225444992",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
    accent: "from-emerald-500 to-teal-500",
    hoverBg:
      "hover:border-emerald-500/40 hover:bg-emerald-500/8 dark:hover:bg-emerald-500/10",
    hoverText: "hover:text-emerald-600 dark:hover:text-emerald-400",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/MohamedHaithemMohamedAhemed",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    accent: "from-blue-600 to-blue-500",
    hoverBg:
      "hover:border-blue-500/40 hover:bg-blue-500/8 dark:hover:bg-blue-500/10",
    hoverText: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-haytham-a04335210",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accent: "from-sky-600 to-blue-600",
    hoverBg:
      "hover:border-sky-500/40 hover:bg-sky-500/8 dark:hover:bg-sky-500/10",
    hoverText: "hover:text-sky-600 dark:hover:text-sky-400",
  },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
];

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

          {/* Name */}
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
                  {s.icon}
                </span>
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="my-14 h-px bg-linear-to-r from-transparent via-border/70 dark:via-white/10 to-transparent" />

        {/* ── Bottom: nav + copyright ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: name */}
          <p className="text-sm font-bold text-foreground">
            Mohamed Haytham
            <span className="ml-1.5 text-muted-foreground font-normal">
              — Full-Stack Engineer
            </span>
          </p>

          {/* Center: nav */}
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: copyright */}
          <p className="text-xs text-muted-foreground/60">
            © {year} · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
