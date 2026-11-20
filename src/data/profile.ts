import type { Locale } from "../i18n/ui";

// Facts that read the same in every language; translatable copy lives in src/i18n/ui.ts.
export const profile = {
    name: "Harel Olguín",
    stack: "astro · solid · typescript",
    cv: {
        en: "/cv/harel-olguin-cv-en.pdf",
        es: "/cv/harel-olguin-cv-es.pdf",
    } satisfies Record<Locale, string>,
} as const;
