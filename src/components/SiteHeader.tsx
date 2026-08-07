"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Wordmark } from "./Logo";

const nav = [
  { href: "/", label: "Beranda" },
  { href: "/kerja", label: "Kerja" },
  { href: "/riwayat", label: "Riwayat" },
  { href: "/kontak", label: "Kontak" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [lifted, setLifted] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setLifted(v > 24));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className="transition-all duration-500"
          style={{
            background: lifted ? "color-mix(in srgb, var(--page) 82%, transparent)" : "transparent",
            backdropFilter: lifted ? "blur(14px) saturate(150%)" : "none",
            borderBottom: `1px solid ${lifted ? "var(--line)" : "transparent"}`,
          }}
        >
          <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-5 sm:px-8">
            <Link href="/" aria-label="VinBryYT, ke beranda">
              <Wordmark />
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative rounded-full px-4 py-2 text-[13.5px] transition-colors"
                    style={{ color: active ? "var(--text)" : "var(--text-dim)" }}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "color-mix(in srgb, var(--text) 8%, transparent)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                );
              })}
              <a
                href="https://github.com/bryankwandou"
                target="_blank"
                rel="noreferrer"
                className="ml-3 rounded-full px-4 py-2 text-[13.5px] font-medium transition-transform hover:-translate-y-px"
                style={{ background: "var(--accent)", color: "#0b0b0d" }}
              >
                GitHub
              </a>
            </nav>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
              style={{ border: "1px solid var(--line-strong)" }}
            >
              <span className="relative block h-3 w-4">
                <motion.span
                  animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="absolute left-0 top-0 block h-[1.5px] w-4"
                  style={{ background: "var(--text)" }}
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute left-0 top-[5px] block h-[1.5px] w-4"
                  style={{ background: "var(--text)" }}
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="absolute left-0 top-[10px] block h-[1.5px] w-4"
                  style={{ background: "var(--text)" }}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8 md:hidden"
            style={{ background: "var(--page)" }}
          >
            <nav className="flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className="block py-3 text-4xl tracking-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: pathname === item.href ? "var(--accent)" : "var(--text)",
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
