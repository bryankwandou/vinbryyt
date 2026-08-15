"use client";

import { Reveal, SplitHeading, Magnetic } from "./motion";
import { useTeks } from "@/lib/bahasa";
import { socials, profile } from "@/data/profile";

export function KontakIsi() {
  const t = useTeks();

  const baris = [
    { k: t("Domisili", "Based in"), v: profile.location },
    // Makassar berada di zona WITA, bukan WIT
    { k: t("Zona waktu", "Time zone"), v: "WITA, UTC+8" },
    { k: t("Bahasa", "Languages"), v: t("Indonesia, Inggris", "Indonesian, English") },
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-[160px] sm:px-8">
        <p className="mono-label" style={{ color: "var(--accent)" }}>
          {t("Kontak", "Contact")}
        </p>
        <SplitHeading
          text={t("Cara paling cepat menghubungi", "The fastest way to reach him")}
          className="mt-6 max-w-3xl text-[clamp(2.2rem,5.6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        />
        <Reveal delay={0.4}>
          <p className="mt-7 max-w-xl text-[16px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
            {t(
              "Email paling saya perhatikan. Kalau soal kode, GitHub lebih tepat — issue atau pull request langsung masuk ke antrean yang benar.",
              "Email gets the closest attention. For anything about the code, GitHub is the better door — an issue or pull request lands straight in the right queue.",
            )}
          </p>
        </Reveal>
      </section>

      <section className="rule mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Magnetic strength={0.06}>
          <a
            href={`mailto:${profile.email}`}
            className="group block rounded-2xl p-8 transition-colors sm:p-12"
            style={{ border: "1px solid var(--line-strong)", background: "var(--surface)" }}
          >
            <p className="mono-label">{t("Surat elektronik", "Electronic mail")}</p>
            <p className="mt-4 break-all text-[clamp(1.4rem,4vw,2.6rem)] font-semibold tracking-[-0.03em] transition-colors group-hover:text-[var(--accent)]">
              {profile.email}
            </p>
            <p className="mt-5 text-[14px]" style={{ color: "var(--text-dim)" }}>
              {t("Klik untuk membuka aplikasi surat Anda.", "Click to open your mail application.")}
            </p>
          </a>
        </Magnetic>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socials
            .filter((s) => s.label !== "Email")
            .map((s, i) => (
              <Reveal key={s.href} delay={Math.min(i * 0.06, 0.35)}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col justify-between rounded-2xl p-6 transition-transform hover:-translate-y-1"
                  style={{ border: "1px solid var(--line)", background: "var(--surface)" }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="mono-label">{s.label}</p>
                      <p className="mt-2.5 text-[17px] font-medium tracking-tight transition-colors group-hover:text-[var(--accent)]">
                        {s.handle}
                      </p>
                    </div>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden
                      className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: "var(--text-faint)" }}
                    >
                      <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                  {s.note && (
                    <p className="mt-6 text-[13.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                      {s.note}
                    </p>
                  )}
                </a>
              </Reveal>
            ))}
        </div>
      </section>

      <section className="rule mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          {baris.map((row) => (
            <Reveal key={row.k}>
              <div style={{ borderTop: "1px solid var(--line)" }} className="pt-5">
                <p className="mono-label">{row.k}</p>
                <p className="mt-2.5 text-[17px]">{row.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
