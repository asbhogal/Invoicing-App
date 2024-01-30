import { IconProps } from "@/lib/types/props";

export default function Icon({ children, svgProps }: IconProps) {
  return (
    <svg aria-hidden focusable={false} {...svgProps} className="icon">
      {children}
    </svg>
  );
}
