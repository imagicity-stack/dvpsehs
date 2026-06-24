"use client";

import { useState } from "react";
import type { ReactNode } from "react";

/**
 * Renders a real logo image, falling back to a designed SVG mark if the
 * file isn't present yet. This lets us point the brand at /images/dvps.png
 * and /images/ehs.png now; the moment those files are committed the photo
 * logo shows, and until then the hand-built SVG keeps the UI intact.
 */
export function BrandImg({
  src,
  alt,
  className = "",
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain`}
      onError={() => setFailed(true)}
    />
  );
}
