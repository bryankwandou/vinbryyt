import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal, Stagger, StaggerItem, Counter, Parallax, SplitHeading } from "@/components/motion";
import { Presence } from "@/components/Presence";
import { featured } from "@/data/projects";
import { disciplines } from "@/data/timeline";
import { profile, audience } from "@/data/profile";

function SectionLabel({ children, index }: { children: React.ReactNode; index: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="mono-label" style={{ color: "var(--accent)" }}>
        {index}
      </span>
      <span className="mono-label">{children}</span>
      <span className="h-px flex-1" style={{ background: "var(--line)" }} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* ---------------------------------------------------------------- */}
      {/*  Pernyataan                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
        <SectionLabel index="01">Ringkasnya</SectionLabel>
        <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <p
              className="text-[clamp(1.5rem,3.1vw,2.4rem)] leading-[1.32] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-6 pt-2">
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                Yang saya kerjakan berputar pada satu pertanyaan: bagaimana membuktikan bahwa sebuah
                tindakan benar-benar terjadi, tanpa harus meminta orang percaya begitu saja. Di kode,
                jawabannya berupa tanda terima yang bisa diperiksa ulang. Di kamera, jawabannya berupa
                rekaman mentah.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                Semua yang tercantum di halaman ini bisa ditelusuri. Tautan repositori menuju kode
                sungguhan; tautan live menuju situs yang berjalan hari ini.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {profile.roles.map((r) => (
                  <span
                    key={r}
                    className="rounded-full px-3.5 py-1.5 text-[12.5px]"
                    style={{ border: "1px solid var(--line)", color: "var(--text-dim)" }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Angka                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="rule">
        <div className="mx-auto grid max-w-6xl gap-px px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {[
            { n: 60.3, suffix: " rb", label: "Pengikut TikTok", note: "@vinbryyt, sejak 2018" },
            { n: 127, suffix: "", label: "Repositori publik", note: "GitHub API" },
            { n: 20, suffix: "+", label: "Produk dengan tautan live", note: "Terverifikasi" },
            {
              n: Math.round(audience.communityFollowers / 100) / 10,
              suffix: " rb",
              label: "Jangkauan komunitas foto",
              note: "@lensanuswantara",
            },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="py-12">
                <p className="text-[clamp(2.4rem,4.6vw,3.4rem)] font-semibold leading-none tracking-[-0.04em]">
                  {s.n % 1 === 0 ? <Counter to={s.n} /> : s.n.toString().replace(".", ",")}
                  <span style={{ color: "var(--accent)" }}>{s.suffix}</span>
                </p>
                <p className="mt-4 text-[14.5px]" style={{ color: "var(--text)" }}>
                  {s.label}
                </p>
                <p className="mt-1 font-mono text-[10.5px] tracking-[0.13em]" style={{ color: "var(--text-faint)" }}>
                  {s.note.toUpperCase()}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Pilihan kerja                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="rule mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
        <SectionLabel index="02">Pilihan kerja</SectionLabel>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SplitHeading
            as="h2"
            text="Tujuh yang paling layak dibuka lebih dulu"
            className="max-w-2xl text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.06] tracking-[-0.03em]"
          />
          <Link href="/kerja" className="link-underline text-[14.5px]" style={{ color: "var(--accent)" }}>
            Katalog lengkapnya →
          </Link>
        </div>

        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Bidang kerja                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="rule mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
        <SectionLabel index="03">Bidang kerja</SectionLabel>
        <div className="grid gap-x-14 gap-y-2 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Parallax distance={28}>
              <p
                className="sticky top-32 text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.22] tracking-[-0.025em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Lima jalur yang saya tekuni, dan alasan kenapa satu sama lain saling mendukung.
              </p>
            </Parallax>
          </Reveal>

          <div>
            {disciplines.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <div className="group py-8" style={{ borderTop: "1px solid var(--line)" }}>
                  <div className="flex items-baseline gap-5">
                    <span className="mono-label w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex-1">
                      <h3 className="text-[20px] font-medium tracking-tight transition-colors group-hover:text-[var(--accent)]">
                        {d.title}
                      </h3>
                      <p className="mt-2.5 text-[14.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                        {d.body}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {d.items.map((it) => (
                          <span
                            key={it}
                            className="rounded px-2 py-1 font-mono text-[10.5px] tracking-wide"
                            style={{ background: "color-mix(in srgb, var(--text) 6%, transparent)", color: "var(--text-faint)" }}
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Presence />

      {/* ---------------------------------------------------------------- */}
      {/*  Ajakan                                                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="rule">
        <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-40">
          <Reveal>
            <div className="text-center">
              <p className="mono-label">Ada yang mau dikerjakan bareng?</p>
              <h2 className="mx-auto mt-7 max-w-3xl text-[clamp(2.1rem,5.4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                Kirim pesan. Balasannya biasanya
                <span style={{ color: "var(--accent)" }}> tidak sampai sehari</span>.
              </h2>
              <div className="mt-11 flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontak"
                  className="rounded-full px-7 py-3.5 text-[14.5px] font-medium"
                  style={{ background: "var(--accent)", color: "#0b0b0d" }}
                >
                  Cara menghubungi
                </Link>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full px-7 py-3.5 text-[14.5px]"
                  style={{ border: "1px solid var(--line-strong)", color: "var(--text)" }}
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
