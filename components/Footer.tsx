import Link from "next/link";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";
import {
  IconFacebook,
  IconInstagram,
  IconWhatsApp,
} from "./icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo.png" alt="Che4zfixtech logo" width={36} height={36} />
              <span>
                CHE4Z<em>FIX</em>TECH
              </span>
            </Link>
            <p>{SITE.tagline}</p>
            <div className="footer-social">
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener" aria-label="WhatsApp">
                <IconWhatsApp />
              </a>
              <a href="#" aria-label="Facebook">
                <IconFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <IconInstagram />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            {SERVICES.map((s) => (
              <Link href={`/services/${s.slug}`} key={s.slug}>
                {s.title}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link href="/about">About Us</Link>
            <Link href="/why-choose-us">Why Choose Us</Link>
            <Link href="/services">All Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h5>Get in touch</h5>
            <p>{SITE.location}</p>
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {SITE.year} Che4zfixtech. All rights reserved.</span>
          <span>Built for fast, reliable tech support in Rumbek.</span>
        </div>
      </div>
    </footer>
  );
}