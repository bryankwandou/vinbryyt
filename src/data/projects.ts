/**
 * Katalog pekerjaan.
 * Seluruh entri ditarik dari GitHub REST API pada 6 Agustus 2026
 * (endpoint: /users/bryankwandou/repos). Deskripsi dan tautan live
 * disalin apa adanya dari metadata repositori — tidak ada yang dikarang.
 */

export type Track = "web3" | "produk" | "mobile" | "riset" | "sipil";

export type Project = {
  slug: string;
  name: string;
  blurb: string;
  track: Track;
  language: string;
  repo: string;
  live?: string;
  year: string;
  featured?: boolean;
};

export const tracks: { id: Track; label: string; caption: string }[] = [
  { id: "web3", label: "Rel Web3", caption: "Pembayaran dan bukti di atas Solana" },
  { id: "produk", label: "Perangkat Operasional", caption: "Alat kerja untuk industri tertentu" },
  { id: "mobile", label: "Mobile", caption: "Aplikasi Flutter dan Dart" },
  { id: "riset", label: "Riset & Perkakas", caption: "Eksperimen infrastruktur dan LLM" },
  { id: "sipil", label: "Publik & Kampus", caption: "Tugas, lomba, dan layanan warga" },
];

export const projects: Project[] = [
  {
    slug: "aval-rail",
    name: "Aval Rail",
    blurb:
      "Kasir toko yang hidup di dalam percakapan pemiliknya. Durable nonce menjaga pembayaran Solana milik agen tetap sah selama manusia menimbang persetujuan — terbukti di devnet: kendali kedaluwarsa, nonce tetap final 4 jam 29 menit kemudian. Batasnya ditegakkan di Rust, bukan di prompt.",
    track: "web3",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/aval-rail",
    live: "https://aval-site.vercel.app",
    year: "2026",
    featured: true,
  },
  {
    slug: "aval-core",
    name: "Aval Core",
    blurb:
      "Substrat Solana tanpa SDK untuk plugin agen wasm32-wasip2: durable nonce, penyandian transaksi yang ditulis tangan, RPC yang bisa disuntik. Sumber kanonik untuk seluruh rangkaian Aval.",
    track: "web3",
    language: "Rust",
    repo: "https://github.com/bryankwandou/aval-core",
    year: "2026",
    featured: true,
  },
  {
    slug: "x402gate",
    name: "x402gate",
    blurb:
      "Gerbang mikropembayaran antar-API berbasis HTTP 402 di Solana devnet. Mesin membayar mesin, per permintaan, tanpa langganan.",
    track: "web3",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/x402gate",
    live: "https://x402gate.vercel.app",
    year: "2026",
    featured: true,
  },
  {
    slug: "veylock",
    name: "Veylock",
    blurb: "Tembok api eksekusi untuk modal otonom di Solana.",
    track: "web3",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/veylock",
    year: "2026",
  },
  {
    slug: "kinferry",
    name: "Kinferry",
    blurb:
      "Agen pengiriman uang di Solana devnet dengan penjaga: verifikasi penerima, plafon kebijakan, kunci kurs, dan penangkal kiriman ganda.",
    track: "web3",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/kinferry",
    year: "2026",
  },
  {
    slug: "anamneon",
    name: "Anamneon",
    blurb:
      "Riwayat penyakit pasien yang ditambatkan di Solana devnet — sidik jaringnya di rantai, datanya terenkripsi di luar rantai.",
    track: "web3",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/anamneon",
    year: "2026",
  },
  {
    slug: "visitrail",
    name: "Visitrail",
    blurb:
      "Operasi perawatan di rumah yang berpijak pada bukti: perkakas Groq langsung, penandatanganan dompet, dan jejak Solana devnet.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/visitrail",
    live: "https://visitrail.vercel.app",
    year: "2026",
    featured: true,
  },
  {
    slug: "servetrace",
    name: "ServeTrace",
    blurb:
      "Kendali kepatuhan restoran, penghalang keras untuk keselamatan pangan, penjadwalan yang aman secara ketenagakerjaan, dan bukti operasional yang ketahuan bila diutak-atik.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/servetrace",
    live: "https://servetrace.vercel.app",
    year: "2026",
    featured: true,
  },
  {
    slug: "axleveto",
    name: "AxleVeto",
    blurb: "Palang pengaman keberangkatan armada yang bisa diverifikasi.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/axleveto",
    live: "https://axleveto.vercel.app",
    year: "2026",
  },
  {
    slug: "briefrail",
    name: "BriefRail",
    blurb: "Keutuhan alur persetujuan sampai pencairan untuk agensi kreatif mandiri.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/briefrail",
    live: "https://briefrail.vercel.app",
    year: "2026",
  },
  {
    slug: "vowrail",
    name: "VowRail",
    blurb:
      "Keutuhan pengikatan polis, pencatatan klaim yang berpijak fakta, dan pencegahan polis lewat tanggal untuk agensi asuransi mandiri.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/vowrail",
    live: "https://vowrail.vercel.app",
    year: "2026",
  },
  {
    slug: "freightlatch",
    name: "FreightLatch",
    blurb:
      "Jam kerja pengemudi yang ditegakkan di server, keselamatan kendaraan, dokumen AI yang berpijak data, dan bukti Solana devnet untuk armada logistik.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/freightlatch",
    year: "2026",
  },
  {
    slug: "childcareos",
    name: "ChildcareOS",
    blurb:
      "Operasi keselamatan untuk tempat penitipan anak: penghalang keras rasio pengasuh, otorisasi penjemputan, dan pelaporan insiden yang berpijak bukti.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/childcareos",
    year: "2026",
  },
  {
    slug: "dwellnerve",
    name: "DwellNerve",
    blurb:
      "Peringatan dini operasi sewa untuk perawatan, tagihan, kepatuhan, dan bukti Solana devnet.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/dwellnerve",
    year: "2026",
  },
  {
    slug: "evercue",
    name: "Evercue",
    blurb: "Operasi acara langsung dengan alur kerja AI sungguhan dan bukti Solana devnet.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/evercue",
    year: "2026",
  },
  {
    slug: "autorepairos",
    name: "AutoRepairOS",
    blurb:
      "Perintah kerja bengkel yang dikunci persetujuan, agen diagnostik Groq langsung, dan verifikasi Solana devnet.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/autorepairos",
    year: "2026",
  },
  {
    slug: "civiflow",
    name: "CiviFlow",
    blurb: "Pengaduan layanan kota yang dipilah AI, dengan akuntabilitas SLA yang terbuka ke publik.",
    track: "sipil",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/civiflow",
    year: "2026",
  },
  {
    slug: "stewardlane",
    name: "StewardLane",
    blurb: "CRM rumah tangga yang mengutamakan kepatuhan, dengan alur penyusunan AI milik penasihat.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/stewardlane",
    year: "2026",
  },
  {
    slug: "galleryos",
    name: "GalleryOS",
    blurb: "Penyortiran, galeri, dan pengiriman hasil untuk studio fotografi.",
    track: "produk",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/galleryos",
    year: "2026",
  },
  {
    slug: "mirrorqa-ai",
    name: "MirrorQA",
    blurb:
      "Uji pelanggan sintetis yang berpijak bukti, dengan pengaman deterministik dan jejak Solana devnet.",
    track: "riset",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/mirrorqa-ai",
    year: "2026",
  },
  {
    slug: "kernly",
    name: "Kernly",
    blurb: "Pemampatan konteks deterministik untuk agen LLM, dengan tanda terima yang bisa diperiksa tiap jalan.",
    track: "riset",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/kernly",
    year: "2026",
    featured: true,
  },
  {
    slug: "loomstack",
    name: "Loomstack",
    blurb: "Korpus spesifikasi lima juta baris, plus perute yang membuatnya benar-benar terpakai.",
    track: "riset",
    language: "PLpgSQL",
    repo: "https://github.com/bryankwandou/loomstack",
    year: "2026",
  },
  {
    slug: "dissentgrid",
    name: "DissentGrid",
    blurb:
      "Keputusan investasi tanpa konsensus palsu — pertimbangan empat lensa dengan penyimpanan sanggahan yang deterministik.",
    track: "riset",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/dissentgrid",
    year: "2026",
  },
  {
    slug: "accordos-ai",
    name: "AccordOS",
    blurb:
      "Negosiasi B2B otonom dengan rel kewenangan deterministik dan penambatan bukti di Solana.",
    track: "riset",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/accordos-ai",
    year: "2026",
  },
  {
    slug: "veristart-agentic-feasibility",
    name: "VeriStart",
    blurb:
      "Analisis kelayakan ide rintisan dengan AI agentik — pipeline sembilan agen, Business Model Canvas, dan skor berbobot tujuh faktor.",
    track: "riset",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/veristart-agentic-feasibility",
    year: "2026",
  },
  {
    slug: "antigravity-ide-frontend",
    name: "Antigravity IDE",
    blurb:
      "Tiruan antarmuka IDE bergaya VS Code sepenuhnya — workbench, obrolan AI, terminal, dan penjelajah berkas.",
    track: "riset",
    language: "JavaScript",
    repo: "https://github.com/bryankwandou/antigravity-ide-frontend",
    year: "2026",
  },
  {
    slug: "solumkm",
    name: "SoluMKM",
    blurb:
      "Kopilot bisnis untuk UMKM Indonesia — mencatat dan menganalisis transaksi dari bahasa Indonesia sehari-hari, dengan catatan usaha yang bisa diperiksa lewat SHA-256. Karya untuk IDCamp Developer Challenge #2.",
    track: "sipil",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/solumkm",
    year: "2026",
    featured: true,
  },
  {
    slug: "tanki-request",
    name: "Tanki Jene",
    blurb: "Sistem permintaan layanan mobil tangki untuk PDAM Kota Makassar.",
    track: "sipil",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/tanki-request",
    year: "2026",
  },
  {
    slug: "tugas-tahap-0-satudata-sulsel",
    name: "Satu Data Sulsel",
    blurb: "Pengumpulan data Tahap 0 untuk Portal Satu Data Sulawesi Selatan.",
    track: "sipil",
    language: "JavaScript",
    repo: "https://github.com/bryankwandou/tugas-tahap-0-satudata-sulsel",
    year: "2026",
  },
  {
    slug: "cadensa",
    name: "Cadensa",
    blurb:
      "Pencatat ritme kesehatan reproduksi. Indeks Cadence, sinyal yang diolah di perangkat, dan brankas terenkripsi ujung ke ujung.",
    track: "mobile",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/cadensa",
    year: "2026",
  },
  {
    slug: "movv-bmi",
    name: "MOVV BMI",
    blurb: "Aplikasi pemantau indeks massa tubuh yang ditulis dengan Flutter.",
    track: "mobile",
    language: "Dart",
    repo: "https://github.com/bryankwandou/MOVV-BMI",
    year: "2026",
  },
  {
    slug: "pocketledger",
    name: "PocketLedger",
    blurb: "Pencatat pengeluaran yang jalan tanpa koneksi, lengkap dengan mesin transaksi berulang.",
    track: "mobile",
    language: "Dart",
    repo: "https://github.com/bryankwandou/pocketledger-offline-expense-tracker",
    year: "2026",
  },
  {
    slug: "habitforge",
    name: "HabitForge",
    blurb: "Pelacak kebiasaan harian berbasis Flutter.",
    track: "mobile",
    language: "Dart",
    repo: "https://github.com/bryankwandou/habitforge",
    year: "2026",
  },
  {
    slug: "focusforge-pomodoro",
    name: "FocusForge",
    blurb: "Pengatur sesi kerja dengan metode Pomodoro.",
    track: "mobile",
    language: "Dart",
    repo: "https://github.com/bryankwandou/focusforge-pomodoro",
    year: "2026",
  },
  {
    slug: "hydraflow-water-reminder",
    name: "HydraFlow",
    blurb: "Pengingat minum air dengan penyesuaian target harian.",
    track: "mobile",
    language: "Dart",
    repo: "https://github.com/bryankwandou/hydraflow-water-reminder",
    year: "2026",
  },
  {
    slug: "nng-tiktok-live-agent",
    name: "NNG TikTok Live Agent",
    blurb: "Agen pendamping siaran langsung TikTok, ditulis dengan Dart.",
    track: "mobile",
    language: "Dart",
    repo: "https://github.com/bryankwandou/NNG-TIKTOK-LIVE-AGENT",
    year: "2026",
  },
  {
    slug: "quantcoin",
    name: "QUANTCOIN",
    blurb:
      "Rancangan Layer 1 yang tahan komputasi kuantum: DAG multidimensi, konsensus BFT asinkron, dan kriptografi pasca-kuantum tingkat NIST 5.",
    track: "riset",
    language: "Rust",
    repo: "https://github.com/bryankwandou/QUANTCOIN",
    year: "2026",
  },
  {
    slug: "solq",
    name: "SOLQ Protocol",
    blurb:
      "Orkestrasi pembayaran non-kustodial di atas Solana. Menghubungkan QRIS dengan penyelesaian on-chain.",
    track: "web3",
    language: "CSS",
    repo: "https://github.com/bryankwandou/solq.my.id",
    live: "https://solq.my.id",
    year: "2026",
    featured: true,
  },
  {
    slug: "vinbryyt-drip-revival",
    name: "DRIP Revival",
    blurb: "Eksperimen pemulihan koleksi DRIP Haus, ditulis dengan Python.",
    track: "web3",
    language: "Python",
    repo: "https://github.com/bryankwandou/vinbryyt-drip-revival",
    year: "2026",
  },
  {
    slug: "kopedu-nft-solana",
    name: "KopEdu",
    blurb: "Koperasi pendidikan dengan keanggotaan berbasis NFT di Solana.",
    track: "web3",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/kopedu-nft-solana",
    year: "2026",
  },
  {
    slug: "solgig",
    name: "SolGig",
    blurb: "Bursa kerja lepas dengan pembayaran yang diselesaikan di Solana.",
    track: "web3",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/solgig",
    year: "2026",
  },
  {
    slug: "trustpay-sea",
    name: "TrustPay SEA",
    blurb: "Rel pembayaran dengan escrow untuk perdagangan lintas negara di Asia Tenggara.",
    track: "web3",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/trustpay-sea",
    year: "2026",
  },
  {
    slug: "nusaharvest",
    name: "NusaHarvest",
    blurb: "Penelusuran rantai pasok hasil tani dari petani sampai pembeli.",
    track: "sipil",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/NusaHarvest",
    year: "2026",
  },
  {
    slug: "smashgo",
    name: "SmashGO",
    blurb: "Aplikasi pemesanan lapangan bulu tangkis.",
    track: "sipil",
    language: "TypeScript",
    repo: "https://github.com/bryankwandou/SmashGO",
    year: "2026",
  },
];

export const featured = projects.filter((p) => p.featured);
