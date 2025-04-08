# Google Analytics Integration

This document describes how Google Analytics 4 (GA4) is integrated into the Praxis Notes website.

## Setup

The site uses Google Analytics 4 (GA4) with Next.js App Router. The integration is built with:

1. A Google Analytics component for the tracking script
2. An Analytics Provider for page view tracking with the App Router
3. Utility functions and hooks for custom event tracking

## Configuration

To configure Google Analytics:

1. Create a Google Analytics 4 property in the [Google Analytics Console](https://analytics.google.com/)
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add the ID to your `.env` file:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Implementation Details

### Components

- `GoogleAnalytics`: Loads the GA script with your Measurement ID
- `AnalyticsProvider`: Handles page view tracking with Next.js App Router

### Utilities

- `lib/analytics.ts`: Core analytics functions:
  - `pageview()`: Track page views
  - `event()`: Track custom events

### Custom Hooks

- `useAnalytics()`: Hook for tracking common user interactions:
  - `trackCTAClick`: Track call-to-action button clicks
  - `trackFeatureInteraction`: Track feature usage
  - `trackFormSubmission`: Track form submissions

## Usage Examples

### Tracking CTA Clicks

```tsx
'use client';
import { useAnalytics } from '../../lib/hooks/useAnalytics';

export function CTAButton() {
  const { trackCTAClick } = useAnalytics();
  
  return (
    <button onClick={() => trackCTAClick('Homepage Hero Button')}>
      Get Started
    </button>
  );
}
```

### Tracking Form Submissions

```tsx
'use client';
import { useAnalytics } from '../../lib/hooks/useAnalytics';

export function ContactForm() {
  const { trackFormSubmission } = useAnalytics();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Form submission logic
      trackFormSubmission('Contact Form', true);
    } catch (error) {
      trackFormSubmission('Contact Form', false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

## Consent Management

For GDPR compliance, analytics tracking should only occur after user consent. Update the cookies page and implement a consent mechanism before enabling analytics tracking if needed.