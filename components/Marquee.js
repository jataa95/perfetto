export default function Marquee({ items, tone = "ink" }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee marquee--${tone}`} aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span key={i}>
            {t}
            <i>✂</i>
          </span>
        ))}
      </div>
    </div>
  );
}
