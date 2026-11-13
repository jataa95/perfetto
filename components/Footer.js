import Link from "next/link";
import Logo from "./Logo";
import Marquee from "./Marquee";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <Marquee tone="ember" items={["We design", "We create", "Nigeria made fits", "Building legacy one step at a time"]} />
      <div className="footer__inner container">
        <div className="footer__brand">
          <Logo className="logo--lg" />
          <p>Designed and made by hand in Benin City. Building legacy one step at a time.</p>
        </div>
        <div className="footer__col">
          <h4>Visit</h4>
          <p>
            {site.address.line1}
            <br />
            {site.address.city}
            <br />
            {site.address.state}
          </p>
        </div>
        <div className="footer__col">
          <h4>Talk to us</h4>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {site.phoneDisplay}</a>
          <a href={`tel:+${site.whatsapp}`}>Call {site.phoneDisplay}</a>
        </div>
        <div className="footer__col">
          <h4>Follow</h4>
          <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer">TikTok {site.handle}</a>
          <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram {site.handle}</a>
          <a href={site.socials.academyInstagram} target="_blank" rel="noopener noreferrer">Academy @perfetto_academy</a>
        </div>
      </div>
      <div className="footer__base container">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <Link href="/academy">Perfetto Academy</Link>
      </div>
    </footer>
  );
}
