# Praxis Note Animation Guidelines

This document provides principles and examples for animations and transitions used throughout the Praxis Note website.

## Table of Contents

1. [Animation Principles](#animation-principles)
2. [Timing and Easing](#timing-and-easing)
3. [Hover and Focus Animations](#hover-and-focus-animations)
4. [Page Transitions](#page-transitions)
5. [Scroll-Based Animations](#scroll-based-animations)
6. [Loading States](#loading-states)
7. [Micro-interactions](#micro-interactions)
8. [Performance Considerations](#performance-considerations)
9. [Accessibility Requirements](#accessibility-requirements)
10. [Implementation Examples](#implementation-examples)

---

## Animation Principles

### Core Animation Values

1. **Purposeful**: Animations should enhance usability, not distract from it
2. **Subtle**: For ABA professionals, animations should feel polished but not excessive
3. **Consistent**: Use similar animation patterns throughout the site
4. **Performance-Focused**: Prioritize animations that don't impact page performance

### When to Use Animation

- **Transitions**: When elements appear, disappear, or change state
- **Feedback**: To acknowledge user interactions
- **Guidance**: To direct attention to important elements
- **Storytelling**: To explain concepts or demonstrate features
- **Brand Expression**: To reinforce the professional, efficient brand identity

### When to Avoid Animation

- When it might distract from critical information
- For essential UI elements that users need immediate access to
- When animations might cause accessibility issues
- On pages where users are trying to focus on complex tasks

---

## Timing and Easing

### Duration Guidelines

| Type | Duration | Tailwind | Use Case |
|------|----------|----------|----------|
| Instant | 100ms | `duration-100` | Immediate feedback (button presses) |
| Fast | 150ms | `duration-150` | Micro-interactions, small UI changes |
| Standard | 300ms | `duration-300` | Most transitions (hover, focus) |
| Moderate | 500ms | `duration-500` | Element appearance, page transitions |
| Slow | 700ms | `duration-700` | Expressive animations, storytelling |

### Easing Functions

| Type | Cubic-Bezier | Tailwind | Use Case |
|------|--------------|----------|----------|
| Default | `cubic-bezier(0.4, 0, 0.2, 1)` | `ease-in-out` | Most transitions |
| Entrance | `cubic-bezier(0, 0, 0.2, 1)` | `ease-out` | Elements appearing |
| Exit | `cubic-bezier(0.4, 0, 1, 1)` | `ease-in` | Elements disappearing |
| Bounce | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Custom | Attention-grabbing animations |

---

## Hover and Focus Animations

### Button Hover Effects

```css
/* Standard button hover */
.btn {
  @apply transition-colors duration-300;
}

/* Gradient button hover with scale */
.btn-gradient {
  @apply transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98];
}

/* Outline button hover */
.btn-outline {
  @apply transition-colors duration-300 hover:bg-accent hover:text-accent-foreground;
}
```

### Card Hover Effects

```css
/* Basic card hover */
.card {
  @apply transition-shadow duration-300 hover:shadow-lg;
}

/* Feature card with decorative element */
.feature-card {
  @apply relative overflow-hidden group;
}
.feature-card::before {
  @apply absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full z-0 transition-transform duration-300 group-hover:scale-110;
  content: '';
}

/* Feature card with highlighted heading */
.feature-card h3 {
  @apply group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300;
}
```

### Link Animations

```css
/* Standard link hover */
.link {
  @apply text-blue-600 dark:text-blue-400 transition-colors duration-150 hover:text-blue-700 dark:hover:text-blue-300;
}

/* Underline animation */
.link-underline {
  @apply relative;
}
.link-underline::after {
  @apply absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 ease-out;
  content: '';
}
.link-underline:hover::after {
  @apply w-full;
}
```

---

## Page Transitions

### Next.js App Router Implementation

For page transitions in Next.js, we can use the following approach:

```tsx
'use client'

import { motion } from 'framer-motion'

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  )
}
```

### Recommended Page Transition Types

1. **Fade Transition**: Simple opacity change (most professional)
2. **Slide Up**: Content slides up slightly while fading in
3. **Staggered Content**: Elements appear sequentially with slight delays

---

## Scroll-Based Animations

### Implementation with Intersection Observer

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from 'website/lib/utils'

export function FadeInOnScroll({ 
  children, 
  className,
  delay = 0
}: { 
  children: React.ReactNode, 
  className?: string,
  delay?: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8',
        className
      )}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      {children}
    </div>
  )
}
```

### Scroll Animation Types

1. **Fade In**: Elements fade in as they enter the viewport
2. **Slide In**: Elements slide in from bottom or sides
3. **Scale In**: Elements start slightly smaller and scale to full size
4. **Staggered Reveals**: Multiple elements appear with slight delays

---

## Loading States

### Button Loading State

```tsx
<Button disabled={isLoading}>
  {isLoading ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Processing...
    </>
  ) : (
    'Submit'
  )}
</Button>
```

### Skeleton Loading

For content that's loading, use skeleton placeholders:

```tsx
function CardSkeleton() {
  return (
    <div className="rounded-lg border border-border p-6 shadow-sm">
      <div className="h-4 w-2/3 bg-muted animate-pulse rounded mb-4"></div>
      <div className="h-3 w-full bg-muted animate-pulse rounded mb-2"></div>
      <div className="h-3 w-4/5 bg-muted animate-pulse rounded mb-2"></div>
      <div className="h-3 w-3/5 bg-muted animate-pulse rounded"></div>
      <div className="mt-6 h-10 w-1/3 bg-muted animate-pulse rounded"></div>
    </div>
  )
}
```

### Page Loading Transition

```tsx
export default function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-2 border-blue-200 dark:border-blue-900 animate-spin border-t-blue-600 dark:border-t-blue-400"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
```

---

## Micro-interactions

### Form Input Focus

```css
.form-input {
  @apply w-full px-4 py-2 rounded-md border border-input bg-background transition-all duration-300;
  @apply focus:ring-2 focus:ring-primary/50 focus:border-primary;
}
```

### Checkbox Animation

```css
.custom-checkbox {
  @apply relative h-5 w-5 rounded border border-input bg-background transition-colors duration-200;
}
.custom-checkbox:checked {
  @apply bg-blue-600 border-blue-600;
  animation: checkmark 0.2s ease-in-out;
}
@keyframes checkmark {
  0% { transform: scale(0.8); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

### Notification Appearance

```tsx
<div className="fixed right-4 bottom-4 z-50">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3 }}
    className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-border p-4 max-w-sm"
  >
    <div className="flex gap-3">
      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
      <div>
        <h4 className="font-medium">Success</h4>
        <p className="text-sm text-muted-foreground">Your message has been sent!</p>
      </div>
    </div>
  </motion.div>
</div>
```

---

## Performance Considerations

### Performance Best Practices

1. **Animate Cheap Properties**: Prefer `opacity` and `transform` over properties that trigger layout
2. **Use `will-change` Sparingly**: Only for complex animations that need optimization
3. **Reduce Paint Area**: Limit animation to small parts of the page
4. **Disable Animations** for users who prefer reduced motion
5. **Test on Mobile**: Ensure animations perform well on lower-powered devices

### Hardware Acceleration

```css
.hardware-accelerated {
  transform: translateZ(0);
  will-change: transform, opacity;
}
```

### Debouncing and Throttling

For scroll-based animations, throttle event handlers:

```tsx
function throttle(fn: Function, delay: number) {
  let lastCall = 0;
  return function(...args: any[]) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

// Usage
window.addEventListener('scroll', throttle(() => {
  // Animation logic
}, 100));
```

---

## Accessibility Requirements

### Respecting User Preferences

Always respect the `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### React Implementation

```tsx
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const onChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', onChange)
    
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  return prefersReducedMotion
}

// Usage
function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion()
  
  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
    >
      Content
    </motion.div>
  )
}
```

### Additional Accessibility Requirements

1. **No Flashing Content**: Avoid rapid flashing animations (3+ flashes/second)
2. **Pause/Stop Controls**: For continuous animations, provide controls to pause
3. **Alternative Content**: Provide non-animated alternatives where appropriate
4. **Focus Management**: Ensure animations don't interfere with keyboard focus

---

## Implementation Examples

### Gradient Button Hover Effect

```tsx
<Button 
  className="
    relative overflow-hidden 
    transition-all duration-300 
    hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]
    bg-gradient-to-r from-blue-500 to-purple-600 text-white
  "
>
  <span className="relative z-10">Get Started</span>
  <span 
    className="
      absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700
      opacity-0 transition-opacity duration-300 hover:opacity-100
    "
  ></span>
</Button>
```

### Card Reveal Animation

```tsx
<FadeInOnScroll delay={index * 2}>
  <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900/50">
    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 mb-6">
      <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
</FadeInOnScroll>
```

### Number Counter Animation

```tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export function AnimatedCounter({ 
  end, 
  duration = 2000,
  suffix = ''
}: { 
  end: number
  duration?: number
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }
    
    rafRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [inView, end, duration])
  
  return <div ref={ref}>{count}{suffix}</div>
}

// Usage
<div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
  <AnimatedCounter end={5000} suffix="+" />
</div>
```

### Image Reveal on Scroll

```tsx
<div className="relative overflow-hidden rounded-xl">
  <FadeInOnScroll className="transform transition-transform duration-700 hover:scale-105">
    <Image
      src="/path-to-image.jpg"
      alt="Description"
      width={600}
      height={400}
      className="w-full h-auto"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-bold">Title</h3>
        <p className="text-white/80">Description</p>
      </div>
    </div>
  </FadeInOnScroll>
</div>
```

---

## Conclusion

Animations on the Praxis Note website should:

1. Enhance the user experience without distracting from content
2. Maintain a professional and polished feel appropriate for ABA professionals
3. Be consistent across the site to create a cohesive experience
4. Respect user preferences for reduced motion
5. Perform well on all devices, especially mobile

By following these guidelines, we can create a site that feels modern and engaging while maintaining the professional tone expected by our audience of ABA professionals.