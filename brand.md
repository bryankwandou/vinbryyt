# Panduan brand — VinBryYT

## Nama

**VinBryYT.** Bentuk pendek dari Vincentius dan Bryan. Sudah dipakai di TikTok dan
melekat sejak lama, jadi tidak ada alasan menggantinya — kekuatan sebuah nama pribadi
justru datang dari berapa lama ia bertahan.

Turunan resmi: `vinbryyt` untuk handel, repositori, dan subdomain.

## Tanda

Bilah rana kamera yang membentuk huruf V.

Tiga busur pendek menyusun lingkaran diafragma yang setengah terbuka; goresan tebal di
tengahnya membentuk V, dengan satu titik padat di ujung lengan kanan sebagai penanda
rana. Bacaannya ganda dan disengaja: kamera untuk sisi kreator, huruf untuk sisi nama.

Alasan bentuk ini dipilih:

- Terbaca pada 16 piksel. Diuji sebagai favicon sebelum diuji sebagai hiasan.
- Punya bentuk siluet yang khas — tidak berubah menjadi lingkaran generik ketika diperkecil.
- Bekerja dalam satu warna maupun bergradien, di atas bidang terang maupun gelap.

Dua varian: berubin (gradien tembaga, untuk ikon aplikasi dan favicon) dan telanjang
(`bare`, mewarisi warna teks, untuk dipakai di dalam paragraf atau kop surat).

## Warna

Dasar tinta hangat, bukan abu kebiruan. Satu aksen saja, supaya penekanan tetap berarti.

| Peran | Terang | Gelap |
| --- | --- | --- |
| Latar | `#faf8f4` | `#0b0b0d` |
| Bidang | `#ffffff` | `#121214` |
| Teks utama | `#131315` | `#f6f3ec` |
| Teks redup | `#4d4a45` | `#b9b3a7` |
| Aksen | `#cf4210` | `#ff7a3d` |

Gradien tanda: `#FFA06B → #FF7A3D → #CF4210` pada sumbu 135°.

Warna tembaga diambil dari dua tempat yang sama-sama akrab: langit senja Papua dan
lampu meja ruang sunting.

## Huruf

- **Inter** untuk teks berjalan dan antarmuka. Angka tabular dinyalakan di semua
  tempat yang menampilkan bilangan.
- **Instrument Serif** untuk kutipan panjang dan judul bagian yang perlu terasa
  ditulis, bukan disusun.
- Monospace bawaan sistem untuk label kecil, tahun, dan penanda sumber.

Judul selalu rapat (`tracking` negatif). Teks isi tidak pernah lebih lebar dari 68
karakter.

## Nada tulisan

Kalimat pendek. Kata kerja aktif. Klaim yang bisa dicek.

Yang dihindari: kata sifat yang tidak bisa diukur, tanda seru, emoji, dan istilah
promosi yang tidak menambah informasi. Bila sebuah angka belum bisa dipastikan, ia
ditulis sebagai tanda pisah dengan label "belum terkonfirmasi" — bukan diperhalus,
bukan dikarang.

## Gerak

Kurva bawaan `cubic-bezier(0.16, 1, 0.3, 1)`. Durasi 0,4 sampai 0,9 detik untuk
kemunculan; per hentakan 55 sampai 75 milidetik untuk deretan.

Semua komponen gerak menghormati `prefers-reduced-motion`. Bila pengunjung
mematikannya di tingkat sistem, animasi berhenti sepenuhnya dan isi tetap terbaca.

## Yang tidak boleh

- Menaruh tanda di atas foto ramai tanpa bidang penyangga.
- Memutar, memiringkan, atau merenggangkan tanda.
- Menambah aksen kedua. Satu tembaga sudah cukup.
- Memakai emoji di dalam antarmuka.
