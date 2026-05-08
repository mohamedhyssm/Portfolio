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
      "A full production LMS platform built for a real biology instructor and thousands of students, featuring role-based dashboards, exam workflows, analytics, video delivery, and student performance tracking.",
    highlights: [
      "Multi-role system for admins, assistants, students, and parents",
      "Advanced exams, assignments, grading, and retry workflows",
      "Custom video streaming architecture that reduced platform costs significantly",
      "Student performance monitoring with automated failure notifications",
      "Role and permission management system for assistants",
      "Solo-developed from architecture to deployment",
    ],
    tags: ["Next.js", "Express.js", "PostgreSQL", "Redis"],
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
      "End-to-end worker and representative management system",
      "Cost tracking with operational analytics for decision-making",
      "Automated invoice generation for factory operations",
      "Centralized operations and production dashboard",
      "Solo-developed from architecture to deployment",
    ],
    tags: ["Next.js", "Express.js", "PostgreSQL", "Redis"],
    image: "/factory-1.png",
    accent: "from-emerald-500 to-cyan-500",
  },
];
