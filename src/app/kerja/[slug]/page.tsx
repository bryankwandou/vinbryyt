import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, tracks } from "@/data/projects";
import repos from "@/data/repos.json";
import { Reveal, SplitHeading } from "@/components/motion";
import { ProyekBlurb, Teks } from "@/components/ProyekTeks";

type Repo = {
  repo: string;
  ringkas: string | null;
  topik: string[];
  bintang: number;
  dibuat: string | null;
  disentuh: string | null;
  lisensi: string | null;
};

const arsip = repos as Record<string, Repo>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.blurb,
    openGraph: {
      title: `${p.name} · VinBryYT`,
      description: p.blurb,
      images: [{ url: `/proyek/${p.slug}.webp`, width: 880, height: 440 }],
    },
  };
}

/** Mengubah 2026-08-06 menjadi 6 Agustus 2026. */
function tanggalPanjang(iso: string | null) {
  if (!iso) return null;
  const bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];
  const [t, b, h] = iso.split("-").map(Number);
  return `${h} ${bulan[b - 1]} ${t}`;
}

export default async function ProyekPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const r = arsip[p.slug];
  const jalur = tracks.find((t) => t.id === p.track);
  const sekitar = projects.filter((x) => x.track === p.track && x.slug !== p.slug).slice(0, 3);

  const fakta = [
{ l: "Bahasa", lEn: "Language", v: p.language },
{ l: "Dimulai", lEn: "Started", v: tanggalPanjang(r?.dibuat ?? null) },
{ l: "Perubahan terakhir", lEn: "Last change", v: tanggalPanjang(r?.disentuh ?? null) },
{ l: "Lisensi", lEn: "Licence", v: r?.lisensi ?? null },
  ].filter((f) => f.v);

  /*
    Data terstruktur per proyek. Mesin pencari memakai ini untuk menampilkan
    kartu yang lebih kaya, dan remah roti membuat halaman ini terbaca sebagai
    bagian dari katalog, bukan halaman lepas.
  */
  const skema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        name: p.name,
        description: p.blurb,
        codeRepository: p.repo,
        programmingLanguage: p.language,
        image: `https://vinbryyt.vercel.app/proyek/${p.slug}.webp`,
        ...(r?.dibuat ? { dateCreated: r.dibuat } : {}),
        ...(r?.disentuh ? { dateModified: r.disentuh } : {}),
        ...(r?.lisensi ? { license: r.lisensi } : {}),
        ...(p.live ? { url: p.live } : {}),
        author: {
          "@type": "Person",
          name: "Vincentius Bryan Kwandou",
          url: "https://vinbryyt.vercel.app",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: "https://vinbryyt.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Kerja", item: "https://vinbryyt.vercel.app/kerja" },
          { "@type": "ListItem", position: 3, name: p.name },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skema) }}
      />

      <section className="mx-auto max-w-5xl px-5 pb-12 pt-[140px] sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <Link
              href="/kerja"
              className="link-underline font-mono text-[11px] tracking-[0.14em]"
              style={{ color: "var(--text-faint)" }}
            >
              <Teks id="KATALOG" en="CATALOGUE" />
            </Link>
            <span style={{ color: "var(--text-faint)" }}>/</span>
            <span className="mono-label" style={{ color: "var(--accent)" }}>
