/**
 * Menarik isi README dan metadata tiap repositori, lalu menyimpannya sebagai
 * src/data/repos.json.
 *
 * Metadata diambil sekali lewat REST API (satu permintaan untuk seluruh
 * daftar), sedangkan README diambil dari raw.githubusercontent.com yang tidak
 * ikut menghabiskan jatah permintaan API.
 *
 *   node scripts/fetch-readmes.mjs
 */

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/data/projects.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const UA = { "User-Agent": "vinbryyt-site-builder" };
const jeda = (ms) => new Promise((r) => setTimeout(r, ms));

const namaRepo = (url) => (url.match(/github\.com\/[^/]+\/([^/?#]+)/) || [])[1] || null;

// ---- metadata seluruh repositori dalam satu permintaan ----------------------
const meta = new Map();
for (let hal = 1; hal <= 2; hal++) {
  const r = await fetch(
    `https://api.github.com/users/bryankwandou/repos?per_page=100&page=${hal}&sort=pushed`,
    { headers: { ...UA, Accept: "application/vnd.github+json" } },
  );
  if (!r.ok) {
    console.error(`daftar repositori gagal: HTTP ${r.status}`);
    break;
  }
  const batch = await r.json();
  for (const x of batch) {
    meta.set(x.name.toLowerCase(), {
      topik: x.topics || [],
      bintang: x.stargazers_count,
      cabang: x.default_branch,
      dibuat: x.created_at?.slice(0, 10),
      disentuh: x.pushed_at?.slice(0, 10),
      beranda: x.homepage || null,
      lisensi: x.license?.spdx_id || null,
      bahasa: x.language,
    });
  }
  if (batch.length < 100) break;
}
console.log(`metadata terbaca: ${meta.size} repositori\n`);

/**
 * Mengambil paragraf pertama README yang benar-benar berisi kalimat, bukan
 * lencana, judul, atau tautan hiasan.
 */
function intisari(md) {
  if (!md) return null;

  const bersihAwal = md
    .replace(/```[\s\S]*?```/g, "")            // blok kode
    .replace(/<!--[\s\S]*?-->/g, "")           // komentar
    .replace(/^\s*\[!\[.*$/gm, "")             // lencana
    .replace(/^\s*!\[.*$/gm, "")               // gambar
    .replace(/<[^>]+>/g, " ");                 // markup HTML yang disisipkan

  /*
    Penjelasan sebuah proyek hampir selalu berada di pembuka — setelah judul
    utama, sebelum judul bagian pertama. Mencari di seluruh berkas membuat
    petunjuk pemasangan atau catatan rencana ikut terjaring, jadi pencarian
    dibatasi ke pembuka lebih dulu.
  */
  const potongJudul = bersihAwal.search(/^##\s/m);
  const pembuka = potongJudul > 0 ? bersihAwal.slice(0, potongJudul) : bersihAwal;

  const hasilPembuka = dariBlok(pembuka);
  if (hasilPembuka) return hasilPembuka;
  return dariBlok(bersihAwal);
}

/** Mencari paragraf penjelas di dalam sepotong markdown. */
function dariBlok(md) {
  const baris = md.split("\n");

  const paragraf = [];
  let kini = [];
  for (const b of baris) {
    const t = b.trim();

    // Blockquote tepat di bawah judul lazimnya berisi tagline proyek, jadi
    // isinya diambil sebagai calon — bukan dibuang seperti judul dan tabel.
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
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")  // tautan markdown -> teksnya
      .replace(/[*_`]/g, "")
      // label pembuka yang tidak menambah makna
      .replace(/^(one[- ]liner|summary|ringkasan|tl;?dr|overview|about)\s*:\s*/i, "")
      // ekor berupa tautan demo atau sumber
      .replace(/\s*(live demo|demo|site|source|repo|website)\s*:\s*\S+.*$/i, "")
      .replace(/\s*https?:\/\/\S+\s*$/i, "")
      .replace(/\s+/g, " ")
      .replace(/\s*:\s*$/, ".")                 // akhiran titik dua jadi titik
      .trim();

  /*
    Paragraf yang layak dipakai harus berdiri sendiri sebagai penjelasan.
    Yang ditolak: potongan daftar bernomor, kalimat yang berhenti di titik dua
    karena sambungannya ada di butir berikutnya, dan baris yang isinya cuma
    tautan atau perintah pemasangan.
  */
  const layak = (c) =>
    c.length >= 70 &&
    /[.!?]$/.test(c) &&
    !/^\d+[.)]\s/.test(c) &&
    !/:$/.test(c) &&
    !/^(npm|yarn|pnpm|bun|git|cd|cargo|npx)\s/i.test(c) &&
    !/^(planned|status|note|catatan|roadmap|coming soon|set\s|your\s)/i.test(c) &&
    !/\b(API[_ ]?KEY|RPC[_ ]?URL|env var|environment variable)\b/i.test(c) &&
    // penafian jaringan uji dan petunjuk berkas aset, bukan penjelasan produk
    !/\b(devnet test tokens?|no real funds|test tokens only)\b/i.test(c) &&
    !/\b(assets?\/|\.png|\.svg|\.jpg|custom logo)\b/i.test(c) &&
    !/^https?:\/\//.test(c);

  for (const p of paragraf) {
    const c = bersih(p);
    if (layak(c)) return potongRapi(c, 420);
  }
  /*
    Sebagian README hanya berisi tabel dan judul tanpa satu pun kalimat yang
    menjelaskan proyeknya. Untuk kasus itu tidak ada yang dikembalikan, dan
    halaman jatuh ke deskripsi repositori yang sudah ditulis manual — kolom
    kosong lebih baik daripada kalimat yang keliru.
  */
  return null;
}

/** Memotong di akhir kalimat terdekat, bukan di tengah kata. */
function potongRapi(s, maks) {
  if (s.length <= maks) return s;
  const potong = s.slice(0, maks);
  const titik = Math.max(potong.lastIndexOf(". "), potong.lastIndexOf("! "), potong.lastIndexOf("? "));
  if (titik > maks * 0.5) return potong.slice(0, titik + 1);
  return potong.slice(0, potong.lastIndexOf(" ")) + "…";
}

// ---- README tiap repositori ------------------------------------------------
const keluar = {};
let ada = 0;
let kosong = 0;

for (const p of projects) {
  const repo = namaRepo(p.repo);
  if (!repo) continue;

  const m = meta.get(repo.toLowerCase()) || {};
  const cabang = m.cabang || "main";

  let teks = null;
  for (const c of [cabang, "main", "master"]) {
    for (const nama of ["README.md", "readme.md", "Readme.md"]) {
      try {
        const r = await fetch(
          `https://raw.githubusercontent.com/bryankwandou/${repo}/${c}/${nama}`,
          { headers: UA },
        );
        if (r.ok) {
          teks = await r.text();
          break;
        }
      } catch {}
    }
    if (teks) break;
  }

  const ringkas = intisari(teks);
  keluar[p.slug] = {
    repo,
    ringkas,
    topik: m.topik || [],
    bintang: m.bintang ?? 0,
    dibuat: m.dibuat ?? null,
    disentuh: m.disentuh ?? null,
    beranda: m.beranda ?? null,
    lisensi: m.lisensi ?? null,
    panjangReadme: teks ? teks.length : 0,
  };

  if (ringkas) {
    ada++;
    console.log(`${p.slug.padEnd(30)} ${String(ringkas.length).padStart(3)} huruf  ${(m.topik || []).slice(0, 3).join(",")}`);
  } else {
    kosong++;
    console.log(`${p.slug.padEnd(30)} (README tidak terbaca)`);
  }

  await jeda(350);
}

writeFileSync(join(root, "src", "data", "repos.json"), JSON.stringify(keluar, null, 2));
console.log(`\nringkasan terbaca: ${ada}, tanpa README: ${kosong}`);
console.log("tersimpan di src/data/repos.json");
