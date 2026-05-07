import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Gosatnet" },
      { name: "description", content: "Our refund policy for independent third-party assistance services. Eligibility, timelines, and conditions." },
      { property: "og:title", content: "Refund Policy — Gosatnet" },
      { property: "og:description", content: "Refund eligibility and timelines for our assistance services." },
    ],
  }),
  component: () => (
    <LegalLayout title="Refund Policy" subtitle="Clear, transparent refund terms." updated="2025-01-15">
      <LegalSection title="1. Refund Window">
        <p>Refund requests are accepted within 7 to 15 days from the date of payment, depending on the type of assistance purchased.</p>
      </LegalSection>
      <LegalSection title="2. Eligibility">
        <p>Eligibility depends on the type of assistance and whether services have been substantially delivered. Completed informational sessions may not qualify for a full refund.</p>
      </LegalSection>
      <LegalSection title="3. No Unconditional Guarantees">
        <p>Gosatnet does not offer unconditional refund guarantees. All requests are reviewed in good faith on a case-by-case basis.</p>
      </LegalSection>
      <LegalSection title="4. How to Request">
        <p>To submit a refund request, email support@gosatnet.com or call (888) 710-6364 with your transaction reference and reason. We will respond within 5 business days.</p>
      </LegalSection>
      <LegalSection title="5. Processing Time">
        <p>Approved refunds are typically processed within 5 to 10 business days, subject to the policies of your payment provider.</p>
      </LegalSection>
    </LegalLayout>
  ),
});
