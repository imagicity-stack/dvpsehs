import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Confetti, Star } from "@/components/illustrations";

export function PageHero({
  kicker,
  title,
  subtitle,
  crumbs = [],
  tone = "sunshine",
  children,
}: {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  crumbs?: { label: string; href?: string }[];
  tone?: "sunshine" | "sky" | "grass" | "grape" | "coral" | "crimson";
  children?: ReactNode;
}) {
  const tones: Record<string, string> = {
    sunshine: "from-sunshine-light/70 via-cream to-cream",
    sky: "from-sky-light/60 via-cream to-cream",
    grass: "from-grass-light/60 via-cream to-cream",
    grape: "from-grape-light/60 via-cream to-cream",
    coral: "from-coral-light/50 via-cream to-cream",
    crimson: "from-crimson/10 via-cream to-cream",
  };
  return (
    <section className={`relative overflow-hidden bg-gradient-to-b ${tones[tone]}`}>
      <Confetti className="opacity-50" />
      <Star className="absolute right-[12%] top-10 hidden h-8 w-8 animate-wiggle sm:block" fill="#FFC93C" />
      <Star className="absolute left-[8%] bottom-10 hidden h-6 w-6 animate-bounce-soft sm:block" fill="#FF8FB1" />
      <div className="container-page relative py-14 text-center sm:py-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center justify-center gap-1 text-sm font-semibold text-ink/55">
            <Link href="/" className="hover:text-crimson">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1">
                <ChevronRight className="h-4 w-4" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-crimson">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink/80">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {kicker && <span className="label-kicker mb-4">{kicker}</span>}
        <h1 className="mx-auto max-w-3xl text-balance font-display text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink/70">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
