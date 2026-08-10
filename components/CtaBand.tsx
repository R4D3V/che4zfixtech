import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface CtaBandProps {
  title: string;
  text?: string;
  actions?: ReactNode;
}

export default function CtaBand({ title, text, actions }: CtaBandProps) {
  return (
    <section>
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <div>
              <h2>{title}</h2>
              {text && <p>{text}</p>}
            </div>
            {actions && <div className="actions">{actions}</div>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}