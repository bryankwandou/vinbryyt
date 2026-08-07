# vinbryyt

Situs portofolio pribadi Vincentius Bryan Kwandou — dikenal di layar sebagai VinBryYT.

Live: https://vinbryyt.vercel.app

## Isi

Empat halaman, seluruhnya dirender statis:

| Rute | Isi |
| --- | --- |
| `/` | Perkenalan, angka ringkas, tujuh pekerjaan pilihan, lima bidang kerja |
| `/kerja` | Katalog lengkap dengan penyaring kategori dan pencarian |
| `/riwayat` | Garis waktu bergulir, daftar sertifikasi, angka audiens |
| `/kontak` | Email dan tautan ke akun-akun terkait |

## Asal data

Seluruh isi halaman berasal dari sumber yang bisa diperiksa ulang, dikumpulkan
pada 6 Agustus 2026:

- **GitHub REST API** (`/users/bryankwandou`, `/users/bryankwandou/repos`) — nama,
  domisili, bio, 104 repositori beserta deskripsi, bahasa, dan tautan live.
- **Endpoint oEmbed TikTok** — memastikan akun `@vinbryyt` ada dan nama tampilannya
  `VinBryYT`.
- **Halaman profil Instagram** `@bryan_kwandou` dan `@lensanuswantara` — bio, jumlah
  pengikut, sorotan cerita.
- **nayrbryangaming.vercel.app** — nama lengkap, alamat surel, daftar sertifikasi,
  ringkasan proyek unggulan.

Yang **tidak** berhasil diambil dan karenanya dikosongkan, bukan ditebak:

- Jumlah pengikut dan suka di TikTok — halaman profilnya menolak pembaca otomatis.
- Kanal YouTube — handel `@vinbryyt` maupun `@VinBryYT` sama-sama mengembalikan 404.
- Tanggal pasti mulai membuat konten pada 2018 — tidak ada arsip terbuka yang memuatnya.

Butir semacam itu ditandai di berkas data (`VERIFY`) dan tampil di layar dengan label
"belum terkonfirmasi". Ubah nilainya di `src/data/` begitu angka resminya tersedia;
tidak ada kode yang perlu disentuh.

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # keluaran produksi
```

## Tumpukan

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion.
Tanpa basis data, tanpa CMS — isi halaman tinggal di berkas TypeScript agar
riwayat perubahannya terekam di Git.

## Struktur

```
src/
  app/          rute dan tata letak
  components/   header, footer, kartu, pustaka animasi
  data/         profil, katalog proyek, garis waktu
```

## Lisensi

Kode boleh dipakai ulang. Isi tulisan, foto, dan tanda VinBryYT tidak.
