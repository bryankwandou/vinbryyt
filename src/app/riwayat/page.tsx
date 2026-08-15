import type { Metadata } from "next";
import { Reveal, SplitHeading, Parallax } from "@/components/motion";
import { TimelineRail } from "@/components/TimelineRail";
import { RiwayatCV } from "@/components/RiwayatCV";
import { certifications } from "@/data/timeline";
import { profile, audience, tiktok } from "@/data/profile";

export const metadata: Metadata = {
  title: "Riwayat",
  description:
    "Perjalanan Vincentius Bryan Kwandou dari kamera pertama sampai rel pembayaran Solana — disusun dari sumber yang bisa diperiksa.",
};

export default function RiwayatPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-[160px] sm:px-8">
        <p className="mono-label" style={{ color: "var(--accent)" }}>
          Riwayat
        </p>
        <SplitHeading
          text="Bagaimana sampai di titik ini"
          className="mt-6 max-w-3xl text-[clamp(2.2rem,5.6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={0.15}>
            <p
              className="text-[clamp(1.25rem,2.5vw,1.7rem)] leading-[1.4]"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Nama VinBryYT dipakai sejak lama sebelum ada satu pun baris kode yang layak
              ditunjukkan. Awalnya untuk menandai video; belakangan ikut menempel pada kode.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div
              className="rounded-xl p-5 text-[13.5px] leading-relaxed"
              style={{ border: "1px solid var(--line)", background: "var(--surface)", color: "var(--text-dim)" }}
            >
              <p className="mono-label mb-3">Catatan tentang sumber</p>
              Butir bertanda <em>belum terkonfirmasi</em> berasal dari keterangan pribadi yang tidak
              bisa dicocokkan ke arsip terbuka — TikTok dan Instagram menutup halamannya dari
              pembacaan otomatis. Butir lain menyertakan asal datanya.
            </div>
          </Reveal>
        </div>
      </section>

      <TimelineRail />

      <RiwayatCV />

      {/* Sertifikasi */}
      <section className="rule mx-auto max-w-6xl px-5 py-28 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Parallax distance={24}>
            <div className="sticky top-32">
              <p className="mono-label" style={{ color: "var(--accent)" }}>
                Pelatihan
              </p>
              <h2
                className="mt-5 text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.15] tracking-[-0.025em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Sembilan program yang diselesaikan
              </h2>
              <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                Bukan koleksi lencana. Tiap program dipilih untuk menutup satu lubang tertentu, lalu
                langsung dipakai di proyek berikutnya.
              </p>
            </div>
          </Parallax>

          <ul>
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.045}>
                <li
                  className="group flex items-baseline justify-between gap-6 py-5"
                  style={{ borderTop: "1px solid var(--line)" }}
                >
                  <div>
                    <p className="text-[16px] font-medium transition-colors group-hover:text-[var(--accent)]">
                      {c.name}
                    </p>
                    <p className="mt-1 text-[13px]" style={{ color: "var(--text-faint)" }}>
                      {c.issuer}
                    </p>
                  </div>
                  <span className="font-mono text-[12px] shrink-0" style={{ color: "var(--text-faint)" }}>
                    {c.year}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Angka audiens yang jujur */}
      <section className="rule mx-auto max-w-6xl px-5 py-28 sm:px-8">
        <p className="mono-label" style={{ color: "var(--accent)" }}>
          Audiens
        </p>
        <h2 className="mt-5 max-w-2xl text-[clamp(1.7rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
          Angka yang bisa dipastikan, dan yang belum
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { v: tiktok.followersLabel, l: "Pengikut TikTok", s: "@vinbryyt", ok: true },
            { v: tiktok.likesLabel, l: "Suka TikTok", s: "@vinbryyt", ok: true },
            { v: audience.igGamingFollowers.toLocaleString("id-ID"), l: "Pengikut Instagram", s: "@nayrbryan_gaming", ok: true },
            { v: audience.igPersonalFollowers.toLocaleString("id-ID"), l: "Pengikut Instagram", s: "@bryan_kwandou", ok: true },
            { v: audience.communityFollowers.toLocaleString("id-ID"), l: "Jangkauan komunitas", s: "@lensanuswantara", ok: true },
            { v: audience.ownPosts.toLocaleString("id-ID"), l: "Unggahan sendiri", s: "dua akun digabung", ok: true },
            { v: "175,9 rb", l: "Tontonan terbanyak", s: "satu unggahan TikTok", ok: true },
            { v: null, l: "Kanal YouTube", s: "ditutup, tanpa arsip", ok: false },
          ].map((k) => (
            <Reveal key={k.l}>
              <div
                className="rounded-xl p-6"
                style={{ border: "1px solid var(--line)", background: k.ok ? "var(--surface)" : "transparent" }}
              >
                <p className="text-[30px] font-semibold leading-none tracking-[-0.03em]">
                  {k.v ?? <span style={{ color: "var(--text-faint)" }}>—</span>}
                </p>
                <p className="mt-3.5 text-[14px]">{k.l}</p>
                <p className="mt-1 font-mono text-[10.5px] tracking-[0.13em]" style={{ color: "var(--text-faint)" }}>
                  {k.ok ? k.s.toUpperCase() : "BELUM TERKONFIRMASI"}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-[13.5px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
          Angka Instagram terbaca dari tag pratinjau tautan di tiap halaman profil. Angka TikTok
          berasal dari widget embed kreator resmi — kanal penyematan yang disediakan TikTok untuk
          dipasang di situs luar, sehingga datanya terbuka tanpa perlu masuk akun. Keduanya diambil
          pada 8 Agustus 2026. Yang tersisa kosong hanya satu: kanal YouTube. Handel{" "}
          <code className="font-mono">@vinbryyt</code> dan <code className="font-mono">@VinBryYT</code>{" "}
          sama-sama mengembalikan 404 karena kanalnya sudah ditutup platform. Wayback Machine,
          SocialBlade, dan mesin pencari tidak menyimpan satu pun rekaman, jadi tidak ada angka yang
          bisa dipulihkan — kolomnya sengaja dibiarkan bertanda, bukan diisi perkiraan.
        </p>
      </section>

      <section className="rule mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="max-w-3xl text-[clamp(1.3rem,2.7vw,1.9rem)] leading-[1.4]" style={{ fontFamily: "var(--font-display)" }}>
            &ldquo;{profile.githubBio}&rdquo;
          </p>
          <p className="mt-5 mono-label">Bio GitHub, per Agustus 2026</p>
        </Reveal>
      </section>
    </>
  );
}
