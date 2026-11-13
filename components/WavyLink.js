import Link from "next/link";

export default function WavyLink({ href, children, arrow = "↓" }) {
  return (
    <Link className="wavy" href={href}>
      <span className="wavy__txt">{children}</span>
      <span className="wavy__ico" aria-hidden="true">
        {arrow}
      </span>
    </Link>
  );
}
