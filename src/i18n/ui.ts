export const languages = {
    en: "English",
    es: "Español",
} as const;

export type Locale = keyof typeof languages;

export const defaultLang: Locale = "en";

const en = {
    "site.title": "Harel - Portfolio",
    "site.description": "Personal portfolio",
    "nav.language": "Language",
    "nav.main": "Main",
    "nav.home": "home",
    "nav.projects": "projects",
    "nav.experience": "experience",
    "nav.contact": "contact",
    "nav.menu": "menu",
    "nav.close": "close",
    "nav.available": "available",
    "nav.skip": "skip to content",
    "theme.toggle": "toggle theme",
    "theme.toDark": "switch to dark theme",
    "theme.toLight": "switch to light theme",
    "counter.label": "Counter",
};

export const ui = {
    en,
    // `satisfies` makes a missing or misspelled key in a translation a type error.
    es: {
        "site.title": "Harel - Portafolio",
        "site.description": "Portafolio personal",
        "nav.language": "Idioma",
        "nav.main": "Principal",
        "nav.home": "inicio",
        "nav.projects": "proyectos",
        "nav.experience": "experiencia",
        "nav.contact": "contacto",
        "nav.menu": "menú",
        "nav.close": "cerrar",
        "nav.available": "disponible",
        "nav.skip": "saltar al contenido",
        "theme.toggle": "cambiar tema",
        "theme.toDark": "cambiar a tema noche",
        "theme.toLight": "cambiar a tema día",
        "counter.label": "Contador",
    } satisfies Record<keyof typeof en, string>,
} as const;

export type UIKey = keyof typeof en;
