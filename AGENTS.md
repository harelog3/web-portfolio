## Stack

- [Astro](https://docs.astro.build) v7 (static output) + Tailwind CSS v4 via `@tailwindcss/vite`
- Static output (`dist/`); hosting not decided yet, so keep the project adapter-free and avoid host-specific config.
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
- `pnpm preview` — preview the production build locally
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

## Components

Componentize: pages only compose sections, and sections are built from small components that take props.

```
src/components/
  layout/      site chrome and page wrappers (Header, LanguagePicker, ThemeToggle, Section)
  ui/          design-system primitives (Button, Highlight, Cursor, StatusDot)
  actions/     meaningful actions that wrap ui/Button and resolve their own target (ContactButton, CvButton, ProjectsLink)
  sections/
    hero/      one folder per page section: Hero.astro is the entry, HeroTitle/HeroCard/... are its parts
src/data/      facts that don't change per language (name, stack, CV paths)
src/i18n/      translatable copy (ui.ts) and helpers
```

- Pages stay thin: `pages/[locale]/index.astro` renders `<Hero />` (and later `<Experience />`, ...), never large blocks of markup.
- A new section goes in `sections/<name>/` with `<Name>.astro` as its entry and `<Name><Part>.astro` for its pieces. Wrap it in `layout/Section.astro` to get the shared width, padding and line-number gutter.
- `ui/` components know nothing about locale or site data: everything comes in through props and slots. They accept a `class` prop (and `...rest` where it makes sense) so callers can adjust layout.
- `actions/` and `sections/` may read `Astro.currentLocale` and `t()`; copy goes in `src/i18n/ui.ts` (both locales), never hardcoded.
- Use `.astro` by default; a `.tsx` Solid component only when it needs client-side interactivity (see below).
- Style with the Sedimento tokens in `src/styles/global.css` (`bg-moss`, `text-ink-muted`, `text-display`, ...), not raw colors or sizes.

## Motion

- CSS only, no JS. Utilities live in `src/styles/global.css`.
- Content visible on load (the hero): `motion-safe:animate-settle` plus `stagger-N` (80ms steps) to order blocks top to bottom. `animate-deposit` (with `origin-left`) is for strata-like bars.
- Sections below the fold: add `reveal` to each block (the heading, every card or item, the gutter via `gutterClass`), never to the `Section` itself or to a block and its ancestor. Use `reveal-deposit` for the heading rule and `reveal-offset-N` to stagger blocks that sit side by side. It's a scroll-driven animation (`animation-timeline: view()`), already guarded by `@supports` and reduced motion; unsupported browsers just show the content.
- Smooth scrolling for in-page anchors is set globally (only without reduced motion); don't add JS scrolling.
- Always gate animations with `motion-safe:` (or `motion-reduce:animate-none` for looping ones like the cursor).
- Page transitions, when there's more than one page: prefer native cross-document view transitions (`@view-transition { navigation: auto; }`, zero JS) over Astro's `<ClientRouter />`.

## Interactivity

- Prefer SolidJS components (islands with a `client:*` directive) when a component needs JS interactivity, instead of `<script>` tags in `.astro` files.
- A plain `<script>` is fine only when it's necessary: code that must run before first paint (e.g. the inline theme script in `<head>`, which an island would hydrate too late), or a few lines that complement a native platform feature (e.g. Popover API, `<dialog>`) where a framework adds nothing.
- Prefer native HTML behavior (popover, `<details>`, `<dialog>`, links) over JS when it covers the need.

## Code comments

- Write code comments in English.
- Add them where they explain _why_ (non-obvious decisions, constraints, trade-offs), not to restate _what_ the code does.

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
