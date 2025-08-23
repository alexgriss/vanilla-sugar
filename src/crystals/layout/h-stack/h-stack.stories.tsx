import type { Meta } from "@storybook/react-vite";

import { Button } from "../../forms";

import { HStack, type IHStackProps } from ".";

const meta = {
  title: "Crystals/Layout/HStack",
  component: HStack,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HStack>;

export const Basic = (args: IHStackProps) => (
  <HStack spacing={16} {...args}>
    <Button variant="primary" size="large">
      Button 1
    </Button>
    <Button variant="secondary" size="large">
      Button 2
    </Button>
  </HStack>
);

export default meta;
