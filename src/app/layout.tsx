import type { Metadata } from "next";
import { Work_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["600"], // SemiBold
  variable: "--font-work",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://interact.uy"),

  title: {
    default: "Interact Studio | Ecommerce y Soluciones Digitales",
    template: "%s | Interact Studio",
  },
  description: "Desarrollamos tiendas online y soluciones digitales, claras, rápidas y fáciles de gestionar, con soporte real cuando lo necesitás.",

  openGraph: {
    type: "website",
    siteName: "Interact Studio",
    title: "Interact Studio",
    description:
      "Desarrollamos tiendas online y soluciones digitales, claras, rápidas y fáciles de gestionar, con soporte real cuando lo necesitás.",
    images: [
      {
        url: "/og/og.png",
        width: 1200,
        height: 630,
        alt: "Interact Studio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${workSans.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
