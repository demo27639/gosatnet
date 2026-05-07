import { SiteLayout, Disclosure } from "@/components/SiteLayout";
import { FileText } from "lucide-react";

export function LegalLayout({ title, subtitle, updated, children }: { title: string; subtitle?: string; updated?: string; children: React.ReactNode }) {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "var(--gradient-glow)" }} />

        <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-6">
            <FileText className="w-3.5 h-3.5 text-primary" /> Legal document
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{title}</h1>
          {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
          {updated && (
            <p className="mt-5 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Last updated: {updated}
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 mt-10 relative z-10">
        <Disclosure />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="relative overflow-hidden glass-strong gradient-border rounded-3xl p-8 md:p-12 prose prose-invert max-w-none">
          <div className="absolute inset-x-0 top-0 h-px hairline-top" />
          <div className="relative space-y-6 text-muted-foreground leading-relaxed">{children}</div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
