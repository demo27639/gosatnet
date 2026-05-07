import { createFileRoute, Link } from "@tanstack/react-router";
import { Wifi, Tv, Router, Smartphone, HeadphonesIcon, Globe, ArrowRight, ArrowUpRight, CheckCircle2, ShieldAlert, Compass, Phone, Mail } from "lucide-react";
import { SiteLayout, Disclosure, SUPPORT_PHONE_DISPLAY, SUPPORT_PHONE_TEL, SUPPORT_EMAIL } from "@/components/SiteLayout";
import advisorImg from "@/assets/advisor.jpg";
import heroNetImg from "@/assets/hero-network.jpg";
import routerImg from "@/assets/router-setup.jpg";
import streamingHomeImg from "@/assets/streaming-home.jpg";
import streamImg from "@/assets/living-stream.jpg";
import globeImg from "@/assets/network-globe.jpg";
import teamImg from "@/assets/team-office.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Wi-Fi, Internet, Streaming & Cable Help | Gosatnet" },
      { name: "description", content: "Explore third-party assistance: Wi-Fi setup, connectivity guidance, streaming help, and device support from the Gosatnet platform." },
      { property: "og:title", content: "Services — Gosatnet" },
      { property: "og:description", content: "Premium third-party informational assistance services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Globe, title: "Internet Connectivity Guidance", desc: "Understand connectivity behavior, modem indicators, and common setup considerations.", points: ["Connection diagnostic tips", "Modem indicator explanations", "Speed-related guidance"], size: "lg", img: heroNetImg },
  { icon: Wifi, title: "Wi-Fi Setup Support", desc: "Help with Wi-Fi configuration, signal placement, and home network basics.", points: ["Router placement tips", "Network naming guidance", "Channel & frequency basics"], size: "md", img: routerImg },
  { icon: Tv, title: "Streaming Device Assistance", desc: "Setting up smart TVs, streaming sticks, and entertainment apps.", points: ["Device walkthroughs", "App setup guidance", "HDMI & source basics"], size: "md", img: streamingHomeImg },
  { icon: HeadphonesIcon, title: "Cable TV Information", desc: "Information about cable services, configuration concepts, and terminology.", points: ["Terminology explained", "Configuration concepts", "Setup guidance"], size: "md", img: streamImg },
  { icon: Router, title: "Device Setup Help", desc: "Connecting routers, extenders, and smart devices to your home network.", points: ["Router walkthroughs", "Extender placement", "Smart device pairing"], size: "md", img: globeImg },
  { icon: Smartphone, title: "Multi-Device Guidance", desc: "Help understanding how phones, tablets, and computers connect.", points: ["Multi-device basics", "Network switching", "Troubleshooting tips"], size: "lg", img: teamImg },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <ServicesHero />

      <section className="mx-auto max-w-7xl px-6 mt-10 relative z-10">
        <Disclosure />
      </section>

      <ServicesBento />
      <ServicesProcess />
      <ServicesCTA />
    </SiteLayout>
  );
}

function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-mono">/ Service catalog</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]">
              A premium <span className="gradient-text">assistance suite</span>
              <br />for every connectivity concern
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
              Six independent informational services — designed for modern households and small businesses, delivered with transparent, plain-language guidance.
            </p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-3 gap-2">
            {[Wifi, Tv, Router, Globe, Smartphone, HeadphonesIcon].map((Icon, i) => (
              <div key={i} className="aspect-square rounded-2xl glass gradient-border flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesBento() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid md:grid-cols-6 gap-4 auto-rows-[minmax(380px,auto)]">
        {services.map((s, i) => (
          <article
            key={s.title}
            className={`group relative overflow-hidden rounded-3xl gradient-border transition-all hover:-translate-y-1 hover:shadow-2xl min-h-[380px] flex flex-col justify-end ${s.size === "lg" ? "md:col-span-3" : "md:col-span-2"}`}
          >
            <img src={s.img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--background) 25%, transparent) 0%, color-mix(in oklab, var(--background) 55%, transparent) 45%, color-mix(in oklab, var(--background) 95%, transparent) 100%)" }} />
            <div className="absolute inset-x-0 top-0 h-px hairline-top" />

            <span className="absolute top-4 right-4 text-[11px] font-mono tracking-[0.25em] text-foreground/90 glass px-2 py-1 rounded-md backdrop-blur-md">0{i + 1}</span>
            <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-md" style={{ background: "color-mix(in oklab, var(--card) 70%, transparent)", border: "1px solid color-mix(in oklab, var(--teal) 35%, transparent)" }}>
              <s.icon className="w-5 h-5 text-primary" />
            </div>

            <div className="relative p-6 md:p-8">
              <h2 className="text-lg md:text-xl font-semibold mb-2 drop-shadow-lg">{s.title}</h2>
              <p className="text-sm text-foreground/85 leading-relaxed mb-5 max-w-md drop-shadow">{s.desc}</p>

              <ul className="grid sm:grid-cols-2 gap-1.5 mb-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" /> {p}
                  </li>
                ))}
              </ul>

              <a href={SUPPORT_PHONE_TEL} className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary group-hover:gap-3 transition-all">
                <Phone className="w-3.5 h-3.5" /> Call {SUPPORT_PHONE_DISPLAY} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesProcess() {
  const steps = [
    "Reach out via phone, email, or contact form",
    "Describe your connectivity concern in plain language",
    "Receive informational guidance from an advisor",
    "Apply suggested steps at your own pace",
  ];
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 rounded-[2rem] opacity-30 blur-2xl" style={{ background: "var(--gradient-primary)" }} />
          <img src={advisorImg} alt="Gosatnet support advisor" loading="lazy" width={1280} height={1280} className="relative rounded-3xl border border-border/50 shadow-2xl" />
          <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-2xl p-4 corner-frame flex items-center gap-3">
            <Compass className="w-5 h-5 text-primary" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Workflow</div>
              <div className="text-sm font-semibold">Transparent · Patient · Independent</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3 font-mono">/ Process</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">A structured, informative workflow</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-xl">Every assistance request follows a transparent path designed to be informative — never invasive.</p>
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="flex items-start gap-4 glass rounded-2xl p-5 gradient-border">
                <div className="font-mono text-sm font-bold gradient-text shrink-0 w-8">0{i + 1}</div>
                <span className="text-sm pt-0.5">{s}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 glass rounded-2xl p-4 border-l-2 border-accent flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground">We never request provider passwords or sensitive credentials. All guidance is informational.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2rem] glass-strong gradient-border p-10 md:p-14">
        <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-glow)" }} />
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-primary)" }} />

        <div className="relative grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Ready to get started?</h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl">Speak with our independent third-party assistance team today — friendly, patient, and always honest about our role.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={SUPPORT_PHONE_TEL} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground glow-teal" style={{ background: "var(--gradient-primary)" }}>
                <Phone className="w-4 h-4" /> Call {SUPPORT_PHONE_DISPLAY} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="md:col-span-5 grid gap-3">
            <a href={SUPPORT_PHONE_TEL} className="glass rounded-2xl p-4 corner-frame flex items-center gap-3 hover:bg-card/60 transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <div className="text-sm">{SUPPORT_PHONE_DISPLAY}</div>
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="glass rounded-2xl p-4 corner-frame flex items-center gap-3 hover:bg-card/60 transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              <div className="text-sm">{SUPPORT_EMAIL}</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
