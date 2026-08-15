"use client";

import Image from "next/image";
import Link from "next/link";
import { TiltCard } from "./motion";
import type { Project } from "@/data/projects";
import { useTeks } from "@/lib/bahasa";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useTeks();

  return (
    <TiltCard
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300"
      max={5}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ border: "1px solid var(--line)", background: "var(--surface)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 z-10 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
      />

      {/* Kartu pratinjau yang dirender GitHub untuk repositori ini */}
      <div className="relative m-[1px] mb-0 aspect-[2/1] overflow-hidden rounded-t-2xl">
        <Image
          src={`/proyek/${project.slug}.webp`}
          alt={t(`Pratinjau repositori ${project.name}`, `Repository preview for ${project.name}`)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="preview-img object-cover transition-all duration-700 group-hover:scale-[1.04]"
          loading={index < 3 ? "eager" : "lazy"}
        />
        {/* Kartu bawaan GitHub berlatar terang; diredam supaya menyatu dengan
            bidang gelap, lalu dikembalikan penuh saat kursor lewat. */}
        <span
          aria-hidden
          className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-40"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--surface) 55%, transparent) 0%, color-mix(in srgb, var(--surface) 78%, transparent) 55%, var(--surface) 100%)",
          }}
        />
      </div>

      <div className="relative flex flex-1 flex-col p-6 pt-4">
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10.5px] tracking-[0.16em]" style={{ color: "var(--text-faint)" }}>
            {String(index + 1).padStart(2, "0")} · {project.language.toUpperCase()}
          </p>
          <h2 className="mt-2 text-[19px] font-semibold tracking-tight">
            {/* seluruh permukaan kartu jadi tautan lewat lapisan tak terlihat di bawah */}
            <Link href={`/kerja/${project.slug}`} className="after:absolute after:inset-0 after:z-[5]">
              {project.name}
            </Link>
          </h2>
        </div>
        {project.live && (
          <span
            className="shrink-0 rounded-full px-2.5 py-1 font-mono text-[9.5px] tracking-[0.12em]"
            style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)", color: "var(--accent)" }}
          >
            LIVE
          </span>
        )}
      </div>

      <p className="relative mt-3.5 flex-1 text-[14px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
        {project.blurb}
      </p>

      {/* tautan langsung diangkat di atas lapisan kartu supaya tetap bisa diklik sendiri */}
      <div className="relative z-10 mt-6 flex items-center gap-4 text-[13px]">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="link-underline inline-flex items-center gap-1.5"
          style={{ color: "var(--text)" }}
        >
          {t("Kode", "Code")}
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-flex items-center gap-1.5"
            style={{ color: "var(--accent)" }}
          >
            {t("Buka situsnya", "Open the site")}
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </a>
        )}
      </div>
      </div>
    </TiltCard>
  );
}
