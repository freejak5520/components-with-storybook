Storybook snippets

```ts
import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Component";

const meta: Meta<typeof Component> = {
  title: "Category/Component",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
```
