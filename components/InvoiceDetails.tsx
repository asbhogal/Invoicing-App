import { InvoiceData } from "@/lib/types/data";

export default function InvoiceDetails({ invoice }: { invoice: InvoiceData }) {
  return (
    <div>
      <h1>{invoice.businessName}</h1>
      <p>{invoice.businessEmail}</p>
    </div>
  );
}
