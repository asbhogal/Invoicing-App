import type { Metadata } from "next";
import { getInvoices } from "@/lib/functions/fetcher";
import Dashboard from "@/components/Dashboard";
import Subheading from "@/components/Subheading";

export const metadata: Metadata = {
  title: "Invoicing App",
  description: "Invoicing app",
};

export default async function Page() {
  const data = await getInvoices();
  const invoices = data?.invoices;

  console.log(invoices)

  return (
    <div className="flex flex-col w-full ml-[68px]">
      <Dashboard invoices={invoices} />
    </div>
  );
}
