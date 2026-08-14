/**
 * Sumber data profil.
 *
 * Setiap entri di bawah menyertakan `source` — dari mana fakta itu diambil.
 * Yang bertanda `VERIFY` belum bisa dikonfirmasi otomatis karena TikTok dan
 * Instagram memblokir pembacaan halaman oleh mesin. Ganti nilainya secara
 * manual, jangan biarkan tebakan tampil sebagai fakta.
 */

export const profile = {
  legalName: "Vincentius Bryan Kwandou",
  handle: "vinbryyt",
  displayName: "VinBryYT",
  shortName: "Bryan",
  location: "Jayapura, Indonesia",
  email: "Vincentius.kwandou@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/263014785?v=4",
  // sumber: github.com/bryankwandou (API), nayrbryangaming.vercel.app
  headline:
    "Membangun perangkat lunak yang bisa dibuktikan, dan merekam prosesnya di depan kamera.",
  summary:
    "Nama panggung VinBryYT lahir dari dua penggal nama sendiri — Vincentius dan Bryan. " +
    "Akun TikTok-nya berdiri 1 Agustus 2018 dan kini dibaca enam puluh ribu orang; kebiasaan " +
    "menerbitkan sendiri sudah jalan sejak 2010. Penonton lebih dulu ada daripada baris kode " +
    "pertama yang layak ditunjukkan. Sekarang keduanya berjalan berdampingan: " +
    "aplikasi mobile, antarmuka web, dan rel pembayaran di atas Solana pada siang hari; kamera " +
    "ketika cahayanya sedang bagus. Keduanya soal hal yang sama — menyusun bukti bahwa sesuatu " +
    "benar-benar terjadi.",
  roles: [
    "Full-Stack & Web3 Developer",
    "Creator",
    "Photographer",
    "Esports",
    "Property",
    "Trading",
  ], // sumber: bio Instagram @bryan_kwandou
  githubBio:
    "Mobile & Web Developer | Building: QRIS x Crypto (Solana), Crowdfunding, MOVV BMI App | Tech: TS, Flutter, Solana, AI",
} as const;

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  note?: string;
  /** Angka publik yang terbaca dari tag pratinjau halaman profil. */
  metrics?: { followers?: number; following?: number; posts?: number };
  verified: boolean;
};

/**
 * Angka di bawah dibaca dari tag `og:description` tiap halaman profil memakai
 * peramban tanpa jendela, pada 7 Agustus 2026. Instagram menaruh ringkasan
 * pengikut, mengikuti, dan jumlah unggahan di tag itu supaya pratinjau tautan
 * bisa terbentuk, sehingga terbaca tanpa perlu masuk akun.
 */
export const socials: SocialLink[] = [
  {
    label: "TikTok",
    handle: "@vinbryyt",
    href: "https://www.tiktok.com/@vinbryyt",
    note: "Akun utama, berdiri 1 Agustus 2018.",
    metrics: { followers: 60300, following: 122 },
    verified: true, // angka dibaca dari widget embed kreator resmi TikTok
  },
  {
    label: "Instagram",
    handle: "@nayrbryan_gaming",
    href: "https://www.instagram.com/nayrbryan_gaming/",
    note: "Akun terbesar. Psikologi dagang, disiplin, dan pengelolaan risiko.",
    metrics: { followers: 1516, following: 2290, posts: 3863 },
    verified: true,
  },
  {
    label: "Instagram",
    handle: "@bryan_kwandou",
    href: "https://www.instagram.com/bryan_kwandou/",
    note: "Akun pribadi. Catatan kerja, sertifikat, dan kegiatan komunitas.",
    metrics: { followers: 368, following: 493, posts: 1174 },
    verified: true,
  },
  {
    label: "GitHub",
    handle: "@bryankwandou",
    href: "https://github.com/bryankwandou",
    note: "127 repositori publik.",
    metrics: { posts: 127 },
    verified: true,
  },
  {
    label: "Komunitas",
    handle: "@lensanuswantara",
    href: "https://www.instagram.com/lensanuswantara/",
    note: "Komunitas fotografi Nusantara yang ikut dibina.",
    metrics: { followers: 18000, following: 20, posts: 2906 },
    verified: true,
  },
  {
    label: "Email",
    handle: "Vincentius.kwandou@gmail.com",
    href: "mailto:Vincentius.kwandou@gmail.com",
    verified: true,
  },
];

/**
 * Angka TikTok dibaca dari widget embed kreator resmi — kanal penyematan yang
 * memang disediakan TikTok untuk dipasang di situs luar. Halaman profil biasa
 * menolak pembaca otomatis, tapi widget ini menyajikan datanya secara terbuka.
 * Diambil 8 Agustus 2026.
 */
export const tiktok = {
  followers: 60300,
  followersLabel: "60,3 rb",
  likes: 38900,
  likesLabel: "38,9 rb",
  following: 122,
  /** Tanggal berdiri menurut TikTok sendiri. */
  established: "1 Agustus 2018",
  /** Bio akun, disalin apa adanya. */
  bio: "BTR(2019), SRG(2021), NNG(2023-now) Thanks for 10.8M Subs",
  /** Tiga unggahan teratas beserta jumlah tontonannya. */
  topVideos: [
    { id: "7435665934976699655", views: 175900, label: "175,9 rb" },
    { id: "7432695983647034632", views: 101900, label: "101,9 rb" },
    { id: "7432698578037984519", views: 46500, label: "46,5 rb" },
  ],
};

export const audience = {
  tiktokFollowers: 60300 as number | null,
  tiktokLikes: 38900 as number | null,
  /** Belum terbaca: handel @vinbryyt maupun @VinBryYT mengembalikan 404. */
  youtube: null as string | null,

  igGamingFollowers: 1516,
  igPersonalFollowers: 368,
  communityFollowers: 18000,

  /** Unggahan yang diterbitkan sendiri, dua akun Instagram digabung. */
  ownPosts: 3863 + 1174,
  communityPosts: 2906,
};

/**
 * Bio akun @nayrbryan_gaming, disalin apa adanya. Baris penutupnya menyebut
 * tahun mulai yang lebih awal daripada perkiraan sebelumnya, jadi dipakai
 * sebagai kutipan langsung — bukan diringkas ulang.
 */
export const gamingBio =
  "Trading psychology & discipline / Market insights | Risk management / " +
  "Build consistency, not hype / Content creator since 2010";
