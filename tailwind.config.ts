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
        paper:    "#FAFAFA",
        ink:      "#1A1A1A",
        graphite: "#6B6B6B",
        line:     "#E8E8E8",
        blue: {
          DEFAULT: "#1B3A6B",
          soft:    "#2E5C9A",
          pale:    "#EDF2FA",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(0,0,0,0.07)",
      },
    },
  },
  plugins: [],
};
export default config;
