import { formatCurrency } from "@/lib/functions/formatCurrency";
import Status from "./Status";
import { InvoiceData } from "@/lib/types/data";
import { addDays, format } from "date-fns";

export default function InvoiceItem({
  _id,
  invoiceDate,
  paymentDue,
  clientName,
  businessName,
  total,
  status,
}: InvoiceData) {
  return (
    <>
      <div className="grid-cols-6 items-center justify-between hidden xs:grid">
        <p className="whitespace-nowrap overflow-hidden text-ellipsis">
          {format(invoiceDate, "PPP")}
        </p>
        <p>{paymentDue}</p>
        <p>{businessName}</p>
        <p>{clientName}</p>
        <p className="font-bold text-[0.9375rem]">{formatCurrency(total)}</p>
        <Status status={status} />
      </div>
      <div className="grid grid-cols-5 xs:hidden">
        <div className="flex justify-between">
          <p className="font-bold text-[0.9375rem]">{`#${_id}`}</p>
          <p>{clientName}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-between">
            <p>{paymentDue}</p>
            <p className="font-bold text-[0.9375rem]">
              {formatCurrency(total)}
            </p>
          </div>
          <Status status={status} />
        </div>
      </div>
    </>
  );
}
