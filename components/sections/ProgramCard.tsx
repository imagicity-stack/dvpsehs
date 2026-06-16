import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Program } from "@/lib/content";
import { SmartImage } from "@/components/ui/SmartImage";

const accent: Record<Program["color"], { chip: string; dot: string; hover: string }> = {
  sunshine: { chip: "bg-sunshine text-ink", dot: "bg-sunshine-dark", hover: "group-hover:text-sunshine-dark" },
  sky: { chip: "bg-sky text-white", dot: "bg-sky-dark", hover: "group-hover:text-sky-dark" },
  coral: { chip: "bg-coral text-white", dot: "bg-coral-dark", hover: "group-hover:text-coral-dark" },
  grass: { chip: "bg-grass text-white", dot: "bg-grass-dark", hover: "group-hover:text-grass-dark" },
  grape: { chip: "bg-grape text-white", dot: "bg-grape-dark", hover: "group-hover:text-grape-dark" },
  tangerine: { chip: "bg-tangerine text-white", dot: "bg-tangerine-dark", hover: "group-hover:text-tangerine-dark" },
  bubblegum: { chip: "bg-bubblegum text-white", dot: "bg-bubblegum-dark", hover: "group-hover:text-bubblegum-dark" },
};

export function ProgramCard({ program }: { program: Program }) {
  const a = accent[program.color];
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[1.9rem] border border-ink/5 bg-white/95 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lux">
      {/* image header */}
      <div className="relative">
        <SmartImage
          src={program.img}
          alt={`${program.name} at Drona Valley`}
          emoji={program.emoji}
          tone={program.tone}
          className="aspect-[16/10] w-full"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className={`badge ${a.chip} shadow-md`}>{program.age}</span>
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-ink/70 backdrop-blur">
          Ratio {program.ratio}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-2xl font-semibold">{program.name}</h3>
        <p className="mt-1 font-display text-sm italic text-gold-dark">{program.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{program.blurb}</p>

        <ul className="mt-5 grid gap-2">
          {program.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-ink/80">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex-1" />
        <Link
          href="/admissions"
          className={`mt-6 inline-flex items-center gap-1.5 font-fun text-sm font-semibold text-ink transition-colors ${a.hover}`}
        >
          Enquire about {program.name}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
