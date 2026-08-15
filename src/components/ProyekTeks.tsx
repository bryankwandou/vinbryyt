"use client";

import { useTeks } from "@/lib/bahasa";
import { blurbEn } from "@/data/projects-en";

/** Deskripsi proyek yang ikut berganti bahasa. */
export function ProyekBlurb({ slug, blurb }: { slug: string; blurb: string }) {
  const t = useTeks();
  return <>{t(blurb, blurbEn[slug] ?? blurb)}</>;
}

/** Sepasang teks umum di halaman rinci proyek. */
export function Teks({ id, en }: { id: string; en: string }) {
  const t = useTeks();
  return <>{t(id, en)}</>;
}
