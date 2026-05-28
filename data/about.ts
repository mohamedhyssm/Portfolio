export interface TimelineItem {
  title: string;
  text: string;
  align: "left" | "right";
  tag: string;
  accent: string;
}

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    title: "The beginning",
    text: "My programming journey started with the Digital Egypt Cubs Initiative during the summer after first year of secondary school. I completed the program with 100% attendance and never missed a single lecture.",
    align: "left",
    tag: "2022",
    accent: "from-violet-500 to-purple-500",
  },
  {
    title: "Leadership mindset",
    text: "During the program, I was actively involved in activities and often took on leadership roles. It helped me become more comfortable taking responsibility and working with others.",
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
    text: "After the program ended, I kept learning on my own and built my stack around Next.js, NestJs, PostgreSQL, Redis, and modern backend architecture.",
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
    text: "Today, I care about building systems that are maintainable, scalable, and useful in real-world scenarios.",
    align: "right",
    tag: "Present",
    accent: "from-orange-500 to-violet-500",
  },
];
