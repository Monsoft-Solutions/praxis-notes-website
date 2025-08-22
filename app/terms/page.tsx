import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Legal Terms & Conditions',
  description:
    'Read the terms of service for Praxis Notes, our AI-powered ABA session notes platform. Understand user rights, responsibilities, and HIPAA compliance requirements.',

  // Keywords for SEO
  keywords: [
    'terms of service',
    'legal terms',
    'user agreement',
    'ABA software terms',
    'privacy policy',
    'user rights',
    'service conditions',
    'HIPAA terms',
    'software license',
    'platform agreement',
    'usage policy',
    'legal compliance',
  ].join(', '),

  // Canonical URL
  alternates: {
    canonical: 'https://praxisnotes.com/terms',
  },

  // Open Graph for social sharing
  openGraph: {
    title: 'Terms of Service - Praxis Notes',
    description:
      'Read our terms of service for AI-powered ABA documentation platform. Understanding your rights and responsibilities.',
    url: 'https://praxisnotes.com/terms',
    siteName: 'Praxis Notes',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary',
    title: 'Praxis Notes Terms of Service',
    description:
      'Our terms of service and user agreement for the ABA documentation platform.',
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

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated: April 7, 2025
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Praxis Notes. These Terms of Service (&quot;Terms&quot;)
            govern your access to and use of the Praxis Notes website and
            application (the &quot;Service&quot;), and any information, text,
            graphics, or other materials uploaded, downloaded, or appearing on
            the Service. By accessing or using the Service, you agree to be
            bound by these Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Acceptance of Terms</h2>
          <p>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you do not agree to all the terms and conditions of this
            agreement, you may not access the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. We will provide notice of any changes by
            posting the new Terms on this page. Your continued use of the
            Service after any such changes constitutes your acceptance of the
            new Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Definitions</h2>
          <p>
            Throughout these Terms, we may use certain terms with specific
            meanings:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              &quot;Service&quot; refers to the Praxis Notes application and
              website.
            </li>
            <li>
              &quot;User&quot; refers to individuals who are authorized to use
              the Service.
            </li>
            <li>
              &quot;Content&quot; refers to all information, data, text, and
              other materials included in the Service.
            </li>
            <li>
              &quot;Client Data&quot; refers to data related to the clients or
              patients of the User.
            </li>
            <li>
              &quot;PHI&quot; refers to Protected Health Information as defined
              by HIPAA.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            5. Account Registration and Security
          </h2>
          <p>
            To use certain features of the Service, you must register for an
            account. You agree to provide accurate, current, and complete
            information during the registration process and to update such
            information to keep it accurate, current, and complete.
          </p>
          <p>
            You are responsible for safeguarding your password and for all
            activities that occur under your account. You agree not to disclose
            your password to any third party. You must notify us immediately
            upon becoming aware of any breach of security or unauthorized use of
            your account.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. HIPAA Compliance</h2>
          <p>
            If you are a covered entity or business associate under the Health
            Insurance Portability and Accountability Act (&quot;HIPAA&quot;),
            and you use our Service to create, receive, maintain, or transmit
            Protected Health Information (&quot;PHI&quot;), the following
            applies:
          </p>
          <p>
            Before using our Service to process PHI, you must enter into a
            Business Associate Agreement (&quot;BAA&quot;) with us. The BAA will
            govern the terms and conditions of the use and disclosure of PHI and
            will take precedence over these Terms to the extent there is a
            conflict with respect to PHI.
          </p>
          <p>
            You agree that you will not use the Service to create, receive,
            maintain, or transmit PHI unless and until a BAA is in place between
            you and Praxis Notes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. License and Service Use</h2>
          <p>
            Subject to these Terms, we grant you a limited, non-exclusive,
            non-transferable, non-sublicensable license to use the Service for
            your professional activities related to Applied Behavior Analysis
            (ABA) therapy. This license is for the sole purpose of enabling you
            to use the Service as provided by Praxis Notes, in the manner
            permitted by these Terms.
          </p>
          <p>You may not:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              Copy, modify, or create derivative works based on the Service
            </li>
            <li>
              Reverse engineer, decompile, or attempt to extract the source code
              of the Service
            </li>
            <li>
              Access the Service in order to build a similar or competitive
              product or service
            </li>
            <li>
              Use the Service for any illegal purpose or in violation of any
              local, state, national, or international law
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the
              Service
            </li>
            <li>
              Attempt to gain unauthorized access to the Service or its related
              systems or networks
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            8. User Content and Client Data
          </h2>
          <p>
            You retain ownership of all Client Data you provide to the Service.
            By submitting Client Data to the Service, you grant us a worldwide,
            non-exclusive license to use, process, and store such data solely
            for the purposes of providing and improving the Service.
          </p>
          <p>You represent and warrant that:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              You own or have the necessary licenses, rights, consents, and
              permissions to use and authorize us to use all Client Data
            </li>
            <li>
              You have obtained all necessary consents and made all necessary
              disclosures to your clients regarding your use of the Service
            </li>
            <li>
              The Client Data does not and will not infringe, violate, or
              misappropriate any third-party right
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            9. Billing and Subscription
          </h2>
          <p>
            Some aspects of the Service require payment of fees. By subscribing
            to a paid plan, you agree to pay all fees associated with the plan
            you select.
          </p>
          <p>Unless otherwise stated:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>All fees are quoted in U.S. Dollars and are non-refundable</li>
            <li>
              We reserve the right to change the fees for any of our services at
              any time
            </li>
            <li>
              Subscriptions automatically renew unless canceled before the
              renewal date
            </li>
            <li>
              You are responsible for all taxes associated with your use of the
              Service
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            10. Data Security and Privacy
          </h2>
          <p>
            We implement reasonable security measures to protect the security of
            your information. However, we cannot guarantee that unauthorized
            third parties will never be able to defeat those measures or use
            your personal information for improper purposes.
          </p>
          <p>
            Your use of the Service is also governed by our Privacy Policy,
            which is incorporated into these Terms by reference.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">11. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms.
          </p>
          <p>
            Upon termination, your right to use the Service will immediately
            cease. If you wish to terminate your account, you may simply
            discontinue using the Service or contact us to request account
            deletion.
          </p>
          <p>
            All provisions of the Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity,
            and limitations of liability.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            12. Disclaimer of Warranties
          </h2>
          <p>
            THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; BASIS. PRAXIS NOTES AND ITS SUPPLIERS AND LICENSORS
            HEREBY DISCLAIM ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
            INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. NEITHER
            PRAXIS NOTES NOR ITS SUPPLIERS AND LICENSORS MAKES ANY WARRANTY THAT
            THE SERVICE WILL BE ERROR FREE OR THAT ACCESS THERETO WILL BE
            CONTINUOUS OR UNINTERRUPTED.
          </p>
          <p>
            YOU UNDERSTAND THAT YOU DOWNLOAD FROM, OR OTHERWISE OBTAIN CONTENT
            OR SERVICES THROUGH, THE SERVICE AT YOUR OWN DISCRETION AND RISK.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            13. Limitation of Liability
          </h2>
          <p>
            IN NO EVENT WILL PRAXIS NOTES, OR ITS SUPPLIERS OR LICENSORS, BE
            LIABLE WITH RESPECT TO ANY SUBJECT MATTER OF THIS AGREEMENT UNDER
            ANY CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER LEGAL OR
            EQUITABLE THEORY FOR: (I) ANY SPECIAL, INCIDENTAL OR CONSEQUENTIAL
            DAMAGES; (II) THE COST OF PROCUREMENT OF SUBSTITUTE PRODUCTS OR
            SERVICES; (III) FOR INTERRUPTION OF USE OR LOSS OR CORRUPTION OF
            DATA; OR (IV) FOR ANY AMOUNTS THAT EXCEED THE FEES PAID BY YOU TO
            PRAXIS NOTES UNDER THIS AGREEMENT DURING THE TWELVE (12) MONTH
            PERIOD PRIOR TO THE CAUSE OF ACTION. PRAXIS NOTES SHALL HAVE NO
            LIABILITY FOR ANY FAILURE OR DELAY DUE TO MATTERS BEYOND THEIR
            REASONABLE CONTROL.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            14. General Representation and Warranty
          </h2>
          <p>
            You represent and warrant that your use of the Service will be in
            accordance with these Terms, with any applicable laws and
            regulations, including without limitation any local laws or
            regulations in your country, state, city, or other governmental
            area, and with any applicable HIPAA regulations if you are a covered
            entity or business associate.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">15. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Praxis Notes, its
            contractors, and its licensors, and their respective directors,
            officers, employees, and agents from and against any and all claims
            and expenses, including attorneys&apos; fees, arising out of your
            use of the Service, including but not limited to your violation of
            these Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">16. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of the United States of America and the State of California,
            without regard to its conflict of law provisions. Our failure to
            enforce any right or provision of these Terms will not be considered
            a waiver of those rights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">17. Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between you and Praxis
            Note regarding our Service, and supersede and replace any prior
            agreements we might have between us regarding the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">18. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul className="list-none ml-4 space-y-2">
            <li>By email: legal@praxisnotes.com</li>
            <li>
              By visiting the contact page on our website:{' '}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
