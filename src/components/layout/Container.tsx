import type { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[var(--container)] px-5 sm:px-6">
      {children}
    </div>
  );
}
