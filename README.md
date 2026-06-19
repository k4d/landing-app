# Landing App

A modern landing page built with Astro, React, HeroUI, and Tailwind CSS.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/landing-app.git

# Navigate to the project
cd landing-app

# Install dependencies
bun install

# Start dev server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Astro** — fast content-focused framework with islands architecture
- **React 19** — interactive UI components with selective hydration
- **HeroUI v3** — accessible, themeable UI components
- **Tailwind CSS v4** — utility-first styling
- **TypeScript** — strict mode for type safety
- **Biome** — linter and formatter
- **Bun** — fast JavaScript runtime

## Tech Stack

| Tool | Purpose |
|------|---------|
| Astro | Static site generation, islands architecture |
| React | Interactive components (Header, Footer, sections) |
| HeroUI | UI primitives (Button, Input, Form, etc.) |
| Tailwind CSS | Utility-first styling |
| Zod | Schema validation |
| Biome | Linting and formatting |
| Husky | Git hooks |

## Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── landing/
│   │       ├── sections/      # Page sections
│   │       │   ├── Hero.tsx
│   │       │   ├── Products.tsx
│   │       │   ├── Features.tsx
│   │       │   ├── About.tsx
│   │       │   ├── Contact.tsx
│   │       │   ├── Docs.tsx
│   │       │   └── Cta.tsx
│   │       ├── Header.tsx
│   │       ├── HeaderNav.tsx  # Navigation with dropdown
│   │       ├── Footer.tsx
│   │       ├── Logo.tsx
│   │       ├── Search.tsx
│   │       ├── AuthButtons.tsx
│   │       ├── ThemeToggle.tsx
│   │       └── index.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .zed/
│   └── settings.json          # Zed editor settings (Biome formatter)
├── astro.config.mjs
├── biome.json
├── package.json
└── tsconfig.json
```

## Commands

| Command | Action |
|---------|--------|
| `bun install` | Install dependencies |
| `bun dev` | Start dev server at `localhost:3000` |
| `bun build` | Build for production |
| `bun preview` | Preview build locally |
| `bun run format` | Format files with Biome |
| `bun run lint` | Lint files with Biome |

## Sections

| Section | ID | Description |
|---------|-----|-------------|
| Hero | `#hero` | Main headline with CTA buttons |
| Products | `#products` | 4 product cards |
| Features | `#features` | 4 feature cards |
| About | `#about` | Company info with principles |
| Contact | `#contact` | Contact form with validation |
| Docs | `#docs` | Documentation links |
| CTA | `#cta` | Email signup with waitlist |

## Performance Optimizations

- **Selective hydration**: Hero uses `client:load`, sections below fold use `client:visible`
- **Smooth scroll**: `scroll-padding-top` accounts for sticky header
- **Biome formatter**: configured for Zed editor (stdin mode)

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [HeroUI Documentation](https://heroui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
