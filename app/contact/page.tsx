import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import {
  IconCheck,
  IconClock,
  IconMail,
  IconMapPin,
  IconWhatsApp,
} from "@/components/icons";
import Faq from "@/components/Faq";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhatsAppForm from "@/components/WhatsAppForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Che4zfixtech in Rumbek — WhatsApp +211 922 891 508 is the fastest way to book a repair, request a quote or ask about your device.",
};

const WA = { href: SITE.whatsappUrl, target: "_blank" as const, rel: "noopener" as const };

const CONTACT_FAQS = [
  {
    q: "Do I need to bring my device in, or can you come to me?",
    a: "Phone, laptop and printer repairs are usually done at our workshop. CCTV installation and networking/hotspot WiFi jobs are done on site at your home, shop or office.",
  },
  {
    q: "How fast will I get a reply on WhatsApp?",
    a: "We check WhatsApp throughout the day, every day. For urgent issues, calling the same number usually gets the fastest response.",
  },
  {
    q: "Is the diagnosis really free?",
    a: "Yes. We inspect the device or site and tell you what's wrong and what it will cost before any repair work or charges begin.",
  },
  {
    q: "Do you serve areas outside Rumbek town?",
    a: "We primarily serve Rumbek and the surrounding area. Send us your location on WhatsApp and we'll confirm whether we can reach you.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="// Get in touch"
        title="Tell us what's broken. We'll take it from there."
        lead="WhatsApp is the fastest way to reach us for a booking, a quote, or just a question about your device."
      />

      <section>
        <div className="container">
          <div className="svc-layout">
            <Reveal>
              <div className="form-panel">
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    marginBottom: 22,
                  }}
                >
                  Send us a message
                </h2>
                <WhatsAppForm
                  label="Contact Enquiry"
                  rows={[["name", "phone"]]}
                  fields={[
                    { name: "name", label: "Full name", type: "text", placeholder: "Your name", required: true },
                    { name: "phone", label: "Phone / WhatsApp number", type: "tel", placeholder: "+211 9xx xxx xxx", required: true },
                    {
                      name: "service",
                      label: "Service needed",
                      type: "select",
                      placeholder: "Select a service",
                      options: [
                        "Select a service",
                        ...SERVICES.map((s) => s.title),
                        "Not sure / other",
                      ],
                    },
                    { name: "location", label: "Location in Rumbek", type: "text", placeholder: "Your area / landmark" },
                    { name: "message", label: "Message", type: "textarea", placeholder: "Describe your device or issue...", required: true },
                  ]}
                  note={
                    <>
                      <IconCheck /> This opens WhatsApp with your message
                      pre-filled — you just hit send.
                    </>
                  }
                />
              </div>
            </Reveal>

            <aside>
              <Reveal>
                <div className="sidebar-card">
                  <h4>Contact details</h4>
                  <div className="info-tile" style={{ paddingTop: 0 }}>
                    <div className="ic">
                      <IconWhatsApp />
                    </div>
                    <div>
                      <h4>WhatsApp / Call</h4>
                      <a href={SITE.whatsappUrl} target="_blank" rel="noopener">
                        {SITE.phone}
                      </a>
                    </div>
                  </div>
                  <div className="info-tile">
                    <div className="ic">
                      <IconMail />
                    </div>
                    <div>
                      <h4>Email</h4>
                      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                    </div>
                  </div>
                  <div className="info-tile">
                    <div className="ic">
                      <IconMapPin />
                    </div>
                    <div>
                      <h4>Location</h4>
                      <p>{SITE.location}</p>
                    </div>
                  </div>
                  <div className="info-tile" style={{ borderBottom: "none" }}>
                    <div className="ic">
                      <IconClock />
                    </div>
                    <div>
                      <h4>Response time</h4>
                      <p>WhatsApp messages answered daily</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <a className="btn btn-primary btn-block" {...WA}>
                  <IconWhatsApp /> Chat on WhatsApp instead
                </a>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="eyebrow">// Before you message</div>
              <h2>Quick answers</h2>
            </div>
          </Reveal>
          <Reveal>
            <Faq items={CONTACT_FAQS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}