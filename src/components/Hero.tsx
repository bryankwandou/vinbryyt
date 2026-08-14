"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SplitHeading, Magnetic, Marquee } from "./motion";
import { profile } from "@/data/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const lift = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden pt-[70px]">
      {/* Cahaya latar yang bergerak lambat */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full blur-[130px]"
          style={{ background: "var(--glow)" }}
          animate={reduced ? undefined : { scale: [1, 1.12, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 55% at 50% 32%, #000 30%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 32%, #000 30%, transparent 78%)",
          }}
        />
      </div>

      <motion.div
        style={reduced ? undefined : { opacity: fade, y: lift }}
        className="relative mx-auto flex min-h-[calc(100svh-70px)] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="mb-8 flex items-start gap-3"
        >
          {/* titik dijaga sejajar dengan baris pertama meski labelnya membungkus */}
          <span className="relative mt-[5px] flex h-2 w-2 shrink-0">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
              style={{ background: "var(--accent)" }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
          </span>
          <span className="mono-label leading-[1.5]">
            Terbuka untuk kerja sama · {profile.location}
          </span>
        </motion.div>

        <div className="grid items-end gap-12 lg:grid-cols-[1.55fr_1fr]">
          <div>
            <SplitHeading
              text="Vincentius Bryan Kwandou"
              delay={0.25}
              className="max-w-3xl text-[clamp(2.6rem,7.4vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.035em]"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.72, ease: EASE }}
              className="mt-7 max-w-[38rem] text-[clamp(1rem,1.65vw,1.2rem)] leading-relaxed"
              style={{ color: "var(--text-dim)" }}
            >
              {profile.headline} Dikenal di layar sebagai{" "}
              <span
                className="italic"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                VinBryYT
              </span>{" "}
              — dua penggal dari nama sendiri, dipakai di depan enam puluh ribu penonton sejak
              Agustus 2018. Sertifikasi teknis pertama menyusul 2023, dan kodenya dibuka
              untuk umum mulai awal 2026.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.86, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <Link
                  href="/kerja"
                  className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[14.5px] font-medium"
                  style={{ background: "var(--accent)", color: "#0b0b0d" }}
                >
                  Lihat yang sudah dikerjakan
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-[3px]"
                    />
                  </svg>
                </Link>
              </Magnetic>

              <Magnetic strength={0.22}>
                <Link
                  href="/riwayat"
                  className="inline-flex items-center rounded-full px-6 py-3.5 text-[14.5px] transition-colors"
                  style={{ border: "1px solid var(--line-strong)", color: "var(--text)" }}
                >
                  Baca riwayatnya
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          {/* Kartu potret */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
            className="relative mx-auto w-full max-w-[19rem] lg:mx-0"
          >
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              style={{ border: "1px solid var(--line-strong)", background: "var(--surface)" }}
            >
              <Image
                src={profile.avatar}
                alt={`Potret ${profile.legalName}`}
                fill
                sizes="(max-width: 1024px) 76vw, 19rem"
                className="object-cover"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(8,8,10,0.82), transparent 52%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-mono text-[10.5px] tracking-[0.16em] text-bone-300">
                  @VINBRYYT · JAYAPURA
                </p>
              </div>
            </div>

            <motion.div
              animate={reduced ? undefined : { y: [0, -9, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-5 rounded-xl px-4 py-3 backdrop-blur-md"
              style={{ border: "1px solid var(--line-strong)", background: "color-mix(in srgb, var(--surface) 88%, transparent)" }}
            >
              <p className="text-[22px] font-semibold leading-none">60,3 rb</p>
              <p className="mt-1 font-mono text-[9.5px] tracking-[0.14em]" style={{ color: "var(--text-faint)" }}>
                PENGIKUT TIKTOK
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute inset-x-0 bottom-0 border-t"
        style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--page) 60%, transparent)" }}
      >
        <Marquee
          items={[
            "Solana",
            "Rust",
            "TypeScript",
            "Next.js",
            "Flutter",
            "Anchor",
            "Groq",
            "Durable Nonce",
            "QRIS",
            "Fotografi",
          ]}
        />
      </motion.div>
    </section>
  );
}
