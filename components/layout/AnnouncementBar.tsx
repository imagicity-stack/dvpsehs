"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, X } from "lucide-react";

/**
 * Dismissible top bar. This carries the gentle "a new chapter is coming"
 * messaging — enough to make parents feel a positive change is on the way,
 * without spelling out the full rebrand.
 */
const messages = [
  "A brand-new chapter is taking root at Drona Valley — guided by The Elden Heights School. ✨",
  "Same loving teachers, same happy classrooms — and something wonderful growing on the horizon. 🌱",
  "Exciting times ahead for our little family. Stay close — you won't want to miss what's next. 🎈",
];

export function AnnouncementBar() {
  const [hidden, setHidden] = useState(false);
  const [idx, setIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && sessionStorage.getItem("dvps-annc-dismissed") === "1") {
      setHidden(true);
    }
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 6000);
    return () => clearInterval(t);
  }, []);

  if (hidden) return null;

  return (
    <div className="relative z-50 overflow-hidden bg-gradient-to-r from-crimson via-crimson-dark to-crimson text-white">
      <div className="container-wide flex items-center justify-center gap-3 py-2 text-center text-sm font-medium">
        <Sparkles className="h-4 w-4 shrink-0 text-gold-light" aria-hidden />
        <p
          key={idx}
          className={`${mounted ? "animate-pop" : ""} text-balance`}
          aria-live="polite"
        >
          {messages[idx]}{" "}
          <Link href="/about#whats-next" className="font-bold text-gold-light underline-offset-2 hover:underline">
            Discover more
          </Link>
        </p>
        <button
          type="button"
          onClick={() => {
            setHidden(true);
            try {
              sessionStorage.setItem("dvps-annc-dismissed", "1");
            } catch {
              /* ignore */
            }
          }}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full p-1 text-white/70 transition hover:bg-white/15 hover:text-white sm:block"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
