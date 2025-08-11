import { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronLeft,
  CheckCircle,
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
  Target,
  Brain,
  Sparkles,
  TrendingUp,
  Shield,
  Timer,
} from 'lucide-react';
import FeaturesCTA from 'website/components/sections/features-shared-cta';

export const metadata: Metadata = {
  title: 'Review ABA Notes | Praxis Notes',
  description:
    'Upload existing ABA session notes for AI-powered analysis, improvement suggestions, and compliance verification to ensure clinical and billing standards.',
};

export default function ReviewNotesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100"></div>

        {/* Hand-drawn background decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-16 top-28 h-16 w-16 rounded-full border-2 border-purple-200 opacity-20 hidden lg:block"
            style={{ transform: 'rotate(0.15deg)' }}
          ></div>
          <div
            className="absolute right-20 top-36 h-12 w-12 border-2 border-indigo-200 opacity-25 hidden lg:block"
            style={{
              transform: 'rotate(-0.1deg)',
              borderRadius: '16px 20px 14px 18px',
            }}
          ></div>
          <div className="absolute right-1/4 top-1/2 h-4 w-4 rounded-full bg-blue-300 opacity-30 hidden lg:block"></div>
          <div className="absolute left-1/5 bottom-1/4 h-3 w-3 rounded-full bg-purple-300 opacity-40 hidden lg:block"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Breadcrumb */}
              <Link
                href="/features"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-nunito font-medium lg:hidden"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Back to Features
              </Link>

              {/* Badge */}
              <div
                className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-purple-200"
                style={{ borderRadius: '22px 28px 20px 32px' }}
              >
                <div className="absolute -top-1.5 left-8 h-3 w-3 rotate-45 transform bg-indigo-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-purple-600 pt-1">
                  <Brain className="inline w-4 h-4 mr-2" />
                  AI-Powered Analysis
                </span>
              </div>

              {/* Main content */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold leading-tight text-gray-800">
                  Enhance Your
                  <span className="text-purple-500"> Existing</span>
                  <br />
                  <span className="text-indigo-500">ABA Notes</span>
                </h1>

                <p className="text-xl md:text-2xl font-nunito text-gray-600 leading-relaxed max-w-2xl">
                  Our intelligent review system analyzes your notes, provides
                  improvement suggestions, and ensures documentation meets
                  clinical and billing standards.
                </p>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {[
                  {
                    icon: TrendingUp,
                    number: '100%',
                    label: 'Compliance',
                    color: 'purple',
                  },
                  {
                    icon: Timer,
                    number: '2min',
                    label: 'Review Time',
                    color: 'indigo',
                  },
                  {
                    icon: CheckCircle,
                    number: '40%',
                    label: 'Quality Boost',
                    color: 'blue',
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`relative bg-white p-4 shadow-md border-2 border-${stat.color}-200 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    style={{
                      borderRadius:
                        index === 0
                          ? '18px 22px 16px 24px'
                          : index === 1
                            ? '20px 16px 22px 18px'
                            : '22px 18px 20px 26px',
                    }}
                  >
                    <div
                      className={`absolute -top-1 ${
                        index === 0
                          ? 'left-1/2 -translate-x-1/2'
                          : index === 1
                            ? 'right-3'
                            : 'left-3'
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
                <Link
                  href="https://app.praxisnotes.com?utm_source=website&utm_medium=cta&utm_campaign=review_notes_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-8 bg-purple-400 hover:bg-purple-500 text-white font-quicksand font-semibold transition-all hover:shadow-md"
                  style={{ borderRadius: '16px 20px 14px 22px' }}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Review My Notes Now
                </Link>

                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center h-12 px-8 border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 font-quicksand font-semibold transition-all hover:shadow-md"
                  style={{ borderRadius: '14px 18px 12px 20px' }}
                >
                  See How It Works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right side - Review Assistant mockup */}
            <div className="relative">
              <div
                className="relative bg-white p-6 shadow-2xl border-2 border-purple-200"
                style={{ borderRadius: '34px 30px 38px 26px' }}
              >
                <div className="absolute -top-2 left-16 h-4 w-4 -translate-x-1/2 transform">
                  <div className="h-full w-full rounded-full bg-purple-400 shadow-sm"></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div
                  className="relative h-80 lg:h-96 w-full bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden p-6"
                  style={{ borderRadius: '26px 22px 30px 18px' }}
                >
                  {/* Review Assistant Interface Mockup */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-quicksand font-bold text-gray-700">
                        Note Review Assistant
                      </h3>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>

                    {/* Upload area mockup */}
                    <div>
                      <div className="text-xs text-gray-500 mb-2">
                        Upload Note
                      </div>
                      <div
                        className="h-16 bg-white border-2 border-dashed border-purple-300 rounded flex items-center justify-center"
                        style={{ borderRadius: '12px 16px 10px 14px' }}
                      >
                        <span className="text-sm text-gray-500">
                          Drop file or click to upload
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-gray-500 mb-1">
                        Session Type
                      </div>
                      <div
                        className="h-8 bg-white rounded border-2 border-indigo-200"
                        style={{ borderRadius: '8px 12px 6px 10px' }}
                      ></div>
                    </div>

                    <button
                      className="w-full h-10 bg-purple-400 hover:bg-purple-500 text-white font-quicksand font-semibold rounded flex items-center justify-center gap-2 mt-4"
                      style={{ borderRadius: '12px 16px 10px 18px' }}
                    >
                      <SearchCheck className="w-4 h-4" />
                      Analyze Note
                    </button>

                    {/* Mock results preview */}
                    <div className="mt-6 space-y-2">
                      <div className="text-xs text-gray-500">
                        Analysis Results:
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-600">
                            Compliance: 100%
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-gray-600">
                            Quality: Excellent
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="w-3 h-3 text-orange-500" />
                          <span className="text-xs text-gray-600">
                            3 Improvements suggested
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overlay badge */}
                  <div className="absolute bottom-4 right-4">
                    <div
                      className="bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md border border-purple-200"
                      style={{ borderRadius: '12px 16px 10px 14px' }}
                    >
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4 text-purple-500" />
                        <span className="text-sm font-quicksand font-semibold text-gray-700">
                          AI Analysis
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <div
                className="absolute -left-4 top-24 bg-indigo-100 border-2 border-indigo-200 p-3 shadow-lg hidden lg:block"
                style={{
                  borderRadius: '16px 20px 14px 18px',
                  transform: 'rotate(-1.5deg)',
                }}
              >
                <div className="text-center">
                  <SearchCheck className="w-5 h-5 mx-auto mb-1 text-indigo-600" />
                  <div className="text-xs font-quicksand font-semibold text-indigo-700">
                    Smart
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-6 bottom-20 bg-purple-100 border-2 border-purple-200 p-3 shadow-lg hidden lg:block"
                style={{
                  borderRadius: '14px 18px 12px 16px',
                  transform: 'rotate(2deg)',
                }}
              >
                <div className="text-center">
                  <TrendingUp className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                  <div className="text-xs font-quicksand font-semibold text-purple-700">
                    Enhance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Enhancement Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div
                className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-indigo-200"
                style={{ borderRadius: '20px 26px 18px 30px' }}
              >
                <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 transform bg-purple-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-indigo-600 pt-1">
                  <Target className="inline w-4 h-4 mr-2" />
                  Excellence Standards
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold text-gray-800">
                Elevate the <span className="text-indigo-500">Quality</span>
                <br />
                of Your Documentation
              </h2>

              <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
                Ensure your ABA session notes meet the highest clinical
                standards and insurance requirements. Our review system
                identifies gaps, enhances language, and verifies compliance.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Identify Documentation Gaps',
                    description:
                      'Discover missing elements that could impact billing or clinical clarity.',
                    color: 'indigo',
                  },
                  {
                    title: 'Enhance Clinical Language',
                    description:
                      'Improve clarity with professional, objective terminology and descriptions.',
                    color: 'purple',
                  },
                  {
                    title: 'Verify Insurance Compliance',
                    description:
                      'Ensure notes meet specific CPT code requirements to reduce claim rejections.',
                    color: 'blue',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative bg-white p-4 shadow-lg border-2 border-${item.color}-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                    style={{
                      borderRadius:
                        index === 0
                          ? '22px 18px 26px 14px'
                          : index === 1
                            ? '18px 26px 14px 22px'
                            : '26px 14px 22px 18px',
                    }}
                  >
                    <div
                      className={`absolute -top-2 ${
                        index % 2 === 0 ? 'left-6' : 'right-6'
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
                        style={{ borderRadius: '10px 14px 8px 12px' }}
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

            {/* Right side - Before/After comparison */}
            <div className="relative">
              <div
                className="relative bg-white p-6 shadow-2xl border-2 border-indigo-200"
                style={{ borderRadius: '30px 34px 26px 38px' }}
              >
                <div className="absolute -top-2 right-12 h-4 w-4 -translate-x-1/2 transform">
                  <div className="h-full w-full rounded-full bg-indigo-400 shadow-sm"></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div
                  className="relative h-80 lg:h-96 w-full bg-gradient-to-br from-indigo-50 to-purple-50 p-6"
                  style={{ borderRadius: '22px 26px 18px 30px' }}
                >
                  <div className="space-y-6">
                    <h3 className="text-xl font-quicksand font-bold text-gray-700 text-center">
                      Documentation Transformation
                    </h3>

                    {/* Before example */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-14 h-8 flex items-center justify-center bg-red-100 rounded-lg flex-shrink-0"
                          style={{ borderRadius: '8px 12px 6px 10px' }}
                        >
                          <span className="font-quicksand font-bold text-red-600 text-xs">
                            Before
                          </span>
                        </div>
                      </div>
                      <div
                        className="text-xs bg-white p-3 rounded-lg border border-gray-200"
                        style={{ borderRadius: '10px 14px 8px 12px' }}
                      >
                        &quot;Client got upset during session and had a tantrum.
                        Used token system. Made some progress on goals.&quot;
                      </div>
                    </div>

                    {/* After example */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-14 h-8 flex items-center justify-center bg-green-100 rounded-lg flex-shrink-0"
                          style={{ borderRadius: '6px 10px 8px 12px' }}
                        >
                          <span className="font-quicksand font-bold text-green-600 text-xs">
                            After
                          </span>
                        </div>
                      </div>
                      <div
                        className="text-xs bg-white p-3 rounded-lg border border-gray-200"
                        style={{ borderRadius: '12px 8px 14px 10px' }}
                      >
                        &quot;Client exhibited frustration behaviors (crying,
                        throwing materials) when presented with non-preferred
                        tasks. Implemented differential reinforcement procedure
                        with token economy (1 token per 5 minutes of
                        engagement). Client demonstrated 70% compliance with
                        program objectives, an increase from 55% in previous
                        session.&quot;
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div
              className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-blue-200 mb-8"
              style={{ borderRadius: '22px 28px 20px 32px' }}
            >
              <div className="absolute -top-1.5 left-10 h-3 w-3 rotate-45 transform bg-indigo-400 shadow-sm"></div>
              <span className="text-sm font-quicksand font-semibold text-blue-600 pt-1">
                <RefreshCw className="inline w-4 h-4 mr-2" />
                Simple Process
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold mb-6 text-gray-800">
              How It <span className="text-blue-500">Works</span>
            </h2>

            <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
              Our AI-powered note review process is quick and easy, turning good
              documentation into exceptional documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: FileSearch,
                title: 'Upload Your Note',
                description:
                  'Simply upload your existing ABA session notes in any common format (DOC, PDF, or text).',
                color: 'blue',
                step: '01',
              },
              {
                icon: ArrowUpDown,
                title: 'AI Analysis',
                description:
                  'Our AI examines your documentation for clinical quality, language, formatting, and compliance.',
                color: 'indigo',
                step: '02',
              },
              {
                icon: RefreshCw,
                title: 'Review & Implement',
                description:
                  'Receive detailed suggestions and one-click improvements to enhance your documentation.',
                color: 'purple',
                step: '03',
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative bg-white p-8 shadow-xl border-2 border-${step.color}-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                style={{
                  borderRadius:
                    index === 0
                      ? '30px 26px 34px 22px'
                      : index === 1
                        ? '26px 34px 22px 30px'
                        : '34px 22px 30px 26px',
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
                    style={{ borderRadius: '18px 22px 16px 20px' }}
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

      {/* What We Check Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold mb-6 text-gray-800">
              What We <span className="text-purple-500">Check</span>
            </h2>
            <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
              Our comprehensive review system evaluates multiple aspects of your
              documentation to ensure excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileCheck,
                title: 'Billing Requirements',
                description:
                  'Verification of required elements for CPT codes 97153–97158 to ensure insurance compliance.',
                color: 'green',
              },
              {
                icon: PenLine,
                title: 'Clinical Terminology',
                description:
                  'Assessment of language quality and professional clinical vocabulary usage.',
                color: 'purple',
              },
              {
                icon: MessagesSquare,
                title: 'Behavioral Definitions',
                description:
                  'Verification of clear, objective descriptions of behaviors and interventions.',
                color: 'indigo',
              },
              {
                icon: FileWarning,
                title: 'Documentation Gaps',
                description:
                  'Identification of missing information that could impact clinical clarity or billing.',
                color: 'amber',
              },
              {
                icon: ClipboardCheck,
                title: 'Progress Measurement',
                description:
                  'Evaluation of data collection and progress reporting completeness.',
                color: 'blue',
              },
              {
                icon: Shield,
                title: 'HIPAA Compliance',
                description:
                  'Screening for potential privacy issues or inappropriate language in documentation.',
                color: 'red',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white p-6 shadow-xl border-2 border-${feature.color}-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                style={{
                  borderRadius:
                    index % 3 === 0
                      ? '22px 18px 26px 14px'
                      : index % 3 === 1
                        ? '18px 26px 14px 22px'
                        : '26px 14px 22px 18px',
                }}
              >
                {/* Thumb tack */}
                <div
                  className={`absolute -top-2 ${
                    index % 2 === 0 ? 'left-8' : 'right-8'
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
                    style={{ borderRadius: '14px 18px 12px 16px' }}
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

      {/* Results Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div
                className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-purple-200"
                style={{ borderRadius: '20px 26px 18px 30px' }}
              >
                <div className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-purple-600 pt-1">
                  <TrendingUp className="inline w-4 h-4 mr-2" />
                  Real Results
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold text-gray-800">
                From Good to
                <span className="text-purple-500"> Exceptional</span>
                <br />
                Documentation
              </h2>

              <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
                See how our note review system transforms adequate documentation
                into clinically sound, compliant, and professional session notes
                that impress stakeholders and pass audits.
              </p>
            </div>

            {/* Right side - Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  number: '100%',
                  title: 'Compliance Rate',
                  description:
                    'Notes reviewed by our system achieve perfect insurance compliance rates.',
                  color: 'purple',
                },
                {
                  number: '100%',
                  title: 'Fewer Rejections',
                  description:
                    'Clinics report complete elimination of insurance claim rejections after implementing our system.',
                  color: 'indigo',
                },
                {
                  number: '40%',
                  title: 'Quality Improvement',
                  description:
                    'Average quality score improvement in clinical documentation after review.',
                  color: 'blue',
                },
                {
                  number: '2min',
                  title: 'Average Review Time',
                  description:
                    'Our AI completes comprehensive note reviews in under 2 minutes.',
                  color: 'green',
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`relative bg-white p-6 shadow-xl border-2 border-${stat.color}-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                  style={{
                    borderRadius:
                      index === 0
                        ? '20px 16px 24px 12px'
                        : index === 1
                          ? '16px 24px 12px 20px'
                          : index === 2
                            ? '24px 12px 20px 16px'
                            : '12px 20px 16px 24px',
                  }}
                >
                  {/* Thumb tack */}
                  <div
                    className={`absolute -top-2 ${
                      index % 2 === 0 ? 'left-6' : 'right-6'
                    }`}
                  >
                    <div
                      className={`h-4 w-4 rounded-full bg-${stat.color}-400 shadow-sm`}
                    ></div>
                    <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                  </div>

                  <div className="pt-4">
                    <div
                      className={`text-3xl md:text-4xl font-quicksand font-bold text-${stat.color}-600 mb-2`}
                    >
                      {stat.number}
                    </div>
                    <h3 className="text-lg font-quicksand font-bold mb-2 text-gray-800">
                      {stat.title}
                    </h3>
                    <p className="text-sm font-nunito text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shared CTA */}
      <FeaturesCTA
        title="Ready to Elevate Your Documentation Quality?"
        description="Join forward-thinking ABA professionals who maintain the highest standards in clinical documentation while reducing administrative stress."
      />
    </>
  );
}
