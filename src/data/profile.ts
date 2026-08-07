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
    "Sehari-hari saya menulis kode: aplikasi mobile, antarmuka web, dan infrastruktur pembayaran " +
    "di atas Solana. Di luar editor, saya memotret dan membuat video. Dua kebiasaan itu tidak " +
    "terpisah: keduanya soal menyusun bukti bahwa sesuatu benar-benar terjadi.",
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
  verified: boolean;
};

export const socials: SocialLink[] = [
  {
    label: "TikTok",
    handle: "@vinbryyt",
    href: "https://www.tiktok.com/@vinbryyt",
    note: "Akun utama. Nama tampilan VinBryYT.",
    verified: true, // dikonfirmasi lewat endpoint oEmbed TikTok
  },
  {
    label: "Instagram",
    handle: "@bryan_kwandou",
    href: "https://www.instagram.com/bryan_kwandou/",
    note: "Akun pribadi.",
    verified: true,
  },
  {
    label: "Instagram",
    handle: "@nayrbryan_gaming",
    href: "https://www.instagram.com/nayrbryan_gaming/",
    note: "Akun gaming.",
    verified: true,
  },
  {
    label: "GitHub",
    handle: "@bryankwandou",
    href: "https://github.com/bryankwandou",
    note: "104 repositori publik.",
    verified: true,
  },
  {
    label: "Komunitas",
    handle: "@lensanuswantara",
    href: "https://www.instagram.com/lensanuswantara/",
    note: "Komunitas fotografi Nusantara, 17.6 ribu pengikut.",
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
 * VERIFY — angka audiens.
 * TikTok dan Instagram tidak mengizinkan pembacaan otomatis atas jumlah
 * pengikut. Isi manual dari dashboard masing-masing platform.
 */
export const audience = {
  tiktokFollowers: null as number | null, // VERIFY
  tiktokLikes: null as number | null, // VERIFY
  instagramFollowers: 368, // sumber: halaman profil @bryan_kwandou
  instagramFollowing: 475, // sumber: halaman profil @bryan_kwandou
  communityReach: 17600, // sumber: @lensanuswantara
  youtube: null as string | null, // VERIFY — handle @vinbryyt dan @VinBryYT sama-sama 404
};

export const stats = [
  { value: "104", label: "Repositori publik", source: "GitHub API" },
  { value: "20+", label: "Produk dengan tautan live", source: "GitHub API" },
  { value: "17,6 rb", label: "Jangkauan komunitas foto", source: "Instagram" },
  { value: "2018", label: "Mulai bikin konten", source: "VERIFY" },
];
