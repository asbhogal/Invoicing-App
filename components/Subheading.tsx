import Separator from "./Separator";

export default function Subheading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center gap-4 w-full px-4 py-2">
      <Separator className="w-full h-[1px]" />
      <p className="font-serif font-bold uppercase">{children}</p>
      <Separator className="w-full h-[1px]" />
    </div>
  );
}
