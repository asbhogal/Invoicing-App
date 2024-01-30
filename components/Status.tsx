import { StatusProps } from "@/lib/types/props";
import { Badge } from "./ui/badge";
import { statusBgClassMap, statusTextClassMap } from "@/lib/types/data";

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
