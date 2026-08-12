/**
 * Menyiapkan galeri dari berkas mentah di public/galeri/masuk/.
 *
 * Jatuhkan foto apa pun ke folder itu — JPG, PNG, HEIC hasil ekspor, ukuran
 * berapa pun — lalu jalankan:
 *
 *   node scripts/build-gallery.mjs
 *
 * Tiap foto dikecilkan menjadi dua ukuran (thumbnail 640px dan tampilan penuh
 * 1600px), dikonversi ke WebP, dan didaftarkan di src/data/gallery.json lengkap
 * dengan rasio aslinya supaya tata letaknya tidak melompat saat dimuat.
 *
 * Berkas mentahnya tidak ikut masuk Git; yang tersimpan hanya hasil olahannya.
 */

import sharp from "sharp";
import { readdirSync, mkdirSync, writeFileSync, existsSync, statSync } from "node:fs";
import { dirname, join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const masuk = join(root, "public", "galeri", "masuk");
const kecil = join(root, "public", "galeri", "kecil");
const besar = join(root, "public", "galeri", "besar");

for (const d of [masuk, kecil, besar]) mkdirSync(d, { recursive: true });

const DIDUKUNG = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tif", ".tiff"]);

const berkas = readdirSync(masuk)
  .filter((f) => DIDUKUNG.has(extname(f).toLowerCase()))
  .filter((f) => statSync(join(masuk, f)).isFile())
  .sort();

if (berkas.length === 0) {
  console.log(
    `Belum ada foto di ${masuk}\n` +
      `Jatuhkan berkas gambar ke sana lalu jalankan perintah ini lagi.`,
  );
}

/** Mengubah nama berkas menjadi keterangan yang enak dibaca. */
function keteranganDari(nama) {
  return basename(nama, extname(nama))
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/^\d{4}[\s-]?\d{2}[\s-]?\d{2}\s*/, "")
    .trim();
}

const daftar = [];

for (const f of berkas) {
  const slug = basename(f, extname(f))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const sumber = join(masuk, f);
  const meta = await sharp(sumber).metadata();

  const jalurKecil = join(kecil, `${slug}.webp`);
  const jalurBesar = join(besar, `${slug}.webp`);

  if (!existsSync(jalurKecil)) {
    await sharp(sumber).rotate().resize(640, null, { withoutEnlargement: true })
      .webp({ quality: 74 }).toFile(jalurKecil);
  }
  if (!existsSync(jalurBesar)) {
    await sharp(sumber).rotate().resize(1600, null, { withoutEnlargement: true })
      .webp({ quality: 82 }).toFile(jalurBesar);
  }

  // rotate() menukar sisi bila EXIF menyimpan orientasi tegak
  const tegak = meta.orientation && meta.orientation >= 5;
  const lebar = tegak ? meta.height : meta.width;
  const tinggi = tegak ? meta.width : meta.height;

  daftar.push({
    slug,
    kecil: `/galeri/kecil/${slug}.webp`,
    besar: `/galeri/besar/${slug}.webp`,
    lebar,
    tinggi,
    keterangan: keteranganDari(f),
  });

  console.log(`${slug.padEnd(34)} ${lebar}x${tinggi}`);
}

writeFileSync(join(root, "src", "data", "gallery.json"), JSON.stringify(daftar, null, 2));
console.log(`\n${daftar.length} foto terdaftar di src/data/gallery.json`);
