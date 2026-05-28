export interface SkillCategory {
  id: string;
  label: string;
  color: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    label: "Front-End",
    color: "from-violet-500 to-blue-500",
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
    color: "from-orange-500 to-red-500",
    skills: [
      "Node.js",
      "NestJs",
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
    color: "from-emerald-500 to-teal-500",
    skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "Redis"],
  },
  {
    id: "tools",
    label: "Tools & Technologies",
    color: "from-yellow-500 to-amber-500",
    skills: [
      "Git",
      "GitHub",
      "Coolify (deployment on VPS)",
      "Cloudflare R2 & CDN",
      "Postman",
      "Docker (Basics)",
    ],
  },
];

export const HERO_TECH_TAGS = [
  "Next.js",
  "TypeScript",
  "NestJs",
  "Node.js",
  "PostgreSQL",
  "Redis",
];
