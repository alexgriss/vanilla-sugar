// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

const stylisticRules = {
  "@stylistic/array-bracket-spacing": ["warn", "never"],
  "@stylistic/arrow-parens": ["warn", "as-needed"],
  "@stylistic/arrow-spacing": "warn",
  "@stylistic/block-spacing": "warn",
  "@stylistic/brace-style": "warn",
  "@stylistic/comma-dangle": ["warn", "always-multiline"],
  "@stylistic/no-trailing-spaces": "warn",
  "@stylistic/dot-location": ["warn", "property"],
  "@stylistic/eol-last": "warn",
  "@stylistic/no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }],
  "@stylistic/semi": ["warn", "always"],
  "@stylistic/quotes": ["warn", "double", { avoidEscape: true }],
  "@stylistic/indent": ["warn", 2],
  "@stylistic/max-len": [
    "warn",
    {
      code: 80,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
  "@stylistic/multiline-ternary": ["warn", "always-multiline"],
  "@stylistic/no-confusing-arrow": "warn",
  "@stylistic/no-mixed-spaces-and-tabs": "warn",
  "@stylistic/no-multi-spaces": "warn",
  "@stylistic/object-curly-spacing": ["warn", "always"],
  "@stylistic/wrap-regex": "warn",
  "@stylistic/jsx-newline": "warn",
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
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@stylistic": stylistic,
    },
    rules: stylisticRules,
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
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
            // CSS imports
            ["^[^@].+\\.css$"],
            // SVG imports
            ["^.+\\.svg"],
          ],
        },
      ],
    },
  },
  storybook.configs["flat/recommended"]
);
