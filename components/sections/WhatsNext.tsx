import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { EldenHeightsCrest } from "@/components/brand/EldenHeightsLogo";
import { DvpsMark } from "@/components/brand/DvpsLogo";
import { site } from "@/lib/site";

/**
 * The "a new chapter is coming" moment.
 *
 * Now framed around the fresh partnership: Drona Valley is growing ever closer
 * to The Elden Heights School. The two marks "merging" (today -> the road
 * ahead) emotionally prepares families for the eventual transition of the
 * Drona Valley identity into Elden Heights — presented purely as an upgrade,
 * never as a closure or rename.
 */
export function WhatsNext() {
  return (
    <section id="whats-next" className="container-wide my-24 scroll-mt-28">
      <div className="grain relative overflow-hidden rounded-[2.75rem] bg-wine-deep px-6 py-16 shadow-lux-lg sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          aria-hidden
          style={{ backgroundImage: "radial-gradient(circle, #C79A3A 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        <div className="pointer-events-none absolute inset-4 rounded-[2.4rem] ring-1 ring-inset ring-gold/20" aria-hidden />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold-light">
              <Sparkles className="h-4 w-4" /> A new chapter is beginning
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] text-ivory text-balance sm:text-[2.7rem]">
              Drona Valley is growing into something{" "}
              <span className="italic text-gold-foil">truly grand</span>
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-ivory/75 sm:text-lg">
              We've joined hands with <span className="font-semibold text-ivory">{site.parent}</span> — and in
              the months ahead, our little family will grow ever closer to one of the region's most loved names
              in education.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-ivory/75">
              The same gentle teachers. The same happy classrooms. Wrapped in{" "}
              <span className="font-semibold text-gold-light">even more to look forward to</span>. Something
              wonderful is on its way — and your family has a front-row seat.
            </p>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
              <Link href="/admissions" className="btn-gold text-base">
                Be part of the journey <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-cream text-base">
                Stay in the loop
              </Link>
            </div>
          </div>

          {/* Two marks growing together */}
          <div className="relative mx-auto flex max-w-md items-center justify-center gap-3 py-4 sm:gap-5">
            <div className="relative">
              <DvpsMark className="h-28 w-28 rounded-full ring-4 ring-white/15 sm:h-36 sm:w-36" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-crimson shadow">
                Today
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 text-gold-light">
              <Sparkles className="h-5 w-5 animate-wiggle" />
              <ArrowRight className="h-8 w-8" />
              <span className="text-[0.6rem] font-bold uppercase tracking-widest text-gold-light/70">becoming</span>
            </div>

            <div className="relative">
              <div className="grid h-28 w-28 place-items-center rounded-full bg-white/5 ring-4 ring-gold/30 sm:h-36 sm:w-36">
                <EldenHeightsCrest className="h-24 w-24 sm:h-32 sm:w-32" withBanner={false} />
              </div>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-sheen px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-ink shadow">
                The road ahead
              </span>
            </div>
          </div>
        </div>

        <p className="relative mt-12 text-center font-display text-lg italic text-gold-light/80">
          “{site.parentMotto}” — from the very first step.
        </p>
      </div>
    </section>
  );
}
