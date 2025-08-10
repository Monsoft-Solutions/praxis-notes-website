import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

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
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
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
        // ABA color palette
        "blue-100": "var(--blue-100)",
        "blue-200": "var(--blue-200)",
        "blue-300": "var(--blue-300)",
        "blue-400": "var(--blue-400)",
        "blue-500": "var(--blue-500)",
        "blue-600": "var(--blue-600)",
        "green-100": "var(--green-100)",
        "green-200": "var(--green-200)",
        "green-300": "var(--green-300)",
        "green-400": "var(--green-400)",
        "green-500": "var(--green-500)",
        "green-600": "var(--green-600)",
        "orange-100": "var(--orange-100)",
        "orange-200": "var(--orange-200)",
        "orange-300": "var(--orange-300)",
        "orange-400": "var(--orange-400)",
        "orange-500": "var(--orange-500)",
        "orange-600": "var(--orange-600)",
        "yellow-100": "var(--yellow-100)",
        "yellow-200": "var(--yellow-200)",
        "yellow-300": "var(--yellow-300)",
        "yellow-400": "var(--yellow-400)",
        "yellow-500": "var(--yellow-500)",
        "yellow-600": "var(--yellow-600)",
        // Utility colors
        white: "var(--white)",
        "gray-50": "var(--gray-50)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        "gray-800": "var(--gray-800)",
        "gray-900": "var(--gray-900)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        quicksand: ["var(--font-quicksand)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
        // Hand-drawn irregular radius
        irregular: "var(--radius-irregular)",
        "hand-drawn": "1.5rem 1.875rem 1.25rem 2.1875rem", // 24px 30px 20px 35px
        "hand-drawn-sm": "0.75rem 0.875rem 0.75rem 1rem", // 12px 14px 12px 16px
        "hand-drawn-lg": "2rem 2.5rem 1.75rem 2.75rem", // 32px 40px 28px 44px
      },
      boxShadow: {
        "card-hover": "var(--shadow-lg)",
        floating: "var(--shadow-xl)",
        "inner-glow": "inset 0 1px 2px rgba(0,0,0,0.1)",
        // Hand-drawn aesthetic shadows
        "hand-drawn-sm": "var(--shadow-sm)",
        "hand-drawn": "var(--shadow)",
        "hand-drawn-lg": "var(--shadow-lg)",
        "hand-drawn-xl": "var(--shadow-xl)",
        "hand-drawn-2xl": "var(--shadow-2xl)",
        // Thumb tack shadows
        "thumb-tack": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "thumb-tack-hover": "0 4px 8px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        // Gentle animations for hand-drawn aesthetic
        "gentle-bounce": "gentle-bounce 2s infinite",
        "subtle-float": "subtle-float 3s ease-in-out infinite",
        "hand-drawn-hover": "hand-drawn-hover 0.3s ease-out",
      },
      keyframes: {
        "gentle-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
        },
        "subtle-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-3px)" },
        },
        "hand-drawn-hover": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-2px)" },
        },
      },
      spacing: {
        // Additional spacing for hand-drawn layout
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      rotate: {
        // Very subtle rotations for decorative elements
        "0.5": "0.5deg",
        "1": "1deg",
        "1.5": "1.5deg",
        "2": "2deg",
        "-0.5": "-0.5deg",
        "-1": "-1deg",
        "-1.5": "-1.5deg",
        "-2": "-2deg",
      },
      scale: {
        // Gentle scaling for hover effects
        "101": "1.01",
        "102": "1.02",
        "98": "0.98",
        "99": "0.99",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        "250": "250ms",
        "400": "400ms",
        "600": "600ms",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    },
  },
  plugins: [
    typography,
    // Custom plugin for hand-drawn utilities
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void;
    }) {
      const handDrawnUtilities = {
        ".thumb-tack-blue": {
          backgroundColor: "var(--blue-400)",
        },
        ".thumb-tack-green": {
          backgroundColor: "var(--green-400)",
        },
        ".thumb-tack-orange": {
          backgroundColor: "var(--orange-400)",
        },
        ".thumb-tack-yellow": {
          backgroundColor: "var(--yellow-400)",
        },
        ".border-hand-drawn": {
          borderStyle: "solid",
          borderRadius: "var(--radius-irregular)",
        },
        ".border-dashed-light": {
          borderStyle: "dashed",
          borderWidth: "1px",
          opacity: "0.6",
        },
        ".border-dotted-light": {
          borderStyle: "dotted",
          borderWidth: "1px",
          opacity: "0.4",
        },
        ".text-shadow-subtle": {
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        },
        ".text-shadow-hand-drawn": {
          textShadow: "1px 1px 3px rgba(0,0,0,0.15)",
        },
        ".backdrop-hand-drawn": {
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        },
        ".backdrop-hand-drawn-dark": {
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
      };

      addUtilities(handDrawnUtilities);
    },
  ],
} satisfies Config;

export default config;
