import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/data/site";
import {
  IconBolt,
  IconCheck,
  IconHeart,
  IconShield,
  IconTarget,
  IconUsers,
  IconWhatsApp,
  IconWrench,
} from "@/components/icons";
import Counter from "@/components/Counter";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Tech support that shows up and tells you the truth — honest diagnosis first, fast turnaround, genuine parts and licensed software in Rumbek.",
};

const WA = { href: SITE.whatsappUrl, target: "_blank" as const, rel: "noopener" as const };

const REASONS = [
  {
    icon: <IconTarget />,
    title: "Honest diagnosis first",
    text: "We test before we talk price. You always know what's wrong and what it costs before we start.",
  },
  {
    icon: <IconBolt />,
    title: "Fast turnaround",
    text: "Most repairs are diagnosed same-day and completed within 24–48 hours.",
  },
  {
    icon: <IconShield />,
    title: "Genuine parts & licensed software",
    text: "No shortcuts that leave you with the same problem in a month.",
  },
  {
    icon: <IconUsers />,
    title: "Local & reachable",
    text: "Based in Rumbek, reachable on WhatsApp, and available for on-site jobs across town.",
  },
  {
    icon: <IconWrench />,
    title: "One partner, every device",
    text: "Phones, laptops, printers, CCTV, networks and software — you don't need five different contacts.",
  },
  {
    icon: <IconHeart />,
    title: "Your data stays yours",
    text: "Backups before risky repairs, and your files are never touched without permission.",
  },
];

const USUAL_BAD = [
  "Quotes before opening the device",
  "Unclear on what parts were actually used",
  "One contact for phones, another for printers, another for networks",
  "No follow-up once you've paid",
];

const US_GOOD = [
  "Diagnoses first, quotes second",
  "Tells you exactly what parts or software were used",
  "One team for every device and service on this site",
  "Reachable on WhatsApp if something needs a follow-up",
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        crumb="Why Choose Us"
        eyebrow="// Why choose us"
        title="Tech support that shows up and tells you the truth."
        lead="Rumbek doesn't need another shop that guesses at your device and hopes it sticks. Here's what makes working with Che4zfixtech different."
      />

      <section>
        <div className="container">
          <div className="grid grid-3 stagger">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={`${i * 0.08}s`}>
                <div className="card">
                  <div className="ic">{r.icon}</div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="stat-strip">
        <div className="container">
          <div className="stat">
            <Counter value={5} />
            <span>Core services covered</span>
          </div>
          <div className="stat">
            <Counter value={24} suffix="hr" />
            <span>Typical turnaround</span>
          </div>
          <div className="stat">
            <Counter value={100} suffix="%" />
            <span>Diagnosis before quote</span>
          </div>
          <div className="stat">
            <Counter value={7} suffix="/7" />
            <span>WhatsApp availability</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">// Us vs. the usual</div>
              <h2>What changes when you work with us.</h2>
            </div>
          </Reveal>
          <div className="svc-layout" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <Reveal>
              <div className="card">
                <h3 style={{ color: "var(--text-muted)" }}>The usual repair shop</h3>
                <ul className="card-list" style={{ marginTop: 18 }}>
                  {USUAL_BAD.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div
                className="card"
                style={{ borderColor: "var(--blue)" }}
              >
                <h3>Che4zfixtech</h3>
                <ul className="card-list" style={{ marginTop: 18 }}>
                  {US_GOOD.map((item) => (
                    <li key={item}>
                      <IconCheck /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal scale>
            <div className="svc-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/hotspot-wifi-flyer.jpg"
                alt="Che4zfixtech technician working on site in Rumbek"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="See it for yourself."
        text="Send us your device or site issue and get a straight answer, fast."
        actions={
          <>
            <a className="btn btn-primary" {...WA}>
              <IconWhatsApp /> Message us
            </a>
            <Link className="btn btn-outline" href="/services">
              See all services
            </Link>
          </>
        }
      />
    </>
  );
}