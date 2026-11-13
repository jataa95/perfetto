import Image from "next/image";
import Reveal from "@/components/Reveal";
import { academy, site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Perfetto Academy",
  description:
    "Learn streetwear design and tailoring at Perfetto Academy in Benin City. Beginner, intermediate and advanced classes, 2-month and 4-month programmes, accommodation available.",
};

const enrolMsg = "Hi Perfetto Academy! I'd like to enrol for the next batch. Please send me the details.";

const learn = [
  "Sewing machine handling and care",
  "Taking accurate body measurements",
  "Pattern drafting",
  "Cutting and sewing",
  "Piping and colour-blocking",
  "Professional finishing",
  "Pricing and selling your work",
];

export default function AcademyPage() {
  return (
    <>
      <section className="ahero">
        <video
          className="ahero__bg"
          src="/media/academy-graduates.mp4"
          poster="/media/academy-graduates.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="ahero__frame">
          <video
            src="/media/academy-graduates.mp4"
            poster="/media/academy-graduates.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Perfetto Academy graduates showing their certificates and the pieces they made"
          />
        </div>
        <div className="hero__bottom">
          <p className="hero__aside">Enrolment open for the next batch. Application fee {academy.fee}.</p>
          <h1 className="hero__mark hero__mark--sm">Academy</h1>
          <div className="hero__labels">
            <span>Beginner · Intermediate · Advanced</span>
            <span>2 &amp; 4 month programmes</span>
            <span>Benin City, Nigeria</span>
          </div>
        </div>
      </section>

      <section className="intro">
        <Reveal className="intro__copy">
          <p>
            A hands-on fashion school teaching streetwear the way we make it at Perfetto. Come in as a complete beginner
            or sharpen the skills you already have.
          </p>
          <a className="pill" href={whatsappLink(enrolMsg)} target="_blank" rel="noopener noreferrer">
            Enrol on WhatsApp
          </a>
        </Reveal>
      </section>

      <hr className="rule" />

      <section className="levels">
        {academy.levels.map((l, i) => (
          <Reveal key={l.name} className="levels__row" delay={i * 80}>
            <span className="levels__n">{i + 1}</span>
            <h2>{l.name}</h2>
            <p>{l.body}</p>
            <span className="levels__dur">{academy.durations.join(" / ")}</span>
          </Reveal>
        ))}
      </section>

      <hr className="rule" />

      <section className="makes">
        <div className="make">
          <div className="make__media">
            <Image
              src="/media/navy-piped-set.webp"
              alt="Navy piped half-zip set, an example of the finishing students learn"
              fill
              sizes="(max-width: 860px) 100vw, 45vw"
              className="is-on"
            />
          </div>
          <div>
            <p className="eyebrow make__eyebrow">What you&rsquo;ll learn</p>
            <ol className="make__list make__list--static">
              {learn.map((t, i) => (
                <li key={t}>
                  <span>
                    <sup>{i + 1}</sup>
                    {t}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="facts">
        {academy.facts.map((f, i) => (
          <Reveal key={f} className="facts__cell" delay={i * 60}>
            <sup>{i + 1}</sup>
            <p>{f}</p>
          </Reveal>
        ))}
      </section>

      <section className="intro intro--wine">
        <Reveal className="intro__copy">
          <p className="eyebrow">Ready to start?</p>
          <p>
            Message us on WhatsApp to save your spot, or visit us at {site.address.line1}, {site.address.city}.
          </p>
          <div className="center center--row">
            <a className="pill pill--light" href={whatsappLink(enrolMsg)} target="_blank" rel="noopener noreferrer">
              Enrol now
            </a>
            <a className="pill pill--light" href={`tel:+${site.whatsapp}`}>
              Call {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
