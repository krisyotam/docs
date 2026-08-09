# Docs

Personal documentation template for Kris Yotam projects.

Clone it, set the brand name, write Markdown under `content/`. One monochrome shell with a left sidebar for every project that needs docs. Bun for the toolchain. AI assistant off unless you turn it on.

This is its own project. It does not track or merge upstream.

## What you get

- **Sidebar chrome** in the style of [notes.krisyotam.com](https://notes.krisyotam.com): brand cell, theme toggle, GitHub link, search that opens the center command palette
- **Every page in the tree** from your markdown (folders expand by default)
- **Monochrome UI** (zinc/neutral, no green primary)
- **Bun** as the package manager
- Full Markdown/MDC stack, optional i18n content layout, search (FTS), OG images, sitemap

## Requirements

- [Bun](https://bun.sh) 1.3+

## Quick start

```bash
git clone git@github.com:krisyotam/docs.git my-project-docs
cd my-project-docs
bun install
bun run dev:prepare
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next free port if 3000 is taken).

### Scripts

| Script | Purpose |
|--------|---------|
| `bun run dev` | Docs site (`docs/` app) |
| `bun run dev:prepare` | Generate Nuxt types for layer + apps (run after clone) |
| `bun run playground:dev` | Minimal playground app |
| `bun run lint` | ESLint |
| `bun run clean` | Wipe outputs and lockfile |

## Layout

```
docs/          # Documentation app (content + config)
layer/         # Theme layer (sidebar, layouts, modules)
cli/           # Scaffolding CLI
playground/    # Bare playground
```

For a real project you mostly touch:

| Path | What to change |
|------|----------------|
| `docs/content/` | Markdown pages (`en/`, `fr/`, …) |
| `docs/app/app.config.ts` | Brand title, GitHub, search, UI |
| `docs/nuxt.config.ts` | Site name, i18n, studio, MCP |
| `docs/content/*/index.md` | Landing page |

Homepage and every doc page are content files. The home page is `index.md` with MDC components (`::u-page-hero`, and so on), not a separate Vue app.

## Branding

Default brand string is **Docs**. Set it in `docs/app/app.config.ts`:

```ts
export default defineAppConfig({
  header: {
    title: 'Docs', // or "My Project"
  },
  github: {
    url: 'https://github.com/krisyotam/docs',
    rootDir: 'docs',
  },
  ui: {
    colors: {
      primary: 'neutral',
      neutral: 'zinc',
    },
  },
})
```

The sidebar GitHub button uses `appConfig.github.url`.

## Content

Numbered folders order the sidebar:

```
content/en/
  index.md
  1.getting-started/
    2.introduction.md
    3.installation.md
  2.concepts/
  …
```

Write normal Markdown plus [MDC](https://content.nuxt.com/docs/files/markdown) for Nuxt UI components.

## Theme notes

- No top header bar; navigation lives in the sticky left sidebar
- Search in the sidebar opens the center palette (⌘K)
- Color mode: light/dark with a monochrome primary
- Assistant UI stays off unless you add gateway auth

## License

MIT. See [LICENSE](./LICENSE).

---

## Acknowledgments

Thanks to the original **[Docus](https://github.com/nuxt-content/docus)** authors and the [Nuxt Content](https://github.com/nuxt-content) team (NuxtLabs). Their Markdown documentation theme for Nuxt, Nuxt UI, and Nuxt Content is the foundation this template started from.

This repository is a separate project: different defaults (Bun, monochrome palette, notes-style sidebar), different branding, and no upstream merge workflow. If you want the upstream product, use [docus.dev](https://docus.dev) and [nuxt-content/docus](https://github.com/nuxt-content/docus).
