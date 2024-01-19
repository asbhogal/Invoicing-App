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
    <div className="flex-1 sm:min-h-screen">
      <div className="flex">
        <div>
          <h1>Invoices</h1>
          <p>There are 7 total invoices</p>
        </div>
        <div className="flex items-center">
          <span>Filter by status</span>
          <AddInvoice />
        </div>
      </div>
      <div>
        {invoiceData.map((invoice) => {
          return (
            <Link
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
