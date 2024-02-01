import { StatusProps } from "@/lib/types/props";
import { Badge } from "./ui/badge";
import { statusTextClassMap } from "@/lib/types/data";

export default function Status({ status }: StatusProps) {
  const textColor = statusTextClassMap[status];

  return (
    <Badge
      style={{ backgroundColor: "transparent", color: textColor }}
      className="flex items-center gap-2 uppercase rounded-none font-bold w-fit"
    >
      <span
        className="h-2 w-2 rounded-full motion-safe:animate-pulse"
        style={{ backgroundColor: textColor }}
      />
      {status}
    </Badge>
  );
}
