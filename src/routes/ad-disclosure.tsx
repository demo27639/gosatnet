import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/ad-disclosure")({
  head: () => ({
    meta: [
      { title: "Advertisement Disclosure | Gosatnet" },
      {
        name: "description",
        content:
          "Gosatnet advertisement disclosure: how we promote our independent third-party assistance platform.",
      },
      { property: "og:title", content: "Advertisement Disclosure — Gosatnet" },
      {
        property: "og:description",
        content: "Transparency about our advertising and promotional practices.",
      },
    ],
  }),
  component: () => (
    <LegalLayout
      title="Advertisement Disclosure"
      subtitle="Transparency about how we promote our services."
      updated="2025-01-15"
    >
      <LegalSection title="1. Independent Advertising">
        <p>
          All advertisements promoting Gosatnet refer exclusively to our independent third-party
          assistance services. They do not represent any internet, cable, or telecom provider.
        </p>
      </LegalSection>
      <LegalSection title="2. Promotional Campaign Disclosures">
        <p>
          Promotional campaigns clearly identify Gosatnet as the advertiser and disclose our
          independent status. We do not run advertisements that imply official provider
          partnerships.
        </p>
      </LegalSection>
      <LegalSection title="3. Independent Operation">
        <p>
          Gosatnet operates and finances all advertising independently. We do not receive provider
          sponsorship, certification, or co-branded promotional support.
        </p>
      </LegalSection>
      <LegalSection title="4. Informational Marketing Approach">
        <p>
          Our marketing focuses on transparent, informational messaging. Calls-to-action describe
          assistance, guidance, and support — never plan activation, official setup, or provider
          services.
        </p>
      </LegalSection>
      <LegalSection title="5. Reporting Concerns">
        <p>
          If you encounter an advertisement claiming to represent Gosatnet that contradicts these
          principles, please report it to support@gosatnet.com or call (888) 710-6364.
        </p>
      </LegalSection>
    </LegalLayout>
  ),
});
