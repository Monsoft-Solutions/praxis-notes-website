import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  CheckCircle,
  BarChart2,
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  ListFilter,
  Users,
  Goal,
  ArrowRight,
  Share2,
  Target,
  Brain,
  Sparkles,
  Timer,
  Activity,
  Zap,
} from "lucide-react";
import FeaturesCTA from "website/components/sections/features-shared-cta";

export const metadata: Metadata = {
  title: "Track ABA Progress | Praxis Notes",
  description:
    "Monitor client progress, track behavioral trends, and generate comprehensive reports for ABA therapy with Praxis Notes's powerful analytics tools.",
};

export default function TrackProgressPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100"></div>

        {/* Hand-drawn background decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-24 top-32 h-14 w-14 rounded-full border-2 border-green-200 opacity-25 hidden lg:block"
            style={{ transform: "rotate(0.1deg)" }}
          ></div>
          <div
            className="absolute right-16 top-40 h-10 w-10 border-2 border-teal-200 opacity-30 hidden lg:block"
            style={{
              transform: "rotate(-0.15deg)",
              borderRadius: "14px 18px 12px 20px",
            }}
          ></div>
          <div className="absolute right-1/3 top-1/2 h-4 w-4 rounded-full bg-emerald-300 opacity-35 hidden lg:block"></div>
          <div className="absolute left-1/4 bottom-1/3 h-3 w-3 rounded-full bg-green-300 opacity-40 hidden lg:block"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Breadcrumb */}
              <Link
                href="/features"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-nunito font-medium"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Back to Features
              </Link>

              {/* Badge */}
              <div
                className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-green-200"
                style={{ borderRadius: "20px 26px 18px 30px" }}
              >
                <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 transform bg-teal-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-green-600 pt-1">
                  <Activity className="inline w-4 h-4 mr-2" />
                  Data-Driven Decisions
                </span>
              </div>

              {/* Main content */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold leading-tight text-gray-800">
                  Track Client
                  <span className="text-green-500"> Progress</span>
                  <br />
                  <span className="text-teal-500">& Outcomes</span>
                </h1>

                <p className="text-xl md:text-2xl font-nunito text-gray-600 leading-relaxed max-w-2xl">
                  Transform your clinical data into actionable insights with
                  powerful analytics tools designed specifically for ABA therapy
                  professionals.
                </p>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {[
                  {
                    icon: TrendingUp,
                    number: "95%",
                    label: "Goal Success",
                    color: "green",
                  },
                  {
                    icon: Timer,
                    number: "30sec",
                    label: "Report Gen",
                    color: "teal",
                  },
                  {
                    icon: BarChart3,
                    number: "50+",
                    label: "Metrics",
                    color: "emerald",
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
                <Link
                  href="https://app.praxisnotes.com?utm_source=website&utm_medium=cta&utm_campaign=track_progress_page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="h-12 px-8 bg-green-400 hover:bg-green-500 text-white font-quicksand font-semibold transition-all hover:shadow-md"
                    style={{ borderRadius: "16px 20px 14px 22px" }}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Tracking Progress
                  </button>
                </Link>

                <Link href="#how-it-works">
                  <button
                    className="h-12 px-8 border-2 border-teal-300 text-teal-600 hover:bg-teal-50 font-quicksand font-semibold transition-all hover:shadow-md"
                    style={{ borderRadius: "14px 18px 12px 20px" }}
                  >
                    See How It Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right side - Progress Dashboard mockup */}
            <div className="relative">
              <div
                className="relative bg-white p-6 shadow-2xl border-2 border-green-200"
                style={{ borderRadius: "32px 28px 36px 24px" }}
              >
                <div className="absolute -top-2 left-16 h-4 w-4 -translate-x-1/2 transform">
                  <div className="h-full w-full rounded-full bg-green-400 shadow-sm"></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div
                  className="relative h-80 lg:h-96 w-full bg-gradient-to-br from-green-50 to-teal-50 overflow-hidden p-6"
                  style={{ borderRadius: "24px 20px 28px 16px" }}
                >
                  {/* Progress Dashboard Interface Mockup */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-quicksand font-bold text-gray-700">
                        Progress Dashboard
                      </h3>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>

                    {/* Mock behavior frequency chart */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-nunito text-gray-600">
                          Behavior Frequency
                        </span>
                        <span
                          className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded"
                          style={{ borderRadius: "6px 8px 4px 10px" }}
                        >
                          -25% this month
                        </span>
                      </div>

                      {/* Chart bars */}
                      <div
                        className="h-16 w-full bg-white rounded flex items-end p-2"
                        style={{ borderRadius: "8px 12px 6px 10px" }}
                      >
                        {[40, 35, 45, 30, 25, 35, 20, 30, 25, 15].map(
                          (height, i) => (
                            <div
                              key={i}
                              className="h-full flex-1 mx-0.5 flex flex-col justify-end"
                            >
                              <div
                                className="bg-green-400 rounded-t"
                                style={{
                                  height: `${height}%`,
                                  borderRadius: "2px 4px 0 0",
                                }}
                              ></div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Mock goal progress */}
                    <div className="space-y-2">
                      <div className="text-xs font-nunito text-gray-600">
                        Current Goals Progress
                      </div>
                      <div className="space-y-2">
                        {[
                          {
                            label: "Eye Contact",
                            progress: 85,
                            color: "green",
                          },
                          {
                            label: "Following Instructions",
                            progress: 70,
                            color: "teal",
                          },
                          {
                            label: "Social Interaction",
                            progress: 60,
                            color: "emerald",
                          },
                        ].map((goal, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="font-nunito text-gray-600">
                                {goal.label}
                              </span>
                              <span
                                className={`font-quicksand font-bold text-${goal.color}-600`}
                              >
                                {goal.progress}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div
                                className={`bg-${goal.color}-400 h-1.5 rounded-full`}
                                style={{ width: `${goal.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
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
                className="absolute -left-4 top-24 bg-teal-100 border-2 border-teal-200 p-3 shadow-lg hidden lg:block"
                style={{
                  borderRadius: "16px 20px 14px 18px",
                  transform: "rotate(-1.5deg)",
                }}
              >
                <div className="text-center">
                  <TrendingUp className="w-5 h-5 mx-auto mb-1 text-teal-600" />
                  <div className="text-xs font-quicksand font-semibold text-teal-700">
                    Analytics
                  </div>
                </div>
              </div>

              <div
                className="absolute -right-6 bottom-20 bg-emerald-100 border-2 border-emerald-200 p-3 shadow-lg hidden lg:block"
                style={{
                  borderRadius: "14px 18px 12px 16px",
                  transform: "rotate(2deg)",
                }}
              >
                <div className="text-center">
                  <BarChart3 className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                  <div className="text-xs font-quicksand font-semibold text-emerald-700">
                    Reports
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Decisions Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-green-50 to-emerald-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div
                className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-teal-200"
                style={{ borderRadius: "18px 24px 16px 28px" }}
              >
                <div className="absolute -top-1.5 left-8 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-teal-600 pt-1">
                  <Target className="inline w-4 h-4 mr-2" />
                  Clinical Excellence
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold text-gray-800">
                Make <span className="text-teal-500">Confident</span>
                <br />
                Clinical Decisions
              </h2>

              <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
                Our comprehensive tracking system provides clear visualizations
                and in-depth analysis of client data, helping you identify
                trends, measure outcomes, and optimize treatment plans.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Visualize Behavioral Trends",
                    description:
                      "Track frequency, duration, and intensity of behaviors across sessions with interactive charts.",
                    color: "teal",
                  },
                  {
                    title: "Monitor Intervention Effectiveness",
                    description:
                      "Compare strategies to identify the most successful approaches for each client.",
                    color: "green",
                  },
                  {
                    title: "Generate Stakeholder Reports",
                    description:
                      "Create professional reports for parents, schools, and insurance providers.",
                    color: "emerald",
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

            {/* Right side - Analytics visualization */}
            <div className="relative">
              <div
                className="relative bg-white p-6 shadow-2xl border-2 border-teal-200"
                style={{ borderRadius: "28px 32px 24px 36px" }}
              >
                <div className="absolute -top-2 right-12 h-4 w-4 -translate-x-1/2 transform">
                  <div className="h-full w-full rounded-full bg-teal-400 shadow-sm"></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div
                  className="relative h-80 lg:h-96 w-full bg-gradient-to-br from-teal-50 to-green-50 p-6"
                  style={{ borderRadius: "20px 24px 16px 28px" }}
                >
                  <div className="text-center space-y-6">
                    <div className="text-5xl mb-4">📊</div>
                    <h3 className="text-2xl font-quicksand font-bold text-gray-700">
                      Analytics Dashboard
                    </h3>

                    {/* Mock analytics visualization */}
                    <div className="space-y-4">
                      {/* Progress circles */}
                      <div className="flex justify-center space-x-4">
                        {[
                          { label: "Goals", value: 85, color: "green" },
                          { label: "Sessions", value: 92, color: "teal" },
                          { label: "Outcomes", value: 78, color: "emerald" },
                        ].map((metric, i) => (
                          <div key={i} className="text-center">
                            <div
                              className={`w-12 h-12 rounded-full border-4 border-${metric.color}-300 bg-${metric.color}-100 flex items-center justify-center mb-2`}
                            >
                              <span
                                className={`text-xs font-quicksand font-bold text-${metric.color}-600`}
                              >
                                {metric.value}%
                              </span>
                            </div>
                            <div className="text-xs font-nunito text-gray-600">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Trend line mockup */}
                      <div className="mt-6">
                        <div
                          className="h-16 bg-white rounded border-2 border-gray-200 p-2"
                          style={{ borderRadius: "8px 12px 6px 10px" }}
                        >
                          <svg className="w-full h-full" viewBox="0 0 200 40">
                            <polyline
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="2"
                              points="10,30 30,25 50,20 70,15 90,18 110,12 130,8 150,10 170,5 190,7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Features Section */}
      <section
        id="how-it-works"
        className="relative py-16 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-50 to-green-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div
              className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-emerald-200 mb-8"
              style={{ borderRadius: "20px 26px 18px 30px" }}
            >
              <div className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-teal-400 shadow-sm"></div>
              <span className="text-sm font-quicksand font-semibold text-emerald-600 pt-1">
                <Brain className="inline w-4 h-4 mr-2" />
                Powerful Tracking
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold mb-6 text-gray-800">
              Analytics That{" "}
              <span className="text-emerald-500">Drive Results</span>
            </h2>

            <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
              Our comprehensive tracking system helps you monitor progress,
              visualize trends, and make data-driven decisions for your ABA
              therapy practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Behavior Tracking",
                description:
                  "Monitor frequency, duration, and intensity of target behaviors across sessions.",
                color: "green",
              },
              {
                icon: TrendingUp,
                title: "Goal Progress",
                description:
                  "Track achievement of treatment objectives with visual progress indicators.",
                color: "emerald",
              },
              {
                icon: LineChart,
                title: "Intervention Analysis",
                description:
                  "Compare effectiveness of different strategies to optimize treatment plans.",
                color: "teal",
              },
              {
                icon: PieChart,
                title: "Reporting & Exports",
                description:
                  "Generate professional reports and data exports for stakeholders.",
                color: "cyan",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white p-6 shadow-xl border-2 border-${feature.color}-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                style={{
                  borderRadius:
                    index % 2 === 0
                      ? "22px 18px 26px 14px"
                      : "18px 26px 14px 22px",
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
                    style={{ borderRadius: "14px 18px 12px 16px" }}
                  >
                    <feature.icon
                      className={`w-8 h-8 text-${feature.color}-600`}
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

      {/* Advanced Features Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                {[
                  {
                    icon: ListFilter,
                    title: "Customizable Data Views",
                    description:
                      "Filter, sort, and customize visualizations to focus on the metrics that matter most to your clients and practice.",
                    color: "green",
                  },
                  {
                    icon: Users,
                    title: "Multi-User Collaboration",
                    description:
                      "Enable seamless collaboration between RBTs, BCBAs, and other team members with shared data access and role-based permissions.",
                    color: "teal",
                  },
                  {
                    icon: Goal,
                    title: "Goal Alignment Tracking",
                    description:
                      "Ensure all clinical activities align with treatment goals and track progress toward specific objectives with automated milestone indicators.",
                    color: "emerald",
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
                          : "28px 16px 24px 20px",
                    }}
                  >
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
                      <div
                        className={`bg-${feature.color}-100 p-3 rounded-lg flex-shrink-0`}
                        style={{ borderRadius: "12px 16px 10px 14px" }}
                      >
                        <feature.icon
                          className={`w-6 h-6 text-${feature.color}-600`}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-quicksand font-bold mb-2 text-gray-800">
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

            <div className="space-y-8 order-1 lg:order-2">
              <div
                className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-green-200"
                style={{ borderRadius: "18px 24px 16px 28px" }}
              >
                <div className="absolute -top-1.5 left-10 h-3 w-3 rotate-45 transform bg-emerald-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-green-600 pt-1">
                  <Zap className="inline w-4 h-4 mr-2" />
                  Advanced Features
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold text-gray-800">
                Beyond Basic
                <span className="text-green-500"> Analytics</span>
              </h2>

              <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
                Our tracking system goes beyond simple charts to provide
                comprehensive insights that transform your practice and help
                clients achieve better outcomes.
              </p>

              <div className="space-y-4">
                {[
                  "Client progress comparisons against research benchmarks",
                  "Predictive analytics to forecast treatment timelines",
                  "Automatic identification of skill acquisition patterns",
                  "Early detection of regression or plateaus",
                  "Parent-friendly progress summaries and visualizations",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-nunito text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Tools Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-green-50 to-emerald-100"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold mb-6 text-gray-800">
              Powerful <span className="text-teal-500">Reporting</span> Tools
            </h2>
            <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed">
              Generate professional, customizable reports for all stakeholders
              in the ABA therapy process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Parent/Caregiver Reports",
                icon: Users,
                color: "green",
                items: [
                  "Visual progress summaries",
                  "Accessible behavior explanations",
                  "Home strategy recommendations",
                  "Goal achievement timelines",
                  "Milestone celebration highlights",
                ],
              },
              {
                title: "Clinical Team Reports",
                icon: BarChart2,
                color: "teal",
                items: [
                  "Detailed behavior analysis",
                  "Intervention effectiveness metrics",
                  "Session data aggregation",
                  "Treatment plan alignment",
                  "Inter-observer agreement stats",
                ],
              },
              {
                title: "Administrative Reports",
                icon: Share2,
                color: "cyan",
                items: [
                  "Insurance documentation",
                  "Billing support materials",
                  "Service authorization justification",
                  "Compliance verification",
                  "Treatment hour summaries",
                ],
              },
            ].map((reportType, index) => (
              <div
                key={index}
                className={`relative bg-white shadow-xl border-2 border-${reportType.color}-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                style={{
                  borderRadius:
                    index === 0
                      ? "24px 20px 28px 16px"
                      : index === 1
                      ? "20px 28px 16px 24px"
                      : "28px 16px 24px 20px",
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
                    className={`h-4 w-4 rounded-full bg-${reportType.color}-400 shadow-sm`}
                  ></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div className="p-6 pt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`bg-${reportType.color}-100 p-3 rounded-lg`}
                      style={{ borderRadius: "10px 14px 8px 12px" }}
                    >
                      <reportType.icon
                        className={`w-6 h-6 text-${reportType.color}-600`}
                      />
                    </div>
                    <h3 className="text-xl font-quicksand font-bold text-gray-800">
                      {reportType.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {reportType.items.map((item, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-nunito text-gray-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared CTA */}
      <FeaturesCTA
        title="Start Making Data-Driven Decisions Today"
        description="Join hundreds of ABA practices that have improved client outcomes and treatment efficacy with our advanced tracking tools."
      />
    </>
  );
}
