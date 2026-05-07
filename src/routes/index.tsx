import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Wifi, Tv, Router, Smartphone, HeadphonesIcon, ShieldCheck, CheckCircle2, XCircle, Phone, MessageSquare, ChevronDown, Star, Users, Clock, Globe, Zap, Compass, Activity, Signal } from "lucide-react";
import { useState } from "react";
import { SiteLayout, Disclosure, SUPPORT_PHONE_DISPLAY, SUPPORT_PHONE_TEL, SUPPORT_EMAIL } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-gosatnet.jpg";
import heroNetImg from "@/assets/hero-network.jpg";
import advisorImg from "@/assets/advisor.jpg";
import streamImg from "@/assets/living-stream.jpg";
import globeImg from "@/assets/network-globe.jpg";
import routerImg from "@/assets/router-setup.jpg";
import streamingHomeImg from "@/assets/streaming-home.jpg";
import teamImg from "@/assets/team-office.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gosatnet — Premium Internet & Cable Assistance Platform" },
      { name: "description", content: "Get transparent informational guidance for Wi-Fi setup, internet connectivity, streaming, and cable concerns. A premium third-party assistance experience." },
      { property: "og:title", content: "Gosatnet — Internet & Cable Assistance Platform" },
      { property: "og:description", content: "Transparent third-party informational guidance for connectivity, Wi-Fi, streaming, and cable concerns." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Wifi, title: "Wi-Fi Setup Guidance", desc: "Step-by-step support for configuring home and office Wi-Fi networks.", img: routerImg },
  { icon: Globe, title: "Internet Connectivity Help", desc: "Guidance for understanding connectivity behavior and modem indicators.", img: heroNetImg },
  { icon: Tv, title: "Streaming Assistance", desc: "Help with streaming devices, apps, and home entertainment setup.", img: streamingHomeImg },
  { icon: Router, title: "Device Connection Support", desc: "Pairing routers, extenders, and smart devices on home networks.", img: globeImg },
  { icon: HeadphonesIcon, title: "Cable Information Support", desc: "Information on cable services, terminology, and configuration concepts.", img: streamImg },
  { icon: Smartphone, title: "Multi-Device Guidance", desc: "Support across phones, tablets, laptops, and smart TVs.", img: teamImg },
];

