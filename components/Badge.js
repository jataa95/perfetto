import { whatsappLink } from "@/lib/site";

export default function Badge() {
  return (
    <a
      className="spin-badge"
      href={whatsappLink("Hi Perfetto! I'd like to place an order.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
    >
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text>
          <textPath href="#badge-circle">NIGERIA MADE FITS • ORDER NOW •</textPath>
        </text>
      </svg>
      <span aria-hidden="true">✂</span>
    </a>
  );
}
