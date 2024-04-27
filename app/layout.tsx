import "./globals.css";
import Navbar from "@/components/Nav";
import { Toaster } from "@/components/ui/sonner";
import { cardillac } from "@/lib/fonts";
import { GeistSans } from "geist/font/sans";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cardillac.variable} ${GeistSans.variable}`}>
      <body className="flex max-w-[1720px] w-full mx-auto pb-12">
        <Navbar />
        <main className="flex w-full">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
