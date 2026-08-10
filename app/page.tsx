import Link from "next/link";
import { SITE } from "@/data/site";
import { SERVICES, MARQUEE_ITEMS } from "@/data/services";
import {
  IconArrowRight,
  IconCheck,
  IconShield,
  IconWhatsApp,
} from "@/components/icons";
import CtaBand from "@/components/CtaBand";
import Counter from "@/components/Counter";
import NetCanvas from "@/components/NetCanvas";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";

const WA = { href: SITE.whatsappUrl, target: "_blank" as const, rel: "noopener" as const };

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <NetCanvas />
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-kicker">
                <span className="dot" /> Now serving Rumbek &amp; surrounding areas
              </div>
              <h1>
                We fix it. <span className="grad">Fast.</span>
                <br />
                <b>Your trusted tech partner</b> in Rumbek.
              </h1>
              <p className="lead">
                Phones, laptops, printers, CCTV, WiFi &amp; software — Che4zfixtech
                handles the hardware and software problems that stop your day, with
                same-week turnaround and honest pricing.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" {...WA}>
                  <IconWhatsApp /> Book a repair now
                </a>
                <Link className="btn btn-outline" href="/services">
                  Browse services <IconArrowRight />
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <Counter value={5} suffix="+" />
                  <span>Services offered</span>
                </div>
                <div className="stat">
                  <Counter value={24} suffix="hr" />
                  <span>Avg. turnaround</span>
                </div>
                <div className="stat">
                  <Counter value={100} suffix="%" />
                  <span>Diagnostics guaranteed</span>
                </div>
              </div>
            </div>
            <Reveal scale>
              <div className="hero-visual">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/repair-experts-flyer.jpg"
                  alt="Che4zfixtech — experts in mobile and computer repair, printers, CCTV and networks"
                />
                <div className="badge">
                  <IconShield />
                  <div>
                    <strong>Your trusted tech partner</strong>
                    <span>Software · Hardware · Networks</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">// What we do</div>
              <h2>One tech partner, every device covered.</h2>
              <p>
                From a cracked phone screen to a full CCTV install, we bring the tools
                and know-how to your problem — no guesswork, no runaround.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-3 stagger">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={`${i * 0.08}s`}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="stat-strip">
        <div className="container">
          <div className="stat">
            <Counter value={5} />
            <span>Core services</span>
          </div>
          <div className="stat">
            <Counter value={24} suffix="hr" />
            <span>Guaranteed reward window*</span>
          </div>
          <div className="stat">
            <Counter value={100} suffix="%" />
            <span>Upfront diagnostics</span>
          </div>
          <div className="stat">
            <Counter value={7} suffix="/7" />
            <span>WhatsApp booking</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">// How it works</div>
              <h2>From broken to fixed in four steps.</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="process">
              <div className="step">
                <span className="n">01</span>
                <h4>Message us</h4>
                <p>Send a WhatsApp message or call with your device and the issue you're facing.</p>
              </div>
              <div className="step">
                <span className="n">02</span>
                <h4>Free diagnosis</h4>
                <p>We inspect the device or site and tell you exactly what's wrong and what it costs.</p>
              </div>
              <div className="step">
                <span className="n">03</span>
                <h4>We fix it</h4>
                <p>Genuine parts, careful hands, and a technician who explains what was done.</p>
              </div>
              <div className="step">
                <span className="n">04</span>
                <h4>Collect &amp; test</h4>
                <p>You test it in front of us before you pay. No surprises, no comebacks.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">// Field work</div>
              <h2>Hotspot WiFi, configured on site in Rumbek.</h2>
              <p>
                Router setup, fast internet access, secure hotspots and network
                optimization — handled at your shop, office or compound.
              </p>
            </div>
          </Reveal>
          <Reveal scale>
            <div className="svc-media" style={{ marginBottom: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/hotspot-wifi-flyer.jpg"
                alt="Che4zfixtech technician configuring hotspot WiFi on site in Rumbek"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Got a device down right now?"
        text="Send us the details on WhatsApp and get a same-day diagnosis."
        actions={
          <>
            <a className="btn btn-primary" {...WA}>
              <IconWhatsApp /> Chat now
            </a>
            <Link className="btn btn-outline" href="/contact">
              Contact page
            </Link>
          </>
        }
      />

      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">// Testimonials</div>
              <h2>What clients in Rumbek say.</h2>
            </div>
          </Reveal>
          <div className="grid grid-3 stagger">
            <Reveal>
              <div className="testi-card">
                <div className="stars">★★★★★</div>
                <p>My laptop wouldn't boot and I had client files on it. They recovered everything and had it running the same afternoon.</p>
                <div className="who">
                  <div className="avatar">AD</div>
                  <div>
                    <strong>Akol D.</strong>
                    <span>Local shop owner</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay=".08s">
              <div className="testi-card">
                <div className="stars">★★★★★</div>
                <p>They set up CCTV across our whole compound and showed us how to check it from our phones. Very professional.</p>
                <div className="who">
                  <div className="avatar">MG</div>
                  <div>
                    <strong>Mary G.</strong>
                    <span>Guesthouse manager</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay=".16s">
              <div className="testi-card">
                <div className="stars">★★★★★</div>
                <p>Our office WiFi kept dropping. Che4zfixtech reconfigured the router and hotspot and it's been solid ever since.</p>
                <div className="who">
                  <div className="avatar">JL</div>
                  <div>
                    <strong>John L.</strong>
                    <span>Office administrator</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay=".24s">
              <div className="testi-card">
                <div className="stars">★★★★★</div>
                <p>My laser printer was jamming and printing blank pages for weeks. They cleaned the rollers and it prints perfectly again.</p>
                <div className="who">
                  <div className="avatar">EK</div>
                  <div>
                    <strong>Emmanuel K.</strong>
                    <span>School administrator</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay=".32s">
              <div className="testi-card">
                <div className="stars">★★★★★</div>
                <p>They installed the POS software for my shop and trained my staff in one afternoon. Sales tracking is easy now.</p>
                <div className="who">
                  <div className="avatar">SO</div>
                  <div>
                    <strong>Sarah O.</strong>
                    <span>Shop owner</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay=".4s">
              <div className="testi-card">
                <div className="stars">★★★★★</div>
                <p>Smooth, calm and honest — they recovered my photos after my phone dropped in water and didn't overcharge me.</p>
                <div className="who">
                  <div className="avatar">DA</div>
                  <div>
                    <strong>David A.</strong>
                    <span>Contractor</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}