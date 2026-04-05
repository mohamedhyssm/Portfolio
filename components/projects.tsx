/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Layers, FolderOpen, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
  image: string;
  accent: string;
  index: number;
}

const PROJECTS: Omit<Project, "index">[] = [
  {
    title: "LMS Platform",
    subtitle: "Full-stack learning management system",
    description:
      "A production-ready learning system engineered for real institutions — not a demo, not a clone. Every feature was designed around how teachers teach and students actually learn.",
    highlights: [
      "Admin dashboard with deep analytics",
      "Smart revision & spaced repetition system",
      "Exams, assignments & grading engine",
      "Video management with streaming",
      "Parent tracking & progress insights",
    ],
    tags: ["Next.js", "PostgreSQL", "Redis", "Express", "Production"],
    link: "https://kotbacademy.com",
    image: "/lms-1.png",
    accent: "from-violet-500 to-blue-500",
  },
  {
    title: "Factory Management System",
    subtitle: "Operations & workforce management",
    description:
      "Built to replace paper-based factory workflows with a clean, fast digital system. Handles the full lifecycle from worker management to invoice generation — all in one place.",
    highlights: [
      "Worker & representative management",
      "Real-time cost tracking",
      "Automated invoice generation",
      "Operations & production dashboard",
    ],
    tags: ["Next.js", "PostgreSQL", "Express", "Redis"],
    image: "/factory-1.png",
    accent: "from-emerald-500 to-cyan-500",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = project.index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="rounded-3xl p-px bg-linear-to-br from-border/70 to-border/30 dark:from-white/10 dark:to-white/5 hover:from-violet-500/35 hover:to-blue-500/25 transition-all duration-500 shadow-xl hover:shadow-violet-500/10">
        <div className="rounded-[calc(1.5rem-1px)] bg-card/80 dark:bg-zinc-900/70 backdrop-blur-xl overflow-hidden">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 items-stretch ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            {/* ── Image side ── */}
            <div className="relative overflow-hidden min-h-[280px] lg:min-h-[420px]">
              {/* Checkered/grid background for contain mode */}
              <div className="absolute inset-0 bg-muted/40 dark:bg-zinc-800/50">
                <div
                  className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                {/* Gentle center radial glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />
              </div>

              {/* shimmer overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.accent} opacity-0 group-hover:opacity-8 transition-opacity duration-500 z-10`}
              />

              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Number watermark */}
              <div className="absolute top-4 left-4 z-20">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r ${project.accent} text-white text-[11px] font-bold uppercase tracking-widest shadow-lg`}
                >
                  {String(project.index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Live link badge */}
              {project.link && (
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 dark:bg-zinc-900/90 border border-border/60 dark:border-white/15 text-xs font-bold text-foreground backdrop-blur-sm shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </div>
                </div>
              )}
            </div>

            {/* ── Text side ── */}
            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
              {/* Top meta */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-10 h-10 rounded-xl bg-linear-to-br ${project.accent} flex items-center justify-center shadow-sm`}
                >
                  <Layers size={18} className="text-white" />
                </div>
                <span className="text-[11px] font-semibold text-muted-foreground/50 tabular-nums">
                  {String(project.index + 1).padStart(2, "0")} /{" "}
                  {String(PROJECTS.length).padStart(2, "0")}
                </span>
              </div>

              {/* Subtitle */}
              <p
                className={`text-xs font-bold uppercase tracking-[0.22em] bg-linear-to-r ${project.accent} bg-clip-text text-transparent mb-2`}
              >
                {project.subtitle}
              </p>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-7">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      size={15}
                      className={`mt-0.5 shrink-0 text-transparent`}
                      style={{
                        fill: "url(#grad)",
                        stroke: "none",
                      }}
                    />
                    <CheckCircle2
                      size={15}
                      className={`mt-0.5 shrink-0 hidden`}
                    />
                    <span
                      className={`mt-0.5 shrink-0 w-[15px] h-[15px] relative`}
                    >
                      <svg
                        viewBox="0 0 15 15"
                        className="absolute inset-0 w-full h-full"
                      >
                        <defs>
                          <linearGradient
                            id={`grad-${project.index}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor={
                                project.index === 0 ? "#8b5cf6" : "#10b981"
                              }
                            />
                            <stop
                              offset="100%"
                              stopColor={
                                project.index === 0 ? "#3b82f6" : "#06b6d4"
                              }
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M7.5 0a7.5 7.5 0 1 1 0 15A7.5 7.5 0 0 1 7.5 0zm3.28 4.54L6.5 8.83 4.22 6.55a.75.75 0 1 0-1.06 1.06l2.81 2.81a.75.75 0 0 0 1.06 0l4.81-4.82a.75.75 0 0 0-1.06-1.06z"
                          fill={`url(#grad-${project.index})`}
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg border border-border/60 dark:border-white/8 bg-muted/50 dark:bg-white/5 text-xs font-semibold text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold text-white bg-linear-to-r ${project.accent} shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300`}
                  >
                    View live project
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold text-muted-foreground border border-border/60 dark:border-white/10 bg-muted/30 dark:bg-white/5 cursor-default select-none">
                    Private project
                    <FolderOpen size={15} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-violet-500/7 dark:bg-violet-600/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-500/7 dark:bg-cyan-600/8 blur-[130px]" />
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
            <FolderOpen size={13} />
            Selected Work
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
            Systems built to{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                actually work
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 rounded-full opacity-40" />
            </span>
          </h2>

          <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Not side projects. Not tutorial clones.{" "}
            <strong className="text-foreground font-semibold">
              Real systems
            </strong>{" "}
            used by real people — engineered to scale, built to last.
          </p>
        </motion.div>

        {/* ── Project cards ── */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={{ ...project, index }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
