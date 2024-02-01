import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldType } from "./Sort";
import { status } from "@/lib/data";

export default function FilterBy() {
  return (
    <Select>
      <SelectTrigger
        className="w-[100px]"
        aria-label="open filter by status options"
      >
        <SelectValue placeholder="Filter By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="capitalize">
          {status.map((status) => (
            <SelectItem key={status} value={status} className="cursor-pointer">
              {status}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
