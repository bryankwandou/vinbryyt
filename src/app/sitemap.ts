import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import repos from "@/data/repos.json";

const SITE = "https://vinbryyt.vercel.app";

type Repo = { disentuh: string | null };
const arsip = repos as Record<string, Repo>;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const halamanUtama: MetadataRoute.Sitemap = [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/kerja`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/galeri`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/riwayat`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/kontak`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  /*
    Tiap proyek punya halaman sendiri. Tanggal ubah terakhirnya memakai tanggal
    perubahan repositori yang sesungguhnya, bukan waktu situs dibangun — mesin
    pengindeks jadi tahu mana yang benar-benar bergerak.
  */
  const halamanProyek: MetadataRoute.Sitemap = projects.map((p) => {
    const disentuh = arsip[p.slug]?.disentuh;
    return {
      url: `${SITE}/kerja/${p.slug}`,
      lastModified: disentuh ? new Date(disentuh) : now,
      changeFrequency: "monthly" as const,
      priority: p.featured ? 0.75 : 0.6,
    };
  });

  return [...halamanUtama, ...halamanProyek];
}
