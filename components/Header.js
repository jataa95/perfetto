"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "/#collection", label: "Collection" },
  { href: "/#what-we-do", label: "What we do" },
  { href: "/academy", label: "Academy" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="hdr">
        <Link href="/" className="hdr__logo" onClick={close} aria-label="Perfetto Streetwears home">
          <Logo />
        </Link>
        <nav className="hdr__nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hdr__right">
          <a className="hdr__chip" href="#contact" onClick={close}>
            <i aria-hidden="true" />
            Order
          </a>
          <button className="hdr__chip hdr__menu" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div id="menu" className={`menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Menu">
          {[...links, { href: "#contact", label: "Order" }].map((l, i) => (
            <Link key={l.href} href={l.href} onClick={close} tabIndex={open ? 0 : -1} className={i % 2 ? "serif" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="menu__foot">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
            WhatsApp {site.phoneDisplay}
          </a>
          <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
            TikTok {site.handle}
          </a>
        </div>
      </div>
    </>
  );
}
