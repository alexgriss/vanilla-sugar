import type { Meta } from "@storybook/react-vite";

import { Flex, type IFlexProps } from "../../layout";
import { buttonSizes, buttonVariants } from "../types";

import { IconButton, type IIconButtonProps } from ".";

import SearchIcon from "./search-icon.svg?react";

const meta = {
  title: "Crystals/Forms/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: { control: "select", options: Object.values(buttonVariants) },
    size: { control: "select", options: Object.values(buttonSizes) },
    disabled: { control: "boolean" },
  },
  args: {
    onClick: () => {},
  },
} satisfies Meta<typeof IconButton>;

const ButtonContainer = ({ children, ...props }: IFlexProps) => (
  <Flex
    fd="column"
    ai="center"
    jc="center"
    gap={4}
    p={4}
    style={{ width: "200px", backgroundColor: "#F8F8F8" }}
    {...props}
  >
    {children}
  </Flex>
);

export const Basic = (args: IIconButtonProps) => (
  <ButtonContainer>
    <IconButton variant="primary" size="large" {...args}>
      <SearchIcon width={20} height={20} />
    </IconButton>

    <IconButton variant="secondary" size="medium" {...args}>
      <SearchIcon width={20} height={20} />
    </IconButton>

    <IconButton variant="tertiary" size="small" {...args}>
      <SearchIcon width={20} height={20} />
    </IconButton>
  </ButtonContainer>
);

export const Disabled = (args: IIconButtonProps) => (
  <ButtonContainer>
    <IconButton variant="primary" size="large" disabled {...args}>
      <SearchIcon width={20} height={20} />
    </IconButton>

    <IconButton variant="secondary" size="medium" disabled {...args}>
      <SearchIcon width={20} height={20} />
    </IconButton>

    <IconButton variant="tertiary" size="small" disabled {...args}>
      <SearchIcon width={20} height={20} />
    </IconButton>
  </ButtonContainer>
);

export default meta;
