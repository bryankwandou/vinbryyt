/**
 * Padanan Inggris untuk deskripsi tiap proyek terkurasi.
 *
 * Dipisah dari projects.ts supaya berkas data utama tetap terbaca sebagai
 * satu bahasa. Kuncinya memakai slug yang sama; kalau ada slug yang belum
 * punya padanan, halaman jatuh kembali ke teks Indonesianya — lebih baik
 * satu kalimat berbahasa lain daripada kolom kosong.
 */

export const blurbEn: Record<string, string> = {
  "aval-rail":
    "A shop till that lives inside the owner's own conversation. A durable nonce keeps the Solana payment valid while a human decides, so approval no longer races the clock.",
  "aval-core":
    "An SDK-less Solana substrate for wasm32-wasip2 agent plugins: durable nonces, transaction encoding, and policy checks that run before anything is signed.",
  "x402gate":
    "An HTTP 402 micropayment gate between APIs on Solana devnet. Machines pay machines, per call, without anyone holding a card.",
  veylock: "An execution firewall for autonomous capital on Solana.",
  kinferry:
    "A remittance agent on Solana devnet with guards in front of it: recipient verification, policy ceilings, and quotas the agent cannot raise on its own.",
  anamneon:
    "Patient histories anchored to Solana devnet — the fingerprint goes on chain, the medical data never does.",
  visitrail:
    "Home-care operations built on evidence: live Groq tooling, document signing, and staffing recommendations tied to what was actually observed.",
  servetrace:
    "Restaurant compliance controls, hard stops for food safety, and scheduling that stays inside labour law.",
  axleveto: "A verifiable dispatch safety interlock for commercial fleets.",
  briefrail: "End-to-end approval and payout integrity for independent creative agencies.",
  vowrail:
    "Policy binding integrity, grounded claim records, and lapse prevention through a signed evidence trail.",
  freightlatch:
    "Server-enforced driver hours, vehicle safety checks, and AI paperwork that stays grounded in the records behind it.",
  childcareos:
    "Safety operations for childcare centres: hard stops on staffing ratios, pickup authorisation, and incident records that cannot be quietly edited.",
  dwellnerve:
    "Early-warning rental operations covering maintenance, billing, compliance, and Solana devnet evidence.",
  evercue: "Live event operations with genuine AI workflows and Solana devnet proof.",
  autorepairos:
    "Repair orders locked behind approval, a live Groq diagnostic agent, and verification the customer can check themselves.",
  civiflow: "AI-triaged municipal complaints, with SLA accountability published in the open.",
  stewardlane: "A compliance-first household CRM with an advisor-owned AI drafting workflow.",
  galleryos: "Culling, galleries, and delivery for photography studios.",
  "mirrorqa-ai":
    "Evidence-grounded synthetic customer testing, with deterministic guardrails and a Solana devnet trail.",
  kernly:
    "Deterministic context compression for LLM agents, with a receipt that can be checked for every token it claims to save.",
  loomstack: "A five-million-line spec corpus, plus the router that makes it genuinely usable.",
  dissentgrid:
    "Investment decisions without false consensus — four analytical lenses, with every dissent kept on the record.",
  "accordos-ai":
    "Autonomous B2B negotiation with deterministic authority rails and evidence anchored on Solana.",
  "veristart-agentic-feasibility":
    "Startup feasibility analysis with agentic AI — a nine-agent pipeline, a Business Model Canvas, and automated market research.",
  "antigravity-ide-frontend":
    "A complete interface clone of a VS Code-style IDE — workbench, AI chat, terminal, and file explorer.",
  solumkm:
    "A business copilot for Indonesian small traders — recording and analysing transactions from plain spoken Indonesian.",
  "tanki-request": "A water-tanker service request system for the Makassar municipal water utility.",
  "tugas-tahap-0-satudata-sulsel":
    "Phase 0 data collection for the South Sulawesi open data portal.",
  cadensa:
    "A reproductive-health rhythm tracker. A Cadence Index, signals processed on the device, and a vault that never leaves it.",
  "movv-bmi": "A body mass index monitor written in Flutter.",
  pocketledger: "An expense tracker that works with no connection, including a recurring transaction engine.",
  habitforge: "A daily habit tracker built on Flutter.",
  "focusforge-pomodoro": "A work session timer using the Pomodoro method.",
  "hydraflow-water-reminder": "A water reminder that adjusts the daily target as it goes.",
  "nng-tiktok-live-agent":
    "An audio player that runs on six systems — Android, iOS, web, Windows, macOS, and Linux — from one Dart codebase.",
  quantcoin:
    "A Layer 1 design aimed at surviving quantum computing: a multi-dimensional DAG, asynchronous BFT consensus, and post-quantum cryptography.",
  solq:
    "Non-custodial payment orchestration on Solana. It connects Indonesia's QRIS standard to on-chain settlement.",
  "vinbryyt-drip-revival": "An experiment in reviving a DRIP Haus collection, written in Python.",
  "kopedu-nft-solana": "An education cooperative with NFT-based membership on Solana.",
  solgig: "A freelance marketplace where the payment settles on Solana.",
  "trustpay-sea": "An escrow payment rail for cross-border trade in Southeast Asia.",
  nusaharvest: "Supply-chain tracing for farm produce, from the grower to the buyer.",
  smashgo: "A badminton court booking application.",
};
