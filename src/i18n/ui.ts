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
    "hero.eyebrow": "software developer · mexico",
    "hero.greeting": "Hi, I'm",
    "hero.lede":
        "I build web applications, from the frontend to the database. Right now I'm making a point of sale connected to Shopify for a physical store.",
    "hero.card.title": "profile",
    "hero.card.name": "name",
    "hero.card.base": "base",
    "hero.card.baseValue": "mexico · utc−6",
    "hero.card.stack": "stack",
    "hero.card.now": "now",
    "hero.card.nowValue": "pos for retail",
    "hero.card.status": "status",
    "hero.card.statusValue": "open to projects",
    "actions.contact": "write to me",
    "actions.cv": "cv.pdf",
    "actions.cvLabel": "download cv.pdf",
    "actions.projects": "see projects",
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
        "hero.eyebrow": "desarrollador de software · méxico",
        "hero.greeting": "Hola, soy",
        "hero.lede":
            "Desarrollo aplicaciones web, del frontend a la base de datos. Ahora estoy haciendo un punto de venta conectado a Shopify para una tienda física.",
        "hero.card.title": "ficha",
        "hero.card.name": "nombre",
        "hero.card.base": "base",
        "hero.card.baseValue": "méxico · utc−6",
        "hero.card.stack": "stack",
        "hero.card.now": "ahora",
        "hero.card.nowValue": "pos para retail",
        "hero.card.status": "estado",
        "hero.card.statusValue": "abierto a proyectos",
        "actions.contact": "escríbeme",
        "actions.cv": "cv.pdf",
        "actions.cvLabel": "descargar cv.pdf",
        "actions.projects": "ver proyectos",
    } satisfies Record<keyof typeof en, string>,
} as const;

export type UIKey = keyof typeof en;
