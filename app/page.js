import Image from "next/image";
import Link from "next/link";
import LoopVideo from "@/components/LoopVideo";
import Marquee from "@/components/Marquee";
import PieceCard from "@/components/PieceCard";
import OrderForm from "@/components/OrderForm";
import Reveal from "@/components/Reveal";
import { academy, pieces, site, whatsappLink } from "@/lib/site";

const steps = [
  { n: "01", title: "We design", body: "Every set starts as a sketch: the cut, the crop, where the piping runs." },
  { n: "02", title: "We cut", body: "Patterns drafted and fabric cut by hand on our own table, piece by piece." },
  { n: "03", title: "We sew", body: "Stitched, piped, embroidered and finished in our Benin City studio." },
  { n: "04", title: "We deliver", body: "Packed and sent to you anywhere in Nigeria, and beyond." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__grain" aria-hidden="true" />
        <div className="hero__inner container">
          <div className="hero__copy">
            <p className="eyebrow">Perfetto Streetwears · Benin City, Nigeria</p>
            <h1 className="hero__title">
              <span>Nigeria</span>
              <span>made</span>
              <span className="hero__title-accent">fits.</span>
            </h1>
            <p className="hero__lede">
              Tracksuits, sets and streetwear, designed and cut by hand in our own studio. Pick from the collection or
              bring your own idea and we&rsquo;ll make it.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--ember" href="#collection">
                Shop the collection
              </Link>
              <Link className="btn btn--ghost" href="#custom">
                Design your own
              </Link>
            </div>
            <ul className="hero__stats">
              {site.stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__frame hero__frame--video">
              <LoopVideo
                src="/media/colourblock-set.mp4"
                poster="/media/colourblock-set.jpg"
                label="Model turning in the black and white colour-block Perfetto track set"
              />
              <span className="hero__tag">Colour-block track set</span>
            </div>
            <div className="hero__frame hero__frame--photo">
              <Image
                src="/media/grace-set.webp"
                alt="Model in the green Perfetto By Grace embroidered zip hoodie and joggers"
                fill
                preload
                sizes="(max-width: 900px) 45vw, 22vw"
              />
            </div>
            <div className="hero__stamp" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                </defs>
                <text>
                  <textPath href="#circle">WE DESIGN · WE CREATE · HANDMADE ·</textPath>
                </text>
              </svg>
              <span>✂</span>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["We design", "We create", "Nigeria made fits", "Custom orders open", "Academy enrolment open"]} />

      {/* COLLECTION */}
      <section id="collection" className="section collection">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">The collection</p>
            <h2 className="display">Sets that move with you</h2>
            <p className="section__lede">
              Every piece is made to order in your size and your colour. Tap any set to ask for the price on WhatsApp.
            </p>
          </Reveal>
          <div className="collection__grid">
            {pieces.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <PieceCard piece={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKBOOK STRIP */}
      <section className="lookbook" aria-label="On the rail">
        <div className="lookbook__video">
          <LoopVideo
            src="/media/burgundy-navy-sets.mp4"
            poster="/media/burgundy-navy-sets.jpg"
            label="Model wearing the burgundy and the navy cropped tracksuits with infinity logo"
          />
        </div>
        <div className="lookbook__copy">
          <p className="eyebrow eyebrow--light">On the rail now</p>
          <h2 className="display display--light">
            Cropped. Piped.
            <br />
            <em>Perfetto.</em>
          </h2>
          <p>
            Our cropped zip tracksuit in burgundy and navy, with the infinity mark and contrast piping. Same cut, any
            colour you want.
          </p>
          <a
            className="btn btn--light"
            href={whatsappLink("Hi Perfetto! I saw the cropped piped tracksuit. What colours can I get it in?")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask about this set
          </a>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="section studio">
        <div className="container studio__inner">
          <Reveal className="studio__media">
            <LoopVideo
              src="/media/workshop.mp4"
              poster="/media/workshop.jpg"
              label="Gracie cutting fabric panels on the studio table"
            />
          </Reveal>
          <div className="studio__copy">
            <Reveal>
              <p className="eyebrow">The studio</p>
              <h2 className="display">From our table to your wardrobe</h2>
              <blockquote className="studio__quote">
                &ldquo;My life will be better. My source of income will be better. I will make it, so help me
                God.&rdquo;
                <cite>Gracie, founder</cite>
              </blockquote>
              <p>
                Perfetto started on one cutting table with a pair of scissors and a big dream. Every set is still
                designed, cut and sewn by our own hands, guided by faith and built one step at a time.
              </p>
            </Reveal>
            <ol className="steps">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 80}>
                  <span className="steps__n">{s.n}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CUSTOM ORDERS */}
      <section id="custom" className="section custom">
        <div className="container custom__inner">
          <Reveal className="custom__copy">
            <p className="eyebrow eyebrow--light">Custom orders</p>
            <h2 className="display display--light">
              Your idea.
              <br />
              Our hands.
            </h2>
            <p>
              Want your name across the leg, your brand on a tee, or a set in a colour nobody else has? Tell us what you
              have in mind and we&rsquo;ll make it to your measurements.
            </p>
            <ul className="ticks">
              <li>Made to your size, or to your exact measurements</li>
              <li>Any colour, piping, print or embroidery</li>
              <li>Matching sets for couples, crews and events</li>
              <li>Delivery across Nigeria</li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <OrderForm />
          </Reveal>
        </div>
      </section>

      {/* ACADEMY TEASER */}
      <section className="section academy-teaser">
        <div className="container academy-teaser__inner">
          <Reveal className="academy-teaser__copy">
            <p className="eyebrow">Perfetto Academy</p>
            <h2 className="display">
              Learn to make it <span className="ember-text">yourself.</span>
            </h2>
            <p>
              Our fashion school teaches streetwear the way we make it, from your first stitch to your own collection.
              Our graduates leave with real pieces they made and a certificate to show for it.
            </p>
            <div className="chips">
              {academy.levels.map((l) => (
                <span key={l.name} className="chip">
                  {l.name}
                </span>
              ))}
              {academy.durations.map((d) => (
                <span key={d} className="chip chip--ghost">
                  {d}
                </span>
              ))}
            </div>
            <div className="hero__actions">
              <Link className="btn btn--ember" href="/academy">
                Explore the Academy
              </Link>
              <a
                className="btn btn--ghost"
                href={whatsappLink("Hi Perfetto Academy! I'd like to enrol. Please send me the details.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enrol on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal className="academy-teaser__media" delay={120}>
            <LoopVideo
              src="/media/academy-graduates.mp4"
              poster="/media/academy-graduates.jpg"
              label="Perfetto Academy graduates showing their certificates and the pieces they made"
            />
            <span className="badge-round">
              Application
              <br />
              fee
              <strong>{academy.fee}</strong>
            </span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
