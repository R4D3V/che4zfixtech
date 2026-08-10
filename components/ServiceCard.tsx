import Link from "next/link";
import { SERVICE_BULLETS, type Service } from "@/data/services";
import {
  IconArrowRight,
  IconCheck,
  ServiceIcon,
} from "./icons";

interface ServiceCardProps {
  service: Service;
  showNum?: boolean;
  bullets?: boolean;
  moreLabel?: string;
}

export default function ServiceCard({
  service,
  showNum = true,
  bullets = false,
  moreLabel = "View service",
}: ServiceCardProps) {
  const items = bullets ? SERVICE_BULLETS[service.icon] : null;
  return (
    <Link href={`/services/${service.slug}`} className="card">
      {showNum && <span className="num">{service.num}</span>}
      <div className="ic">
        <ServiceIcon icon={service.icon} />
      </div>
      <h3>{service.title}</h3>
      <p>{bullets ? service.cardShort : service.exploreDesc}</p>
      {items && (
        <ul className="card-list">
          {items.map((item) => (
            <li key={item}>
              <IconCheck /> {item}
            </li>
          ))}
        </ul>
      )}
      <span className="more">
        {moreLabel} <IconArrowRight />
      </span>
    </Link>
  );
}