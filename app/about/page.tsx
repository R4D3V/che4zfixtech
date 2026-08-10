import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import {
  IconArrowRight,
  IconCheck,
  IconShield,
  IconTarget,
  IconBolt,
  IconWrench,
} from "@/components/icons";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Che4zfixtech, a Rumbek-based tech solutions company covering mobile & computer repair, printers, CCTV, networking and software.",
};

const WA = { href: SITE.whatsappUrl, target: "_blank" as const, rel: "noopener" as const };

const VALUES = [
  {
    icon: <IconTarget />,
    title: "Honest diagnosis",
    text: "We tell you exactly what's wrong, what it will cost, and what your options are — before any work begins.",
  },
  {
    icon: <IconBolt />,
    title: "Fast turnaround",
    text: "Most repairs are diagnosed the same day and completed within 24–48 hours, depending on parts.",
  },
  {
    icon: <IconShield />,
    title: "Care for your data",
    text: "Your files, photos and business data are handled carefully and never touched without your permission.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="// About us"
        title="New-age tech solutions, built for Rumbek."
        lead="Che4zfixtech started with a simple idea: tech support in Rumbek shouldn't mean guesswork, long waits, or shipping your device out of town. We bring software and hardware expertise to your doorstep."
      />

      <section>
        <div className="container">
          <div className="svc-layout">
            <div className="svc-body">
              <div className="eyebrow" style={{ marginTop: 0 }}>
                // Our story
              </div>
              <h2 style={{ marginTop: 0 }}>
                From one repair bench to a full tech partner.
              </h2>
              <p>
                Che4zfixtech began as a mobile and computer repair bench and grew
                into a full-service tech outfit for Rumbek and the surrounding
                area. Today we deal in new-age tech solutions — from software to
                hardware, for mobile devices and computers, printers, CCTV cameras
                and business networks.
              </p>
              <p>
                Every job starts the same way: we look at what's actually wrong
                before we quote you anything. That habit is why clients come back,
                and why they send their neighbours to us too.
              </p>

              <h2>What drives the work</h2>
              <ul>
                {[
                  "Diagnose first, quote second — no guessing at your expense.",
                  "Use genuine parts and licensed software wherever possible.",
                  "Explain the fix in plain language, not jargon.",
                  "Show up on site for CCTV, networking and hotspot WiFi jobs.",
                ].map((item) => (
                  <li key={item}>
                    <IconCheck /> {item}
                  </li>
                ))}
              </ul>

              <h2>Where we work</h2>
              <p>
                We're based in Rumbek and serve homes, shops, offices, guesthouses
                and compounds across the town. Bench repairs happen at our
                workshop; installation and configuration jobs (CCTV, networking,
                hotspot WiFi) are done on site.
              </p>
            </div>

            <aside>
              <Reveal>
                <div className="sidebar-card">
                  <h4>At a glance</h4>
                  <ul className="card-list">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <IconCheck /> {s.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal>
                <div className="sidebar-card">
                  <h4>Talk to us</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: ".9rem", marginBottom: 16 }}>
                    Fastest response is on WhatsApp.
                  </p>
                  <a className="btn btn-primary btn-block" {...WA}>
                    <IconWrench /> Message us
                  </a>
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
              <div className="eyebrow">// What we stand for</div>
              <h2>The values behind every job.</h2>
            </div>
          </Reveal>
          <div className="grid grid-3 stagger">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={`${i * 0.08}s`}>
                <div className="card">
                  <div className="ic">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want the full service list?"
        text="See detailed breakdowns for every service we offer, with sample work."
        actions={
          <a className="btn btn-primary" href="/services">
            Explore services <IconArrowRight />
          </a>
        }
      />
    </>
  );
}