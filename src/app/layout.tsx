import type { Metadata } from "next";
import { Work_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  title: "Elephant Studio",
  description: "Soluciones digitales integrales para pymes, con ecommerce como eje central.",
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
      </body>
    </html>
  );
}
