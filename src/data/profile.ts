import type { Locale } from "../i18n/ui";

// Facts that read the same in every language; translatable copy lives in src/i18n/ui.ts.
export const profile = {
    name: "Harel Olguín",
    stack: "typescript · go · c#",
    // Pixel art drawn at 34×90 and exported at 8×; render it at whole multiples (3× = 102×270).
    avatar: "/avatar_complete.png",
    cv: {
        en: "/cv/harel-olguin-cv-en.pdf",
        es: "/cv/harel-olguin-cv-es.pdf",
    } satisfies Record<Locale, string>,
} as const;
