import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { SERVICES, serviceBySlug } from "@/data/services";
import {
  IconArrowRight,
  IconCheck,
  IconWhatsApp,
} from "@/components/icons";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppForm from "@/components/WhatsAppForm";

const WA = { href: SITE.whatsappUrl, target: "_blank" as const, rel: "noopener" as const };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const others = service.related.map((icon) =>
    SERVICES.find((s) => s.icon === icon)!
  );

  return (
    <>
      <PageHero
        crumb={
          <>
            <Link href="/services">Services</Link> / {service.title}
          </>
        }
        eyebrow={service.eyebrow}
        title={service.title}
        lead={service.lead}
      />

      <section>
        <div className="container">
          <div className="svc-layout">
            <div>
              <Reveal scale>
                <div className="svc-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.imageAlt} />
                </div>
              </Reveal>
              <div className="svc-body">
                <h2 style={{ marginTop: 0 }}>Overview</h2>
                <p>{service.overview}</p>

                <h2>{service.includesHeading}</h2>
                <ul>
                  {service.includes.map((item) => (
                    <li key={item}>
                      <IconCheck /> {item}
                    </li>
                  ))}
                </ul>

                <h2>{service.processHeading}</h2>
              </div>
              <Reveal>
                <div className="process" style={{ marginBottom: 40 }}>
                  {service.processSteps.map((step) => (
                    <div className="step" key={step.n}>
                      <span className="n">{step.n}</span>
                      <h4>{step.title}</h4>
                      <p>{step.text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <div className="svc-body">
                <h2>Frequently asked questions</h2>
              </div>
              <Reveal>
                <Faq items={service.faqs} />
              </Reveal>
            </div>

            <aside>
              <Reveal>
                <div className="sidebar-card">
                  <h4>Book this service</h4>
                  <WhatsAppForm label={service.formLabel} fields={service.formFields} />
                </div>
              </Reveal>
              <Reveal>
                <div className="sidebar-card">
                  <h4>Other services</h4>
                  <div className="sidebar-links">
                    {others.map((s) => (
                      <Link href={`/services/${s.slug}`} key={s.slug}>
                        <span>{s.title}</span>
                        <IconArrowRight />
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">// You might also need</div>
              <h2>Explore our other services.</h2>
            </div>
          </Reveal>
          <div className="grid grid-3 stagger">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={`${i * 0.08}s`}>
                <ServiceCard service={s} showNum={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={service.ctaTitle}
        text="Message us on WhatsApp for the fastest response."
        actions={
          <a className="btn btn-primary" {...WA}>
            <IconWhatsApp /> Chat now
          </a>
        }
      />
    </>
  );
}