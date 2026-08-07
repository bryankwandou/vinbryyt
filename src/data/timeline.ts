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
    year: "2018",
    title: "Kamera pertama, penonton pertama",
    body:
      "Awal mula membuat konten dengan nama VinBryYT — dua penggal dari Vincentius dan Bryan. " +
      "Tanggal pastinya belum dapat dikonfirmasi lewat arsip publik; TikTok tidak membuka tanggal " +
      "pendaftaran akun ke mesin pembaca.",
    confirmed: false,
    source: "Perlu konfirmasi dari pemilik akun",
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
