import { InvoiceData } from "./InvoiceItem";
import { Badge } from "./ui/badge";

export interface StatusProps {
  status: StatusValue;
}

export type StatusValue =
  | "paid"
  | "pending"
  | "draft"
  | "overdue"
  | "cancelled";

export default function Status({ status }: StatusProps) {
  return <Badge>{status}</Badge>;
}
