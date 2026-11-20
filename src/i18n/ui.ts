export const languages = {
    en: "English",
    es: "Español",
} as const;

export type Locale = keyof typeof languages;

export const defaultLang: Locale = "en";

const en = {
    "site.title": "Portfolio",
    "site.description": "Personal portfolio",
    "nav.language": "Language",
    "counter.label": "Counter",
};

export const ui = {
    en,
    // `satisfies` makes a missing or misspelled key in a translation a type error.
    es: {
        "site.title": "Portafolio",
        "site.description": "Portafolio personal",
        "nav.language": "Idioma",
        "counter.label": "Contador",
    } satisfies Record<keyof typeof en, string>,
} as const;

export type UIKey = keyof typeof en;
