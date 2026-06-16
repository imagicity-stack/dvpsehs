import Link from "next/link";
import { ArrowRight, PlayCircle, Star as StarIcon, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { Sun, Cloud, Rainbow, Balloon, Star, Confetti, PaperPlane, Squiggle } from "@/components/illustrations";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Confetti className="opacity-70" />
      {/* soft colour wash */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sunshine/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-sky/20 blur-3xl" aria-hidden />

      <div className="container-wide grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-8 lg:py-20">
        {/* Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <span className="label-kicker">
            <StarIcon className="h-3.5 w-3.5 fill-gold text-gold" /> An Elden Heights School · Ages 2–6
          </span>

          <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Where little{" "}
            <span className="relative inline-block text-crimson">
              wonders
              <Squiggle className="absolute -bottom-3 left-0 h-3 w-full text-sunshine" stroke="#FFC93C" />
            </span>{" "}
            take their first big steps
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink/75 lg:mx-0">
            {site.shortName} is a joyful, play-rich pre-primary where curious 2–6 year olds learn, giggle and grow —
            lovingly guided by the values of {site.parent}.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start sm:justify-center">
            <Link href="/admissions" className="btn-primary text-base">
              Register Your Child <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-outline text-base">
              <PlayCircle className="h-5 w-5 text-crimson" /> Take a Peek Inside
            </Link>
          </div>

          {/* trust row */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink/70">
              <ShieldCheck className="h-5 w-5 text-grass" /> Safe, secure campus
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-ink/70">
              <div className="flex -space-x-1.5">
                {["bg-coral", "bg-sky", "bg-sunshine", "bg-grass"].map((c) => (
                  <span key={c} className={`h-6 w-6 rounded-full ${c} ring-2 ring-cream`} />
                ))}
              </div>
              2,500+ happy graduates
            </div>
            <div className="flex items-center gap-1 text-sm font-semibold text-ink/70">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
              <span className="ml-1">Loved by parents</span>
            </div>
          </div>
        </div>

        {/* Illustrated scene */}
        <div className="relative z-10 mx-auto w-full max-w-lg">
          <div className="relative aspect-square">
            {/* main scene card */}
            <div className="absolute inset-0 overflow-hidden rounded-[2.75rem] bg-gradient-to-b from-sky-light via-[#cdeafe] to-grass-light shadow-playful ring-8 ring-white">
              <Sun className="absolute right-5 top-5 h-28 w-28 animate-spin-slow" />
              <Cloud className="absolute left-4 top-10 h-14 w-24 animate-float" />
              <Cloud className="absolute right-24 top-28 h-10 w-16 animate-float-slow" />
              <Rainbow className="absolute left-1/2 top-16 h-28 w-56 -translate-x-1/2 opacity-90" />

              {/* hills */}
              <svg viewBox="0 0 400 200" className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none" aria-hidden>
                <path d="M0 120 Q 100 70 200 110 T 400 100 V200 H0 Z" fill="#7ed598" />
                <path d="M0 150 Q 120 100 240 145 T 400 140 V200 H0 Z" fill="#5BC57A" />
                <path d="M0 175 Q 160 150 320 175 T 400 172 V200 H0 Z" fill="#3AA95C" />
              </svg>

              {/* playful characters */}
              <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-end gap-1 text-6xl">
                <span className="animate-bounce-soft [animation-delay:0ms]">🧒</span>
                <span className="animate-bounce-soft text-7xl [animation-delay:200ms]">👧</span>
                <span className="animate-bounce-soft [animation-delay:400ms]">🧑‍🦱</span>
              </div>

              <PaperPlane className="absolute left-6 top-1/2 h-10 w-10 animate-float" />
              <Star className="absolute left-10 top-6 h-6 w-6 animate-wiggle" />
              <Star className="absolute right-10 bottom-24 h-5 w-5 animate-bounce-soft" fill="#FF6B6B" />
            </div>

            {/* floating balloons */}
            <Balloon className="absolute -right-4 top-6 h-24 w-16 animate-float drop-shadow-lg" fill="#FF6B6B" />
            <Balloon className="absolute -left-6 bottom-16 h-20 w-14 animate-float-slow drop-shadow-lg" fill="#9B6DD6" />

            {/* floating info chips */}
            <div className="absolute -left-4 top-10 rotate-[-6deg] rounded-2xl bg-white px-4 py-3 shadow-card">
              <p className="font-display text-sm font-bold text-grass-dark">Play-based ✨</p>
              <p className="text-[11px] text-ink/60">Learning through joy</p>
            </div>
            <div className="absolute -right-3 bottom-8 rotate-[5deg] rounded-2xl bg-white px-4 py-3 shadow-card">
              <p className="font-display text-sm font-bold text-crimson">Tiny classes 💛</p>
              <p className="text-[11px] text-ink/60">Every child seen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
