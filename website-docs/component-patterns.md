# Praxis Note Component Design Patterns

This document provides detailed patterns and examples for components used throughout the Praxis Note website.

## Table of Contents

1. [Navigation Components](#navigation-components)
2. [Hero Sections](#hero-sections)
3. [Feature Components](#feature-components)
4. [Card Patterns](#card-patterns)
5. [Form Components](#form-components)
6. [Call-to-Action (CTA) Patterns](#call-to-action-cta-patterns)
7. [Content Sections](#content-sections)
8. [Testimonial Components](#testimonial-components)
9. [Pricing Components](#pricing-components)
10. [Utility Components](#utility-components)

---

## Navigation Components

### Main Header

The primary navigation should be consistent across all pages.

```tsx
<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container flex h-14 max-w-7xl items-center">
    <MainNav />
    <MobileNav />
    <div className="flex flex-1 items-center justify-end space-x-4">
      <Button variant="outline" size="sm" className="hidden md:flex">
        Log in
      </Button>
      <Button size="sm" className="hidden md:flex">
        Get Started
      </Button>
    </div>
  </div>
</header>
```

### Footer

```tsx
<footer className="border-t border-border bg-muted/40">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
      {/* Footer columns */}
    </div>
    <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Praxis Note. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Privacy Policy
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Terms of Service
        </a>
      </div>
    </div>
  </div>
</footer>
```

---

## Hero Sections

### Gradient Background Hero

```tsx
<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />
    <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-purple-400/10 blur-3xl" />
  </div>
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        Effortless ABA Session Notes
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-10">
        Generate detailed, insurance-ready ABA session notes with AI.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="xl" variant="gradient">
          Try It Free
        </Button>
        <Button size="xl" variant="outline">
          See How It Works
        </Button>
      </div>
    </div>
  </div>
</section>
```

### Split Hero with Image

```tsx
<section className="py-16 md:py-24">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Focus on Therapy, Not Paperwork
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Generate detailed, insurance-ready ABA session notes in minutes, not hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" variant="gradient">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl transform rotate-3 scale-105"></div>
        <div className="rounded-xl overflow-hidden shadow-2xl border border-blue-100 dark:border-blue-800">
          {/* Image or app screenshot */}
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Feature Components

### Feature Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {features.map((feature, index) => (
    <div 
      key={index}
      className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100 dark:border-blue-900/50 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 mb-6">
          <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
        <p className="text-muted-foreground mb-4">{feature.description}</p>
        {feature.bullets && (
          <ul className="space-y-2">
            {feature.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ))}
</div>
```

### Feature List with Icon

```tsx
<div className="space-y-8">
  {features.map((feature, index) => (
    <div key={index} className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30">
          <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
        <p className="text-muted-foreground">{feature.description}</p>
      </div>
    </div>
  ))}
</div>
```

---

## Card Patterns

### Basic Card

```tsx
<div className="bg-background rounded-lg border border-border p-6 hover:shadow-md transition-shadow">
  <h3 className="text-lg font-bold mb-2">{title}</h3>
  <p className="text-muted-foreground">{description}</p>
</div>
```

### Interactive Feature Card

```tsx
<div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-blue-100 dark:border-blue-900/50 relative overflow-hidden group">
  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full z-0 transition-transform duration-300 group-hover:scale-110"></div>
  <div className="relative z-10">
    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 mb-6">
      <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
    </div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
</div>
```

### Testimonial Card

```tsx
<div className="p-1 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg h-full">
    <div className="flex items-center mb-4">
      <div className="flex text-amber-400 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 fill-current" />
        ))}
      </div>
    </div>
    <blockquote className="text-muted-foreground mb-4 italic">
      "{quote}"
    </blockquote>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
        <span className="font-medium text-blue-600 dark:text-blue-400">
          {name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
</div>
```

---

## Form Components

### Contact Form

```tsx
<form className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        placeholder="Your name"
        required
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        placeholder="your.email@example.com"
        required
      />
    </div>
  </div>

  <div>
    <label htmlFor="subject" className="block text-sm font-medium mb-2">
      Subject
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
      placeholder="How can we help you?"
      required
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={6}
      className="w-full px-4 py-2 rounded-md border border-input bg-background resize-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
      placeholder="Tell us about your question or concern..."
      required
    />
  </div>

  <Button type="submit" variant="gradient" size="lg">
    Send Message
  </Button>
</form>
```

### Newsletter Signup

```tsx
<div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
  <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
  <p className="text-muted-foreground mb-4">
    Subscribe to our newsletter for the latest news and resources.
  </p>
  <form className="flex flex-col sm:flex-row gap-3">
    <input
      type="email"
      placeholder="Your email address"
      className="flex-1 px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
      required
    />
    <Button type="submit" variant="gradient">
      Subscribe
    </Button>
  </form>
</div>
```

---

## Call-to-Action (CTA) Patterns

### Standard CTA Section

```tsx
<section className="py-16 md:py-24">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6">
    <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:p-12 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Save Hours on Session Notes?
          </h2>
          <p className="text-white/90 text-lg mb-0 md:mb-6">
            Join thousands of ABA professionals who are reclaiming their time with Praxis Note.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">
          <Button size="xl" variant="default" className="bg-white text-blue-600 hover:bg-white/90">
            Start Free Trial
          </Button>
          <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Simplified CTA

```tsx
<section className="py-16 md:py-24 text-center">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Transform Your Documentation Process Today
      </h2>
      <p className="text-xl text-muted-foreground mb-8">
        Join over 3,500 ABA professionals who save 5+ hours every week.
      </p>
      <Button size="xl" variant="gradient">
        Get Started for Free
      </Button>
    </div>
  </div>
</section>
```

---

## Content Sections

### Two-Column Content with Image

```tsx
<section className="py-16 md:py-24">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">Section Title</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Main description text goes here. This explains the key benefits or features.
        </p>
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl transform rotate-3 scale-105"></div>
        <div className="rounded-xl overflow-hidden shadow-2xl border border-blue-100 dark:border-blue-800">
          {/* Image content */}
        </div>
      </div>
    </div>
  </div>
</section>
```

### Section With Decorated Heading

```tsx
<section className="py-16 md:py-24">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
        <Icon className="w-4 h-4" />
        <span>Section Label</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Section Title
      </h2>
      <p className="text-xl text-muted-foreground">
        Descriptive text that explains this section in more detail.
      </p>
    </div>
    
    {/* Section content */}
  </div>
</section>
```

---

## Testimonial Components

### Testimonial Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {testimonials.map((testimonial, index) => (
    <div key={index} className="p-1 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg h-full">
        <div className="flex text-amber-400 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <blockquote className="text-muted-foreground mb-4 italic">
          "{testimonial.quote}"
        </blockquote>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
            <span className="font-medium text-blue-600 dark:text-blue-400">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-medium">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
```

### Featured Testimonial

```tsx
<div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <div className="flex text-amber-400 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <blockquote className="text-xl md:text-2xl font-medium mb-6">
        "Praxis Note has completely transformed my documentation process. I save at least 5 hours every week on session notes."
      </blockquote>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
          <span className="font-medium text-blue-600 dark:text-blue-400">
            JD
          </span>
        </div>
        <div>
          <p className="font-bold text-lg">Jennifer Davis</p>
          <p className="text-muted-foreground">BCBA, Sunshine Therapy Center</p>
        </div>
      </div>
    </div>
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl transform -rotate-3"></div>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl border border-blue-100 dark:border-blue-900/50">
        <p className="mb-4 font-medium">Results with Praxis Note:</p>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Time Saved</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">5+ hours/week</span>
          </div>
          <div className="w-full h-2 bg-blue-100 dark:bg-blue-900/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 w-[80%]"></div>
          </div>
          <div className="flex items-center justify-between">
            <span>Note Quality</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">Improved by 90%</span>
          </div>
          <div className="w-full h-2 bg-blue-100 dark:bg-blue-900/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 w-[90%]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Pricing Components

### Pricing Table

```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {plans.map((plan, index) => (
    <div 
      key={index} 
      className={cn(
        "rounded-xl overflow-hidden border transition-shadow",
        plan.featured 
          ? "border-blue-200 dark:border-blue-800 shadow-xl relative bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900" 
          : "border-border shadow-lg hover:shadow-xl bg-background"
      )}
    >
      {plan.featured && (
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      )}
      <div className="p-6 md:p-8">
        {plan.featured && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Most Popular
          </div>
        )}
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground mb-6">{plan.description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-muted-foreground">/{plan.interval}</span>
        </div>
        <Button 
          variant={plan.featured ? "gradient" : "outline"} 
          size="lg" 
          className="w-full mb-6"
        >
          {plan.buttonText}
        </Button>
        <div className="space-y-3">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
```

### Feature Comparison Table

```tsx
<div className="overflow-hidden border border-border rounded-lg shadow-lg">
  <table className="w-full">
    <thead>
      <tr className="bg-muted/50">
        <th className="px-6 py-4 text-left">Features</th>
        {plans.map((plan, index) => (
          <th key={index} className="px-6 py-4 text-center">
            {plan.name}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {features.map((feature, idx) => (
        <tr key={idx} className="border-t border-border">
          <td className="px-6 py-4 font-medium">{feature.name}</td>
          {plans.map((plan, planIdx) => (
            <td key={planIdx} className="px-6 py-4 text-center">
              {feature.availability[plan.id] ? (
                <CheckCircle2 className="h-5 w-5 mx-auto text-green-500" />
              ) : (
                <X className="h-5 w-5 mx-auto text-muted-foreground" />
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

---

## Utility Components

### Stats Display

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {stats.map((stat, index) => (
    <div key={index} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        {stat.value}
      </div>
      <p className="text-sm md:text-base text-muted-foreground">
        {stat.label}
      </p>
    </div>
  ))}
</div>
```

### FAQ Accordion

```tsx
<div className="space-y-4">
  {faqs.map((faq, index) => (
    <div key={index} className="border border-border rounded-lg">
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 text-left">
          <h3 className="font-medium">{faq.question}</h3>
          <ChevronDown className="h-5 w-5 transition-transform duration-300" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-4">
          <p className="text-muted-foreground">{faq.answer}</p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ))}
</div>
```

### Progress Steps

```tsx
<div className="relative">
  <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted-foreground/20">
    <div className="h-full bg-blue-600 dark:bg-blue-400" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
  </div>
  <div className="relative flex justify-between">
    {steps.map((step, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className={cn(
          "h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium border-2 z-10",
          index < currentStep 
            ? "bg-blue-600 text-white border-blue-600 dark:bg-blue-400 dark:border-blue-400" 
            : index === currentStep 
              ? "bg-white text-blue-600 border-blue-600 dark:bg-gray-900 dark:text-blue-400 dark:border-blue-400" 
              : "bg-white text-muted-foreground border-muted-foreground/30 dark:bg-gray-900"
        )}>
          {index < currentStep ? <Check className="h-5 w-5" /> : index + 1}
        </div>
        <div className="text-sm mt-2 text-center max-w-[120px]">{step.name}</div>
      </div>
    ))}
  </div>
</div>
```

---

## Implementation Guidelines

1. **Component Composition**: Build complex UI by composing smaller components
2. **Consistent Styling**: Use utility classes from the UI guidelines consistently
3. **Responsive Design**: Ensure all components work well on all screen sizes
4. **Accessibility**: Follow WCAG guidelines for all interactive components
5. **Performance**: Optimize images and animations for fast loading

Remember to use the `cn()` utility function from `utils.ts` to conditionally apply classes, and leverage the shadcn/ui component library where appropriate.