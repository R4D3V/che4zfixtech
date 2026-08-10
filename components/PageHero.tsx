import Link from "next/link";
import type { ReactNode } from "react";

interface PageHeroProps {
  crumb: ReactNode;
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}

export default function PageHero({ crumb, eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / {crumb}
        </div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}