/**
 * Riwayat kerja, pendidikan, dan sertifikasi.
 *
 * Seluruh isinya disalin dari berkas profil LinkedIn yang diekspor sendiri
 * oleh pemiliknya (Profile.pdf, dibaca 15 Agustus 2026). Tidak ada satu pun
 * yang ditebak: tanggal, nama lembaga, dan nomor surat keputusan mengikuti
 * apa yang tertulis di sana.
 */

export type Peran = {
  organisasi: string;
  jabatan: { id: string; en: string };
  mulai: string;
  selesai: string | null;
  tempat: string;
  ringkas: { id: string; en: string };
  butir?: { id: string; en: string }[];
};

export const headline = {
  id: "Pembuat konten, pengembang web, penyusun strategi esport, dan penggiat Web3",
  en: "Content Creator, Web Developer, Esports Strategist, Web3 & Trading Enthusiast",
};

export const ringkasanDiri = {
  id:
    "Pembuat konten sekaligus pengembang web yang menggabungkan tiga hal: kreativitas, " +
    "teknologi, dan membangun komunitas. Lebih dari sepuluh tahun berkecimpung di gaming " +
    "dan esport sejak 2010, lalu mendirikan NNG Esport sebagai gerakan akar rumput untuk " +
    "pemain dan kreator. Perjalanan awal itu yang membentuk cara saya memandang media " +
    "digital dan pembangunan merek.",
  en:
    "A content creator and web developer who blends creativity, technology, and " +
    "community-building. Over a decade in gaming and esports since 2010, then founded " +
    "NNG Esport as a grassroots initiative for players and creators. That early journey " +
    "shaped how I approach digital media and brand development.",
};

