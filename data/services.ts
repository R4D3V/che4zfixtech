export type ServiceIconKey =
  | "repair"
  | "printer"
  | "cctv"
  | "networking"
  | "software";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceFormField {
  name: string;
  label: string;
  type: "text" | "tel" | "textarea";
  placeholder: string;
  required?: boolean;
}

export interface Service {
  slug: string;
  num: string;
  eyebrow: string;
  title: string;
  lead: string;
  icon: ServiceIconKey;
  image: string;
  imageAlt: string;
  overview: string;
  metaTitle: string;
  metaDescription: string;
  /** short tagline used on home-page cards */
  cardShort: string;
  /** longer line used on cards inside service pages */
  exploreDesc: string;
  navTag: string;
  includesHeading: string;
  includes: string[];
  processHeading: string;
  processTitle: string;
  processSteps: { n: string; title: string; text: string }[];
  faqs: ServiceFaq[];
  formLabel: string;
  formFields: ServiceFormField[];
  ctaTitle: string;
  /** slugs of other services to feature */
  related: ServiceIconKey[];
}

export const SERVICES: Service[] = [
  {
    slug: "repair",
    num: "01",
    eyebrow: "// Service 01",
    title: "Mobile & Computer Repair",
    lead: "Phones, laptops and desktops fixed by hands that know the boards, not just the apps.",
    icon: "repair",
    image: "/assets/repair-experts-flyer.jpg",
    imageAlt:
      "Che4zfixtech mobile and computer repair — phone, laptop, printer and CCTV camera",
    overview:
      "Cracked screen, dead battery, won't boot, running hot, or acting up after a fall — if it's a phone, laptop or desktop, we open it up, find the fault and fix it properly.",
    metaTitle: "Mobile & Computer Repair | Che4zfixtech",
    metaDescription:
      "Mobile & Computer Repair in Rumbek by Che4zfixtech — Phones, laptops and desktops fixed by hands that know the boards, not just the apps.",
    cardShort: "Screen swaps, board-level fixes, virus removal, data recovery.",
    exploreDesc:
      "Phones, laptops and desktops fixed by hands that know the boards, not just the apps.",
    navTag:
      "Screen swaps, board-level fixes, virus removal, data recovery.",
    includesHeading: "What's included",
    includes: [
      "Screen, battery & charging port replacement",
      "Board-level repair for liquid & power damage",
      "Virus, malware & spyware removal",
      "Software crashes, slow performance & OS reinstalls",
      "Data backup & recovery from failing drives",
      "Genuine and OEM-equivalent replacement parts",
    ],
    processHeading: "How a repair goes",
    processTitle: "From broken to fixed.",
    processSteps: [
      { n: "01", title: "Bring it in or book a pickup", text: "Drop your device at our workshop or arrange collection via WhatsApp." },
      { n: "02", title: "Free diagnosis", text: "We test the device and tell you exactly what's wrong before any cost is agreed." },
      { n: "03", title: "Repair", text: "Parts are fitted or software is fixed, with your data left untouched unless recovery is the job." },
      { n: "04", title: "Test together", text: "You check the device works before you pay — no surprises." },
    ],
    faqs: [
      { q: "How long does a typical repair take?", a: "Most screen, battery and software repairs are same-day. Board-level repairs or parts we need to source can take 2–4 days — we'll tell you upfront." },
      { q: "Will I lose my data?", a: "No. We back up your data before any repair that could put it at risk, and data recovery itself is one of our core services." },
      { q: "Do you repair both Android and iPhone?", a: "Yes, along with laptops and desktops running Windows or macOS." },
    ],
    formLabel: "Repair Request",
    formFields: [
      { name: "name", label: "Full name", type: "text", placeholder: "Your name", required: true },
      { name: "phone", label: "Phone / WhatsApp number", type: "tel", placeholder: "+211 9xx xxx xxx", required: true },
      { name: "device", label: "Device (e.g. iPhone 12, HP laptop)", type: "text", placeholder: "Device (e.g. iPhone 12, HP laptop)", required: true },
      { name: "message", label: "Describe the issue", type: "textarea", placeholder: "Tell us what's going on..." },
    ],
    ctaTitle: "Ready to book mobile & computer repair?",
    related: ["printer", "cctv", "networking"],
  },
  {
    slug: "printer",
    num: "02",
    eyebrow: "// Service 02",
    title: "Printer Sales & Services",
    lead: "From setup to servicing, keep your printer running without the guesswork.",
    icon: "printer",
    image: "/assets/devices-closeup.jpg",
    imageAlt: "Printer, laptop and mobile device serviced by Che4zfixtech",
    overview:
      "Printers are simple until they jam, print blank pages, or refuse to connect. We sell printers and keep the ones you already own working reliably.",
    metaTitle: "Printer Sales & Services | Che4zfixtech",
    metaDescription:
      "Printer Sales & Services in Rumbek by Che4zfixtech — From setup to servicing, keep your printer running without the guesswork.",
    cardShort: "Setup, driver config, head cleaning, cartridge & toner supply.",
    exploreDesc: "From setup to servicing, keep your printer running without the guesswork.",
    navTag: "Setup, driver config, head cleaning, cartridge & toner supply.",
    includesHeading: "What's included",
    includes: [
      "New & used printer sales, matched to your budget",
      "Driver installation & network/WiFi printer sharing",
      "Print head cleaning & roller replacement",
      "Cartridge, toner & ink refills and supply",
      "Paper jam and print-quality troubleshooting",
      "Scanner & fax function setup where applicable",
    ],
    processHeading: "How printer service works",
    processTitle: "From jam to clean print.",
    processSteps: [
      { n: "01", title: "Tell us the problem", text: "Message us the printer model and what it's doing (or not doing)." },
      { n: "02", title: "On-site or bench check", text: "For office setups we come to you; smaller units can be dropped at our workshop." },
      { n: "03", title: "Fix or supply", text: "We service the unit or supply the right cartridges, toner or replacement parts." },
      { n: "04", title: "Confirm it prints clean", text: "We run a test print and check network sharing before we leave." },
    ],
    faqs: [
      { q: "Do you supply ink and toner too?", a: "Yes, we stock and can source cartridges and toner for most common printer brands and models." },
      { q: "Can you set up a printer for the whole office to share?", a: "Yes — network and WiFi printer sharing across multiple computers is part of the setup service." },
      { q: "What if my printer isn't fixable?", a: "We'll tell you honestly if a repair isn't worth it, and can help you choose a replacement instead." },
    ],
    formLabel: "Printer Service Request",
    formFields: [
      { name: "name", label: "Full name", type: "text", placeholder: "Your name", required: true },
      { name: "phone", label: "Phone / WhatsApp number", type: "tel", placeholder: "+211 9xx xxx xxx", required: true },
      { name: "model", label: "Printer brand & model", type: "text", placeholder: "Printer brand & model" },
      { name: "message", label: "Describe the issue", type: "textarea", placeholder: "Tell us what's going on..." },
    ],
    ctaTitle: "Ready to book printer sales & services?",
    related: ["repair", "cctv", "networking"],
  },
  {
    slug: "cctv",
    num: "03",
    eyebrow: "// Service 03",
    title: "CCTV Camera Systems",
    lead: "See your shop, home or compound from anywhere, day or night.",
    icon: "cctv",
    image: "/assets/repair-experts-flyer.jpg",
    imageAlt:
      "CCTV camera installed by Che4zfixtech alongside mobile and computer repair equipment",
    overview:
      "A CCTV system is only useful if it's installed properly and you can actually check it when you need to. We survey your space, install the right cameras, and set you up to view footage from your phone.",
    metaTitle: "CCTV Camera Systems | Che4zfixtech",
    metaDescription:
      "CCTV Camera Systems in Rumbek by Che4zfixtech — See your shop, home or compound from anywhere, day or night.",
    cardShort: "Site survey, installation, remote viewing, footage backup.",
    exploreDesc: "See your shop, home or compound from anywhere, day or night.",
    navTag: "Site survey, installation, remote viewing, footage backup.",
    includesHeading: "What's included",
    includes: [
      "Free site survey & camera placement planning",
      "Indoor & outdoor camera installation",
      "DVR/NVR setup with local storage",
      "Remote viewing configured on your phone or PC",
      "Night vision & motion detection setup",
      "Footage backup & storage guidance",
    ],
    processHeading: "How installation works",
    processTitle: "From site visit to live feed.",
    processSteps: [
      { n: "01", title: "Site visit", text: "We walk the property with you and identify the blind spots that matter most." },
      { n: "02", title: "Proposal", text: "You get a clear plan: how many cameras, where, and what it costs." },
      { n: "03", title: "Installation", text: "Cameras, cabling and the recorder are installed and tested on site." },
      { n: "04", title: "Handover", text: "We set up remote viewing on your phone and show you how to review footage." },
    ],
    faqs: [
      { q: "How many cameras do I need?", a: "It depends on the size and layout of your property — our free site survey gives you an exact recommendation." },
      { q: "Can I view the cameras when I'm not on site?", a: "Yes, we configure remote viewing so you can check live footage from your phone anywhere you have internet." },
      { q: "Do you handle both homes and businesses?", a: "Yes — homes, shops, offices, guesthouses and compounds." },
    ],
    formLabel: "CCTV Installation Enquiry",
    formFields: [
      { name: "name", label: "Full name", type: "text", placeholder: "Your name", required: true },
      { name: "phone", label: "Phone / WhatsApp number", type: "tel", placeholder: "+211 9xx xxx xxx", required: true },
      { name: "cameras", label: "Approx. number of cameras needed", type: "text", placeholder: "Approx. number of cameras needed" },
      { name: "message", label: "Describe the issue", type: "textarea", placeholder: "Tell us what's going on..." },
    ],
    ctaTitle: "Ready to book cctv camera systems?",
    related: ["repair", "printer", "networking"],
  },
  {
    slug: "networking",
    num: "04",
    eyebrow: "// Service 04",
    title: "Networking & Hotspot WiFi",
    lead: "Fast, stable, secure internet — configured on site in Rumbek.",
    icon: "networking",
    image: "/assets/hotspot-wifi-flyer.jpg",
    imageAlt:
      "Che4zfixtech technician configuring hotspot WiFi router on site in Rumbek",
    overview:
      "A dropped connection costs you customers and time. We set up and troubleshoot routers, hotspots and business networks so your internet stays up when you need it.",
    metaTitle: "Networking & Hotspot WiFi | Che4zfixtech",
    metaDescription:
      "Networking & Hotspot WiFi in Rumbek by Che4zfixtech — Fast, stable, secure internet — configured on site in Rumbek.",
    cardShort: "Router setup, hotspot config, signal boosting, troubleshooting.",
    exploreDesc: "Fast, stable, secure internet — configured on site in Rumbek.",
    navTag: "Router setup, hotspot config, signal boosting, troubleshooting.",
    includesHeading: "What's included",
    includes: [
      "Router setup & configuration",
      "Hotspot WiFi configuration for shops & offices",
      "Fast internet access setup & speed troubleshooting",
      "Secure hotspot & password configuration",
      "Signal boosting & network optimization",
      "Ongoing troubleshooting support",
    ],
    processHeading: "How we get you online",
    processTitle: "From dropped calls to stable signal.",
    processSteps: [
      { n: "01", title: "Book a visit", text: "Tell us your location and what internet setup you currently have, if any." },
      { n: "02", title: "On-site assessment", text: "We check signal strength, coverage area and how many devices need to connect." },
      { n: "03", title: "Configuration", text: "Router and hotspot are set up, secured and optimized for your space." },
      { n: "04", title: "Test & handover", text: "We test the connection across your space before we leave, and share the access details." },
    ],
    faqs: [
      { q: "Can you fix WiFi that keeps dropping?", a: "Yes — this is one of our most common call-outs. We diagnose whether it's the router, the signal, or the provider and fix accordingly." },
      { q: "Do you set up hotspots for shops to share with customers?", a: "Yes, including secure guest hotspots separate from your business network." },
      { q: "Do you work outside Rumbek town?", a: "We primarily serve Rumbek and the surrounding area — message us your location and we'll confirm." },
    ],
    formLabel: "Networking / Hotspot WiFi Request",
    formFields: [
      { name: "name", label: "Full name", type: "text", placeholder: "Your name", required: true },
      { name: "phone", label: "Phone / WhatsApp number", type: "tel", placeholder: "+211 9xx xxx xxx", required: true },
      { name: "location", label: "Location / area in Rumbek", type: "text", placeholder: "Location / area in Rumbek", required: true },
      { name: "message", label: "Describe the issue", type: "textarea", placeholder: "Tell us what's going on..." },
    ],
    ctaTitle: "Ready to book networking & hotspot wifi?",
    related: ["repair", "printer", "cctv"],
  },
  {
    slug: "software",
    num: "05",
    eyebrow: "// Service 05",
    title: "Software Solutions",
    lead: "From a clean OS install to the software that runs your business.",
    icon: "software",
    image: "/assets/hero-banner.jpg",
    imageAlt: "Che4zfixtech software solutions branding",
    overview:
      "Hardware is only half the job. We install, license and configure the software that makes your devices and business actually work — correctly, and without pirated shortcuts that come back to bite you.",
    metaTitle: "Software Solutions | Che4zfixtech",
    metaDescription:
      "Software Solutions in Rumbek by Che4zfixtech — From a clean OS install to the software that runs your business.",
    cardShort: "OS installs, licensing, business software, POS setup.",
    exploreDesc: "From a clean OS install to the software that runs your business.",
    navTag: "OS installs, licensing, business software, POS setup.",
    includesHeading: "What's included",
    includes: [
      "Windows & operating system installation",
      "Licensed software & antivirus setup",
      "Business & POS (point-of-sale) software setup",
      "Data migration between old & new devices",
      "System optimization & software updates",
      "Basic staff training on new systems",
    ],
    processHeading: "How software setup works",
    processTitle: "From install to walkthrough.",
    processSteps: [
      { n: "01", title: "Understand the need", text: "We ask what the device or business needs to do, not just what's broken." },
      { n: "02", title: "Recommend & confirm", text: "We suggest the right software and licensing option and confirm cost with you." },
      { n: "03", title: "Install & configure", text: "Software is installed, activated and configured for your specific use case." },
      { n: "04", title: "Walkthrough", text: "We show you how to use it before we consider the job done." },
    ],
    faqs: [
      { q: "Can you set up a POS system for my shop?", a: "Yes, we configure point-of-sale software suited to small and medium shops in Rumbek." },
      { q: "Do you install licensed software only?", a: "We prioritise genuine, licensed software so you're not exposed to malware or legal risk down the line." },
      { q: "Can you move my files to a new laptop?", a: "Yes, data migration is part of the software service when you replace a device." },
    ],
    formLabel: "Software Solutions Enquiry",
    formFields: [
      { name: "name", label: "Full name", type: "text", placeholder: "Your name", required: true },
      { name: "phone", label: "Phone / WhatsApp number", type: "tel", placeholder: "+211 9xx xxx xxx", required: true },
      { name: "need", label: "What do you need set up?", type: "text", placeholder: "What do you need set up?" },
      { name: "message", label: "Describe the issue", type: "textarea", placeholder: "Tell us what's going on..." },
    ],
    ctaTitle: "Ready to book software solutions?",
    related: ["repair", "printer", "cctv"],
  },
];

