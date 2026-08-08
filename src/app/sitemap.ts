import type { MetadataRoute } from "next";

const SITE = "https://vinbryyt.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/kerja`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/riwayat`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/kontak`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
