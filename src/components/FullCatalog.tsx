"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Reveal } from "./motion";
import { useTeks } from "@/lib/bahasa";
import semua from "@/data/repos-all.json";

type Repo = {
  slug: string;
  nama: string;
  deskripsi: string | null;
  ringkas: string | null;
  bahasa: string;
  topik: string[];
  bintang: number;
  dibuat: string | null;
  disentuh: string | null;
  repo: string;
  live: string | null;
  fork?: boolean;
  gambar: string | null;
};

const daftar = semua as Repo[];

/** Bahasa yang dipakai di lebih dari dua repositori layak jadi penyaring sendiri. */
function bahasaUtama(d: Repo[]) {
  const hitung = new Map<string, number>();
  for (const x of d) hitung.set(x.bahasa, (hitung.get(x.bahasa) ?? 0) + 1);
  return [...hitung.entries()]
    .filter(([, n]) => n >= 3)
    .sort((a, b) => b[1] - a[1]);
}

export function FullCatalog() {
  const t = useTeks();
  const [saring, setSaring] = useState<string>("semua");
  const [cari, setCari] = useState("");
  const [tampil, setTampil] = useState(24);

  const bahasa = useMemo(() => bahasaUtama(daftar), []);

  const hasil = useMemo(() => {
    const q = cari.trim().toLowerCase();
    return daftar.filter((x) => {
      if (saring === "live" && !x.live) return false;
      else if (saring !== "semua" && saring !== "live" && x.bahasa !== saring) return false;
      if (!q) return true;
      return (
        x.nama.toLowerCase().includes(q) ||
        (x.deskripsi ?? "").toLowerCase().includes(q) ||
        (x.ringkas ?? "").toLowerCase().includes(q) ||
        x.topik.some((k) => k.includes(q))
      );
    });
  }, [saring, cari]);

  const terlihat = hasil.slice(0, tampil);

  return (
    <>
      <div className="rule sticky top-[70px] z-30 py-5" style={{ background: "var(--page)" }}>
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "semua", label: t("Semua", "All"), n: daftar.length },
            { id: "live", label: t("Ada situsnya", "Has a site"), n: daftar.filter((x) => x.live).length },
            ...bahasa.map(([b, n]) => ({ id: b, label: b, n })),
          ].map((f) => {
            const aktif = saring === f.id;
            return (
              <button
                key={f.id}
                onClick={() => {
                  setSaring(f.id);
                  setTampil(24);
                }}
                className="rounded-full px-4 py-2.5 text-[13px] transition-colors"
                style={{
                  background: aktif ? "var(--accent)" : "transparent",
                  color: aktif ? "#0b0b0d" : "var(--text-dim)",
                  border: aktif ? "1px solid var(--accent)" : "1px solid var(--line)",
                }}
              >
                {f.label} <span style={{ opacity: 0.65 }}>{f.n}</span>
              </button>
            );
          })}
        </div>

        <input
          value={cari}
          onChange={(e) => {
            setCari(e.target.value);
            setTampil(24);
          }}
          placeholder={t("Cari nama, topik, atau isi README…", "Search name, topic, or README…")}
          className="mt-3 w-full rounded-full bg-transparent px-4 py-3 text-[13px] outline-none sm:max-w-md"
          style={{ border: "1px solid var(--line)" }}
          aria-label={t("Cari proyek", "Search projects")}
        />
      </div>

      <p className="mt-6 text-[13.5px]" style={{ color: "var(--text-faint)" }}>
        {t(
          `Menampilkan ${terlihat.length} dari ${hasil.length} repositori.`,
          `Showing ${terlihat.length} of ${hasil.length} repositories.`,
        )}
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {terlihat.map((x, i) => (
          <Reveal key={x.slug} delay={Math.min((i % 12) * 0.03, 0.35)}>
            <article
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl"
              style={{ border: "1px solid var(--line)", background: "var(--surface)" }}
            >
              {x.gambar && (
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image
                    src={x.gambar}
                    alt={t(`Pratinjau repositori ${x.nama}`, `Repository preview for ${x.nama}`)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="preview-img object-cover transition-all duration-700 group-hover:scale-[1.04]"
                    loading={i < 6 ? "eager" : "lazy"}
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-40"
                    style={{
                      background:
                        "linear-gradient(to bottom, color-mix(in srgb, var(--surface) 55%, transparent) 0%, color-mix(in srgb, var(--surface) 78%, transparent) 55%, var(--surface) 100%)",
                    }}
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[10px] tracking-[0.15em]" style={{ color: "var(--text-faint)" }}>
                    {x.bahasa.toUpperCase()}
                  </p>
                  <span className="flex shrink-0 gap-1.5">
                    {x.fork && (
                      <span
                        className="rounded-full px-2 py-0.5 font-mono text-[9px] tracking-[0.12em]"
                        style={{ border: "1px solid var(--line-strong)", color: "var(--text-faint)" }}
                      >
                        {t("SALINAN", "FORK")}
                      </span>
                    )}
                    {x.live && (
                      <span
                        className="rounded-full px-2 py-0.5 font-mono text-[9px] tracking-[0.12em]"
                        style={{
                          background: "color-mix(in srgb, var(--accent) 15%, transparent)",
                          color: "var(--accent)",
                        }}
                      >
                        LIVE
                      </span>
                    )}
                  </span>
                </div>

                <h2 className="mt-2 text-[16.5px] font-semibold leading-snug tracking-tight">
                  <a href={x.repo} target="_blank" rel="noreferrer" className="after:absolute after:inset-0">
                    {x.nama}
                  </a>
                </h2>

                <p className="mt-2.5 flex-1 text-[13px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  {x.ringkas ?? x.deskripsi ?? t("Belum ada keterangan di repositorinya.", "No description in the repository yet.")}
                </p>

                {x.disentuh && (
                  <p className="mt-4 font-mono text-[9.5px] tracking-[0.12em]" style={{ color: "var(--text-faint)" }}>
                    {t("DIUBAH", "UPDATED")} {x.disentuh}
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {terlihat.length < hasil.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setTampil((n) => n + 24)}
            className="rounded-full px-7 py-3.5 text-[14px] font-medium"
            style={{ border: "1px solid var(--line-strong)", color: "var(--text)" }}
          >
            {t(
              `Tampilkan ${Math.min(24, hasil.length - terlihat.length)} lagi`,
              `Show ${Math.min(24, hasil.length - terlihat.length)} more`,
            )}
          </button>
        </div>
      )}

      {hasil.length === 0 && (
        <p className="py-24 text-center text-[15px]" style={{ color: "var(--text-faint)" }}>
          {t("Tidak ada yang cocok dengan pencarian itu.", "Nothing matches that search.")}
        </p>
      )}
    </>
  );
}
