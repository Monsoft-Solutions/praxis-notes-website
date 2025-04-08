# Praxis Note UI/UX Guidelines

This document outlines the comprehensive UI/UX guidelines for the Praxis Note website, ensuring consistency, accessibility, and a professional experience tailored for ABA professionals.

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Shadows and Elevation](#shadows-and-elevation)
5. [Animations and Transitions](#animations-and-transitions)
6. [Components](#components)
7. [Accessibility Guidelines](#accessibility-guidelines)
8. [User Experience Principles](#user-experience-principles)
9. [Layout Guidelines](#layout-guidelines)
10. [Responsive Design](#responsive-design)

---

## Color Palette

### Primary Colors

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Blue Primary | `#3B82F6` | `blue-500` | Primary buttons, links, focus states |
| Purple Primary | `#8B5CF6` | `purple-500` | Gradients, accents, secondary elements |

### Secondary Colors

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Blue Secondary | `#60A5FA` | `blue-400` | Hover states, secondary elements |
| Purple Secondary | `#A78BFA` | `purple-400` | Hover states, secondary elements |

### Neutrals

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| White | `#FFFFFF` | `white` | Backgrounds, text on dark backgrounds |
| Light Background | `#F3F4F6` | `gray-100` | Section backgrounds, cards |
| Dark Background | `#111827` | `gray-900` | Dark mode backgrounds |
| Text Primary | `#111827` | `gray-900` | Primary text |
| Text Secondary | `#6B7280` | `gray-500` | Secondary text, labels |

### Functional Colors

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Success | `#10B981` | `emerald-500` | Success states, positive messaging |
| Warning | `#F59E0B` | `amber-500` | Warning states, important notices |
| Error | `#EF4444` | `red-500` | Error states, destructive actions |
| Info | `#3B82F6` | `blue-500` | Informational elements |

### Gradients

| Name | Definition | Usage |
|------|------------|-------|
| Primary Gradient | `bg-gradient-to-r from-blue-500 to-purple-600` | CTAs, hero sections, important UI elements |
| Soft Gradient | `bg-gradient-to-br from-blue-50 to-purple-50` | Backgrounds, cards, subtle UI elements |
| Dark Gradient | `bg-gradient-to-r from-gray-900 to-blue-900` | Dark mode UI elements |

---

## Typography

### Font Family

- **Primary**: Inter (Sans-serif)
- **Fallback**: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial

### Font Sizes

| Name | Size | Tailwind | Usage |
|------|------|----------|-------|
| XS | 12px | `text-xs` | Footnotes, small labels |
| SM | 14px | `text-sm` | Secondary text, form labels |
| Base | 16px | `text-base` | Body text, paragraphs |
| LG | 18px | `text-lg` | Large body text, important info |
| XL | 20px | `text-xl` | Subheadings, feature titles |
| 2XL | 24px | `text-2xl` | Section headings |
| 3XL | 30px | `text-3xl` | Major section headings |
| 4XL | 36px | `text-4xl` | Page headings |
| 5XL | 48px | `text-5xl` | Hero headings |
| 6XL | 60px | `text-6xl` | Large hero headings |

### Font Weights

| Name | Weight | Tailwind | Usage |
|------|--------|----------|-------|
| Normal | 400 | `font-normal` | Body text |
| Medium | 500 | `font-medium` | Emphasis, subheadings |
| Semibold | 600 | `font-semibold` | Subheadings, important text |
| Bold | 700 | `font-bold` | Headings, buttons |
| Extrabold | 800 | `font-extrabold` | Hero headings |

### Line Heights

| Name | Value | Tailwind | Usage |
|------|-------|----------|-------|
| Tight | 1.25 | `leading-tight` | Headings |
| Normal | 1.5 | `leading-normal` | Body text |
| Relaxed | 1.75 | `leading-relaxed` | Long-form content |

---

## Spacing System

Follow a consistent spacing scale with the following values using Tailwind's spacing utilities:

| Name | Size | Tailwind | Example Usage |
|------|------|----------|---------------|
| XS | 4px | `p-1`, `m-1` | Minimal spacing, icons |
| SM | 8px | `p-2`, `m-2` | Small elements, compact layouts |
| MD | 16px | `p-4`, `m-4` | Standard spacing |
| LG | 24px | `p-6`, `m-6` | Section padding |
| XL | 32px | `p-8`, `m-8` | Large section spacing |
| 2XL | 48px | `p-12`, `m-12` | Major section breaks |
| 3XL | 64px | `p-16`, `m-16` | Hero sections, large layouts |
| 4XL | 96px | `p-24`, `m-24` | Very large section separations |

### Container Width

- Max width: `max-w-7xl` (1280px) with `px-4 sm:px-6` for consistent padding

---

## Shadows and Elevation

Use shadows to create depth and establish a visual hierarchy.

### Shadow Levels

| Name | Tailwind | Usage |
|------|----------|-------|
| None | `shadow-none` | Flat elements |
| SM | `shadow-sm` | Subtle elevation, cards |
| MD | `shadow` | Standard elevation, dropdowns, cards |
| LG | `shadow-lg` | Higher elevation, modals, popovers |
| XL | `shadow-xl` | Significant elevation, feature cards |
| 2XL | `shadow-2xl` | Maximum elevation, hero elements |

### Custom Shadows

- Active cards: `shadow-lg hover:shadow-xl transition-shadow`
- Floating elements: `shadow-[0_8px_30px_rgb(0,0,0,0.12)]`
- Inner glow: `shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]`

---

## Animations and Transitions

### Transition Durations

| Name | Tailwind | Usage |
|------|----------|-------|
| Fast | `duration-150` | Micro-interactions, immediate feedback |
| Normal | `duration-300` | Standard transitions, hover effects |
| Slow | `duration-500` | Larger animations, emphasis |

### Transition Types

| Name | Tailwind | Usage |
|------|----------|-------|
| Default | `transition` | General purpose |
| Transform | `transition-transform` | Movement, scaling |
| Colors | `transition-colors` | Color changes, hover states |
| Opacity | `transition-opacity` | Fading elements |
| Shadow | `transition-shadow` | Elevation changes |

### Animation Examples

1. **Button Hover**:
   ```
   transition-colors duration-300 hover:bg-opacity-90
   ```

2. **Card Hover**:
   ```
   transition-shadow duration-300 hover:shadow-xl
   ```

3. **Link Hover**:
   ```
   transition-colors duration-150 hover:text-primary
   ```

4. **Element Appear**:
   ```
   transition-opacity duration-300 opacity-0 group-hover:opacity-100
   ```

5. **Subtle Movement**:
   ```
   transition-transform duration-300 hover:translate-y-[-2px]
   ```

### Micro-Interactions

- **Form inputs**: Add focus transitions with `transition-all focus:ring-2 focus:border-primary`
- **Buttons**: Use subtle scale effect `hover:scale-[1.02] active:scale-[0.98] transition-transform`
- **Icons**: Animate with `group-hover:rotate-12 transition-transform duration-300`

---

## Components

### Buttons

| Variant | Tailwind Classes | Usage |
|---------|------------------|-------|
| Primary | `bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90` | Main CTAs |
| Secondary | `bg-secondary text-secondary-foreground hover:bg-secondary/80` | Secondary actions |
| Outline | `border border-input hover:bg-accent hover:text-accent-foreground` | Tertiary actions |
| Ghost | `hover:bg-accent hover:text-accent-foreground` | Minimal visual impact |

### Button Sizes

| Size | Tailwind Classes | Usage |
|------|------------------|-------|
| SM | `h-9 px-3 rounded-md text-sm` | Compact UIs |
| Default | `h-10 py-2 px-4 rounded-md` | Standard |
| LG | `h-11 px-8 rounded-md` | Important actions |
| XL | `h-14 px-8 rounded-md text-base` | Hero CTAs |

### Cards

| Variant | Tailwind Classes | Usage |
|---------|------------------|-------|
| Basic | `bg-background rounded-lg border border-border p-6` | Simple content |
| Interactive | `bg-background rounded-lg border border-border p-6 hover:shadow-lg transition-shadow` | Clickable cards |
| Feature | `bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100 dark:border-blue-900/50` | Highlighted features |
| Gradient | `bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-6` | Special emphasis |

### Form Elements

| Element | Tailwind Classes | Notes |
|---------|------------------|-------|
| Input | `w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all` | Text inputs |
| Select | `w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary` | Dropdown selects |
| Checkbox | `h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/80` | Checkboxes |
| Label | `block text-sm font-medium mb-2` | Form labels |

---

## Accessibility Guidelines

### Color Contrast

- Ensure text has sufficient contrast ratio:
  - Small text (< 18pt): Minimum 4.5:1
  - Large text (≥ 18pt): Minimum 3:1
- Use `text-primary` and `text-muted-foreground` consistently

### Focus States

- Make focus states visible with `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`
- Ensure all interactive elements are keyboard accessible

### Text Alternatives

- Include alt text for all images
- Use aria-labels for interactive elements without visible text
- Provide context for screen readers with aria-describedby where appropriate

### Semantic HTML

- Use appropriate HTML elements (`<button>` for buttons, `<a>` for links)
- Employ proper heading hierarchy (h1-h6)
- Use `<ul>` and `<ol>` for lists

---

## User Experience Principles

### For ABA Professionals

1. **Efficiency First**: Design for users who are time-constrained and need quick access to information
2. **Clinical Clarity**: Use clear, professional language that resonates with healthcare professionals
3. **Confidence Building**: Emphasize security, compliance, and professional features
4. **Educational Value**: Provide resources and information that help ABA professionals in their work

### Common Patterns

1. **Clear CTAs**: Make primary actions obvious and descriptive
2. **Progressive Disclosure**: Start with essential information, allow users to access more details as needed
3. **Consistent Navigation**: Keep navigation predictable across all pages
4. **Feedback**: Provide clear feedback for all user actions

---

## Layout Guidelines

### Page Structure

1. **Header**: Sticky navigation with logo, links, and primary CTA
2. **Hero**: Clear value proposition with supporting visual and primary CTA
3. **Main Content**: Organized in sections with clear hierarchy
4. **Social Proof**: Testimonials, statistics, and trust indicators
5. **CTA Section**: Repeated call to action before footer
6. **Footer**: Navigation, contact information, legal links

### Content Grid

- Use `grid` and `flex` layouts consistently
- Follow these common patterns:
  - Two-column layout: `grid grid-cols-1 md:grid-cols-2 gap-8 items-center`
  - Three-column layout: `grid grid-cols-1 md:grid-cols-3 gap-8`
  - Four-column layout: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`

---

## Responsive Design

### Breakpoints

| Name | Size | Tailwind | Usage |
|------|------|----------|-------|
| SM | 640px | `sm:` | Small devices, large phones |
| MD | 768px | `md:` | Tablets, small laptops |
| LG | 1024px | `lg:` | Desktops, large tablets |
| XL | 1280px | `xl:` | Large desktops |
| 2XL | 1536px | `2xl:` | Extra large screens |

### Mobile-First Approach

- Default styles should target mobile devices
- Use responsive utilities to adapt for larger screens
- Test all pages on various device sizes

### Common Responsive Patterns

1. **Stack on Mobile**: Elements that are side by side on desktop should stack vertically on mobile
   ```
   flex flex-col md:flex-row
   ```

2. **Adjust Text Sizes**: Reduce heading sizes on smaller screens
   ```
   text-4xl md:text-5xl lg:text-6xl
   ```

3. **Simplified Navigation**: Use hamburger menu on mobile
   ```
   hidden md:block (for desktop menu)
   block md:hidden (for mobile menu button)
   ```

4. **Reduced Padding**: Use smaller spacing on mobile
   ```
   py-8 md:py-16 lg:py-24
   ```

5. **Full-Width Containers**: Allow elements to use full width on mobile
   ```
   w-full sm:w-auto
   ```

---

## Implementation Notes

- Use the `cn()` utility from `utils.ts` for conditional class merging
- Leverage Tailwind's `class-variance-authority` for component variants
- Follow the established patterns in existing components
- Always validate against these guidelines when creating new UI elements
