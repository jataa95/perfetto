import { Gloock, Hanken_Grotesk, Pinyon_Script, Zalando_Sans_Expanded } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body" });
const wide = Zalando_Sans_Expanded({ subsets: ["latin"], variable: "--font-wide" });
const serif = Gloock({ weight: "400", subsets: ["latin"], variable: "--font-serif" });
const script = Pinyon_Script({ weight: "400", subsets: ["latin"], variable: "--font-script" });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ["/media/grace-set.webp"],
    type: "website",
  },
};

export const viewport = {
  themeColor: "#400d1c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${wide.variable} ${serif.variable} ${script.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
