import {
  Poppins,
  Montserrat,
  Roboto_Mono,
  Merriweather,
} from "next/font/google";

// Define font configurations
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

// Font class names for Tailwind
export const fontVariables = [
  poppins.variable,
  montserrat.variable,
  robotoMono.variable,
  merriweather.variable,
].join(" ");

// Font family strings for CSS
export const fontFamilies = {
  poppins: "var(--font-poppins)",
  montserrat: "var(--font-montserrat)",
  robotoMono: "var(--font-roboto-mono)",
  merriweather: "var(--font-merriweather)",
} as const;

// Font type definitions
export type FontFamily = keyof typeof fontFamilies;
