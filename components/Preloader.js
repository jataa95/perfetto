"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const COUNT_MS = 1500;
const LEAVE_MS = 1000;

const cards = [
  { src: "/media/colourblock-set.jpg", cls: "pl__card--a" },
  { src: "/media/burgundy-navy-sets.jpg", cls: "pl__card--b" },
  { src: "/media/workshop.jpg", cls: "pl__card--c" },
];

export default function Preloader() {
  const [phase, setPhase] = useState("count"); // count -> leave -> done
  const num = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    // Skipped visits are already hidden by CSS (html.pl-skip).
    if (!root.classList.contains("pl-run")) return;
    document.body.style.overflow = "hidden";
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / COUNT_MS);
      const eased = 1 - Math.pow(1 - t, 3);
      if (num.current) num.current.textContent = String(Math.round(eased * 100)).padStart(3, "0");
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const leave = setTimeout(() => {
      setPhase("leave");
      root.classList.add("pl-out");
    }, COUNT_MS + 150);
    const done = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("pf-loaded", "1");
      } catch {}
    }, COUNT_MS + 150 + LEAVE_MS);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(leave);
      clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`pl ${phase === "leave" ? "is-leaving" : ""}`} aria-hidden="true">
      <div className="pl__trail" />
      <div className="pl__sheet">
        <div className="pl__cards">
          {cards.map((c) => (
            <span key={c.src} className={`pl__card ${c.cls}`}>
              <Image src={c.src} alt="" fill sizes="160px" preload />
            </span>
          ))}
        </div>
        <div className="pl__brand">
          <span className="pl__logo">Perfetto</span>
          <span className="pl__tag">Nigeria made fits</span>
        </div>
        <div className="pl__foot">
          <span className="pl__label">
            Streetwear
            <br />
            Benin City
          </span>
          <span className="pl__num" ref={num}>
            000
          </span>
        </div>
        <div className="pl__bar">
          <span />
        </div>
      </div>
    </div>
  );
}
