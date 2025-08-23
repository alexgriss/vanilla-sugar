import path from "path";
import { fileURLToPath } from "url";
import svgr from "vite-plugin-svgr";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import type { StorybookConfig } from "@storybook/react-vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(vanillaExtractPlugin());
    config.plugins.push(
      svgr({
        include: "**/*.svg?react",
        svgrOptions: {
          icon: true,
        },
      })
    );

    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    (config.resolve.alias as Record<string, string>)["@"] = path.resolve(
      __dirname,
      "../src"
    );

    return config;
  },
};

export default config;
