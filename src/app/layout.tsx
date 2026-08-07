import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const SITE = "https://vinbryyt.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "VinBryYT — Vincentius Bryan Kwandou",
    template: "%s · VinBryYT",
  },
  description:
    "Pengembang full-stack dan Web3 dari Jayapura. Membangun rel pembayaran di atas Solana, perangkat operasional untuk industri, dan aplikasi mobile — 104 repositori terbuka untuk dibaca siapa saja.",
  keywords: [
    "VinBryYT",
    "Vincentius Bryan Kwandou",
    "Bryan Kwandou",
    "pengembang Solana",
    "Web3 Indonesia",
    "portofolio developer",
    "Jayapura",
  ],
  authors: [{ name: "Vincentius Bryan Kwandou", url: SITE }],
  creator: "Vincentius Bryan Kwandou",
  openGraph: {
    type: "profile",
    locale: "id_ID",
    url: SITE,
    siteName: "VinBryYT",
    title: "VinBryYT — Vincentius Bryan Kwandou",
    description:
      "Kode dan kamera. Rel pembayaran Solana, perangkat operasional, dan 104 repositori yang terbuka untuk diperiksa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VinBryYT — Vincentius Bryan Kwandou",
    description: "Kode dan kamera. 104 repositori terbuka, rel pembayaran di atas Solana.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
    { media: "(prefers-color-scheme: light)", color: "#faf8f4" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${display.variable}`} suppressHydrationWarning>
      <body className="grain antialiased">
        <a
          href="#isi"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm"
          style={{ background: "var(--accent)", color: "#0b0b0d" }}
        >
          Lewati ke isi
        </a>
        <SiteHeader />
        <main id="isi">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
