import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from 'website/components/layout/header';
import Footer from 'website/components/layout/footer';
import { ThemeProvider } from '../components/ui/design-system/theme-provider';
import { GoogleAnalytics } from '../components/ui/analytics/google-analytics';
import { AnalyticsProvider } from '../components/ui/analytics/analytics-provider';
import { Toaster } from 'website/components/ui/toaster';
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  JsonLdProvider,
} from '../lib/jsonld';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  // Base title with template for inheritance
  title: {
    template: '%s | Praxis Notes',
    default: 'Praxis Notes - AI-Powered ABA Session Notes for RBTs & BCBAs',
  },

  // Base description (pages can override)
  description:
    'Transform your ABA documentation with AI-powered session notes. HIPAA-compliant, insurance-ready notes that save hours of paperwork for RBTs, BCBAs, and ABA clinics.',

  // Base keywords (pages can extend or override)
  keywords: [
    'ABA session notes',
    'applied behavior analysis',
    'BCBA documentation',
    'RBT notes',
    'AI-powered ABA',
    'HIPAA compliant notes',
    'behavioral therapy documentation',
    'ABA data collection',
    'session note software',
    'autism therapy notes',
    'behavioral analysis software',
    'ABA clinic management',
    'therapy documentation',
    'behavioral health technology',
  ].join(', '),

  // Base author information
  authors: [{ name: 'PraxisNote Team' }],
  creator: 'PraxisNote Team',
  publisher: 'Praxis Notes',

  // Base canonical URL (pages will override with specific URLs)
  alternates: {
    canonical: 'https://praxisnotes.com',
  },

  // Base Open Graph metadata (inherited by all pages)
  openGraph: {
    type: 'website',
    siteName: 'Praxis Notes',
    locale: 'en_US',
    url: 'https://praxisnotes.com',
    title: 'Praxis Notes - AI-Powered ABA Session Notes',
    description:
      'Transform your ABA documentation with AI-powered session notes. HIPAA-compliant, insurance-ready notes that save hours of paperwork.',
    images: [
      {
        url: 'https://praxisnotes.com/images/logo/praxis-note-logo-main.png',
        alt: 'Praxis Notes - AI-Powered ABA Session Notes',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Base Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    site: '@praxisnotes',
    creator: '@praxisnotes',
    title: 'Praxis Notes - AI-Powered ABA Session Notes',
    description:
      'Transform your ABA documentation with AI-powered session notes. HIPAA-compliant, insurance-ready notes.',
    images: ['https://praxisnotes.com/images/logo/praxis-note-logo-main.png'],
  },

  // Application metadata
  applicationName: 'Praxis Notes',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  category: 'Healthcare Technology',

  // Base robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification for search engines (will use environment variables)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },

  // Manifest for PWA
  manifest: '/manifest.json',

  // Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Apple specific metadata
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Praxis Notes',
  },

  // Other metadata
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  // Base schemas for all pages
  const baseSchemas = [generateOrganizationSchema(), generateWebsiteSchema()];

  return (
    <html lang="en" className="scroll-smooth w-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <JsonLdProvider schemas={baseSchemas} />
        {GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        )}
        <AnalyticsProvider />
        <ThemeProvider defaultTheme="light">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
