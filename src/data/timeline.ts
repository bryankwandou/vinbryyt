/**
 * Garis waktu.
 * `confirmed: false` menandai butir yang belum bisa diverifikasi lewat sumber
 * terbuka — tampil di layar dengan penanda, bukan disamarkan jadi fakta.
 */

export type Chapter = {
  year: string;
  title: string;
  body: string;
  confirmed: boolean;
  source?: string;
};

export const chapters: Chapter[] = [
  {
    year: "2010",
    title: "Mulai menerbitkan",
    body:
      "Bio akun @nayrbryan_gaming menutup dengan satu baris: content creator since 2010. " +
      "Itu titik awal paling tua yang tercatat di arsip terbuka mana pun — jauh sebelum ada " +
      "repositori untuk ditunjukkan, dan jauh sebelum kata portofolio terasa relevan.",
    confirmed: true,
    source: "Bio Instagram @nayrbryan_gaming",
  },
  {
    year: "1 Agustus 2018",
    title: "Akun VinBryYT berdiri",
    body:
      "TikTok mencatat tanggalnya sendiri: Est Aug 1, 2018. Namanya disusun dari dua penggal " +
      "nama pemiliknya, Vincentius dan Bryan. Sampai hari ini akun itu mengumpulkan 60,3 ribu " +
      "pengikut dan 38,9 ribu suka.",
    confirmed: true,
    source: "Widget embed kreator resmi TikTok",
  },
  {
    year: "2019",
    title: "Masuk Bigetron",
    body:
      "Bio TikTok membuka urutannya: BTR (2019). Babak esports dimulai di sini, dan sejak itu " +
      "kamera bukan cuma alat merekam jalan-jalan — ia jadi bagian dari pekerjaan bertanding.",
    confirmed: true,
    source: "Bio TikTok @vinbryyt",
  },
  {
    year: "2021",
    title: "Pindah ke SRG",
    body:
      "Babak kedua dalam urutan yang sama. Dua tahun setelah BTR, dengan penonton yang sudah " +
      "terbentuk dan kebiasaan menerbitkan yang sudah jalan sendiri.",
    confirmed: true,
    source: "Bio TikTok @vinbryyt",
  },
  {
    year: "2023",
    title: "Berdiri sendiri lewat NNG",
    body:
      "NNG (2023-now) — nayrbryanGaming, bendera sendiri. Tahun yang sama dengan gelombang " +
      "pertama sertifikasi teknis, jadi dua jalur itu berjalan berdampingan sejak awal.",
    confirmed: true,
    source: "Bio TikTok @vinbryyt",
  },
  {
    year: "Tanggal belum dipastikan",
    title: "Kanal YouTube hilang",
    body:
      "Kanal YouTube-nya ditutup pihak platform dan tidak menyisakan apa pun yang bisa " +
      "diselamatkan. Pemeriksaan ke Wayback Machine dengan lima pola alamat, pencarian luas " +
      "di seluruh arsipnya, SocialBlade, dan mesin pencari sama-sama tidak menemukan satu pun " +
      "rekaman. Bagian ini dicatat justru karena kosong: sebuah arsip yang tidak sempat dibuat " +
      "lebih jujur ditulis daripada dihapus dari cerita.",
    confirmed: false,
    source: "Keterangan pemilik akun; nol hasil pada seluruh arsip yang diperiksa",
  },
  {
    year: "2010—2026",
    title: "Lima ribu unggahan",
    body:
      "Dua akun Instagram mengumpulkan 3.863 dan 1.174 unggahan; komunitas fotografi yang ikut " +
      "dibina menambah 2.906 lagi. Di TikTok, tiga unggahan teratas menembus 175,9 ribu, 101,9 " +
      "ribu, dan 46,5 ribu tontonan. Kebiasaan menerbitkan secara berkala inilah yang belakangan " +
      "terbawa ke cara bekerja dengan kode.",
    confirmed: true,
    source: "Tag pratinjau Instagram dan widget embed TikTok",
  },
  {
    year: "2023",
    title: "Menambah landasan teknis",
    body:
      "Menyelesaikan rangkaian pelatihan bersertifikat: pengembangan web full-stack, dasar komputasi awan, " +
      "pengantar AI dan pembelajaran mesin, serta pendalaman React dan Next.js.",
    confirmed: true,
    source: "Daftar sertifikasi di nayrbryangaming.vercel.app",
  },
  {
    year: "2024",
    title: "Belok ke Web3",
    body:
      "Bootcamp Solana Developer dari Solana Foundation, ditambah materi Rust, keamanan kontrak pintar, " +
      "dan dasar blockchain. Fokus bergeser dari aplikasi biasa ke rel pembayaran.",
    confirmed: true,
    source: "Daftar sertifikasi di nayrbryangaming.vercel.app",
  },
  {
    year: "Feb 2026",
    title: "Membuka ruang kerja publik",
    body:
      "Akun GitHub bryankwandou dibuat pada 21 Februari 2026. Sejak itu seluruh pekerjaan disimpan terbuka " +
      "supaya bisa dibaca siapa saja, bukan sekadar diceritakan.",
    confirmed: true,
    source: "GitHub API, field created_at",
  },
  {
    year: "Jul 2026",
    title: "Bulan produksi padat",
    body:
      "Puluhan produk didorong dalam satu bulan — perangkat operasional untuk restoran, armada, penitipan anak, " +
      "asuransi, dan perawatan di rumah. Sebagian besar menautkan bukti kerjanya ke Solana devnet.",
    confirmed: true,
    source: "Riwayat pushed_at pada GitHub API",
  },
  {
    year: "2026",
    title: "Naik ke forum akademik",
    body:
      "Sertifikat konferensi ICoDSS 2026 tercantum di arsip profil. Sorotan profil juga memuat Superteam, " +
      "PIDI DIGDAYA, MyBCA Academy, dan GDG Telkom.",
    confirmed: true,
    source: "Sorotan Instagram @bryan_kwandou",
  },
  {
    year: "Ags 2026",
    title: "Rel agen dan pembayaran mesin",
    body:
      "Aval Rail dan Aval Core masuk tahap uji: durable nonce menahan pembayaran agen tetap sah selama " +
      "manusia menimbang persetujuan. Bukti devnet menunjukkan nonce tetap final 4 jam 29 menit setelah " +
      "kendali kedaluwarsa.",
    confirmed: true,
    source: "Deskripsi repositori aval-rail",
  },
];

