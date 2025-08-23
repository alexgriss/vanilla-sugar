// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config(
  [
    globalIgnores(["dist"]),
    {
      files: ["**/*.{ts,tsx}"],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs["recommended-latest"],
        reactRefresh.configs.vite,
        prettierConfig,
      ],
      plugins: {
        prettier: prettier,
        "simple-import-sort": simpleImportSort,
      },
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      rules: {
        "@typescript-eslint/no-empty-object-type": "off",
        "prettier/prettier": "error",
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
  ],
  storybook.configs["flat/recommended"],
  storybook.configs["flat/recommended"]
);