export const peran: Peran[] = [
  {
    organisasi: "UAJM Blockchain Club — Superteam Campus",
    jabatan: { id: "Ketua kampus sekaligus pendiri", en: "Campus Lead / Founder" },
    mulai: "2026-03",
    selesai: null,
    tempat: "Makassar",
    ringkas: {
      id:
        "Memimpin gerakan Superteam Campus di Universitas Atma Jaya Makassar, " +
        "menyambungkan mahasiswa dengan ekosistem Web3 yang lebih luas.",
      en:
        "Leading the Superteam Campus initiative at Universitas Atma Jaya Makassar, " +
        "connecting students with the wider Web3 ecosystem.",
    },
    butir: [
      { id: "Menyelenggarakan sesi belajar blockchain dan Web3", en: "Running blockchain and Web3 educational sessions" },
      { id: "Membangun komunitas bagi pengembang dan kreator", en: "Building a community for developers and creators" },
      { id: "Memfasilitasi diskusi, lokakarya, dan pertemuan komunitas", en: "Facilitating discussions, workshops, and meetups" },
    ],
  },
  {
    organisasi: "UKM E-Sport Universitas Atma Jaya Makassar",
    jabatan: { id: "Pendiri dan ketua", en: "Founder & Chairman" },
    mulai: "2025-09",
    selesai: null,
    tempat: "Makassar, Sulawesi Selatan",
    ringkas: {
      id:
        "Mendirikan dan memimpin organisasi esport resmi kampus, berdiri di atas Surat " +
        "Keputusan Rektor Nomor 032/UAJM/Rek/Kep/VI/2025, dengan empat divisi: turnamen, " +
        "pelatihan, media kreatif, dan hubungan masyarakat.",
      en:
        "Founded and lead the official university esports organization under Rector Decree " +
        "No. 032/UAJM/Rek/Kep/VI/2025, overseeing four divisions: tournaments, training, " +
        "creative media, and public relations.",
    },
    butir: [
      { id: "Menumbuhkan komunitas dari nol menjadi lebih dari dua puluh anggota", en: "Grew the community from zero to 20+ members" },
      { id: "Menggelar latihan lintas divisi dan tanding uji antarkampus", en: "Organized multi-division training and intercampus scrims" },
      {
        id: "Menetapkan mottonya: Main Cerdas, Menang Bermartabat",
        en: "Set the motto: Main Cerdas, Menang Bermartabat — Play Smart, Win with Integrity",
      },
    ],
  },
  {
    organisasi: "MANCER × Superteam",
    jabatan: { id: "Penerima beasiswa jalur pengembang Web3", en: "Web3 Developer Scholar" },
    mulai: "2026-04",
    selesai: "2026-06",
    tempat: "Jarak jauh",
    ringkas: {
      id:
        "Peserta terpilih program percepatan karier Web3, jalur pengembang: membangun " +
        "aplikasi berbasis blockchain, mendalami perkakas Solana, dan menyelesaikan uji kerja teknis.",
      en:
        "Selected participant in the Web3 Career Accelerator, developer track: building " +
        "blockchain applications, learning Solana tooling, and completing technical work trials.",
    },
  },
  {
    organisasi: "Drip Labs",
    jabatan: { id: "Kreator NFT di Drip.Haus, jaringan Solana", en: "NFT Creator — Drip.Haus (Solana)" },
    mulai: "2024-03",
    selesai: null,
    tempat: "Jarak jauh",
    ringkas: {
      id:
        "Merilis karya NFT mingguan dengan bantuan alat gambar otomatis, sambil membangun " +
        "komunitas kolektor lewat strategi kelangkaan dan keterlibatan.",
      en:
        "Releasing weekly NFT drops with AI-assisted visual design, building a collector " +
        "community through perks, rarity strategies, and engagement.",
    },
  },
  {
    organisasi: "Tezos",
    jabatan: { id: "Kreator konten Web3 dan perupa NFT", en: "Web3 Content Creator / NFT Artist" },
    mulai: "2022-01",
    selesai: null,
    tempat: "Jarak jauh",
    ringkas: {
      id:
        "Menerbitkan karya generatif dan berbantuan mesin di blockchain Tezos lewat objkt. " +
        "Empat ratus delapan puluh lima di antaranya bisa dilihat di halaman Galeri situs ini.",
      en:
        "Publishing generative and AI-assisted artworks on the Tezos blockchain via objkt. " +
        "Four hundred eighty-five of them are on this site's Gallery page.",
    },
  },
];

export const pendidikan = [
  {
    lembaga: "Universitas Atma Jaya Makassar",
    jurusan: { id: "S1 Teknik Informatika", en: "Bachelor's, Informatics Engineering" },
    mulai: "2023-09",
    selesai: "2027-07",
    berjalan: true,
  },
  {
    lembaga: "SMA Negeri 1 Makassar",
    jurusan: { id: "IPA", en: "Natural Sciences" },
    mulai: "2020-06",
    selesai: "2023-03",
    berjalan: false,
  },
  {
    lembaga: "SMP Katolik Rajawali",
    jurusan: { id: "IPA", en: "Natural Sciences" },
    mulai: "2017-08",
    selesai: "2020-08",
    berjalan: false,
  },
  {
    lembaga: "SD Menara Makassar",
    jurusan: { id: "Sekolah dasar", en: "Primary school" },
    mulai: "2012-07",
    selesai: "2017-07",
    berjalan: false,
  },
];

export const sertifikasi = [
  "Belajar Dasar Data Science",
  "Belajar Dasar UX Design",
  "Prompt Engineering untuk Software Developer",
  "Memulai Pemrograman dengan Python",
  "Belajar Back-End Pemula dengan Python",
];

export const keahlianTeratas = ["Solana", "Smart Contracts", "Decentralized Applications (DApps)"];

export const tautanProfesional = {
  linkedin: "https://www.linkedin.com/in/bryankwandou",
  objkt: "https://objkt.com/collections/KT1R67wX2kCii82cqyo8DVYWXccM4HcJwHki",
  situsLama: "https://nayrbryangaming.vercel.app",
};
