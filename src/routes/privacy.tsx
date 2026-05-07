import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Gosatnet" },
      {
        name: "description",
        content:
          "How Gosatnet collects, uses, and protects user information. Independent third-party assistance privacy practices.",
      },
      { property: "og:title", content: "Privacy Policy — Gosatnet" },
      { property: "og:description", content: "Our privacy and data handling practices." },
    ],
  }),
  component: () => (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Your privacy matters. Here's how we handle information."
      updated="2025-01-15"
    >
      <LegalSection title="1. Information We Collect">
        <p>
          We collect basic contact details you voluntarily provide (name, email, phone) and
          assistance request information. We never collect provider account passwords or sensitive
          credentials.
        </p>
      </LegalSection>
      <LegalSection title="2. How We Use Information">
        <p>
          Information is used solely to provide independent informational assistance, respond to
          inquiries, and improve our service quality. We do not sell user data to third parties.
        </p>
      </LegalSection>
      <LegalSection title="3. Cookies & Analytics">
        <p>
          Our website uses standard cookies and analytics tools to understand site usage and improve
          user experience. You may disable cookies via your browser settings.
        </p>
      </LegalSection>
      <LegalSection title="4. Information Security">
        <p>
          We apply reasonable technical and organizational safeguards to protect collected
          information. No system is perfectly secure, but we work to minimize risk.
        </p>
      </LegalSection>
      <LegalSection title="5. No Password Collection">
        <p>
          Gosatnet does not request, collect, store, or process provider account passwords or any
          sensitive financial credentials under any circumstance.
        </p>
      </LegalSection>
      <LegalSection title="6. User Rights">
        <p>
          You may request access, correction, or deletion of your personal data at any time by
          contacting our support team. We will respond within a reasonable timeframe.
        </p>
      </LegalSection>
      <LegalSection title="7. Contact">
        <p>For privacy-related inquiries: support@gosatnet.com or (888) 710-6364.</p>
      </LegalSection>
    </LegalLayout>
  ),
});
