/**
 * Garis waktu.
 * `confirmed: false` menandai butir yang belum bisa diverifikasi lewat sumber
 * terbuka — tampil di layar dengan penanda, bukan disamarkan jadi fakta.
 *
 * Tiap babak membawa versi Inggrisnya sendiri supaya pengalih bahasa di kepala
 * halaman ikut mengganti isi cerita, bukan cuma label menu.
 */

export type Chapter = {
  year: string;
  yearEn: string;
  title: string;
  titleEn: string;
  body: string;
  bodyEn: string;
  confirmed: boolean;
  source?: string;
  sourceEn?: string;
};

export const chapters: Chapter[] = [
  {
    year: "2010",
    yearEn: "2010",
    title: "Mulai menerbitkan",
    titleEn: "The publishing starts",
    body:
      "Bio akun @nayrbryan_gaming menutup dengan satu baris: content creator since 2010. " +
      "Itu titik awal paling tua yang tercatat di arsip terbuka mana pun — jauh sebelum ada " +
      "repositori untuk ditunjukkan, dan jauh sebelum kata portofolio terasa relevan.",
    bodyEn:
      "The @nayrbryan_gaming bio closes with a single line: content creator since 2010. " +
      "That is the earliest starting point recorded in any open archive — long before there " +
      "was a repository to show, and long before the word portfolio meant anything here.",
    confirmed: true,
    source: "Bio Instagram @nayrbryan_gaming",
    sourceEn: "Instagram bio, @nayrbryan_gaming",
  },
  {
    year: "1 Agustus 2018",
    yearEn: "1 August 2018",
    title: "Akun VinBryYT berdiri",
    titleEn: "The VinBryYT account opens",
    body:
      "TikTok mencatat tanggalnya sendiri: Est Aug 1, 2018. Namanya disusun dari dua penggal " +
      "nama pemiliknya, Vincentius dan Bryan. Sampai hari ini akun itu mengumpulkan 60,3 ribu " +
      "pengikut dan 38,9 ribu suka.",
    bodyEn:
      "TikTok records the date itself: Est Aug 1, 2018. The name is built from two fragments " +
      "of his own — Vincentius and Bryan. To date the account holds 60.3 thousand followers " +
      "and 38.9 thousand likes.",
    confirmed: true,
    source: "Widget embed kreator resmi TikTok",
    sourceEn: "Official TikTok creator embed widget",
  },
  {
    year: "2019",
    yearEn: "2019",
    title: "Masuk Bigetron",
    titleEn: "Joining Bigetron",
    body:
      "Bio TikTok membuka urutannya: BTR (2019). Babak esports dimulai di sini, dan sejak itu " +
      "kamera bukan cuma alat merekam jalan-jalan — ia jadi bagian dari pekerjaan bertanding.",
    bodyEn:
      "The TikTok bio opens the sequence: BTR (2019). The esports chapter starts here, and " +
      "from then on the camera stopped being a travel tool — it became part of competing.",
    confirmed: true,
    source: "Bio TikTok @vinbryyt",
    sourceEn: "TikTok bio, @vinbryyt",
  },
  {
    year: "2021",
    yearEn: "2021",
    title: "Pindah ke SRG",
    titleEn: "Moving to SRG",
    body:
      "Babak kedua dalam urutan yang sama. Dua tahun setelah BTR, dengan penonton yang sudah " +
      "terbentuk dan kebiasaan menerbitkan yang sudah jalan sendiri.",
    bodyEn:
      "The second chapter in the same sequence. Two years after BTR, with an audience already " +
      "formed and a publishing habit that had started running on its own.",
    confirmed: true,
    source: "Bio TikTok @vinbryyt",
    sourceEn: "TikTok bio, @vinbryyt",
  },
  {
    year: "Januari 2022",
    yearEn: "January 2022",
    title: "Menerbitkan karya di Tezos",
    titleEn: "Publishing work on Tezos",
    body:
      "Mulai menerbitkan karya generatif dan berbantuan mesin sebagai NFT di blockchain Tezos " +
      "lewat objkt. Empat ratus delapan puluh lima di antaranya bisa dilihat di halaman Galeri " +
      "situs ini, dan kepemilikan tiap karya bisa diperiksa siapa pun langsung di rantai.",
    bodyEn:
      "Began publishing generative and machine-assisted work as NFTs on the Tezos blockchain " +
      "through objkt. Four hundred eighty-five of them sit on this site's Gallery page, and " +
      "anyone can verify each piece's ownership directly on chain.",
    confirmed: true,
    source: "Profil LinkedIn; kontrak Tezos KT1R67wX…JwHki",
    sourceEn: "LinkedIn profile; Tezos contract KT1R67wX…JwHki",
  },
  {
    year: "2023",
    yearEn: "2023",
    title: "Berdiri sendiri lewat NNG",
    titleEn: "Standing alone under NNG",
    body:
      "NNG (2023-now) — nayrbryanGaming, bendera sendiri. Tahun yang sama dengan gelombang " +
      "pertama sertifikasi teknis, jadi dua jalur itu berjalan berdampingan sejak awal.",
    bodyEn:
      "NNG (2023-now) — nayrbryanGaming, his own banner. The same year as the first wave of " +
      "technical certificates, so the two tracks ran side by side from the start.",
    confirmed: true,
    source: "Bio TikTok @vinbryyt",
    sourceEn: "TikTok bio, @vinbryyt",
  },
  {
    year: "September 2023",
    yearEn: "September 2023",
    title: "Masuk bangku kuliah",
    titleEn: "Starting university",
    body:
      "Terdaftar di program S1 Teknik Informatika, Universitas Atma Jaya Makassar, dengan " +
      "perkiraan kelulusan Juli 2027. Seluruh riwayat sekolah sebelumnya juga di Makassar.",
    bodyEn:
      "Enrolled in the Informatics Engineering bachelor's programme at Universitas Atma Jaya " +
      "Makassar, expected to finish July 2027. Every school before it was in Makassar too.",
    confirmed: true,
    source: "Profil LinkedIn, bagian pendidikan",
    sourceEn: "LinkedIn profile, education section",
  },
  {
    year: "Maret 2024",
    yearEn: "March 2024",
    title: "Rilis mingguan di Drip.Haus",
    titleEn: "Weekly drops on Drip.Haus",
    body:
      "Bergabung dengan Drip Labs sebagai kreator NFT di Drip.Haus, jaringan Solana. Ritmenya " +
      "mingguan, dan komunitas kolektornya dibangun lewat kelangkaan dan keterlibatan, bukan iklan.",
    bodyEn:
      "Joined Drip Labs as an NFT creator on Drip.Haus, on Solana. The cadence is weekly, and " +
      "the collector community was built through rarity and engagement rather than advertising.",
    confirmed: true,
    source: "Profil LinkedIn, bagian pengalaman",
    sourceEn: "LinkedIn profile, experience section",
  },
  {
    year: "September 2025",
    yearEn: "September 2025",
    title: "Mendirikan UKM E-Sport kampus",
    titleEn: "Founding the campus esports body",
    body:
      "Mendirikan dan memimpin organisasi esport resmi Universitas Atma Jaya Makassar, berdiri " +
      "di atas Surat Keputusan Rektor Nomor 032/UAJM/Rek/Kep/VI/2025, dengan empat divisi. " +
      "Komunitasnya tumbuh dari nol menjadi lebih dari dua puluh anggota dalam bulan-bulan pertama.",
    bodyEn:
      "Founded and leads the official esports organisation at Universitas Atma Jaya Makassar, " +
      "established under Rector Decree No. 032/UAJM/Rek/Kep/VI/2025, across four divisions. " +
      "The community grew from zero to more than twenty members within its first months.",
    confirmed: true,
    source: "Profil LinkedIn; nomor SK tercantum di sana",
    sourceEn: "LinkedIn profile; the decree number is stated there",
  },
  {
    year: "21 Februari 2026",
    yearEn: "21 February 2026",
    title: "Kode mulai dibuka",
    titleEn: "The code goes public",
    body:
      "Akun GitHub dibuat pada tanggal ini, dan dalam enam bulan berikutnya terisi 128 " +
      "repositori publik — semuanya bisa dilihat di halaman Arsip. Tanggalnya diambil dari " +
      "metadata akun, jadi bisa diperiksa sendiri oleh siapa pun.",
    bodyEn:
      "The GitHub account was created on this date, and over the following six months filled " +
      "with 128 public repositories — all of them visible on the Archive page. The date comes " +
      "from the account metadata, so anyone can check it themselves.",
    confirmed: true,
    source: "GitHub API, /users/bryankwandou",
    sourceEn: "GitHub API, /users/bryankwandou",
  },
  {
    year: "Maret 2026",
    yearEn: "March 2026",
    title: "Memimpin klub blockchain kampus",
    titleEn: "Leading the campus blockchain club",
    body:
      "Menjadi ketua sekaligus pendiri UAJM Blockchain Club di bawah payung Superteam Campus, " +
      "menyambungkan mahasiswa dengan ekosistem Web3 yang lebih luas lewat sesi belajar dan lokakarya.",
    bodyEn:
      "Became campus lead and founder of the UAJM Blockchain Club under Superteam Campus, " +
      "connecting students to the wider Web3 ecosystem through study sessions and workshops.",
    confirmed: true,
    source: "Profil LinkedIn, bagian pengalaman",
    sourceEn: "LinkedIn profile, experience section",
  },
  {
    year: "April—Juni 2026",
    yearEn: "April—June 2026",
    title: "Beasiswa pengembang MANCER",
    titleEn: "The MANCER developer scholarship",
    body:
      "Terpilih sebagai peserta program percepatan karier Web3 MANCER bersama Superteam, jalur " +
      "pengembang: membangun aplikasi blockchain, mendalami perkakas Solana, dan menyelesaikan uji kerja.",
    bodyEn:
      "Selected for the MANCER and Superteam Web3 career accelerator, developer track: building " +
      "blockchain applications, learning Solana tooling, and completing technical work trials.",
    confirmed: true,
    source: "Profil LinkedIn, bagian pengalaman",
    sourceEn: "LinkedIn profile, experience section",
  },
  {
    year: "Juli 2026",
    yearEn: "July 2026",
    title: "Bulan produksi padat",
    titleEn: "A dense month of shipping",
    body:
      "Puluhan produk didorong dalam satu bulan — perangkat operasional untuk restoran, armada, " +
      "penitipan anak, asuransi, dan perawatan di rumah. Sebagian besar menautkan bukti kerjanya " +
      "ke Solana devnet.",
    bodyEn:
      "Dozens of products pushed in a single month — operations tools for restaurants, fleets, " +
      "childcare, insurance, and home care. Most of them anchor their evidence to Solana devnet.",
    confirmed: true,
    source: "Riwayat pushed_at pada GitHub API",
    sourceEn: "pushed_at history from the GitHub API",
  },
  {
    year: "Agustus 2026",
    yearEn: "August 2026",
    title: "Rel agen dan pembayaran mesin",
    titleEn: "Agent rails and machine payments",
    body:
      "Aval Rail dan Aval Core masuk tahap uji: durable nonce menahan pembayaran agen tetap sah " +
      "selama manusia menimbang persetujuan. Bukti devnet menunjukkan nonce tetap final 4 jam " +
      "29 menit setelah kendali kedaluwarsa.",
    bodyEn:
      "Aval Rail and Aval Core reached testing: a durable nonce holds an agent's payment valid " +
      "while a human weighs the approval. Devnet evidence shows the nonce still finalising four " +
      "hours and twenty-nine minutes after the ordinary window would have expired.",
    confirmed: true,
    source: "Deskripsi repositori aval-rail",
    sourceEn: "aval-rail repository description",
  },
  {
    year: "2010—2026",
    yearEn: "2010—2026",
    title: "Lima ribu unggahan",
    titleEn: "Five thousand posts",
    body:
      "Dua akun Instagram mengumpulkan 3.863 dan 1.174 unggahan; komunitas fotografi yang ikut " +
      "dibina menambah 2.906 lagi. Di TikTok, tiga unggahan teratas menembus 175,9 ribu, 101,9 " +
      "ribu, dan 46,5 ribu tontonan. Kebiasaan menerbitkan secara berkala inilah yang belakangan " +
      "terbawa ke cara bekerja dengan kode.",
    bodyEn:
      "Two Instagram accounts hold 3,863 and 1,174 posts; the photography community he helps run " +
      "adds another 2,906. On TikTok the three most-watched posts reached 175.9, 101.9, and 46.5 " +
      "thousand views. That habit of publishing on a schedule is what later carried over into how " +
      "he works with code.",
    confirmed: true,
    source: "Tag pratinjau Instagram dan widget embed TikTok",
    sourceEn: "Instagram preview tags and the TikTok embed widget",
  },
  {
    year: "Tanggal belum dipastikan",
    yearEn: "Date not established",
    title: "Kanal YouTube hilang",
    titleEn: "The YouTube channel is gone",
    body:
      "Kanal YouTube-nya ditutup pihak platform dan tidak menyisakan apa pun yang bisa " +
      "diselamatkan. Pemeriksaan ke Wayback Machine dengan lima pola alamat, pencarian luas " +
      "di seluruh arsipnya, SocialBlade, dan mesin pencari sama-sama tidak menemukan satu pun " +
      "rekaman. Bagian ini dicatat justru karena kosong: sebuah arsip yang tidak sempat dibuat " +
      "lebih jujur ditulis daripada dihapus dari cerita.",
    bodyEn:
      "The YouTube channel was closed by the platform and left nothing recoverable behind. " +
      "Checks against the Wayback Machine using five address patterns, a wide search across its " +
      "whole archive, SocialBlade, and ordinary search engines all returned nothing. This entry " +
      "is recorded precisely because it is empty: an archive that was never made is more honest " +
      "written down than quietly dropped from the story.",
    confirmed: false,
    source: "Keterangan pemilik akun; nol hasil pada seluruh arsip yang diperiksa",
    sourceEn: "Owner's account; zero results across every archive checked",
  },
];

