"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface FaqItemProps {
  q: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function FaqItem({ q, children, defaultOpen = false }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = body.current;
    if (!el) return;
    if (open) el.style.maxHeight = el.scrollHeight + "px";
    else el.style.maxHeight = "";
  }, [open, children]);

  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button
        type="button"
        className="faq-q"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {q}
        <span className="plus" />
      </button>
      <div className="faq-a" ref={body}>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <>
      {items.map((item, i) => (
        <FaqItem key={i} q={item.q}>
          {item.a}
        </FaqItem>
      ))}
    </>
  );
}