"use client";

import { Reveal } from "./motion";
import { useTeks } from "@/lib/bahasa";
import { profile, audience, tiktok } from "@/data/profile";

/**
 * Kartu angka audiens beserta catatan asal datanya. Kolom yang memang kosong
 * dibiarkan bertanda, bukan diisi perkiraan.
 */
export function AngkaAudiens() {
  const t = useTeks();

  const kartu = [
    { v: tiktok.followersLabel, l: t("Pengikut TikTok", "TikTok followers"), s: "@vinbryyt", ok: true },
    { v: tiktok.likesLabel, l: t("Suka TikTok", "TikTok likes"), s: "@vinbryyt", ok: true },
    {
      v: audience.igGamingFollowers.toLocaleString("id-ID"),
      l: t("Pengikut Instagram", "Instagram followers"),
      s: "@nayrbryan_gaming",
      ok: true,
    },
    {
      v: audience.igPersonalFollowers.toLocaleString("id-ID"),
      l: t("Pengikut Instagram", "Instagram followers"),
      s: "@bryan_kwandou",
      ok: true,
    },
    {
      v: audience.communityFollowers.toLocaleString("id-ID"),
      l: t("Jangkauan komunitas", "Community reach"),
      s: "@lensanuswantara",
      ok: true,
    },
    {
      v: audience.ownPosts.toLocaleString("id-ID"),
      l: t("Unggahan sendiri", "His own posts"),
      s: t("dua akun digabung", "two accounts combined"),
      ok: true,
    },
    { v: "485", l: t("Karya di Tezos", "Works on Tezos"), s: "objkt", ok: true },
    { v: "175,9 rb", l: t("Tontonan terbanyak", "Most-watched"), s: t("satu unggahan TikTok", "a single TikTok post"), ok: true },
    { v: null, l: t("Kanal YouTube", "YouTube channel"), s: t("ditutup, tanpa arsip", "closed, no archive"), ok: false },
  ];

  return (
    <section className="rule mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <p className="mono-label" style={{ color: "var(--accent)" }}>
        {t("Audiens", "Audience")}
      </p>
      <h2 className="mt-5 max-w-2xl text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
        {t("Angka yang bisa dipastikan, dan yang belum", "The numbers that can be verified, and the one that cannot")}
      </h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {kartu.map((k) => (
          <Reveal key={k.l + k.s}>
            <div
              className="rounded-xl p-6"
              style={{ border: "1px solid var(--line)", background: k.ok ? "var(--surface)" : "transparent" }}
            >
              <p className="text-[30px] font-semibold leading-none tracking-[-0.03em]">
                {k.v ?? <span style={{ color: "var(--text-faint)" }}>—</span>}
              </p>
              <p className="mt-3.5 text-[14px]">{k.l}</p>
              <p className="mt-1 font-mono text-[10.5px] tracking-[0.13em]" style={{ color: "var(--text-faint)" }}>
                {k.ok ? k.s.toUpperCase() : t("BELUM TERKONFIRMASI", "NOT CONFIRMED")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-[13.5px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
        {t(
          "Angka Instagram terbaca dari tag pratinjau tautan di tiap halaman profil. Angka TikTok berasal dari widget embed kreator resmi — kanal penyematan yang disediakan TikTok untuk dipasang di situs luar, sehingga datanya terbuka tanpa perlu masuk akun. Jumlah karya Tezos dihitung langsung dari rantai. Yang tersisa kosong hanya satu: kanal YouTube, yang sudah ditutup platform. Wayback Machine, SocialBlade, dan mesin pencari tidak menyimpan satu pun rekaman, jadi kolomnya sengaja dibiarkan bertanda, bukan diisi perkiraan.",
          "The Instagram numbers were read from the link-preview tags on each profile page. The TikTok numbers come from the official creator embed widget — the channel TikTok provides for outside sites, so the data is open without signing in. The Tezos count is read straight off the chain. Only one column stays empty: the YouTube channel, which the platform closed. The Wayback Machine, SocialBlade, and ordinary search engines hold no record of it, so the column is deliberately left marked rather than filled with a guess.",
        )}
      </p>
    </section>
  );
}

/** Kutipan bio GitHub di kaki halaman riwayat. */
export function KutipanBio() {
  const t = useTeks();
  return (
    <section className="rule mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <p className="max-w-3xl text-[clamp(1.3rem,2.7vw,1.9rem)] leading-[1.4]" style={{ fontFamily: "var(--font-display)" }}>
          &ldquo;{profile.githubBio}&rdquo;
        </p>
        <p className="mt-5 mono-label">{t("Bio GitHub, per Agustus 2026", "GitHub bio, as of August 2026")}</p>
      </Reveal>
    </section>
  );
}
