import Image from "next/image";
import LoopVideo from "@/components/LoopVideo";
import Reveal from "@/components/Reveal";
import { academy, site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Perfetto Academy",
  description:
    "Learn streetwear design and tailoring at Perfetto Academy in Benin City. Beginner, intermediate and advanced classes, 2-month and 4-month programmes, accommodation available.",
};

const enrolMsg = "Hi Perfetto Academy! I'd like to enrol for the next batch. Please send me the details.";

const learn = [
  "Using and caring for industrial and domestic sewing machines",
  "Taking accurate body measurements",
  "Pattern drafting for joggers, hoodies, tees and jackets",
  "Cutting, sewing and professional finishing",
  "Piping, colour-blocking and panel work",
  "Pricing, photographing and selling what you make",
];

export default function AcademyPage() {
  return (
    <>
      <section className="ac-hero">
        <div className="container ac-hero__inner">
          <div className="ac-hero__copy">
            <p className="eyebrow eyebrow--light">Perfetto Academy · Enrolment open</p>
            <h1 className="ac-hero__title">
              <span>Learn the</span>
              <span>craft.</span>
              <span className="ember-text">Build your</span>
              <span className="ember-text">legacy.</span>
            </h1>
            <p className="ac-hero__lede">
              A hands-on fashion school in Benin City, teaching streetwear the way we make it at Perfetto. Come in as a
              complete beginner or sharpen the skills you already have.
            </p>
            <div className="hero__actions">
              <a className="btn btn--ember" href={whatsappLink(enrolMsg)} target="_blank" rel="noopener noreferrer">
                Enrol now
              </a>
              <a className="btn btn--light-ghost" href={`tel:+${site.whatsapp}`}>
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="ac-hero__media">
            <LoopVideo
              src="/media/academy-graduates.mp4"
              poster="/media/academy-graduates.jpg"
              label="Perfetto Academy graduates with their certificates, wearing pieces they made"
            />
            <span className="badge-round">
              Application
              <br />
              fee
              <strong>{academy.fee}</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Choose your level</p>
            <h2 className="display">Three levels, two lengths</h2>
            <p className="section__lede">
              Each level runs as a 2-month or a 4-month programme. Not sure where to start? Message us and we&rsquo;ll
              help you choose.
            </p>
          </Reveal>
          <div className="levels">
            {academy.levels.map((l, i) => (
              <Reveal key={l.name} className="level" delay={i * 90}>
                <span className="level__n">0{i + 1}</span>
                <h3>{l.name}</h3>
                <p>{l.body}</p>
                <div className="chips">
                  {academy.durations.map((d) => (
                    <span key={d} className="chip chip--ghost">
                      {d}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section learn">
        <div className="container learn__inner">
          <Reveal className="learn__media">
            <Image
              src="/media/navy-piped-set.webp"
              alt="Navy piped half-zip tracksuit, an example of the finishing students learn"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </Reveal>
          <Reveal className="learn__copy" delay={100}>
            <p className="eyebrow">What you&rsquo;ll learn</p>
            <h2 className="display">From first stitch to finished set</h2>
            <ul className="ticks ticks--dark">
              {learn.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section facts">
        <div className="container">
          <div className="facts__grid">
            {academy.facts.map((f, i) => (
              <Reveal key={f} className="fact" delay={i * 70}>
                <span>✂</span>
                <p>{f}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section enrol">
        <div className="container enrol__inner">
          <Reveal>
            <p className="eyebrow eyebrow--light">Ready to start?</p>
            <h2 className="display display--light">Save your spot in the next batch</h2>
            <p>
              Send us a message on WhatsApp to enrol, or visit us at {site.address.line1}, {site.address.city},{" "}
              {site.address.state}.
            </p>
          </Reveal>
          <Reveal className="enrol__actions" delay={100}>
            <a className="btn btn--ember" href={whatsappLink(enrolMsg)} target="_blank" rel="noopener noreferrer">
              Enrol on WhatsApp
            </a>
            <a className="btn btn--light-ghost" href={site.socials.academyInstagram} target="_blank" rel="noopener noreferrer">
              @perfetto_academy
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
