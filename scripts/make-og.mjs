/**
 * Menghasilkan public/og.png — gambar yang muncul ketika tautan situs ini
 * dibagikan. Dijalankan sekali dengan `node scripts/make-og.mjs`; hasilnya
 * ikut disimpan di Git supaya proses build tidak perlu merender apa pun.
 */

import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="tile" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFA06B"/>
      <stop offset="0.45" stop-color="#FF7A3D"/>
      <stop offset="1" stop-color="#CF4210"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.05" r="0.75">
      <stop offset="0" stop-color="#FF7A3D" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#FF7A3D" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#0b0b0d"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- kisi tipis -->
  <g stroke="#f6f3ec" stroke-opacity="0.05" stroke-width="1">
    ${Array.from({ length: 16 }, (_, i) => `<line x1="${i * 80}" y1="0" x2="${i * 80}" y2="${H}"/>`).join("")}
    ${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${i * 80}" x2="${W}" y2="${i * 80}"/>`).join("")}
  </g>

  <!-- tanda -->
  <g transform="translate(72,66)">
    <rect width="76" height="76" rx="20" fill="url(#tile)"/>
    <g transform="translate(6,6) scale(2)">
      <g stroke="#0B0B0D" stroke-width="1.9" stroke-linecap="round" opacity="0.42" fill="none">
        <path d="M23.6 9.4a9.3 9.3 0 0 1 1.5 8.2"/>
        <path d="M19.9 25.4a9.3 9.3 0 0 1-8.2-.9"/>
        <path d="M7.3 15.6a9.3 9.3 0 0 1 4.4-7.1"/>
      </g>
      <path d="M10.6 10.3 L16 21.9 L21.4 10.3" stroke="#0B0B0D" stroke-width="3.1"
            stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <circle cx="21.4" cy="10.3" r="1.85" fill="#0B0B0D"/>
    </g>
  </g>

  <text x="168" y="98" font-family="Segoe UI, Arial, sans-serif" font-size="31"
        font-weight="600" fill="#f6f3ec" letter-spacing="-0.4">VinBryYT</text>
  <text x="169" y="126" font-family="Consolas, monospace" font-size="15"
        fill="#8a857b" letter-spacing="3.4">KODE &amp; KAMERA</text>

  <text x="72" y="332" font-family="Segoe UI, Arial, sans-serif" font-size="76"
        font-weight="700" fill="#f6f3ec" letter-spacing="-2.6">Vincentius Bryan</text>
  <text x="72" y="418" font-family="Segoe UI, Arial, sans-serif" font-size="76"
        font-weight="700" fill="#f6f3ec" letter-spacing="-2.6">Kwandou</text>

  <text x="72" y="478" font-family="Segoe UI, Arial, sans-serif" font-size="25" fill="#b9b3a7">
    Rel pembayaran di atas Solana, perangkat operasional, dan aplikasi mobile.
  </text>
  <text x="72" y="514" font-family="Segoe UI, Arial, sans-serif" font-size="25" fill="#b9b3a7">
    Menerbitkan sejak 2010. Seratus empat repositori terbuka untuk diperiksa.
  </text>

  <rect x="72" y="560" width="184" height="4" rx="2" fill="#FF7A3D"/>
  <text x="${W - 72}" y="568" text-anchor="end" font-family="Consolas, monospace"
        font-size="18" fill="#8a857b">JAYAPURA · INDONESIA</text>
</svg>`;

mkdirSync(join(root, "public"), { recursive: true });
const out = join(root, "public", "og.png");

const png = await sharp(Buffer.from(svg), { density: 144 }).png({ quality: 100 }).toBuffer();
writeFileSync(out, png);

const meta = await sharp(png).metadata();
console.log(`ditulis: ${out}  ${meta.width}x${meta.height}  ${(png.length / 1024).toFixed(1)} KB`);
