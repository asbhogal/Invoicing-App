import "./globals.css";
import Navbar from "@/components/Nav";
import { Toaster } from "@/components/ui/sonner";
import { cardillac, sofiaPro } from "@/lib/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cardillac.variable} ${sofiaPro.variable}`}>
      <body className="flex flex-col sm:flex-row">
        <Navbar />
        <main className="flex flex-1">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
