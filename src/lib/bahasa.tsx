"use client";

/**
 * Pengalih bahasa untuk seluruh situs.
 *
 * Pilihan pembaca disimpan di localStorage dan dipasang ke atribut lang pada
 * elemen html supaya pembaca layar dan mesin pengindeks ikut tahu bahasanya
 * berubah. Bahasa awal mengikuti setelan peramban: pengunjung berbahasa
 * Indonesia langsung mendapat teks Indonesia, sisanya mendapat Inggris.
 */

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Bahasa = "id" | "en";

const KUNCI = "vb-lang";

type Isi = { bahasa: Bahasa; ganti: (b: Bahasa) => void; siap: boolean };
const Konteks = createContext<Isi>({ bahasa: "id", ganti: () => {}, siap: false });

/**
 * Skrip yang dijalankan sebelum halaman dilukis, supaya atribut lang sudah
 * benar sejak awal dan tidak ada kedipan pergantian bahasa.
 */
export const bahasaBootScript = `
(function(){
  try {
    var t = localStorage.getItem('${KUNCI}');
    if (t !== 'id' && t !== 'en') {
      var n = (navigator.language || 'id').toLowerCase();
      t = n.startsWith('id') ? 'id' : 'en';
    }
    document.documentElement.setAttribute('lang', t);
    document.documentElement.setAttribute('data-lang', t);
  } catch (e) {}
})();
`;

export function PenyediaBahasa({ children }: { children: ReactNode }) {
  const [bahasa, setBahasa] = useState<Bahasa>("id");
  const [siap, setSiap] = useState(false);

  useEffect(() => {
    const dari = document.documentElement.getAttribute("data-lang");
    setBahasa(dari === "en" ? "en" : "id");
    setSiap(true);
  }, []);

  const ganti = (b: Bahasa) => {
    setBahasa(b);
    document.documentElement.setAttribute("lang", b);
    document.documentElement.setAttribute("data-lang", b);
    try {
      localStorage.setItem(KUNCI, b);
    } catch {}
  };

  return <Konteks.Provider value={{ bahasa, ganti, siap }}>{children}</Konteks.Provider>;
}

export function useBahasa() {
  return useContext(Konteks);
}

/**
 * Memilih salah satu dari sepasang teks.
 *
 * Sebelum komponen terpasang, versi Indonesia yang dipakai — sama persis
 * dengan yang dirender di server, supaya hidrasi React tidak dibatalkan.
 */
export function useTeks() {
  const { bahasa, siap } = useBahasa();
  return (id: string, en: string) => (siap && bahasa === "en" ? en : id);
}

/** Bentuk komponen, untuk dipakai langsung di dalam JSX. */
export function T({ id, en }: { id: ReactNode; en: ReactNode }) {
  const { bahasa, siap } = useBahasa();
  return <>{siap && bahasa === "en" ? en : id}</>;
}
