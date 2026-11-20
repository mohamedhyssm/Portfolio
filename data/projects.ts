import type { StaticImageData } from "next/image";
import alaaEssam from "@/public/Alaa Essam.png";
import factoryDashboard from "@/public/factory.png";
import kotbAcademy from "@/public/Kotb Academy.png";
import wamdaAcademy from "@/public/Wamda Academy.png";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  facts?: { value: string; label: string }[];
  highlights: string[];
  tags: string[];
  link?: string;
  image: StaticImageData;
}

export const GROVE_ENGINE_WEBSITES = [
  {
    title: "Wamda Academy",
    subtitle: "Programming enrollment website at Grove Engine",
    description:
      "An Arabic enrollment site for live programming and AI classes, with separate tracks for first- and second-year secondary students.",
    facts: [{ value: "2", label: "grades with live programming tracks" }],
    highlights: [
      "Program hub that distinguishes open enrollment from upcoming technology and career exploration programs",
      "Dedicated pages for first- and second-year secondary students with curriculum, instructors, and group schedules",
      "Enrollment flows for Arabic- and language-school groups, from group selection and registration to payment instructions",
    ],
    tags: [],
    link: "https://wamdacademy.com/home",
    image: wamdaAcademy,
  },
  {
    title: "Alaa Essam Academy",
    subtitle: "Data training website at Grove Engine",
    description:
      "An Arabic course catalog for hands-on training in data analytics, business intelligence, data engineering, and machine learning.",
    facts: [{ value: "5", label: "training programs featured" }],
    highlights: [
      "Program summaries that explain what learners will study and who each course is for",
      "Course discovery across Excel and Power BI reporting, SQL and Python analytics, data pipelines, and machine learning",
      "Instructor profiles, learner testimonials, and sample projects to help prospective students choose a program",
    ],
    tags: [],
    link: "https://alaa-essam.com/",
    image: alaaEssam,
  },
] satisfies Project[];

export const PROJECTS: Project[] = [
  {
    title: "Kotb Academy",
    subtitle: "Full-stack learning platform",
    description:
      "A production learning platform for a biology instructor, with exams, video delivery, and role-based dashboards.",
    facts: [{ value: "10,000+", label: "students served" }],
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
    image: kotbAcademy,
  },
  ...GROVE_ENGINE_WEBSITES,
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
    tags: [],
    image: factoryDashboard,
  },
];
