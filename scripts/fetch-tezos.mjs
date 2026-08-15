/**
 * Menarik karya NFT dari koleksi Tezos milik pemilik situs, lalu menyimpan
 * gambarnya secara lokal sebagai WebP.
 *
 * Metadata dibaca lewat TzKT (API blockchain terbuka), gambarnya diambil dari
 * beberapa gerbang IPFS bergantian. Berkasnya disimpan di repositori supaya
 * halaman tidak pernah bergantung pada gerbang IPFS saat dikunjungi — gerbang
 * publik sering lambat dan kadang mati.
 *
 *   node scripts/fetch-tezos.mjs [jumlah]
 */

import sharp from "sharp";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const KONTRAK = "KT1R67wX2kCii82cqyo8DVYWXccM4HcJwHki";
const PEMBUAT = "tz2LB1bnJNcyQe5Fy89XJKvhCcDfovpZ2gi5";
const BATAS = Number(process.argv[2]) || 60;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const kecil = join(root, "public", "galeri", "kecil");
const besar = join(root, "public", "galeri", "besar");
for (const d of [kecil, besar]) mkdirSync(d, { recursive: true });

const GERBANG = [
  "https://ipfs.io/ipfs/",
  "https://cloudflare-ipfs.com/ipfs/",
  "https://dweb.link/ipfs/",
  "https://gateway.pinata.cloud/ipfs/",
];

const jeda = (ms) => new Promise((r) => setTimeout(r, ms));

/** Mengambil satu berkas IPFS, mencoba tiap gerbang sampai ada yang menjawab. */
async function ambilIpfs(uri) {
  const cid = uri.replace(/^ipfs:\/\//, "").replace(/^\/+/, "");
  for (const g of GERBANG) {
    try {
      const ac = new AbortController();
      const jam = setTimeout(() => ac.abort(), 25000);
      const r = await fetch(g + cid, { signal: ac.signal });
      clearTimeout(jam);
      if (!r.ok) continue;
      const buf = Buffer.from(await r.arrayBuffer());
      if (buf.length > 1000) return buf;
    } catch {}
  }
  return null;
}

/** Membersihkan deskripsi: buang daftar akun media sosial dan tagar. */
function keteranganDari(m) {
  const d = (m.description || "")
    .split("\n")
    .filter((b) => !/^(discord|twitter|instagram|twitch|youtube|telegram|tiktok)\s*:/i.test(b.trim()))
    .join(" ")
    .replace(/#\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return d.length > 4 ? d.slice(0, 140) : "";
}

// ---- daftar token ----------------------------------------------------------
console.log("membaca daftar token dari TzKT...");
const semua = [];
for (let offset = 0; offset < 600; offset += 200) {
  const r = await fetch(
    `https://api.tzkt.io/v1/tokens?contract=${KONTRAK}&limit=200&offset=${offset}&sort.desc=firstTime`,
  );
  if (!r.ok) break;
  const batch = await r.json();
  semua.push(...batch);
  if (batch.length < 200) break;
}
console.log(`token terbaca: ${semua.length}`);

// hanya karya pembuat yang benar, berupa gambar, dan gambarnya belum pernah dipakai
const terlihat = new Set();
const pilihan = [];
for (const t of semua) {
  const m = t.metadata || {};
  const pembuat = (m.creators || []).map((x) => x.toLowerCase());
  if (pembuat.length && !pembuat.includes(PEMBUAT.toLowerCase())) continue;

  const mime = (m.formats || []).map((f) => f.mimeType || "").join(" ");
  if (mime && !/image\//.test(mime)) continue;

  const uri = m.displayUri || m.artifactUri || m.thumbnailUri;
  if (!uri || !uri.startsWith("ipfs://")) continue;
  if (terlihat.has(uri)) continue;
  terlihat.add(uri);

  pilihan.push({
    id: t.tokenId,
    nama: (m.name || `Karya ${t.tokenId}`).trim(),
    uri,
    keterangan: keteranganDari(m),
    tag: (m.tags || []).filter((x) => x && x.length < 24).slice(0, 4),
  });
  if (pilihan.length >= BATAS) break;
}
console.log(`karya unik terpilih: ${pilihan.length}\n`);

// ---- unduh dan olah --------------------------------------------------------
const daftar = [];
let gagal = 0;

for (const k of pilihan) {
  const slug = `tezos-${k.id}`;
  const jKecil = join(kecil, `${slug}.webp`);
  const jBesar = join(besar, `${slug}.webp`);

  if (existsSync(jKecil) && existsSync(jBesar)) {
    const meta = await sharp(jBesar).metadata();
    daftar.push({
      slug,
      kecil: `/galeri/kecil/${slug}.webp`,
      besar: `/galeri/besar/${slug}.webp`,
      lebar: meta.width,
      tinggi: meta.height,
      keterangan: k.nama,
      cerita: k.keterangan,
      tag: k.tag,
      tautan: `https://objkt.com/tokens/${KONTRAK}/${k.id}`,
    });
    continue;
  }

  const buf = await ambilIpfs(k.uri);
  if (!buf) {
    gagal++;
    console.log(`${slug.padEnd(16)} gagal diunduh`);
    continue;
  }

  try {
    const asli = await sharp(buf).rotate();
    const meta = await asli.metadata();
    await asli.clone().resize(640, null, { withoutEnlargement: true }).webp({ quality: 74 }).toFile(jKecil);
    await asli.clone().resize(1600, null, { withoutEnlargement: true }).webp({ quality: 82 }).toFile(jBesar);

    const b = await sharp(jBesar).metadata();
    daftar.push({
      slug,
      kecil: `/galeri/kecil/${slug}.webp`,
      besar: `/galeri/besar/${slug}.webp`,
      lebar: b.width,
      tinggi: b.height,
      keterangan: k.nama,
      cerita: k.keterangan,
      tag: k.tag,
      tautan: `https://objkt.com/tokens/${KONTRAK}/${k.id}`,
    });
    console.log(`${slug.padEnd(16)} ${meta.width}x${meta.height}  ${k.nama.slice(0, 40)}`);
  } catch (e) {
    gagal++;
    console.log(`${slug.padEnd(16)} gagal diolah: ${String(e).slice(0, 60)}`);
  }

  await jeda(400);
}

writeFileSync(join(root, "src", "data", "gallery.json"), JSON.stringify(daftar, null, 2));
console.log(`\nberhasil ${daftar.length}, gagal ${gagal}`);
console.log("tersimpan di src/data/gallery.json");
