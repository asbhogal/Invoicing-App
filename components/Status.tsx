import { StatusProps } from "@/lib/types/props";
import { Badge } from "./ui/badge";
import { statusTextClassMap, statusBgClassMap } from "@/lib/types/data";

export default function Status({ status }: StatusProps) {
  const textColor = statusTextClassMap[status];
  const bgColor = statusBgClassMap[status];

  return (
    <Badge
      style={{ backgroundColor: bgColor, color: textColor }}
      className="flex items-center gap-2 uppercase font-bold py-1 px-2 rounded-xl w-fit"
    >
      <span
        className="h-2 w-2 rounded-full motion-safe:animate-pulse"
        style={{ backgroundColor: textColor }}
      />
      {status}
    </Badge>
  );
}
