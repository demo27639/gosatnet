import { createFileRoute, Link } from "@tanstack/react-router";
import {
  SiteLayout,
  Disclosure,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_TEL,
} from "@/components/SiteLayout";
import { Target, Heart, ShieldCheck, Users, ArrowUpRight, Phone } from "lucide-react";
import advisorImg from "@/assets/advisor.jpg";
import globeImg from "@/assets/network-globe.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Third-Party Assistance Startup | Gosatnet" },
      {
        name: "description",
        content:
          "Gosatnet is a third-party startup focused on transparent, informational connectivity assistance. Not affiliated with any provider.",
      },
      { property: "og:title", content: "About Gosatnet" },
      {
        property: "og:description",
        content: "Our story, mission, and transparency-first approach to assistance.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    t: "Transparency first",
    d: "We're upfront about who we are, what we do, and what we don't do.",
  },
  {
    icon: Heart,
    t: "User-centered help",
    d: "Every interaction prioritizes clarity, patience, and accuracy.",
  },
  {
    icon: Target,
    t: "Focused mission",
    d: "Informational guidance — no plans, no upsells, no hidden affiliations.",
  },
  {
    icon: Users,
    t: "Friendly advisors",
    d: "A startup-minded team committed to honest, approachable support.",
  },
];

const timeline = [
  { y: "2022", t: "Founded", d: "Gosatnet launched as a third-party assistance startup." },
  {
    y: "2023",
    t: "Service expansion",
    d: "Added streaming, smart home, and multi-device support.",
  },
  { y: "2024", t: "Transparency framework", d: "Published a public disclosure standard." },
  {
    y: "2025",
    t: "Platform refresh",
    d: "Modernized our experience with accessibility and clarity.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <img
          src={globeImg}
          alt=""
          aria-hidden
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 radial-mask"
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-mono">
            / About Gosatnet
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-4xl leading-[1.02]">
            A transparency-first <span className="gradient-text">assistance startup</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
            Gosatnet exists to make connectivity less confusing. We provide informational guidance —
            and only that.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {["Independent", "Transparent", "Plain-language", "24/7"].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full glass text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-10 relative z-10">
        <Disclosure />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <img
              src={advisorImg}
              alt="Gosatnet team"
              loading="lazy"
              width={1280}
              height={1280}
              className="relative rounded-3xl border border-border/50 shadow-2xl"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-mono">
              / Our story
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Built around honest, helpful information
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              We started Gosatnet after watching friends and family struggle with confusing setup
              guides, conflicting advice, and unclear support channels.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We don't sell internet plans. We don't represent any provider. We simply offer the
              kind of friendly, informational guidance everyone deserves.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-card/30" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-mono">
            / Values
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-10 max-w-2xl">
            What we stand for
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div
                key={v.t}
                className="relative overflow-hidden glass gradient-border rounded-3xl p-7 hover:-translate-y-1 transition-all"
              >
                <div className="absolute inset-x-0 top-0 h-px hairline-top" />
                <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground tracking-[0.2em]">
                  0{i + 1}
                </span>
                <div
                  className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <v.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-mono text-center">
          / Timeline
        </p>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-center mb-12">
          Our journey
        </h2>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/40 to-transparent" />
          {timeline.map((t, i) => (
            <div
              key={t.y}
              className={`relative grid md:grid-cols-2 gap-6 mb-8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
            >
              <div
                className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`}
              >
                <div className="text-2xl font-display font-bold gradient-text">{t.y}</div>
                <h3 className="font-semibold mt-1">{t.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.d}</p>
              </div>
              <div
                className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full ring-4 ring-background"
                style={{ background: "var(--gradient-primary)" }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: "12k+", l: "Users assisted" },
            { v: "98%", l: "Satisfaction" },
            { v: "24/7", l: "Availability" },
            { v: "100%", l: "Independent" },
          ].map((s) => (
            <div
              key={s.l}
              className="relative glass gradient-border rounded-3xl p-6 text-center overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px hairline-top" />
              <div className="text-2xl md:text-3xl font-display font-bold gradient-text">{s.v}</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong gradient-border p-10 md:p-14 text-center">
          <div
            className="absolute inset-0 opacity-40"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div className="relative">
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight">
              Want to learn more?
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              Reach out — we're happy to explain our role.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={SUPPORT_PHONE_TEL}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground glow-teal"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Phone className="w-4 h-4" /> Call {SUPPORT_PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium glass hover:bg-card/80 transition-colors"
              >
                Send a message <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
