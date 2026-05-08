"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { SKILL_CATEGORIES, type SkillCategory } from "@/data/skills";

/* ─── Icon map (keeps data file free of JSX) ─── */
const ICON_MAP: Record<string, React.ReactNode> = {
  frontend: <Code2 size={20} />,
  backend: <Server size={20} />,
  database: <Database size={20} />,
  tools: <Wrench size={20} />,
};

/* ─── Animation variants ─── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const pillContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.25 },
  },
};

/* ─── Category Card ─── */
function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-6 overflow-hidden"
    >
      {/* Glow blob */}
      <div
        className={`absolute -top-10 -right-10 w-36 h-36 rounded-full bg-linear-to-br ${category.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Header */}
      <div className="relative flex items-center gap-3 mb-5">
        <span
          className={`flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br ${category.color} text-white shadow-lg`}
        >
          {ICON_MAP[category.id]}
        </span>
        <h3 className="text-base font-semibold text-foreground">
          {category.label}
        </h3>
      </div>

      {/* Pills */}
      <motion.ul
        variants={pillContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative flex flex-wrap gap-2"
      >
        {category.skills.map((skill) => (
          <motion.li key={skill} variants={pillVariants}>
            <span className="inline-block text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors duration-200 cursor-default">
              {skill}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

/* ─── Section ─── */
export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">
            What I work with
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My{" "}
            <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-md mx-auto">
            Technologies I use to build scalable and production-ready web
            applications.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <SkillCard key={cat.id} category={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
