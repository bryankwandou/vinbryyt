/**
 * Tanda VinBryYT.
 *
 * Bentuknya menggabungkan dua hal yang mengisi hari pemiliknya: bilah rana
 * kamera dan huruf V. Cincin luar terpotong seperti diafragma yang sedang
 * membuka; goresan di tengah membentuk V yang ujungnya menukik. Dibuat dari
 * geometri, bukan garis tangan, supaya tetap terbaca pada ukuran 16 piksel.
 */

type Props = {
  size?: number;
  className?: string;
  /** Tanda saja tanpa ubin latar — untuk dipakai di atas bidang gelap. */
  bare?: boolean;
  title?: string;
};

export function Logo({ size = 32, className, bare = false, title = "VinBryYT" }: Props) {
  const uid = bare ? "bare" : "tile";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={`vb-grad-${uid}`} x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFA06B" />
          <stop offset="0.45" stopColor="#FF7A3D" />
          <stop offset="1" stopColor="#CF4210" />
        </linearGradient>
        <linearGradient id={`vb-ring-${uid}`} x1="16" y1="3" x2="16" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0B25C" />
          <stop offset="1" stopColor="#F2571B" />
        </linearGradient>
      </defs>

      {!bare && <rect width="32" height="32" rx="8.5" fill={`url(#vb-grad-${uid})`} />}

      {/* Bilah rana: tiga busur terpotong yang menyusun lingkaran diafragma */}
      <g
        stroke={bare ? `url(#vb-ring-${uid})` : "#0B0B0D"}
        strokeWidth="1.9"
        strokeLinecap="round"
        opacity={bare ? 0.85 : 0.42}
      >
        <path d="M23.6 9.4a9.3 9.3 0 0 1 1.5 8.2" />
        <path d="M19.9 25.4a9.3 9.3 0 0 1-8.2-.9" />
        <path d="M7.3 15.6a9.3 9.3 0 0 1 4.4-7.1" />
      </g>

      {/* Huruf V — goresan utama */}
      <path
        d="M10.6 10.3 L16 21.9 L21.4 10.3"
        stroke={bare ? "currentColor" : "#0B0B0D"}
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Titik rana di puncak lengan kanan */}
      <circle cx="21.4" cy="10.3" r="1.85" fill={bare ? `url(#vb-ring-${uid})` : "#0B0B0D"} />
    </svg>
  );
}

/** Tanda plus nama, dipakai di kepala halaman dan kaki halaman. */
export function Wordmark({ size = 30 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Logo size={size} />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight" style={{ color: "var(--text)" }}>
          VinBryYT
        </span>
        <span className="mt-[3px] font-mono text-[9px] tracking-[0.18em]" style={{ color: "var(--text-faint)" }}>
          KODE &amp; KAMERA
        </span>
      </span>
    </span>
  );
}
