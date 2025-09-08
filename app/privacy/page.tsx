import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection & HIPAA Compliance',
  description:
    'Our privacy policy details how we collect, use, and protect your personal information when using Praxis Notes. Learn about our HIPAA compliance and data security measures.',

  // Keywords for SEO
  keywords: [
    'privacy policy',
    'data protection',
    'HIPAA compliance',
    'personal information',
    'data security',
    'client privacy',
    'protected health information',
    'data collection',
    'information security',
    'privacy rights',
    'data handling',
    'healthcare privacy',
  ].join(', '),

  // Canonical URL
  alternates: {
    canonical: 'https://praxisnotes.com/privacy',
  },

  // Open Graph for social sharing
  openGraph: {
    title: 'Privacy Policy - Praxis Notes',
    description:
      'Learn how we protect your personal information and ensure HIPAA compliance with our comprehensive privacy policy.',
    url: 'https://praxisnotes.com/privacy',
    siteName: 'Praxis Notes',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary',
    title: 'Praxis Notes Privacy Policy',
    description:
      'Our comprehensive privacy policy covering data protection and HIPAA compliance.',
  },

  // Additional metadata
  category: 'Legal',

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

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated: April 7, 2025
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            At Praxis Notes, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our application. Please read this privacy
            policy carefully. If you do not agree with the terms of this privacy
            policy, please do not access the application.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you
            register for an account, create or modify your profile, set
            preferences, or make purchases through the application.
          </p>
          <h3 className="text-xl font-medium mt-6">Personal Data</h3>
          <p>
            When you use our application, we may ask you to provide us with
            certain personally identifiable information that can be used to
            contact or identify you. Personally identifiable information may
            include, but is not limited to:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Professional credentials and certifications</li>
            <li>Payment information</li>
          </ul>
          <h3 className="text-xl font-medium mt-6">Client Data</h3>
          <p>
            As a HIPAA-compliant platform for ABA therapy documentation, we also
            process protected health information (PHI) that you enter about your
            clients. This information is subject to additional protections as
            detailed in our HIPAA compliance section.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <p>
            We may use the information we collect from you for various purposes,
            including:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>
              To allow you to participate in interactive features of our
              application
            </li>
            <li>To provide customer support</li>
            <li>
              To gather analysis or valuable information so that we can improve
              our service
            </li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To fulfill any other purpose for which you provide it</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">HIPAA Compliance</h2>
          <p>
            Praxis Notes is designed to be compliant with the Health Insurance
            Portability and Accountability Act (HIPAA). As such, we implement
            physical, technical, and administrative safeguards to protect the
            privacy and security of protected health information (PHI).
          </p>
          <p>
            Before using our services, covered entities will be required to
            enter into a Business Associate Agreement (BAA) with Praxis Notes,
            which outlines our respective responsibilities for protecting and
            securing PHI.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p>
            We will retain your personal information only for as long as is
            necessary for the purposes set out in this privacy policy. We will
            retain and use your information to the extent necessary to comply
            with our legal obligations, resolve disputes, and enforce our
            policies.
          </p>
          <p>
            We maintain client session notes and related documentation for the
            period required by applicable laws and regulations regarding medical
            records, or as specified in our agreements with healthcare
            providers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, including:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              The right to access the personal information we have about you
            </li>
            <li>
              The right to request that we correct inaccurate personal
              information
            </li>
            <li>
              The right to request that we delete your personal information
            </li>
            <li>
              The right to restrict or object to processing of your personal
              information
            </li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Children&apos;s Privacy</h2>
          <p>
            Our service is not intended for use by children under the age of 18.
            We do not knowingly collect personal information from children under
            18. If we become aware that we have collected personal information
            from a child under age 18 without verification of parental consent,
            we will take steps to remove that information from our servers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last Updated&quot; date at the top of this
            page. You are advised to review this Privacy Policy periodically for
            any changes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="list-none ml-4 space-y-2">
            <li>By email: privacy@praxisnotes.com</li>
            <li>
              By visiting the contact page on our website:{' '}
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
