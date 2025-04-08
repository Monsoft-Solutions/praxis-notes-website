/**
 * Design Tokens
 *
 * This file contains all the design tokens for the Praxis Note UI/UX design system.
 * It provides a reference for using the tokens in your components.
 */

export const COLORS = {
  // Primary Colors
  PRIMARY_BLUE: "blue-500", // #3B82F6
  PRIMARY_PURPLE: "purple-500", // #8B5CF6

  // Secondary Colors
  SECONDARY_BLUE: "blue-400", // #60A5FA
  SECONDARY_PURPLE: "purple-400", // #A78BFA

  // Neutrals
  WHITE: "white", // #FFFFFF
  LIGHT_BG: "gray-100", // #F3F4F6
  DARK_BG: "gray-900", // #111827
  TEXT_PRIMARY: "gray-900", // #111827
  TEXT_SECONDARY: "gray-500", // #6B7280

  // Functional Colors
  SUCCESS: "emerald-500", // #10B981
  WARNING: "amber-500", // #F59E0B
  ERROR: "red-500", // #EF4444
  INFO: "blue-500", // #3B82F6
};

export const GRADIENTS = {
  PRIMARY: "bg-gradient-to-r from-blue-500 to-purple-600",
  SOFT: "bg-gradient-to-br from-blue-50 to-purple-50",
  DARK: "bg-gradient-to-r from-gray-900 to-blue-900",
};

export const TYPOGRAPHY = {
  FONT_FAMILY: {
    PRIMARY:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },

  FONT_SIZE: {
    XS: "text-xs", // 12px
    SM: "text-sm", // 14px
    BASE: "text-base", // 16px
    LG: "text-lg", // 18px
    XL: "text-xl", // 20px
    "2XL": "text-2xl", // 24px
    "3XL": "text-3xl", // 30px
    "4XL": "text-4xl", // 36px
    "5XL": "text-5xl", // 48px
    "6XL": "text-6xl", // 60px
  },

  FONT_WEIGHT: {
    NORMAL: "font-normal", // 400
    MEDIUM: "font-medium", // 500
    SEMIBOLD: "font-semibold", // 600
    BOLD: "font-bold", // 700
    EXTRABOLD: "font-extrabold", // 800
  },

  LINE_HEIGHT: {
    TIGHT: "leading-tight", // 1.25
    NORMAL: "leading-normal", // 1.5
    RELAXED: "leading-relaxed", // 1.75
  },
};

export const SPACING = {
  XS: "p-1 m-1", // 4px
  SM: "p-2 m-2", // 8px
  MD: "p-4 m-4", // 16px
  LG: "p-6 m-6", // 24px
  XL: "p-8 m-8", // 32px
  "2XL": "p-12 m-12", // 48px
  "3XL": "p-16 m-16", // 64px
  "4XL": "p-24 m-24", // 96px
};

export const CONTAINER = {
  DEFAULT: "container max-w-7xl px-4 sm:px-6 mx-auto",
};

export const SHADOWS = {
  NONE: "shadow-none",
  SM: "shadow-sm",
  MD: "shadow",
  LG: "shadow-lg",
  XL: "shadow-xl",
  "2XL": "shadow-2xl",

  // Custom shadows
  ACTIVE_CARD: "shadow-lg hover:shadow-xl transition-shadow",
  FLOATING: "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
  INNER_GLOW: "shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]",
};

export const TRANSITIONS = {
  DURATION: {
    FAST: "duration-150",
    NORMAL: "duration-300",
    SLOW: "duration-500",
  },

  TYPE: {
    DEFAULT: "transition",
    TRANSFORM: "transition-transform",
    COLORS: "transition-colors",
    OPACITY: "transition-opacity",
    SHADOW: "transition-shadow",
  },
};

export const BUTTON = {
  VARIANT: {
    PRIMARY:
      "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90",
    SECONDARY: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    OUTLINE: "border border-input hover:bg-accent hover:text-accent-foreground",
    GHOST: "hover:bg-accent hover:text-accent-foreground",
  },

  SIZE: {
    SM: "h-9 px-3 rounded-md text-sm",
    DEFAULT: "h-10 py-2 px-4 rounded-md",
    LG: "h-11 px-8 rounded-md",
    XL: "h-14 px-8 rounded-md text-base",
  },
};

export const CARD = {
  VARIANT: {
    BASIC: "bg-background rounded-lg border border-border p-6",
    INTERACTIVE:
      "bg-background rounded-lg border border-border p-6 hover:shadow-lg transition-shadow",
    FEATURE:
      "bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100 dark:border-blue-900/50",
    GRADIENT:
      "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-6",
  },
};

export const FORM = {
  INPUT:
    "w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all",
  SELECT:
    "w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary",
  CHECKBOX:
    "h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/80",
  LABEL: "block text-sm font-medium mb-2",
};

export const ACCESSIBILITY = {
  FOCUS:
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
};

export const RESPONSIVE = {
  BREAKPOINTS: {
    SM: "sm:", // 640px
    MD: "md:", // 768px
    LG: "lg:", // 1024px
    XL: "xl:", // 1280px
    "2XL": "2xl:", // 1536px
  },

  PATTERNS: {
    STACK_ON_MOBILE: "flex flex-col md:flex-row",
    ADJUST_TEXT: "text-4xl md:text-5xl lg:text-6xl",
    MOBILE_MENU: {
      DESKTOP: "hidden md:block",
      MOBILE: "block md:hidden",
    },
    REDUCED_PADDING: "py-8 md:py-16 lg:py-24",
    FULL_WIDTH: "w-full sm:w-auto",
  },
};

export const GRID = {
  TWO_COLUMNS: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
  THREE_COLUMNS: "grid grid-cols-1 md:grid-cols-3 gap-8",
  FOUR_COLUMNS: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
};
