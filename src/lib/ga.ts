// src/lib/ga.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const pageview = (url: string) => {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_ID, { page_path: url });
};

export const event = (params: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", params.action, {
    event_category: params.category,
    event_label: params.label,
    value: params.value,
  });
};
