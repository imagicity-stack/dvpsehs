import { site } from "@/lib/site";

/**
 * A faithful, hand-built SVG recreation of The Elden Heights School crest:
 * a crimson shield bearing a white phoenix grasping the torch of knowledge,
 * framed by golden laurels above a ribbon reading "TOWARDS ETERNAL GLORY".
 *
 * Built as inline SVG so it stays razor-sharp at any size and inherits the
 * brand palette. To swap in the official artwork later, drop the file at
 * /public/elden-heights-logo.png and replace this component with an <Image/>.
 */
export function EldenHeightsCrest({
  className = "",
  withBanner = true,
}: {
  className?: string;
  withBanner?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 220 250"
      className={className}
      role="img"
      aria-label={`${site.parent} crest — ${site.parentMotto}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Golden laurel wreath */}
      <g fill="#D9A323">
        {laurelLeaves.map((l, i) => (
          <ellipse
            key={`l-${i}`}
            cx={l.x}
            cy={l.y}
            rx="5.6"
            ry="11"
            transform={`rotate(${l.r} ${l.x} ${l.y})`}
          />
        ))}
        {/* mirrored right side */}
        {laurelLeaves.map((l, i) => (
          <ellipse
            key={`r-${i}`}
            cx={220 - l.x}
            cy={l.y}
            rx="5.6"
            ry="11"
            transform={`rotate(${-l.r} ${220 - l.x} ${l.y})`}
          />
        ))}
        {/* crossed stems at the base */}
        <path
          d="M70 214 C 58 196 52 150 60 96"
          stroke="#C58F1B"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M150 214 C 162 196 168 150 160 96"
          stroke="#C58F1B"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Shield — dark border, crimson field, thin gold inner line */}
      <path d={shieldPath} fill="#161616" />
      <path d={shieldPathInner} fill="#9B1B1B" />
      <path
        d={shieldPathInner}
        fill="none"
        stroke="#D9A323"
        strokeWidth="2.2"
        transform="scale(0.93) translate(8 8)"
        opacity="0.9"
      />

      {/* The phoenix bearing the torch (white) */}
      <g fill="#FFFFFF">
        {/* sweeping wing — layered feathers */}
        {wingFeathers.map((f, i) => (
          <path
            key={`w-${i}`}
            d={featherPath}
            transform={`translate(${f.x} ${f.y}) rotate(${f.r}) scale(${f.s})`}
          />
        ))}
        {/* body */}
        <path d="M104 86 C 90 92 86 108 92 124 C 96 134 108 138 116 132 C 124 126 124 104 116 92 C 113 88 108 84 104 86 Z" />
        {/* head + crest + beak */}
        <circle cx="120" cy="84" r="9.5" />
        <path d="M129 82 L 142 79 L 131 88 Z" />
        <path d="M118 74 L 122 60 L 126 75 Z" />
        {/* tail feathers (three diagonal strokes) */}
        <path d="M92 126 L 74 150 L 82 150 L 100 130 Z" />
        <path d="M98 130 L 82 156 L 90 156 L 106 134 Z" />
        <path d="M104 132 L 90 160 L 98 160 L 112 138 Z" />
        {/* leg / talon */}
        <path d="M112 132 L 110 150 L 116 150 L 118 134 Z" />
      </g>

      {/* Torch: white handle with a flame (gold tie-in) */}
      <g>
        <path
          d="M126 96 L 150 64"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <ellipse cx="152" cy="58" rx="9" ry="6" fill="#FFFFFF" />
        <path
          d="M152 56 C 146 48 150 40 156 34 C 156 44 162 46 160 54 C 159 58 155 60 152 56 Z"
          fill="#FFFFFF"
        />
        <path
          d="M153 52 C 150 47 152 42 156 38 C 156 45 159 46 158 51 C 157 54 155 55 153 52 Z"
          fill="#D9A323"
        />
      </g>

      {/* Ribbon banner */}
      {withBanner && (
        <g>
          <path
            d="M30 214 L 14 206 L 24 222 L 14 230 L 40 230 Z"
            fill="#EFE7D6"
            stroke="#1d1d1d"
            strokeWidth="1.2"
          />
          <path
            d="M190 214 L 206 206 L 196 222 L 206 230 L 180 230 Z"
            fill="#EFE7D6"
            stroke="#1d1d1d"
            strokeWidth="1.2"
          />
          <path
            d="M34 210 Q 110 200 186 210 L 186 230 Q 110 238 34 230 Z"
            fill="#FBF7EE"
            stroke="#1d1d1d"
            strokeWidth="1.4"
          />
          <text
            x="110"
            y="224"
            textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="11"
            letterSpacing="1.5"
            fill="#1d1d1d"
            fontWeight="600"
          >
            TOWARDS ETERNAL GLORY
          </text>
        </g>
      )}
    </svg>
  );
}

const shieldPath =
  "M58 60 H162 C168 60 172 64 172 70 V126 C172 168 138 198 110 214 C82 198 48 168 48 126 V70 C48 64 52 60 58 60 Z";
const shieldPathInner =
  "M61 64 H159 C164 64 167 67 167 72 V125 C167 163 137 191 110 206 C83 191 53 163 53 125 V72 C53 67 56 64 61 64 Z";

// A single up-pointing feather/teardrop, reused for the wing.
const featherPath = "M0 0 C 7 -6 7 -22 0 -34 C -7 -22 -7 -6 0 0 Z";

const wingFeathers = [
  { x: 96, y: 118, r: -38, s: 1.15 },
  { x: 88, y: 112, r: -52, s: 1.05 },
  { x: 82, y: 104, r: -66, s: 0.95 },
  { x: 79, y: 96, r: -80, s: 0.85 },
];

// Leaf positions along the left laurel arc (right side is mirrored).
const laurelLeaves = [
  { x: 60, y: 100, r: 28 },
  { x: 55, y: 116, r: 22 },
  { x: 51, y: 132, r: 14 },
  { x: 50, y: 148, r: 6 },
  { x: 52, y: 164, r: -4 },
  { x: 57, y: 180, r: -14 },
  { x: 64, y: 194, r: -26 },
];
