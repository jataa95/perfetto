"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "/#collection", label: "Collection" },
  { href: "/#what-we-make", label: "What we make" },
  { href: "/#approach", label: "Our approach" },
  { href: "/academy", label: "Academy" },
  { href: "#contact", label: "Contact" },
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
      <header className="bar">
        <Link href="/" className="bar__logo" onClick={close} aria-label="Perfetto Streetwears home">
          <Wordmark />
        </Link>
        <nav className="bar__nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="bar__cells">
          <a className="bar__cell bar__cell--wide" href={whatsappLink("Hi Perfetto! I'd like to place an order.")} target="_blank" rel="noopener noreferrer">
            <span className="bar__dot" aria-hidden="true" />
            <span className="bar__long">Order on&nbsp;</span>WhatsApp
          </a>
          <button className="bar__cell" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div id="menu" className={`menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="menu__links" aria-label="Menu">
          {links.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={close} tabIndex={open ? 0 : -1}>
              <sup>{i + 1}</sup>
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
          <span>
            {site.address.city}, {site.address.state}
          </span>
        </div>
      </div>
    </>
  );
}
