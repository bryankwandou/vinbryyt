import type { Metadata } from "next";
import { KontakIsi } from "@/components/KontakIsi";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Cara menghubungi Vincentius Bryan Kwandou — email, GitHub, LinkedIn, TikTok, Instagram, dan koleksi Tezos.",
};

export default function KontakPage() {
  return <KontakIsi />;
}
