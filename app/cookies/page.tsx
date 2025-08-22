import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - Website Cookies & Tracking Information',
  description:
    'Learn about how Praxis Notes uses cookies and other tracking technologies on our website. Understand our cookie usage, privacy controls, and your preferences.',

  // Keywords for SEO
  keywords: [
    'cookie policy',
    'website cookies',
    'tracking technologies',
    'privacy controls',
    'cookie preferences',
    'web analytics',
    'cookie consent',
    'browser cookies',
    'tracking pixels',
    'cookie management',
    'privacy settings',
    'web tracking',
  ].join(', '),

  // Canonical URL
  alternates: {
    canonical: 'https://praxisnotes.com/cookies',
  },

  // Open Graph for social sharing
  openGraph: {
    title: 'Cookie Policy - Praxis Notes',
    description:
      'Learn about our cookie usage and tracking technologies. Manage your cookie preferences and privacy settings.',
    url: 'https://praxisnotes.com/cookies',
    siteName: 'Praxis Notes',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary',
    title: 'Praxis Notes Cookie Policy',
    description:
      'Our cookie policy explaining website tracking and your privacy controls.',
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

export default function CookiesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Cookie Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated: April 7, 2025
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            This Cookie Policy explains how Praxis Notes (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
            technologies to recognize you when you visit our website and
            application (the &quot;Service&quot;). It explains what these
            technologies are and why we use them, as well as your rights to
            control our use of them.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. Cookies are widely used by
            website owners in order to make their websites work, or to work more
            efficiently, as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, Praxis Notes) are
            called &quot;first-party cookies&quot;. Cookies set by parties other
            than the website owner are called &quot;third-party cookies&quot;.
            Third-party cookies enable third-party features or functionality to
            be provided on or through the website (e.g., advertising,
            interactive content, and analytics). The parties that set these
            third-party cookies can recognize your computer both when it visits
            the website in question and also when it visits certain other
            websites.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why do we use cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some
            cookies are required for technical reasons in order for our Service
            to operate, and we refer to these as &quot;essential&quot; or
            &quot;strictly necessary&quot; cookies. Other cookies also enable us
            to track and target the interests of our users to enhance the
            experience on our Service. Third parties serve cookies through our
            Service for analytics and other purposes.
          </p>
          <p>
            The specific types of first and third-party cookies served through
            our Service and the purposes they perform are described below:
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Types of cookies we use</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">Essential Cookies</h3>
              <p className="mt-2">
                These cookies are strictly necessary to provide you with
                services available through our Service and to use some of its
                features, such as access to secure areas. Because these cookies
                are strictly necessary to deliver the Service, you cannot refuse
                them without impacting how our Service functions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Performance and Functionality Cookies
              </h3>
              <p className="mt-2">
                These cookies are used to enhance the performance and
                functionality of our Service but are non-essential to their use.
                However, without these cookies, certain functionality may become
                unavailable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                Analytics and Customization Cookies
              </h3>
              <p className="mt-2">
                These cookies collect information that is used either in
                aggregate form to help us understand how our Service is being
                used or how effective our marketing campaigns are, or to help us
                customize our Service for you.
              </p>
              <p className="mt-2">
                <strong>Google Analytics:</strong> We use Google Analytics to
                help us understand how our users use the Service. Google
                Analytics uses cookies to collect information such as how often
                users visit the Service, what pages they visit, and what other
                sites they used prior to coming to our Service. We use the
                information we get from Google Analytics only to improve our
                Service. Google Analytics collects only the IP address assigned
                to you on the date you visit the Service, rather than your name
                or other identifying information. We do not combine the
                information collected through the use of Google Analytics with
                personally identifiable information. Google&apos;s ability to
                use and share information collected by Google Analytics about
                your visits to the Service is restricted by the Google Analytics
                Terms of Use and the Google Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Marketing Cookies</h3>
              <p className="mt-2">
                These cookies are used to make advertising messages more
                relevant to you. They perform functions like preventing the same
                ad from continuously reappearing, ensuring that ads are properly
                displayed for advertisers, and in some cases selecting
                advertisements that are based on your interests.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Social Media Cookies</h3>
              <p className="mt-2">
                These cookies are used to enable you to share pages and content
                that you find interesting on our Service through third-party
                social networking and other websites. These cookies may also be
                used for advertising purposes.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How can you control cookies?
          </h2>
          <p>
            You have the right to decide whether to accept or reject cookies.
            You can exercise your cookie preferences by clicking on the
            appropriate opt-out links provided below.
          </p>
          <p>
            You can set or amend your web browser controls to accept or refuse
            cookies. If you choose to reject cookies, you may still use our
            Service though your access to some functionality and areas of our
            Service may be restricted. As the means by which you can refuse
            cookies through your web browser controls vary from
            browser-to-browser, you should visit your browser&apos;s help menu
            for more information.
          </p>
          <p>
            In addition, most advertising networks offer you a way to opt out of
            targeted advertising. If you would like to find out more
            information, please visit{' '}
            <a
              href="http://www.aboutads.info/choices/"
              className="text-blue-600 hover:underline"
            >
              http://www.aboutads.info/choices/
            </a>{' '}
            or{' '}
            <a
              href="http://www.youronlinechoices.com"
              className="text-blue-600 hover:underline"
            >
              http://www.youronlinechoices.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Do Not Track</h2>
          <p>
            Some browsers have a &quot;Do Not Track&quot; feature that signals
            to websites that you visit that you do not want to have your online
            activity tracked. No standard has been adopted for how &quot;Do Not
            Track&quot; should work, so our Service currently does not respond
            to &quot;Do Not Track&quot; signals.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How often will we update this Cookie Policy?
          </h2>
          <p>
            We may update this Cookie Policy from time to time in order to
            reflect, for example, changes to the cookies we use or for other
            operational, legal, or regulatory reasons. Please therefore re-visit
            this Cookie Policy regularly to stay informed about our use of
            cookies and related technologies.
          </p>
          <p>
            The date at the top of this Cookie Policy indicates when it was last
            updated.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Where can you get further information?
          </h2>
          <p>
            If you have any questions about our use of cookies or other
            technologies, please email us at privacy@praxisnotes.com or contact
            us via our website at{' '}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact Us
            </a>
            .
          </p>
        </section>

        <section className="space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-semibold">Cookie Preferences</h2>
          <p>
            You can manage your cookie preferences by adjusting the settings
            below:
          </p>
          <div className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Essential Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Required for the website to function properly
                </p>
              </div>
              <div className="relative inline-block w-10 h-5 rounded-full bg-gray-300 dark:bg-gray-700 pointer-events-none opacity-50">
                <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transform translate-x-5"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Performance & Functionality</h3>
                <p className="text-sm text-muted-foreground">
                  Enable enhanced features and performance
                </p>
              </div>
              <div className="relative inline-block w-10 h-5 rounded-full bg-blue-600 dark:bg-blue-500">
                <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transform translate-x-5"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Analytics & Customization</h3>
                <p className="text-sm text-muted-foreground">
                  Help us improve our website through analytics data
                </p>
              </div>
              <div className="relative inline-block w-10 h-5 rounded-full bg-blue-600 dark:bg-blue-500">
                <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transform translate-x-5"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Marketing Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  Allow personalized marketing content
                </p>
              </div>
              <div className="relative inline-block w-10 h-5 rounded-full bg-gray-300 dark:bg-gray-700">
                <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full"></div>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Save Preferences
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
