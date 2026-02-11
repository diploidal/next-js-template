# Next.js Template

A template to quickly bootstrap Next.js projects with modern tooling.

## Features

- [Next.js 16](https://nextjs.org/) + TypeScript + React 19
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Oxlint](https://github.com/oxc-project/oxc) - Fast linter
- [Oxfmt](https://github.com/oxc-project/oxc) - Fast formatter
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [Next Themes](https://www.npmjs.com/package/next-themes) - Theme handling (Light, Dark, System)

## Getting Started

### Install Dependencies

```bash
bun install
```

### Run Development Server

```bash
bun run dev
```

### Build for Production

```bash
bun run build
```

## Adding Components

To add Shadcn UI components:

```bash
bunx --bun shadcn@latest add button
```

Components will be installed to `src/shadcn/ui/` with utilities in `src/lib/utils.ts`. For more information, visit the [Shadcn UI - Add Components](https://ui.shadcn.com/docs/installation/next#add-components).

## Scripts

| Command              | Description              |
| -------------------- | ------------------------ |
| `bun run dev`        | Start development server |
| `bun run build`      | Build for production     |
| `bun run start`      | Start production server  |
| `bun run lint`       | Run linter               |
| `bun run lint:fix`   | Run linter with auto-fix |
| `bun run format`     | Check formatting         |
| `bun run format:fix` | Fix formatting           |

---

> I'll try to keep this template up-to-date with the latest versions of the packages.
