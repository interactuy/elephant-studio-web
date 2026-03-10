// src/app/layout.tsx
import type { Metadata } from "next";
import { Work_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["600"],
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
  description:
    "Desarrollamos tiendas online y soluciones digitales, claras, rápidas y fáciles de gestionar, con soporte real cuando lo necesitás.",
  openGraph: {
    type: "website",
    siteName: "Interact Studio",
    title: "Interact Studio",
    description:
      "Desarrollamos tiendas online y soluciones digitales, claras, rápidas y fáciles de gestionar, con soporte real cuando lo necesitás.",
    images: [
      {
        url: "/og/og1.png",
        width: 1200,
        height: 630,
        alt: "Interact Studio",
      },
    ],
  },
};

const GTM_ID = "GTM-PJZN4QNF";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${workSans.variable} ${dmSans.variable}`}>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>

      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        {children}
        <Footer />

        <SpeedInsights />
      </body>
    </html>
  );
}