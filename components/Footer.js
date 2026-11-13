import Link from "next/link";
import OrderForm from "./OrderForm";
import Wordmark from "./Wordmark";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="foot" id="contact">
      <div className="foot__grid">
        <div className="foot__art">
          <svg viewBox="0 0 220 260" aria-hidden="true">
            {/* line drawing: a hoodie on a hanger */}
            <path d="M110 18c-8 0-12 6-12 11s4 8 8 10l4 2" />
            <path d="M110 41 52 70h116l-58-29" />
            <path d="M80 70c-22 6-36 14-44 26l-22 74 26 8 18-52v120h104V126l18 52 26-8-22-74c-8-12-22-20-44-26" />
            <path d="M80 70c0 22 12 40 30 40s30-18 30-40" />
            <path d="M92 70c0 14 8 26 18 26s18-12 18-26" />
            <path d="M110 110v136" />
            <path d="M70 186h80v26H70z" />
            <path d="M58 236h104" />
            <path d="M101 114l-4 22M119 114l4 22" />
          </svg>
          <p>
            We design.
            <br />
            We create.
          </p>
        </div>
        <div className="foot__form">
          <p className="foot__lead">Want a set made for you? Tell us what you want and we&rsquo;ll reply on WhatsApp.</p>
          <OrderForm />
        </div>
      </div>

      <div className="foot__cols">
        <div className="foot__col foot__col--spacer" />
        <div className="foot__col">
          <Link href="/#collection">Collection</Link>
          <Link href="/#what-we-make">What we make</Link>
          <Link href="/#approach">Our approach</Link>
          <Link href="/academy">Academy</Link>
        </div>
        <div className="foot__col">
          <h4>Contact</h4>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {site.phoneDisplay}</a>
          <a href={`tel:+${site.whatsapp}`}>Call {site.phoneDisplay}</a>
        </div>
        <div className="foot__col">
          <h4>Address</h4>
          <span>{site.address.line1}</span>
          <span>{site.address.city}</span>
          <span>{site.address.state}</span>
        </div>
        <div className="foot__col">
          <h4>Follow</h4>
          <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={site.socials.academyInstagram} target="_blank" rel="noopener noreferrer">Academy Instagram</a>
        </div>
      </div>

      <div className="foot__mark">
        <Wordmark />
      </div>
      <div className="foot__base">
        <span>Copyright © {new Date().getFullYear()} {site.name}</span>
        <span>Nigeria made fits</span>
        <span>{site.handle}</span>
      </div>
    </footer>
  );
}
