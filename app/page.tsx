import Link from "next/link";
import { ArrowUpRight, Quote, Sparkle, Star as StarIcon } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { WhatsNext } from "@/components/sections/WhatsNext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Glyph } from "@/components/ui/Glyph";
import { programs, stats, aDayInLife, testimonials, experiences } from "@/lib/content";
import { site } from "@/lib/site";

const values = ["Play-Based Learning", "Nurturing Teachers", "Safe & Secure", "Tiny Classes", "Wonder & Joy", "Elden Heights Values"];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Value marquee */}
      <section className="relative overflow-hidden bg-crimson-rich py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...values, ...values, ...values].map((v, i) => (
            <span key={i} className="mx-7 inline-flex items-center gap-5 font-display text-lg italic text-ivory/90">
              {v} <Sparkle className="not-italic h-3.5 w-3.5 fill-gold-light text-gold-light" />
            </span>
          ))}
        </div>
      </section>

      {/* Stats — elegant inline row */}
      <section className="container-wide py-16">
        <div className="grid grid-cols-2 gap-y-8 rounded-[2rem] border border-gold/15 bg-ivory/70 py-10 shadow-card backdrop-blur lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className={`px-6 text-center ${i !== 0 ? "lg:border-l lg:border-gold/20" : ""}`}>
                <p className="font-display text-5xl font-semibold text-gold-foil sm:text-6xl">{s.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink/55">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experiences — image-rich, asymmetric */}
      <section className="container-wide py-12">
        <SectionHeading
          kicker="Life at Drona Valley"
          title={<>A childhood worth <span className="italic text-gold-foil">savouring</span></>}
          subtitle="Every day is a little adventure — rich with colour, kindness, curiosity and care."
        />
        <div className="mt-12 grid auto-rows-[15rem] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {experiences.map((e, i) => (
            <Reveal key={e.title} delay={(i % 4) * 0.06} className={i === 0 ? "col-span-2 row-span-2" : i === 3 ? "col-span-2 lg:col-span-1" : ""}>
              <figure className="group relative h-full overflow-hidden rounded-[1.7rem] border-2 border-white shadow-card">
                <SmartImage src={e.img} alt={e.title} tone={e.tone} className="h-full w-full" imgClassName="transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-xl font-semibold text-ivory drop-shadow">{e.title}</p>
                  <p className="text-sm text-ivory/85">{e.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why parents love us */}
      <section className="container-wide py-16">
        <SectionHeading
          kicker="Why families choose us"
          title={<>A first school that feels like a <span className="italic text-gold-foil">warm embrace</span></>}
          subtitle="We blend the wonder of play with gentle structure — so every child grows in confidence, kindness and curiosity."
        />
        <div className="mt-14">
          <Pillars />
        </div>
      </section>

      {/* Classes */}
      <section className="relative mt-12 overflow-hidden bg-sand/60 py-20">
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden />
        <div className="container-wide relative">
          <SectionHeading
            kicker="Our classes"
            title={<>Four joyful stages, one <span className="italic text-gold-foil">happy journey</span></>}
            subtitle="From first steps away from home to confident, school-ready graduates — each class is crafted for exactly where your child is."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {programs.map((p) => (
              <Reveal key={p.slug}>
                <ProgramCard program={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/programs" className="btn-primary">
              Explore the full curriculum <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* A day in the life */}
      <section className="container-wide py-20">
        <SectionHeading
          kicker="A day in the life"
          title={<>From sunrise hellos to story-time <span className="italic text-gold-foil">goodbyes</span></>}
          subtitle="Predictable, playful rhythms help little ones feel safe — and pack the day with discovery."
        />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-0.5 rounded-full bg-gradient-to-b from-gold via-crimson to-sky sm:left-1/2 sm:-translate-x-1/2" aria-hidden />
          <ul className="space-y-6">
            {aDayInLife.map((d, i) => (
              <Reveal key={d.time} delay={i * 0.04}>
                <li className={`relative flex items-center gap-5 sm:gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className="z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ivory text-crimson shadow-lux ring-1 ring-gold/30 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    <Glyph name={d.icon} className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <div className={`flex-1 rounded-[1.4rem] border border-ink/5 bg-white/90 p-5 shadow-card backdrop-blur sm:max-w-[42%] ${i % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto"}`}>
                    <span className="font-fun text-sm font-bold text-crimson">{d.time} AM</span>
                    <h3 className="font-display text-lg font-semibold">{d.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{d.note}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Principal's message — luxury trust */}
      <section className="container-wide py-12">
        <div className="grid items-center gap-10 rounded-[2.5rem] border border-gold/15 bg-ivory/80 p-6 shadow-lux sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="relative mx-auto max-w-xs">
              <div className="overflow-hidden rounded-[1.8rem] border-4 border-white shadow-lux organic">
                <SmartImage src="/images/dvpsowner.png" alt="A message from our Founder" tone="crimson" className="aspect-[3/4] w-full" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-crimson-rich px-5 py-2 text-center text-xs font-semibold text-ivory shadow-lux">
                Head of School
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Quote className="h-10 w-10 text-gold/40" />
            <p className="mt-3 font-display text-xl font-medium leading-relaxed text-ink/85 sm:text-2xl">
              “When a child walks through our gates, they don't just join a school — they join a family. Our new
              partnership with {site.parent} means we can give your little one the warmest possible start, and a
              future brighter than ever.”
            </p>
            <div className="mt-6">
              <p className="font-display text-lg font-semibold text-crimson">With warmth,</p>
              <p className="text-sm font-semibold text-ink/60">The Head of School · Drona Valley Public School</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's next — strategic */}
      <WhatsNext />

      {/* Testimonials */}
      <section className="container-wide py-14">
        <SectionHeading
          kicker="Loved by parents"
          title={<>Words from our <span className="italic text-gold-foil">family</span></>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className={`flex h-full flex-col rounded-[1.8rem] border border-gold/15 bg-ivory/90 p-7 shadow-card ${i % 2 === 1 ? "md:translate-y-5" : ""}`}>
                <div className="mb-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="flex-1 text-pretty font-display text-lg font-medium leading-relaxed text-ink/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
                  <span className={`grid h-11 w-11 place-items-center rounded-full ${t.color} font-display text-lg font-semibold text-ink/70`}>
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <p className="font-display font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-ink/55">{t.relation}</p>
                  </span>
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
