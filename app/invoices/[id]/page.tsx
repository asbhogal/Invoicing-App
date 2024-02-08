import Subheading from "@/components/Subheading";
import InvoiceDetails from "@/components/invoice/InvoiceDetails";
import { InvoiceData } from "@/lib/types/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice Details",
};

export default async function getInvoiceById({
  params,
}: {
  params: { id: string };
}) {
  let invoice: InvoiceData | null = null;
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/invoices/${params.id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch invoice");
    }

    invoice = await res.json();
  } catch (error) {
    console.error(error);
  }

  return invoice ? (
    <div className="flex flex-col w-full items-center">
      <Subheading>Invoice Details</Subheading>
      <InvoiceDetails invoice={invoice} />
    </div>
  ) : (
    <p>Loading invoice...</p>
  );
}
