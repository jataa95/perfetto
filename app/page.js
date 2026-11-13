import Image from "next/image";
import Btn from "@/components/Btn";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import Stack from "@/components/Stack";
import WavyLink from "@/components/WavyLink";
import { academy, pieces, site, whatsappLink } from "@/lib/site";

const frames = ["#f26a1b", "#400d1c", "#f7941d", "#a36d6c"];

const ask = (name) => whatsappLink(`Hi Perfetto! I'm interested in the ${name}. Can I get the price and available sizes?`);

const drops = [
  { title: "The Grace Set", sub: "Kelly green & gold embroidery", image: "/media/grace-set.webp", alt: "Green Grace Set", colour: "#f26a1b", tilt: -2 },
  { title: "Colour-Block", sub: "Black & white panelled track set", video: "/media/colourblock-set.mp4", poster: "/media/colourblock-set.jpg", alt: "Colour-block track set", colour: "#f7941d", tilt: 1.5 },
  { title: "Piped Half-Zip", sub: "Navy with white piping", image: "/media/navy-piped-set.webp", alt: "Navy piped half-zip set", colour: "#f4ebdf", tilt: -1 },
  { title: "Cropped Track", sub: "Burgundy & navy, infinity mark", video: "/media/burgundy-navy-sets.mp4", poster: "/media/burgundy-navy-sets.jpg", alt: "Burgundy cropped track set", colour: "#f0412b", tilt: 2 },
  { title: "Cloud Zip Set", sub: "Heather white fleece", image: "/media/cloud-set.webp", alt: "Heather white Cloud Zip Set", colour: "#f26a1b", tilt: -1.5 },
].map((d) => ({ ...d, href: ask(d.title) }));

const services = [
  {
    title: "Streetwear",
    sub: "Tracksuits and sets, ready to make in your size",
    image: "/media/navy-piped-set.webp",
    colour: "#400d1c",
    tilt: -4,
    href: "#collection",
  },
  {
    title: "Custom",
    sub: "Your name, your logo, your colours",
    video: "/media/workshop.mp4",
    poster: "/media/workshop.jpg",
    colour: "#f26a1b",
    tilt: 1,
    href: "#contact",
  },
  {
    title: "Academy",
    sub: "Learn to make it yourself",
    video: "/media/academy-graduates.mp4",
    poster: "/media/academy-graduates.jpg",
    colour: "#f7941d",
    tilt: 4,
    href: "/academy",
  },
];

