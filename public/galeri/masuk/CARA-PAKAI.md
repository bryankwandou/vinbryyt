# Cara menambah foto ke galeri

1. Jatuhkan berkas foto ke folder ini. Terserah ukuran dan formatnya —
   JPG, PNG, WebP, AVIF, atau TIFF semuanya diterima. Foto langsung dari
   kamera tidak perlu dikecilkan dulu.

2. Beri nama berkas sesuai keterangan yang ingin muncul di bawah foto.
   Tanda hubung dan garis bawah otomatis diganti spasi, dan awalan tanggal
   dibuang. Contoh:

   ```
   2026-03-14_senja-di-teluk-yotefa.jpg   ->  "senja di teluk yotefa"
   pasar-hamadi-pagi.jpg                  ->  "pasar hamadi pagi"
   ```

3. Jalankan dari akar proyek:

   ```bash
   node scripts/build-gallery.mjs
   ```

   Tiap foto dikecilkan jadi dua ukuran (640 piksel untuk kisi, 1600 piksel
   untuk tampilan penuh), dikonversi ke WebP, dan didaftarkan beserta rasio
   aslinya supaya tata letak halaman tidak melompat saat gambar dimuat.

4. Commit hasilnya, lalu deploy.

Berkas mentah di folder ini **tidak** ikut masuk Git — hanya hasil olahannya
di `../kecil/` dan `../besar/`. Simpan aslinya di tempat lain.

Menjalankan ulang skripnya aman: foto yang sudah pernah diolah dilewati.