export const serviceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export const serviceByIcon = (icon: ServiceIconKey) =>
  SERVICES.find((s) => s.icon === icon)!;

/** bullet list used on the /services listing cards */
export const SERVICE_BULLETS: Record<ServiceIconKey, string[]> = {
  repair: [
    "Screen & battery replacement",
    "Board-level & liquid damage repair",
    "Virus & malware removal",
    "Data backup & recovery",
  ],
  printer: [
    "New & used printer sales",
    "Driver install & network sharing",
    "Print head & roller cleaning",
    "Cartridge, toner & ink refills",
  ],
  cctv: [
    "Free site survey & camera planning",
    "Indoor & outdoor camera install",
    "Remote viewing on phone/PC",
    "DVR/NVR setup & footage backup",
  ],
  networking: [
    "Router setup & configuration",
    "Hotspot WiFi configuration",
    "Signal boosting & extenders",
    "Ongoing troubleshooting support",
  ],
  software: [
    "Windows & OS installation",
    "Licensed software & antivirus",
    "Business & POS software setup",
    "System optimization & updates",
  ],
};

export const MARQUEE_ITEMS = [
  "Phone & Laptop Repair",
  "Printer Setup & Servicing",
  "CCTV Installation",
  "Hotspot WiFi Configuration",
  "Software & OS Installs",
  "Data Recovery",
  "Network Troubleshooting",
];