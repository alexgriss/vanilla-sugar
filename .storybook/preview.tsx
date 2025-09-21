import "../src/global.css";

import React from "react";

import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#aaa" },
        light: { name: "Light", value: "#fff" },
      },
      default: "Dark",
    },
  },
  decorators: [
    Story => (
      <div
        style={{
          fontFamily:
            'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
