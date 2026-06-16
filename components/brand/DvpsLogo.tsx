import Link from "next/link";
import { site } from "@/lib/site";

/**
 * The Drona Valley mark — a rising sun over valley hills with a young sprout,
 * ringed in gold for a more premium feel. The crimson echoes the Elden
 * Heights crest, quietly tying the two brands together.
 */
export function DvpsMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={`${site.name} logo mark`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="dvps-round">
          <circle cx="50" cy="50" r="45" />
        </clipPath>
        <linearGradient id="dvps-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A9DCF7" />
          <stop offset="100%" stopColor="#FFF1C9" />
        </linearGradient>
        <linearGradient id="dvps-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E7CD86" />
          <stop offset="50%" stopColor="#C79A3A" />
          <stop offset="100%" stopColor="#A67C24" />
        </linearGradient>
      </defs>
      <g clipPath="url(#dvps-round)">
        <rect width="100" height="100" fill="url(#dvps-sky)" />
        <circle cx="50" cy="46" r="16" fill="#FFC93C" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8 - Math.PI / 2;
          return (
            <line
              key={i}
              x1={50 + Math.cos(a) * 21}
              y1={46 + Math.sin(a) * 21}
              x2={50 + Math.cos(a) * 27}
              y2={46 + Math.sin(a) * 27}
              stroke="#F4A500"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
          );
        })}
        <path d="M-5 78 Q 25 58 55 78 T 110 74 V105 H-5 Z" fill="#5BC57A" />
        <path d="M-5 88 Q 35 70 70 88 T 110 86 V105 H-5 Z" fill="#3AA95C" />
        <path d="M50 86 V72" stroke="#2f7d44" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 76 C 44 74 41 68 42 63 C 48 64 51 70 50 76 Z" fill="#FFF" opacity="0.95" />
        <path d="M50 80 C 56 78 59 72 58 67 C 52 68 49 74 50 80 Z" fill="#FFF" opacity="0.95" />
      </g>
      <circle cx="50" cy="50" r="46.5" fill="none" stroke="url(#dvps-gold)" strokeWidth="3" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#8E1B1B" strokeWidth="1.4" opacity="0.55" />
    </svg>
  );
}

/**
 * Full horizontal logo lockup. The partnership subline keeps The Elden
 * Heights School present in the brand everywhere it appears.
 */
export function DvpsLogo({
  className = "",
  subline = true,
  invert = false,
}: {
  className?: string;
  subline?: boolean;
  invert?: boolean;
}) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`} aria-label={`${site.name} — home`}>
      <DvpsMark className="h-11 w-11 shrink-0 drop-shadow-sm transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105 sm:h-[50px] sm:w-[50px]" />
      <span className="flex flex-col justify-center leading-none">
        <span className={`font-display text-[1.3rem] font-semibold leading-none tracking-tight sm:text-[1.45rem] ${invert ? "text-ivory" : "text-ink"}`}>
          Drona <span className={invert ? "text-gold-light" : "text-crimson"}>Valley</span>
        </span>
        {subline && (
          <span className={`mt-[5px] text-[0.58rem] font-bold uppercase leading-none tracking-[0.22em] ${invert ? "text-ivory/65" : "text-ink/50"}`}>
            Pre-Primary School · Ages 2–6
          </span>
        )}
      </span>
    </Link>
  );
}
