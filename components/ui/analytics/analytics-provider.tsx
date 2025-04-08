'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from '../../../lib/analytics';

// Basic analytics provider that only tracks pathname
export function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views when the path changes
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);

  return null;
}

// For future use when search params tracking is needed
// Uncomment and use with Suspense boundary
/*
export function SearchParamsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}
*/