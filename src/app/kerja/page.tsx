import type { Metadata } from "next";
import { WorkCatalog } from "@/components/WorkCatalog";

export const metadata: Metadata = {
  title: "Kerja",
  description:
    "Katalog lengkap: rel pembayaran Solana, perangkat operasional untuk industri, aplikasi Flutter, dan perkakas riset. Setiap entri menautkan repositori aslinya.",
};

export default function KerjaPage() {
  return <WorkCatalog />;
}
