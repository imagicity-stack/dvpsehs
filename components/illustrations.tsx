/**
 * A kit of lightweight, hand-built SVG illustrations & decorations.
 * These keep the site colourful and playful without shipping heavy images.
 */

export function Blob({ className = "", fill = "#FFC93C" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        fill={fill}
        d="M44.7,-58.3C56.9,-49.6,65.3,-35.3,69.3,-19.8C73.3,-4.3,72.9,12.5,66.4,26.6C59.9,40.7,47.3,52.2,32.9,59.9C18.5,67.6,2.3,71.5,-14.6,70.1C-31.5,68.7,-49.1,62,-60.2,49.4C-71.3,36.8,-75.9,18.4,-75.3,0.3C-74.7,-17.7,-68.9,-35.5,-57.4,-44.8C-45.9,-54.1,-28.7,-55,-12.7,-58.9C3.3,-62.8,18.2,-69.7,30.2,-67.8C42.2,-65.9,32.5,-67,44.7,-58.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Sun({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g>
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 12;
          return (
            <line
              key={i}
              x1={60 + Math.cos(a) * 40}
              y1={60 + Math.sin(a) * 40}
              x2={60 + Math.cos(a) * 54}
              y2={60 + Math.sin(a) * 54}
              stroke="#F4A500"
              strokeWidth="6"
              strokeLinecap="round"
            />
          );
        })}
        <circle cx="60" cy="60" r="34" fill="#FFC93C" />
        <circle cx="50" cy="56" r="3.5" fill="#7a4a00" />
        <circle cx="70" cy="56" r="3.5" fill="#7a4a00" />
        <path d="M50 68 Q 60 78 70 68" stroke="#7a4a00" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <circle cx="44" cy="66" r="4" fill="#FF8FB1" opacity="0.7" />
        <circle cx="76" cy="66" r="4" fill="#FF8FB1" opacity="0.7" />
      </g>
    </svg>
  );
}

export function Cloud({ className = "", fill = "#ffffff" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        fill={fill}
        d="M50 95 C 25 95 18 70 38 62 C 34 40 64 30 76 48 C 86 30 120 32 122 56 C 150 50 170 70 156 88 C 168 92 166 95 158 95 Z"
      />
    </svg>
  );
}

export function Rainbow({ className = "" }: { className?: string }) {
  const bands = ["#FF6B6B", "#FF9F43", "#FFC93C", "#5BC57A", "#3DA9E0", "#9B6DD6"];
  return (
    <svg viewBox="0 0 200 110" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {bands.map((c, i) => (
        <path
          key={i}
          d={`M ${10 + i * 13} 100 A ${90 - i * 13} ${90 - i * 13} 0 0 1 ${190 - i * 13} 100`}
          fill="none"
          stroke={c}
          strokeWidth="13"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function Star({ className = "", fill = "#FFC93C" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        fill={fill}
        d="M12 2.5l2.6 5.7 6.2.7-4.6 4.2 1.3 6.1L12 16.9 6.5 19.2l1.3-6.1L3.2 8.9l6.2-.7z"
      />
    </svg>
  );
}

export function Squiggle({ className = "", stroke = "#9B6DD6" }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M2 20 Q 25 2 50 20 T 100 20 T 150 20 T 198 20"
        fill="none"
        stroke={stroke}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Balloon({ className = "", fill = "#FF6B6B" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 80 120" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <ellipse cx="40" cy="42" rx="32" ry="40" fill={fill} />
      <path d="M40 82 l -6 8 h 12 z" fill={fill} />
      <path d="M40 90 q 10 14 0 28" stroke="#bbb" strokeWidth="2" fill="none" />
      <ellipse cx="30" cy="30" rx="8" ry="12" fill="#fff" opacity="0.35" />
    </svg>
  );
}

export function Crayon({ className = "", color = "#5BC57A" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 160" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="8" y="28" width="24" height="118" rx="6" fill={color} />
      <rect x="8" y="44" width="24" height="10" fill="#ffffff" opacity="0.45" />
      <rect x="8" y="64" width="24" height="10" fill="#ffffff" opacity="0.45" />
      <path d="M8 28 L20 4 L32 28 Z" fill="#ffe0a3" />
      <path d="M14 28 L20 14 L26 28 Z" fill="#2d2433" opacity="0.5" />
    </svg>
  );
}

export function PaperPlane({ className = "", fill = "#3DA9E0" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 30 L60 6 L40 58 L30 40 Z" fill={fill} />
      <path d="M30 40 L60 6 L4 30 Z" fill={fill} opacity="0.6" />
      <path d="M30 40 L40 58 L34 42 Z" fill={fill} opacity="0.9" />
    </svg>
  );
}

/** A friendly hand-drawn wave used as a section divider. */
export function WaveDivider({
  className = "",
  fill = "#ffffff",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill={fill}
        d="M0 40 C 180 80 360 0 540 28 C 720 56 900 84 1080 56 C 1260 28 1350 8 1440 24 L 1440 80 L 0 80 Z"
      />
    </svg>
  );
}

/** A simple scalloped/bunting edge for headers. */
export function Scallop({ className = "", fill = "#FFC93C" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 1440 24" preserveAspectRatio="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path fill={fill} d="M0 0 H1440 V8 C 1380 24 1320 24 1260 8 C 1200 24 1140 24 1080 8 C 1020 24 960 24 900 8 C 840 24 780 24 720 8 C 660 24 600 24 540 8 C 480 24 420 24 360 8 C 300 24 240 24 180 8 C 120 24 60 24 0 8 Z" />
    </svg>
  );
}

/** Decorative confetti scattered in hero areas. */
export function Confetti({ className = "" }: { className?: string }) {
  const bits = [
    { x: 12, y: 20, c: "#FF6B6B", r: 18 },
    { x: 88, y: 14, c: "#3DA9E0", r: -22 },
    { x: 26, y: 78, c: "#5BC57A", r: 10 },
    { x: 70, y: 86, c: "#9B6DD6", r: -14 },
    { x: 50, y: 8, c: "#FFC93C", r: 32 },
    { x: 94, y: 60, c: "#FF8FB1", r: 8 },
    { x: 6, y: 52, c: "#FF9F43", r: -28 },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {bits.map((b, i) => (
        <span
          key={i}
          className="absolute block h-3 w-3 rounded-sm"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            background: b.c,
            transform: `rotate(${b.r}deg)`,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}
