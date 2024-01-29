import AddInvoice from "@/components/AddInvoice";
import InvoiceItem, { InvoiceData } from "@/components/InvoiceItem";
import type { Metadata } from "next";
import Link from "next/link";
import invoiceDataJson from "@/lib/data.json";
const invoiceData: InvoiceData[] = invoiceDataJson as InvoiceData[];

export const metadata: Metadata = {
  title: "Invoicing App",
  description: "Invoicing app",
};

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
        {invoiceData.map((invoice, index) => {
          return (
            <>
              <Link
                className="p-4"
                key={invoice.id}
                href={invoice.id}
                aria-label={`Details for invoice #${invoice.id}`}
              >
                <InvoiceItem {...invoice} />
              </Link>
              {index < invoiceData.length - 1 && (
                <div className="border border-blackOlive" />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
