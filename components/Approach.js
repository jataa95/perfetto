"use client";

import { useState } from "react";

export default function Approach({ slides, eyebrow = "Our approach" }) {
  const [i, setI] = useState(0);
  const s = slides[i];
  const go = (d) => setI((v) => (v + d + slides.length) % slides.length);

  return (
    <div className="approach">
      <div className="approach__bg" style={{ backgroundImage: `url(${s.poster})` }} key={`bg-${i}`} aria-hidden="true" />
      <p className="approach__eyebrow">{eyebrow}</p>
      <div className="approach__frame" key={`f-${i}`}>
        <video src={s.video} poster={s.poster} autoPlay muted loop playsInline preload="metadata" aria-label={s.alt} />
      </div>
      <div className="approach__text" key={`t-${i}`} aria-live="polite">
        <span className="approach__n">{i + 1}</span>
        <h3>{s.title}</h3>
        <p>{s.body}</p>
      </div>
      <div className="approach__ctrl">
        <button className="round round--light" onClick={() => go(-1)} aria-label="Previous">
          ←
        </button>
        <button className="round round--light" onClick={() => go(1)} aria-label="Next">
          →
        </button>
        <span className="approach__count">
          {i + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
