import {
  Shield,
  FileCheck,
  Lock,
  ClipboardList,
  CheckCircle,
  CreditCard,
} from "lucide-react";

export default function ComplianceSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-amber-100"></div>

      {/* Hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle geometric shapes */}
        <div
          className="absolute left-20 top-36 h-12 w-12 rounded-full border-2 border-orange-200 opacity-25 hidden lg:block"
          style={{ transform: "rotate(0.1deg)" }}
        ></div>

        <div
          className="absolute right-24 bottom-36 h-10 w-10 border-2 border-amber-200 opacity-30 hidden lg:block"
          style={{
            transform: "rotate(-0.15deg)",
            borderRadius: "14px 18px 12px 16px",
          }}
        ></div>

        {/* Small decorative dots */}
        <div className="absolute right-1/3 top-1/4 h-3 w-3 rounded-full bg-orange-300 opacity-40 hidden lg:block"></div>
        <div className="absolute left-1/4 bottom-1/4 h-2 w-2 rounded-full bg-amber-300 opacity-35 hidden lg:block"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Badge */}
          <div
            className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-orange-200 mb-8"
            style={{ borderRadius: "20px 26px 18px 30px" }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 transform bg-amber-400 shadow-sm"></div>
            <span className="text-sm font-quicksand font-semibold text-orange-600 pt-1">
              <Shield className="inline w-4 h-4 mr-2" />
              Built-In Compliance & Security
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold mb-6 text-gray-800">
            Every Note is
            <span className="text-orange-500"> Compliance-Ready</span>
            <br />
            <span className="text-amber-500">From Day One</span>
          </h2>

          <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
            Your ABA documentation automatically meets HIPAA, insurance billing,
            and regulatory standards. No compliance dashboard needed—compliance
            is built into every note we generate and review.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Compliant note visualization */}
          <div className="relative order-2 lg:order-1">
            {/* Main note container */}
            <div
              className="relative bg-white p-6 shadow-2xl border-2 border-amber-200"
              style={{ borderRadius: "32px 28px 36px 24px" }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-2 left-16 h-4 w-4 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-amber-400 shadow-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div
                className="relative h-80 lg:h-96 w-full bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden p-6"
                style={{ borderRadius: "24px 20px 28px 16px" }}
              >
                {/* Mock compliant note content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-quicksand font-bold text-gray-700">
                      ABA Session Note
                    </h3>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-quicksand font-semibold text-green-600">
                        Compliant
                      </span>
                    </div>
                  </div>

                  {/* Mock compliance checks */}
                  <div className="space-y-3">
                    {[
                      {
                        label: "CPT Code: 97155",
                        icon: CreditCard,
                        color: "green",
                      },
                      { label: "HIPAA Verified", icon: Lock, color: "blue" },
                      {
                        label: "Billing Ready",
                        icon: FileCheck,
                        color: "orange",
                      },
                      {
                        label: "Audit Trail",
                        icon: ClipboardList,
                        color: "purple",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={`p-1.5 bg-${item.color}-100 rounded`}
                          style={{ borderRadius: "6px 8px 6px 10px" }}
                        >
                          <item.icon
                            className={`w-3 h-3 text-${item.color}-600`}
                          />
                        </div>
                        <span className="text-xs font-nunito text-gray-600">
                          {item.label}
                        </span>
                        <CheckCircle className="w-3 h-3 text-green-500 ml-auto" />
                      </div>
                    ))}
                  </div>

                  {/* Mock note content preview */}
                  <div
                    className="mt-6 p-4 bg-white/80 rounded-lg"
                    style={{ borderRadius: "12px 16px 10px 14px" }}
                  >
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      <div className="flex items-center space-x-2 mt-3">
                        <div className="text-xs text-gray-500">
                          Target Behavior:
                        </div>
                        <div className="h-1.5 bg-blue-300 rounded w-20"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-xs text-gray-500">
                          Intervention:
                        </div>
                        <div className="h-1.5 bg-green-300 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay badge */}
                <div className="absolute bottom-4 right-4">
                  <div
                    className="bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md border border-green-200"
                    style={{ borderRadius: "12px 16px 10px 14px" }}
                  >
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-quicksand font-semibold text-gray-700">
                        Auto-Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <div
              className="absolute -left-4 top-20 bg-green-100 border-2 border-green-200 p-3 shadow-lg hidden lg:block"
              style={{
                borderRadius: "16px 20px 14px 18px",
                transform: "rotate(-1.5deg)",
              }}
            >
              <div className="text-center">
                <CheckCircle className="w-5 h-5 mx-auto mb-1 text-green-600" />
                <div className="text-xs font-quicksand font-semibold text-green-700">
                  Verified
                </div>
              </div>
            </div>

            <div
              className="absolute -right-6 bottom-16 bg-blue-100 border-2 border-blue-200 p-3 shadow-lg hidden lg:block"
              style={{
                borderRadius: "14px 18px 12px 16px",
                transform: "rotate(2deg)",
              }}
            >
              <div className="text-center">
                <Lock className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                <div className="text-xs font-quicksand font-semibold text-blue-700">
                  Secure
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Features list */}
          <div className="space-y-8 order-1 lg:order-2">
            {[
              {
                icon: CreditCard,
                title: "Insurance Billing Support",
                description:
                  "Every note automatically includes proper CPT codes and meets specific insurance requirements to maximize reimbursement rates.",
                color: "orange",
              },
              {
                icon: Lock,
                title: "HIPAA-Compliant Security",
                description:
                  "End-to-end encryption and secure data handling ensure all client information meets privacy requirements from creation to storage.",
                color: "blue",
              },
              {
                icon: FileCheck,
                title: "Audit-Ready Documentation",
                description:
                  "Complete audit trails and standardized formatting ensure your documentation meets all regulatory requirements for reviews.",
                color: "green",
              },
              {
                icon: Shield,
                title: "Automatic Compliance Checks",
                description:
                  "AI-powered verification runs on every note to ensure clinical accuracy and regulatory compliance before finalization.",
                color: "amber",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white p-6 shadow-xl border-2 border-${feature.color}-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                style={{
                  borderRadius:
                    index === 0
                      ? "24px 20px 28px 16px"
                      : index === 1
                      ? "20px 28px 16px 24px"
                      : index === 2
                      ? "28px 16px 24px 20px"
                      : "16px 24px 20px 28px",
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

                <div className="pt-4 flex items-start space-x-4">
                  {/* Icon */}
                  <div
                    className={`bg-${feature.color}-100 p-3 rounded-xl flex-shrink-0`}
                    style={{ borderRadius: "14px 18px 12px 16px" }}
                  >
                    <feature.icon
                      className={`w-7 h-7 text-${feature.color}-600`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-quicksand font-bold mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-nunito leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div
            className="relative inline-flex items-center px-6 py-4 bg-white shadow-lg border-2 border-orange-200"
            style={{ borderRadius: "20px 26px 18px 30px" }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 transform bg-orange-400 shadow-sm"></div>

            <div className="pt-2 text-center">
              <p className="text-lg font-quicksand font-semibold text-gray-700 mb-2">
                Ready for worry-free ABA documentation?
              </p>
              <p className="text-sm font-nunito text-gray-600">
                Every note automatically meets compliance standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
