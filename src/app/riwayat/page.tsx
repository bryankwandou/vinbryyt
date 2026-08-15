import type { Metadata } from "next";
import { TimelineRail } from "@/components/TimelineRail";
import { RiwayatCV } from "@/components/RiwayatCV";
import { RiwayatIntro } from "@/components/RiwayatIntro";
import { AngkaAudiens, KutipanBio } from "@/components/AngkaAudiens";

export const metadata: Metadata = {
  title: "Riwayat",
  description:
    "Perjalanan Vincentius Bryan Kwandou dari kamera pertama sampai rel pembayaran Solana — disusun dari sumber yang bisa diperiksa.",
};

export default function RiwayatPage() {
  return (
    <>
      <RiwayatIntro />
      <TimelineRail />
      <RiwayatCV />
      <AngkaAudiens />
      <KutipanBio />
    </>
  );
}
