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

export const statusBgClassMap: Record<StatusValue, string> = {
  paid: "#EDFFF1",
  pending: "#FFF9EA",
  draft: "#f4f4f5",
  overdue: "#FFC4C4",
  cancelled: "#dfe3fa",
};

export const statusTextClassMap: Record<StatusValue, string> = {
  paid: "#0B2E23",
  pending: "#754C00",
  draft: "#373b53",
  overdue: "#782C44",
  cancelled: "#000000",
};

export default function Status({ status }: StatusProps) {
  const backgroundColor = statusBgClassMap[status];
  const textColor = statusTextClassMap[status];

  return (
    <Badge
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className={`flex items-center gap-2 p-4 uppercase rounded-md font-bold`}
    >
      <span
        className="h-2 w-2 rounded-full motion-safe:animate-pulse"
        style={{ backgroundColor: textColor }}
      />
      {status}
    </Badge>
  );
}
