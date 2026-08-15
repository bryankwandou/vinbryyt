"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView, useReducedMotion } from "framer-motion";
import { chapters } from "@/data/timeline";
import { useTeks } from "@/lib/bahasa";

function Chapter({ c, i }: { c: (typeof chapters)[number]; i: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const reduced = useReducedMotion();
  const t = useTeks();

  return (
    <li ref={ref} className="relative pl-12 sm:pl-20">
      {/* simpul di rel */}
      <motion.span
        aria-hidden
        className="absolute left-[13px] top-[9px] block h-3 w-3 rounded-full sm:left-[29px]"
        style={{ background: "var(--page)", border: "2px solid var(--accent)" }}
        initial={reduced ? false : { scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 420, damping: 20, delay: 0.1 }}
      />

      {/*
        Babak yang belum masuk pandangan sempat digeser ke kanan. Pada layar
        sempit geseran itu menambah lebar dokumen dan membuat halaman bisa
        ditarik ke samping, jadi kini masuknya dari bawah.
      */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="pb-16"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[12px] tracking-[0.14em]" style={{ color: "var(--accent)" }}>
            {t(c.year, c.yearEn).toUpperCase()}
          </span>
          {!c.confirmed && (
            <span
              className="rounded-full px-2.5 py-0.5 font-mono text-[9.5px] tracking-[0.1em]"
              style={{ border: "1px solid var(--line-strong)", color: "var(--text-faint)" }}
            >
              {t("BELUM TERKONFIRMASI", "NOT CONFIRMED")}
            </span>
          )}
        </div>

        <h2 className="mt-3 text-[clamp(1.35rem,2.6vw,1.9rem)] font-semibold leading-tight tracking-[-0.025em]">
          {t(c.title, c.titleEn)}
        </h2>
        <p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
          {t(c.body, c.bodyEn)}
        </p>
        {c.source && (
          <p className="mt-4 font-mono text-[10.5px] tracking-[0.12em]" style={{ color: "var(--text-faint)" }}>
            {t("SUMBER", "SOURCE")} · {t(c.source, c.sourceEn ?? c.source).toUpperCase()}
          </p>
        )}
      </motion.div>
    </li>
  );
}

export function TimelineRail() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });

  return (
    <section className="rule" style={{ overflowX: "clip" }}>
      <div ref={ref} className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="relative">
          {/* rel latar */}
          <span
            aria-hidden
            className="absolute left-[18px] top-0 h-full w-px sm:left-[34px]"
            style={{ background: "var(--line)" }}
          />
          {/* rel yang terisi mengikuti gulungan */}
          <motion.span
            aria-hidden
            className="absolute left-[18px] top-0 h-full w-px origin-top sm:left-[34px]"
            style={{ scaleY, background: "var(--accent)" }}
          />

          <ol>
            {chapters.map((c, i) => (
              <Chapter key={c.year + c.title} c={c} i={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
