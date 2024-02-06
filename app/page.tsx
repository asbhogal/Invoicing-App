import type { Metadata } from "next";
import { getInvoices } from "@/lib/functions/fetcher";
import Dashboard from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Invoicing App",
  description: "Invoicing app",
};

export default async function Page() {
  const data = await getInvoices();
  const invoices = data?.invoices;

  return <Dashboard invoices={invoices} />;
}
