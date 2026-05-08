# Mohamed Haytham — Portfolio

A modern, dark-themed portfolio website for **Mohamed Haytham**, a Full-Stack Web Developer. Built for performance, clarity, and real-world presentation.

**Live:** [mohamedhaytham.vercel.app](https://mohamedhaytham.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS v4 |
| Components | Shadcn/ui |
| Animations | Framer Motion |
| Font | Noto Sans (Google Fonts) |
| Theme | next-themes (dark/light toggle) |
| Language | TypeScript |

---

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, font, ThemeProvider
│   ├── page.tsx            # Page assembly — imports all sections & shared components
│   └── globals.css         # Global styles & Tailwind tokens
│
├── components/
│   ├── sections/           # Page sections (one file per section)
│   │   ├── hero.tsx        # Hero section
│   │   ├── about.tsx       # About + Timeline section
│   │   ├── skills.tsx      # Skills grid section
│   │   ├── projects.tsx    # Projects showcase section
│   │   └── footer.tsx      # Footer + contact section
│   │
│   ├── shared/             # Reusable layout-level components
│   │   ├── navbar.tsx      # Fixed top navigation bar
│   │   └── floating-contact.tsx  # Floating FAB with social links
│   │
│   ├── theme/              # Theme utilities
│   │   ├── theme-provider.tsx
│   │   └── toggle-mode.tsx
│   │
│   └── ui/                 # Shadcn/ui primitives
│
├── data/                   # Static data (no JSX — pure TypeScript)
│   ├── about.ts            # Timeline items for the About section
│   ├── projects.ts         # Project list with highlights, tags, images
│   ├── skills.ts           # Skill categories + hero tech tags
│   └── social.ts           # Social links shared by Footer & FloatingContact
│
├── lib/
│   └── utils.ts            # cn() utility
│
└── public/                 # Static assets (images, logo)
    ├── Logo.png
    ├── Hero.jpg
    ├── lms-1.png
    └── factory-1.png
```

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen intro with animated heading, tech tags, and CTA buttons |
| **About** | Alternating timeline cards narrating the developer journey |
| **Skills** | 4-column card grid — Front-End, Back-End, Database, Tools |
| **Projects** | Full-width alternating project cards with live links |
| **Footer** | Contact section with social links and copyright |

---

## Running Locally

```bash
# Install dependencies
bun install

# Start dev server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Key Design Decisions

- **`data/` is JSX-free** — all data files export plain TypeScript. Icons that require JSX (e.g. Lucide icons in skills) are resolved via an `ICON_MAP` inside the component.
- **Social links are shared** — `data/social.ts` is the single source of truth for `Footer` and `FloatingContact`, eliminating duplication.
- **Sub-components stay private** — `TimelineCard` (about) and `ProjectCard` (projects) live inside their section file since they are not reused elsewhere.
- **`sections/` vs `shared/`** — sections are page-specific and rendered once; shared components (navbar, floating FAB) are layout-level.
