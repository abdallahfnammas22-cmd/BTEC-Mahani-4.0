import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0B4EA2",
          dark: "#0A2342",
          light: "#EAF3FF"
        }
      },
      boxShadow: {
        soft: "0 16px 40px rgba(10,35,66,0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
