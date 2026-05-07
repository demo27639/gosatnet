import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Gosatnet" },
      { name: "description", content: "Gosatnet disclaimer: independent third-party assistance, brand usage clarification, and informational-only references." },
      { property: "og:title", content: "Disclaimer — Gosatnet" },
      { property: "og:description", content: "Important disclosures about our role and brand references." },
    ],
  }),
  component: () => (
    <LegalLayout title="Disclaimer" subtitle="Important disclosures about our independent role." updated="2025-01-15">
      <LegalSection title="1. Independent Business">
        <p>Gosatnet is an independent third-party assistance provider. We are not an Internet Service Provider, cable provider, telecom company, or streaming service.</p>
      </LegalSection>
      <LegalSection title="2. No Provider Affiliation">
        <p>We are not affiliated with, authorized by, sponsored by, or endorsed by any internet, cable, broadband, telecom, or streaming provider.</p>
      </LegalSection>
      <LegalSection title="3. Brand & Trademark References">
        <p>Any third-party brand or trademark names appearing on this website are referenced descriptively for informational purposes only. All trademarks are property of their respective owners.</p>
      </LegalSection>
      <LegalSection title="4. Informational-Only References">
        <p>Content on this website is provided for general informational purposes. It is not professional technical advice and does not guarantee specific outcomes.</p>
      </LegalSection>
      <LegalSection title="5. No Guarantees">
        <p>Gosatnet makes no guarantees regarding the resolution of connectivity issues, as those depend on factors outside our control.</p>
      </LegalSection>
    </LegalLayout>
  ),
});
