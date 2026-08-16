"use client";

import { Reveal, SplitHeading } from "./motion";
import { useTeks } from "@/lib/bahasa";

/**
 * Pembuka halaman riwayat, dipisah supaya teksnya bisa berganti bahasa
 * sementara halamannya tetap mengekspor metadata di sisi server.
 */
export function RiwayatIntro() {
  const t = useTeks();

  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-[160px] sm:px-8">
      <p className="mono-label" style={{ color: "var(--accent)" }}>
        {t("Riwayat", "Story")}
      </p>
      <SplitHeading
        text={t("Bagaimana sampai di titik ini", "How it got to this point")}
        className="mt-6 max-w-3xl text-[clamp(2.2rem,5.6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal delay={0.15}>
          <p
            className="text-[clamp(1.25rem,2.5vw,1.7rem)] leading-[1.4]"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            {t(
              "Nama VinBryYT dipakai sejak lama sebelum ada satu pun baris kode yang layak ditunjukkan. Awalnya untuk menandai video; belakangan ikut menempel pada kode.",
              "The name VinBryYT was in use long before there was a single line of code worth showing. It started as a mark on videos; later it stuck to the code as well.",
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
