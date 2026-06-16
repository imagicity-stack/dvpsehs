import { Heart, Sparkles, Leaf, Puzzle, Palette, Shield } from "lucide-react";
import { pillars, type Pillar } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<Pillar["icon"], typeof Heart> = {
  heart: Heart,
  sparkles: Sparkles,
  leaf: Leaf,
  puzzle: Puzzle,
  palette: Palette,
  shield: Shield,
};

const ring: Record<string, string> = {
  "text-sky": "bg-sky-light/50",
  "text-coral": "bg-coral-light/50",
  "text-sunshine-dark": "bg-sunshine-light/60",
  "text-grass": "bg-grass-light/50",
  "text-grape": "bg-grape-light/50",
  "text-crimson": "bg-crimson/10",
};

export function Pillars() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((p, i) => {
        const Icon = icons[p.icon];
        return (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className={`group card-lux h-full ${i % 2 === 1 ? "lg:translate-y-4" : ""}`}>
              <div className="flex items-center gap-4">
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${ring[p.color] ?? "bg-cream"} ${p.color} ring-1 ring-inset ring-white/60 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                </span>
                <span className="font-display text-4xl font-semibold text-gold/30">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.body}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
