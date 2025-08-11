import { FileSearch, Lightbulb, Shield, CheckCircle } from "lucide-react";

export default function NoteReviewSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-purple-100"></div>

      {/* Hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle geometric shapes */}
        <div
          className="absolute left-20 top-32 h-12 w-12 rounded-full border-2 border-green-200 opacity-25 hidden lg:block"
          style={{ transform: "rotate(0.1deg)" }}
        ></div>

        <div
          className="absolute right-24 bottom-40 h-8 w-8 border-2 border-purple-200 opacity-30 hidden lg:block"
          style={{
            transform: "rotate(-0.15deg)",
            borderRadius: "12px 16px 10px 18px",
          }}
        ></div>

        {/* Small decorative dots */}
        <div className="absolute right-1/3 top-1/4 h-3 w-3 rounded-full bg-green-300 opacity-40 hidden lg:block"></div>
        <div className="absolute left-1/4 bottom-1/3 h-2 w-2 rounded-full bg-purple-300 opacity-35 hidden lg:block"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Badge */}
          <div
            className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-green-200 mb-8"
            style={{ borderRadius: "18px 24px 16px 28px" }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 transform bg-purple-400 shadow-sm"></div>
            <span className="text-sm font-quicksand font-semibold text-green-600 pt-1">
              <FileSearch className="inline w-4 h-4 mr-2" />
              AI-Powered Review & Enhancement
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold mb-6 text-gray-800">
            Transform Your
            <span className="text-green-500"> ABA Notes</span>
            <br />
            into <span className="text-purple-500">Professional</span>{" "}
            Documentation
          </h2>

          <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
            Our AI-powered review system analyzes your existing notes, provides
            improvement suggestions, and ensures documentation meets clinical
            and billing standards.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: FileSearch,
              title: "Documentation Gap Analysis",
              description:
                "Identifies missing elements in your notes that could impact billing or clinical clarity, including:",
              items: [
                "Missing behavioral definitions",
                "Incomplete intervention descriptions",
                "Insufficient progress measurement",
                "Billing code requirement gaps",
              ],
              color: "green",
              thumbTackPosition: "left-1/2 -translate-x-1/2",
            },
            {
              icon: Lightbulb,
              title: "Clinical Language Enhancement",
              description:
                "Improves the clarity and professionalism of your clinical documentation:",
              items: [
                "Objective behavioral descriptions",
                "Professional clinical terminology",
                "Clear antecedent-behavior-consequence chains",
                "Evidence-based intervention phrasing",
              ],
              color: "purple",
              thumbTackPosition: "right-8",
            },
            {
              icon: Shield,
              title: "Compliance Verification",
              description:
                "Ensures your documentation meets all necessary requirements:",
              items: [
                "Insurance billing code compliance",
                "HIPAA-compliant language",
                "Medicaid/Medicare documentation standards",
                "Session length and service type validation",
              ],
              color: "blue",
              thumbTackPosition: "left-8",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`relative bg-white p-6 lg:p-8 shadow-xl border-2 border-${feature.color}-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
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
              <div className={`absolute -top-2 ${feature.thumbTackPosition}`}>
                <div
                  className={`h-4 w-4 rounded-full bg-${feature.color}-400 shadow-sm`}
                ></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div className="pt-4">
                {/* Icon */}
                <div
                  className={`bg-${feature.color}-100 p-4 rounded-xl w-fit mb-6`}
                  style={{ borderRadius: "16px 20px 14px 18px" }}
                >
                  <feature.icon
                    className={`w-8 h-8 text-${feature.color}-600`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-quicksand font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>

                <p className="text-gray-600 font-nunito mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle
                        className={`w-5 h-5 text-${feature.color}-500 mr-3 mt-0.5 flex-shrink-0`}
                      />
                      <span className="text-gray-700 font-nunito text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div
            className="relative inline-flex items-center px-6 py-4 bg-white shadow-lg border-2 border-green-200"
            style={{ borderRadius: "20px 26px 18px 30px" }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm"></div>

            <div className="pt-2 text-center">
              <p className="text-lg font-quicksand font-semibold text-gray-700 mb-2">
                Ready to enhance your ABA documentation?
              </p>
              <p className="text-sm font-nunito text-gray-600">
                Upload your notes and see the difference AI can make
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
