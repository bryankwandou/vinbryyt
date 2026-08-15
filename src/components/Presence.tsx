"use client";

import { useEffect, useRef } from "react";
import { Reveal, Stagger, StaggerItem, Counter } from "./motion";
import { socials, audience, gamingBio, tiktok } from "@/data/profile";
import { useTeks } from "@/lib/bahasa";

function ringkas(n: number) {
  if (n >= 1000) return { angka: Math.round(n / 100) / 10, akhiran: " rb" };
  return { angka: n, akhiran: "" };
}

/**
 * Sematan profil kreator resmi dari TikTok.
 *
 * Skripnya sengaja baru dipanggil ketika bagian ini benar-benar mendekati
 * layar. Sekali termuat, iframe milik TikTok terus berjalan dan tidak pernah
 * membiarkan halaman benar-benar diam, jadi tidak ada gunanya menanggung
 * beban itu sejak pengunjung baru membuka beranda.
 *
 * Bila skripnya gagal termuat, blockquote di bawah tetap berupa tautan yang
 * bisa diklik, jadi tidak ada bagian yang kosong.
 */
function TikTokEmbed() {
  const wadah = useRef<HTMLDivElement>(null);
  const sudah = useRef(false);

  useEffect(() => {
    const el = wadah.current;
    if (!el) return;

    const muat = () => {
      if (sudah.current) return;
      sudah.current = true;
      const s = document.createElement("script");
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    };

    if (!("IntersectionObserver" in window)) {
      muat();
      return;
    }

    const pengamat = new IntersectionObserver(
      (masukan) => {
        if (masukan.some((m) => m.isIntersecting)) {
          muat();
          pengamat.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    pengamat.observe(el);
    return () => pengamat.disconnect();
  }, []);

  return (
    <div ref={wadah}>
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@vinbryyt"
      data-unique-id="vinbryyt"
      data-embed-from="oembed"
      data-embed-type="creator"
      style={{ maxWidth: 780, minWidth: 288, margin: 0 }}
    >
      <section>
        <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@vinbryyt?refer=creator_embed">
          @vinbryyt
        </a>
      </section>
      </blockquote>
    </div>
  );
}

export function Presence() {
  const t = useTeks();
  const akun = socials.filter((s) => s.metrics?.followers);

  return (
    <section className="rule mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="mono-label" style={{ color: "var(--accent)" }}>
          04
        </span>
        <span className="mono-label">{t("Kehadiran daring", "Online presence")}</span>
        <span className="h-px flex-1" style={{ background: "var(--line)" }} />
      </div>

      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <h2 className="max-w-xl text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
              {t(
                "Enam puluh ribu penonton sebelum baris kode pertama",
                "Sixty thousand viewers before the first line of code",
              )}
            </h2>
            <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
              {t(
                `Akun TikTok berdiri ${tiktok.established} dan sejak itu tidak pernah benar-benar berhenti. Angka di bawah dibaca langsung dari kanal resmi masing-masing platform, bukan diketik ulang dari ingatan.`,
                `The TikTok account opened ${tiktok.established} and has not really stopped since. The numbers below are read straight from each platform's own official channel, not retyped from memory.`,
              )}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="mt-8 overflow-hidden rounded-xl"
              style={{ border: "1px solid var(--line-strong)" }}
            >
              <div className="grid grid-cols-3">
                {[
                  { v: tiktok.followersLabel, l: t("Pengikut", "Followers") },
                  { v: tiktok.likesLabel, l: t("Suka", "Likes") },
                  { v: tiktok.following.toString(), l: t("Mengikuti", "Following") },
                ].map((k, i) => (
                  <div
                    key={k.l}
                    className="p-5"
                    style={{ borderLeft: i ? "1px solid var(--line)" : undefined }}
                  >
                    <p className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-none tracking-[-0.035em]">
                      {k.v}
                    </p>
                    <p className="mt-2.5 font-mono text-[9.5px] tracking-[0.13em]" style={{ color: "var(--text-faint)" }}>
                      {k.l.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5" style={{ borderTop: "1px solid var(--line)" }}>
                <p className="mono-label mt-4">TikTok · @vinbryyt · {t("berdiri", "opened")} {tiktok.established}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tiktok.topVideos.map((v, i) => (
                    <a
                      key={v.id}
                      href={`https://www.tiktok.com/@vinbryyt/video/${v.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full px-3.5 py-2.5 font-mono text-[11px] transition-colors hover:text-[var(--accent)]"
                      style={{ border: "1px solid var(--line)", color: "var(--text-dim)" }}
                    >
                      #{i + 1} · {v.label} {t("tontonan", "views")}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {akun.map((s) => {
              const f = ringkas(s.metrics!.followers!);
              return (
                <StaggerItem key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col justify-between rounded-xl p-5 transition-transform hover:-translate-y-1"
                    style={{ border: "1px solid var(--line)", background: "var(--surface)" }}
                  >
                    <div>
                      <p className="mono-label">{s.label}</p>
                      <p className="mt-1.5 text-[15px] font-medium transition-colors group-hover:text-[var(--accent)]">
                        {s.handle}
                      </p>
                    </div>
                    <div className="mt-6 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-[26px] font-semibold leading-none tracking-[-0.03em]">
                          {f.akhiran ? (
                            <>
                              {f.angka.toString().replace(".", ",")}
                              <span style={{ color: "var(--accent)" }}>{f.akhiran}</span>
                            </>
                          ) : (
                            <Counter to={f.angka} />
                          )}
                        </p>
                        <p className="mt-1 font-mono text-[9.5px] tracking-[0.13em]" style={{ color: "var(--text-faint)" }}>
                          {t("PENGIKUT", "FOLLOWERS")}
                        </p>
                      </div>
                      {s.metrics?.posts && (
                        <div className="text-right">
                          <p className="text-[15px] font-medium tabular-nums" style={{ color: "var(--text-dim)" }}>
                            {s.metrics.posts.toLocaleString("id-ID")}
                          </p>
                          <p className="mt-1 font-mono text-[9.5px] tracking-[0.13em]" style={{ color: "var(--text-faint)" }}>
                            {t("UNGGAHAN", "POSTS")}
                          </p>
                        </div>
                      )}
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.15}>
            <div
              className="mt-6 rounded-xl p-5"
              style={{ border: "1px solid var(--line)", background: "var(--surface)" }}
            >
              <p className="mono-label">{t("Bio @nayrbryan_gaming, disalin apa adanya", "The @nayrbryan_gaming bio, copied verbatim")}</p>
              <p className="mt-3 text-[14.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                &ldquo;{gamingBio}&rdquo;
              </p>
              <p className="mt-4 text-[13px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
                {t(
                  "Baris penutupnya menyebut 2010 — lebih awal dari perkiraan yang beredar sebelumnya. Dibiarkan sebagai kutipan supaya pembaca bisa menimbang sendiri.",
                  "Its closing line says 2010 — earlier than the figure that had been circulating. It is left as a quotation so the reader can weigh it themselves.",
                )}
              </p>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.1}>
            <p className="mono-label mb-4">{t("Profil TikTok, dimuat langsung", "TikTok profile, loaded live")}</p>
            <div
              className="overflow-hidden rounded-2xl p-4"
              style={{ border: "1px solid var(--line)", background: "var(--surface)" }}
            >
              <TikTokEmbed />
            </div>
            <p className="mt-4 text-[13px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
              {t(
                "Kartu di atas datang dari TikTok sendiri lewat oEmbed, jadi isinya ikut berubah begitu profilnya diperbarui — termasuk angka yang tertulis di sebelah kiri. Bio akunnya berbunyi:",
                "The card above comes from TikTok itself through oEmbed, so its contents change the moment the profile does — including the numbers on the left. The account bio reads:",
              )}{" "}
              &ldquo;{tiktok.bio}&rdquo;.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { v: audience.ownPosts, l: t("Unggahan sendiri", "His own posts"), n: t("DUA AKUN DIGABUNG", "TWO ACCOUNTS COMBINED") },
                { v: audience.communityPosts, l: t("Unggahan komunitas", "Community posts"), n: "@LENSANUSWANTARA" },
              ].map((k) => (
                <div
                  key={k.l}
                  className="rounded-xl p-5"
                  style={{ border: "1px solid var(--line)" }}
                >
                  <p className="text-[28px] font-semibold leading-none tracking-[-0.03em]">
                    <Counter to={k.v} />
                  </p>
                  <p className="mt-3 text-[13.5px]">{k.l}</p>
                  <p className="mt-1 font-mono text-[9.5px] tracking-[0.13em]" style={{ color: "var(--text-faint)" }}>
                    {k.n}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
