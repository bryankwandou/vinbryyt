"use client";

import { TiltCard } from "./motion";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <TiltCard
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-colors duration-300"
      max={5}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ border: "1px solid var(--line)", background: "var(--surface)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10.5px] tracking-[0.16em]" style={{ color: "var(--text-faint)" }}>
            {String(index + 1).padStart(2, "0")} · {project.language.toUpperCase()}
          </p>
          <h3 className="mt-2 text-[19px] font-semibold tracking-tight">{project.name}</h3>
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

      <div className="relative mt-6 flex items-center gap-4 text-[13px]">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="link-underline inline-flex items-center gap-1.5"
          style={{ color: "var(--text)" }}
        >
          Kode
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
            Buka situsnya
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </a>
        )}
      </div>
    </TiltCard>
  );
}
