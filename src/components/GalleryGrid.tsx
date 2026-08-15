"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./motion";
import { useTeks } from "@/lib/bahasa";

export type Foto = {
  slug: string;
  kecil: string;
  besar: string;
  lebar: number;
  tinggi: number;
  keterangan: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function GalleryGrid({ foto }: { foto: Foto[] }) {
  const t = useTeks();
  const [terbuka, setTerbuka] = useState<number | null>(null);

  const tutup = useCallback(() => setTerbuka(null), []);
  const geser = useCallback(
    (arah: 1 | -1) =>
      setTerbuka((i) => (i === null ? null : (i + arah + foto.length) % foto.length)),
    [foto.length],
  );

  useEffect(() => {
    if (terbuka === null) return;
    const tekan = (e: KeyboardEvent) => {
      if (e.key === "Escape") tutup();
      if (e.key === "ArrowRight") geser(1);
      if (e.key === "ArrowLeft") geser(-1);
    };
    window.addEventListener("keydown", tekan);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", tekan);
      document.body.style.overflow = "";
    };
  }, [terbuka, tutup, geser]);

  if (foto.length === 0) {
    return (
      <div
        className="rounded-2xl px-8 py-20 text-center"
        style={{ border: "1px dashed var(--line-strong)" }}
      >
        <p className="text-[17px]" style={{ color: "var(--text)" }}>
          {t("Galerinya masih kosong", "The gallery is still empty")}
        </p>
        <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
          {t("Jatuhkan foto ke", "Drop images into")}{" "}
          <code className="font-mono">public/galeri/masuk/</code>{" "}
          {t("lalu jalankan", "then run")}{" "}
          <code className="font-mono">node scripts/build-gallery.mjs</code>.{" "}
          {t(
            "Ukuran dan format apa pun diterima; skripnya yang mengurus pengecilan dan konversi.",
            "Any size or format is accepted; the script handles the resizing and conversion.",
          )}
        </p>
      </div>
    );
  }

  const aktif = terbuka === null ? null : foto[terbuka];

  return (
    <>
      {/* Tata letak kolom supaya foto tegak dan mendatar sama-sama tampil utuh */}
      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {foto.map((f, i) => (
          <Reveal key={f.slug} delay={Math.min(i * 0.04, 0.4)}>
            <button
              onClick={() => setTerbuka(i)}
              className="group relative block w-full overflow-hidden rounded-xl"
              style={{ border: "1px solid var(--line)" }}
              aria-label={t(`Perbesar foto: ${f.keterangan || f.slug}`, `Enlarge image: ${f.keterangan || f.slug}`)}
            >
              <Image
                src={f.kecil}
                alt={f.keterangan || t(`Karya ${f.slug}`, `Work ${f.slug}`)}
                width={f.lebar}
                height={f.tinggi}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {f.keterangan && (
                <span
                  className="absolute inset-x-0 bottom-0 translate-y-full px-3 pb-2.5 pt-8 text-left text-[12.5px] transition-transform duration-300 group-hover:translate-y-0"
                  style={{
                    background: "linear-gradient(to top, rgba(8,8,10,0.9), transparent)",
                    color: "#f6f3ec",
                  }}
                >
                  {f.keterangan}
                </span>
              )}
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {aktif && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-10"
            style={{ background: "rgba(8,8,10,0.94)", backdropFilter: "blur(6px)" }}
            onClick={tutup}
          >
            <motion.div
              key={aktif.slug}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={aktif.besar}
                alt={aktif.keterangan || t(`Karya ${aktif.slug}`, `Work ${aktif.slug}`)}
                width={aktif.lebar}
                height={aktif.tinggi}
                sizes="90vw"
                className="max-h-[82vh] w-auto rounded-lg object-contain"
                priority
              />
              {aktif.keterangan && (
                <p className="mt-4 text-center text-[14px]" style={{ color: "#b9b3a7" }}>
                  {aktif.keterangan}
                </p>
              )}
            </motion.div>

            {/* kendali */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                geser(-1);
              }}
              aria-label={t("Karya sebelumnya", "Previous work")}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full sm:left-6"
              style={{ background: "rgba(246,243,236,0.1)", color: "#f6f3ec" }}
            >
              <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                geser(1);
              }}
              aria-label={t("Karya berikutnya", "Next work")}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full sm:right-6"
              style={{ background: "rgba(246,243,236,0.1)", color: "#f6f3ec" }}
            >
              <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={tutup}
              aria-label={t("Tutup", "Close")}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full sm:right-8 sm:top-8"
              style={{ background: "rgba(246,243,236,0.1)", color: "#f6f3ec" }}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>

            <p
              className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.14em]"
              style={{ color: "#8a857b" }}
            >
              {(terbuka ?? 0) + 1} / {foto.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
