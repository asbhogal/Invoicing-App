import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sortedFields: FieldType[] = [
  "invoiceDate",
  "paymentDue",
  "businessName",
  "clientName",
  "total",
];

export type FieldType = string;

function formatFieldName(field: string): string {
  return field
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function SortInvoices() {
  return (
    <Select>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortedFields.map((field) => (
            <SelectItem key={field} value={field} className="cursor-pointer">
              {formatFieldName(field)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
