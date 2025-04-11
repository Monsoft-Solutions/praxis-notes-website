/**
 * Design Tokens
 *
 * This file contains all the design tokens for the Praxis Note ABA-inspired pastel design system.
 * It provides a reference for using the tokens in your components.
 */

export const COLORS = {
  // Primary Colors
  SOFT_BLUE: "soft-blue", // #A8D8EA
  LAVENDER: "lavender", // #CDB4DB
  MINT_GREEN: "mint-green", // #BEFFC7
  PEACH: "peach", // #FFD6BA
  LIGHT_PINK: "light-pink", // #FFACC7

  // Neutral Colors
  IVORY: "ivory", // #FFFDF9
  SOFT_GRAY: "soft-gray", // #F3F3F3
  MEDIUM_GRAY: "medium-gray", // #CDCDCD
  CHARCOAL: "charcoal", // #333333

  // Dark Mode Colors
  DEEP_NAVY: "deep-navy", // #1A2238
  STEEL_BLUE: "steel-blue", // #394867
  SOFT_LAVENDER: "soft-lavender", // #9BA4B4
  OFF_WHITE: "off-white", // #F1F6F9

  // Functional Colors
  SUCCESS: "success", // Mint Green
  WARNING: "warning", // Peach
  ERROR: "error", // Light Pink
  INFO: "info", // Soft Blue
};

export const GRADIENTS = {
  PRIMARY: "bg-gradient-to-r from-soft-blue to-lavender",
  SECONDARY: "bg-gradient-to-r from-mint-green to-soft-blue",
  SOFT: "bg-gradient-to-br from-ivory to-soft-gray",
  DARK: "bg-gradient-to-r from-deep-navy to-steel-blue",
};

export const TYPOGRAPHY = {
  FONT_FAMILY: {
    PRIMARY: "font-sans", // Geist Sans
    MONO: "font-mono", // Geist Mono
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
  SM: "shadow-aba-sm",
  MD: "shadow-aba-md",
  LG: "shadow-aba-lg",
  XL: "shadow-aba-xl",
  "2XL": "shadow-2xl",

  // Custom shadows
  ACTIVE_CARD: "shadow-aba-lg hover:shadow-aba-xl transition-shadow",
  FLOATING: "shadow-floating",
  INNER_GLOW: "shadow-inner-glow",
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
    PRIMARY: "bg-soft-blue text-charcoal hover:opacity-90 shadow-sm",
    SECONDARY: "bg-lavender text-charcoal hover:bg-lavender/80 shadow-sm",
    SUCCESS: "bg-mint-green text-charcoal hover:bg-mint-green/80 shadow-sm",
    WARNING: "bg-peach text-charcoal hover:bg-peach/80 shadow-sm",
    ERROR: "bg-light-pink text-charcoal hover:bg-light-pink/80 shadow-sm",
    OUTLINE:
      "border border-medium-gray bg-transparent hover:bg-soft-gray text-foreground",
    GHOST: "hover:bg-soft-gray text-foreground",
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
    BASIC: "bg-card rounded-lg border border-border p-6",
    INTERACTIVE:
      "bg-card rounded-lg border border-border p-6 hover:shadow-aba-lg transition-shadow",
    FEATURE:
      "bg-soft-gray dark:bg-steel-blue rounded-xl p-8 shadow-aba-xl hover:shadow-2xl transition-shadow border border-medium-gray dark:border-soft-lavender",
    GRADIENT:
      "bg-gradient-to-br from-ivory to-soft-gray dark:from-deep-navy dark:to-steel-blue rounded-xl p-6",
    SOFT_BLUE: "bg-soft-blue/10 rounded-lg border border-soft-blue/30 p-6",
    LAVENDER: "bg-lavender/10 rounded-lg border border-lavender/30 p-6",
    MINT: "bg-mint-green/10 rounded-lg border border-mint-green/30 p-6",
    PEACH: "bg-peach/10 rounded-lg border border-peach/30 p-6",
  },
};

export const FORM = {
  INPUT:
    "w-full px-4 py-2 rounded-lg border border-medium-gray bg-soft-gray focus:ring-2 focus:ring-lavender/50 focus:border-soft-blue transition-all",
  SELECT:
    "w-full px-4 py-2 rounded-lg border border-medium-gray bg-soft-gray focus:ring-2 focus:ring-lavender/50 focus:border-soft-blue",
  CHECKBOX:
    "h-4 w-4 rounded border-medium-gray text-soft-blue focus:ring-lavender/80",
  LABEL: "block text-sm font-medium mb-2",
};

export const ACCESSIBILITY = {
  FOCUS:
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender focus-visible:ring-offset-2",
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

export const BADGES = {
  DEFAULT: "px-2.5 py-0.5 rounded-full text-xs font-medium",
  PRIMARY: "bg-soft-blue text-charcoal",
  SECONDARY: "bg-lavender text-charcoal",
  SUCCESS: "bg-mint-green text-charcoal",
  WARNING: "bg-peach text-charcoal",
  ERROR: "bg-light-pink text-charcoal",
  OUTLINE: "border border-medium-gray text-foreground",
};
