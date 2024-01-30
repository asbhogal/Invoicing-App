import { League_Spartan } from "next/font/google";
import localFont from "next/font/local";

export const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export const cardillac = localFont({
  src: "../public/fonts/cardillac_light_macroman/cardillac-lig-webfont.woff2",
  variable: "--font-cardillac",
  display: "swap",
});

export const sofiaPro = localFont({
  src: "../public/fonts/sofiapro_light_macroman/sofiapro-light-webfont.woff2",
  variable: "--font-sofiaPro",
  display: "swap",
});
