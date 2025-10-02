import type { Meta } from "@storybook/react-vite";

import { Header } from "./header";
import type { IHeaderProps } from "./types";

const meta = {
  title: "Crystals/Typography/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Header>;

export const Header1 = (args: IHeaderProps) => (
  <Header as="h1" color="primaryBase" {...args}>
    I am the most important header
  </Header>
);

export const Header2 = (args: IHeaderProps) => (
  <Header as="h2" color="primaryBase" {...args}>
    I am the second most important header
  </Header>
);

export const Header3 = (args: IHeaderProps) => (
  <Header as="h3" color="primaryBase" {...args}>
    I am the third most important header
  </Header>
);

export const Header4 = (args: IHeaderProps) => (
  <Header as="h4" color="primaryBase" {...args}>
    I am the fourth most important header
  </Header>
);

export const Header5 = (args: IHeaderProps) => (
  <Header as="h5" color="primaryBase" {...args}>
    I am the fifth most important header
  </Header>
);

export const Header6 = (args: IHeaderProps) => (
  <Header as="h6" color="primaryBase" {...args}>
    I am the least important header
  </Header>
);

export default meta;
