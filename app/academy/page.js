import Btn from "@/components/Btn";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import WavyLink from "@/components/WavyLink";
import { academy, site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Perfetto Academy",
  description:
    "Learn streetwear design and tailoring at Perfetto Academy in Benin City. Beginner, intermediate and advanced classes, 2-month and 4-month programmes, accommodation available.",
};

const enrolMsg = "Hi Perfetto Academy! I'd like to enrol for the next batch. Please send me the details.";

const levelColours = ["#400d1c", "#a36d6c", "#f26a1b"];
const levelTilts = [-3, 1.5, 3.5];

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
      <section className="hero">
        <div className="hero__vid hero__vid--main">
          <video
            src="/media/academy-graduates.mp4"
            poster="/media/academy-graduates.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Perfetto Academy graduates showing their certificates and the pieces they made"
          />
        </div>
        <div className="hero__vid hero__vid--side">
          <video
            src="/media/workshop.mp4"
            poster="/media/workshop.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Cutting fabric panels in the Perfetto studio"
          />
        </div>
        <span className="sticker sticker--hero">Enrolment open</span>

        <div className="hero__copy">
          <p className="kicker">
            Perfetto Academy
            <br />
            Benin City, Nigeria
          </p>
          <h1 className="mix mix--xl">
            <span className="mix__heavy">Learn the</span>
            <span>
              <span className="mix__heavy">craft,</span> <span className="mix__serif">build</span>
            </span>
            <span className="mix__serif">your legacy</span>
          </h1>
          <WavyLink href="#levels">See the levels</WavyLink>
        </div>
      </section>

      <section className="services" id="levels">
        <p className="kicker">Choose your level</p>
        <h2 className="mix">
          <span>
            <span className="mix__heavy">Three</span> <span className="mix__serif">levels</span>
          </span>
        </h2>
        <div className="services__row">
          {academy.levels.map((l, i) => (
            <Reveal key={l.name} delay={i * 100}>
              <div className="level-card" style={{ "--c": levelColours[i], "--r": `${levelTilts[i]}deg` }}>
                <span className="level-card__n">0{i + 1}</span>
                <span className="frame-card__title">{l.name}</span>
                <p>{l.body}</p>
                <span className="level-card__dur">{academy.durations.join(" or ")}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dark learn">
        <div className="learn__inner">
          <Reveal>
            <p className="kicker kicker--light">What you&rsquo;ll learn</p>
            <h2 className="mix mix--light">
              <span className="mix__heavy">First stitch</span>
              <span className="mix__serif">to finished set</span>
            </h2>
          </Reveal>
          <ol className="learn__list">
            {learn.map((t, i) => (
              <Reveal as="li" key={t} delay={i * 50}>
                <span className="learn__n">{String(i + 1).padStart(2, "0")}</span>
                {t}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="facts">
        {academy.facts.map((f, i) => (
          <Reveal key={f} className="fact" delay={i * 70}>
            <span className="fact__dot" style={{ "--c": ["#f0412b", "#f7941d", "#f6d2bd", "#400d1c"][i % 4] }} />
            <p className="mix">
              <span className={i % 2 ? "mix__serif" : "mix__heavy"}>{f}</span>
            </p>
          </Reveal>
        ))}
      </section>

      <section className="enrol">
        <p className="kicker">Ready to start?</p>
        <h2 className="mix">
          <span>
            <span className="mix__heavy">Save your</span> <span className="mix__serif">spot</span>
          </span>
        </h2>
        <p>
          Message us on WhatsApp or visit us at {site.address.line1}, {site.address.city}.
        </p>
        <div className="center center--row">
          <Btn href={whatsappLink(enrolMsg)} external tone="wine">
            Enrol on WhatsApp
          </Btn>
          <Btn href={`tel:+${site.whatsapp}`} external tone="wine" arrow="☎">
            {site.phoneDisplay}
          </Btn>
        </div>
      </section>

      <ContactCTA title={["Want a set", "made for you?"]} />
    </>
  );
}
