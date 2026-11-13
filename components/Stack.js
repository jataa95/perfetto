import Image from "next/image";

// Cards that pin and pile on top of each other as the page scrolls.
export default function Stack({ items }) {
  return (
    <div className="stack">
      {items.map((it, i) => (
        <a
          key={it.title}
          href={it.href}
          target="_blank"
          rel="noopener noreferrer"
          className="stack__card"
          style={{ "--c": it.colour, "--i": i, "--r": `${it.tilt || 0}deg` }}
        >
          <span className="stack__media">
            {it.video ? (
              <video src={it.video} poster={it.poster} autoPlay muted loop playsInline preload="metadata" aria-label={it.alt} />
            ) : (
              <Image src={it.image} alt={it.alt} fill sizes="(max-width: 800px) 92vw, 60vw" style={{ objectPosition: it.position || "center 30%" }} />
            )}
          </span>
          <span className="stack__title">{it.title}</span>
          <span className="stack__sub">{it.sub}</span>
        </a>
      ))}
    </div>
  );
}
