import Link from "next/link";
import Logo from "./Logo";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr__top">
        <Link href="/" className="ftr__logo" aria-label="Perfetto Streetwears home">
          <Logo />
        </Link>
        <div className="ftr__col">
          <h4>Navigation</h4>
          <Link href="/#collection">Collection</Link>
          <Link href="/#what-we-do">What we do</Link>
          <Link href="/#studio">Studio</Link>
          <Link href="/academy">Academy</Link>
          <Link href="#contact">Order</Link>
        </div>
        <div className="ftr__col">
          <h4>Contact</h4>
          <span>{site.address.line1}</span>
          <span>{site.address.city}</span>
          <span>{site.address.state}</span>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="ftr__gap">
            WhatsApp {site.phoneDisplay}
          </a>
          <a href={`tel:+${site.whatsapp}`}>Call {site.phoneDisplay}</a>
        </div>
        <div className="ftr__col">
          <h4>Socials</h4>
          <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={site.socials.academyInstagram} target="_blank" rel="noopener noreferrer">Academy</a>
        </div>
      </div>
      <div className="ftr__base">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Designed &amp; made in Benin City</span>
        <span>{site.handle}</span>
      </div>
    </footer>
  );
}
