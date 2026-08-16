/**
 * Menarik SELURUH repositori publik, bukan hanya yang terpilih. Untuk tiap
 * repositori: metadata, README, dan kartu pratinjau yang dirender GitHub.
 *
 * Hasilnya ditulis ke src/data/repos-all.json dan gambarnya ke public/proyek/.
 *
 *   node scripts/fetch-all-repos.mjs
 */

import sharp from "sharp";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const AKUN = "bryankwandou";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tujuanGambar = join(root, "public", "proyek");
mkdirSync(tujuanGambar, { recursive: true });

const UA = { "User-Agent": "vinbryyt-site-builder" };
const jeda = (ms) => new Promise((r) => setTimeout(r, ms));

/** Menjadikan nama repositori sebagai slug yang aman untuk URL dan berkas. */
const keSlug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// ---- daftar seluruh repositori ---------------------------------------------
const repo = [];
for (let hal = 1; hal <= 4; hal++) {
  const r = await fetch(
    `https://api.github.com/users/${AKUN}/repos?per_page=100&page=${hal}&sort=pushed`,
    { headers: { ...UA, Accept: "application/vnd.github+json" } },
  );
  if (!r.ok) {
    console.error(`daftar gagal: HTTP ${r.status}`);
    break;
  }
  const batch = await r.json();
  // fork tetap diambil supaya jumlahnya persis sama dengan yang tertulis di GitHub,
  // tetapi ditandai supaya pembaca tahu itu bukan karya sendiri
  repo.push(...batch.filter((x) => !x.archived));
  if (batch.length < 100) break;
}
console.log(`repositori publik (bukan fork): ${repo.length}\n`);

/** Mengambil paragraf penjelas dari README. Aturan sama seperti fetch-readmes. */
function intisari(md) {
  if (!md) return null;
  const bersihAwal = md
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/^\s*\[!\[.*$/gm, "")
    .replace(/^\s*!\[.*$/gm, "")
    .replace(/<[^>]+>/g, " ");

  const potong = bersihAwal.search(/^##\s/m);
  return dariBlok(potong > 0 ? bersihAwal.slice(0, potong) : bersihAwal) || dariBlok(bersihAwal);
}

function dariBlok(md) {
  const paragraf = [];
  let kini = [];
  for (const b of md.split("\n")) {
    const t = b.trim();
    if (t.startsWith(">")) {
      if (kini.length) paragraf.push(kini.join(" ")), (kini = []);
      const isi = t.replace(/^>+\s*/, "").trim();
      if (isi) paragraf.push(isi);
      continue;
    }
    if (!t || t.startsWith("#") || t.startsWith("|") || /^[-*+]\s/.test(t)) {
      if (kini.length) paragraf.push(kini.join(" ")), (kini = []);
      continue;
    }
    kini.push(t);
  }
  if (kini.length) paragraf.push(kini.join(" "));

  const bersih = (s) =>
    s
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_`]/g, "")
      .replace(/^(one[- ]liner|summary|ringkasan|tl;?dr|overview|about)\s*:\s*/i, "")
      .replace(/\s*(live demo|demo|site|source|repo|website)\s*:\s*\S+.*$/i, "")
      .replace(/\s*https?:\/\/\S+\s*$/i, "")
      .replace(/\s+/g, " ")
      .replace(/\s*:\s*$/, ".")
      .trim();

  const layak = (c) =>
    c.length >= 70 &&
    /[.!?]$/.test(c) &&
    !/^\d+[.)]\s/.test(c) &&
    !/^(planned|status|note|catatan|roadmap|coming soon|set\s|your\s)/i.test(c) &&
    !/\b(API[_ ]?KEY|RPC[_ ]?URL|env var|environment variable)\b/i.test(c) &&
    !/\b(devnet test tokens?|no real funds|test tokens only)\b/i.test(c) &&
    !/\b(assets?\/|\.png|\.svg|\.jpg|custom logo)\b/i.test(c) &&
    !/^https?:\/\//.test(c);

  for (const p of paragraf) {
    const c = bersih(p);
    if (layak(c)) return potongRapi(c, 400);
  }
  return null;
}

function potongRapi(s, maks) {
  if (s.length <= maks) return s;
  const p = s.slice(0, maks);
  const t = Math.max(p.lastIndexOf(". "), p.lastIndexOf("! "), p.lastIndexOf("? "));
  return t > maks * 0.5 ? p.slice(0, t + 1) : p.slice(0, p.lastIndexOf(" ")) + "…";
}

// ---- kerjakan tiap repositori ----------------------------------------------
const keluar = [];
let gambarBaru = 0;
let gambarAda = 0;
let gambarGagal = 0;

for (const x of repo) {
  const slug = keSlug(x.name);

  // README
  let teks = null;
  for (const cabang of [x.default_branch, "main", "master"]) {
    if (teks) break;
    for (const nama of ["README.md", "readme.md", "Readme.md"]) {
      try {
        const r = await fetch(
          `https://raw.githubusercontent.com/${AKUN}/${x.name}/${cabang}/${nama}`,
          { headers: UA },
        );
        if (r.ok) {
          teks = await r.text();
          break;
        }
      } catch {}
    }
  }

  // kartu pratinjau
  const jalurGambar = join(tujuanGambar, `${slug}.webp`);
  let punyaGambar = existsSync(jalurGambar);
  if (punyaGambar) {
    gambarAda++;
  } else {
    for (let coba = 0; coba < 5 && !punyaGambar; coba++) {
      try {
        const r = await fetch(`https://opengraph.githubassets.com/1/${AKUN}/${x.name}`, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36",
          },
        });
        if (r.status === 429) {
          await jeda(4000 * (coba + 1));
          continue;
        }
        if (!r.ok) break;
        const buf = Buffer.from(await r.arrayBuffer());
        await sharp(buf).resize(880, 440, { fit: "cover" }).webp({ quality: 78 }).toFile(jalurGambar);
        punyaGambar = true;
        gambarBaru++;
      } catch {
        await jeda(2500);
      }
    }
    if (!punyaGambar) gambarGagal++;
  }

  keluar.push({
    slug,
    nama: x.name,
    deskripsi: x.description || null,
    ringkas: intisari(teks),
    bahasa: x.language || "Lainnya",
    topik: x.topics || [],
    bintang: x.stargazers_count,
    dibuat: x.created_at?.slice(0, 10) || null,
    disentuh: x.pushed_at?.slice(0, 10) || null,
    repo: x.html_url,
    live: x.homepage || null,
    lisensi: x.license?.spdx_id || null,
    fork: !!x.fork,
    gambar: punyaGambar ? `/proyek/${slug}.webp` : null,
  });

  const tanda = punyaGambar ? "gbr" : "  -";
  const ring = keluar.at(-1).ringkas ? "txt" : "  -";
  console.log(`${tanda} ${ring}  ${slug.slice(0, 44).padEnd(44)} ${x.language || ""}`);

  await jeda(900);
}

writeFileSync(join(root, "src", "data", "repos-all.json"), JSON.stringify(keluar, null, 2));

console.log(`\nrepositori    : ${keluar.length}`);
console.log(`gambar baru   : ${gambarBaru}`);
console.log(`gambar sudah  : ${gambarAda}`);
console.log(`gambar gagal  : ${gambarGagal}`);
console.log(`punya ringkasan: ${keluar.filter((x) => x.ringkas).length}`);
console.log(`punya tautan live: ${keluar.filter((x) => x.live).length}`);
