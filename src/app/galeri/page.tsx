import type { Metadata } from "next";
import { SplitHeading, Reveal } from "@/components/motion";
import { GalleryGrid, type Foto } from "@/components/GalleryGrid";
import foto from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Karya NFT Vincentius Bryan Kwandou di blockchain Tezos — dirilis lewat objkt sejak 2023, kepemilikannya bisa diperiksa siapa saja di rantai.",
};

export default function GaleriPage() {
  const daftar = foto as Foto[];

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-[160px] sm:px-8">
        <p className="mono-label" style={{ color: "var(--accent)" }}>
          Galeri
        </p>
        <SplitHeading
          text="Karya yang tercatat di rantai"
          className="mt-6 max-w-3xl text-[clamp(2.2rem,5.6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        />
        <Reveal delay={0.4}>
          <p className="mt-7 max-w-2xl text-[16px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
            {daftar.length} karya yang diterbitkan sebagai NFT di blockchain Tezos lewat objkt.
            Gambarnya diambil dari IPFS lalu disimpan di sini supaya halaman tidak bergantung
            pada gerbang publik yang sering lambat — tetapi setiap karya tetap membawa tautan
            ke catatan aslinya, dan kepemilikannya bisa diperiksa siapa pun di rantai.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
            Sebagian dibuat dengan bantuan alat gambar otomatis. Itu disebutkan di sini karena
            memang begitu adanya — bukan semuanya hasil kamera, dan tidak ada gunanya membiarkan
            pembaca menebak.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <GalleryGrid foto={daftar} />
      </section>
    </>
  );
}
