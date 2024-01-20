import { league_spartan } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/Nav";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={league_spartan.className}>
      <body className="flex flex-col sm:flex-row">
        <Navbar />
        <main className="flex flex-1 bg-ghostWhite">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
