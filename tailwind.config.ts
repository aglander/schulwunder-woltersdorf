
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
        'indie': ['Indie Flower', 'cursive'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2A5CAC",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5B041",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#27AE60",
          foreground: "#FFFFFF",
        },
        schulbau: {
          DEFAULT: "#DB3F36",
          foreground: "#FFFFFF",
        },
        schulgruendung: {
          DEFAULT: "#3F58AB",
          foreground: "#FFFFFF",
        },
        schulinnovation: {
          DEFAULT: "#6ABA4E",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      filter: {
        schulbau: "brightness(0) saturate(100%) invert(42%) sepia(50%) saturate(6288%) hue-rotate(342deg) brightness(90%) contrast(90%)",
        schulgruendung: "brightness(0) saturate(100%) invert(34%) sepia(11%) saturate(4605%) hue-rotate(196deg) brightness(92%) contrast(88%)",
        schulinnovation: "brightness(0) saturate(100%) invert(67%) sepia(15%) saturate(1387%) hue-rotate(60deg) brightness(91%) contrast(100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
