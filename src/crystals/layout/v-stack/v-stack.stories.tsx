import type { Meta } from "@storybook/react-vite";

import { Button } from "../../forms";

import { type IVStackProps, VStack } from ".";

const meta = {
  title: "Crystals/Layout/VStack",
  component: VStack,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VStack>;

export const Basic = (args: IVStackProps) => (
  <VStack spacing={16} {...args}>
    <Button variant="primary" size="large">
      Button 1
    </Button>

    <Button variant="secondary" size="large">
      Button 2
    </Button>
  </VStack>
);

export default meta;