export const certifications = [
  "Belajar Dasar Data Science",
  "Belajar Dasar UX Design",
  "Prompt Engineering untuk Software Developer",
  "Memulai Pemrograman dengan Python",
  "Belajar Back-End Pemula dengan Python",
];

export const disciplines = [
  {
    title: "Rel pembayaran",
    titleEn: "Payment rails",
    body:
      "Menyusun jalur pembayaran di atas Solana yang tetap sah ketika ada manusia menimbang " +
      "persetujuan di tengahnya — bukan yang batal karena orang butuh waktu berpikir.",
    bodyEn:
      "Building payment paths on Solana that stay valid while a human weighs the approval in " +
      "the middle — rather than expiring because someone needed a minute to think.",
    items: ["Solana", "Durable nonce", "Solana Pay", "QRIS"],
  },
  {
    title: "Perangkat operasional",
    titleEn: "Operations tools",
    body:
      "Perangkat lunak untuk pekerjaan yang salah sedikit berakibat besar: armada, restoran, " +
      "penitipan anak, perawatan di rumah. Aturannya ditegakkan di server, bukan disarankan di layar.",
    bodyEn:
      "Software for work where a small mistake carries real weight: fleets, restaurants, " +
      "childcare, home care. The rules are enforced on the server, not suggested on the screen.",
    items: ["Next.js", "PostgreSQL", "Kontrol akses", "Jejak audit"],
  },
  {
    title: "Aplikasi mobile",
    titleEn: "Mobile applications",
    body:
      "Aplikasi Flutter yang tetap berguna ketika sinyal hilang — pencatat keuangan, pengingat " +
      "kebiasaan, pemantau kesehatan.",
    bodyEn:
      "Flutter applications that stay useful when the signal drops — expense trackers, habit " +
      "reminders, health monitors.",
    items: ["Flutter", "Dart", "Luring dulu", "Firebase"],
  },
  {
    title: "Riset dan perkakas",
    titleEn: "Research and tooling",
    body:
      "Percobaan di sekitar model bahasa dan infrastruktur: pemampat konteks, penyusun spesifikasi, " +
      "penguji sintetis.",
    bodyEn:
      "Experiments around language models and infrastructure: context compressors, spec " +
      "compilers, synthetic testers.",
    items: ["Rust", "TypeScript", "LLM", "WebAssembly"],
  },
  {
    title: "Kamera dan komunitas",
    titleEn: "Camera and community",
    body:
      "Enam belas tahun menerbitkan di depan penonton, membina komunitas fotografi, dan " +
      "menerbitkan karya di dua rantai.",
    bodyEn:
      "Sixteen years of publishing in front of an audience, running a photography community, " +
      "and releasing work on two chains.",
    items: ["TikTok", "Instagram", "Tezos", "Solana"],
  },
];
