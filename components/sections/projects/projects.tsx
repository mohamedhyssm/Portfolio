/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, FolderOpen, ArrowRight, X } from "lucide-react";
import { useRef, useState } from "react";
import { PROJECTS, type Project } from "@/data/projects";
import ProjectCard from "./projects-card";


/* ─── Section ─── */
const Projects = () => {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[-10%] left-[-5%] w-125 h-125 rounded-full bg-violet-500/7 dark:bg-violet-600/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 rounded-full bg-cyan-500/7 dark:bg-cyan-600/8 blur-[130px]" />
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
              <span className="absolute -bottom-1 left-0 right-0 h-0.75 bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 rounded-full opacity-40" />
            </span>
          </h2>

          <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Not side projects. Not tutorial clones.{" "}
            <strong className="text-foreground font-semibold">
              Real systems
            </strong>{" "}
            used by real people
          </p>
        </motion.div>

        {/* ── Project cards ── */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={{ ...project, index }} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4 font-medium">
            and many more to come
          </p>
          <a
            href="https://github.com/mohamedhyssm?tab=repositories"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 transition-colors group"
          >
            See all projects on GitHub
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
