import type { Metadata } from "next";
import { SplitHeading, Reveal } from "@/components/motion";
import { GalleryGrid, type Foto } from "@/components/GalleryGrid";
import foto from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Kumpulan foto Vincentius Bryan Kwandou — sisi kamera dari seorang yang sehari-hari menulis kode.",
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
          text="Sisi yang dilihat lewat lensa"
          className="mt-6 max-w-3xl text-[clamp(2.2rem,5.6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        />
        <Reveal delay={0.4}>
          <p className="mt-7 max-w-2xl text-[16px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
            Memotret dan menulis kode ternyata menuntut hal yang sama: memutuskan apa yang layak
            masuk bingkai, dan berani membuang sisanya.
            {daftar.length > 0 && (
              <>
                {" "}
                Ada {daftar.length} foto di halaman ini. Klik untuk memperbesar; panah kiri dan
                kanan untuk berpindah.
              </>
            )}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <GalleryGrid foto={daftar} />
      </section>
    </>
  );
}
