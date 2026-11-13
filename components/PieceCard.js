import Image from "next/image";
import { whatsappLink } from "@/lib/site";

export default function PieceCard({ piece, index }) {
  const msg = `Hi Perfetto! I'm interested in the ${piece.name} (${piece.colour}). Can I get the price and available sizes?`;
  return (
    <article className={`piece ${piece.tall ? "piece--tall" : ""}`}>
      <div className="piece__media" style={{ "--a": piece.swatch[0], "--b": piece.swatch[1], "--pos": piece.position || "center" }}>
        {piece.image ? (
          <Image
            src={piece.image}
            alt={`${piece.name}: ${piece.kind} in ${piece.colour}`}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        ) : (
          <div className="piece__placeholder">
            <span className="piece__ph-name">{piece.name}</span>
            <span className="piece__ph-tag">New drop: ask for photos</span>
          </div>
        )}
        <span className="piece__num">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="piece__body">
        <div className="piece__head">
          <h3>{piece.name}</h3>
          <span className="piece__swatches" aria-hidden="true">
            {piece.swatch.map((c) => (
              <i key={c} style={{ background: c }} />
            ))}
          </span>
        </div>
        <p className="piece__kind">{piece.kind} · {piece.colour}</p>
        <p className="piece__note">{piece.note}</p>
        <a className="link-arrow" href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer">
          Ask for price &amp; sizes
        </a>
      </div>
    </article>
  );
}
