export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    label: "Front-End",
    description: "I use Next.js and TypeScript to build interfaces such as the student and admin dashboards in Kotb Academy.",
    skills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "React Query",
      "React Table",
      "Zustand",
      "Axios",
    ],
  },
  {
    id: "backend",
    label: "Back-End",
    description: "I build APIs and application logic for workflows like exams, grading, and role-based access.",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "Authentication (JWT)",
      "Refresh Token Rotation",
      "Security (Helmet, CORS)",
      "Rate Limiting",
    ],
  },
  {
    id: "database",
    label: "Database",
    description: "I used PostgreSQL and Redis in Kotb Academy alongside the application’s exam and dashboard workflows.",
    skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "Redis"],
  },
  {
    id: "tools",
    label: "Tools & Technologies",
    description: "I use these tools to manage source code, test APIs, deploy to a VPS, and deliver media.",
    skills: [
      "Git",
      "GitHub",
      "Coolify (deployment on VPS)",
      "Cloudflare R2 & CDN",
      "Postman",
      "Docker (Basics)",
      "Jest",
    ],
  },
  {
    id: "automation",
    label: "Integrations & automation",
    description: "At Grove Engine, I connect payments, lead pipelines, and automated follow-ups with GoHighLevel.",
    skills: ["GoHighLevel", "Webhooks", "Payment Integrations", "Marketing Workflows"],
  },
];
