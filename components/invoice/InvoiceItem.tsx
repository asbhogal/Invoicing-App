import { formatCurrency } from "@/lib/functions/formatCurrency";
import Status from "../Status";
import { InvoiceData } from "@/lib/types/data";
import { format } from "date-fns";

export default function InvoiceItem({
  invoiceDate,
  paymentDue,
  clientName,
  businessName,
  total,
  status,
  shouldDisplayInvoice,
}: InvoiceData & { shouldDisplayInvoice?: (status: string) => boolean }) {
  if (!shouldDisplayInvoice || shouldDisplayInvoice(status))
    return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] items-center justify-between">
        <p className="whitespace-nowrap overflow-hidden text-ellipsis">
          {format(invoiceDate, "PPP")}
        </p>
        <p>{paymentDue}</p>
        <p>{businessName}</p>
        <p>{clientName}</p>
        <p className="font-bold text-[0.9375rem]">{formatCurrency(total)}</p>
        <Status status={status} />
      </div>
    );
}
