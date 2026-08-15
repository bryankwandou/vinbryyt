import type { Metadata } from "next";
import { GaleriIsi } from "@/components/GaleriIsi";
import type { Foto } from "@/components/GalleryGrid";
import foto from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Karya NFT Vincentius Bryan Kwandou di blockchain Tezos — dirilis lewat objkt sejak 2023, kepemilikannya bisa diperiksa siapa saja di rantai.",
};

export default function GaleriPage() {
  return <GaleriIsi foto={foto as Foto[]} />;
}
