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

export function Pillars() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((p, i) => {
        const Icon = icons[p.icon];
        return (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="card h-full hover:-translate-y-1.5">
              <div className={`inline-flex rounded-2xl bg-cream p-3 ${p.color}`}>
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.body}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
