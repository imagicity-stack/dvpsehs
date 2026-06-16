import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, Sprout } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Pillars } from "@/components/sections/Pillars";
import { WhatsNext } from "@/components/sections/WhatsNext";
import { CtaBand } from "@/components/sections/CtaBand";
import { EldenHeightsCrest } from "@/components/brand/EldenHeightsLogo";
import { WaveDivider } from "@/components/illustrations";
import { SmartImage } from "@/components/ui/SmartImage";
import { site, fullAddress } from "@/lib/site";
import { stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Drona Valley Public School has joined hands with The Elden Heights School, powered by Duniz Eduserv. Discover our story, our values and what makes us special.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Our story"
        title={<>Big hearts. Little hands. <span className="text-crimson">Endless wonder.</span></>}
        subtitle={`Since ${site.establishedYear}, we've been the place where children of The Elden Heights family take their very first steps into the joy of learning.`}
        crumbs={[{ label: "About Us" }]}
        tone="sunshine"
      />

      {/* Story */}
      <section className="container-wide py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="label-kicker mb-4">Where it all began</span>
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              A garden where childhood is free to bloom
            </h2>
            <div className="mt-5 space-y-4 text-pretty text-ink/75">
              <p>
                {site.shortName} began with a simple belief: that the earliest years are the most precious of
                all. Long before worksheets and report cards, children need warmth, wonder and the freedom to
                play their way into the world.
              </p>
              <p>
                Now, through our proud new partnership with{" "}
                <span className="font-semibold text-crimson">{site.parent}</span>, we carry that belief into a
                bright new era — pairing heartfelt early teaching with one of the region's most respected names
                in education. Powered by{" "}
                <span className="font-semibold">{site.poweredBy}</span>, every detail is crafted with care.
              </p>
              <p>
                Today, thousands of confident, kind and curious graduates have walked our sunlit corridors —
                and gone on to thrive. We'd be honoured to welcome your family next.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-lux-lg organic-2">
                <SmartImage
                  src="/images/about-story.jpg"
                  alt="Children and teachers sharing a joyful moment at Drona Valley"
                  emoji="🌻"
                  tone="sunshine"
                  className="aspect-[4/5] w-full"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 rotate-3 rounded-2xl bg-white px-5 py-3 shadow-lux">
                <p className="font-display text-2xl font-semibold text-gold-foil">Since {site.establishedYear}</p>
                <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-ink/55">7+ joyful years</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-crimson py-12">
        <div className="container-wide grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="container-wide py-16">
        <SectionHeading
          kicker="What guides us"
          title={<>Our mission, vision &amp; <span className="text-grape-dark">heart</span></>}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              body: "To give every child a joyful, secure and stimulating start — nurturing curiosity, confidence and kindness through the power of play.",
              color: "bg-coral-light/40 text-coral-dark",
            },
            {
              icon: Eye,
              title: "Our Vision",
              body: "A world where every child loves learning, because their very first classroom felt like a second home filled with wonder.",
              color: "bg-sky-light/50 text-sky-dark",
            },
            {
              icon: HeartHandshake,
              title: "Our Promise",
              body: "Small classes, warm teachers and a safe campus — so your child is always known, always cherished, always cheered on.",
              color: "bg-grass-light/50 text-grass-dark",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="card h-full text-center">
                <div className={`mx-auto inline-flex rounded-2xl p-3.5 ${c.color}`}>
                  <c.icon className="h-8 w-8" strokeWidth={2.1} />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <div className="relative">
        <WaveDivider className="h-12 w-full text-sunshine-light/40" fill="#FFF1C9" />
        <section className="bg-sunshine-light/30 py-16">
          <div className="container-wide">
            <SectionHeading
              kicker="The Drona Valley difference"
              title={<>Six little promises we keep <span className="text-sunshine-dark">every day</span></>}
            />
            <div className="mt-12">
              <Pillars />
            </div>
          </div>
        </section>
        <WaveDivider className="h-12 w-full text-sunshine-light/40" fill="#FFF1C9" flip />
      </div>

      {/* The Elden Heights connection */}
      <section className="container-wide py-16">
        <div className="grid items-center gap-10 rounded-5xl bg-white p-8 shadow-card sm:p-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="mx-auto max-w-xs">
              <EldenHeightsCrest className="mx-auto h-64 w-auto" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="label-kicker mb-4">
              <Sprout className="h-3.5 w-3.5" /> Part of something bigger
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">
              Rooted in The Elden Heights School
            </h2>
            <p className="mt-4 text-pretty text-ink/75">
              Drona Valley isn't a stand-alone playschool — it's the loving first chapter of a much longer
              story. {site.parent} is known for its commitment to character, curiosity and care, summed up in a
              motto we hold dear: <span className="font-semibold italic text-crimson">"{site.parentMotto}."</span>
            </p>
            <p className="mt-3 text-pretty text-ink/75">
              For our families, that means real continuity. The values your child meets in our Toddler Nest are
              the very same ones that will carry them through every grade that follows — a seamless, supported
              journey from first steps to first prizes.
            </p>
            <div className="mt-6 rounded-3xl bg-gold-light/25 p-5 ring-1 ring-gold/30">
              <p className="text-sm font-semibold text-ink/80">
                ✨ And there's an exciting new chapter on the way — scroll on to discover what's next for our
                little family.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's next — strategic anchor target */}
      <WhatsNext />

      <CtaBand
        title="Come and feel it for yourself"
        subtitle={`Words only say so much. Visit us at ${site.address.city} and watch your child's eyes light up.`}
      />

      {/* Hidden helper for screen readers describing location */}
      <p className="sr-only">{fullAddress()}</p>
    </>
  );
}