const ticker = ["We design", "We create", "Nigeria made fits", "Custom orders", "Perfetto Academy", "Benin City"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__vid hero__vid--main">
          <video
            src="/media/colourblock-set.mp4"
            poster="/media/colourblock-set.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Model turning in the black and white colour-block Perfetto track set"
          />
        </div>
        <div className="hero__vid hero__vid--side">
          <video
            src="/media/burgundy-navy-sets.mp4"
            poster="/media/burgundy-navy-sets.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Model in the burgundy cropped Perfetto tracksuit"
          />
        </div>
        <span className="sticker sticker--hero">Handmade in Benin City</span>

        <div className="hero__copy">
          <p className="kicker">
            Tracksuits, sets
            <br />& streetwear
          </p>
          <h1 className="mix mix--xl">
            <span className="mix__heavy">Nigeria made</span>
            <span>
              <span className="mix__heavy">fits</span> <span className="mix__serif">by hand</span>
            </span>
          </h1>
          <WavyLink href="#who">Discover more</WavyLink>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className={i % 2 ? "serif" : ""}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="who" id="who">
        <Reveal className="who__collage">
          <figure className="polaroid polaroid--a">
            <video src="/media/workshop.mp4" poster="/media/workshop.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Gracie cutting fabric in the studio" />
          </figure>
          <figure className="polaroid polaroid--b">
            <span className="polaroid__in">
              <Image src="/media/essential-tank-set.webp" alt="Essential tank and shorts laid out on the studio table" fill sizes="240px" />
            </span>
          </figure>
          <span className="sticker sticker--a">We design ✏️</span>
          <span className="sticker sticker--b">We create 🧵</span>
        </Reveal>
        <Reveal className="who__copy" delay={120}>
          <p className="kicker">Who we are</p>
          <h2 className="mix">
            <span className="mix__heavy">The hands</span>
            <span>
              <span className="mix__heavy">behind</span> <span className="mix__serif">Perfetto</span>
            </span>
          </h2>
          <p>
            No factory, no shortcuts. Just a studio in Benin City where every set is designed, cut and sewn by hand.
            Christian-led, built one step at a time.
          </p>
          <Btn href="#studio" tone="wine">
            More about us
          </Btn>
        </Reveal>
      </section>

      {/* LATEST DROPS */}
      <section className="dark drops">
        <div className="drops__head">
          <p className="kicker kicker--light">
            Not to be missed, made to be worn.
            <br />A few of our latest sets.
          </p>
          <h2 className="mix mix--light">
            <span>
              <span className="mix__heavy">Latest</span> <span className="mix__serif">drops</span>
            </span>
          </h2>
        </div>
        <Stack items={drops} />
        <div className="center">
          <Btn href="#collection" tone="orange">
            See the collection
          </Btn>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="services" id="what-we-do">
        <p className="kicker">Our services</p>
        <h2 className="mix">
          <span>
            <span className="mix__heavy">What we</span> <span className="mix__serif">do</span>
          </span>
        </h2>
        <div className="services__row">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <a className="frame-card" href={s.href} style={{ "--c": s.colour, "--r": `${s.tilt}deg` }}>
                <span className="frame-card__media">
                  {s.video ? (
                    <video src={s.video} poster={s.poster} autoPlay muted loop playsInline preload="metadata" aria-label={s.sub} />
                  ) : (
                    <Image src={s.image} alt={s.sub} fill sizes="(max-width: 800px) 80vw, 26vw" />
                  )}
                </span>
                <span className="frame-card__title">{s.title}</span>
                <span className="frame-card__sub">{s.sub}</span>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="center">
          <WavyLink href="#contact" arrow="→">
            Start an order
          </WavyLink>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="collection" id="collection">
        <div className="collection__head">
          <p className="kicker">Made to order</p>
          <h2 className="mix">
            <span>
              <span className="mix__heavy">The</span> <span className="mix__serif">collection</span>
            </span>
          </h2>
          <p className="collection__lede">Every piece is made in your size and any colour. Tap a set to ask for the price.</p>
        </div>
        <div className="grid">
          {pieces.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 70}>
              <a className="tile" href={ask(p.name)} target="_blank" rel="noopener noreferrer" style={{ "--c": frames[i % frames.length], "--a": p.swatch[0], "--b": p.swatch[1] }}>
                <span className="tile__media">
                  {p.image ? (
                    <Image src={p.image} alt={`${p.name}: ${p.kind} in ${p.colour}`} fill sizes="(max-width: 700px) 50vw, 25vw" style={{ objectPosition: p.position || "center 30%" }} />
                  ) : (
                    <span className="tile__ph">
                      Photo
                      <br />
                      coming soon
                    </span>
                  )}
                </span>
                <span className="tile__name">{p.name}</span>
                <span className="tile__kind">{p.colour}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STUDIO */}
      <section className="studio" id="studio">
        <Reveal className="studio__quote">
          <p className="kicker">From the founder</p>
          <blockquote className="mix">
            <span className="mix__serif">&ldquo;I will make it,</span>
            <span className="mix__heavy">so help me God.&rdquo;</span>
          </blockquote>
          <p className="studio__by">Gracie, founder of Perfetto</p>
        </Reveal>
        <div className="studio__stats">
          {site.stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 90}>
              <strong>{s.value}</strong>
              <span className="serif">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ACADEMY */}
      <section className="academy-band">
        <Reveal className="academy-band__copy">
          <p className="kicker">Perfetto Academy</p>
          <h2 className="mix">
            <span className="mix__heavy">Learn the</span>
            <span className="mix__serif">craft</span>
          </h2>
          <p>From your first stitch to your own collection. Our graduates leave with real pieces and a certificate.</p>
          <div className="pills">
            {academy.levels.map((l, i) => (
              <span key={l.name} className="pill" style={{ "--c": frames[i + 1] }}>
                {l.name}
              </span>
            ))}
            {academy.durations.map((d) => (
              <span key={d} className="pill pill--ghost">
                {d}
              </span>
            ))}
          </div>
          <Btn href="/academy" tone="orange">
            Enrol now
          </Btn>
        </Reveal>
        <Reveal className="academy-band__media" delay={120}>
          <span className="frame-card frame-card--static" style={{ "--c": "#f26a1b", "--r": "3deg" }}>
            <span className="frame-card__media">
              <video src="/media/academy-graduates.mp4" poster="/media/academy-graduates.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Perfetto Academy graduates with their certificates" />
            </span>
          </span>
          <span className="sticker sticker--fee">
            Application fee <b>{academy.fee}</b>
          </span>
        </Reveal>
      </section>

      <ContactCTA />
    </>
  );
}
