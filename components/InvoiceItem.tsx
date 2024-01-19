import { formatCurrency } from "@/lib/functions/formatCurrency";
import Status, { StatusValue } from "./Status";

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
    <div className="flex justify-between">
      <p className="font-bold">{`#${id}`}</p>
      <p>{`Due ${paymentDue}`}</p>
      <p>{clientName}</p>
      <p>{formatCurrency(total)}</p>
      <Status status={status} />
    </div>
  );
}
