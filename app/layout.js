import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import Navbar from "@/components/Navbar";
import profile from "@/data/profile";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description =
  "Md Mahedi Hasan Rigan is a Computer Science PhD student at UT Arlington researching trustworthy and secure AI across 3D vision, vision-language models, and generative audio.";

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: `${profile.name} · PhD Student, UT Arlington`, template: `%s · ${profile.name}` },
  description,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  openGraph: {
    title: profile.name,
    description,
    url: profile.siteUrl,
    siteName: profile.name,
    images: ["/cropped_rigan.jpg"],
    type: "website",
  },
  twitter: { card: "summary", title: profile.name, description },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#101114" },
  ],
};

// Runs before the page paints so the saved (or system) theme never flashes the wrong colours.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
