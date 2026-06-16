import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { SmartImage } from "@/components/ui/SmartImage";

export const metadata: Metadata = {
  title: "Life @ Drona Valley",
  description:
    "Peek inside daily life at Drona Valley Public School — art, music, garden play, festivals, story-time and the everyday magic of early-years learning.",
  alternates: { canonical: "/gallery" },
};

type Tone = "coral" | "sky" | "grass" | "grape" | "sunshine" | "bubblegum" | "gold" | "crimson";
type Tile = { title: string; note: string; tone: Tone; img: string; span?: string };

const tiles: Tile[] = [
  { title: "Messy Art Mondays", note: "Hands-on, heart-full creativity.", tone: "coral", img: "/images/gallery-art.jpg", span: "sm:row-span-2" },
  { title: "Our Little Garden", note: "Planting, watering, wondering.", tone: "grass", img: "/images/gallery-garden.jpg" },
  { title: "Story Circle", note: "Once upon a time, every day.", tone: "sky", img: "/images/gallery-story.jpg" },
  { title: "Music & Movement", note: "Shake, sing, sway, smile.", tone: "sunshine", img: "/images/gallery-music.jpg", span: "sm:row-span-2" },
  { title: "Discovery Stations", note: "Puzzles, blocks & big ideas.", tone: "grape", img: "/images/gallery-discovery.jpg" },
  { title: "Outdoor Play", note: "Running, climbing, giggling.", tone: "coral", img: "/images/gallery-outdoor.jpg" },
  { title: "Dress-up & Drama", note: "Today I'm a dragon… a star!", tone: "grass", img: "/images/gallery-drama.jpg" },
  { title: "Festivals & Friends", note: "Every culture, every celebration.", tone: "bubblegum", img: "/images/gallery-festivals.jpg", span: "sm:col-span-2" },
  { title: "Healthy Snack Time", note: "Fuel for busy little bodies.", tone: "gold", img: "/images/gallery-snack.jpg" },
  { title: "Bubble Science", note: "What happens if…?", tone: "sky", img: "/images/gallery-science.jpg" },
  { title: "Cuddle Corner", note: "Because feelings matter too.", tone: "grape", img: "/images/gallery-cuddle.jpg" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Life @ Drona Valley"
        title={<>A peek into our <span className="italic text-gold-foil">happy little world</span></>}
        subtitle="Paint-splattered hands, garden-muddy shoes and a whole lot of laughter. Here's a glimpse of the everyday magic our children make."
        crumbs={[{ label: "Life @ Drona Valley" }]}
        tone="coral"
      />

      <section className="container-wide py-16">
        <div className="grid auto-rows-[10.5rem] grid-cols-2 gap-4 sm:auto-rows-[12rem] lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={(i % 4) * 0.05} className={t.span ?? ""}>
              <figure className={`group relative h-full overflow-hidden rounded-[1.6rem] border-2 border-white shadow-card ${t.span ?? ""}`}>
                <SmartImage src={t.img} alt={t.title} tone={t.tone} className="h-full w-full" imgClassName="transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-lg font-semibold text-ivory drop-shadow">{t.title}</p>
                  <p className="text-sm text-ivory/85">{t.note}</p>
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

      <section className="container-wide pb-6">
        <SectionHeading
          kicker="In their words"
          title={<>Moments our families <span className="italic text-gold-foil">treasure</span></>}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { q: "She talks about 'garden day' the whole weekend!", c: "bg-grass-light/50" },
            { q: "He made his first best friend here. My heart.", c: "bg-sky-light/50" },
            { q: "The festival assembly had us all in happy tears.", c: "bg-sunshine-light/60" },
          ].map((m, i) => (
            <div key={m.q} className={`rounded-[1.6rem] ${m.c} p-7 text-center font-display text-lg font-medium italic text-ink/80 ${i % 2 === 1 ? "sm:translate-y-4" : ""}`}>
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
