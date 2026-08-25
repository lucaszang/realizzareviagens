import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rv: {
          navy: "#0B1C2D",
          navyDeep: "#07131F",
          ocean: "#1A4B6E",
          sky: "#3D7EA6",
          sand: "#C4A574",
          sandLight: "#E8D5B5",
          cream: "#F7F3EC",
          mist: "#E8EEF2",
          muted: "#6B7785",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to right, rgba(7,19,31,0.88) 0%, rgba(7,19,31,0.55) 45%, rgba(7,19,31,0.2) 100%)",
        "hero-overlay-mobile":
          "linear-gradient(to top, rgba(7,19,31,0.92) 0%, rgba(7,19,31,0.45) 50%, rgba(7,19,31,0.25) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
