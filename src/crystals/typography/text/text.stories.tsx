import type { Meta } from "@storybook/react-vite";

import { type ITextProps, Text } from ".";

const meta = {
  title: "Crystals/Typography/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Text>;

export const Basic = (args: ITextProps) => <Text {...args}>Hello, world!</Text>;

export const WithInlineText = (args: ITextProps) => (
  <Text {...args}>
    Hello,{" "}
    <Text as="span" color="primaryBase">
      world!
    </Text>
  </Text>
);

export default meta;
