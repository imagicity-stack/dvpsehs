import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/content";

const colorMap: Record<
  Program["color"],
  { bg: string; ring: string; chip: string; dot: string; btn: string }
> = {
  sunshine: { bg: "bg-sunshine-light/50", ring: "ring-sunshine/40", chip: "bg-sunshine text-ink", dot: "bg-sunshine-dark", btn: "group-hover:text-sunshine-dark" },
  sky: { bg: "bg-sky-light/50", ring: "ring-sky/40", chip: "bg-sky text-white", dot: "bg-sky-dark", btn: "group-hover:text-sky-dark" },
  coral: { bg: "bg-coral-light/50", ring: "ring-coral/40", chip: "bg-coral text-white", dot: "bg-coral-dark", btn: "group-hover:text-coral-dark" },
  grass: { bg: "bg-grass-light/50", ring: "ring-grass/40", chip: "bg-grass text-white", dot: "bg-grass-dark", btn: "group-hover:text-grass-dark" },
  grape: { bg: "bg-grape-light/50", ring: "ring-grape/40", chip: "bg-grape text-white", dot: "bg-grape-dark", btn: "group-hover:text-grape-dark" },
  tangerine: { bg: "bg-tangerine-light/50", ring: "ring-tangerine/40", chip: "bg-tangerine text-white", dot: "bg-tangerine-dark", btn: "group-hover:text-tangerine-dark" },
  bubblegum: { bg: "bg-bubblegum-light/50", ring: "ring-bubblegum/40", chip: "bg-bubblegum text-white", dot: "bg-bubblegum-dark", btn: "group-hover:text-bubblegum-dark" },
};

export function ProgramCard({ program }: { program: Program }) {
  const c = colorMap[program.color];
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-4xl ${c.bg} p-6 ring-1 ${c.ring} transition-transform duration-300 hover:-translate-y-1.5 sm:p-7`}
    >
      <div className="flex items-center justify-between">
        <span className={`badge ${c.chip}`}>{program.age}</span>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-ink/70">
          Ratio {program.ratio}
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-bold">{program.name}</h3>
      <p className="mt-1 text-sm font-semibold italic text-ink/60">{program.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink/75">{program.blurb}</p>

      <ul className="mt-5 space-y-2">
        {program.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-sm text-ink/80">
            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${c.dot}`} />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex-1" />
      <Link
        href="/admissions"
        className={`mt-2 inline-flex items-center gap-1.5 font-display text-sm font-bold text-ink transition-colors ${c.btn}`}
      >
        Enquire about {program.name}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
