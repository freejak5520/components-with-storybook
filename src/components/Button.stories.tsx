import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    variant: "default",
    size: "md",
    block: false,
    children: "Button",
    onClick: fn(),
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const ExtraSmall: Story = {
  args: {
    variant: "primary",
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
  },
};

export const Block: Story = {
  args: {
    variant: "primary",
    block: true,
  },
};
