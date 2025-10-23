# Landing App

## Project Description

This is a modern landing page application built with Astro, React, and Tailwind CSS. It features a responsive design, enhanced search functionality, and an optimized navigation menu. The project aims to provide a solid foundation for a fast, interactive, and maintainable web presence.

## Features

- **Astro Framework:** Leverages Astro for fast content-focused sites, with partial hydration for interactive components.
- **React Components:** Utilizes React for building dynamic and interactive UI elements.
- **Tailwind CSS:** Styled with Tailwind CSS for a utility-first approach to rapid UI development.
- **Responsive Design:** Ensures optimal viewing experience across a wide range of devices.
- **Enhanced Search Functionality:**
  - Dedicated `SearchInput` component for reusability.
  - Responsive search experience: inline on desktop, dialog-based on mobile.
  - Type-safe props for `SearchInput`.
- **Optimized Header Navigation:**
  - Data-driven navigation menu for easy management and extensibility.
  - `NavItem` interface for type-safe navigation data.
  - `ListItem` helper component for streamlined rendering of navigation links and dropdowns.
  - Modern React typing practices using `React.ComponentRef`.
- **Code Quality:** Enforced with ESLint and Prettier for consistent code style and best practices.

## Technologies Used

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd landing-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Development Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Builds the production-ready application.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run format`: Formats the code using Prettier.

## Project Structure

```text
/
├── public/                 # Static assets (e.g., favicon)
├── src/
│   ├── assets/             # Images and other media
│   ├── components/         # Reusable UI components (React & Astro)
│   │   ├── ui/             # Shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── HeaderNav.tsx
│   │   ├── MobileMenuSheet.tsx
│   │   ├── Search.tsx
│   │   └── SearchInput.tsx
│   ├── layouts/            # Astro layout components
│   ├── lib/                # Utility functions and configurations
│   ├── pages/              # Astro pages
│   └── styles/             # Global stylesheets
├── astro.config.mjs        # Astro configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── ...                     # Other configuration files (.gitignore, .prettierrc, etc.)
```

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.