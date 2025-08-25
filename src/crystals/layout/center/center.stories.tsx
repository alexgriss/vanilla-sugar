import type { Meta } from "@storybook/react-vite";

import { Center, type ICenterProps } from ".";

const meta = {
  title: "Crystals/Layout/Center",
  component: Center,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Center>;

export const WithHeightOnly = (args: ICenterProps) => (
  <Center h={128} gap={16} bg="primary" {...args}>
    123
  </Center>
);

export const WithWidthOnly = (args: ICenterProps) => (
  <Center w={128} gap={16} bg="primary" {...args}>
    123
  </Center>
);

export const WithHeightAndWidth = (args: ICenterProps) => (
  <Center h={128} w={128} gap={16} bg="primary" {...args}>
    123
  </Center>
);

export default meta;
