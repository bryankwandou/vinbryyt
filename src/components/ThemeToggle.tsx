"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Mode = "dark" | "light";

/**
 * Skrip kecil yang dijalankan sebelum halaman dilukis, supaya tidak ada
 * kedipan putih ketika pengunjung memilih tema terang.
 */
export const themeBootScript = `
(function(){
  try {
    var saved = localStorage.getItem('vb-theme');
    var mode = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', mode);
  } catch (e) {}
})();
`;

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Mode) || "dark";
    setMode(current);
    setReady(true);
  }, []);

  function flip() {
    const next: Mode = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("vb-theme", next);
    } catch {
      /* penyimpanan diblokir; tema tetap berubah untuk sesi ini */
    }
  }

  return (
    <button
      onClick={flip}
      aria-label={mode === "dark" ? "Ganti ke tema terang" : "Ganti ke tema gelap"}
      className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full transition-colors"
      style={{ border: "1px solid var(--line-strong)" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {ready && (
          <motion.span
            key={mode}
            initial={{ y: 14, opacity: 0, rotate: -35 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -14, opacity: 0, rotate: 35 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="absolute"
            style={{ color: "var(--text)" }}
          >
            {mode === "dark" ? (
              /* bulan */
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M13.5 9.7A6 6 0 0 1 6.3 2.5a6 6 0 1 0 7.2 7.2Z"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              /* matahari */
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                <circle cx="8" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.35" />
                <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round">
                  <path d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1M12.9 3.1l-1.1 1.1M4.2 11.8l-1.1 1.1M12.9 12.9l-1.1-1.1M4.2 4.2 3.1 3.1" />
                </g>
              </svg>
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
