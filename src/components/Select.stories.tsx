import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Select",
  component: Select,
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Select>;
export default meta;

type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { label: "hello", value: "1" },
  { label: "hello2", value: "2" },
  { label: "hello3", value: "3" },
  { label: "hello4", value: "4" },
  { label: "hello5", value: "5" },
  { label: "hello6", value: "6" },
];

export const Default = {
  args: {
    options: sampleOptions,
  },
} satisfies Story;

export const Small = {
  args: {
    options: sampleOptions,
    size: "sm",
  },
} satisfies Story;
