export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
  image: string;
  accent: string;
}

export const PROJECTS: Project[] = [
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
