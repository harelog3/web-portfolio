import { defaultLang, languages, ui, type Locale, type UIKey } from "./ui";

export const locales = Object.keys(languages) as Locale[];

export function isLocale(value: unknown): value is Locale {
    return typeof value === "string" && value in languages;
}

/** Narrows `Astro.currentLocale` (typed as a plain string) to a supported locale. */
export function getLocale(value: string | undefined): Locale {
    return isLocale(value) ? value : defaultLang;
}

export function useTranslations(lang: Locale) {
    return function t(key: UIKey): string {
        return ui[lang][key] ?? ui[defaultLang][key];
    };
}
