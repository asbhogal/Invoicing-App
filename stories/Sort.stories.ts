import type { Meta, StoryObj } from "@storybook/react";
import SortInvoices from "@/components/Sort";

const meta = {
  title: "Invoicing App/Sort Button",
  component: SortInvoices,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SortInvoices>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sort: Story = {};
