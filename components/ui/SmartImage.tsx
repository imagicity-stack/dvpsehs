"use client";

import { useState } from "react";

type Tone = "crimson" | "gold" | "sky" | "coral" | "grass" | "grape" | "sunshine" | "bubblegum";

const tones: Record<Tone, { from: string; to: string; ink: string }> = {
  crimson: { from: "#B6403B", to: "#6B1212", ink: "rgba(255,253,248,0.92)" },
  gold: { from: "#E7CD86", to: "#A67C24", ink: "rgba(36,27,46,0.85)" },
  sky: { from: "#A9DCF7", to: "#1E83BC", ink: "rgba(255,255,255,0.95)" },
  coral: { from: "#FFA8A8", to: "#E8453F", ink: "rgba(255,255,255,0.95)" },
  grass: { from: "#A6E6B8", to: "#3AA95C", ink: "rgba(255,255,255,0.95)" },
  grape: { from: "#C9AEEC", to: "#7B4CC0", ink: "rgba(255,255,255,0.95)" },
  sunshine: { from: "#FFE08A", to: "#F4A500", ink: "rgba(36,27,46,0.85)" },
  bubblegum: { from: "#FFC2D4", to: "#F2628C", ink: "rgba(255,255,255,0.95)" },
};

/**
 * An image slot with a graceful, designed fallback.
 *
 * `src` points at a file the school will add later (see IMAGES.md). Until that
 * file exists, a polished gradient + emoji panel is shown so the layout always
 * looks intentional. The real photo simply appears once committed to the repo.
 */
export function SmartImage({
  src,
  alt,
  emoji = "📸",
  tone = "crimson",
  className = "",
  imgClassName = "",
  priority = false,
}: {
  src: string;
  alt: string;
  emoji?: string;
  tone?: Tone;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const t = tones[tone];

  return (
    <div className={`relative overflow-hidden bg-cream ${className}`}>
      {/* Designed fallback (always rendered behind the photo) */}
      <div
        className="absolute inset-0 grid place-items-center"
        style={{ backgroundImage: `linear-gradient(150deg, ${t.from}, ${t.to})` }}
        aria-hidden={!failed}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px",
          }}
        />
        <span className="relative text-6xl drop-shadow-md sm:text-7xl">{emoji}</span>
        {/* soft sheen */}
        <span className="pointer-events-none absolute -inset-y-10 left-0 w-1/3 animate-sheen-sweep bg-white/20 blur-md" />
      </div>

      {/* Real photo (fades in when present) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`relative h-full w-full object-cover transition-opacity duration-700 ${
          loaded && !failed ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
    </div>
  );
}
