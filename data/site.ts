export const SITE = {
  name: "Che4zfixtech",
  phone: "+211 922 891 508",
  phoneRaw: "211922891508",
  email: "Che4zfixtech@gmail.com",
  location: "Rumbek, South Sudan",
  whatsappUrl: "https://wa.me/211922891508",
  tagline: "New-age tech solutions for Rumbek — mobile & computer repair, printers, CCTV, networking and software, handled by people who show up.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", dropdown: true },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact" },
] as const;