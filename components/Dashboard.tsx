"use client";

import Link from "next/link";
import Filter from "@/components/Filter";
import { InvoiceData } from "@/lib/types/data";
import SortBy from "@/components/Sort";
import AddInvoice from "@/components/invoice/AddInvoice";
import InvoiceItem from "@/components/invoice/InvoiceItem";
import { useEffect, useState } from "react";
import { DashboardProps } from "@/lib/types/props";
import DataTable from "./ui/data-table";
import { columns } from "@/app/payments/columns"

export default function Dashboard({ invoices }: DashboardProps) {
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);

  useEffect(() => {
    setFilteredInvoices(invoices);
  }, [invoices]);

  console.log(invoices)

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
          <h1 className="sr-only">Invoices</h1>
          <p className="mt-4">
            Total Invoices: <span className="font-bold">{invoices.length}</span>
          </p>
        </div>
        {/* <div className="flex flex-wrap sm:items-center gap-4">
          <SortBy />
          <Filter onFilterChange={handleFilter} />
          <AddInvoice />
        </div> */}
      </div>
      <DataTable<InvoiceData, unknown> columns={columns} data={invoices} />
    </div>
  );
}
