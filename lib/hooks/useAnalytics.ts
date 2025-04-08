'use client';

import { event } from '../analytics';

export function useAnalytics() {
  // Track CTA button clicks
  const trackCTAClick = (label: string) => {
    event({
      action: 'click',
      category: 'CTA',
      label,
    });
  };

  // Track feature interactions
  const trackFeatureInteraction = (featureName: string, action: string) => {
    event({
      action,
      category: 'Feature',
      label: featureName,
    });
  };

  // Track form submissions
  const trackFormSubmission = (formName: string, success: boolean) => {
    event({
      action: 'submit',
      category: 'Form',
      label: `${formName} - ${success ? 'Success' : 'Failed'}`,
    });
  };

  return {
    trackCTAClick,
    trackFeatureInteraction,
    trackFormSubmission,
  };
}