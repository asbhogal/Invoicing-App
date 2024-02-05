import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "23.4375rem",
      sm: "48rem",
      md: "64rem",
      lg: "90rem",
      xl: "160rem",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        /* PRIMARY */
        eerieBlack: "#1E1B1A",
        blackOlive: "#3C3633",
        darkPuce: "#4A4542",
        nickel: "#777270",
        /* NEUTRALS */
        brightGray: "#EBECEE",
        silverSand: "#C0C1C2",
        antiFlashWhite: "#F1F2F3",
        /* SUPPORTING - BASE */
        dustStorm: "#E0CCBE",
        silverPink: "#C3B5AB",
        whiteChocolate: "#F0E6DF",
        /* SUPPORTING - ACCENT */
        darkSilver: "#747264",
        spanishGrey: "#9E9C93",
        paleSilver: "#C7C7C1",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        serif: ["var(--font-cardillac)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
