"use client";

import Image from "next/image";
import { useRef } from "react";
import { pieces, whatsappLink } from "@/lib/site";

export default function Collection() {
  const track = useRef(null);
  const nudge = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector(".card");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="rail">
      <div className="rail__track" ref={track}>
        {pieces.map((p, i) => (
          <a
            key={p.slug}
            className="card"
            href={whatsappLink(`Hi Perfetto! I'm interested in the ${p.name} (${p.colour}). Can I get the price and available sizes?`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="card__media" style={{ "--a": p.swatch[0], "--b": p.swatch[1], "--pos": p.position || "center" }}>
              {p.image ? (
                <Image src={p.image} alt={`${p.name}: ${p.kind} in ${p.colour}`} fill sizes="(max-width: 700px) 78vw, 28vw" />
              ) : (
                <span className="card__ph">
                  <span>{p.name}</span>
                  <small>Photos on request</small>
                </span>
              )}
              <span className="card__hover">Ask for price &amp; sizes</span>
            </span>
            <span className="card__cap">
              <span>
                <sup>{i + 1}</sup>
                {p.name}
              </span>
              <span className="card__kind">{p.colour}</span>
            </span>
          </a>
        ))}
      </div>
      <div className="rail__ctrl">
        <button className="round" onClick={() => nudge(-1)} aria-label="Previous pieces">
          ←
        </button>
        <button className="round" onClick={() => nudge(1)} aria-label="Next pieces">
          →
        </button>
      </div>
    </div>
  );
}
