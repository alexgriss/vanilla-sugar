import type { Meta } from "@storybook/react-vite";

import { Center } from "./center";
import type { ICenterProps } from "./types";

const meta = {
  title: "Crystals/Layout/Center",
  component: Center,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Center>;

export const WithHeightOnly = (args: ICenterProps) => (
  <Center h="containerSm" gap={4} bg="primaryBase" {...args}>
    123
  </Center>
);

export const WithWidthOnly = (args: ICenterProps) => (
  <Center w="containerSm" gap={4} bg="primaryBase" {...args}>
    123
  </Center>
);

export const WithHeightAndWidth = (args: ICenterProps) => (
  <Center h="containerSm" w="containerSm" gap={4} bg="primaryBase" {...args}>
    123
  </Center>
);

export default meta;
