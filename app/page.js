import Image from "next/image";
import Link from "next/link";
import Approach from "@/components/Approach";
import Collection from "@/components/Collection";
import Float from "@/components/Float";
import MakeList from "@/components/MakeList";
import Reveal from "@/components/Reveal";
import Wordmark from "@/components/Wordmark";
import { academy, whatsappLink } from "@/lib/site";

const makes = [
  { label: "Tracksuits", image: "/media/grace-set.webp", alt: "Green embroidered Perfetto tracksuit" },
  { label: "Cropped sets", image: "/media/navy-piped-set.webp", alt: "Navy cropped half-zip set with white piping" },
  { label: "Zip jackets", image: "/media/cloud-set.webp", alt: "Heather white zip jacket and joggers" },
  { label: "Colour-block", image: "/media/colourblock-set.jpg", alt: "Black and white colour-block track set" },
  { label: "Piped track sets", image: "/media/burgundy-navy-sets.jpg", alt: "Burgundy cropped track set with infinity logo" },
  { label: "Tee & short sets", image: "/media/monogram-tee-set.webp", alt: "Black logo tee and shorts on a mannequin", position: "center 70%" },
  { label: "Essentials", image: "/media/essential-tank-set.webp", alt: "Black tank and grey fleece shorts" },
  { label: "Custom prints", image: "/media/workshop.jpg", alt: "Cutting fabric panels in the studio" },
];

const approach = [
  {
    title: "We design",
    body: "Every set starts as a sketch: the cut, the crop, where the piping runs.",
    video: "/media/colourblock-set.mp4",
    poster: "/media/colourblock-set.jpg",
    alt: "Model wearing the colour-block track set",
  },
  {
    title: "We cut",
    body: "Patterns drafted and fabric cut by hand on our own table, piece by piece.",
    video: "/media/workshop.mp4",
    poster: "/media/workshop.jpg",
    alt: "Gracie cutting fabric panels on the studio table",
  },
  {
    title: "We sew",
    body: "Stitched, piped, embroidered and finished in our Benin City studio.",
    video: "/media/burgundy-navy-sets.mp4",
    poster: "/media/burgundy-navy-sets.jpg",
    alt: "Finished burgundy and navy cropped tracksuits",
  },
  {
    title: "We teach",
    body: "Through Perfetto Academy we pass the craft on, one batch at a time.",
    video: "/media/academy-graduates.mp4",
    poster: "/media/academy-graduates.jpg",
    alt: "Perfetto Academy graduates with their certificates",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__panels">
          <div className="hero__panel">
            <Image src="/media/grace-set.webp" alt="Green Perfetto By Grace tracksuit" fill preload sizes="(max-width: 760px) 100vw, 34vw" />
          </div>
          <div className="hero__panel">
            <Image src="/media/navy-piped-set.webp" alt="Navy piped half-zip set" fill preload sizes="34vw" />
          </div>
          <div className="hero__panel">
            <Image src="/media/cloud-set.webp" alt="Heather white zip set" fill preload sizes="34vw" />
          </div>
        </div>
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__bottom">
          <p className="hero__aside">Perfetto, streetwear designed and made by hand in Nigeria.</p>
          <h1 className="hero__mark">
            <Wordmark />
            <span className="sr-only"> Streetwears</span>
          </h1>
          <div className="hero__labels">
            <span>Streetwear</span>
            <span>Custom orders &amp; Academy</span>
            <span>Benin City, Nigeria</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <Float speed={-0.18} className="intro__float intro__float--a">
          <Image src="/media/essential-tank-set.webp" alt="" fill sizes="160px" />
        </Float>
        <Float speed={0.12} className="intro__float intro__float--b">
          <Image src="/media/navy-piped-set.webp" alt="" fill sizes="140px" />
        </Float>
        <Reveal className="intro__copy">
          <p>Tracksuits and sets, designed and cut by hand in our own studio. Made to order, in your size and your colour.</p>
          <a className="pill" href={whatsappLink("Hi Perfetto! I'd like to place an order.")} target="_blank" rel="noopener noreferrer">
            Order on WhatsApp
          </a>
        </Reveal>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="collection">
        <Collection />
        <div className="center">
          <Link className="pill" href="#contact">
            Design your own
          </Link>
        </div>
      </section>

      <hr className="rule" />

      {/* WHAT WE MAKE */}
      <section id="what-we-make" className="makes">
        <MakeList items={makes} />
        <div className="makes__cta">
          <a className="pill" href={whatsappLink("Hi Perfetto! What can you make for me?")} target="_blank" rel="noopener noreferrer">
            Ask what we can make
          </a>
        </div>
      </section>

      <hr className="rule" />

      {/* STATEMENT */}
      <section className="statement">
        <Float speed={0.2} className="statement__float statement__float--a">
          <Image src="/media/burgundy-navy-sets.jpg" alt="" fill sizes="120px" />
        </Float>
        <Float speed={-0.14} className="statement__float statement__float--b">
          <Image src="/media/grace-set.webp" alt="" fill sizes="110px" />
        </Float>
        <Reveal className="statement__copy">
          <p className="eyebrow">Nigeria made fits</p>
          <p className="statement__text">
            Good fabric, careful cutting and finishing you can feel, guided by faith and built one step at a time.
          </p>
          <Link className="pill" href="/academy">
            The Academy
          </Link>
        </Reveal>
      </section>

      {/* STUDIO WIDE */}
      <section className="wide">
        <Reveal className="wide__frame">
          <Image src="/media/cloud-set.webp" alt="Model in the Cloud Zip Set under pink bougainvillea" fill sizes="90vw" />
        </Reveal>
        <Reveal className="wide__copy">
          <blockquote>
            &ldquo;My life will be better. I will make it, so help me God.&rdquo;
          </blockquote>
          <p className="eyebrow">Gracie, founder</p>
        </Reveal>
      </section>

      {/* APPROACH */}
      <section id="approach">
        <Approach slides={approach} />
      </section>

      {/* ACADEMY */}
      <section className="split">
        <Reveal className="split__media">
          <video
            src="/media/academy-graduates.mp4"
            poster="/media/academy-graduates.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Perfetto Academy graduates with their certificates"
          />
        </Reveal>
        <Reveal className="split__copy" delay={100}>
          <p className="eyebrow">Perfetto Academy</p>
          <p className="split__lead">Learn to make streetwear the way we do, from your first stitch to your own collection.</p>
          <ol className="numlist">
            {academy.levels.map((l, i) => (
              <li key={l.name}>
                <sup>{i + 1}</sup>
                {l.name}
              </li>
            ))}
          </ol>
          <p className="split__meta">
            {academy.durations.join(" or ")} · Application fee {academy.fee} · Accommodation available
          </p>
          <Link className="pill" href="/academy">
            Enrol now
          </Link>
        </Reveal>
      </section>
    </>
  );
}
