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
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50/70 to-transparent dark:from-amber-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center">
            <Link
              href="/features"
              className="flex items-center text-amber-600 dark:text-amber-400 mb-6 hover:underline"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Features
            </Link>

            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
                Security & Compliance
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                HIPAA-Compliant ABA Documentation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Safeguard your clients&apos; sensitive information with
                industry-leading security while maintaining full compliance with
                healthcare regulations.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/pricing"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center"
                >
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#security-features"
                  className="px-8 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  View Security Features
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
                Protected Health Information (PHI) Security
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform ensures that all ABA client information is securely
                stored, transmitted, and accessed in full compliance with HIPAA
                regulations and industry best practices.
              </p>

              <ul className="space-y-4">
                {[
                  {
                    title: "End-to-End Encryption",
                    description:
                      "All data is encrypted both in transit and at rest using AES-256 bit encryption.",
                  },
                  {
                    title: "Access Controls & Audit Trails",
                    description:
                      "Role-based permissions and detailed logging of all user activities and data access.",
                  },
                  {
                    title: "Secure Cloud Infrastructure",
                    description:
                      "Hosted on SOC 2 Type II certified cloud infrastructure with multiple redundancies.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" />
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
              <div className="aspect-video w-full bg-gradient-to-br from-amber-100 to-red-100 dark:from-amber-900/20 dark:to-red-900/20 flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-amber-500" />
                      <span className="font-medium">Security Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Security Status
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          All Systems Secured
                        </span>
                      </div>

                      <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs">Encryption</span>
                          <span className="text-xs text-green-600">Active</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5">
                              <Lock className="h-3.5 w-3.5 text-amber-600" />
                              <span className="text-xs font-medium">
                                Access Control
                              </span>
                            </div>
                            <span className="text-xs text-green-600">
                              Active
                            </span>
                          </div>
                        </div>
                        <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5">
                              <Database className="h-3.5 w-3.5 text-amber-600" />
                              <span className="text-xs font-medium">
                                Backup Status
                              </span>
                            </div>
                            <span className="text-xs text-green-600">
                              Current
                            </span>
                          </div>
                        </div>
                      </div>

                      <button className="w-full py-2 bg-amber-600 text-white rounded flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span>View Security Report</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="security-features" className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium mb-4">
              Enterprise-Grade Security
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive HIPAA Safeguards
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform implements all required technical, physical, and
              administrative safeguards mandated by HIPAA to protect your
              clients&apos; sensitive information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: (
                  <Lock className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                ),
                title: "Technical Safeguards",
                description:
                  "Technology-based measures that protect and control access to PHI.",
              },
              {
                icon: (
                  <Server className="w-8 h-8 text-red-600 dark:text-red-400" />
                ),
                title: "Physical Safeguards",
                description:
                  "Physical measures to protect your data from unauthorized access.",
              },
              {
                icon: (
                  <FileCheck className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                ),
                title: "Administrative Safeguards",
                description:
                  "Policies and procedures designed to manage the security of PHI.",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 relative overflow-hidden"
              >
                <div className="mb-6">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>

                <Link
                  href={`#${category.title.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-amber-600 dark:text-amber-400 font-medium hover:underline flex items-center"
                >
                  Learn more
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div
            id="technical-safeguards"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-amber-600" />
                Technical Safeguards
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Access Controls",
                    description:
                      "Role-based permissions that limit access to PHI only to authorized users.",
                  },
                  {
                    title: "Encryption & Decryption",
                    description:
                      "AES-256 bit encryption for all data in transit and at rest.",
                  },
                  {
                    title: "Authentication",
                    description:
                      "Multi-factor authentication to verify user identities.",
                  },
                  {
                    title: "Audit Controls",
                    description:
                      "Complete logging of all activities related to PHI access.",
                  },
                  {
                    title: "Automatic Log-Off",
                    description:
                      "Sessions automatically terminate after periods of inactivity.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-gradient-to-br from-amber-50 to-red-50 dark:from-amber-950/10 dark:to-red-950/10 p-8 rounded-xl h-full">
                <h4 className="text-lg font-semibold mb-4">
                  Technical Implementation
                </h4>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-sm">
                          Multi-Factor Authentication
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Secure login requiring something you know (password)
                          and something you have (mobile device) to verify your
                          identity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-sm">Data Encryption</h5>
                        <p className="text-xs text-muted-foreground">
                          AES-256 bit encryption for all data, exceeding HIPAA
                          requirements, with secure key management and rotation
                          procedures.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-sm">
                          Intrusion Detection
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Real-time monitoring and alerts for any suspicious
                          access attempts or potential security breaches.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="physical-safeguards"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-red-50 to-amber-50 dark:from-red-950/10 dark:to-amber-950/10 p-8 rounded-xl h-full">
                <h4 className="text-lg font-semibold mb-4">
                  Data Center Security
                </h4>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-start gap-3">
                      <Server className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-sm">
                          SOC 2 Type II Certified
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Our infrastructure is hosted in facilities that
                          undergo rigorous independent audits for security,
                          availability, and confidentiality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-sm">24/7 Monitoring</h5>
                        <p className="text-xs text-muted-foreground">
                          Continuous physical and electronic surveillance with
                          comprehensive environmental controls.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-sm">
                          Redundant Systems
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Multiple data centers with real-time replication to
                          ensure data availability even in disaster scenarios.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Server className="w-6 h-6 mr-2 text-red-600" />
                Physical Safeguards
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Secure Data Centers",
                    description:
                      "PHI stored in SOC 2 Type II certified facilities with physical access restrictions.",
                  },
                  {
                    title: "Device & Media Controls",
                    description:
                      "Policies governing the receipt and removal of hardware containing PHI.",
                  },
                  {
                    title: "Workstation Security",
                    description:
                      "Guidelines to ensure physical security of devices accessing the platform.",
                  },
                  {
                    title: "Disaster Recovery",
                    description:
                      "Comprehensive data backup and recovery procedures to ensure continuity.",
                  },
                  {
                    title: "Environmental Safeguards",
                    description:
                      "Protection against environmental hazards and unauthorized intrusion.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            id="administrative-safeguards"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FileCheck className="w-6 h-6 mr-2 text-amber-600" />
                Administrative Safeguards
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Security Management Process",
                    description:
                      "Risk analysis and management systems to protect all PHI.",
                  },
                  {
                    title: "Security Personnel",
                    description:
                      "Designated security officers responsible for HIPAA compliance.",
                  },
                  {
                    title: "Information Access Management",
                    description: "Procedures for authorizing access to PHI.",
                  },
                  {
                    title: "Workforce Training",
                    description:
                      "Regular security awareness and training programs.",
                  },
                  {
                    title: "Contingency Planning",
                    description:
                      "Plans for responding to emergencies that damage systems containing PHI.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-gradient-to-br from-amber-50 to-red-50 dark:from-amber-950/10 dark:to-red-950/10 p-8 rounded-xl h-full">
                <h4 className="text-lg font-semibold mb-4">
                  Compliance Documentation
                </h4>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-3">
                      <FileCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-sm">
                          Business Associate Agreement
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Comprehensive BAA that details our obligations to
                          protect your clients&apos; PHI in accordance with
                          HIPAA requirements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-sm">
                          User Activity Reports
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Detailed logs and audit trails of all user activities
                          that can be used for compliance reporting and incident
                          investigations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-sm">
                          Security Incident Procedures
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Documented processes for identifying, responding to,
                          and mitigating the effects of security incidents
                          involving PHI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesCTA
        title="Secure Your ABA Practice Today"
        description="Join hundreds of ABA clinics who trust us with their most sensitive client information. Get peace of mind with our comprehensive HIPAA-compliant platform."
      />
    </>
  );
}
