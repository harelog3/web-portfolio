import solidJs from "@astrojs/solid-js";
// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    site: "https://harelolguin.dev",

    i18n: {
        locales: ["en", "es"],
        defaultLocale: "en",
        routing: {
            // Every locale gets a URL prefix (/en/, /es/) so the root can act as a
            // language-detecting entry point instead of being a content page.
            prefixDefaultLocale: true,
        },
    },

    fonts: [
        {
            // Fontsource files are downloaded at build time and self-hosted; the
            // variable font covers every weight the type scale uses (400-700).
            provider: fontProviders.fontsource(),
            name: "Fira Code",
            cssVariable: "--font-fira-code",
            styles: ["normal"],
            weights: ["300 700"],
            fallbacks: ["ui-monospace", "monospace"],
        },
    ],

    integrations: [solidJs()],
});
