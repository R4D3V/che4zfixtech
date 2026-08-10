import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconPhone = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const IconWhatsApp = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.15-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.51.07-.78.37-.26.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.01c.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34z" />
    <path d="M12.04 2C6.58 2 2.13 6.42 2.13 11.87c0 1.87.5 3.61 1.44 5.13L2 22l5.15-1.51a9.9 9.9 0 0 0 4.89 1.28h.01c5.46 0 9.9-4.42 9.9-9.87S17.5 2 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.06.9.9-2.98-.19-.31a8.14 8.14 0 0 1-1.27-4.44c0-4.5 3.68-8.16 8.21-8.16 4.53 0 8.21 3.66 8.21 8.16 0 4.5-3.68 8.15-8.21 8.15z" />
  </svg>
);

export const IconArrowRight = (props: IconProps) => (
  <svg {...base(props)}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const IconChevronDown = (props: IconProps) => (
  <svg {...base(props)}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const IconBurger = (props: IconProps) => (
  <svg {...base(props)}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const IconCheck = (props: IconProps) => (
  <svg {...base({ strokeWidth: 2.2, ...props })}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconShield = (props: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...props })}>
    <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
  </svg>
);

export const IconRepair = (props: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...props })}>
    <rect x="5" y="2" width="7" height="12" rx="1.5" />
    <path d="M8.5 17v2m0 0h0" />
    <circle cx="8.5" cy="20" r="1.2" fill="currentColor" stroke="none" />
    <path d="M15 5l1.5-1.5a2.5 2.5 0 0 1 3.9 3l-6 6-3-3 4.6-4.5z" />
  </svg>
);

export const IconPrinter = (props: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...props })}>
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

export const IconCCTV = (props: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...props })}>
    <path d="M3 8l8-3v14L3 16V8z" />
    <path d="M11 6l9-2v13l-9-2" />
    <circle cx="17.5" cy="10.5" r="1.4" />
  </svg>
);

export const IconNetworking = (props: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...props })}>
    <path d="M5 12.5a11 11 0 0 1 14 0" />
    <path d="M8.2 16a6.5 6.5 0 0 1 7.6 0" />
    <circle cx="12" cy="19.3" r="1" fill="currentColor" stroke="none" />
    <path d="M2 8.8a15.5 15.5 0 0 1 20 0" />
  </svg>
);

export const IconSoftware = (props: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...props })}>
    <polyline points="8 9 4 12.5 8 16" />
    <polyline points="16 9 20 12.5 16 16" />
    <line x1="13.5" y1="6" x2="10.5" y2="19" />
  </svg>
);

export const IconBolt = (props: IconProps) => (
  <svg {...base(props)}>
    <polygon points="13 2 3 14 11 14 10 22 21 10 13 10 13 2" />
  </svg>
);

export const IconHeart = (props: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...props })}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);

export const IconTarget = (props: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...props })}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconUsers = (props: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...props })}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const IconWrench = (props: IconProps) => (
  <svg {...base({ strokeWidth: 1.8, ...props })}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-3.1 3.1-2.5-2.5 3.1-3.1z" />
  </svg>
);

export const IconMail = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 4h16v16H4z" opacity="0" />
    <path d="M22 6c0-1.1-.9-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6z" />
    <polyline points="22 6 12 13 2 6" />
  </svg>
);

export const IconMapPin = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconClock = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

import type { ServiceIconKey } from "@/data/services";

export function ServiceIcon({ icon, ...props }: { icon: ServiceIconKey } & IconProps) {
  switch (icon) {
    case "repair":
      return <IconRepair {...props} />;
    case "printer":
      return <IconPrinter {...props} />;
    case "cctv":
      return <IconCCTV {...props} />;
    case "networking":
      return <IconNetworking {...props} />;
    case "software":
      return <IconSoftware {...props} />;
  }
}

export const IconFacebook = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
  </svg>
);

export const IconInstagram = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);