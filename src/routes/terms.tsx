import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Gosatnet" },
      {
        name: "description",
        content:
          "Terms governing the use of Gosatnet's independent third-party informational assistance services.",
      },
      { property: "og:title", content: "Terms & Conditions — Gosatnet" },
      {
        property: "og:description",
        content: "The terms that govern our independent assistance platform.",
      },
    ],
  }),
  component: () => (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="The terms governing your use of our assistance services."
      updated="2025-01-15"
    >
      <LegalSection title="1. Independent Assistance Role">
        <p>
          Gosatnet provides independent third-party informational assistance only. We are not
          affiliated with, authorized by, or endorsed by any internet, cable, broadband, or telecom
          provider.
        </p>
      </LegalSection>
      <LegalSection title="2. Service Limitations">
        <p>
          Our services consist of general informational guidance. We do not guarantee technical
          fixes, do not provide official provider support, and cannot resolve account-level issues
          that fall under a provider's exclusive control.
        </p>
      </LegalSection>
      <LegalSection title="3. Service Fees">
        <p>
          Fees for our assistance are entirely separate from any provider charges. Users are
          responsible for understanding fees before engaging our services.
        </p>
      </LegalSection>
      <LegalSection title="4. User Responsibilities">
        <p>
          Users agree to provide accurate information and to use our guidance responsibly.
          Implementation of any suggested step is at the user's discretion.
        </p>
      </LegalSection>
      <LegalSection title="5. Non-Affiliation Policy">
        <p>
          References to provider names are descriptive only and do not imply partnership,
          endorsement, or authorization.
        </p>
      </LegalSection>
      <LegalSection title="6. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Gosatnet is not liable for indirect, incidental,
          or consequential damages arising from informational assistance provided.
        </p>
      </LegalSection>
      <LegalSection title="7. Changes to Terms">
        <p>
          We may update these terms periodically. Continued use of the service constitutes
          acceptance of revised terms.
        </p>
      </LegalSection>
    </LegalLayout>
  ),
});
