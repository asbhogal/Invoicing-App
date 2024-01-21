type IconProps = {
  children: React.ReactNode;
  svgProps: React.SVGProps<SVGSVGElement>;
};
export default function Icon({ children, svgProps }: IconProps) {
  return (
    <svg aria-hidden focusable={false} {...svgProps} className="icon">
      {children}
    </svg>
  );
}
