import { createFileRoute } from "@tanstack/react-router";
import {
  SiteLayout,
  Disclosure,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_TEL,
  SUPPORT_EMAIL,
} from "@/components/SiteLayout";
import { Mail, Phone, Clock, ShieldAlert, Send } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { useState } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Support — Get Assistance | Gosatnet" },
      {
        name: "description",
        content:
          "Contact our independent assistance team for connectivity, Wi-Fi, streaming, or cable informational guidance. Available around the clock.",
      },
      { property: "og:title", content: "Contact Gosatnet — Independent Assistance" },
      {
        property: "og:description",
        content: "Get in touch with our independent third-party assistance team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: "var(--gradient-glow)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-mono">
            / Contact
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.02]">
            We're here to <span className="gradient-text">assist</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
            Reach out for transparent informational guidance. Our advisors are friendly, patient,
            and independent.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl">
            {[
              { icon: Phone, t: "Call", v: SUPPORT_PHONE_DISPLAY, href: SUPPORT_PHONE_TEL },
              { icon: Mail, t: "Email", v: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
              { icon: Clock, t: "Hours", v: "24 / 7 / 365", href: undefined as string | undefined },
            ].map((c) => {
              const cls =
                "glass rounded-2xl p-4 corner-frame flex items-center gap-3 hover:bg-card/60 transition-colors";
              const inner = (
                <>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <c.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      {c.t}
                    </div>
                    <div className="text-sm font-semibold">{c.v}</div>
                  </div>
                </>
              );
              return c.href ? (
                <a key={c.t} href={c.href} className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={c.t} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-10 relative z-10">
        <Disclosure />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 relative overflow-hidden glass-strong gradient-border rounded-3xl p-8">
          <div className="absolute inset-x-0 top-0 h-px hairline-top" />
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-mono">
            / Send a message
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">How can we assist?</h2>
          {sent ? (
            <div className="rounded-2xl bg-primary/10 border border-primary/30 p-6 text-center">
              <p className="font-semibold">Thanks — your message has been received.</p>
              <p className="text-sm text-muted-foreground mt-1">An advisor will respond shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Full Name" id="name" required />
                <Field label="Email Address" id="email" type="email" required />
              </div>
              <Field label="Phone (optional)" id="phone" type="tel" />
              <div>
                <label className="text-sm font-medium mb-1.5 block">How can we assist?</label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Briefly describe your connectivity concern..."
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground glow-teal"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
                <a
                  href={SUPPORT_PHONE_TEL}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium glass hover:bg-card/80 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call {SUPPORT_PHONE_DISPLAY}
                </a>
              </div>
            </form>
          )}
        </div>
        <div className="space-y-4">
          <ContactCard
            icon={Phone}
            title="Phone"
            value={SUPPORT_PHONE_DISPLAY}
            sub="Toll-free assistance"
            href={SUPPORT_PHONE_TEL}
          />
          <ContactCard
            icon={Mail}
            title="Email"
            value={SUPPORT_EMAIL}
            sub="Replies within 24 hours"
            href={`mailto:${SUPPORT_EMAIL}`}
          />
          <ContactCard icon={Clock} title="Hours" value="24 / 7 / 365" sub="Always available" />
          <div className="glass rounded-2xl p-5 border-l-2 border-accent gradient-border">
            <div className="flex items-start gap-2 mb-2">
              <ShieldAlert className="w-5 h-5 text-accent mt-0.5" />
              <span className="font-semibold text-sm">Important Notice</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not request provider passwords or sensitive account credentials. If anyone
              claiming to be from Gosatnet asks for them, please report it immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-mono text-center">
          / Quick answers
        </p>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-center mb-10">
          Frequently asked
        </h2>
        <div className="space-y-3">
          {[
            {
              q: "How fast will I get a response?",
              a: "Most messages receive a reply within a few hours. Phone assistance is available continuously.",
            },
            {
              q: "Will you ask for my account passwords?",
              a: "Never. We never ask for provider passwords or sensitive credentials.",
            },
            {
              q: "Are your fees separate from my provider's bill?",
              a: "Yes. Our service fees are entirely separate from any internet, cable, or telecom provider charges.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="glass gradient-border rounded-2xl p-5 hover:-translate-y-0.5 transition-transform"
            >
              <p className="font-semibold mb-1">{f.q}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium mb-1.5 block">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full rounded-xl bg-input/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  sub,
  href,
}: {
  icon: IconType;
  title: string;
  value: string;
  sub: string;
  href?: string;
}) {
  const inner = (
    <>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
        style={{ background: "var(--gradient-primary)" }}
      >
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </div>
      <div className="font-semibold">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{sub}</div>
    </>
  );
  const cls =
    "relative overflow-hidden glass gradient-border rounded-2xl p-5 corner-frame block hover:bg-card/60 transition-colors";
  return href ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
