import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center px-5 pt-[70px] text-center">
      <Logo size={52} />
      <p className="mono-label mt-8" style={{ color: "var(--accent)" }}>
        Galat 404
      </p>
      <h1 className="mt-5 text-[clamp(2rem,6vw,3.4rem)] font-semibold tracking-[-0.035em]">
        Halaman itu tidak ada di sini
      </h1>
      <p className="mt-5 max-w-md text-[15.5px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
        Mungkin tautannya sudah usang, atau alamatnya salah ketik. Silakan kembali ke depan.
      </p>
      <Link
        href="/"
        className="mt-9 rounded-full px-6 py-3 text-[14.5px] font-medium"
        style={{ background: "var(--accent)", color: "#0b0b0d" }}
      >
        Kembali ke beranda
      </Link>
    </section>
  );
}
