import type { Meta } from "@storybook/react-vite";

import { Button } from "../../forms";

import { Flex, type IFlexProps } from ".";

const meta = {
  title: "Crystals/Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Flex>;

export const Horizontal = (args: IFlexProps) => (
  <Flex fd="row" gap={16} {...args}>
    <Button variant="primary" size="large">
      Button 1
    </Button>
    <Button variant="secondary" size="large">
      Button 2
    </Button>
  </Flex>
);

export const Vertical = (args: IFlexProps) => (
  <Flex fd="column" gap={16} {...args}>
    <Button variant="primary" size="large">
      Button 1
    </Button>
    <Button variant="secondary" size="large">
      Button 2
    </Button>
  </Flex>
);

export default meta;
