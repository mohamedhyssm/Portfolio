/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";

const TECH_TAGS = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Redis",
];

export function Hero() {
  // ── Variants ─────────────────────────────────────

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.6,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const heading = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const tagsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const tagItem = {
    hidden: { opacity: 0, y: 16, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const buttonsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const buttonItem = {
    hidden: { opacity: 0, y: 24, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const canvasVariant = {
    hidden: { opacity: 0, scale: 0.92, x: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-10"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[38vw] h-[38vw] rounded-full bg-blue-600/8 blur-[110px]" />
        <div className="absolute top-[30%] right-[25%] w-[20vw] h-[20vw] rounded-full bg-indigo-500/6 blur-[90px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pb-16"
      >
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* LEFT */}
          <div className="flex flex-col justify-center gap-7 lg:max-w-xl">
            {/* Eyebrow */}
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/8 text-violet-300 text-xs font-semibold tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Available for work
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={heading}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight text-foreground"
            >
              Building{" "}
              <span className="bg-linear-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                high-performance systems
              </span>{" "}
              for real-world scale.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={item}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Full Stack Developer specializing in{" "}
              <span className="text-foreground font-medium">Next.js</span>,{" "}
              <span className="text-foreground font-medium">Express</span>, and{" "}
              <span className="text-foreground font-medium">
                high-performance architectures
              </span>
              .
            </motion.p>

            {/* Tags */}
            <motion.div
              variants={tagsContainer}
              className="flex flex-wrap gap-2"
            >
              {TECH_TAGS.map((tag) => (
                <motion.span
                  key={tag}
                  variants={tagItem}
                  className="px-3 py-1 text-xs font-medium rounded-md border border-white/10 bg-white/4 text-muted-foreground hover:border-violet-500/40 hover:text-violet-300 transition-colors duration-200"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={buttonsContainer} className="flex gap-4">
              <motion.a
                variants={buttonItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-linear-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold shadow-lg"
              >
                View Projects
                <ArrowRight
                  className="group-hover:translate-x-1 transition"
                  size={16}
                />
              </motion.a>

              <motion.a
                variants={buttonItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-white/15 bg-white/4 text-sm font-semibold backdrop-blur-sm"
              >
                <Mail size={15} className="text-violet-400" />
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={canvasVariant}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex justify-center items-center"
          >
            <div className="absolute inset-[10%] rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
            <img src="/Hero.jpg" alt="" className="rounded-2xl" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/50"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">
          Scroll
        </span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
