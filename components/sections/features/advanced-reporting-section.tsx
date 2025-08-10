import {
  TrendingUp,
  Target,
  LineChart,
  FileText,
  BarChart3,
  Activity,
} from "lucide-react";

export default function AdvancedReportingSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-green-50"></div>

      {/* Hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle geometric shapes */}
        <div
          className="absolute left-24 top-40 h-14 w-14 rounded-full border-2 border-green-200 opacity-25 hidden lg:block"
          style={{ transform: "rotate(0.1deg)" }}
        ></div>

        <div
          className="absolute right-20 bottom-32 h-10 w-10 border-2 border-blue-200 opacity-30 hidden lg:block"
          style={{
            transform: "rotate(-0.15deg)",
            borderRadius: "14px 18px 12px 16px",
          }}
        ></div>

        {/* Small decorative dots */}
        <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-green-300 opacity-40 hidden lg:block"></div>
        <div className="absolute left-1/5 bottom-1/4 h-2 w-2 rounded-full bg-blue-300 opacity-35 hidden lg:block"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Badge */}
          <div
            className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-green-200 mb-8"
            style={{ borderRadius: "20px 26px 18px 30px" }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm"></div>
            <span className="text-sm font-quicksand font-semibold text-green-600 pt-1">
              <BarChart3 className="inline w-4 h-4 mr-2" />
              Data-Driven Insights & Analytics
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold mb-6 text-gray-800">
            Make Informed Decisions with
            <span className="text-green-500"> Advanced</span>
            <br />
            <span className="text-blue-500">Reporting & Analytics</span>
          </h2>

          <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
            Transform your ABA data into actionable insights with comprehensive
            analytics, visual progress tracking, and professional reporting
            tools designed for evidence-based practice.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Features list */}
          <div className="space-y-8">
            {[
              {
                icon: TrendingUp,
                title: "Behavior Tracking & Visualization",
                description:
                  "Generate charts and graphs showing behavior frequency, duration, and intensity across sessions.",
                color: "green",
              },
              {
                icon: Target,
                title: "Goal Progress Monitoring",
                description:
                  "Track client progress toward goals with visual indicators and milestone tracking.",
                color: "blue",
              },
              {
                icon: LineChart,
                title: "Intervention Effectiveness Analysis",
                description:
                  "Compare intervention strategies with data-driven insights to identify the most effective approaches.",
                color: "green",
              },
              {
                icon: FileText,
                title: "Custom Report Generation",
                description:
                  "Create professional reports for stakeholders, parents, schools, and insurance providers.",
                color: "orange",
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

          {/* Right side - Dashboard mockup */}
          <div className="relative">
            {/* Main dashboard container */}
            <div
              className="relative bg-white p-6 shadow-2xl border-2 border-green-200"
              style={{ borderRadius: "32px 28px 36px 24px" }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-2 right-16 h-4 w-4 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-green-400 shadow-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div
                className="relative h-80 lg:h-96 w-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center overflow-hidden"
                style={{ borderRadius: "24px 20px 28px 16px" }}
              >
                {/* Dashboard mockup content */}
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-2xl font-quicksand font-bold text-gray-700">
                    Analytics Dashboard
                  </h3>
                  <p className="text-lg font-nunito text-gray-600 max-w-xs">
                    Real-time insights and comprehensive reporting
                  </p>

                  {/* Mock chart elements */}
                  <div className="flex justify-center space-x-2 mt-6">
                    <div
                      className="w-3 h-12 bg-green-300 rounded-t"
                      style={{ borderRadius: "4px 6px 0 0" }}
                    ></div>
                    <div
                      className="w-3 h-8 bg-blue-300 rounded-t"
                      style={{ borderRadius: "4px 6px 0 0" }}
                    ></div>
                    <div
                      className="w-3 h-16 bg-green-400 rounded-t"
                      style={{ borderRadius: "4px 6px 0 0" }}
                    ></div>
                    <div
                      className="w-3 h-6 bg-orange-300 rounded-t"
                      style={{ borderRadius: "4px 6px 0 0" }}
                    ></div>
                    <div
                      className="w-3 h-10 bg-blue-400 rounded-t"
                      style={{ borderRadius: "4px 6px 0 0" }}
                    ></div>
                  </div>
                </div>

                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4">
                  <div
                    className="bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md border border-green-200"
                    style={{ borderRadius: "12px 16px 10px 14px" }}
                  >
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-quicksand font-semibold text-gray-700">
                        Live Data
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
                <Target className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                <div className="text-xs font-quicksand font-semibold text-blue-700">
                  Goals
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
                <FileText className="w-5 h-5 mx-auto mb-1 text-orange-600" />
                <div className="text-xs font-quicksand font-semibold text-orange-700">
                  Reports
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div
            className="relative inline-flex items-center px-6 py-4 bg-white shadow-lg border-2 border-blue-200"
            style={{ borderRadius: "20px 26px 18px 30px" }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm"></div>

            <div className="pt-2 text-center">
              <p className="text-lg font-quicksand font-semibold text-gray-700 mb-2">
                Ready to unlock powerful insights from your ABA data?
              </p>
              <p className="text-sm font-nunito text-gray-600">
                See how our analytics can transform your practice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
