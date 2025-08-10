import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Pencil,
  FileText,
  Save,
  Zap,
  Clock,
  User,
  Shield,
  Sparkles,
  ArrowRight,
  Timer,
  Brain,
  Target,
  CheckCircle,
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-green-100"></div>

        {/* Hand-drawn background decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-20 top-32 h-14 w-14 rounded-full border-2 border-blue-200 opacity-20 hidden lg:block"
            style={{ transform: "rotate(0.1deg)" }}
          ></div>
          <div
            className="absolute right-24 top-40 h-10 w-10 border-2 border-green-200 opacity-25 hidden lg:block"
            style={{
              transform: "rotate(-0.15deg)",
              borderRadius: "14px 18px 12px 20px",
            }}
          ></div>
          <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-yellow-300 opacity-40 hidden lg:block"></div>
          <div className="absolute left-1/5 bottom-1/3 h-2 w-2 rounded-full bg-blue-300 opacity-35 hidden lg:block"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Breadcrumb */}
              <Link
                href="/features"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-nunito font-medium lg:hidden"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Back to Features
              </Link>

              {/* Badge */}
              <div
                className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-blue-200"
                style={{ borderRadius: "20px 26px 18px 30px" }}
              >
                <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-blue-600 pt-1">
                  <Zap className="inline w-4 h-4 mr-2" />
                  AI-Powered Documentation
                </span>
              </div>

              {/* Main content */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold leading-tight text-gray-800">
                  Create ABA Notes in
                  <span className="text-blue-500"> Seconds</span>
                  <br />
                  <span className="text-green-500">Not Hours</span>
                </h1>

                <p className="text-xl md:text-2xl font-nunito text-gray-600 leading-relaxed max-w-2xl">
                  Transform your session data into comprehensive,
                  insurance-compliant documentation that saves 75% of your
                  administrative time.
                </p>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {[
                  {
                    icon: Timer,
                    number: "75%",
                    label: "Time Saved",
                    color: "blue",
                  },
                  {
                    icon: CheckCircle,
                    number: "100%",
                    label: "Compliant",
                    color: "green",
                  },
                  {
                    icon: FileText,
                    number: "5",
                    label: "CPT Codes",
                    color: "orange",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`relative bg-white p-4 shadow-md border-2 border-${stat.color}-200 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    style={{
                      borderRadius:
                        index === 0
                          ? "16px 20px 14px 22px"
                          : index === 1
                          ? "18px 14px 20px 16px"
                          : "20px 16px 18px 24px",
                    }}
                  >
                    <div
                      className={`absolute -top-1 ${
                        index === 0
                          ? "left-1/2 -translate-x-1/2"
                          : index === 1
                          ? "right-3"
                          : "left-3"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full bg-${stat.color}-400 shadow-sm`}
                      ></div>
                    </div>

                    <div className="pt-2">
                      <stat.icon
                        className={`w-5 h-5 mx-auto mb-2 text-${stat.color}-500`}
                      />
                      <div
                        className={`text-2xl font-quicksand font-bold text-${stat.color}-600 mb-1`}
                      >
                        {stat.number}
                      </div>
                      <div className="text-xs font-nunito text-gray-600 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pricing">
                  <button
                    className="h-12 px-8 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all hover:shadow-md"
                    style={{ borderRadius: "14px 18px 12px 20px" }}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </button>
                </Link>

                <Link href="#how-it-works">
                  <button
                    className="h-12 px-8 border-2 border-green-300 text-green-600 hover:bg-green-50 font-quicksand font-semibold transition-all hover:shadow-md"
                    style={{ borderRadius: "12px 16px 14px 18px" }}
                  >
                    Learn How It Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right side - Generator mockup */}
            <div className="relative">
              <div
                className="relative bg-white p-6 shadow-2xl border-2 border-green-200"
                style={{ borderRadius: "32px 28px 36px 24px" }}
              >
                <div className="absolute -top-2 right-16 h-4 w-4 -translate-x-1/2 transform">
                  <div className="h-full w-full rounded-full bg-green-400 shadow-sm"></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div
                  className="relative h-80 lg:h-96 w-full bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden p-6"
                  style={{ borderRadius: "24px 20px 28px 16px" }}
                >
                  {/* Generator Interface Mockup */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-quicksand font-bold text-gray-700">
                        Session Note Generator
                      </h3>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>

                    {/* Form fields mockup */}
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Client Name
                        </div>
                        <div
                          className="h-8 bg-white rounded border-2 border-blue-200"
                          style={{ borderRadius: "8px 10px 6px 12px" }}
                        ></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Date</div>
                          <div
                            className="h-8 bg-white rounded border-2 border-green-200"
                            style={{ borderRadius: "6px 12px 8px 10px" }}
                          ></div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">
                            Duration
                          </div>
                          <div
                            className="h-8 bg-white rounded border-2 border-orange-200"
                            style={{ borderRadius: "10px 6px 12px 8px" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Target Behaviors
                        </div>
                        <div
                          className="h-16 bg-white rounded border-2 border-purple-200"
                          style={{ borderRadius: "12px 8px 10px 14px" }}
                        ></div>
                      </div>
                    </div>

                    <button
                      className="w-full h-10 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold rounded flex items-center justify-center gap-2 mt-4"
                      style={{ borderRadius: "10px 14px 8px 16px" }}
                    >
                      <Zap className="w-4 h-4" />
                      Generate Note
                    </button>
                  </div>

                  {/* Result preview */}
                  <div className="absolute bottom-4 right-4">
                    <div
                      className="bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md border border-green-200"
                      style={{ borderRadius: "12px 16px 10px 14px" }}
                    >
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-quicksand font-semibold text-gray-700">
                          AI-Powered
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <div
                className="absolute -left-4 top-20 bg-blue-100 border-2 border-blue-200 p-3 shadow-lg hidden lg:block"
                style={{
                  borderRadius: "16px 20px 14px 18px",
                  transform: "rotate(-1.5deg)",
                }}
              >
                <div className="text-center">
                  <Timer className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                  <div className="text-xs font-quicksand font-semibold text-blue-700">
                    Fast
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-6 bottom-16 bg-orange-100 border-2 border-orange-200 p-3 shadow-lg hidden lg:block"
                style={{
                  borderRadius: "14px 18px 12px 16px",
                  transform: "rotate(2deg)",
                }}
              >
                <div className="text-center">
                  <CheckCircle className="w-5 h-5 mx-auto mb-1 text-orange-600" />
                  <div className="text-xs font-quicksand font-semibold text-orange-700">
                    Accurate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Savings Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-yellow-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div
                className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-green-200"
                style={{ borderRadius: "18px 24px 16px 28px" }}
              >
                <div className="absolute -top-1.5 left-8 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-green-600 pt-1">
                  <Target className="inline w-4 h-4 mr-2" />
                  Maximum Efficiency
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold text-gray-800">
                Save Up to <span className="text-green-500">75%</span>
                <br />
                of Your Documentation Time
              </h2>

              <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
                Documentation is essential but time-consuming. Our platform
                reduces 3+ hours of weekly paperwork down to minutes, giving you
                more time to focus on what matters most – your clients.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Supports All ABA CPT Codes",
                    description:
                      "Generate compliant notes for codes 97153–97158, matching each service type's requirements.",
                    color: "green",
                  },
                  {
                    title: "BCBA & RBT Configurable Templates",
                    description:
                      "Customize templates to match your clinic's style and requirements.",
                    color: "blue",
                  },
                  {
                    title: "Insurance-Ready Formatting",
                    description:
                      "Notes are structured to meet billing requirements and reduce claim rejections.",
                    color: "orange",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative bg-white p-4 shadow-lg border-2 border-${item.color}-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                    style={{
                      borderRadius:
                        index === 0
                          ? "20px 16px 24px 12px"
                          : index === 1
                          ? "16px 24px 12px 20px"
                          : "24px 12px 20px 16px",
                    }}
                  >
                    <div
                      className={`absolute -top-2 ${
                        index % 2 === 0 ? "left-6" : "right-6"
                      }`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-${item.color}-400 shadow-sm`}
                      ></div>
                      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                    </div>

                    <div className="pt-2 flex items-start space-x-4">
                      <div
                        className={`bg-${item.color}-100 p-2 rounded-lg flex-shrink-0`}
                        style={{ borderRadius: "8px 12px 6px 10px" }}
                      >
                        <CheckCircle
                          className={`w-5 h-5 text-${item.color}-600`}
                        />
                      </div>
                      <div>
                        <h3 className="font-quicksand font-bold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 font-nunito text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Visual mockup */}
            <div className="relative">
              <div
                className="relative bg-white p-6 shadow-2xl border-2 border-blue-200"
                style={{ borderRadius: "28px 32px 24px 36px" }}
              >
                <div className="absolute -top-2 left-12 h-4 w-4 -translate-x-1/2 transform">
                  <div className="h-full w-full rounded-full bg-blue-400 shadow-sm"></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div
                  className="relative h-80 lg:h-96 w-full bg-gradient-to-br from-green-50 to-blue-50 p-6"
                  style={{ borderRadius: "20px 24px 16px 28px" }}
                >
                  <div className="text-center space-y-6">
                    <div className="text-5xl mb-4">⏱️</div>
                    <h3 className="text-2xl font-quicksand font-bold text-gray-700">
                      Time Comparison
                    </h3>

                    {/* Before/After comparison */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-nunito text-gray-600">
                          Traditional Method:
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-6 bg-red-300 rounded"
                            ></div>
                          ))}
                        </div>
                        <span className="text-sm font-quicksand font-bold text-red-600">
                          3+ hrs
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-nunito text-gray-600">
                          With Praxis Notes:
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-6 bg-green-400 rounded"
                            ></div>
                          ))}
                        </div>
                        <span className="text-sm font-quicksand font-bold text-green-600">
                          45 min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="relative py-16 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-orange-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div
              className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-purple-200 mb-8"
              style={{ borderRadius: "20px 26px 18px 30px" }}
            >
              <div className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-orange-400 shadow-sm"></div>
              <span className="text-sm font-quicksand font-semibold text-purple-600 pt-1">
                <Brain className="inline w-4 h-4 mr-2" />
                Simple Process
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold mb-6 text-gray-800">
              How It <span className="text-purple-500">Works</span>
            </h2>

            <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
              Our AI-powered system makes creating professional ABA session
              notes faster and easier than ever before, without sacrificing
              quality or compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Pencil,
                title: "Enter Session Data",
                description:
                  "Quickly input session information using our streamlined forms or record data during your session.",
                color: "blue",
                step: "01",
              },
              {
                icon: Sparkles,
                title: "AI Note Generation",
                description:
                  "Our advanced AI processes your data and generates a complete, professional note in seconds.",
                color: "purple",
                step: "02",
              },
              {
                icon: Save,
                title: "Review & Finalize",
                description:
                  "Make any needed adjustments and save your insurance-ready, compliant documentation.",
                color: "green",
                step: "03",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative bg-white p-8 shadow-xl border-2 border-${step.color}-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                style={{
                  borderRadius:
                    index === 0
                      ? "28px 24px 32px 20px"
                      : index === 1
                      ? "24px 32px 20px 28px"
                      : "32px 20px 28px 24px",
                }}
              >
                {/* Thumb tack */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <div
                    className={`h-4 w-4 rounded-full bg-${step.color}-400 shadow-sm`}
                  ></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                {/* Step number */}
                <div
                  className={`absolute top-6 right-6 w-8 h-8 bg-${step.color}-100 rounded-full flex items-center justify-center`}
                >
                  <span
                    className={`text-${step.color}-600 font-quicksand font-bold text-sm`}
                  >
                    {step.step}
                  </span>
                </div>

                <div className="pt-4">
                  <div
                    className={`bg-${step.color}-100 p-4 rounded-xl w-fit mb-6`}
                    style={{ borderRadius: "16px 20px 14px 18px" }}
                  >
                    <step.icon className={`w-8 h-8 text-${step.color}-600`} />
                  </div>

                  <h3 className="text-xl lg:text-2xl font-quicksand font-bold mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-nunito leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-green-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold mb-6 text-gray-800">
              Key <span className="text-blue-500">Features</span>
            </h2>
            <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
              Our note creation system includes everything you need to
              streamline your ABA documentation workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Multiple Note Formats",
                description:
                  "Support for SOAP notes, narrative notes, progress notes, and custom formats.",
                color: "blue",
              },
              {
                icon: Clock,
                title: "Quick-Entry Forms",
                description:
                  "Optimized data entry forms that minimize typing and maximize efficiency.",
                color: "purple",
              },
              {
                icon: User,
                title: "Client Templates",
                description:
                  "Save client-specific templates to streamline recurring documentation.",
                color: "green",
              },
              {
                icon: Shield,
                title: "HIPAA Compliant",
                description:
                  "End-to-end encryption and secure processing of all client information.",
                color: "red",
              },
              {
                icon: Brain,
                title: "Medical Vocabulary",
                description:
                  "Professional clinical terminology appropriate for medical documentation.",
                color: "amber",
              },
              {
                icon: Zap,
                title: "Smart Suggestions",
                description:
                  "AI-powered recommendations to improve the quality of your documentation.",
                color: "indigo",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white p-6 shadow-xl border-2 border-${feature.color}-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                style={{
                  borderRadius:
                    index % 3 === 0
                      ? "20px 16px 24px 12px"
                      : index % 3 === 1
                      ? "16px 24px 12px 20px"
                      : "24px 12px 20px 16px",
                }}
              >
                {/* Thumb tack */}
                <div
                  className={`absolute -top-2 ${
                    index % 2 === 0 ? "left-8" : "right-8"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-${feature.color}-400 shadow-sm`}
                  ></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div className="pt-4">
                  <div
                    className={`bg-${feature.color}-100 p-3 rounded-xl w-fit mb-4`}
                    style={{ borderRadius: "12px 16px 10px 14px" }}
                  >
                    <feature.icon
                      className={`w-6 h-6 text-${feature.color}-600`}
                    />
                  </div>

                  <h3 className="text-lg font-quicksand font-bold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-nunito leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared CTA component */}
      <FeaturesCTA />
    </>
  );
}
