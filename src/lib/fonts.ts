import { Nunito_Sans, Oxygen } from "next/font/google";

export const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const oxygen = Oxygen({
  weight: ["400", "700"],
  variable: "--font-oxygen",
  subsets: ["latin"],
});
