# Perfetto Streetwears

Website for **Perfetto Streetwears by Gracie** (Nigeria made fits) and **Perfetto Academy**, built with Next.js 16 (App Router).

## Pages

- `/` home: hero, collection, lookbook, studio story, custom-order form (sends to WhatsApp), Academy teaser
- `/academy` Academy: levels, what you'll learn, key facts, enrolment

## Editing content

Everything the site says lives in `lib/site.js`:

- **Contact:** phone, WhatsApp number, address and social links
- **`pieces`:** the collection. Pieces with `image: null` show a colour panel until a photo is added.
  Drop the photo in `public/media/` and set `image: "/media/your-file.webp"`.
- **`academy`:** levels, durations, application fee and key facts

Photos and video loops are in `public/media/`.

## Run it

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the live domain when deploying (used for social-share previews).
