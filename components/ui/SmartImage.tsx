"use client";

import { useState } from "react";

type Tone = "crimson" | "gold" | "sky" | "coral" | "grass" | "grape" | "sunshine" | "bubblegum";

const tones: Record<Tone, { from: string; to: string }> = {
  crimson: { from: "#B6403B", to: "#6B1212" },
  gold: { from: "#E7CD86", to: "#A67C24" },
  sky: { from: "#A9DCF7", to: "#1E83BC" },
  coral: { from: "#FFA8A8", to: "#E8453F" },
  grass: { from: "#A6E6B8", to: "#3AA95C" },
  grape: { from: "#C9AEEC", to: "#7B4CC0" },
  sunshine: { from: "#FFE08A", to: "#F4A500" },
  bubblegum: { from: "#FFC2D4", to: "#F2628C" },
};

/**
 * An image slot with a graceful, designed fallback.
 *
 * `src` points at a file the school will add later (see IMAGES.md). Until
 * that file exists, a polished gradient panel — soft dot pattern + light
 * sheen sweep — is shown so the layout always looks intentional. The real
 * photo simply appears once committed to the repo.
 */
export function SmartImage({
  src,
  alt,
  tone = "crimson",
  className = "",
  imgClassName = "",
  priority = false,
}: {
  src: string;
  alt: string;
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
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `linear-gradient(150deg, ${t.from}, ${t.to})` }}
        aria-hidden={!failed}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.55) 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 25% 20%, rgba(255,255,255,0.18), transparent 55%)",
          }}
        />
        <span className="pointer-events-none absolute -inset-y-10 left-0 w-1/3 animate-sheen-sweep bg-white/15 blur-md" />
      </div>

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
