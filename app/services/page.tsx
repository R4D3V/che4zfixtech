import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import { IconWhatsApp } from "@/components/icons";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five core services from Che4zfixtech in Rumbek: mobile & computer repair, printer sales & services, CCTV, networking & hotspot WiFi, and software solutions.",
};

const WA = { href: SITE.whatsappUrl, target: "_blank" as const, rel: "noopener" as const };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="// Our services"
        title="Software to hardware, mobile to network — all under one roof."
        lead="Five core services cover almost everything that can go wrong with your tech. Pick one below for full detail, sample work and a direct WhatsApp booking form."
      />

      <section>
        <div className="container">
          <div className="grid grid-3 stagger">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={`${i * 0.08}s`}>
                <ServiceCard service={s} bullets moreLabel="View full details" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal scale>
            <div className="svc-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/repair-experts-flyer.jpg"
                alt="Che4zfixtech — experts in mobile and computer repair, printer services and CCTV systems"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        text="Describe the problem on WhatsApp and we'll point you to the right fix."
        actions={
          <a className="btn btn-primary" {...WA}>
            <IconWhatsApp /> Ask us on WhatsApp
          </a>
        }
      />
    </>
  );
}