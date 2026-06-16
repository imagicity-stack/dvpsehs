import Link from "next/link";
import { ArrowUpRight, Sparkles, Star as StarIcon } from "lucide-react";
import { site } from "@/lib/site";
import { EldenHeightsCrest } from "@/components/brand/EldenHeightsLogo";
import { SmartImage } from "@/components/ui/SmartImage";
import { Star, Balloon } from "@/components/illustrations";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient luxe wash */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-24 h-[30rem] w-[30rem] rounded-full bg-crimson/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 rounded-full bg-sky/10 blur-3xl" aria-hidden />

      <div className="container-wide grid items-center gap-12 py-12 lg:grid-cols-[1.02fr_1fr] lg:gap-10 lg:py-20">
        {/* Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-white/60 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-crimson shadow-sm backdrop-blur">
            <EldenHeightsCrest className="h-5 w-5" withBanner={false} />
            An Elden Heights Partnership · Ages 2–6
          </span>

          <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-[4.1rem]">
            Where little wonders
            <br className="hidden sm:block" /> take their{" "}
            <span className="relative whitespace-nowrap italic text-gold-foil">
              grandest
              <Sparkles className="absolute -right-7 -top-3 h-6 w-6 text-gold animate-wiggle" />
            </span>{" "}
            first steps
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink/70 lg:mx-0">
            Drona Valley has joined hands with{" "}
            <span className="font-semibold text-crimson">{site.parent}</span> — a proud new partnership bringing
            a world of warm, luxurious early learning to your child's very first classroom.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row lg:justify-start sm:justify-center">
            <Link href="/admissions" className="btn-gold text-base">
              Register Your Child <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-primary text-base">
              Discover the Vision
            </Link>
          </div>

          {/* trust strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 lg:justify-start">
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold text-ink/60">Adored by parents</p>
            </div>
            <span className="hidden h-10 w-px bg-ink/10 sm:block" />
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {["bg-coral", "bg-sky", "bg-sunshine", "bg-grass", "bg-grape"].map((c) => (
                  <span key={c} className={`h-8 w-8 rounded-full ${c} ring-2 ring-cream`} />
                ))}
              </div>
              <p className="text-sm font-semibold text-ink/60">
                <span className="font-display text-base text-ink">2,500+</span> happy graduates
              </p>
            </div>
            <span className="hidden h-10 w-px bg-ink/10 sm:block" />
            <div>
              <p className="font-display text-xl font-semibold text-crimson">7+ years</p>
              <p className="text-sm font-semibold text-ink/60">of joyful learning</p>
            </div>
          </div>
        </div>

        {/* Image-led visual */}
        <div className="relative z-10 mx-auto w-full max-w-xl">
          <div className="relative">
            {/* gold halo ring behind */}
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gold-sheen opacity-20 blur-xl" aria-hidden />

            {/* main organic image */}
            <div className="relative animate-blob-morph overflow-hidden border-4 border-white shadow-lux-lg" style={{ borderRadius: "42% 58% 58% 42% / 48% 42% 58% 52%" }}>
              <SmartImage
                src="/images/hero-main.jpg"
                alt="A joyful child discovering and playing at Drona Valley Public School"
                tone="gold"
                priority
                className="aspect-[4/5] w-full"
              />
              <div className="pointer-events-none absolute inset-0" style={{ boxShadow: "inset 0 -60px 80px -40px rgba(78,14,14,0.45)" }} />
            </div>

            {/* secondary peeking image */}
            <div className="absolute -bottom-8 -left-6 hidden w-40 rotate-[-6deg] overflow-hidden rounded-[1.6rem] border-4 border-white shadow-lux sm:block">
              <SmartImage src="/images/hero-secondary.jpg" alt="Outdoor garden play" tone="grass" className="aspect-square w-full" />
            </div>

            {/* crest badge */}
            <div className="absolute -right-3 top-5 flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2 shadow-lux backdrop-blur">
              <EldenHeightsCrest className="h-9 w-9" withBanner={false} />
              <span className="text-[0.62rem] font-bold uppercase leading-tight tracking-wider text-ink/70">
                Part of the<br />Elden Heights family
              </span>
            </div>

            {/* floating glass stat */}
            <div className="absolute -right-4 bottom-10 rotate-[5deg] rounded-2xl glass px-4 py-3 shadow-lux">
              <p className="font-display text-lg font-semibold text-crimson">1 : 8</p>
              <p className="text-[0.68rem] font-semibold text-ink/60">tiny, loving classes</p>
            </div>

            {/* playful accents */}
            <Balloon className="absolute -left-8 top-8 h-20 w-14 animate-float-slow drop-shadow-lg" fill="#FF6B6B" />
            <Star className="absolute -top-4 left-1/3 h-7 w-7 animate-bounce-soft" fill="#C79A3A" />
            <Sparkles className="absolute bottom-2 left-10 h-6 w-6 text-gold animate-wiggle" />
          </div>
        </div>
      </div>

      {/* gold rule + values marquee */}
      <div className="gold-rule mt-2" />
    </section>
  );
}
