/**
 * Mengunduh kartu pratinjau yang dirender GitHub untuk tiap repositori, lalu
 * menyimpannya sebagai WebP di public/proyek/. Dijalankan sesekali saja; berkas
 * hasilnya ikut masuk Git supaya halaman tidak pernah menembak GitHub saat
 * dikunjungi — bebas dari batas laju, dan jauh lebih ringan dimuat.
 *
 *   node scripts/fetch-previews.mjs
 */

import sharp from "sharp";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/data/projects.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tujuan = join(root, "public", "proyek");
mkdirSync(tujuan, { recursive: true });

const jeda = (ms) => new Promise((r) => setTimeout(r, ms));

/** Mengambil nama repositori dari URL-nya. */
function namaRepo(url) {
  const m = url.match(/github\.com\/[^/]+\/([^/?#]+)/);
  return m ? m[1] : null;
}

let baru = 0;
let lewat = 0;
let gagal = [];

for (const p of projects) {
  const repo = namaRepo(p.repo);
  if (!repo) continue;

  const keluar = join(tujuan, `${p.slug}.webp`);
  if (existsSync(keluar)) {
    lewat++;
    continue;
  }

  let berhasil = false;
  // GitHub membatasi laju; coba beberapa kali dengan jeda yang melebar
  for (let percobaan = 0; percobaan < 4 && !berhasil; percobaan++) {
    try {
      const r = await fetch(`https://opengraph.githubassets.com/1/bryankwandou/${repo}`, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36",
        },
      });

      if (r.status === 429) {
        await jeda(3000 * (percobaan + 1));
        continue;
      }
      if (!r.ok) throw new Error(`HTTP ${r.status}`);

      const buf = Buffer.from(await r.arrayBuffer());
      const webp = await sharp(buf).resize(880, 440, { fit: "cover" }).webp({ quality: 78 }).toBuffer();
      writeFileSync(keluar, webp);
      console.log(`${p.slug.padEnd(28)} ${(webp.length / 1024).toFixed(0)} KB`);
      baru++;
      berhasil = true;
    } catch (e) {
      if (percobaan === 3) gagal.push(`${p.slug}: ${e.message}`);
      else await jeda(2500);
    }
  }

  await jeda(1200);
}

console.log(`\nbaru ${baru}, sudah ada ${lewat}, gagal ${gagal.length}`);
if (gagal.length) console.log(gagal.join("\n"));
