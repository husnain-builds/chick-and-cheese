import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/site";
import "./globals.css";

const menuBodyFont = Nunito_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: {
    default: "Chick’n Cheese | Fresh Flavors. Crispy Bites. Cheesy Delights.",
    template: "%s | Chick’n Cheese",
  },
  description: "Freshly made burgers, pizzas, wraps and more. Find your next favorite at Chick’n Cheese.",
  applicationName: "Chick’n Cheese",
  openGraph: {
    title: "Chick’n Cheese | Fresh flavors. Crispy bites. Cheesy delights.",
    description: "Come hungry. There’s something good waiting.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={menuBodyFont.variable}>
      <body suppressHydrationWarning><SiteHeader /><main>{children}</main><SiteFooter /></body>
    </html>
  );
}
