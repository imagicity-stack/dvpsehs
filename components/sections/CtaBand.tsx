import Link from "next/link";
import { ArrowUpRight, Phone, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Star } from "@/components/illustrations";

export function CtaBand({
  title = "Come and feel the magic for yourself",
  subtitle = "Book a private campus visit, meet our teachers, and watch your child light up. Our classes are kept intimately small — and they fill quickly.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-wide my-24">
      <div className="grain relative overflow-hidden rounded-[2.75rem] bg-wine-deep px-6 py-14 shadow-lux-lg sm:px-10 sm:py-16 lg:px-14">
        {/* gold framing */}
        <div className="pointer-events-none absolute inset-3 rounded-[2.4rem] ring-1 ring-inset ring-gold/25" aria-hidden />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl" aria-hidden />
        <Star className="absolute left-8 top-10 h-7 w-7 animate-bounce-soft" fill="#E7CD86" />
        <Sparkles className="absolute bottom-10 left-1/4 h-6 w-6 text-gold-light/70 animate-wiggle" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="text-center lg:text-left">
            <span className="label-kicker !text-gold-light">A warm welcome awaits</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ivory text-balance sm:text-4xl lg:text-[2.9rem]">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-ivory/75 lg:mx-0 sm:text-lg">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link href="/admissions" className="btn-gold text-base">
                Start Your Registration <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${site.phonePrimary.replace(/\s/g, "")}`} className="btn-cream text-base">
                <Phone className="h-4 w-4" /> {site.phonePrimary}
              </a>
            </div>
          </div>

          {/* image */}
          <div className="relative mx-auto hidden w-full max-w-sm lg:block">
            <div className="rotate-3 overflow-hidden rounded-[1.8rem] border-4 border-white/90 shadow-lux">
              <SmartImage
                src="/images/cta-visit.jpg"
                alt="Parents and child visiting the Drona Valley campus"
                tone="gold"
                className="aspect-[4/5] w-full"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 -rotate-6 rounded-2xl bg-white px-4 py-3 shadow-lux">
              <p className="font-display text-base font-semibold text-crimson">Private tours</p>
              <p className="text-[0.7rem] font-semibold text-ink/60">open all week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
