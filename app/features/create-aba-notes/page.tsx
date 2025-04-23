import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Check,
  Pencil,
  LucideFileText,
  Save,
  Zap,
  FileText,
  Clock,
  User,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import FeaturesCTA from "website/components/sections/features-shared-cta";

export const metadata: Metadata = {
  title: "Create ABA Notes | Praxis Notes",
  description:
    "Generate detailed ABA session notes in seconds with our AI-powered tools. Save time on documentation and focus more on client care.",
};

export default function CreateNotesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center">
            <Link
              href="/features"
              className="flex items-center text-blue-600 dark:text-blue-400 mb-6 hover:underline"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Features
            </Link>

            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                AI-Powered Documentation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Create ABA Session Notes in Seconds
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our advanced AI technology transforms your session data into
                comprehensive, insurance-compliant documentation that saves
                hours of administrative work.
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
                  Learn How It Works
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
                Save Up to 75% of Your Documentation Time
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Documentation is essential but time-consuming. Our platform
                reduces 3+ hours of weekly paperwork down to minutes, giving you
                more time to focus on what matters most – your clients.
              </p>

              <ul className="space-y-4">
                {[
                  {
                    title: "Supports All ABA CPT Codes",
                    description:
                      "Generate compliant notes for codes 97153–97158, matching each service type's requirements.",
                  },
                  {
                    title: "BCBA & RBT Configurable Templates",
                    description:
                      "Customize templates to match your clinic's style and requirements.",
                  },
                  {
                    title: "Insurance-Ready Formatting",
                    description:
                      "Notes are structured to meet billing requirements and reduce claim rejections.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
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
              <div className="aspect-video w-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <span className="font-medium">
                        Session Note Generator
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {/* Step 1: Session Information */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Client Name
                        </label>
                        <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Date of Session
                          </label>
                          <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Location
                          </label>
                          <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Start Time
                          </label>
                          <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            End Time
                          </label>
                          <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Who was Present
                        </label>
                        <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                      </div>

                      {/* Visual representation of additional fields */}
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-sm font-bold mb-4">
                          Additional Information
                        </h3>

                        {/* Representation of more fields */}
                        <div className="space-y-3">
                          <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded opacity-70"></div>
                          <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded opacity-60"></div>
                          <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded opacity-50"></div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded opacity-40"></div>
                            <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded opacity-40"></div>
                          </div>
                          <div className="h-10 w-full bg-gray-100 dark:bg-gray-700 rounded opacity-30"></div>
                        </div>
                      </div>

                      <button className="w-full py-2 bg-blue-600 text-white rounded flex items-center justify-center gap-2 mt-6">
                        <Zap className="w-4 h-4" />
                        <span>Generate Note</span>
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
            <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI-powered system makes creating professional ABA session
              notes faster and easier than ever before, without sacrificing
              quality or compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Pencil className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                ),
                title: "Enter Session Data",
                description:
                  "Quickly input session information using our streamlined forms or record data during your session.",
              },
              {
                icon: (
                  <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                ),
                title: "AI Note Generation",
                description:
                  "Our advanced AI processes your data and generates a complete, professional note in seconds.",
              },
              {
                icon: (
                  <Save className="w-8 h-8 text-green-600 dark:text-green-400" />
                ),
                title: "Review & Finalize",
                description:
                  "Make any needed adjustments and save your insurance-ready, compliant documentation.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden"
              >
                <div className="absolute right-4 top-4 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">
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

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Our note creation system includes everything you need to
              streamline your ABA documentation workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-6 h-6 text-blue-600" />,
                title: "Multiple Note Formats",
                description:
                  "Support for SOAP notes, narrative notes, progress notes, and custom formats.",
              },
              {
                icon: <Clock className="w-6 h-6 text-purple-600" />,
                title: "Quick-Entry Forms",
                description:
                  "Optimized data entry forms that minimize typing and maximize efficiency.",
              },
              {
                icon: <User className="w-6 h-6 text-green-600" />,
                title: "Client Templates",
                description:
                  "Save client-specific templates to streamline recurring documentation.",
              },
              {
                icon: <Shield className="w-6 h-6 text-red-600" />,
                title: "HIPAA Compliant",
                description:
                  "End-to-end encryption and secure processing of all client information.",
              },
              {
                icon: <LucideFileText className="w-6 h-6 text-amber-600" />,
                title: "Medical Vocabulary",
                description:
                  "Professional clinical terminology appropriate for medical documentation.",
              },
              {
                icon: <Zap className="w-6 h-6 text-indigo-600" />,
                title: "Smart Suggestions",
                description:
                  "AI-powered recommendations to improve the quality of your documentation.",
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

      {/* Import the shared CTA component */}
      <FeaturesCTA />
    </>
  );
}
