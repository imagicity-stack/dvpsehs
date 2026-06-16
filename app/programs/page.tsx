import type { Metadata } from "next";
import { BookOpenText, Music, Palette, Calculator, Sprout, Globe2, Dumbbell, Languages } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { WaveDivider } from "@/components/illustrations";
import { programs, aDayInLife } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programmes & Curriculum",
  description:
    "From Toddler Nest to Kindergarten, explore Drona Valley's play-based early-years curriculum — phonics, numeracy, STEM, art, music and outdoor discovery for ages 2–6.",
  alternates: { canonical: "/programs" },
};

const learningAreas = [
  { icon: BookOpenText, title: "Early Literacy & Phonics", body: "Sounds, stories and squiggles — building a lifelong love of reading and self-expression.", color: "text-coral" },
  { icon: Calculator, title: "Numeracy & Logic", body: "Counting, sorting, patterns and shapes through hands-on play and real-world wonder.", color: "text-sky" },
  { icon: Sprout, title: "STEM & Discovery", body: "Bug hunts, bubble science and 'what happens if…?' — curiosity is our favourite subject.", color: "text-grass" },
  { icon: Palette, title: "Art & Creativity", body: "Paint, clay, glitter and glue. Process over product, always — every creation is a masterpiece.", color: "text-grape" },
  { icon: Music, title: "Music & Movement", body: "Rhymes, rhythm, dance and drama to grow coordination, confidence and joy.", color: "text-tangerine" },
  { icon: Globe2, title: "Social & Emotional", body: "Sharing, feelings, friendships and kindness — the heart-skills that matter most.", color: "text-bubblegum" },
  { icon: Dumbbell, title: "Physical & Outdoor", body: "Climbing, running, balancing and gardening — strong bodies make happy minds.", color: "text-crimson" },
  { icon: Languages, title: "Language & Communication", body: "Show-and-tell, circle time and story-telling that turn little talkers into confident speakers.", color: "text-sky-dark" },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        kicker="Programmes · Ages 2–6"
        title={<>A curriculum built for <span className="text-grape-dark">giggles &amp; growth</span></>}
        subtitle="Every programme follows a play-based, child-led approach — gently structured so children build real skills while doing what they love most: playing."
        crumbs={[{ label: "Programmes" }]}
        tone="grape"
      />

      {/* Programmes */}
      <section className="container-wide py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <Reveal key={p.slug}>
              <ProgramCard program={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Learning areas */}
      <div className="relative">
        <WaveDivider className="h-12 w-full" fill="#E3F4EA" />
        <section className="bg-grass-light/30 py-16">
          <div className="container-wide">
            <SectionHeading
              kicker="How we learn"
              title={<>Eight playful worlds of <span className="text-grass-dark">discovery</span></>}
              subtitle="Our days weave together these areas of learning — never as 'subjects', always as adventures."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {learningAreas.map((a, i) => (
                <Reveal key={a.title} delay={(i % 4) * 0.05}>
                  <div className="card h-full hover:-translate-y-1.5">
                    <div className={`inline-flex rounded-2xl bg-cream p-3 ${a.color}`}>
                      <a.icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{a.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <WaveDivider className="h-12 w-full" fill="#E3F4EA" flip />
      </div>

      {/* Sample day */}
      <section className="container-wide py-16">
        <SectionHeading
          kicker="A typical morning"
          title={<>Gentle rhythms, <span className="text-sky-dark">big adventures</span></>}
          subtitle="Predictable routines help little ones feel safe and ready to explore."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {aDayInLife.map((d, i) => (
            <Reveal key={d.time} delay={(i % 2) * 0.05}>
              <div className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-card">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cream text-2xl">{d.emoji}</span>
                <div>
                  <p className="font-display text-sm font-bold text-crimson">{d.time} AM · {d.title}</p>
                  <p className="text-sm text-ink/65">{d.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Curious which programme fits your child?"
        subtitle="Tell us their age and we'll guide you to the perfect starting point — then book you in for a visit."
      />
    </>
  );
}
