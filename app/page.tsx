import type { Metadata } from "next";
import Dashboard from "@/components/Dashboard";
import { ordersData } from "@/lib/data/orders";

export const metadata: Metadata = {
  title: "Invoicing App",
  description: "Invoicing app",
};

export default async function Page() {
  return (
    <div className="flex flex-col w-full">
      <Dashboard invoices={ordersData} />
    </div>
  );
}
