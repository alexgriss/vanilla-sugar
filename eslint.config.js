// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

const stylisticRules = {
  // Оставляем только правила, которые не конфликтуют с Prettier
  "@stylistic/jsx/jsx-newline": "warn",
  "@stylistic/padding-line-between-statements": [
    "warn",
    {
      blankLine: "always",
      prev: "*",
      next: "return",
    },
    {
      blankLine: "always",
      prev: ["const", "let", "var"],
      next: "*",
    },
    {
      blankLine: "any",
      prev: ["const", "let", "var"],
      next: ["const", "let", "var"],
    },
    {
      blankLine: "always",
      prev: "*",
      next: ["export"],
    },
    {
      blankLine: "always",
      prev: ["import", "export"],
      next: "*",
    },
    {
      blankLine: "any",
      prev: ["import", "export"],
      next: ["import", "export"],
    },
    {
      blankLine: "always",
      prev: "directive",
      next: "*",
    },
    {
      blankLine: "any",
      prev: "directive",
      next: "directive",
    },
    {
      blankLine: "always",
      prev: ["if", "for", "while", "switch", "try"],
      next: "*",
    },
  ],
};

export default tseslint.config(
  {
    ignores: ["dist/**/*"],
  },
  tseslint.configs.recommended,
  // Отключаем конфликтующие с Prettier правила ранним слоем
  eslintConfigPrettier,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "@stylistic": stylistic,
      "@stylistic/jsx": stylisticJsx,
      "simple-import-sort": simpleImportSort,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": "off",
      "react/no-unknown-property": ["error", { ignore: ["class"] }],
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
      ...stylisticRules,
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            // Side effect imports
            ["^\\u0000"],
            // Other external libraries (without @)
            ["^\\w"],
            // Node.js built-ins
            ["^node:"],
            // React and React types
            ["^react", "^react-dom"],
            // Vanilla Extract imports
            ["^@vanilla-extract/"],
            // Storybook imports
            ["^@storybook"],
            // External libraries (but not vanilla-extract or storybook)
            ["^@(?!vanilla-extract|storybook)\\w"],
            // Type imports
            ["^type\\s"],
            // Relative imports (parent directories)
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Relative imports (current directory)
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // SVG imports
            ["^.+\\.svg"],
          ],
        },
      ],
      // Запускаем Prettier как правило ESLint
      "prettier/prettier": "warn",
    },
  },
  storybook.configs["flat/recommended"],
);
