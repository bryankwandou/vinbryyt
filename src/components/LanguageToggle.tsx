"use client";

import { useBahasa } from "@/lib/bahasa";

/**
 * Dua tombol berdampingan, ID dan EN, dengan penanda geser di belakang yang
 * aktif. Sengaja bukan menu jatuh: dengan hanya dua pilihan, satu ketukan
 * lebih cepat daripada membuka daftar.
 */
export function LanguageToggle() {
  const { bahasa, ganti, siap } = useBahasa();

  return (
    <div
      className="relative flex h-11 items-center rounded-full p-1"
      style={{ border: "1px solid var(--line-strong)" }}
      role="group"
      aria-label="Pilih bahasa / Choose language"
    >
      <span
        aria-hidden
        className="absolute top-1 h-9 w-[42px] rounded-full transition-transform duration-300"
        style={{
          background: "color-mix(in srgb, var(--accent) 18%, transparent)",
          transform: siap && bahasa === "en" ? "translateX(42px)" : "translateX(0)",
          left: 4,
        }}
      />
      {(["id", "en"] as const).map((b) => {
        const aktif = siap ? bahasa === b : b === "id";
        return (
          <button
            key={b}
            onClick={() => ganti(b)}
            aria-pressed={aktif}
            className="relative z-10 h-9 w-[42px] rounded-full font-mono text-[11px] tracking-[0.1em] transition-colors"
            style={{ color: aktif ? "var(--accent)" : "var(--text-faint)" }}
          >
            {b.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
