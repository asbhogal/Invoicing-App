import type { Meta, StoryObj } from "@storybook/react";
import { InvoiceForm } from "@/components/InvoiceForm";

const meta = {
  title: "Invoicing App/Invoice Form",
  component: InvoiceForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InvoiceForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InvoiceFormComponent: Story = {};
