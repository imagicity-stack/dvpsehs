import Link from "next/link";
import { site } from "@/lib/site";

/**
 * The playful Drona Valley mark — a rising sun over green valley hills with a
 * little sprout, echoing "early-years growth". The crimson sun ring is a quiet
 * nod to the Elden Heights crest colour.
 */
export function DvpsMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={`${site.name} logo mark`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="dvps-round">
          <circle cx="50" cy="50" r="48" />
        </clipPath>
        <linearGradient id="dvps-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A9DCF7" />
          <stop offset="100%" stopColor="#FFF1C9" />
        </linearGradient>
      </defs>
      <g clipPath="url(#dvps-round)">
        <rect width="100" height="100" fill="url(#dvps-sky)" />
        {/* sun */}
        <circle cx="50" cy="46" r="17" fill="#FFC93C" />
        <circle cx="50" cy="46" r="17" fill="none" stroke="#9B1B1B" strokeWidth="2.5" opacity="0.85" />
        {/* sun rays */}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 8 - Math.PI / 2;
          const x1 = 50 + Math.cos(a) * 22;
          const y1 = 46 + Math.sin(a) * 22;
          const x2 = 50 + Math.cos(a) * 28;
          const y2 = 46 + Math.sin(a) * 28;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#F4A500"
              strokeWidth="3.4"
              strokeLinecap="round"
            />
          );
        })}
        {/* hills */}
        <path d="M-5 78 Q 25 58 55 78 T 110 74 V105 H-5 Z" fill="#5BC57A" />
        <path d="M-5 88 Q 35 70 70 88 T 110 86 V105 H-5 Z" fill="#3AA95C" />
        {/* sprout */}
        <path d="M50 86 V72" stroke="#2f7d44" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 76 C 44 74 41 68 42 63 C 48 64 51 70 50 76 Z" fill="#FFF" opacity="0.95" />
        <path d="M50 80 C 56 78 59 72 58 67 C 52 68 49 74 50 80 Z" fill="#FFF" opacity="0.95" />
      </g>
      <circle cx="50" cy="50" r="47" fill="none" stroke="#9B1B1B" strokeWidth="3" />
    </svg>
  );
}

/**
 * Full horizontal logo lockup used in the header & footer.
 * The "Early Years of The Elden Heights School" subline is deliberate —
 * it keeps the parent brand gently present everywhere.
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
      <DvpsMark className="h-11 w-11 shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 sm:h-12 sm:w-12" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-tight sm:text-xl ${
            invert ? "text-white" : "text-ink"
          }`}
        >
          Drona Valley
          <span className={invert ? "text-sunshine" : "text-crimson"}> Public School</span>
        </span>
        {subline && (
          <span
            className={`mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] ${
              invert ? "text-white/70" : "text-ink/55"
            }`}
          >
            Early Years of The Elden Heights School
          </span>
        )}
      </span>
    </Link>
  );
}
