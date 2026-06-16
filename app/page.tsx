import Link from "next/link";
import { ArrowRight, Quote, Star as StarIcon } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { WhatsNext } from "@/components/sections/WhatsNext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/illustrations";
import { programs, stats, aDayInLife, testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Parent-brand trust strip */}
      <section className="border-y border-ink/5 bg-white/60">
        <div className="container-wide flex flex-col items-center justify-center gap-x-8 gap-y-3 py-5 text-center text-sm font-semibold text-ink/60 sm:flex-row">
          <span className="uppercase tracking-wide">Proudly the early-years wing of</span>
          <span className="font-display text-base font-bold text-crimson">{site.parent}</span>
          <span className="hidden h-4 w-px bg-ink/15 sm:block" />
          <span>Powered by {site.poweredBy}</span>
        </div>
      </section>

      {/* Stats */}
      <section className="container-wide py-14">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="rounded-4xl bg-white p-6 text-center shadow-card">
                <p className="font-display text-4xl font-bold text-crimson sm:text-5xl">{s.value}</p>
                <p className="mt-1 text-sm font-semibold text-ink/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why parents love us */}
      <section className="container-wide py-12">
        <SectionHeading
          kicker="Why families choose us"
          title={<>A place that feels like a <span className="text-crimson">warm, happy home</span></>}
          subtitle="We blend the wonder of play with gentle structure, so every child grows in confidence, kindness and curiosity."
        />
        <div className="mt-12">
          <Pillars />
        </div>
      </section>

      {/* Programmes */}
      <div className="relative mt-12">
        <WaveDivider className="h-12 w-full text-grape-light/40" fill="#EBDDF7" />
        <section className="bg-grape-light/30 py-16">
          <div className="container-wide">
            <SectionHeading
              kicker="Our programmes"
              title={<>Four joyful stages, one <span className="text-grape-dark">happy journey</span></>}
              subtitle="From first steps away from home to confident, school-ready graduates — each programme is crafted for exactly where your child is."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {programs.map((p) => (
                <Reveal key={p.slug}>
                  <ProgramCard program={p} />
                </Reveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/programs" className="btn-primary">
                Explore the full curriculum <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        <WaveDivider className="h-12 w-full rotate-180 text-grape-light/40" fill="#EBDDF7" flip />
      </div>

      {/* A day in the life */}
      <section className="container-wide py-16">
        <SectionHeading
          kicker="A day in the life"
          title={<>From sunrise hellos to story-time <span className="text-sky-dark">goodbyes</span></>}
          subtitle="Predictable, playful rhythms help little ones feel safe — and pack the day with discovery."
        />
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-1 rounded-full bg-gradient-to-b from-sunshine via-coral to-sky sm:left-1/2 sm:-translate-x-1/2" aria-hidden />
          <ul className="space-y-6">
            {aDayInLife.map((d, i) => (
              <Reveal key={d.time} delay={i * 0.04}>
                <li className={`relative flex items-center gap-5 sm:gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className="z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-2xl shadow-card ring-4 ring-cream sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    {d.emoji}
                  </div>
                  <div className={`flex-1 rounded-3xl bg-white p-5 shadow-card sm:max-w-[42%] ${i % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto"}`}>
                    <span className="font-display text-sm font-bold text-crimson">{d.time} AM</span>
                    <h3 className="font-display text-lg font-bold">{d.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{d.note}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What's next — strategic */}
      <WhatsNext />

      {/* Testimonials */}
      <section className="container-wide py-12">
        <SectionHeading
          kicker="Loved by parents"
          title={<>Don't just take our word for it <span className="text-coral">💕</span></>}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <figure className={`flex h-full flex-col rounded-4xl ${t.color} p-7`}>
                <Quote className="h-9 w-9 text-ink/20" />
                <blockquote className="mt-3 flex-1 text-pretty text-base font-medium leading-relaxed text-ink/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-ink/10 pt-4">
                  <div className="mb-1 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-display font-bold text-ink">{t.name}</p>
                  <p className="text-sm text-ink/60">{t.relation}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
