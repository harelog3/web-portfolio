## Stack

- [Astro](https://docs.astro.build) v7 (static output) + Tailwind CSS v4 via `@tailwindcss/vite`
- Deployed to Cloudflare Workers via `@astrojs/cloudflare` (`wrangler.jsonc`). Pages are prerendered by default; only routes with `export const prerender = false` run in the Worker.
- Global styles / Tailwind entry: `src/styles/global.css`
- Package manager: **pnpm** (do not use npm or yarn; keep `pnpm-lock.yaml` in sync)
- Node `>=22.23.4`

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Other commands:

- `pnpm build` — production build to `dist/`
- `pnpm build && pnpm exec wrangler dev` — preview the built Worker locally
- `pnpm exec wrangler deploy` — deploy to Cloudflare (after `pnpm build`)
- `pnpm generate-types` — regenerate Cloudflare binding types (`worker-configuration.d.ts`)
- `pnpm astro check` — type-check `.astro` and TS files
- `pnpm fmt` — format the whole project with oxfmt
- `pnpm fmt:check` — verify formatting without writing

## Formatting

- Formatter: [oxfmt](https://oxc.rs/docs/guide/usage/formatter), configured in `.oxfmtrc.json`. Do not add Prettier or other formatters.
- A husky `pre-commit` hook runs lint-staged, which formats staged files with oxfmt and re-stages them. Don't bypass it with `--no-verify`.
- Hooks are installed by the `prepare` script on `pnpm install`. Use `pnpm fmt` to format everything and `pnpm fmt:check` to verify.
- Style: 4-space indent, double quotes, semicolons, trailing commas, 100 columns.
- Imports and Tailwind classes are sorted automatically — don't hand-sort them.
- Whitespace in `.astro` files follows Astro v7's `compressHTML: "jsx"` rules: whitespace between inline elements across lines is dropped, so use `{" "}` for an intentional space.

## Commits

Always use [Conventional Commits](https://www.conventionalcommits.org/), for every commit, no exceptions:

```
<type>(<optional scope>): <short imperative description>

<optional body>
```

- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- Lowercase type, imperative mood, no trailing period, subject ≤ 72 chars.
- Breaking changes: `feat!:` and/or a `BREAKING CHANGE:` footer.
- One logical change per commit. Never commit to `main` directly; work on a branch.

## Skills and MCP servers

Before starting a task, check which skills and MCP servers are available and use the ones that apply instead of working from memory:

- **`astro-docs` MCP** (`.mcp.json`): search the official Astro docs before writing or changing Astro code, config, or integrations. Astro changes between majors (e.g. v7 whitespace handling), so verify APIs here.
- **`accessibility` skill** (`.claude/skills/accessibility`): use it when building or reviewing UI, and audit against WCAG 2.2 before considering a page done.

If a task would clearly benefit from a skill or MCP server that isn't installed (e.g. performance/SEO auditing, image optimization, browser testing for visual checks), suggest it to the user with a short reason, and don't install it without approval. Project skills are tracked in `skills-lock.json`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
