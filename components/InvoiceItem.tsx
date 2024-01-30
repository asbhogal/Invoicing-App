import { formatCurrency } from "@/lib/functions/formatCurrency";
import Status from "./Status";
import { InvoiceData } from "@/lib/types/data";

export default function InvoiceItem({
  _id,
  paymentDue,
  clientName,
  total,
  status,
}: InvoiceData) {
  return (
    <>
      <div className="items-center justify-between hidden xs:flex">
        <p className="font-bold text-[0.9375rem] whitespace-nowrap overflow-hidden text-ellipsis">{`#${_id}`}</p>
        <p>{`Due ${paymentDue}`}</p>
        <p>{clientName}</p>
        <p className="font-bold text-[0.9375rem]">{formatCurrency(total)}</p>
        <Status status={status} />
      </div>
      <div className="flex flex-col gap-6 xs:hidden">
        <div className="flex justify-between">
          <p className="font-bold text-[0.9375rem]">{`#${_id}`}</p>
          <p>{clientName}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-between">
            <p>{`Due ${paymentDue}`}</p>
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
