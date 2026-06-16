import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export function PageHero({
  kicker,
  title,
  subtitle,
  crumbs = [],
  tone = "gold",
  children,
}: {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  crumbs?: { label: string; href?: string }[];
  tone?: "sunshine" | "sky" | "grass" | "grape" | "coral" | "crimson" | "gold";
  children?: ReactNode;
}) {
  const tones: Record<string, string> = {
    sunshine: "from-sunshine-light/50",
    sky: "from-sky-light/45",
    grass: "from-grass-light/45",
    grape: "from-grape-light/45",
    coral: "from-coral-light/40",
    crimson: "from-crimson/10",
    gold: "from-gold/20",
  };
  return (
    <section className={`grain relative overflow-hidden bg-gradient-to-b ${tones[tone]} via-cream to-cream`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        aria-hidden
        style={{ backgroundImage: "radial-gradient(rgba(199,154,58,0.12) 1.4px, transparent 1.4px)", backgroundSize: "26px 26px" }}
      />
      <div className="pointer-events-none absolute -right-20 -top-10 h-64 w-64 rounded-full bg-gold/15 blur-3xl" aria-hidden />
      <Sparkles className="absolute right-[14%] top-12 hidden h-7 w-7 text-gold animate-wiggle sm:block" />
      <Sparkles className="absolute left-[9%] bottom-12 hidden h-5 w-5 text-crimson/50 animate-bounce-soft sm:block" />

      <div className="container-page relative py-16 text-center sm:py-24">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-1 text-sm font-semibold text-ink/50">
            <Link href="/" className="transition hover:text-crimson">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1">
                <ChevronRight className="h-4 w-4 text-gold" />
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-crimson">{c.label}</Link>
                ) : (
                  <span className="text-ink/80">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {kicker && <span className="label-kicker justify-center">{kicker}</span>}
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink/70">{subtitle}</p>
        )}
        {children && <div className="mt-9">{children}</div>}
        <div className="mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </div>
    </section>
  );
}
