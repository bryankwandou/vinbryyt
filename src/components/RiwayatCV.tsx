"use client";

import { Reveal, Stagger, StaggerItem } from "./motion";
import { useTeks } from "@/lib/bahasa";
import { peran, pendidikan, sertifikasi, keahlianTeratas } from "@/data/cv";

/** Mengubah 2026-03 menjadi "Maret 2026" atau "March 2026". */
function bulanTahun(iso: string, inggris: boolean) {
  const id = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  const en = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const [t, b] = iso.split("-").map(Number);
  return `${(inggris ? en : id)[b - 1]} ${t}`;
}

export function RiwayatCV() {
  const t = useTeks();
  const inggris = t("id", "en") === "en";

  return (
    <section className="rule mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="mono-label" style={{ color: "var(--accent)" }}>
          05
        </span>
        <span className="mono-label">{t("Riwayat yang tercatat", "The documented record")}</span>
        <span className="h-px flex-1" style={{ background: "var(--line)" }} />
      </div>

      <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Reveal>
            <h2 className="max-w-xl text-[clamp(1.8rem,4vw,2.7rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              {t("Peran yang dipegang, bukan yang diinginkan", "Roles held, not roles wanted")}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
              {t(
                "Disalin dari berkas profil LinkedIn, termasuk nomor surat keputusan rektor.",
                "Taken from the exported LinkedIn profile, including the rector decree number.",
              )}
            </p>
          </Reveal>

          <ol className="mt-10">
            {peran.map((p, i) => (
              <Reveal key={p.organisasi} delay={Math.min(i * 0.06, 0.3)}>
                <li
                  className="relative py-7 pl-6"
                  style={{ borderTop: i ? "1px solid var(--line)" : undefined }}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[34px] block h-2 w-2 rounded-full"
                    style={{ background: p.selesai ? "var(--line-strong)" : "var(--accent)" }}
                  />
                  <p className="font-mono text-[10.5px] tracking-[0.13em]" style={{ color: "var(--text-faint)" }}>
                    {bulanTahun(p.mulai, inggris).toUpperCase()} —{" "}
                    {p.selesai ? bulanTahun(p.selesai, inggris).toUpperCase() : t("SEKARANG", "PRESENT")}
                    {" · "}
                    {p.tempat.toUpperCase()}
                  </p>
                  <h3 className="mt-2.5 text-[19px] font-semibold tracking-tight">{p.organisasi}</h3>
                  <p className="mt-1 text-[14px]" style={{ color: "var(--accent)" }}>
                    {inggris ? p.jabatan.en : p.jabatan.id}
                  </p>
                  <p className="mt-3.5 max-w-2xl text-[14.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                    {inggris ? p.ringkas.en : p.ringkas.id}
                  </p>
                  {p.butir && (
                    <ul className="mt-4 space-y-1.5">
                      {p.butir.map((b) => (
                        <li
                          key={b.id}
                          className="pl-4 text-[13.5px] leading-relaxed"
                          style={{ color: "var(--text-faint)", textIndent: "-1rem" }}
                        >
                          <span style={{ color: "var(--accent)" }}>·</span> {inggris ? b.en : b.id}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="space-y-10">
          <Reveal delay={0.1}>
            <p className="mono-label">{t("Pendidikan", "Education")}</p>
            <ul className="mt-4 overflow-hidden rounded-xl" style={{ border: "1px solid var(--line)" }}>
              {pendidikan.map((e, i) => (
                <li key={e.lembaga} className="p-4" style={{ borderTop: i ? "1px solid var(--line)" : undefined }}>
                  <p className="text-[14.5px] font-medium leading-snug">{e.lembaga}</p>
                  <p className="mt-1 text-[13px]" style={{ color: "var(--text-dim)" }}>
                    {inggris ? e.jurusan.en : e.jurusan.id}
                  </p>
                  <p className="mt-1.5 font-mono text-[9.5px] tracking-[0.12em]" style={{ color: "var(--text-faint)" }}>
                    {e.mulai.replace("-", ".")} — {e.selesai.replace("-", ".")}
                    {e.berjalan && ` · ${t("BERJALAN", "IN PROGRESS")}`}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mono-label">{t("Sertifikasi", "Certifications")}</p>
            <Stagger className="mt-4 space-y-2">
              {sertifikasi.map((s) => (
                <StaggerItem key={s}>
                  <div
                    className="rounded-lg px-4 py-3 text-[13.5px] leading-snug"
                    style={{ border: "1px solid var(--line)", color: "var(--text-dim)" }}
                  >
                    {s}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mono-label">{t("Keahlian teratas", "Top skills")}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {keahlianTeratas.map((k) => (
                <span
                  key={k}
                  className="rounded-full px-3.5 py-2 font-mono text-[11px]"
                  style={{
                    border: "1px solid var(--line-strong)",
                    color: "var(--text)",
                  }}
                >
                  {k}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[12.5px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
              {t(
                "Ketiganya adalah keahlian yang paling banyak dikuatkan orang lain di LinkedIn — bukan pilihan sendiri.",
                "These three are the skills most endorsed by others on LinkedIn — not self-selected.",
              )}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
