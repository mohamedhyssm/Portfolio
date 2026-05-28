/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, FolderOpen, ArrowRight, X } from "lucide-react";
import { useRef, useState } from "react";
import { PROJECTS, type Project } from "@/data/projects";

/* ─── Sub-component ─── */
interface ProjectCardProps {
  project: Project & { index: number };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = project.index % 2 === 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
            <div 
              className="relative overflow-hidden min-h-70 lg:min-h-105 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
              title="Click to view full image"
            >
              <div className="absolute inset-0 bg-muted/40 dark:bg-zinc-800/50">
                <div
                  className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
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

              {/* Number badge */}
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
                {project.highlights.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span
                      className={`mt-0.5 shrink-0 w-3.75 h-3.75 relative`}
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold text-white bg-linear-to-r ${project.accent} shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300`}
                  >
                    View live project
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10 bg-background/80 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors z-110"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[90vw] md:max-w-6xl max-h-[90vh] rounded-2xl flex items-center justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-[85vh] object-contain drop-shadow-2xl rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;