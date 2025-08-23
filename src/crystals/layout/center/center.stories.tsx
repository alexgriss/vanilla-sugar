import type { Meta } from "@storybook/react-vite";

import { Center, type ICenterProps } from ".";

const meta = {
  title: "Crystals/Layout/Center",
  component: Center,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "text",
      description: "Height and width value (in any unit)",
    },
    h: { control: "text", description: "Height value (in any unit)" },
    w: { control: "text", description: "Width value (in any unit)" },
  },
} satisfies Meta<typeof Center>;

export const WithSize = (args: ICenterProps) => (
  <Center size="100px" bg="primary" {...args}>
    123
  </Center>
);

export const WithHeightOnly = (args: ICenterProps) => (
  <Center h="100px" gap={16} bg="primary" {...args}>
    123
  </Center>
);

export const WithWidthOnly = (args: ICenterProps) => (
  <Center w="100px" gap={16} bg="primary" {...args}>
    123
  </Center>
);

export default meta;