const faqs = [
  { q: "Are you an Internet Service Provider (ISP)?", a: "No. Gosatnet is a third-party assistance platform. We do not provide internet, cable, or telecom services and we are not affiliated with any provider." },
  { q: "Do you sell internet or cable plans?", a: "No. We offer informational guidance only. Service plans must be purchased directly from your provider of choice." },
  { q: "Are your assistance fees separate from provider charges?", a: "Yes. Our service fees are completely separate. Your provider continues to bill you directly for their own services." },
  { q: "Will my provider still bill me?", a: "Yes. Your existing provider relationship and billing remain entirely between you and them." },
  { q: "Do you ever request my provider passwords?", a: "Never. We do not request, collect, or store provider account passwords or sensitive credentials." },
  { q: "Am I eligible for a refund?", a: "Refund requests are reviewed within 7–15 days of payment based on assistance type and completion status. See our Refund Policy for full details." },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <MarqueeStrip />
      <DisclosureBanner />
      <FeaturePillars />
      <ShowcaseSplit />
      <TransparencyLedger />
      <ServicesMosaic />
      <ProcessRail />
      <StatsBlock />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full opacity-30 blur-3xl pointer-events-none" style={{ background: "var(--gradient-glow)" }} />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-12">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 animate-[fade-up_0.8s_ease-out]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-[pulse-ring_3.2s_ease-out_infinite]" />
                <span className="relative w-2 h-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono uppercase tracking-[0.18em] text-[10px] text-muted-foreground">Independent · Always-on</span>
            </div>

            <h1 className="font-display text-[2.4rem] sm:text-5xl md:text-[4rem] leading-[0.98] tracking-tight">
              Connectivity,
              <br />
              <span className="relative inline-block">
                <span className="gradient-text">decoded</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden>
                  <path d="M0 4 Q50 0 100 4 T200 4" stroke="url(#u)" strokeWidth="2" fill="none" />
                  <defs>
                    <linearGradient id="u" x1="0" x2="1">
                      <stop offset="0" stopColor="oklch(0.72 0.15 200)" />
                      <stop offset="1" stopColor="oklch(0.65 0.2 295)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              for everyday people.
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              A premium third-party assistance platform — friendly, transparent informational guidance for Wi-Fi, internet, streaming and cable concerns. Never your provider, always on your side.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SUPPORT_PHONE_TEL} className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground glow-teal transition-all hover:scale-[1.02]" style={{ background: "var(--gradient-primary)" }}>
                <Phone className="w-4 h-4" /> Call {SUPPORT_PHONE_DISPLAY} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium glass hover:bg-card/80 transition-colors">
                <Compass className="w-4 h-4" /> Browse Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground font-mono uppercase tracking-[0.18em]">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> No password requests</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> No provider affiliation</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Plain-language guidance</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-[fade-up_1s_ease-out]">
            <HeroVisual />
          </div>
        </div>

        <HeroStatRibbon />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative max-w-[520px] mx-auto">
      <div className="absolute -inset-6 rounded-[2.5rem] opacity-50 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-40 blur-3xl bg-accent" />

      <div className="relative rounded-[2rem] overflow-hidden gradient-border shadow-2xl">
        <img src={heroImg} alt="Premium home connectivity" width={1536} height={1024} className="w-full h-full object-cover aspect-[5/6]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--background) 80%, transparent))" }} />
        <div className="absolute inset-x-0 top-0 h-px hairline-top" />

        {/* corner crosshair markers */}
        <span className="absolute top-4 left-4 w-3 h-3 border-t border-l border-primary/70" />
        <span className="absolute top-4 right-4 w-3 h-3 border-t border-r border-primary/70" />
        <span className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-primary/70" />
        <span className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-primary/70" />

        {/* live caption */}
        <div className="absolute left-4 right-4 bottom-4 glass-strong rounded-2xl p-4 flex items-center gap-3">
          <span className="relative flex w-2.5 h-2.5">
            <span className="absolute inset-0 rounded-full bg-primary animate-[pulse-ring_3.2s_ease-out_infinite]" />
            <span className="relative w-2.5 h-2.5 rounded-full bg-primary" />
          </span>
          <div className="flex-1">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Live</div>
            <div className="text-sm font-semibold">Advisors online — 24 / 7</div>
          </div>
          <Activity className="w-4 h-4 text-primary" />
        </div>
      </div>

      {/* floating side badges */}
      <div className="absolute -left-5 top-10 glass-strong rounded-2xl p-3 animate-float hidden md:flex items-center gap-2 corner-frame">
        <ShieldCheck className="w-4 h-4 text-accent" />
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Trust</div>
          <div className="text-xs font-semibold">No credentials</div>
        </div>
      </div>
      <div className="absolute -right-5 top-1/3 glass-strong rounded-2xl p-3 animate-float hidden md:flex items-center gap-2 corner-frame" style={{ animationDelay: "1.2s" }}>
        <Star className="w-4 h-4 text-primary" />
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Rated</div>
          <div className="text-xs font-semibold">4.8 / 5</div>
        </div>
      </div>
    </div>
  );
}

