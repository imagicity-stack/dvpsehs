import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- The Elden Heights luxury base ---
        crimson: {
          DEFAULT: "#8E1B1B",
          light: "#B6403B",
          dark: "#6B1212",
          deep: "#4E0E0E",
          wine: "#3A0D14",
        },
        gold: {
          DEFAULT: "#C79A3A",
          light: "#E7CD86",
          dark: "#A67C24",
          champagne: "#F2E7C9",
        },
        ivory: "#FFFDF8",
        cream: "#FBF5EA",
        sand: "#F3E8D6",
        ink: "#241B2E",
        plum: "#3A2A45",

        // --- Playful accents (kept bright, used as joyful highlights) ---
        sunshine: { DEFAULT: "#FFC93C", light: "#FFE08A", dark: "#F4A500" },
        sky: { DEFAULT: "#3DA9E0", light: "#A9DCF7", dark: "#1E83BC" },
        coral: { DEFAULT: "#FF6B6B", light: "#FFA8A8", dark: "#E8453F" },
        grass: { DEFAULT: "#5BC57A", light: "#A6E6B8", dark: "#3AA95C" },
        grape: { DEFAULT: "#9B6DD6", light: "#C9AEEC", dark: "#7B4CC0" },
        tangerine: { DEFAULT: "#FF9F43", light: "#FFC79A", dark: "#F07C12" },
        bubblegum: { DEFAULT: "#FF8FB1", light: "#FFC2D4", dark: "#F2628C" },
      },
      fontFamily: {
        // elegant high-contrast serif for headlines (the "luxury")
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        // rounded, friendly font for playful accents & UI
        fun: ["var(--font-fredoka)", "system-ui", "sans-serif"],
        // readable body
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
        blob2: "63% 37% 38% 62% / 58% 41% 59% 42%",
        blob3: "50% 50% 33% 67% / 55% 47% 53% 45%",
        "4xl": "2rem",
        "5xl": "2.75rem",
        "6xl": "3.5rem",
      },
      boxShadow: {
        lux: "0 30px 60px -22px rgba(36,27,46,0.28), 0 12px 24px -14px rgba(142,27,27,0.16)",
        "lux-lg": "0 50px 90px -30px rgba(36,27,46,0.35), 0 20px 40px -20px rgba(142,27,27,0.20)",
        gold: "0 18px 40px -16px rgba(199,154,58,0.55), 0 0 0 1px rgba(199,154,58,0.25)",
        playful: "0 18px 40px -12px rgba(142,27,27,0.18)",
        card: "0 18px 44px -20px rgba(36,27,46,0.22)",
        pop: "0 10px 0 0 rgba(0,0,0,0.06)",
        "inset-gold": "inset 0 0 0 1px rgba(199,154,58,0.35)",
      },
      backgroundImage: {
        "gold-sheen": "linear-gradient(105deg, #A67C24 0%, #E7CD86 28%, #F2E7C9 50%, #E7CD86 72%, #A67C24 100%)",
        "crimson-rich": "linear-gradient(135deg, #6B1212 0%, #8E1B1B 45%, #4E0E0E 100%)",
        "wine-deep": "radial-gradient(120% 120% at 80% 0%, #5A1320 0%, #3A0D14 55%, #240810 100%)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        "float-slow": { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-22px)" } },
        wiggle: { "0%,100%": { transform: "rotate(-3deg)" }, "50%": { transform: "rotate(3deg)" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        "bounce-soft": { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        pop: { "0%": { transform: "scale(0.85)", opacity: "0" }, "100%": { transform: "scale(1)", opacity: "1" } },
        shimmer: { "0%": { backgroundPosition: "200% center" }, "100%": { backgroundPosition: "-200% center" } },
        "blob-morph": {
          "0%,100%": { borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" },
          "50%": { borderRadius: "63% 37% 38% 62% / 58% 41% 59% 42%" },
        },
        "fade-up": { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "sheen-sweep": { "0%": { transform: "translateX(-120%) skewX(-15deg)" }, "100%": { transform: "translateX(220%) skewX(-15deg)" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        "bounce-soft": "bounce-soft 2.4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        pop: "pop 0.4s ease-out both",
        shimmer: "shimmer 6s linear infinite",
        "blob-morph": "blob-morph 12s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "sheen-sweep": "sheen-sweep 5.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
