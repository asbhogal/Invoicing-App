import type { Metadata } from "next";
import { getInvoices } from "@/lib/functions/fetcher";
import Dashboard from "@/components/Dashboard";
import Subheading from "@/components/Subheading";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Invoicing App",
  description: "Invoicing app",
};

export default async function Page() {
  const data = await getInvoices();
  const invoices = data?.invoices;

  return (
    <div className="flex flex-col w-full">
      <Image
        className="hidden sm:block absolute top-[100px]"
        src="/tools-quill.svg"
        alt=""
        width={250}
        height={250}
        priority
      />
      <Subheading>Dashboard</Subheading>
      <Dashboard invoices={invoices} />
    </div>
  );
}
