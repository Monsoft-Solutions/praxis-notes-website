import { Metadata } from "next";
import Link from "next/link";
import Features from "website/components/sections/features";
import CTA from "website/components/sections/cta";
import { ArrowRight, BarChart2, ClipboardCheck, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Features | Praxis Note",
  description:
    "Explore the powerful features of Praxis Note - AI-powered ABA session notes, reviews, and documentation tools for RBTs, BCBAs, and clinics.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Designed for ABA Professionals
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Documentation Solution
            </h1>
            <p className="text-xl text-muted-foreground">
              Praxis Note empowers RBTs, BCBAs, and ABA clinics with AI-powered
              tools to create, review, and manage clinical documentation
              that&apos;s both clinically sound and insurance-compliant.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Create</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Generate compliant and detailed session notes in minutes with AI
                assistance.
              </p>
              <Link
                href="/features/create-aba-notes"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Review</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Upload existing notes for analysis, enhancement, and compliance
                verification.
              </p>
              <Link
                href="/features/review-aba-notes"
                className="text-purple-600 dark:text-purple-400 font-medium flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart2 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Track</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Monitor client progress, intervention effectiveness, and
                treatment outcomes.
              </p>
              <Link
                href="/features/track-aba-progress"
                className="text-green-600 dark:text-green-400 font-medium flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Comply</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ensure all documentation meets HIPAA, insurance, and regulatory
                requirements.
              </p>
              <Link
                href="/features/hipaa-compliant-aba"
                className="text-amber-600 dark:text-amber-400 font-medium flex items-center hover:underline"
              >
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="create"></div>
      <Features />

      <div id="review" className="pt-16"></div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Note Review & Enhancement
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI-powered review system analyzes your existing notes,
              provides improvement suggestions, and ensures documentation meets
              clinical and billing standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full"></div>
              <h3 className="text-xl font-semibold mb-3 relative z-10">
                Documentation Gap Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 relative z-10">
                Identifies missing elements in your notes that could impact
                billing or clinical clarity, including:
              </p>
              <ul className="space-y-2 relative z-10">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Missing behavioral definitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Incomplete intervention descriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Insufficient progress measurement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Billing code requirement gaps</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full"></div>
              <h3 className="text-xl font-semibold mb-3 relative z-10">
                Clinical Language Enhancement
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 relative z-10">
                Improves the clarity and professionalism of your clinical
                documentation:
              </p>
              <ul className="space-y-2 relative z-10">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Objective behavioral descriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Professional clinical terminology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Clear antecedent-behavior-consequence chains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Evidence-based intervention phrasing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full"></div>
              <h3 className="text-xl font-semibold mb-3 relative z-10">
                Compliance Verification
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 relative z-10">
                Ensures your documentation meets all necessary requirements:
              </p>
              <ul className="space-y-2 relative z-10">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Insurance billing code compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>HIPAA-compliant language</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Medicaid/Medicare documentation standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Session length and service type validation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div id="track" className="pt-16"></div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                Data-Driven Decisions
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Advanced Reporting & Analytics
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Behavior Tracking & Visualization
                    </h3>
                    <p className="text-muted-foreground">
                      Generate charts and graphs showing behavior frequency,
                      duration, and intensity across sessions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Goal Progress Monitoring
                    </h3>
                    <p className="text-muted-foreground">
                      Track client progress toward goals with visual indicators
                      and milestone tracking.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Intervention Effectiveness Analysis
                    </h3>
                    <p className="text-muted-foreground">
                      Compare intervention strategies with data-driven insights
                      to identify the most effective approaches.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Custom Report Generation
                    </h3>
                    <p className="text-muted-foreground">
                      Create professional reports for stakeholders, parents,
                      schools, and insurance providers.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-square md:aspect-[4/3] w-full bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 flex items-center justify-center">
                <p className="text-2xl font-semibold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                  Analytics Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="comply" className="pt-16"></div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
              <div className="aspect-square md:aspect-[4/3] w-full bg-gradient-to-br from-amber-100 to-red-100 dark:from-amber-900/20 dark:to-red-900/20 flex items-center justify-center">
                <p className="text-2xl font-semibold bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">
                  Compliance Dashboard
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
                Complete Compliance
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Billing & Regulatory Compliance
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Insurance Billing Support
                    </h3>
                    <p className="text-muted-foreground">
                      Ensure your notes meet specific CPT code requirements to
                      maximize reimbursement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">
                      HIPAA-Compliant Security
                    </h3>
                    <p className="text-muted-foreground">
                      End-to-end encryption and secure client data storage meet
                      all privacy requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Audit-Ready Documentation
                    </h3>
                    <p className="text-muted-foreground">
                      Maintain complete audit trails and documentation that
                      meets regulatory requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Automatic Compliance Checks
                    </h3>
                    <p className="text-muted-foreground">
                      AI-powered verification ensures your notes meet all
                      clinical and regulatory standards.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
