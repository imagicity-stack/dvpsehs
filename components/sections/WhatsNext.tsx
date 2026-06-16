import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { EldenHeightsCrest } from "@/components/brand/EldenHeightsLogo";
import { DvpsMark } from "@/components/brand/DvpsLogo";
import { site } from "@/lib/site";

/**
 * The "a new chapter is coming" section. It's intentionally warm and
 * aspirational — parents should feel a positive transformation is underway
 * (the school growing closer to {site.parent}) without the rebrand being
 * spelled out. The two marks "merging" visually reinforces the idea.
 */
export function WhatsNext() {
  return (
    <section id="whats-next" className="container-wide my-24 scroll-mt-24">
      <div className="relative overflow-hidden rounded-5xl border border-gold/20 bg-gradient-to-br from-[#2a0e0e] via-crimson-dark to-[#3a1212] px-6 py-14 text-white sm:px-12 sm:py-16">
        {/* subtle sparkle field */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden
             style={{ backgroundImage: "radial-gradient(circle, #D9A323 1px, transparent 1px)", backgroundSize: "26px 26px" }} />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-gold-light ring-1 ring-gold/30">
              <Sparkles className="h-4 w-4" /> A new chapter is taking root
            </span>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Something wonderful is growing at Drona Valley
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
              For years we've been the joyful early-years home of {site.parent}. Now, the bond between our
              two campuses is growing closer than ever — bringing our families an even richer journey from the
              very first day of school, all the way to graduation.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/80">
              The same loving teachers. The same happy classrooms. A future with{" "}
              <span className="font-semibold text-gold-light">even more to look forward to</span>. We can't wait
              to share what's next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/admissions" className="btn-sunshine text-base">
                Be part of the journey <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20">
                Stay in the loop
              </Link>
            </div>
          </div>

          {/* Two marks growing together */}
          <div className="relative mx-auto flex max-w-md items-center justify-center gap-2 py-6">
            <div className="relative">
              <DvpsMark className="h-32 w-32 rounded-full ring-4 ring-white/20 sm:h-40 sm:w-40" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[11px] font-bold text-crimson shadow">
                Today
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 px-1 text-gold-light">
              <Sparkles className="h-6 w-6 animate-wiggle" />
              <ArrowRight className="h-7 w-7" />
            </div>

            <div className="relative">
              <div className="grid h-32 w-32 place-items-center rounded-full bg-white/5 ring-4 ring-gold/30 sm:h-40 sm:w-40">
                <EldenHeightsCrest className="h-28 w-28 sm:h-36 sm:w-36" withBanner={false} />
              </div>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-3 py-1 text-[11px] font-bold text-ink shadow">
                The road ahead
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
