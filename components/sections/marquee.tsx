const ITEMS = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Prisma",
  "GoHighLevel",
  "Docker",
  "Tailwind CSS",
  "Webhooks",
];

export function Marquee() {
  return (
    <div className="marquee" role="region" aria-label="Technologies I work with">
      <div className="marquee-viewport">
        <div className="marquee-track">
          <ul className="marquee-list">
            {ITEMS.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className="marquee-list" aria-hidden="true">
            {ITEMS.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
