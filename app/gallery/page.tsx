import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Life @ Drona Valley",
  description:
    "Peek inside daily life at Drona Valley Public School — art, music, garden play, festivals, story-time and the everyday magic of early-years learning.",
  alternates: { canonical: "/gallery" },
};

type Tile = { emoji: string; title: string; note: string; from: string; to: string; span?: string };

const tiles: Tile[] = [
  { emoji: "🎨", title: "Messy Art Mondays", note: "Hands-on, heart-full creativity.", from: "#FFB3C1", to: "#FF6B6B", span: "sm:row-span-2" },
  { emoji: "🌱", title: "Our Little Garden", note: "Planting, watering, wondering.", from: "#A6E6B8", to: "#5BC57A" },
  { emoji: "📚", title: "Story Circle", note: "Once upon a time, every day.", from: "#A9DCF7", to: "#3DA9E0" },
  { emoji: "🎶", title: "Music & Movement", note: "Shake, sing, sway, smile.", from: "#FFE08A", to: "#FFC93C", span: "sm:row-span-2" },
  { emoji: "🧩", title: "Discovery Stations", note: "Puzzles, blocks & big ideas.", from: "#C9AEEC", to: "#9B6DD6" },
  { emoji: "⚽", title: "Outdoor Play", note: "Running, climbing, giggling.", from: "#FFC79A", to: "#FF9F43" },
  { emoji: "🎭", title: "Dress-up & Drama", note: "Today I'm a doctor… a dragon… a star!", from: "#A6E6B8", to: "#3AA95C" },
  { emoji: "🎉", title: "Festivals & Friends", note: "Every culture, every celebration.", from: "#FFB3C1", to: "#F2628C", span: "sm:col-span-2" },
  { emoji: "🥪", title: "Healthy Snack Time", note: "Fuel for busy little bodies.", from: "#FFE08A", to: "#F4A500" },
  { emoji: "🔬", title: "Bubble Science", note: "What happens if…?", from: "#A9DCF7", to: "#1E83BC" },
  { emoji: "💛", title: "Quiet Cuddle Corner", note: "Because feelings matter too.", from: "#C9AEEC", to: "#7B4CC0" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Life @ Drona Valley"
        title={<>A peek into our <span className="text-coral">happy little world</span></>}
        subtitle="Paint-splattered hands, garden-muddy shoes and a whole lot of laughter. Here's a glimpse of the everyday magic our children make."
        crumbs={[{ label: "Life @ Drona Valley" }]}
        tone="coral"
      />

      <section className="container-wide py-14">
        <div className="grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[180px] lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={(i % 4) * 0.05} className={t.span ?? ""}>
              <figure
                className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-4xl p-5 text-white shadow-card transition-transform duration-300 hover:-translate-y-1.5 ${t.span ?? ""}`}
                style={{ backgroundImage: `linear-gradient(150deg, ${t.from}, ${t.to})` }}
              >
                <span className="absolute right-3 top-3 text-5xl drop-shadow-md transition-transform duration-300 group-hover:scale-110 sm:text-6xl">
                  {t.emoji}
                </span>
                <figcaption className="relative">
                  <p className="font-display text-lg font-bold drop-shadow">{t.title}</p>
                  <p className="text-sm text-white/85">{t.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-ink/55">
          Want to see the real thing? The best photos are the ones you take on a visit — come and watch your
          child join the fun.
        </p>
      </section>

      <SectionHeading
        className="px-5"
        kicker="In their words"
        title={<>Moments our families <span className="text-grape-dark">treasure</span></>}
      />
      <section className="container-wide py-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { q: "She talks about 'garden day' the whole weekend!", c: "bg-grass-light/50" },
            { q: "He made his first best friend here. My heart.", c: "bg-sky-light/50" },
            { q: "The festival assembly had us all in happy tears.", c: "bg-sunshine-light/60" },
          ].map((m) => (
            <div key={m.q} className={`rounded-4xl ${m.c} p-6 text-center font-display text-lg font-bold text-ink/80`}>
              “{m.q}”
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="The happiest photos haven't been taken yet"
        subtitle="Because they're the ones with your child in them. Book a visit and let's make some memories."
      />
    </>
  );
}
