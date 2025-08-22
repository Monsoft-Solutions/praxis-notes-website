import { Metadata } from 'next';
import Features from 'website/components/sections/features';
import CTA from 'website/components/sections/cta';
import FeaturesHero from 'website/components/sections/features/features-hero';
import NoteReviewSection from 'website/components/sections/features/note-review-section';
import AdvancedReportingSection from 'website/components/sections/features/advanced-reporting-section';
import ComplianceSection from 'website/components/sections/features/compliance-section';

export const metadata: Metadata = {
  title: 'Features - AI-Powered ABA Documentation Tools',
  description:
    'Explore powerful features of Praxis Notes: AI-powered session notes, compliance reviews, progress tracking, and documentation tools for RBTs, BCBAs, and ABA clinics.',

  // Keywords for SEO
  keywords: [
    'ABA software features',
    'AI session notes',
    'ABA documentation tools',
    'behavioral analysis software',
    'session note automation',
    'ABA compliance features',
    'progress tracking tools',
    'HIPAA compliant ABA',
    'RBT software features',
    'BCBA documentation tools',
    'therapy note features',
    'behavioral data tracking',
  ].join(', '),

  // Canonical URL
  alternates: {
    canonical: 'https://praxisnotes.com/features',
  },

  // Open Graph for social sharing
  openGraph: {
    title: 'Features - AI-Powered ABA Documentation Tools',
    description:
      'Explore powerful features: AI session notes, compliance reviews, progress tracking, and documentation tools for ABA professionals.',
    url: 'https://praxisnotes.com/features',
    siteName: 'Praxis Notes',
    type: 'website',
    images: [
      {
        url: 'https://praxisnotes.com/images/features-hero.jpg',
        alt: 'Praxis Notes AI-Powered ABA Features Overview',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered ABA Documentation Features',
    description:
      'Discover powerful features for ABA professionals: AI session notes, compliance reviews, and progress tracking tools.',
    images: ['https://praxisnotes.com/images/features-hero.jpg'],
  },

  // Additional metadata
  category: 'Product Features',

  // Robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero section */}
      <FeaturesHero />

      <div id="create"></div>
      <Features />

      {/* Note Review & Enhancement */}
      <NoteReviewSection />

      {/* Advanced Reporting & Analytics */}

      <AdvancedReportingSection />

      {/* Compliance Section */}
      <ComplianceSection />

      <CTA />
    </>
  );
}
