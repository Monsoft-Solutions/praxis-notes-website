import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";

const config = {
  darkMode: ["class", "media"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          blue: colors.blue[500],
          purple: "var(--lavender)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          blue: "var(--soft-blue)",
          purple: "var(--lavender)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--destructive)",
        info: "var(--info)",
        // ABA colors
        "soft-blue": "var(--soft-blue)",
        lavender: "var(--lavender)",
        "mint-green": "var(--mint-green)",
        peach: "var(--peach)",
        "light-pink": "var(--light-pink)",
        ivory: "var(--ivory)",
        "soft-gray": "var(--soft-gray)",
        "medium-gray": "var(--medium-gray)",
        charcoal: "var(--charcoal)",
        "deep-navy": "var(--deep-navy)",
        "steel-blue": "var(--steel-blue)",
        "soft-lavender": "var(--soft-lavender)",
        "off-white": "var(--off-white)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        "card-hover": "var(--shadow-lg)",
        floating: "var(--shadow-xl)",
        "inner-glow": "inset 0 1px 2px rgba(0,0,0,0.1)",
        // ABA-specific shadows
        "aba-sm": "var(--shadow-sm)",
        "aba-md": "var(--shadow)",
        "aba-lg": "var(--shadow-lg)",
        "aba-xl": "var(--shadow-xl)",
      },
      animation: {
        // Custom animations can be added here
      },
      spacing: {
        // We're already using Tailwind's default spacing scale which matches our requirements
      },
    },
  },
  plugins: [typography],
} satisfies Config;

export default config;
