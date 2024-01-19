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
        violets01: "#7C5DFA",
        violets02: "#9277FF",
        yankeesBlue01: "#1E2139",
        yankeesBlue02: "#252945",
        lavender: "#dfe3fa",
        coolGrey: "#8883b0",
        ube: "#7E88C3",
        chineseBlack: "#16140C",
        fireOpal: "#EC5757",
        americanPink: "#FF9797",
        ghostWhite: "#f8f8fb",
        eerieBlack: "#141625",
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
