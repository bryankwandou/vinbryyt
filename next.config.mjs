/** @type {import('next').NextConfig} */

/*
  Header keamanan.

  Situs ini hanya menyajikan halaman statis, tetapi sematan TikTok memuat
  skrip dan iframe dari domainnya sendiri — jadi aturannya dibuat seketat
  mungkin sambil tetap membiarkan sematan itu bekerja. Yang dilarang jauh
  lebih banyak daripada yang diizinkan.
*/
const kebijakanIsi = [
  "default-src 'self'",
  // Next menyuntikkan skrip sebaris untuk hidrasi, jadi 'unsafe-inline' belum bisa dilepas
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.tiktok.com https://lf16-tiktok-web.ttwstatic.com https://*.tiktokcdn.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://avatars.githubusercontent.com https://opengraph.githubassets.com https://*.tiktokcdn.com https://p16-sign-va.tiktokcdn.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.tiktok.com https://*.tiktokcdn.com",
  "frame-src https://www.tiktok.com",
  "media-src 'self' https://*.tiktokcdn.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const header = [
  { key: "Content-Security-Policy", value: kebijakanIsi },
  // situs ini tidak pernah pantas dipasang di dalam bingkai orang lain
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // tidak ada satu pun fitur perangkat yang dibutuhkan halaman ini
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "opengraph.githubassets.com" },
    ],
  },

  async headers() {
    return [{ source: "/:path*", headers: header }];
  },
};

export default nextConfig;
