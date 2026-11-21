// Facts that read the same in every language. Descriptions are translated in
// src/i18n/ui.ts under `projects.<id>.*`.
export type ProjectId = "move" | "portfolio" | "codeHunt";

export interface Project {
    id: ProjectId;
    name: string;
    year: string;
    /** Lowercase, like the stack section; the featured card shows them all as tags. */
    stack: string[];
    /** Public repo or demo. Private projects have none, so their card isn't a link. */
    url?: string;
    /** Built with others: the copy says which part was mine. */
    team?: boolean;
    /** Still being built. */
    wip?: boolean;
}

/** The big card at the top of the section. */
export const featured: Project = {
    id: "move",
    name: "MovE",
    year: "2025",
    stack: ["nestjs", "prisma", "postgres", "redis", "aws", "github actions"],
    // The backend repo, not the org: that's the part I built.
    url: "https://github.com/Harel-ITESO/mov-e-backend",
    team: true,
};

/** Smaller cards under the featured one, in reading order. */
export const projects: Project[] = [
    {
        id: "portfolio",
        name: "web-portfolio",
        year: "2026",
        stack: ["astro", "solid", "tailwind"],
        url: "https://github.com/harelog3/web-portfolio",
    },
    {
        id: "codeHunt",
        name: "code-hunt",
        year: "2026",
        stack: ["nuxt", "drizzle", "postgres"],
        wip: true,
    },
];
