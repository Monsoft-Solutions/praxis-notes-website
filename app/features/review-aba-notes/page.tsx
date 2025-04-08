import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Check,
  SearchCheck,
  ArrowUpDown,
  RefreshCw,
  FileCheck,
  FileSearch,
  MessagesSquare,
  PenLine,
  FileWarning,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import FeaturesCTA from "website/components/sections/features-shared-cta";

export const metadata: Metadata = {
  title: "Review ABA Notes | Praxis Note",
  description:
    "Upload existing ABA session notes for AI-powered analysis, improvement suggestions, and compliance verification to ensure clinical and billing standards.",
};

export default function ReviewNotesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50/70 to-transparent dark:from-purple-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center">
            <Link
              href="/features"
              className="flex items-center text-purple-600 dark:text-purple-400 mb-6 hover:underline"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Features
            </Link>

            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                AI-Powered Analysis
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Enhance Your Existing ABA Notes
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our intelligent review system analyzes your notes, provides
                improvement suggestions, and ensures documentation meets
                clinical and billing standards.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/pricing"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center"
                >
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="px-8 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Elevate the Quality of Your Documentation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ensure your ABA session notes meet the highest clinical
                standards and insurance requirements. Our review system
                identifies gaps, enhances language, and verifies compliance.
              </p>

              <ul className="space-y-4">
                {[
                  {
                    title: "Identify Documentation Gaps",
                    description:
                      "Discover missing elements that could impact billing or clinical clarity.",
                  },
                  {
                    title: "Enhance Clinical Language",
                    description:
                      "Improve clarity with professional, objective terminology and descriptions.",
                  },
                  {
                    title: "Verify Insurance Compliance",
                    description:
                      "Ensure notes meet specific CPT code requirements to reduce claim rejections.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-video w-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <SearchCheck className="w-5 h-5 text-purple-500" />
                      <span className="font-medium">Note Review Assistant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Upload Note
                        </label>
                        <div className="h-12 w-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Drop file or click to upload
                          </span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Session Type
                        </label>
                        <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                      </div>
                      <button className="w-full py-2 bg-purple-600 text-white rounded flex items-center justify-center gap-2">
                        <SearchCheck className="w-4 h-4" />
                        <span>Analyze Note</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI-powered note review process is quick and easy, turning good
              documentation into exceptional documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <FileSearch className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                ),
                title: "Upload Your Note",
                description:
                  "Simply upload your existing ABA session notes in any common format (DOC, PDF, or text).",
              },
              {
                icon: (
                  <ArrowUpDown className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                ),
                title: "AI Analysis",
                description:
                  "Our AI examines your documentation for clinical quality, language, formatting, and compliance.",
              },
              {
                icon: (
                  <RefreshCw className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                ),
                title: "Review & Implement",
                description:
                  "Receive detailed suggestions and one-click improvements to enhance your documentation.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden"
              >
                <div className="absolute right-4 top-4 w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-purple-700 dark:text-purple-300 font-bold">
                  {index + 1}
                </div>
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We Check
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive review system evaluates multiple aspects of your
              documentation to ensure excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileCheck className="w-6 h-6 text-green-600" />,
                title: "Billing Requirements",
                description:
                  "Verification of required elements for CPT codes 97153–97158 to ensure insurance compliance.",
              },
              {
                icon: <PenLine className="w-6 h-6 text-purple-600" />,
                title: "Clinical Terminology",
                description:
                  "Assessment of language quality and professional clinical vocabulary usage.",
              },
              {
                icon: <MessagesSquare className="w-6 h-6 text-indigo-600" />,
                title: "Behavioral Definitions",
                description:
                  "Verification of clear, objective descriptions of behaviors and interventions.",
              },
              {
                icon: <FileWarning className="w-6 h-6 text-amber-600" />,
                title: "Documentation Gaps",
                description:
                  "Identification of missing information that could impact clinical clarity or billing.",
              },
              {
                icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
                title: "Progress Measurement",
                description:
                  "Evaluation of data collection and progress reporting completeness.",
              },
              {
                icon: <SearchCheck className="w-6 h-6 text-red-600" />,
                title: "HIPAA Compliance",
                description:
                  "Screening for potential privacy issues or inappropriate language in documentation.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                Real Results
              </span>
              <h2 className="text-3xl font-bold mb-6">
                From Good to Exceptional Documentation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                See how our note review system transforms adequate documentation
                into clinically sound, compliant, and professional session notes
                that impress stakeholders and pass audits.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-12 flex-shrink-0 flex items-center justify-center bg-red-100 dark:bg-red-900/20 rounded-lg">
                    <span className="font-semibold text-red-600 dark:text-red-400">
                      Before
                    </span>
                  </div>
                  <div className="text-sm bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                    &quot;Client got upset during session and had a tantrum.
                    Used token system. Made some progress on goals.&quot;
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-12 flex-shrink-0 flex items-center justify-center bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      After
                    </span>
                  </div>
                  <div className="text-sm bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                    &quot;Client exhibited frustration behaviors (crying,
                    throwing materials) when presented with non-preferred tasks.
                    Implemented differential reinforcement procedure with token
                    economy (1 token per 5 minutes of engagement). Client
                    demonstrated 70% compliance with program objectives, an
                    increase from 55% in previous session.&quot;
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-purple-600 dark:text-purple-400 text-4xl font-bold mb-2">
                  95%
                </div>
                <h3 className="text-lg font-semibold mb-2">Compliance Rate</h3>
                <p className="text-sm text-muted-foreground">
                  Notes reviewed by our system achieve near-perfect insurance
                  compliance rates.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-purple-600 dark:text-purple-400 text-4xl font-bold mb-2">
                  85%
                </div>
                <h3 className="text-lg font-semibold mb-2">Fewer Rejections</h3>
                <p className="text-sm text-muted-foreground">
                  Clinics report significantly reduced insurance claim
                  rejections after implementing our system.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-purple-600 dark:text-purple-400 text-4xl font-bold mb-2">
                  40%
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Quality Improvement
                </h3>
                <p className="text-sm text-muted-foreground">
                  Average quality score improvement in clinical documentation
                  after review.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-purple-600 dark:text-purple-400 text-4xl font-bold mb-2">
                  5min
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Average Review Time
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our AI completes comprehensive note reviews in minutes, not
                  hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesCTA
        title="Ready to Elevate Your Documentation Quality?"
        description="Join forward-thinking ABA professionals who maintain the highest standards in clinical documentation while reducing administrative stress."
      />
    </>
  );
}
