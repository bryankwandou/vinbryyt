"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem, Counter } from "./motion";
import { socials, audience, gamingBio } from "@/data/profile";

function ringkas(n: number) {
  if (n >= 1000) return { angka: Math.round(n / 100) / 10, akhiran: " rb" };
  return { angka: n, akhiran: "" };
}

/**
 * Sematan profil kreator resmi dari TikTok. Berkas embed.js dimuat sekali,
 * lalu TikTok mengganti blockquote di bawah dengan kartu profil sungguhan.
 * Bila skripnya gagal termuat, blockquote-nya tetap menjadi tautan yang bisa
 * diklik, jadi tidak ada bagian yang kosong.
 */
function TikTokEmbed() {
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;
    const s = document.createElement("script");
    s.src = "https://www.tiktok.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
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
  );
}

export function Presence() {
  const akun = socials.filter((s) => s.metrics?.followers);

  return (
    <section className="rule mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="mono-label" style={{ color: "var(--accent)" }}>
          04
        </span>
        <span className="mono-label">Kehadiran daring</span>
        <span className="h-px flex-1" style={{ background: "var(--line)" }} />
      </div>

      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <h2 className="max-w-xl text-[clamp(1.9rem,4.2vw,3rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
              Lima ribu unggahan sebelum baris kode pertama
            </h2>
            <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
              Kebiasaan menerbitkan sesuatu tiap hari terbentuk jauh sebelum ada repositori
              untuk dipamerkan. Angka di bawah dibaca langsung dari tag pratinjau masing-masing
              halaman profil, bukan diketik manual.
            </p>
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
                          PENGIKUT
                        </p>
                      </div>
                      {s.metrics?.posts && (
                        <div className="text-right">
                          <p className="text-[15px] font-medium tabular-nums" style={{ color: "var(--text-dim)" }}>
                            {s.metrics.posts.toLocaleString("id-ID")}
                          </p>
                          <p className="mt-1 font-mono text-[9.5px] tracking-[0.13em]" style={{ color: "var(--text-faint)" }}>
                            UNGGAHAN
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
              <p className="mono-label">Bio @nayrbryan_gaming, disalin apa adanya</p>
              <p className="mt-3 text-[14.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                &ldquo;{gamingBio}&rdquo;
              </p>
              <p className="mt-4 text-[13px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
                Baris penutupnya menyebut 2010 — lebih awal dari perkiraan yang beredar
                sebelumnya. Dibiarkan sebagai kutipan supaya pembaca bisa menimbang sendiri.
              </p>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.1}>
            <p className="mono-label mb-4">Profil TikTok, dimuat langsung</p>
            <div
              className="overflow-hidden rounded-2xl p-4"
              style={{ border: "1px solid var(--line)", background: "var(--surface)" }}
            >
              <TikTokEmbed />
            </div>
            <p className="mt-4 text-[13px] leading-relaxed" style={{ color: "var(--text-faint)" }}>
              Kartu di atas datang dari TikTok sendiri lewat oEmbed, jadi isinya selalu ikut
              berubah bila profilnya diperbarui. Jumlah pengikut TikTok tidak dicantumkan di
              tempat lain pada situs ini karena halaman profilnya menolak pembaca otomatis —
              yang tampil hanya yang bisa dipertanggungjawabkan.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { v: audience.ownPosts, l: "Unggahan sendiri", n: "DUA AKUN DIGABUNG" },
                { v: audience.communityPosts, l: "Unggahan komunitas", n: "@LENSANUSWANTARA" },
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
