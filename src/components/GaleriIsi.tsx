"use client";

import { SplitHeading, Reveal } from "./motion";
import { GalleryGrid, type Foto } from "./GalleryGrid";
import { useTeks } from "@/lib/bahasa";

/**
 * Bagian isi halaman galeri. Dipisah dari page.tsx supaya halamannya tetap
 * bisa mengekspor metadata di sisi server sementara teksnya ikut berganti
 * bahasa di sisi klien.
 */
export function GaleriIsi({ foto }: { foto: Foto[] }) {
  const t = useTeks();

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-[160px] sm:px-8">
        <p className="mono-label" style={{ color: "var(--accent)" }}>
          {t("Galeri", "Gallery")}
        </p>
        <SplitHeading
          text={t("Karya yang tercatat di rantai", "Work recorded on chain")}
          className="mt-6 max-w-3xl text-[clamp(2.2rem,5.6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        />
        <Reveal delay={0.4}>
          <p className="mt-7 max-w-2xl text-[16px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
            {t(
              `${foto.length} karya yang diterbitkan sebagai NFT di Tezos lewat objkt. Setiap karya membawa tautan ke catatan aslinya di rantai.`,
              `${foto.length} works published as NFTs on Tezos through objkt. Each one links back to its record on chain.`,
            )}
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
            {t(
              "Sebagian dibuat dengan bantuan alat gambar otomatis, sebagian lagi hasil kamera.",
              "Some were made with automated image tools, others came from a camera.",
            )}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <GalleryGrid foto={foto} />
      </section>
    </>
  );
}