<Teks id={jalur?.label ?? p.track} en={jalur?.labelEn ?? p.track} />
            </span>
            {p.live && (
              <span
                className="rounded-full px-2.5 py-1 font-mono text-[9.5px] tracking-[0.12em]"
                style={{
                  background: "color-mix(in srgb, var(--accent) 15%, transparent)",
                  color: "var(--accent)",
                }}
              >
                LIVE
              </span>
            )}
          </div>
        </Reveal>

        <SplitHeading
          text={p.name}
          delay={0.1}
          className="mt-6 text-[clamp(2.1rem,5.4vw,3.8rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        />

        <Reveal delay={0.25}>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
            <ProyekBlurb slug={p.slug} blurb={p.blurb} />
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium"
              style={{ background: "var(--accent)", color: "#0b0b0d" }}
            >
              <Teks id="Baca kodenya" en="Read the code" />
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px]"
                style={{ border: "1px solid var(--line-strong)", color: "var(--text)" }}
              >
                <Teks id="Buka situsnya" en="Open the site" />
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            )}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal delay={0.1}>
          <div
            className="relative aspect-[2/1] overflow-hidden rounded-2xl"
            style={{ border: "1px solid var(--line)" }}
          >
            <Image
              src={`/proyek/${p.slug}.webp`}
              alt={`Pratinjau repositori ${p.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 64rem"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            {r?.ringkas ? (
              <Reveal>
<p className="mono-label"><Teks id="Dari README repositori" en="From the repository README" /></p>
                <blockquote
                  className="mt-4 rounded-xl p-6 text-[15.5px] leading-relaxed"
                  style={{
                    border: "1px solid var(--line)",
                    background: "var(--surface)",
                    color: "var(--text-dim)",
                  }}
                >
                  {r.ringkas}
                </blockquote>
                <p className="mt-3 text-[12.5px]" style={{ color: "var(--text-faint)" }}>
                  <Teks
                    id="Disalin apa adanya dari berkas README, dalam bahasa aslinya. Tidak diringkas ulang supaya yang terbaca tetap kalimat penulisnya sendiri."
                    en="Copied verbatim from the README file, in its original language. It is not re-summarised, so what you read stays the author's own sentence."
                  />
                </p>
              </Reveal>
            ) : (
              <Reveal>
                <p className="mono-label">Dari README repositori</p>
                <p className="mt-4 text-[14.5px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
                  <Teks
                    id="README proyek ini tidak memuat paragraf yang menjelaskan isinya — hanya tabel dan judul. Bagian ini sengaja dikosongkan daripada diisi kalimat yang belum tentu benar."
                    en="This project's README carries no paragraph explaining what it is — only tables and headings. This section is deliberately left empty rather than filled with a sentence that might be wrong."
                  />
                </p>
              </Reveal>
            )}

            {r?.topik?.length > 0 && (
              <Reveal delay={0.1}>
                <div className="mt-10">
                  <p className="mono-label"><Teks id="Topik yang ditandai penulisnya" en="Topics tagged by the author" /></p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.topik.map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-3 py-1.5 font-mono text-[11px]"
                        style={{ border: "1px solid var(--line)", color: "var(--text-dim)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <div>
            <Reveal delay={0.15}>
              <p className="mono-label"><Teks id="Catatan repositori" en="Repository record" /></p>
              <dl className="mt-4 overflow-hidden rounded-xl" style={{ border: "1px solid var(--line)" }}>
                {fakta.map((f, i) => (
                  <div
                    key={f.l}
                    className="flex items-baseline justify-between gap-4 px-4 py-3.5"
                    style={{ borderTop: i ? "1px solid var(--line)" : undefined }}
                  >
                    <dt className="font-mono text-[10px] tracking-[0.13em]" style={{ color: "var(--text-faint)" }}>
<Teks id={f.l.toUpperCase()} en={f.lEn.toUpperCase()} />
                    </dt>
                    <dd className="text-right text-[13.5px]">{f.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-[12.5px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
                <Teks id="Tanggal dibaca dari metadata GitHub, bukan diketik manual." en="The dates are read from GitHub metadata, not typed by hand." />
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {sekitar.length > 0 && (
        <section className="rule mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <p className="mono-label"><Teks id={`Yang lain di jalur ${jalur?.label.toLowerCase()}`} en={`More in ${jalur?.labelEn.toLowerCase()}`} /></p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {sekitar.map((s) => (
              <Link
                key={s.slug}
                href={`/kerja/${s.slug}`}
                className="group rounded-xl p-5 transition-transform hover:-translate-y-1"
                style={{ border: "1px solid var(--line)", background: "var(--surface)" }}
              >
                <p className="font-mono text-[10px] tracking-[0.14em]" style={{ color: "var(--text-faint)" }}>
                  {s.language.toUpperCase()}
                </p>
                <p className="mt-2 text-[15px] font-medium transition-colors group-hover:text-[var(--accent)]">
                  {s.name}
                </p>
                <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  <ProyekBlurb slug={s.slug} blurb={s.blurb} />
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
