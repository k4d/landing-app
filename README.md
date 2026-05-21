# Landing App

This is a landing page application built with Astro, React, and Tailwind CSS, enhanced with modern development tools for better DX and code quality.

## ✨ Features

*   **Astro** for fast content-focused websites
*   **React** for interactive UI components
*   **HeroUI** for accessible and customizable UI components
*   **Tailwind CSS** for rapid styling
*   **TypeScript** for type safety
*   **Zod** for schema validation
*   **Biome** for blazing fast linter and formatter
*   **Husky** for Git hooks to ensure code quality
*   **Path Aliases** (`@/`) for clean imports
*   **Bun** as the JavaScript runtime and package manager

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Reusable Astro/React components
│   │   └── Placeholder.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .husky/               # Git hooks configuration
├── astro.config.mjs
├── biome.json            # Biome configuration
├── bun.lock              # Bun lock file
├── package.json
├── README.md
└── tsconfig.json         # TypeScript configuration
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                                          |
| :------------------------- | :-------------------------------------------------------------- |
| `bun install`              | Installs dependencies and sets up Husky Git hooks               |
| `bun dev`                  | Starts local dev server at `localhost:4321`                     |
| `bun build`                | Build your production site to `./dist/`                         |
| `bun preview`              | Preview your build locally, before deploying                    |
| `bun astro ...`            | Run CLI commands like `astro add`, `astro check`                |
| `bun astro -- --help`      | Get help using the Astro CLI                                    |
| `bun run format`           | Formats all files in `src/` using Biome                         |
| `bun run lint`             | Lints all files in `src/` using Biome (run automatically before commit) |

## 🛠️ Development Guidelines

*   **Code Formatting:** Use `bun run format` to automatically format your code.
*   **Linting:** The `bun run lint` command is automatically run before every commit via Husky to ensure code quality.
*   **Type Safety:** Leverage TypeScript and Zod schemas for robust type validation.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
