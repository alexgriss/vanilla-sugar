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
    vanillaExtractPlugin({
      identifiers: isDev ? "debug" : "short",
    }),
    react(),
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
      fileName: (format) => `vanilla-sugar.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      treeshake: {
        preset: "smallest",
        moduleSideEffects: (id) =>
          /global\.css\.ts$/.test(id) || /reset\.css\.ts$/.test(id),
      },
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@vanilla-extract/css",
        "@vanilla-extract/recipes",
        "@vanilla-extract/sprinkles",
        "clsx",
        "polished",
      ],
      output: {
        // Минификация и оптимизация
        manualChunks: undefined,
      },
    },
    // Включаем минификацию
    minify: "terser",
    terserOptions: {
      ecma: 2020,
      compress: {
        passes: 2,
        pure_getters: true,
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          "console.log",
          "console.info",
          "console.warn",
          "console.error",
        ],
      },
      format: {
        comments: false,
      },
      mangle: {
        safari10: true,
        keep_fnames: false,
      },
    },
    // Уменьшаем размер CSS
    cssCodeSplit: false,
    cssMinify: "lightningcss",
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
