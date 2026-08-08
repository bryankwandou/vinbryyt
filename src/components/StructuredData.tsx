import { profile, socials } from "@/data/profile";
import { projects } from "@/data/projects";

/**
 * Penanda schema.org untuk mesin pencari. Isinya diambil dari berkas data yang
 * sama dengan yang dipakai halaman, jadi tidak mungkin melenceng dari isi layar.
 */
export function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.legalName,
    alternateName: profile.displayName,
    url: "https://vinbryyt.vercel.app",
    image: profile.avatar,
    email: `mailto:${profile.email}`,
    jobTitle: "Full-Stack & Web3 Developer",
    description: profile.githubBio,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jayapura",
      addressCountry: "ID",
    },
    knowsLanguage: ["id", "en"],
    knowsAbout: [
      "Solana",
      "Rust",
      "TypeScript",
      "Next.js",
      "Flutter",
      "Rel pembayaran",
      "Fotografi",
    ],
    sameAs: socials.filter((s) => s.label !== "Email").map((s) => s.href),
  };

  const work = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pekerjaan terpilih",
    itemListElement: projects
      .filter((p) => p.featured)
      .map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: p.name,
          description: p.blurb,
          programmingLanguage: p.language,
          codeRepository: p.repo,
          ...(p.live ? { url: p.live } : {}),
          author: { "@type": "Person", name: profile.legalName },
        },
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(work) }}
      />
    </>
  );
}
