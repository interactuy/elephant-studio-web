import type { ReactNode } from "react";
import Container from "@/components/layout/Container";

export default function Section({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        {title ? <h2 className="text-2xl sm:text-3xl">{title}</h2> : null}
        <div className={title ? "mt-5" : ""}>{children}</div>
      </Container>
    </section>
  );
}
