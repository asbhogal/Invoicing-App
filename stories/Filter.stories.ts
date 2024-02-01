import type { Meta, StoryObj } from "@storybook/react";
import FilterBy from "@/components/Filter";

const meta = {
  title: "Invoicing App/Filter Button",
  component: FilterBy,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FilterBy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filter: Story = {};
