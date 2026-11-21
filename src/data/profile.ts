import type { Locale } from "../i18n/ui";

// Facts that read the same in every language; translatable copy lives in src/i18n/ui.ts.
export const profile = {
    name: "Harel Olguín",
    stack: "typescript · vue · postgres",
    // Animated pixel art (breathing and blinking) drawn on a 34×89 grid; render it at
    // whole multiples so every art pixel stays square (3× = 102×267).
    avatar: "/avatar.svg",
    cv: {
        en: "/cv/harel-olguin-cv-en.pdf",
        es: "/cv/harel-olguin-cv-es.pdf",
    } satisfies Record<Locale, string>,
} as const;
