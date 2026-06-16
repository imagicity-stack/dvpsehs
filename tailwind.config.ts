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
        // Playful, child-friendly rainbow palette
        sunshine: {
          DEFAULT: "#FFC93C",
          light: "#FFE08A",
          dark: "#F4A500",
        },
        sky: {
          DEFAULT: "#3DA9E0",
          light: "#A9DCF7",
          dark: "#1E83BC",
        },
        coral: {
          DEFAULT: "#FF6B6B",
          light: "#FFA8A8",
          dark: "#E8453F",
        },
        grass: {
          DEFAULT: "#5BC57A",
          light: "#A6E6B8",
          dark: "#3AA95C",
        },
        grape: {
          DEFAULT: "#9B6DD6",
          light: "#C9AEEC",
          dark: "#7B4CC0",
        },
        tangerine: {
          DEFAULT: "#FF9F43",
          light: "#FFC79A",
          dark: "#F07C12",
        },
        bubblegum: {
          DEFAULT: "#FF8FB1",
          light: "#FFC2D4",
          dark: "#F2628C",
        },
        // The Elden Heights bridge colours (the "something is changing" thread)
        crimson: {
          DEFAULT: "#9B1B1B",
          light: "#C23B3B",
          dark: "#741010",
        },
        gold: {
          DEFAULT: "#D9A323",
          light: "#E8C766",
          dark: "#B5821A",
        },
        cream: "#FFF9EF",
        ink: "#2D2433",
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      borderRadius: {
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        playful: "0 18px 40px -12px rgba(155, 27, 27, 0.18)",
        pop: "0 10px 0 0 rgba(0,0,0,0.06)",
        card: "0 12px 30px -10px rgba(45, 36, 51, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-22px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pop: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        "bounce-soft": "bounce-soft 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        pop: "pop 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
