import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet selaras dengan foto mempelai: ivory, sage green, gold
        cream: "#FAF6EE",
        ivory: "#F3EBDD",
        sage: {
          DEFAULT: "#8B9A7A",
          light: "#A9B693",
          dark: "#5F6E4E",
        },
        gold: {
          DEFAULT: "#C4A468",
          light: "#DCC79B",
          dark: "#9C7F45",
        },
        ink: "#3B3A32",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out both",
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
