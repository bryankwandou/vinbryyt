/**
 * Memampatkan ulang gambar galeri supaya repositori tetap ringan.
 *
 * Ukuran layar terbesar yang lazim untuk tampilan penuh adalah sekitar 1280
 * piksel, jadi menyimpan 1600 piksel hanya menambah berat tanpa terlihat
 * bedanya. Versi kisi juga diturunkan ke 480 piksel karena di kisi tiga kolom
 * tidak pernah ditampilkan lebih besar dari itu.
 *
 *   node scripts/optimize-gallery.mjs
 */

import sharp from "sharp";
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/*
  Gambar asalnya sudah 1024 piksel, jadi mengubah ukuran versi besar tidak
  menolong apa pun — yang perlu diturunkan mutunya. Versi kisi dipotong ke 420
  piksel karena di kisi tiga kolom memang tidak pernah tampil lebih besar.
*/
const tugas = [
  { dir: join(root, "public", "galeri", "besar"), lebar: 1024, mutu: 62 },
  { dir: join(root, "public", "galeri", "kecil"), lebar: 420, mutu: 58 },
];

for (const { dir, lebar, mutu } of tugas) {
  const berkas = readdirSync(dir).filter((f) => f.endsWith(".webp"));
  let sebelum = 0;
  let sesudah = 0;

  for (const f of berkas) {
    const jalur = join(dir, f);
    const asal = statSync(jalur).size;
    sebelum += asal;

    /*
      Berkasnya dibaca ke memori lebih dulu. Kalau sharp membaca langsung dari
      jalur, Windows menahan kuncinya dan penimpaan berkas itu gagal diam-diam.
    */
    try {
      const asli = readFileSync(jalur);
      const baru = await sharp(asli)
        .resize(lebar, null, { withoutEnlargement: true })
        .webp({ quality: mutu, effort: 5 })
        .toBuffer();

      // pakai hasil baru hanya kalau memang lebih kecil
      if (baru.length < asal) writeFileSync(jalur, baru);
    } catch (e) {
      console.log(`  gagal: ${f} — ${String(e).slice(0, 70)}`);
    }
    sesudah += statSync(jalur).size;
  }

  const nama = dir.split(/[\\/]/).pop();
  console.log(
    `${nama.padEnd(6)} ${berkas.length} berkas  ${(sebelum / 1048576).toFixed(1)} MB -> ${(sesudah / 1048576).toFixed(1)} MB`,
  );
}
