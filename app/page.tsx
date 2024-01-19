import AddInvoice from "@/components/AddInvoice";
import InvoiceItem, { InvoiceData } from "@/components/InvoiceItem";
import type { Metadata } from "next";
import Link from "next/link";
import invoiceDataJson from "@/lib/data.json";
const invoiceData: InvoiceData[] = invoiceDataJson as InvoiceData[];
import { StatusValue } from "@/components/Status";

export const metadata: Metadata = {
  title: "Invoicing App",
  description: "Invoicing app",
};

export function validateStatus(status: string): StatusValue {
  switch (status) {
    case "paid":
    case "pending":
    case "draft":
    case "overdue":
    case "cancelled":
      return status as StatusValue;
    default:
      throw new Error(`Invalid status: ${status}`);
  }
}

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-16 flex-1 sm:min-h-screen max-w-[45.625rem] w-full mx-auto">
      <div className="flex justify-between">
        <div>
          <h1>Invoices</h1>
          <p>There are 7 total invoices</p>
        </div>
        <div className="flex items-center">
          <span>Filter by status</span>
          <AddInvoice />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {invoiceData.map((invoice) => {
          return (
            <Link
              className="bg-white shadow-indigo-500/40 p-4 rounded-lg"
              key={invoice.id}
              href={invoice.id}
              aria-label={`Details for invoice #${invoice.id}`}
            >
              <InvoiceItem {...invoice} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
