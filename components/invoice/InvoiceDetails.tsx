import { InvoiceData } from "@/lib/types/data";
import EditInvoice from "./EditInvoice";
import DeleteInvoice from "./DeleteInvoice";
import { format } from "date-fns";
import Status from "../Status";
import Separator from "../Separator";

export default function InvoiceDetails({
  invoice,
  onDelete,
}: {
  invoice: InvoiceData;
  onDelete?: () => void;
}) {
  return (
    <div className="flex flex-col gap-6 flex-1 sm:min-h-screen max-w-[1200px] w-full mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-end gap-4 pt-9 sm:pt-16 lg:pt-20">
        <div className="flex flex-col gap-2">
          <h1>{invoice.businessName}</h1>
          <p>{invoice.businessEmail}</p>
          <p>{`Invoice #${invoice._id}`}</p>
          <p>{format(invoice.invoiceDate, "PPP")}</p>
          <Status status={invoice.status} />
        </div>
        <div className="flex flex-wrap sm:items-center gap-4">
          <EditInvoice invoiceId={invoice._id} />
          <DeleteInvoice invoiceId={invoice._id} onDelete={onDelete} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-end gap-4">
        <div className="flex flex-col gap-2">
          <h2>Bill From</h2>
          <Separator />
          <p>{invoice.businessName}</p>
          <p>{invoice.businessEmail}</p>
          <p>{invoice.businessAddress}</p>
          <p>{invoice.businessCity}</p>
          <p>{invoice.businessZip}</p>
          <p>{invoice.businessCountry}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Bill To</h2>
          <Separator />
          <p>{invoice.clientName}</p>
          <p>{invoice.clientEmail}</p>
          <p>{invoice.clientAddress}</p>
          <p>{invoice.clientCity}</p>
          <p>{invoice.clientZip}</p>
          <p>{invoice.clientCountry}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Project</h2>
        <Separator />
        <p>{invoice.projectName}</p>
        <h3>Deliverables</h3>
      </div>
    </div>
  );
}
