// Everything the site says about the business lives here, so it can be
// updated in one place without touching the page layouts.

export const site = {
  name: "Perfetto Streetwears",
  short: "Perfetto",
  tagline: "Nigeria Made Fits",
  description:
    "Perfetto Streetwears by Gracie: tracksuits, sets and streetwear designed and made by hand in Benin City, Nigeria. Custom orders and the Perfetto Academy fashion school.",
  phoneDisplay: "0907 615 8541",
  // International format, no "+" or spaces, used for wa.me links.
  whatsapp: "2349076158541",
  address: {
    line1: "Nitel, Isihor",
    city: "Benin City",
    state: "Edo State, Nigeria",
  },
  socials: {
    tiktok: "https://www.tiktok.com/@perfettobygracie",
    instagram: "https://www.instagram.com/perfettobygracie",
    academyInstagram: "https://www.instagram.com/perfetto_academy",
  },
  handle: "@perfettobygracie",
  stats: [
    { value: "31.7K", label: "TikTok followers" },
    { value: "450.8K", label: "Likes on our work" },
    { value: "100%", label: "Made in Nigeria" },
  ],
};

export function whatsappLink(message) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Pieces with `image: null` are shown as a colour panel until a photo is
// added to /public/media and its path filled in here.
export const pieces = [
  {
    slug: "grace-set",
    name: "The Grace Set",
    kind: "Zip hoodie + wide-leg joggers",
    colour: "Kelly green / gold",
    note: "Cropped zip hoodie with chain-stitch “Perfetto By Grace” script and butterfly crest.",
    image: "/media/grace-set.webp",
    swatch: ["#0f8f4e", "#e6a92b"],
    tall: true,
  },
  {
    slug: "navy-piped-set",
    name: "Piped Half-Zip Set",
    kind: "Cropped half-zip + joggers",
    colour: "Navy / white piping",
    note: "Contrast piping traced along the arms and curved down each leg.",
    image: "/media/navy-piped-set.webp",
    swatch: ["#1b2140", "#ffffff"],
  },
  {
    slug: "cloud-set",
    name: "Cloud Zip Set",
    kind: "Zip jacket + relaxed joggers",
    colour: "Heather white",
    note: "Soft brushed fleece, high collar, easy straight leg.",
    image: "/media/cloud-set.webp",
    swatch: ["#e4e6ec", "#b9bdc8"],
  },
  {
    slug: "monogram-set",
    name: "Monogram Set",
    kind: "Cropped sweatshirt + joggers",
    colour: "Sky blue all-over PERFETTO print",
    note: "The house name, printed all over. Our most requested set.",
    image: null,
    swatch: ["#3fb7d6", "#d8f3fa"],
    tall: true,
  },
  {
    slug: "logo-tee-set",
    name: "Custom Logo Tee & Shorts",
    kind: "Oversized tee + jersey shorts",
    colour: "Black / white print",
    note: "Your name or brand, printed on a heavyweight tee-and-shorts set.",
    image: "/media/monogram-tee-set.webp",
    position: "center 85%",
    swatch: ["#111111", "#f2f2f2"],
  },
  {
    slug: "wave-set",
    name: "Wave Tee & Shorts",
    kind: "Panelled tee + shorts",
    colour: "Black / baby blue",
    note: "Curved colour-block panels with triple stripes that sweep from tee to shorts.",
    image: null,
    swatch: ["#121212", "#a9dcef"],
  },
  {
    slug: "essential-set",
    name: "Essential Tank & Shorts",
    kind: "Sleeveless tee + fleece shorts",
    colour: "Black / oatmeal grey",
    note: "Heavy cotton muscle tank with drawstring fleece shorts.",
    image: "/media/essential-tank-set.webp",
    swatch: ["#0d0d0d", "#cfcac0"],
  },
  {
    slug: "zigzag-joggers",
    name: "Zigzag-Stitch Joggers",
    kind: "Wide-leg joggers",
    colour: "Grey or black",
    note: "Contrast zigzag topstitching down every seam and patch pocket.",
    image: null,
    swatch: ["#9ea3a8", "#141414"],
  },
];

export const academy = {
  levels: [
    {
      name: "Beginner",
      body: "Start from zero: machine handling, taking measurements, cutting and sewing your first pieces.",
    },
    {
      name: "Intermediate",
      body: "Pattern drafting and finishing for joggers, hoodies, tees and full streetwear sets.",
    },
    {
      name: "Advanced",
      body: "Design your own collection, perfect production finishing and learn to run it as a business.",
    },
  ],
  durations: ["2 months", "4 months"],
  fee: "₦5,000",
  facts: [
    "Application fee ₦5,000",
    "2-month and 4-month programmes",
    "Accommodation available",
    "Certificate on graduation",
  ],
};
