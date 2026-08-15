import type { Metadata } from "next";
import { ArsipIntro } from "@/components/ArsipIntro";
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
      <ArsipIntro total={total} />
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <FullCatalog />
      </section>
    </>
  );
}
