// src/app/layout.tsx
import { Suspense } from "react";
import type { Metadata } from "next";
import { Work_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import AnalyticsListener from "@/components/AnalyticsListener";

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
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es" className={`${workSans.variable} ${dmSans.variable}`}>
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>

      <body>
        {/* GA pageviews para navegación (App Router) */}
      <Suspense fallback={null}>
        <AnalyticsListener />
      </Suspense>


        <Header />
        {children}
        <Footer />

        <SpeedInsights />
      </body>
    </html>
  );
}
