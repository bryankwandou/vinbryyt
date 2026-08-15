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
              `${foto.length} karya yang diterbitkan sebagai NFT di blockchain Tezos lewat objkt. Gambarnya diambil dari IPFS lalu disimpan di sini supaya halaman tidak bergantung pada gerbang publik yang sering lambat — tetapi setiap karya tetap membawa tautan ke catatan aslinya, dan kepemilikannya bisa diperiksa siapa pun di rantai.`,
              `${foto.length} works published as NFTs on the Tezos blockchain through objkt. The images were pulled from IPFS and stored here so the page never depends on public gateways, which are often slow — but every piece still links back to its original record, and anyone can verify the ownership on chain.`,
            )}
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
            {t(
              "Sebagian dibuat dengan bantuan alat gambar otomatis. Itu disebutkan di sini karena memang begitu adanya — bukan semuanya hasil kamera, dan tidak ada gunanya membiarkan pembaca menebak.",
              "Some were made with the help of automated image tools. That is stated here because it is simply the case — not all of it came from a camera, and there is no point leaving the reader to guess.",
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
