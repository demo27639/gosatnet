import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, Shield } from "lucide-react";
import logo from "@/assets/gosatnet-logo.png";

export const SUPPORT_PHONE_DISPLAY = "(888) 710-6364";
export const SUPPORT_PHONE_TEL = "tel:+18887106364";
export const SUPPORT_EMAIL = "support@gosatnet.com";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Brand({ size = 32 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src={logo}
        alt="Gosatnet logo"
        width={size}
        height={size}
        className="rounded-lg"
        style={{ width: size, height: size }}
      />
      <span className="font-display font-bold text-lg tracking-tight">Gosatnet</span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-strong border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="group">
            <Brand />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SUPPORT_PHONE_TEL}
              className="px-5 py-2 rounded-lg text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg inline-flex items-center gap-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Phone className="w-4 h-4" /> {SUPPORT_PHONE_DISPLAY}
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/50 px-6 py-4 flex flex-col gap-3 bg-card/80 backdrop-blur-xl">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-muted-foreground py-2"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={SUPPORT_PHONE_TEL}
              className="px-5 py-2 rounded-lg text-sm font-medium text-primary-foreground text-center inline-flex items-center justify-center gap-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Phone className="w-4 h-4" /> {SUPPORT_PHONE_DISPLAY}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export function FloatingSupport() {
  return (
    <a
      href={SUPPORT_PHONE_TEL}
      className="fixed bottom-6 right-6 z-40 px-5 h-14 rounded-full inline-flex items-center gap-2.5 text-primary-foreground glow-teal animate-float hover:scale-105 transition-transform font-semibold text-sm"
      style={{ background: "var(--gradient-primary)" }}
      aria-label={`Call ${SUPPORT_PHONE_DISPLAY}`}
    >
      <Phone className="w-5 h-5" />
      <span className="hidden sm:inline">{SUPPORT_PHONE_DISPLAY}</span>
    </a>
  );
}

export function Disclosure({ subtle = false }: { subtle?: boolean }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl px-4 py-3 text-xs ${subtle ? "bg-muted/40 text-muted-foreground" : "glass text-muted-foreground"}`}
    >
      <Shield className="w-4 h-4 mt-0.5 text-primary shrink-0" />
      <p className="leading-relaxed">
        <span className="font-semibold text-foreground">Important Disclosure: </span>
        Gosatnet is a third-party service assistance provider. We are not affiliated with,
        authorized by, or endorsed by any internet, cable, broadband, or telecom provider. Service
        fees are separate from any provider charges.
      </p>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <Brand />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-4">
              Third-party assistance for internet connectivity, Wi-Fi setup, streaming, and
              cable-related concerns. Transparent informational guidance only.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="w-4 h-4" />
                {SUPPORT_EMAIL}
              </a>
              <a
                href={SUPPORT_PHONE_TEL}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Phone className="w-4 h-4" />
                +1 {SUPPORT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-foreground">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-foreground">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/ad-disclosure" className="hover:text-foreground">
                  Ad Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Disclosure />
        <p className="text-xs text-muted-foreground mt-6 text-center">
          © {new Date().getFullYear()} Gosatnet. Third-party assistance platform. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">{children}</main>
      <FloatingSupport />
      <SiteFooter />
    </div>
  );
}
