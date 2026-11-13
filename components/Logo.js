export default function Logo({ className = "" }) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo__script">Perfetto</span>
      <span className="logo__sub">Streetwears</span>
    </span>
  );
}
