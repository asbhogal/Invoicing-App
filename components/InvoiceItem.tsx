import { formatCurrency } from "@/lib/functions/formatCurrency";
import Status, { StatusValue } from "./Status";
import { formatDate } from "@/lib/functions/formatDate";

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export interface InvoiceData {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: StatusValue;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}

export default function InvoiceItem({
  id,
  paymentDue,
  clientName,
  total,
  status,
}: InvoiceData) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-bold text-[0.9375rem]">{`#${id}`}</p>
      <p>{`Due ${formatDate(paymentDue)}`}</p>
      <p>{clientName}</p>
      <p className="font-bold text-[0.9375rem]">{formatCurrency(total)}</p>
      <Status status={status} />
    </div>
  );
}
