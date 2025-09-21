import type { Meta, StoryObj } from "@storybook/react-vite";

import { Flex, type IFlexProps } from "../../layout";
import { buttonSizes, buttonVariants } from "../types";

import { Button, type IButtonProps } from ".";

import SearchIcon from "./search-icon.svg?react";

const meta = {
  title: "Crystals/Forms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(buttonVariants),
    },
    size: {
      control: "select",
      options: Object.values(buttonSizes),
    },
    onlyIcon: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    onClick: () => {},
    children: "Button text",
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const ButtonContainer = ({ children, ...props }: IFlexProps) => (
  <Flex
    fd="column"
    ai="center"
    jc="center"
    gap={16}
    p={16}
    style={{ width: "200px", backgroundColor: "#F8F8F8" }}
    {...props}
  >
    {children}
  </Flex>
);

export const Large: Story = {
  render: (args: IButtonProps) => (
    <ButtonContainer>
      <Button variant="primary" size="large" {...args} />

      <Button variant="secondary" size="large" {...args} />

      <Button variant="ghost" size="large" {...args} />
    </ButtonContainer>
  ),
};

export const Medium: Story = {
  render: args => (
    <ButtonContainer>
      <Button variant="primary" size="medium" {...args} />

      <Button variant="secondary" size="medium" {...args} />

      <Button variant="ghost" size="medium" {...args} />
    </ButtonContainer>
  ),
};

export const Small: Story = {
  render: args => (
    <ButtonContainer>
      <Button variant="primary" size="small" {...args} />

      <Button variant="secondary" size="small" {...args} />

      <Button variant="ghost" size="small" {...args} />
    </ButtonContainer>
  ),
};

export const Disabled: Story = {
  render: args => (
    <ButtonContainer>
      <Button variant="primary" size="large" disabled {...args} />

      <Button variant="secondary" size="large" disabled {...args} />

      <Button variant="ghost" size="large" disabled {...args} />
    </ButtonContainer>
  ),
};

export const WithLeftIcon: Story = {
  render: args => (
    <ButtonContainer>
      <Button
        variant="primary"
        size="large"
        leftIcon={<SearchIcon width={20} height={20} />}
        {...args}
      />

      <Button
        variant="secondary"
        size="medium"
        leftIcon={<SearchIcon width={20} height={20} />}
        {...args}
      />
    </ButtonContainer>
  ),
};

export const WithRightIcon: Story = {
  render: args => (
    <ButtonContainer>
      <Button
        variant="primary"
        size="large"
        rightIcon={<SearchIcon width={20} height={20} />}
        {...args}
      />

      <Button
        variant="secondary"
        size="medium"
        rightIcon={<SearchIcon width={20} height={20} />}
        {...args}
      />
    </ButtonContainer>
  ),
};

export default meta;
