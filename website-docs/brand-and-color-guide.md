# Praxis Note Brand and Color Guide

This document outlines the brand identity, color usage, and visual language for the Praxis Note website. It serves as a comprehensive reference for maintaining brand consistency across all touchpoints.

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Color System](#color-system)
3. [Brand Voice and Tone](#brand-voice-and-tone)
4. [Typography Usage](#typography-usage)
5. [Gradients and Color Combinations](#gradients-and-color-combinations)
6. [Imagery Guidelines](#imagery-guidelines)
7. [Icon System](#icon-system)
8. [Dark Mode Considerations](#dark-mode-considerations)
9. [Application Examples](#application-examples)
10. [Do's and Don'ts](#dos-and-donts)

---

## Brand Overview

### Core Brand Values

- **Efficiency**: We help ABA professionals reclaim their time
- **Reliability**: We provide dependable tools that meet compliance standards
- **Empathy**: We understand the challenges of ABA documentation
- **Innovation**: We leverage cutting-edge AI to transform note-taking
- **Professionalism**: We maintain the highest standards in all we do

### Brand Personality

- **Knowledgeable**: We understand the needs of ABA professionals
- **Supportive**: We're here to make work easier
- **Trustworthy**: We handle sensitive data with care
- **Forward-thinking**: We're always improving our technology
- **Accessible**: We're approachable and easy to understand

### Brand Story

Praxis Note was created by and for ABA professionals who recognized the documentation burden facing therapists. Our brand represents the perfect blend of clinical expertise and technological innovation, designed to give practitioners more time for what matters most: helping their clients.

---

## Color System

### Primary Brand Colors

| Name | Hex | Tailwind | RGB | Usage |
|------|-----|----------|-----|-------|
| Blue Primary | `#3B82F6` | `blue-500` | `59, 130, 246` | Primary brand color, main buttons, links, accents |
| Purple Primary | `#8B5CF6` | `purple-500` | `139, 92, 246` | Supporting brand color, accents, gradients |

### Secondary Brand Colors

| Name | Hex | Tailwind | RGB | Usage |
|------|-----|----------|-----|-------|
| Blue Light | `#60A5FA` | `blue-400` | `96, 165, 250` | Lighter accents, secondary elements |
| Blue Dark | `#2563EB` | `blue-600` | `37, 99, 235` | Darker accents, hover states |
| Purple Light | `#A78BFA` | `purple-400` | `167, 139, 250` | Lighter accents, secondary elements |
| Purple Dark | `#7C3AED` | `purple-600` | `124, 58, 237` | Darker accents, hover states |

### Neutral Colors

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| White | `#FFFFFF` | `white` | Primary background, text on dark backgrounds |
| Gray 50 | `#F9FAFB` | `gray-50` | Secondary background |
| Gray 100 | `#F3F4F6` | `gray-100` | Card backgrounds, dividers |
| Gray 200 | `#E5E7EB` | `gray-200` | Borders, separators |
| Gray 300 | `#D1D5DB` | `gray-300` | Disabled states |
| Gray 400 | `#9CA3AF` | `gray-400` | Placeholder text |
| Gray 500 | `#6B7280` | `gray-500` | Secondary text |
| Gray 600 | `#4B5563` | `gray-600` | Tertiary text |
| Gray 700 | `#374151` | `gray-700` | Strong text |
| Gray 800 | `#1F2937` | `gray-800` | Heading text |
| Gray 900 | `#111827` | `gray-900` | Primary text |

### Functional Colors

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Success | `#10B981` | `emerald-500` | Success messages, positive indicators |
| Warning | `#F59E0B` | `amber-500` | Warnings, cautionary messages |
| Error | `#EF4444` | `red-500` | Error messages, destructive actions |
| Info | `#3B82F6` | `blue-500` | Informational messages |

### Color Proportions

- **60%**: Neutral colors (whites, grays)
- **30%**: Primary colors (blues, purples)
- **10%**: Accent and functional colors

---

## Brand Voice and Tone

### Voice Characteristics

- **Clear**: We communicate without jargon or unnecessary complexity
- **Confident**: We speak with authority on ABA and documentation
- **Empathetic**: We understand the challenges of our audience
- **Solution-oriented**: We focus on how we solve problems
- **Professional**: We maintain a level of formality appropriate for healthcare

### Tone Guidelines

| Context | Tone | Example |
|---------|------|---------|
| Marketing | Enthusiastic but professional | "Transform your documentation process and reclaim hours of your week." |
| Product Information | Clear and factual | "Praxis Note generates compliant session notes in under 15 minutes." |
| Support | Helpful and empathetic | "We understand how challenging documentation can be. Here's how we can help..." |
| Technical | Precise but accessible | "Our secure API integrates with your existing EHR system." |
| Error Messages | Concise and solution-focused | "We couldn't save your note. Please try again or contact support." |

---

## Typography Usage

### Primary Font: Inter

Inter is our primary typeface for its exceptional readability and professional appearance.

### Font Weight Usage

| Weight | Name | Usage |
|--------|------|-------|
| 400 | Regular | Body text, paragraphs |
| 500 | Medium | Subheadings, emphasized text |
| 600 | Semibold | Important information, feature headings |
| 700 | Bold | Primary headings, buttons |
| 800 | Extrabold | Hero headlines, major statements |

### Font Size Hierarchy

| Size | Tailwind | Purpose |
|------|----------|---------|
| 12px | `text-xs` | Legal text, footnotes |
| 14px | `text-sm` | Secondary text, captions |
| 16px | `text-base` | Body text |
| 18px | `text-lg` | Lead paragraphs |
| 20px | `text-xl` | Subheadings |
| 24px | `text-2xl` | Section headings |
| 30px | `text-3xl` | Page headings |
| 36px | `text-4xl` | Hero headings (mobile) |
| 48px | `text-5xl` | Hero headings (desktop) |
| 60px | `text-6xl` | Major statements |

### Typographic Best Practices

- Maintain a line height of 1.5 for body text
- Use a line height of 1.2-1.3 for headings
- Keep paragraphs under 70-80 characters per line
- Use proper hierarchical structure (H1 → H6)
- Ensure sufficient contrast for readability

---

## Gradients and Color Combinations

### Primary Gradient

```css
background: linear-gradient(to right, #3B82F6, #8B5CF6);
```

**Tailwind**: `bg-gradient-to-r from-blue-500 to-purple-500`

This gradient is our signature brand element, used for primary CTAs, hero backgrounds, and key visual elements.

### Soft Gradient

```css
background: linear-gradient(to bottom right, #EFF6FF, #F5F3FF);
```

**Tailwind**: `bg-gradient-to-br from-blue-50 to-purple-50`

This subtle gradient is used for card backgrounds, section backgrounds, and other secondary elements.

### Dark Mode Gradient

```css
background: linear-gradient(to right, #1E40AF, #6D28D9);
```

**Tailwind**: `bg-gradient-to-r from-blue-800 to-purple-800`

This deeper gradient is used for primary elements in dark mode.

### Accent Combinations

1. **Call to Action**
   - Button: Blue Primary (`#3B82F6`)
   - Text: White (`#FFFFFF`)
   - Hover: Blue Dark (`#2563EB`)

2. **Content Highlight**
   - Background: Blue Light (`#60A5FA`) at 10% opacity
   - Border: Blue Primary (`#3B82F6`)
   - Text: Gray 900 (`#111827`)

3. **Important Information**
   - Background: Purple Light (`#A78BFA`) at 10% opacity
   - Border: Purple Primary (`#8B5CF6`)
   - Text: Gray 900 (`#111827`)

---

## Imagery Guidelines

### Photography Style

- **Clinical Settings**: Clean, well-lit environments that show organized therapy spaces
- **Professionals**: Diverse ABA professionals shown in authentic working situations
- **Technology**: Modern devices showing the app in realistic contexts
- **Results**: Visual representations of time savings and productivity

### Illustration Style

- **Clean and minimal**: Simple lines and shapes
- **Color palette**: Using brand colors consistently
- **Purpose-driven**: Illustrations should clarify concepts, not just decorate
- **Consistent stroke weight**: Maintain consistent line thickness
- **Friendly but professional**: Avoid overly cute or childish illustrations

### Charts and Data Visualization

- Use the brand color palette consistently
- Primary data points should use Blue Primary
- Secondary data should use Purple Primary
- Maintain a clean, minimal design with appropriate white space
- Include clear labels and avoid chart junk

---

## Icon System

### Icon Style

- **Line style**: Consistent stroke weight (2px)
- **Rounded corners**: Slight rounding (2px radius)
- **Sizing**: 24x24px as standard, scaling proportionally
- **Padding**: Maintain consistent padding within bounding box

### Primary Icon Set: Lucide

We use the Lucide icon library for its clean, professional appearance and comprehensive coverage. This ensures consistency across all interfaces.

### Icon Usage Guidelines

- Icons should always serve a purpose, not just decorate
- Pair icons with text labels in most instances
- Maintain consistent color usage (primary brand color for interactive icons)
- Use appropriate sizing based on context
- Ensure sufficient contrast against backgrounds

### Common Icon Applications

| Context | Icon Examples | Style |
|---------|---------------|-------|
| Navigation | Home, Features, Pricing | Outline style, medium weight |
| Actions | Download, Share, Save | Filled or outline depending on importance |
| Status | Success check, Error alert | Filled style with status colors |
| Categories | Features, Modules | Outline style, consistent with other UI |
| Social | LinkedIn, Twitter, Facebook | Brand-standard icons |

---

## Dark Mode Considerations

### Color Adaptations

| Light Mode | Dark Mode | Usage |
|------------|-----------|-------|
| White (#FFFFFF) | Gray 900 (#111827) | Background |
| Gray 100 (#F3F4F6) | Gray 800 (#1F2937) | Card backgrounds |
| Gray 900 (#111827) | Gray 100 (#F3F4F6) | Primary text |
| Blue 500 (#3B82F6) | Blue 400 (#60A5FA) | Primary brand color |
| Purple 500 (#8B5CF6) | Purple 400 (#A78BFA) | Secondary brand color |

### Contrast Requirements

- Ensure text has a contrast ratio of at least 4.5:1 against backgrounds
- Increase contrast for dark mode where needed
- Test color combinations in both light and dark modes

### Dark Mode Implementation

```css
/* Light mode (default) */
:root {
  --background: 255 255 255;
  --foreground: 17 24 39;
  --primary: 59 130 246;
  --primary-foreground: 255 255 255;
  /* Additional variables */
}

/* Dark mode */
.dark {
  --background: 17 24 39;
  --foreground: 243 244 246;
  --primary: 96 165 250;
  --primary-foreground: 255 255 255;
  /* Additional variables */
}
```

### Shadows in Dark Mode

In dark mode, shadows should be more subtle:

```css
/* Light mode */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

/* Dark mode */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.4);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3);
```

---

## Application Examples

### Primary Button

```jsx
<button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white h-10 py-2 px-4 hover:opacity-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50">
  Get Started
</button>
```

### Feature Card

```jsx
<div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100 dark:border-blue-900/50 relative overflow-hidden group">
  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full z-0 transition-transform duration-300 group-hover:scale-110"></div>
  <div className="relative z-10">
    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 mb-6">
      <FeatureIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
    </div>
    <h3 className="text-xl font-bold mb-3">Feature Title</h3>
    <p className="text-gray-500 dark:text-gray-400">
      Feature description that explains the benefit clearly and concisely.
    </p>
  </div>
</div>
```

### Section Header

```jsx
<div className="max-w-3xl mx-auto text-center mb-16">
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
    <Icon className="w-4 h-4" />
    <span>Section Label</span>
  </div>
  <h2 className="text-3xl md:text-4xl font-bold mb-6">
    Section Title
  </h2>
  <p className="text-xl text-gray-500 dark:text-gray-400">
    Descriptive text that explains this section in more detail.
  </p>
</div>
```

### Gradient Background Section

```jsx
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />
    <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-purple-400/10 blur-3xl" />
  </div>
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
    {/* Content here */}
  </div>
</section>
```

---

## Do's and Don'ts

### Color Usage

✅ **Do**:
- Use brand colors consistently across the site
- Maintain proper contrast for accessibility
- Use the primary gradient for key CTAs and important elements
- Adapt colors appropriately for dark mode

❌ **Don't**:
- Mix too many colors in a single design
- Use colors that aren't in the brand palette
- Create low-contrast text that's difficult to read
- Overuse gradients which may make the design feel busy

### Typography

✅ **Do**:
- Maintain a clear typographic hierarchy
- Use font weights consistently
- Ensure sufficient line height for readability
- Keep text aligned left for long-form content (except headings)

❌ **Don't**:
- Use more than 2-3 font weights on a single page
- Create long lines of text (over 80 characters)
- Use centered text for long paragraphs
- Mix too many text sizes in a single component

### Imagery

✅ **Do**:
- Use high-quality, professional images
- Show diverse ABA professionals
- Maintain consistent treatment for all photos
- Ensure images have proper alt text

❌ **Don't**:
- Use generic stock photos that feel inauthentic
- Show unprofessional or inappropriate clinical settings
- Mix different photographic styles
- Use images that are too large and slow page loading

### Layout

✅ **Do**:
- Maintain consistent spacing throughout the design
- Use a clear grid system
- Design for all screen sizes
- Create clear visual hierarchy

❌ **Don't**:
- Crowd elements with insufficient spacing
- Use inconsistent margins and padding
- Ignore mobile experiences
- Create cluttered designs with too many elements

---

## Brand Application Checklist

Use this checklist to ensure brand consistency:

- [ ] Are all colors from the approved brand palette?
- [ ] Is the font hierarchy clear and consistent?
- [ ] Are gradients being used appropriately?
- [ ] Does the design work well in both light and dark modes?
- [ ] Is the content voice and tone consistent with brand guidelines?
- [ ] Are images high-quality and aligned with brand style?
- [ ] Is there sufficient contrast for accessibility?
- [ ] Are animations subtle and purposeful?
- [ ] Does the overall design feel clean and professional?