import { Instrument_Serif, Inter_Tight, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Badge from "@/components/Badge";
import Preloader from "@/components/Preloader";
import { site } from "@/lib/site";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-serif" });
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
  themeColor: "#f4ebdf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${script.variable}`} suppressHydrationWarning>
      <head>
        {/* Decide before first paint whether the preloader runs, so returning visitors never see it flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var d=document.documentElement;if(sessionStorage.getItem("pf-loaded")||matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("pl-skip")}else{d.classList.add("pl-run")}}catch(e){document.documentElement.classList.add("pl-skip")}`,
          }}
        />
      </head>
      <body>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <Badge />
      </body>
    </html>
  );
}
