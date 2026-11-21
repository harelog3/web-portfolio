// Tech names read the same in every language; area labels are translated in src/i18n/ui.ts
// under `stack.area.<area>`.
export interface StackGroup {
    area: "languages" | "frontend" | "backend" | "data" | "infra";
    /** What I know in depth and reach for first. */
    strong: string[];
    /** Used in real projects, without the same depth. */
    familiar: string[];
}

export const stack: StackGroup[] = [
    {
        area: "languages",
        strong: ["TypeScript"],
        familiar: ["JavaScript", "Go", "Python", "Java", "C#"],
    },
    {
        area: "frontend",
        strong: ["Vue", "Nuxt"],
        familiar: ["React", "Next.js", "Astro", "Solid", "Tailwind CSS"],
    },
    {
        area: "backend",
        strong: ["NestJS"],
        familiar: ["Node.js", "Express", "Hono", "ASP.NET"],
    },
    {
        area: "data",
        strong: ["PostgreSQL"],
        familiar: ["MongoDB", "MySQL"],
    },
    {
        area: "infra",
        strong: ["Docker"],
        familiar: ["AWS", "Cloudflare", "Kubernetes", "GitHub Actions", "Linux"],
    },
];
