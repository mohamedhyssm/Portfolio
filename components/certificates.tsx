"use client";
import { ArrowUpRight, BadgeCheck, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const CERT_DETAILS = [
  {
    icon: BadgeCheck,
    label: "Verified credential",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Award,
    label: "Level Two completion",
    color: "from-violet-500 to-blue-500",
  },
  {
    icon: ExternalLink,
    label: "Publicly accessible",
    color: "from-blue-500 to-cyan-500",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="relative py-28 overflow-hidden">
      {/* Background glows — light + dark aware */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-500/7 dark:bg-violet-600/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/7 dark:bg-blue-600/10 blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-300 text-xs font-bold tracking-[0.22em] uppercase mb-6 shadow-sm">
            <BadgeCheck size={13} />
            Certificates
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
            Proof of{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                commitment
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 rounded-full opacity-40" />
            </span>
          </h2>

          <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            These aren&apos;t participation trophies.{" "}
            <strong className="text-foreground font-semibold">
              They&apos;re evidence of discipline
            </strong>{" "}
            — showing up every single day and finishing what I started.
          </p>
        </motion.div>

        {/* ── Certificate card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* ── Left: info panel ── */}
            <div className="rounded-3xl p-px bg-linear-to-br from-border/60 to-border/30 dark:from-white/10 dark:to-white/5 hover:from-violet-500/30 hover:to-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-violet-500/10 group">
              <div className="h-full rounded-[calc(1.5rem-1px)] bg-card/80 dark:bg-zinc-900/70 backdrop-blur-xl p-7 md:p-10 flex flex-col">
                {/* Top badge + number */}
                <div className="flex items-center justify-between mb-7">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linear-to-r from-violet-500 to-blue-500 text-white text-[11px] font-bold uppercase tracking-widest shadow">
                    <BadgeCheck size={12} />
                    Verified
                  </span>
                  <span className="text-[11px] font-semibold text-muted-foreground/50 tabular-nums">
                    01 / 01
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-5">
                  Level Two completion certificate
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  This certificate represents one of the most important
                  milestones in my early journey. It reflects consistency,
                  discipline, and the decision to keep growing beyond the
                  classroom.
                </p>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  It was not just a certificate. It was proof that I could
                  commit fully, finish what I started, and keep pushing into
                  bigger challenges.
                </p>

                {/* Detail chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {CERT_DETAILS.map((d) => (
                    <div
                      key={d.label}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border/60 dark:border-white/8 bg-muted/50 dark:bg-white/5 text-xs font-medium text-muted-foreground"
                    >
                      <div
                        className={`w-4 h-4 rounded-md bg-linear-to-br ${d.color} flex items-center justify-center shrink-0`}
                      >
                        <d.icon size={10} className="text-white" />
                      </div>
                      {d.label}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <a
                    href="https://www.udacity.com/certificate/e/bdc02a76-53b2-11ed-9b7b-03dc169ded51"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold text-white bg-linear-to-r from-violet-600 to-blue-600 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.03] hover:from-violet-500 hover:to-blue-500 transition-all duration-300"
                  >
                    View certificate
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Bottom shimmer line */}
                <div className="mt-6 h-px w-0 group-hover:w-full bg-linear-to-r from-violet-500 to-blue-500 opacity-30 transition-all duration-700 rounded-full" />
              </div>
            </div>

            {/* ── Right: image panel ── */}
            <motion.a
              href="https://www.udacity.com/certificate/e/bdc02a76-53b2-11ed-9b7b-03dc169ded51"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl p-px bg-linear-to-br from-border/60 to-border/30 dark:from-white/10 dark:to-white/5 hover:from-violet-500/40 hover:to-blue-500/40 transition-all duration-500 shadow-xl hover:shadow-violet-500/15 block"
            >
              <div className="h-full rounded-[calc(1.5rem-1px)] bg-card/80 dark:bg-zinc-900/70 backdrop-blur-xl p-4 md:p-5">
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl border border-border/40 dark:border-white/8 shadow-inner">
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-violet-500/15 via-transparent to-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Click to view label */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 dark:bg-zinc-900/90 border border-border/60 dark:border-white/15 text-xs font-bold text-foreground backdrop-blur-sm shadow-lg">
                      <ArrowUpRight size={13} className="text-violet-500" />
                      Open certificate
                    </div>
                  </div>

                  <Image
                    src="/level-two-certificate.png"
                    alt="Level Two Certificate — Digital Egypt Cubs Initiative"
                    width={1400}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    priority={false}
                  />
                </div>

                {/* Footer row */}
                <div className="mt-5 flex items-center justify-between gap-4 px-1">
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      Level Two Certificate
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Digital Egypt Cubs Initiative · Udacity
                    </p>
                  </div>

                  <div className="h-11 w-11 shrink-0 rounded-full bg-linear-to-br from-violet-500/15 to-blue-500/15 dark:from-violet-500/20 dark:to-blue-500/20 border border-violet-500/20 dark:border-violet-400/20 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:bg-linear-to-br group-hover:from-violet-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
