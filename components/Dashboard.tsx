"use client";

import Link from "next/link";
import Filter from "@/components/Filter";
import { InvoiceData } from "@/lib/types/data";
import SortBy from "@/components/Sort";
import AddInvoice from "@/components/invoice/AddInvoice";
import InvoiceItem from "@/components/invoice/InvoiceItem";
import { useEffect, useState } from "react";
import { DashboardProps } from "@/lib/types/props";

export default function Dashboard({ invoices }: DashboardProps) {
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);

  useEffect(() => {
    setFilteredInvoices(invoices);
  }, [invoices]);

  function handleFilter(filterCriteria: string) {
    const filteredInvoices = invoices.filter((invoice) => {
      return !filterCriteria || invoice.status === filterCriteria;
    });
    setFilteredInvoices(filteredInvoices);
  }
  return (
    <div className="flex flex-col gap-16 flex-1 px-2">
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-9 sm:pt-16 lg:pt-20">
        <div>
          <h1>Invoices</h1>
          <p className="mt-4">
            Total Invoices: <span className="font-bold">{invoices.length}</span>
          </p>
        </div>
        <div className="flex flex-wrap sm:items-center gap-4">
          <SortBy />
          <Filter onFilterChange={handleFilter} />
          <AddInvoice />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="hidden sm:grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]  uppercase">
          <p className="font-bold text-[0.9375rem]">Invoice Date</p>
          <p className="font-bold text-[0.9375rem]">Payment Due</p>
          <p className="font-bold text-[0.9375rem]">Business Name</p>
          <p className="font-bold text-[0.9375rem]">Client Name</p>
          <p className="font-bold text-[0.9375rem]">Total</p>
          <p className="font-bold text-[0.9375rem]">Status</p>
        </div>
        {filteredInvoices.length === 0 && <p>No invoices</p>}
        {filteredInvoices.map((invoice: InvoiceData, index: number) => {
          return (
            <Link
              key={invoice._id}
              href={`/invoices/${invoice._id}`}
              aria-label={`Details for invoice #${invoice._id}`}
            >
              <InvoiceItem key={invoice._id} {...invoice} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
