import AddInvoice from "@/components/AddInvoice";
import InvoiceItem, { InvoiceData } from "@/components/InvoiceItem";
import type { Metadata } from "next";
import Link from "next/link";
import Filter from "@/components/Filter";
import { getInvoices } from "@/lib/functions/fetcher";

export const metadata: Metadata = {
  title: "Invoicing App",
  description: "Invoicing app",
};

export default async function Dashboard() {
  const data = await getInvoices();
  console.log(data);
  const invoices = data?.invoices;
  return (
    <div className="flex flex-col gap-16 flex-1 sm:min-h-screen max-w-[45.625rem] w-full mx-auto">
      <div className="flex justify-between">
        <div>
          <h1>Invoices</h1>
          <p>There are {invoices.length} total invoices</p>
        </div>
        <div className="flex items-center">
          <Filter />
          <AddInvoice />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {invoices.length === 0 && <p>No invoices</p>}
        {invoices.map((invoice: InvoiceData, index: number) => {
          return (
            <>
              <Link
                className="p-4"
                key={invoice._id}
                href={`/invoices/${invoice._id}`}
                aria-label={`Details for invoice #${invoice._id}`}
              >
                <InvoiceItem {...invoice} />
              </Link>
              {index < invoices.length - 1 && (
                <div className="border border-blackOlive" />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
