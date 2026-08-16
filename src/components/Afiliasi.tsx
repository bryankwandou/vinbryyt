"use client";

import { Marquee } from "./motion";
import { useTeks } from "@/lib/bahasa";

/**
 * Lembaga dan program yang pernah diikuti. Daftarnya disalin dari portofolio
 * bryankwandou.vercel.app milik pemiliknya sendiri, lalu dicocokkan dengan
 * riwayat di profil LinkedIn — Superteam Campus dan Colosseum muncul di
 * kedua sumber.
 */
const lembaga = [
  "MyBCA Academy",
  "GDG Telkom",
  "Novo Club",
  "Superteam Campus",
  "IDCamp",
  "Colosseum",
  "Superteam",
  "PIDI Digdaya",
  "MANCER",
  "ICoDSS 2026",
  "Universitas Atma Jaya Makassar",
  "Drip Labs",
];

export function Afiliasi() {
  const t = useTeks();

  return (
    <section className="rule py-16">
      <div className="mx-auto mb-8 max-w-6xl px-5 sm:px-8">
        <p className="mono-label">
          {t("Tempat belajar dan berjejaring", "Where the learning and networking happened")}
        </p>
      </div>

      <Marquee items={lembaga} speed={44} />

      <div className="mx-auto mt-8 max-w-6xl px-5 sm:px-8">
        <p className="max-w-xl text-[13px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
          {t(
            "Disalin dari portofolio miliknya sendiri lalu dicocokkan dengan riwayat LinkedIn. Beberapa nama muncul di kedua sumber; yang lain baru tercatat di satu tempat, jadi daftarnya dibaca sebagai keikutsertaan, bukan sebagai kemitraan resmi.",
            "Copied from his own portfolio and cross-checked against his LinkedIn history. Some names appear in both sources; others are recorded in only one, so read this as participation rather than formal partnership.",
          )}
        </p>
      </div>
    </section>
  );
}
