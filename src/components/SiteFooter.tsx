"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { socials, profile } from "@/data/profile";
import { useTeks } from "@/lib/bahasa";

export function SiteFooter() {
  const t = useTeks();

  return (
    <footer className="rule mt-32">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo size={38} />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
              {t(
                `${profile.legalName}. Menulis kode di siang hari, memotret ketika cahayanya sedang bagus.`,
                `${profile.legalName}. Writing code by day, and picking up a camera when the light is worth it.`,
              )}
            </p>
            <p className="mt-4 text-[13px]" style={{ color: "var(--text-faint)" }}>
              {profile.location}
            </p>
          </div>

          <div>
            <p className="mono-label">{t("Halaman", "Pages")}</p>
            <ul className="mt-2 text-[14.5px]">
              {[
                { href: "/", label: t("Beranda", "Home") },
                { href: "/kerja", label: t("Kerja", "Work") },
                { href: "/arsip", label: t("Arsip", "Archive") },
                { href: "/galeri", label: t("Galeri", "Gallery") },
                { href: "/riwayat", label: t("Riwayat", "Story") },
                { href: "/kontak", label: t("Kontak", "Contact") },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline inline-block py-2.5"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label">{t("Tempat lain", "Elsewhere")}</p>
            <ul className="mt-2 text-[14.5px]">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline inline-block py-2.5"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {s.label} <span style={{ color: "var(--text-faint)" }}>{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-14 flex flex-col gap-3 pt-7 text-[12.5px] sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid var(--line)", color: "var(--text-faint)" }}
        >
          <p>© {new Date().getFullYear()} {profile.legalName}</p>
          <p>{t("Dibangun dengan Next.js, dipasang di Vercel.", "Built with Next.js, deployed on Vercel.")}</p>
        </div>
      </div>
    </footer>
  );
}
