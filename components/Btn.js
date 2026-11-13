import Link from "next/link";

// Two-part button: a square arrow cell next to a label cell.
export default function Btn({ href, children, tone = "pink", external = false, arrow = "→", className = "" }) {
  const inner = (
    <>
      <span className="btn__ico" aria-hidden="true">
        {arrow}
      </span>
      <span className="btn__lbl">{children}</span>
    </>
  );
  const cls = `btn btn--${tone} ${className}`;
  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a className={cls} href={href} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}
