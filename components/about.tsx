"use client";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, Sparkles, ArrowRight } from "lucide-react";
import { useRef } from "react";

const TIMELINE_ITEMS = [
  {
    title: "The beginning",
    text: "My programming journey started with the Digital Egypt Cubs Initiative during the summer after first year of secondary school. I completed the program with 100% attendance and never missed a single lecture.",
    align: "left",
    tag: "2022",
    accent: "from-violet-500 to-purple-500",
  },
  {
    title: "Leadership mindset",
    text: "During the program, I was actively involved in activities and often took on leadership roles. That experience shaped the way I approach teamwork, responsibility, and building with intention.",
    align: "right",
    tag: "Growth",
    accent: "from-blue-500 to-violet-500",
  },
  {
    title: "Level Two certificate",
    text: "I completed Level Two of the initiative and received a certificate that marked a turning point in my journey. It pushed me to go deeper and take my growth seriously.",
    align: "left",
    tag: "Milestone",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Self-learning phase",
    text: "After the program ended, I kept learning on my own and built my stack around Next.js, Express, PostgreSQL, Redis, and modern backend architecture — staying curious and relentless.",
    align: "right",
    tag: "2023",
    accent: "from-violet-500 to-pink-500",
  },
  {
    title: "Real-world work",
    text: "My first major real project was a full LMS platform built entirely by me — admin dashboard, revenue tracking, notifications, exams, assignments, video management, student analytics, and performance insights.",
    align: "left",
    tag: "Production",
    accent: "from-emerald-500 to-cyan-500",
  },
  {
    title: "What I build now",
    text: "Today, I focus on production-ready systems that are clean, scalable, and designed to solve real problems — not just look good in a demo. Every line of code has a purpose.",
    align: "right",
    tag: "Present",
    accent: "from-orange-500 to-violet-500",
  },
];

interface TimelineCardProps {
  item: (typeof TIMELINE_ITEMS)[0];
  index: number;
  isLeft: boolean;
}

const TimelineCard = ({ item, index, isLeft }: TimelineCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0"
    >
      {/* Animated center dot */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          }}
          className="relative"
        >
          <div
            className={`absolute inset-0 rounded-full bg-linear-to-r ${item.accent} blur-md opacity-60 animate-pulse`}
          />
          <div
            className={`relative w-5 h-5 rounded-full bg-linear-to-r ${item.accent} shadow-lg border-2 border-white dark:border-zinc-900`}
          />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 10 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "md:max-w-xl w-full",
          isLeft
            ? "md:pr-14 md:justify-self-end"
            : "md:pl-14 md:justify-self-start md:col-start-2",
        ].join(" ")}
      >
        <div className="group relative rounded-3xl p-px bg-linear-to-br from-border/60 via-transparent to-border/60 dark:from-white/10 dark:via-transparent dark:to-white/10 hover:from-violet-500/40 hover:to-blue-500/40 transition-all duration-500 shadow-xl hover:shadow-violet-500/10">
          {/* Card inner */}
          <div className="rounded-[calc(1.5rem-1px)] bg-card/80 dark:bg-zinc-900/70 backdrop-blur-xl p-6 md:p-8">
            {/* Top row */}
            <div className="flex items-center justify-between mb-5">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-linear-to-r ${item.accent} text-white shadow-sm`}
              >
                {item.tag}
              </span>
              <span className="text-[11px] font-semibold text-muted-foreground/60 tabular-nums">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(TIMELINE_ITEMS.length).padStart(2, "0")}
              </span>
            </div>

            {/* Icon + title */}
            <div className="flex items-start gap-3 mb-4">
              <div
                className={`mt-0.5 shrink-0 w-8 h-8 rounded-xl bg-linear-to-br ${item.accent} flex items-center justify-center shadow`}
              >
                <BadgeCheck size={15} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight">
                {item.title}
              </h3>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {item.text}
            </p>

            {/* Bottom shimmer line */}
            <div
              className={`mt-6 h-px w-0 group-hover:w-full bg-linear-to-r ${item.accent} opacity-40 transition-all duration-700 rounded-full`}
            />
          </div>
        </div>
      </motion.div>

      {/* Spacer for alternate side */}
      {isLeft && <div className="hidden md:block" />}
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background — adapts to light/dark */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-500/8 dark:bg-violet-600/10 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/8 dark:bg-blue-600/10 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-300 text-xs font-bold tracking-[0.22em] uppercase mb-6 shadow-sm">
            <Sparkles size={13} />
            About me
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
            From a summer initiative to{" "}
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                real production systems
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-linear-to-r from-violet-500 via-blue-500 to-cyan-400 rounded-full opacity-40" />
            </span>
          </h2>

          <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I started early, stayed consistent, kept learning, and turned that
            momentum into{" "}
            <strong className="text-foreground font-semibold">
              real products that ship
            </strong>{" "}
            — not just side projects that collect dust.
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex items-center justify-center gap-8 flex-wrap"
          >
            {[
              { value: "100%", label: "Attendance" },
              { value: "3+", label: "Years building" },
              { value: "∞", label: "Lines shipped" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-black bg-linear-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px hidden md:block">
            <div className="h-full w-full bg-linear-to-b from-transparent via-violet-500/30 to-transparent dark:via-violet-400/25" />
          </div>

          <div className="flex flex-col gap-14 md:gap-20">
            {TIMELINE_ITEMS.map((item, index) => (
              <TimelineCard
                key={item.title}
                item={item}
                index={index}
                isLeft={item.align === "left"}
              />
            ))}
          </div>
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
            Curious about what I&apos;ve built?
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 transition-colors group"
          >
            See my projects
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

export default About;
