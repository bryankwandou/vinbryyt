import type { Metadata } from "next";
import { SplitHeading, Reveal } from "@/components/motion";
import { FullCatalog } from "@/components/FullCatalog";
import semua from "@/data/repos-all.json";

export const metadata: Metadata = {
  title: "Arsip lengkap",
  description:
    "Seluruh repositori publik Vincentius Bryan Kwandou — 128 proyek, masing-masing dengan gambar, keterangan, dan tanggal perubahan terakhir yang dibaca langsung dari GitHub.",
};

export default function ArsipPage() {
  const total = (semua as unknown[]).length;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-[150px] sm:px-8">
        <p className="mono-label" style={{ color: "var(--accent)" }}>
          Arsip
        </p>
        <SplitHeading
          text="Seluruhnya, tanpa disaring"
          className="mt-6 max-w-3xl text-[clamp(2.1rem,5.4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        />
        <Reveal delay={0.35}>
          <p className="mt-7 max-w-2xl text-[16px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
            Halaman <em>Kerja</em> memuat pilihan yang sudah dikurasi. Halaman ini tidak
            mengurasi apa pun: {total} repositori publik, semuanya, lengkap dengan gambar
            pratinjau dan keterangan yang dibaca langsung dari berkas README masing-masing.
            Yang berantakan pun ikut ditampilkan.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <FullCatalog />
      </section>
    </>
  );
}
