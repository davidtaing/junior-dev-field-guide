module.exports = {
  root: true,
  ignorePatterns: [".eslintrc.cjs", "tailwind.config.cjs", "node_modules/"],
  env: {
    jest: true,
  },
  extends: "eslint:recommended",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    extraFileExtensions: [".astro"], // This is a required setting in `@typescript-eslint/parser` v5.
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
};
