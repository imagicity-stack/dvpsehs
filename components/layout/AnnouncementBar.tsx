"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Slim luxury marquee. Carries the "a new era is beginning" partnership
 * messaging — emotionally framing Drona Valley joining The Elden Heights
 * family as a proud upgrade, laying the ground for the eventual transition.
 */
const phrases = [
  "A proud new partnership with The Elden Heights School",
  "A new era of luxury early learning begins",
  "Same loving teachers — a future full of more",
  "Welcome to the Elden Heights family",
  "Towards Eternal Glory — from the very first step",
];

export function AnnouncementBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("dvps-annc") === "off") {
      setHidden(true);
    }
  }, []);

  if (hidden) return null;

  const row = (
    <div className="flex shrink-0 items-center gap-10 px-5">
      {phrases.map((p, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span className="text-[0.78rem] font-semibold tracking-wide text-ivory/90">{p}</span>
          <span className="text-gold-light" aria-hidden>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative z-50 overflow-hidden bg-wine-deep">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-sheen opacity-70" />
      <div className="relative flex items-center">
        <Link
          href="/about#whats-next"
          aria-label="Read about our new partnership"
          className="group flex flex-1 items-center overflow-hidden py-2"
        >
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {row}
            {row}
          </div>
        </Link>
        <button
          type="button"
          onClick={() => {
            setHidden(true);
            try {
              sessionStorage.setItem("dvps-annc", "off");
            } catch {
              /* ignore */
            }
          }}
          aria-label="Dismiss announcement"
          className="hidden shrink-0 px-4 text-ivory/50 transition hover:text-gold-light sm:block"
        >
          ✕
        </button>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gold-sheen opacity-40" />
    </div>
  );
}
