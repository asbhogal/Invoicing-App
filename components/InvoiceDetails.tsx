import { InvoiceData } from "@/lib/types/data";
import EditInvoice from "./EditInvoice";
import DeleteInvoice from "./DeleteInvoice";
import { format } from "date-fns";

export default function InvoiceDetails({ invoice }: { invoice: InvoiceData }) {
  return (
    <div className="flex flex-col gap-6 flex-1 sm:min-h-screen max-w-[900px] w-full mx-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-9 sm:pt-16 lg:pt-20">
        <div className="flex flex-col gap-2">
          <h1>{invoice.businessName}</h1>
          <p>{invoice.businessEmail}</p>
          <p>{`Invoice #${invoice._id}`}</p>
          <p>{format(invoice.invoiceDate, "PPP")}</p>
        </div>
        <div className="flex flex-wrap sm:items-center gap-4">
          <EditInvoice />
          <DeleteInvoice />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <p>{invoice.businessAddress}</p>
          <p>{invoice.businessCity}</p>
          <p>{invoice.businessZip}</p>
          <p>{invoice.businessCountry}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Bill To</h2>
          <p>{invoice.clientName}</p>
          <p>{invoice.clientEmail}</p>
          <p>{invoice.clientAddress}</p>
          <p>{invoice.clientCity}</p>
          <p>{invoice.clientZip}</p>
          <p>{invoice.clientCountry}</p>
        </div>
      </div>
    </div>
  );
}