export const certifications = [
  { name: "Solana Developer Bootcamp", issuer: "Solana Foundation", year: "2024" },
  { name: "Web3 Development Fundamentals", issuer: "LinkedIn Learning", year: "2024" },
  { name: "Blockchain & Cryptocurrency", issuer: "LinkedIn Learning", year: "2024" },
  { name: "Rust Programming Language", issuer: "LinkedIn Learning", year: "2024" },
  { name: "Smart Contract Security", issuer: "LinkedIn Learning", year: "2024" },
  { name: "Full-Stack Web Development", issuer: "LinkedIn Learning", year: "2023" },
  { name: "Cloud Computing Essentials", issuer: "LinkedIn Learning", year: "2023" },
  { name: "AI & Machine Learning Basics", issuer: "LinkedIn Learning", year: "2023" },
  { name: "React & Next.js Mastery", issuer: "LinkedIn Learning", year: "2023" },
];

export const disciplines = [
  {
    title: "Rel pembayaran",
    body: "Solana, durable nonce, penyandian transaksi tingkat rendah, jembatan QRIS ke penyelesaian on-chain.",
    items: ["Solana", "Rust", "Anchor", "Jupiter", "SPL Token"],
  },
  {
    title: "Antarmuka",
    body: "Next.js dan React untuk perkakas padat data yang tetap terbaca saat dipakai berjam-jam.",
    items: ["TypeScript", "Next.js", "React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Mobile",
    body: "Flutter untuk aplikasi yang harus tetap hidup saat sinyal hilang.",
    items: ["Flutter", "Dart", "SQLite", "Penyimpanan luring"],
  },
  {
    title: "Sistem agentik",
    body: "Batas kewenangan yang ditegakkan kode, bukan diminta lewat prompt. Tanda terima untuk tiap jalan.",
    items: ["Groq", "Pemanggilan alat", "Pagar deterministik", "Jejak audit"],
  },
  {
    title: "Kamera",
    body: "Foto dan video. Bagian dari komunitas fotografi Nusantara sejak lama.",
    items: ["Fotografi", "Sunting video", "Bercerita", "Format vertikal"],
  },
];
