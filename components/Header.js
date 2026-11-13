"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { whatsappLink } from "@/lib/site";

const links = [
  { href: "/#collection", label: "Collection" },
  { href: "/#studio", label: "Studio" },
  { href: "/#custom", label: "Custom orders" },
  { href: "/academy", label: "Academy" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="header__inner">
        <Link href="/" className="header__logo" onClick={() => setOpen(false)} aria-label="Perfetto Streetwears home">
          <Logo />
        </Link>
        <nav className="header__nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a className="btn btn--ember header__cta" href={whatsappLink("Hi Perfetto! I'd like to place an order.")} target="_blank" rel="noopener noreferrer">
            Order on WhatsApp
          </a>
        </nav>
        <button
          className="header__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
