import type { Meta } from "@storybook/react-vite";

import { Button } from "../../forms";
import { Text } from "../../typography";

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

export const Centered = (args: IFlexProps) => (
  <Flex w={256} h={256} ai="center" jc="center" {...args}>
    <Button variant="primary" size="large">
      Button 1
    </Button>
  </Flex>
);

export const WithSizes = (args: IFlexProps) => (
  <Flex w={192} h={96} bg="tertiary" ai="center" jc="center" {...args}>
    <Text>192x96</Text>
  </Flex>
);

export const ResponsiveSizes = (args: IFlexProps) => (
  <Flex
    w={{ mobile: 96, tablet: 192, desktop: 256 }}
    h={{ mobile: 48, tablet: 96, desktop: 128 }}
    bg="primary"
    ai="center"
    jc="center"
    {...args}
  >
    <Text color="white">Responsive</Text>
  </Flex>
);

export default meta;
