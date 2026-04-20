# Next.js Template

A template to quickly bootstrap Next.js projects with modern tooling.

## Features

- [Next.js 16](https://nextjs.org/) + TypeScript + React 19 (with [React Compiler](https://react.dev/learn/react-compiler) enabled)
- [Bun](https://bun.sh/) as package manager and runtime
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Oxlint](https://github.com/oxc-project/oxc) + [Oxfmt](https://github.com/oxc-project/oxc) — fast Oxc-based linter & formatter
- [Shadcn UI](https://ui.shadcn.com/) ("new-york" style) with [Lucide](https://lucide.dev/) icons
- [Next Themes](https://www.npmjs.com/package/next-themes) — Light / Dark / System
- GitLab CI pipeline with Vercel production deploy on `main`

## Getting Started

```bash
bun install
bun run dev
```

## Adding Components

To add Shadcn UI components:

```bash
bunx --bun shadcn@latest add button
```

Components are installed to `src/components/ui/` with utilities in `src/lib/utils.ts`. See [Shadcn UI — Add Components](https://ui.shadcn.com/docs/installation/next#add-components).

## Scripts

| Command              | Description                                     |
| -------------------- | ----------------------------------------------- |
| `bun run dev`        | Start development server                        |
| `bun run build`      | Build for production                            |
| `bun run start`      | Start production server                         |
| `bun run lint`       | Run linter (type-aware)                         |
| `bun run lint:fix`   | Run linter with auto-fix                        |
| `bun run format`     | Check formatting                                |
| `bun run format:fix` | Fix formatting                                  |
| `bun run typecheck`  | Type-check with `tsc --noEmit`                  |
| `bun run check`      | Lint + format-check + typecheck (CI-equivalent) |
| `bun run check:fix`  | Lint auto-fix + format writes                   |

---

> I'll try to keep this template up-to-date with the latest versions of the packages.
