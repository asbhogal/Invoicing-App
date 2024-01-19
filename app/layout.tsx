import { league_spartan } from "@/lib/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={league_spartan.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
