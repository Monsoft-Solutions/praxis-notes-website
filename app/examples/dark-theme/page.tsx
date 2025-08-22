import { Metadata } from 'next';
import {
  BookOpenText,
  Brain,
  Heart,
  LineChart,
  PencilRuler,
  Puzzle,
} from 'lucide-react';
import CTAPlain from 'website/components/sections/cta-plain';
import {
  ComparisonBox,
  InfoBox,
  Section,
  TeamCard,
  ValueCard,
} from 'website/components/sections/cards';

export const metadata: Metadata = {
  title: 'Dark Theme Example - UI Components Showcase',
  description:
    'Explore our dark-themed UI components and design patterns. See how our ABA-inspired design system adapts to dark mode with beautiful contrast and accessibility.',

  // Keywords for SEO
  keywords: [
    'dark theme',
    'dark mode',
    'UI components',
    'design examples',
    'dark UI',
    'component showcase',
    'theme examples',
    'accessibility design',
    'dark interface',
    'UI demonstration',
    'design patterns',
    'component library',
  ].join(', '),

  // Canonical URL
  alternates: {
    canonical: 'https://praxisnotes.com/examples/dark-theme',
  },

  // Open Graph for social sharing
  openGraph: {
    title: 'Dark Theme Example - UI Components Showcase',
    description:
      'Explore our dark-themed UI components and design patterns with beautiful contrast and accessibility.',
    url: 'https://praxisnotes.com/examples/dark-theme',
    siteName: 'Praxis Notes',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary',
    title: 'Praxis Notes Dark Theme Showcase',
    description:
      'Beautiful dark-themed UI components with accessible design patterns.',
  },

  // Additional metadata
  category: 'Examples & Demos',

  // Robots directive
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function DarkThemeExamplePage() {
  return (
    <>
      {/* Dark Hero section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dark Theme Components
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed mb-10">
              A showcase of our custom dark-themed components
            </p>
          </div>
        </div>
      </section>

      {/* Dark Info Boxes */}
      <Section
        title="Dark Info Boxes"
        subtitle="Clean, modern information boxes with dark theme styling"
        dark={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoBox title="Key Documentation Features">
            <p className="mb-0">
              Our AI-assisted documentation helps ABA therapists complete their
              notes in minutes, not hours, with smart templates and automatic
              data integration.
            </p>
          </InfoBox>

          <InfoBox textCenter>
            <p className="text-xl font-semibold italic mb-4">
              &ldquo;Praxis Notes has transformed how we document ABA therapy
              sessions. It&apos;s been a game-changer for our practice.&rdquo;
            </p>
            <p className="text-slate-400">- Sarah Johnson, BCBA</p>
          </InfoBox>
        </div>
      </Section>

      {/* Dark Team Cards */}
      <Section
        title="Our Team"
        subtitle="Meet the experts behind Praxis Notes"
        dark={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-8 h-8 text-soft-blue" />,
              title: 'Behavioral Expertise',
              description:
                'Our team includes BCBAs and RBTs who understand the daily challenges of ABA documentation.',
            },
            {
              icon: <PencilRuler className="w-8 h-8 text-lavender" />,
              title: 'Design Focus',
              description:
                'We create calming, intuitive interfaces that reduce cognitive load for busy practitioners.',
            },
            {
              icon: <Puzzle className="w-8 h-8 text-mint-green" />,
              title: 'Innovation Mindset',
              description:
                "We're constantly exploring new ways to solve the documentation challenges in ABA.",
            },
          ].map((item, index) => (
            <TeamCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* Dark Comparison Boxes */}
      <Section
        title="The Praxis Difference"
        subtitle="See how our approach compares to traditional methods"
        dark={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ComparisonBox
            title="Traditional Documentation"
            items={[
              {
                text: "Generic notes templates that don't fit ABA needs",
                type: 'negative',
              },
              {
                text: 'Hours spent writing detailed behavioral observations',
                type: 'negative',
              },
              {
                text: 'Disconnected systems for session notes and data collection',
                type: 'negative',
              },
            ]}
          />

          <ComparisonBox
            title="The Praxis Way"
            bgColor="bg-steel-blue/30"
            items={[
              {
                text: 'ABA-specific templates with smart completion',
                type: 'positive',
              },
              {
                text: 'Complete notes in minutes, not hours',
                type: 'positive',
              },
              {
                text: 'Seamless integration of data and narrative reporting',
                type: 'positive',
              },
            ]}
          />
        </div>
      </Section>

      {/* Dark Value Cards */}
      <Section
        title="Our Core Values"
        subtitle="The principles that guide everything we build"
        dark={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8 text-light-pink" />,
              title: 'Client-Centered',
              description:
                'We build tools that help therapists spend more time with clients and less time on paperwork.',
              points: [
                'Designed by ABA professionals',
                'Focus on clinical outcomes',
              ],
            },
            {
              icon: <LineChart className="w-8 h-8 text-soft-blue" />,
              title: 'Data-Driven',
              description:
                'We believe in the power of data to inform treatment decisions and demonstrate progress.',
              points: ['Automatic data analysis', 'Visual progress tracking'],
            },
            {
              icon: <BookOpenText className="w-8 h-8 text-lavender" />,
              title: 'Continuous Learning',
              description:
                "We're constantly learning from our users and the latest research in behavioral science.",
              points: ['Regular feature updates', 'Evidence-based approach'],
            },
          ].map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              points={value.points}
            />
          ))}
        </div>
      </Section>

      {/* CTA section */}
      <CTAPlain
        subtitle="Join our growing community of ABA professionals."
        description="Experience the power of AI-assisted documentation and focus on what matters most - your clients."
        primaryButtonText="Get started for free"
        secondaryButtonText="Learn about pricing"
        secondaryButtonLink="/pricing"
      />
    </>
  );
}
