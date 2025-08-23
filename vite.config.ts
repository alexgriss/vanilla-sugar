/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

import path from "node:path";
import { fileURLToPath } from "node:url";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

import react from "@vitejs/plugin-react";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const isDev = process.env.NODE_ENV === "development";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({
      identifiers: isDev ? "debug" : "short",
    }),
    svgr({
      include: "**/*.svg?react",
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
