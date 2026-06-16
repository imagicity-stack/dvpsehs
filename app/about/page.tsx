import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, Sprout, ArrowUpRight, ChevronRight } from "lucide-react";
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

const journey = [
  { emoji: "🎨", stage: "Pre-Primary", grades: "Drona Valley · Ages 2–6", here: true, dest: false },
  { emoji: "✏️", stage: "Primary", grades: "Grades 1 – 5", here: false, dest: false },
  { emoji: "🔭", stage: "Middle School", grades: "Grades 6 – 8", here: false, dest: false },
  { emoji: "📚", stage: "Senior School", grades: "Grades 9 – 12", here: false, dest: false },
  { emoji: "🎓", stage: "Class 12 Graduate", grades: "Towards Eternal Glory", here: false, dest: true },
];

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
      <section id="elden-heights" className="container-wide scroll-mt-28 py-16">
        <div className="grid items-center gap-10 rounded-[2.5rem] border border-gold/15 bg-ivory/80 p-8 shadow-lux sm:p-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="mx-auto max-w-xs">
              <EldenHeightsCrest className="mx-auto h-64 w-auto" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="label-kicker mb-4">
              <Sprout className="h-3.5 w-3.5" /> Part of something bigger
            </span>
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              In partnership with The Elden Heights School
            </h2>
            <p className="mt-4 text-pretty text-ink/75">
              We've joined hands with{" "}
              <a href={site.parentUrl} target="_blank" rel="noreferrer" className="link-underline">
                {site.parent}
              </a>{" "}
              — one of the region's most respected names in education. For decades, Elden Heights has been known
              for academic excellence, strength of character and a deep culture of care, all carried in a motto
              the whole community holds dear:{" "}
              <span className="font-semibold italic text-crimson">"{site.parentMotto}."</span>
            </p>
            <p className="mt-3 text-pretty text-ink/75">
              For our families, this partnership means something wonderful: real continuity. The warmth and
              values your child meets in our Toddler Nest are the very same ones that will guide them through
              every grade that follows — all the way to a proud Class 12 graduation.
            </p>
            <a
              href={site.parentUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-fun text-sm font-semibold text-crimson transition hover:text-gold-dark"
            >
              Explore The Elden Heights School
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Seamless K-12 pathway */}
      <section className="relative overflow-hidden bg-sand/60 py-20">
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden />
        <div className="container-wide relative">
          <SectionHeading
            kicker="One admission · all the way to Class 12"
            title={<>From first steps to a <span className="italic text-gold-foil">Class 12 graduate</span></>}
            subtitle="When your little one joins Drona Valley, they step onto a seamless pathway with The Elden Heights School — no nerve-wracking school hunts at age six, no re-admission scramble. Just one warm family, all the way through."
          />

          <div className="mt-14 flex flex-col items-stretch gap-3 lg:flex-row">
            {journey.map((s, i) => (
              <Reveal key={s.stage} delay={i * 0.07} className="flex flex-1 flex-col lg:flex-row lg:items-center">
                <div
                  className={`relative flex-1 rounded-[1.6rem] border p-5 text-center shadow-card transition ${
                    s.dest
                      ? "border-gold/40 bg-crimson-rich text-ivory"
                      : s.here
                        ? "border-gold/50 bg-ivory ring-2 ring-gold/40"
                        : "border-ink/5 bg-white/90"
                  }`}
                >
                  {s.here && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-sheen px-3 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-ink shadow">
                      Start here
                    </span>
                  )}
                  <div className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl text-2xl ${s.dest ? "bg-white/15" : "bg-cream"}`}>
                    {s.emoji}
                  </div>
                  <h3 className={`mt-3 font-display text-lg font-semibold ${s.dest ? "text-ivory" : "text-ink"}`}>{s.stage}</h3>
                  <p className={`text-sm ${s.dest ? "text-gold-light" : "text-ink/60"}`}>{s.grades}</p>
                </div>
                {i < journey.length - 1 && (
                  <div className="flex items-center justify-center py-1 lg:px-1 lg:py-0">
                    <ChevronRight className="h-6 w-6 rotate-90 text-gold lg:rotate-0" />
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-pretty text-ink/70">
            <span className="font-semibold text-crimson">One school. One family. Thirteen joyful years.</span>{" "}
            Your child can walk in at age two and walk out a Class 12 graduate of The Elden Heights School —
            confident, cherished and ready for the world.
          </p>
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
