"use client";

import { SplitHeading, Reveal } from "./motion";
import { useTeks } from "@/lib/bahasa";

export function ArsipIntro({ total }: { total: number }) {
  const t = useTeks();

  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-[150px] sm:px-8">
      <p className="mono-label" style={{ color: "var(--accent)" }}>
        {t("Arsip", "Archive")}
      </p>
      <SplitHeading
        text={t("Seluruhnya, tanpa disaring", "All of it, unfiltered")}
        className="mt-6 max-w-3xl text-[clamp(2.1rem,5.4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
      />
      <Reveal delay={0.35}>
        <p className="mt-7 max-w-2xl text-[16px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
          {t(
            `Seluruh ${total} repositori publik, dengan pratinjau dan keterangan dari README masing-masing.`,
            `All ${total} public repositories, with a preview and the description from each README.`,
          )}
        </p>
      </Reveal>
    </section>
  );
}