function HeroStatRibbon() {
  const ribbon = [
    { v: "12k+", l: "Households guided", icon: Users },
    { v: "24/7", l: "Advisor availability", icon: Clock },
    { v: "98%", l: "Reported satisfaction", icon: Star },
    { v: "0", l: "Passwords requested", icon: ShieldCheck },
  ];
  return (
    <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 rounded-3xl glass-strong overflow-hidden divide-x divide-y md:divide-y-0 divide-border/50 gradient-border">
      {ribbon.map((r) => (
        <div key={r.l} className="p-5 md:p-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
            <r.icon className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-display font-bold gradient-text leading-none">{r.v}</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">{r.l}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MarqueeStrip() {
  const items = ["Wi-Fi Setup", "Modem Diagnostics", "Streaming Help", "Smart Home", "Router Pairing", "Cable Concepts", "Multi-Device", "Network Tips"];
  return (
    <div className="border-y border-border/40 bg-card/20 overflow-hidden">
      <div className="flex gap-12 py-4 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-primary" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function DisclosureBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 mt-10 relative z-10">
      <Disclosure />
    </section>
  );
}

function FeaturePillars() {
  const pillars = [
    { icon: ShieldCheck, t: "Transparent by design", d: "Clear communication about who we are, what we do, and what we don't." },
    { icon: Compass, t: "Guidance, not gatekeeping", d: "Patient, plain-language advice from independent advisors." },
    { icon: Zap, t: "Around the clock", d: "Reach our team any time — connectivity questions don't wait." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid md:grid-cols-3 gap-4">
        {pillars.map((p, i) => (
          <div key={p.t} className="relative glass rounded-2xl p-7 hover:border-primary/40 transition-colors">
            <span className="absolute top-5 right-5 text-xs font-mono text-muted-foreground">0{i + 1}</span>
            <p.icon className="w-7 h-7 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">{p.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShowcaseSplit() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-card/30" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold">Who we are</p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">A clear, friendly path through everyday connectivity questions</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Gosatnet is a third-party assistance platform. We help you understand setup steps, troubleshoot common scenarios, and learn best practices — without ever pretending to be your provider.</p>
          <ul className="mt-6 space-y-3">
            {["Plain-language explanations", "No credential collection", "Separate, transparent fees"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> {t}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7 relative">
          <img src={advisorImg} alt="Gosatnet advisor at workstation" loading="lazy" width={1280} height={896} className="rounded-3xl border border-border/50 shadow-2xl" />
        </div>
      </div>
    </section>
  );
}

function TransparencyLedger() {
  const items = [
    { good: "Independent informational guidance", bad: "Not an Internet Service Provider" },
    { good: "Transparent service explanations", bad: "No official provider support" },
    { good: "Clear separate service fees", bad: "No telecom partnerships" },
    { good: "General connectivity guidance", bad: "We do not sell internet plans" },
    { good: "Best-practice recommendations", bad: "No guaranteed technical fixes" },
    { good: "Friendly third-party support", bad: "No password collection" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3 font-semibold">Transparency ledger</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">What we do — and what falls outside our role</h2>
      </div>
      <div className="rounded-3xl glass-strong overflow-hidden divide-y divide-border/50">
        <div className="grid grid-cols-2 px-6 py-3 text-xs uppercase tracking-wider text-muted-foreground bg-card/40">
          <span>We do</span>
          <span>We don't</span>
        </div>
        {items.map((it, i) => (
          <div key={i} className="grid grid-cols-2 px-6 py-4 text-sm hover:bg-card/30 transition-colors">
            <div className="flex items-start gap-2 pr-4"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {it.good}</div>
            <div className="flex items-start gap-2"><XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> {it.bad}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesMosaic() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold font-mono">/ Services</p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight max-w-2xl">Premium third-party support across modern home connectivity</h2>
        </div>
        <Link to="/services" className="text-sm text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">View all services <ArrowRight className="w-4 h-4" /></Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4 auto-rows-[minmax(280px,auto)]">
        {services.map((s, i) => {
          const featured = i === 0;
          return (
            <Link
              key={s.title}
              to="/services"
              className={`group relative overflow-hidden rounded-3xl gradient-border transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-end min-h-[280px] ${featured ? "md:col-span-2 md:row-span-2 md:min-h-[580px]" : ""}`}
            >
              <img src={s.img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--background) 20%, transparent) 0%, color-mix(in oklab, var(--background) 60%, transparent) 50%, color-mix(in oklab, var(--background) 95%, transparent) 100%)" }} />
              <div className="absolute inset-x-0 top-0 h-px hairline-top" />

              <span className="absolute top-4 right-4 text-[11px] font-mono text-foreground/90 tracking-[0.2em] glass px-2 py-1 rounded-md backdrop-blur-md">0{i + 1}</span>
              <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-md" style={{ background: "color-mix(in oklab, var(--card) 70%, transparent)", border: "1px solid color-mix(in oklab, var(--teal) 35%, transparent)" }}>
                <s.icon className="w-5 h-5 text-primary" />
              </div>

              <div className="relative p-6 md:p-7">
                <h3 className={`font-semibold mb-2 drop-shadow-lg ${featured ? "text-xl md:text-3xl" : "text-base md:text-lg"}`}>{s.title}</h3>
                <p className="text-sm text-foreground/85 leading-relaxed drop-shadow max-w-md">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary group-hover:gap-3 transition-all">
                  Explore <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function ProcessRail() {
  const steps = [
    { n: "01", t: "Reach out", d: "Phone, email, or web form — pick what's easiest." },
    { n: "02", t: "Share context", d: "Describe what you're trying to understand or fix." },
    { n: "03", t: "Get guidance", d: "An advisor walks you through informational steps." },
    { n: "04", t: "Apply at your pace", d: "Use the suggestions on your own terms — we never log in." },
  ];
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold">How it works</p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">A transparent four-step flow</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid md:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center text-xl font-display font-bold gradient-text mb-4 mx-auto md:mx-0">{s.n}</div>
                <h3 className="font-semibold mb-1.5">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBlock() {
  const stats = [
    { v: "12k+", l: "Users guided" },
    { v: "98%", l: "Satisfaction rate" },
    { v: "24/7", l: "Assistance hours" },
    { v: "100%", l: "Independent" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img src={streamImg} alt="Family enjoying streaming" loading="lazy" width={1280} height={960} className="rounded-3xl border border-border/50 shadow-2xl" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold">By the numbers</p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8">Trusted by households across the country</h2>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {[{ icon: Users, t: "Friendly advisors" }, { icon: Clock, t: "Always available" }].map((r) => (
              <div key={r.t} className="flex items-center gap-3 text-sm text-muted-foreground"><r.icon className="w-4 h-4 text-primary" /> {r.t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold">FAQ</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Honest answers</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="glass rounded-2xl overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-card/40 transition-colors">
              <span className="font-semibold pr-4">{f.q}</span>
              <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-[fade-in_0.3s_ease-out]">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-[2rem] glass-strong gradient-border">
        <img src={globeImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-20 radial-mask" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-primary)" }} />

        <div className="relative grid lg:grid-cols-12 gap-8 p-8 md:p-14 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-mono">/ Step in</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              Need help understanding internet or cable services?
            </h2>
            <p className="mt-5 text-muted-foreground max-w-2xl">
              Connect with our independent assistance team for clear, friendly informational guidance — no gatekeeping, no upsells.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SUPPORT_PHONE_TEL} className="px-6 py-3 rounded-xl font-medium text-primary-foreground glow-teal inline-flex items-center gap-2" style={{ background: "var(--gradient-primary)" }}>
                <Phone className="w-4 h-4" /> Call {SUPPORT_PHONE_DISPLAY} <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link to="/contact" className="px-6 py-3 rounded-xl font-medium glass hover:bg-card/80 inline-flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Request Guidance</Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground font-mono uppercase tracking-[0.18em]">Third-party informational assistance only</p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {[
              { icon: Phone, t: "Call", v: SUPPORT_PHONE_DISPLAY },
              { icon: MessageSquare, t: "Email", v: SUPPORT_EMAIL },
              { icon: Clock, t: "Hours", v: "24 / 7 / 365" },
              { icon: Signal, t: "Status", v: "All advisors online" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl glass p-4 corner-frame">
                <c.icon className="w-4 h-4 text-primary mb-3" />
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{c.t}</div>
                <div className="text-sm font-semibold mt-0.5">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
