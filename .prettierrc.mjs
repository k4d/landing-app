/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "src/**",
      options: {
        useTabs: true,
      },
    },
    {
      files: "src/components/ui/**",
      options: {
        useTabs: false,
      },
    },
  ],
};
