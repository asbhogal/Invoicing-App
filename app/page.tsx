import AddInvoice from "@/components/AddInvoice";
import InvoiceItem from "@/components/InvoiceItem";
import type { Metadata } from "next";
import Link from "next/link";
import Filter from "@/components/Filter";
import { getInvoices } from "@/lib/functions/fetcher";
import { InvoiceData } from "@/lib/types/data";
import SortBy from "@/components/Sort";

export const metadata: Metadata = {
  title: "Invoicing App",
  description: "Invoicing app",
};

export default async function Dashboard() {
  const data = await getInvoices();
  console.log(data);
  const invoices = data?.invoices;
  return (
    <div className="flex flex-col gap-16 flex-1 sm:min-h-screen max-w-[900px] w-full mx-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-9 sm:pt-16 lg:pt-20">
        <div>
          <h1>Invoices</h1>
          <p className="mt-4">Total Invoices: {invoices.length}</p>
        </div>
        <div className="flex flex-wrap sm:items-center gap-4">
          <SortBy />
          <Filter />
          <AddInvoice />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="hidden xs:grid grid-cols-6 uppercase">
          <p className="font-bold text-[0.9375rem]">Invoice Date</p>
          <p className="font-bold text-[0.9375rem]">Payment Due</p>
          <p className="font-bold text-[0.9375rem]">Business Name</p>
          <p className="font-bold text-[0.9375rem]">Client Name</p>
          <p className="font-bold text-[0.9375rem]">Total</p>
          <p className="font-bold text-[0.9375rem]">Status</p>
        </div>
        {invoices.length === 0 && <p>No invoices</p>}
        {invoices.map((invoice: InvoiceData, index: number) => {
          return (
            <>
              <Link
                key={invoice._id}
                href={`/invoices/${invoice._id}`}
                aria-label={`Details for invoice #${invoice._id}`}
              >
                <InvoiceItem {...invoice} />
              </Link>
              {/*  {index < invoices.length - 1 && (
                <div className="border border-blackOlive" />
              )} */}
            </>
          );
        })}
      </div>
    </div>
  );
}
