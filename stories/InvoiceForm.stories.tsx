import type { Meta, StoryObj } from "@storybook/react";
import { InvoiceForm } from "@/components/invoice/InvoiceForm";

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

export const InvoiceFormComponent: Story = {
  args: {
    initialValues: {
      businessName: "",
      businessEmail: "",
      businessAddress: "",
      businessCity: "",
      businessZip: "",
      businessCountry: "",
      clientName: "",
      clientEmail: "",
      clientAddress: "",
      clientCity: "",
      clientZip: "",
      clientCountry: "",
      invoiceDate: new Date(),
      paymentTerms: "",
      paymentDue: "",
      status: "",
      projectName: "",
    },
    isEditing: false,
    onSubmit: (data) => {
      console.log(data);
    },
  },
};
