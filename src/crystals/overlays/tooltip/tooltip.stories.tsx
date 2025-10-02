import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../forms";
import { Tooltip } from "./tootip";

const meta: Meta<typeof Tooltip> = {
  title: "Crystals/Overlays/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
      ],
    },
    allowFlip: {
      control: "boolean",
    },
    showArrow: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tooltip: "Это содержимое tooltip",
    placement: "top",
    showArrow: true,
    disabled: false,
  },
  render: (args: any) => (
    <Tooltip {...args}>
      <Button>Наведите на меня</Button>
    </Tooltip>
  ),
};

export const WithArrow: Story = {
  args: {
    tooltip: "Tooltip с стрелкой",
    placement: "top",
    showArrow: true,
  },
  render: (args: any) => (
    <Tooltip {...args}>
      <Button>Стрелка включена</Button>
    </Tooltip>
  ),
};

export const WithoutArrow: Story = {
  args: {
    tooltip: "Tooltip без стрелки",
    placement: "top",
    showArrow: false,
  },
  render: (args: any) => (
    <Tooltip {...args} placement="top">
      <Button>Без стрелки</Button>
    </Tooltip>
  ),
};

export const PlacementTop: Story = {
  args: {
    tooltip: "Tooltip сверху",
    placement: "top",
  },
  render: (args: any) => (
    <Tooltip {...args}>
      <Button>Сверху</Button>
    </Tooltip>
  ),
};

export const PlacementBottom: Story = {
  args: {
    tooltip: "Tooltip снизу",
    placement: "bottom",
  },
  render: (args: any) => (
    <Tooltip {...args}>
      <Button>Снизу</Button>
    </Tooltip>
  ),
};

export const PlacementLeft: Story = {
  args: {
    tooltip: "Tooltip слева",
    placement: "left",
  },
  render: (args: any) => (
    <Tooltip {...args}>
      <Button>Слева</Button>
    </Tooltip>
  ),
};

export const PlacementRight: Story = {
  args: {
    tooltip: "Tooltip справа",
    placement: "right",
  },
  render: (args: any) => (
    <Tooltip {...args}>
      <Button>Справа</Button>
    </Tooltip>
  ),
};

export const Disabled: Story = {
  args: {
    tooltip: "Этот tooltip отключен",
    placement: "top",
    disabled: true,
  },
  render: (args: any) => (
    <Tooltip {...args}>
      <Button>Отключен</Button>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  args: {
    tooltip:
      "Это очень длинный текст tooltip, который должен переноситься на несколько строк и показывать, как компонент обрабатывает длинный контент",
    placement: "top",
  },
  render: (args: any) => (
    <Tooltip {...args}>
      <Button>Длинный контент</Button>
    </Tooltip>
  ),
};

export const AllPlacements: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        padding: "40px",
      }}
    >
      <Tooltip tooltip="Top" placement="top">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip tooltip="Left" placement="left">
        <Button>Left</Button>
      </Tooltip>

      <Tooltip tooltip="Right" placement="right">
        <Button>Right</Button>
      </Tooltip>

      <Tooltip tooltip="Bottom" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
    </div>
  ),
};
