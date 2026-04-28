# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **Bun**; `next` is invoked through `bun --bun` so the Bun runtime is used (not Node).

| Command              | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `bun run dev`        | Next.js dev server                              |
| `bun run build`      | Production build                                |
| `bun run start`      | Serve the production build                      |
| `bun run lint`       | `oxlint --type-aware`                           |
| `bun run lint:fix`   | Lint with autofix                               |
| `bun run format`     | `oxfmt --check` (no writes)                     |
| `bun run format:fix` | `oxfmt` (writes)                                |
| `bun run typecheck`  | `tsc --noEmit`                                  |
| `bun run check`      | Lint + format-check + typecheck (CI-equivalent) |
| `bun run check:fix`  | Lint autofix + format writes                    |
| `bun run clean`      | Remove `.next/` build output                    |

Install lockfile-strictly with `bun install --frozen-lockfile` (what CI does).

Add shadcn components with `bunx --bun shadcn@latest add <name>` — they land in `src/components/ui/` per `components.json`.

## Architecture

Next.js 16 App Router + React 19 + TypeScript, styled with Tailwind v4 and shadcn/ui ("base-nova" style, `neutral` base, CSS variables). UI primitives under `src/components/ui/` are built on [Base UI](https://base-ui.com/) (`@base-ui/react/*`), not Radix.

- **React Compiler is enabled** (`next.config.ts` → `reactCompiler: true`, `babel-plugin-react-compiler` in devDeps). Do not manually add `useMemo`/`useCallback`/`memo` for performance — the compiler handles memoization. Hand-rolled memoization may conflict with it.
- **Path alias**: `@/*` → `src/*` (see `tsconfig.json`).
- **Source layout** under `src/`:
  - `app/` — App Router entry (`layout.tsx`, `page.tsx`). Root layout wires `ThemeProvider`.
  - `components/ui/` — generated shadcn primitives. Aliases (`components.json`): `components → @/components`, `ui → @/components/ui`, `utils → @/lib/utils`, `lib → @/lib`, `hooks → @/hooks`.
  - `components/` — app-specific components alongside the shadcn `ui/` subfolder.
  - `providers/` — client providers (e.g. `theme-provider.tsx` wrapping `next-themes`).
  - `lib/utils.ts` — `cn()` (clsx + tailwind-merge).
  - `styles/globals.css` — Tailwind v4 entry and theme tokens.
- **Icons**: `lucide-react` (configured in `components.json`).
- **Theming**: `next-themes` with light/dark/system, driven by `ThemeProvider` in `providers/` and toggled via `components/theme-switch.tsx`. `next-themes` writes `data-theme="light"` / `data-theme="dark"` on `<html>` (its default `attribute`), and `src/styles/globals.css` scopes theme tokens under matching `[data-theme="..."]` selectors. The Tailwind `dark` variant is wired to the same selector — `@custom-variant dark (&:is([data-theme="dark"] *))`. `--radius` lives in `@theme inline` so it resolves on `:root` regardless of theme — keep any tokens that should never be theme-conditional there.

## Tooling notes

- **Linter/formatter are Oxc-based** (`oxlint`, `oxfmt`) — not ESLint/Prettier. `.oxlintrc.json` enables type-aware rules with `correctness`/`suspicious` as errors and `perf`/`pedantic` as warnings; `style`/`restriction`/`nursery` are off. A few rules are explicitly disabled (`react/react-in-jsx-scope`, `typescript/prefer-readonly-parameter-types`, `unicorn/explicit-length-check`, `eslint/max-lines-per-function`). `import/no-unassigned-import` allows only `*.css`/`*.scss` side-effect imports.
- **TypeScript** is strict; `moduleResolution: "bundler"`.

## CI (`.gitlab-ci.yml`)

Stages: `install → quality → build`. Quality runs `lint`, `format`, `type-check` in parallel. On `main`, `build_deploy:vercel_production` deploys to Vercel (`vercel pull/build/deploy --prod` with `$VERCEL_TOKEN`) and waits for all quality jobs to pass first; on other branches, `build:validate` just runs `bun run build`. Merge request pipelines are disabled (branch pipelines only). Cache key is `bun.lock` over `node_modules/` and `.next/cache/`.
