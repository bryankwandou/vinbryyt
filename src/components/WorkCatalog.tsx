"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ReadingBar, SplitHeading, Reveal } from "./motion";
import { projects, tracks, type Track } from "@/data/projects";

type Filter = Track | "semua";

export function WorkCatalog() {
  const [filter, setFilter] = useState<Filter>("semua");
  const [q, setQ] = useState("");

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    return projects.filter((p) => {
      const okTrack = filter === "semua" || p.track === filter;
      const okTerm =
        !term ||
        p.name.toLowerCase().includes(term) ||
        p.blurb.toLowerCase().includes(term) ||
        p.language.toLowerCase().includes(term);
      return okTrack && okTerm;
    });
  }, [filter, q]);

  const chips: { id: Filter; label: string; n: number }[] = [
    { id: "semua", label: "Semua", n: projects.length },
    ...tracks.map((t) => ({
      id: t.id as Filter,
      label: t.label,
      n: projects.filter((p) => p.track === t.id).length,
    })),
  ];

  return (
    <>
      <ReadingBar />

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-[160px] sm:px-8">
        <p className="mono-label" style={{ color: "var(--accent)" }}>
          Katalog
        </p>
        <SplitHeading
          text="Semua yang pernah didorong ke publik"
          className="mt-6 max-w-3xl text-[clamp(2.2rem,5.6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-[16px] leading-relaxed"
          style={{ color: "var(--text-dim)" }}
        >
          Daftar ini disusun dari metadata repositori GitHub, bukan dari ingatan. Tiap kartu membawa
          tautan ke kodenya; yang bertanda LIVE punya situs yang bisa dibuka sekarang juga.
        </motion.p>
      </section>

      <section className="sticky top-[70px] z-30 border-y" style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--page) 88%, transparent)", backdropFilter: "blur(12px)" }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <LayoutGroup id="filters">
            <div className="flex flex-wrap gap-1.5">
              {chips.map((c) => {
                const on = filter === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setFilter(c.id)}
                    className="relative rounded-full px-4 py-2.5 text-[13px] transition-colors"
                    style={{ color: on ? "#0b0b0d" : "var(--text-dim)" }}
                  >
                    {on && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "var(--accent)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    )}
                    <span className="relative">
                      {c.label}
                      <span className="ml-1.5 opacity-60">{c.n}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          <label className="relative sm:w-56">
            <span className="sr-only">Cari proyek</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari..."
              className="w-full rounded-full bg-transparent px-4 py-3 text-[13px] outline-none"
              style={{ border: "1px solid var(--line-strong)", color: "var(--text)" }}
            />
          </label>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <AnimatePresence mode="popLayout">
          {shown.length === 0 ? (
            <motion.p
              key="kosong"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center text-[15px]"
              style={{ color: "var(--text-faint)" }}
            >
              Tidak ada yang cocok dengan &ldquo;{q}&rdquo;. Coba kata lain.
            </motion.p>
          ) : (
            <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.42, delay: Math.min(i * 0.028, 0.4), ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={p} index={i} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <Reveal>
          <p className="mt-16 text-center text-[13.5px]" style={{ color: "var(--text-faint)" }}>
            Menampilkan {shown.length} dari {projects.length} entri terkurasi. Repositori publik
            seluruhnya berjumlah 104 —{" "}
            <a
              href="https://github.com/bryankwandou?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="link-underline"
              style={{ color: "var(--accent)" }}
            >
              telusuri sisanya di GitHub
            </a>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
