import type { Meta } from "@storybook/react-vite";

import { Box } from "./box";
import type { IBoxProps } from "./types";

const meta = {
  title: "Crystals/Layout/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Box>;

export const Basic = (args: IBoxProps) => (
  <Box bg="primary" p={2} style={{ width: "200px" }} {...args}>
    1
  </Box>
);

export default meta;
