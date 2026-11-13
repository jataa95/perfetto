"use client";

import Image from "next/image";
import { useState } from "react";

export default function MakeList({ items }) {
  const [active, setActive] = useState(0);
  return (
    <div className="make">
      <div className="make__media">
        {items.map((it, i) => (
          <Image
            key={it.label}
            src={it.image}
            alt={i === active ? it.alt : ""}
            fill
            sizes="(max-width: 860px) 100vw, 45vw"
            className={i === active ? "is-on" : ""}
            style={{ objectPosition: it.position || "center 30%" }}
          />
        ))}
      </div>
      <ol className="make__list">
        {items.map((it, i) => (
          <li key={it.label}>
            <button
              className={i === active ? "is-on" : ""}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <sup>{i + 1}</sup>
              {it.label}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
