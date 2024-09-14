import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'wit': '#fff6f0',
        'gold': '#f5cb5c',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scrollSnapType: {
        none: 'none',
        x: 'x',
        y: 'y',
        both: 'both',
        mandatory: 'mandatory',
        proximity: 'proximity',
      },
      scrollSnapAlign: {
        start: 'start',
        end: 'end',
        center: 'center',
      },
    },
  },
  variants: {
    scrollSnapType: ['responsive'],
    scrollSnapAlign: ['responsive'],
  },
  plugins: [],
};
export default config;
