"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, NAV_LINKS } from "@/data/site";
import { SERVICES } from "@/data/services";
import {
  IconBurger,
  IconChevronDown,
  IconPhone,
  IconWhatsApp,
  ServiceIcon,
} from "./icons";
import type { ServiceIconKey } from "@/data/services";

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  if (href === "/services") return pathname === "/services" || pathname.startsWith("/services/");
  return pathname === href;
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 8) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="site-header"
      style={shadow ? { boxShadow: "0 10px 30px -20px rgba(0,0,0,.6)" } : undefined}
    >
      <div className="container nav">
        <Link href="/" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="Che4zfixtech logo" width={36} height={36} />
          <span>
            CHE4Z<em>FIX</em>TECH
          </span>
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) =>
            "dropdown" in link && link.dropdown ? (
              <li className="dropdown" key={link.href}>
                <Link
                  className={`nav-link${isActive(pathname, link.href) ? " active" : ""}`}
                  href={link.href}
                >
                  {link.label} <IconChevronDown />
                </Link>
                <div className="mega">
                  {SERVICES.map((s) => (
                    <Link href={`/services/${s.slug}`} key={s.slug}>
                      <span className="ic">
                        <ServiceIcon icon={s.icon as ServiceIconKey} />
                      </span>
                      <span>
                        <strong>{s.title}</strong>
                        <small>{s.navTag}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  className={`nav-link${isActive(pathname, link.href) ? " active" : ""}`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="nav-cta">
          <span className="nav-phone">
            <IconPhone /> {SITE.phone}
          </span>
          <a className="btn btn-primary" href={SITE.whatsappUrl} target="_blank" rel="noopener">
            <IconWhatsApp /> WhatsApp Us
          </a>
        </div>

        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <IconBurger />
        </button>
      </div>

      <nav className={`mobile-panel${open ? " open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link href="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link href="/services" onClick={() => setOpen(false)}>
          Services
        </Link>
        <div className="sub">
          {SERVICES.map((s) => (
            <Link href={`/services/${s.slug}`} onClick={() => setOpen(false)} key={s.slug}>
              {s.title}
            </Link>
          ))}
        </div>
        <Link href="/why-choose-us" onClick={() => setOpen(false)}>
          Why Choose Us
        </Link>
        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <a
          className="btn btn-primary btn-block"
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
        >
          <IconWhatsApp /> Chat on WhatsApp
        </a>
      </nav>
    </header>
  );
}