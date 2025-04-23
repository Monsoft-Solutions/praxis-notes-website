# Praxis Notes Design System

This document provides an overview of the Praxis Notes design system implementation, which has been built using Tailwind CSS, shadcn/ui, and React.

## Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Design Tokens](#design-tokens)
4. [Theming](#theming)
5. [Components](#components)
6. [Usage Guidelines](#usage-guidelines)
7. [Development](#development)

## Overview

The Praxis Notes design system is a comprehensive collection of design tokens, components, and guidelines for creating consistent, accessible, and professional user experiences for ABA professionals. It's built with extensibility and maintainability in mind.

## File Structure

```
apps/website/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── design-system/
│   │   │   ├── design-tokens.ts       # Design tokens and constants
│   │   │   ├── showcase.tsx           # Design system showcase component
│   │   │   ├── theme-provider.tsx     # Theme provider (light/dark mode)
│   │   │   └── theme-toggle.tsx       # Theme toggle component
├── app/
│   ├── design-system/
│   │   └── page.tsx                   # Design system showcase page
├── tailwind.config.ts                 # Tailwind configuration
```

## Design Tokens

Design tokens are stored in `components/ui/design-system/design-tokens.ts` and provide a centralized place to manage all design values, including:

- Colors
- Typography
- Spacing
- Shadows
- Transitions
- Component variants

## Theming

The design system supports light and dark modes using a theme provider:

- `ThemeProvider`: Manages the current theme state
- `ThemeToggle`: Allows users to switch between light, dark, and system preference

To use the theme provider, wrap your application with:

```tsx
<ThemeProvider defaultTheme="system">
  <YourApp />
</ThemeProvider>
```

## Components

The design system includes enhanced versions of shadcn/ui components with additional variants and properties aligned with the Praxis Notes design language:

- `Button`: Various styles (primary, secondary, outline, etc.) and sizes
- `Card`: Different card variants with consistent styling
- And more...

Components use the Tailwind CSS class variance authority (CVA) pattern for flexible variants.

## Usage Guidelines

When using the design system:

1. Import components from the UI directory:

   ```tsx
   import { Button } from "website/components/ui/button";
   ```

2. Use design tokens for consistency:

   ```tsx
   import {
     COLORS,
     TYPOGRAPHY,
   } from "website/components/ui/design-system/design-tokens";
   ```

3. Use the `cn()` utility for conditional classes:

   ```tsx
   import { cn } from "website/lib/utils";

   <div className={cn("base-class", condition && "conditional-class")}>
   ```

## Development

To extend the design system:

1. Add new design tokens to `design-tokens.ts`
2. Create new component variants in the respective component files
3. Update the showcase component to display new additions
4. Document changes in this README

To view the design system, visit `/design-system` in the application.

## Credits

Built with:

- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [class-variance-authority](https://github.com/joe-bell/cva)
