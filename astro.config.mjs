import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    i18n: {
        locales: ["en", "es"],
        defaultLocale: "en",
        routing: {
            // Every locale gets a URL prefix (/en/, /es/) so the root can act as a
            // language-detecting entry point instead of being a content page.
            prefixDefaultLocale: true,
        },
    },

    integrations: [solidJs()],
    adapter: cloudflare(),
});
