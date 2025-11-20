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
        primary: {
          DEFAULT: "#047D78",
          dark: "#036662",
          light: "#00B0AA",
        },
        secondary: {
          DEFAULT: "#00B0AA",
          light: "#33C1BC",
        },
        background: {
          DEFAULT: "#FFFFFF",
          gray: "#EDEDED",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        blink: 'blink 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;