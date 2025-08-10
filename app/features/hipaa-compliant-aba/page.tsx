import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Check,
  Shield,
  Lock,
  FileCheck,
  Database,
  Users,
  BadgeCheck,
  ShieldCheck,
  Server,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Target,
  Eye,
  Fingerprint,
  Key,
} from "lucide-react";
import FeaturesCTA from "website/components/sections/features-shared-cta";

export const metadata: Metadata = {
  title: "HIPAA Compliant ABA Documentation | Praxis Notes",
  description:
    "Ensure HIPAA compliance in your ABA practice with secure, encrypted documentation and storage. Meet all regulatory requirements while protecting client information.",
};

export default function HipaaCompliancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100"></div>

        {/* Hand-drawn background decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-20 top-28 h-12 w-12 rounded-full border-2 border-blue-200 opacity-30 hidden lg:block"
            style={{ transform: "rotate(0.15deg)" }}
          ></div>
          <div
            className="absolute right-24 top-36 h-8 w-8 border-2 border-orange-200 opacity-25 hidden lg:block"
            style={{
              transform: "rotate(-0.1deg)",
              borderRadius: "12px 16px 10px 18px",
            }}
          ></div>
          <div className="absolute right-1/4 top-2/3 h-3 w-3 rounded-full bg-blue-300 opacity-40 hidden lg:block"></div>
          <div className="absolute left-1/3 bottom-1/4 h-4 w-4 rounded-full bg-yellow-300 opacity-35 hidden lg:block"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative pt-12">
          {/* Breadcrumb - positioned at top */}
          <div className="mb-8 lg:hidden">
            <Link
              href="/features"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-nunito font-medium"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Features
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[75vh]">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div
                className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-blue-200"
                style={{ borderRadius: "22px 28px 20px 32px" }}
              >
                <div className="absolute -top-1.5 left-8 h-3 w-3 rotate-45 transform bg-orange-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-blue-600 pt-1">
                  <Shield className="inline w-4 h-4 mr-2" />
                  Security & Compliance
                </span>
              </div>

              {/* Main content */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold leading-tight text-gray-800">
                  HIPAA-Compliant
                  <span className="text-blue-500"> ABA</span>
                  <br />
                  <span className="text-orange-500">Documentation</span>
                </h1>

                <p className="text-xl md:text-2xl font-nunito text-gray-600 leading-relaxed max-w-2xl">
                  Safeguard your clients&apos; sensitive information with
                  industry-leading security while maintaining full compliance
                  with healthcare regulations.
                </p>
              </div>

              {/* Security stats cards */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {[
                  {
                    icon: Lock,
                    text: "AES-256",
                    label: "Encryption",
                    color: "blue",
                  },
                  {
                    icon: ShieldCheck,
                    text: "SOC2",
                    label: "Certified",
                    color: "green",
                  },
                  {
                    icon: Eye,
                    text: "24/7",
                    label: "Monitoring",
                    color: "orange",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`relative bg-white p-4 shadow-md border-2 border-${stat.color}-200 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    style={{
                      borderRadius:
                        index === 0
                          ? "18px 22px 16px 24px"
                          : index === 1
                          ? "20px 16px 22px 18px"
                          : "22px 18px 20px 26px",
                    }}
                  >
                    <div
                      className={`absolute -top-1 ${
                        index === 0
                          ? "left-1/2 -translate-x-1/2"
                          : index === 1
                          ? "right-4"
                          : "left-4"
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
                        className={`text-lg font-quicksand font-bold text-${stat.color}-600 mb-1`}
                      >
                        {stat.text}
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
                  href="https://app.praxisnotes.com?utm_source=website&utm_medium=cta&utm_campaign=hipaa_compliance_page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="h-12 px-8 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all hover:shadow-md"
                    style={{ borderRadius: "18px 22px 16px 24px" }}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </button>
                </Link>

                <Link href="#security-features">
                  <button
                    className="h-12 px-8 border-2 border-orange-300 text-orange-600 hover:bg-orange-50 font-quicksand font-semibold transition-all hover:shadow-md"
                    style={{ borderRadius: "16px 20px 14px 22px" }}
                  >
                    View Security Features
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right side - Security Dashboard mockup */}
            <div className="relative">
              <div
                className="relative bg-white p-6 shadow-2xl border-2 border-blue-200"
                style={{ borderRadius: "34px 30px 38px 26px" }}
              >
                <div className="absolute -top-2 left-20 h-4 w-4 -translate-x-1/2 transform">
                  <div className="h-full w-full rounded-full bg-blue-400 shadow-sm"></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div
                  className="relative h-80 lg:h-96 w-full bg-gradient-to-br from-blue-50 to-orange-50 overflow-hidden p-6"
                  style={{ borderRadius: "26px 22px 30px 18px" }}
                >
                  {/* Security Dashboard Interface Mockup */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-quicksand font-bold text-gray-700">
                        Security Dashboard
                      </h3>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>

                    {/* Security status */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-nunito font-medium">
                        Security Status
                      </span>
                      <span
                        className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full"
                        style={{ borderRadius: "8px 12px 6px 10px" }}
                      >
                        All Systems Secured
                      </span>
                    </div>

                    {/* Encryption status */}
                    <div
                      className="bg-white p-3 shadow-sm border border-blue-200"
                      style={{ borderRadius: "12px 16px 10px 14px" }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-nunito">Encryption</span>
                        <span className="text-xs text-green-600">Active</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Security modules */}
                    <div className="grid grid-cols-2 gap-3">
                      <div
                        className="p-3 bg-white shadow-sm border border-blue-200"
                        style={{ borderRadius: "10px 14px 8px 12px" }}
                      >
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1.5">
                            <Lock className="h-3.5 w-3.5 text-blue-600" />
                            <span className="text-xs font-nunito font-medium">
                              Access Control
                            </span>
                          </div>
                          <span className="text-xs text-green-600">Active</span>
                        </div>
                      </div>
                      <div
                        className="p-3 bg-white shadow-sm border border-blue-200"
                        style={{ borderRadius: "8px 12px 6px 14px" }}
                      >
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1.5">
                            <Database className="h-3.5 w-3.5 text-blue-600" />
                            <span className="text-xs font-nunito font-medium">
                              Backup Status
                            </span>
                          </div>
                          <span className="text-xs text-green-600">
                            Current
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Security report button */}
                    <button
                      className="w-full py-2 bg-blue-400 text-white font-quicksand font-medium flex items-center justify-center gap-2 transition-all hover:bg-blue-500"
                      style={{ borderRadius: "10px 14px 8px 12px" }}
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>View Security Report</span>
                    </button>
                  </div>

                  {/* Overlay badge */}
                  <div className="absolute bottom-4 right-4">
                    <div
                      className="bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md border border-blue-200"
                      style={{ borderRadius: "14px 18px 12px 16px" }}
                    >
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-quicksand font-semibold text-gray-700">
                          HIPAA Secure
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <div
                className="absolute -left-6 top-20 bg-green-100 border-2 border-green-200 p-3 shadow-lg hidden lg:block"
                style={{
                  borderRadius: "18px 22px 16px 20px",
                  transform: "rotate(-1.8deg)",
                }}
              >
                <div className="text-center">
                  <Lock className="w-5 h-5 mx-auto mb-1 text-green-600" />
                  <div className="text-xs font-quicksand font-semibold text-green-700">
                    Encrypted
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-4 bottom-16 bg-orange-100 border-2 border-orange-200 p-3 shadow-lg hidden lg:block"
                style={{
                  borderRadius: "16px 20px 14px 18px",
                  transform: "rotate(2.2deg)",
                }}
              >
                <div className="text-center">
                  <BadgeCheck className="w-5 h-5 mx-auto mb-1 text-orange-600" />
                  <div className="text-xs font-quicksand font-semibold text-orange-700">
                    Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHI Security Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-yellow-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div
                className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-green-200"
                style={{ borderRadius: "20px 26px 18px 30px" }}
              >
                <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-green-600 pt-1">
                  <Target className="inline w-4 h-4 mr-2" />
                  Data Protection
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold text-gray-800">
                Protected Health
                <span className="text-green-500"> Information</span>
                <br />
                <span className="text-blue-500">Security</span>
              </h2>

              <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
                Our platform ensures that all ABA client information is securely
                stored, transmitted, and accessed in full compliance with HIPAA
                regulations and industry best practices.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "End-to-End Encryption",
                    description:
                      "All data is encrypted both in transit and at rest using AES-256 bit encryption.",
                    color: "blue",
                  },
                  {
                    title: "Access Controls & Audit Trails",
                    description:
                      "Role-based permissions and detailed logging of all user activities and data access.",
                    color: "green",
                  },
                  {
                    title: "Secure Cloud Infrastructure",
                    description:
                      "Hosted on SOC 2 Type II certified cloud infrastructure with multiple redundancies.",
                    color: "orange",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative bg-white p-4 shadow-lg border-2 border-${item.color}-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                    style={{
                      borderRadius:
                        index === 0
                          ? "22px 18px 26px 14px"
                          : index === 1
                          ? "18px 26px 14px 22px"
                          : "26px 14px 22px 18px",
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
                        style={{ borderRadius: "10px 14px 8px 12px" }}
                      >
                        <Check className={`w-5 h-5 text-${item.color}-600`} />
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

            {/* Right side - Security visualization */}
            <div className="relative">
              <div
                className="relative bg-white p-6 shadow-2xl border-2 border-green-200"
                style={{ borderRadius: "30px 26px 34px 22px" }}
              >
                <div className="absolute -top-2 right-16 h-4 w-4 -translate-x-1/2 transform">
                  <div className="h-full w-full rounded-full bg-green-400 shadow-sm"></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div
                  className="relative h-80 lg:h-96 w-full bg-gradient-to-br from-green-50 to-blue-50 p-6"
                  style={{ borderRadius: "22px 18px 26px 14px" }}
                >
                  <div className="text-center space-y-6">
                    <div className="text-5xl mb-4">🔐</div>
                    <h3 className="text-2xl font-quicksand font-bold text-gray-700">
                      Data Encryption
                    </h3>

                    {/* Mock encryption visualization */}
                    <div className="space-y-4">
                      {/* Encryption layers */}
                      <div className="space-y-3">
                        {[
                          {
                            label: "Transport Layer",
                            status: "AES-256",
                            color: "blue",
                          },
                          {
                            label: "Storage Layer",
                            status: "Encrypted",
                            color: "green",
                          },
                          {
                            label: "Access Layer",
                            status: "Protected",
                            color: "orange",
                          },
                        ].map((layer, i) => (
                          <div
                            key={i}
                            className="bg-white p-3 shadow-sm border border-gray-200"
                            style={{ borderRadius: "10px 14px 8px 12px" }}
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-nunito text-gray-600">
                                {layer.label}
                              </span>
                              <span
                                className={`text-xs bg-${layer.color}-100 text-${layer.color}-600 px-2 py-1 rounded`}
                                style={{ borderRadius: "6px 8px 4px 10px" }}
                              >
                                {layer.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Security metrics */}
                      <div className="flex justify-center space-x-4 mt-6">
                        {[
                          { label: "Uptime", value: "99.9%", color: "green" },
                          { label: "Security", value: "100%", color: "blue" },
                        ].map((metric, i) => (
                          <div key={i} className="text-center">
                            <div
                              className={`w-12 h-12 rounded-full border-4 border-${metric.color}-300 bg-${metric.color}-100 flex items-center justify-center mb-2`}
                            >
                              <span
                                className={`text-xs font-quicksand font-bold text-${metric.color}-600`}
                              >
                                {metric.value}
                              </span>
                            </div>
                            <div className="text-xs font-nunito text-gray-600">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section
        id="security-features"
        className="relative py-16 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-blue-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div
              className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-orange-200 mb-8"
              style={{ borderRadius: "24px 30px 22px 34px" }}
            >
              <div className="absolute -top-1.5 left-10 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm"></div>
              <span className="text-sm font-quicksand font-semibold text-orange-600 pt-1">
                <Shield className="inline w-4 h-4 mr-2" />
                Enterprise-Grade Security
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold mb-6 text-gray-800">
              Comprehensive <span className="text-orange-500">HIPAA</span>{" "}
              Safeguards
            </h2>

            <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
              Our platform implements all required technical, physical, and
              administrative safeguards mandated by HIPAA to protect your
              clients&apos; sensitive information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Lock,
                title: "Technical Safeguards",
                description:
                  "Technology-based measures that protect and control access to PHI.",
                color: "blue",
              },
              {
                icon: Server,
                title: "Physical Safeguards",
                description:
                  "Physical measures to protect your data from unauthorized access.",
                color: "orange",
              },
              {
                icon: FileCheck,
                title: "Administrative Safeguards",
                description:
                  "Policies and procedures designed to manage the security of PHI.",
                color: "green",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`relative bg-white p-6 shadow-xl border-2 border-${category.color}-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                style={{
                  borderRadius:
                    index === 0
                      ? "26px 22px 30px 18px"
                      : index === 1
                      ? "22px 30px 18px 26px"
                      : "30px 18px 26px 22px",
                }}
              >
                {/* Thumb tack */}
                <div
                  className={`absolute -top-2 ${
                    index === 1
                      ? "left-1/2 -translate-x-1/2"
                      : index === 0
                      ? "left-8"
                      : "right-8"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-${category.color}-400 shadow-sm`}
                  ></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div className="pt-4">
                  <div
                    className={`bg-${category.color}-100 p-3 rounded-xl w-fit mb-4`}
                    style={{ borderRadius: "16px 20px 14px 18px" }}
                  >
                    <category.icon
                      className={`w-8 h-8 text-${category.color}-600`}
                    />
                  </div>

                  <h3 className="text-xl font-quicksand font-bold mb-4 text-gray-800">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 font-nunito leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <Link
                    href={`#${category.title
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                    className={`text-${category.color}-600 font-quicksand font-medium hover:underline flex items-center`}
                  >
                    Learn more
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Safeguards Section */}
      <section
        id="technical-safeguards"
        className="relative py-16 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-yellow-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-quicksand font-bold text-gray-800 flex items-center">
                <Lock className="w-8 h-8 mr-3 text-blue-600" />
                Technical Safeguards
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "Access Controls",
                    description:
                      "Role-based permissions that limit access to PHI only to authorized users.",
                    icon: Key,
                  },
                  {
                    title: "Encryption & Decryption",
                    description:
                      "AES-256 bit encryption for all data in transit and at rest.",
                    icon: Shield,
                  },
                  {
                    title: "Authentication",
                    description:
                      "Multi-factor authentication to verify user identities.",
                    icon: Fingerprint,
                  },
                  {
                    title: "Audit Controls",
                    description:
                      "Complete logging of all activities related to PHI access.",
                    icon: Eye,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-white p-4 shadow-lg border-2 border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{
                      borderRadius:
                        index % 2 === 0
                          ? "20px 16px 24px 12px"
                          : "16px 24px 12px 20px",
                    }}
                  >
                    <div
                      className={`absolute -top-2 ${
                        index % 2 === 0 ? "left-6" : "right-6"
                      }`}
                    >
                      <div className="h-4 w-4 rounded-full bg-blue-400 shadow-sm"></div>
                      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                    </div>

                    <div className="pt-2 flex items-start space-x-4">
                      <div
                        className="bg-blue-100 p-2 rounded-lg flex-shrink-0"
                        style={{ borderRadius: "10px 14px 8px 12px" }}
                      >
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-quicksand font-bold text-gray-800 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 font-nunito text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div
                className="bg-white p-6 shadow-xl border-2 border-blue-200"
                style={{ borderRadius: "28px 24px 32px 20px" }}
              >
                <div className="absolute -top-2 left-12 h-4 w-4 -translate-x-1/2 transform">
                  <div className="h-full w-full rounded-full bg-blue-400 shadow-sm"></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <h4 className="text-lg font-quicksand font-bold mb-4 text-gray-800 pt-2">
                  Technical Implementation
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Multi-Factor Authentication",
                      description:
                        "Secure login requiring something you know (password) and something you have (mobile device) to verify your identity.",
                    },
                    {
                      icon: Database,
                      title: "Data Encryption",
                      description:
                        "AES-256 bit encryption for all data, exceeding HIPAA requirements, with secure key management and rotation procedures.",
                    },
                    {
                      icon: Shield,
                      title: "Intrusion Detection",
                      description:
                        "Real-time monitoring and alerts for any suspicious access attempts or potential security breaches.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-blue-50 p-4 border border-blue-200"
                      style={{ borderRadius: "12px 16px 10px 14px" }}
                    >
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-quicksand font-medium text-sm text-gray-800 mb-1">
                            {item.title}
                          </h5>
                          <p className="text-xs font-nunito text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physical & Administrative Safeguards Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-orange-50 to-blue-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Physical Safeguards */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-quicksand font-bold text-gray-800 flex items-center">
                <Server className="w-8 h-8 mr-3 text-orange-600" />
                Physical Safeguards
              </h3>

              <div className="space-y-6">
                {[
                  "Secure Data Centers",
                  "Device & Media Controls",
                  "Workstation Security",
                  "Disaster Recovery",
                  "Environmental Safeguards",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-white p-4 shadow-lg border-2 border-orange-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{
                      borderRadius:
                        index % 2 === 0
                          ? "22px 18px 26px 14px"
                          : "18px 26px 14px 22px",
                    }}
                  >
                    <div
                      className={`absolute -top-2 ${
                        index % 2 === 0 ? "left-6" : "right-6"
                      }`}
                    >
                      <div className="h-4 w-4 rounded-full bg-orange-400 shadow-sm"></div>
                      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                    </div>

                    <div className="pt-2 flex items-center space-x-4">
                      <div
                        className="bg-orange-100 p-2 rounded-lg flex-shrink-0"
                        style={{ borderRadius: "8px 12px 6px 10px" }}
                      >
                        <Check className="w-5 h-5 text-orange-600" />
                      </div>
                      <h4 className="font-quicksand font-bold text-gray-800">
                        {item}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Administrative Safeguards */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-quicksand font-bold text-gray-800 flex items-center">
                <FileCheck className="w-8 h-8 mr-3 text-green-600" />
                Administrative Safeguards
              </h3>

              <div className="space-y-6">
                {[
                  "Security Management Process",
                  "Security Personnel",
                  "Information Access Management",
                  "Workforce Training",
                  "Contingency Planning",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-white p-4 shadow-lg border-2 border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    style={{
                      borderRadius:
                        index % 2 === 0
                          ? "20px 16px 24px 12px"
                          : "16px 24px 12px 20px",
                    }}
                  >
                    <div
                      className={`absolute -top-2 ${
                        index % 2 === 0 ? "left-6" : "right-6"
                      }`}
                    >
                      <div className="h-4 w-4 rounded-full bg-green-400 shadow-sm"></div>
                      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                    </div>

                    <div className="pt-2 flex items-center space-x-4">
                      <div
                        className="bg-green-100 p-2 rounded-lg flex-shrink-0"
                        style={{ borderRadius: "10px 14px 8px 12px" }}
                      >
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="font-quicksand font-bold text-gray-800">
                        {item}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compliance Documentation Card */}
          <div className="mt-16">
            <div
              className="relative bg-white p-8 shadow-2xl border-2 border-blue-200 mx-auto max-w-4xl"
              style={{ borderRadius: "32px 28px 36px 24px" }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4">
                <div className="h-full w-full rounded-full bg-blue-400 shadow-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div className="pt-4 text-center">
                <h4 className="text-2xl font-quicksand font-bold mb-6 text-gray-800">
                  Compliance Documentation
                </h4>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: FileCheck,
                      title: "Business Associate Agreement",
                      description:
                        "Comprehensive BAA detailing our obligations to protect your clients' PHI.",
                      color: "blue",
                    },
                    {
                      icon: Users,
                      title: "User Activity Reports",
                      description:
                        "Detailed logs and audit trails for compliance reporting and investigations.",
                      color: "green",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Security Incident Procedures",
                      description:
                        "Documented processes for identifying and responding to security incidents.",
                      color: "orange",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`bg-${item.color}-50 p-4 border border-${item.color}-200`}
                      style={{ borderRadius: "16px 20px 14px 18px" }}
                    >
                      <div className="flex items-start gap-3">
                        <item.icon
                          className={`w-6 h-6 text-${item.color}-600 flex-shrink-0 mt-0.5`}
                        />
                        <div>
                          <h5 className="font-quicksand font-bold text-sm text-gray-800 mb-2">
                            {item.title}
                          </h5>
                          <p className="text-xs font-nunito text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared CTA */}
      <FeaturesCTA
        title="Secure Your ABA Practice Today"
        description="Join hundreds of ABA clinics who trust us with their most sensitive client information. Get peace of mind with our comprehensive HIPAA-compliant platform."
      />
    </>
  );
}
