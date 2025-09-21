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
  build: {
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      name: "VanillaSugar",
      fileName: format => `vanilla-sugar.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@vanilla-extract/css",
        "@vanilla-extract/recipes",
        "@vanilla-extract/sprinkles",
        "clsx",
        "lodash",
        "polished",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@vanilla-extract/css": "vanillaExtract",
          "@vanilla-extract/recipes": "vanillaExtractRecipes",
          "@vanilla-extract/sprinkles": "vanillaExtractSprinkles",
          "clsx": "clsx",
          "lodash": "lodash",
          "polished": "polished",
        },
        // Минификация и оптимизация
        manualChunks: undefined,
      },
    },
    // Включаем минификацию
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
      },
      mangle: {
        safari10: true,
      },
    },
    // Уменьшаем размер CSS
    cssCodeSplit: false,
    // Оптимизация для библиотеки
    target: "esnext",
    sourcemap: false,
  },
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
