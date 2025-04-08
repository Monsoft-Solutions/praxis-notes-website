import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  Check,
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
} from "lucide-react";
import FeaturesCTA from "website/components/sections/features-shared-cta";

export const metadata: Metadata = {
  title: "Track ABA Progress | Praxis Note",
  description:
    "Monitor client progress, track behavioral trends, and generate comprehensive reports for ABA therapy with Praxis Note's powerful analytics tools.",
};

export default function TrackProgressPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-50/70 to-transparent dark:from-green-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center">
            <Link
              href="/features"
              className="flex items-center text-green-600 dark:text-green-400 mb-6 hover:underline"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Features
            </Link>

            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                Data-Driven Decisions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Track Client Progress & Outcomes
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your clinical data into actionable insights with
                powerful analytics tools designed specifically for ABA therapy
                professionals.
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
                Make Confident Clinical Decisions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive tracking system provides clear visualizations
                and in-depth analysis of client data, helping you identify
                trends, measure outcomes, and optimize treatment plans.
              </p>

              <ul className="space-y-4">
                {[
                  {
                    title: "Visualize Behavioral Trends",
                    description:
                      "Track frequency, duration, and intensity of behaviors across sessions with interactive charts.",
                  },
                  {
                    title: "Monitor Intervention Effectiveness",
                    description:
                      "Compare strategies to identify the most successful approaches for each client.",
                  },
                  {
                    title: "Generate Stakeholder Reports",
                    description:
                      "Create professional reports for parents, schools, and insurance providers.",
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
              <div className="aspect-video w-full bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BarChart2 className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Progress Dashboard</span>
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
                          Behavior Frequency
                        </span>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                          -25% this month
                        </span>
                      </div>
                      <div className="h-24 w-full bg-gray-100 dark:bg-gray-700 rounded flex items-end p-2">
                        {[40, 35, 45, 30, 25, 35, 20, 30, 25, 15].map(
                          (height, i) => (
                            <div
                              key={i}
                              className="h-full flex-1 mx-0.5 flex flex-col justify-end"
                            >
                              <div
                                className="bg-green-500 dark:bg-green-400 rounded-t"
                                style={{ height: `${height}%` }}
                              ></div>
                            </div>
                          ),
                        )}
                      </div>
                      <div className="flex justify-between">
                        <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-xs rounded">
                          Week
                        </button>
                        <button className="px-3 py-1.5 bg-green-500 text-white text-xs rounded">
                          Month
                        </button>
                        <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-xs rounded">
                          Quarter
                        </button>
                        <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-xs rounded">
                          Year
                        </button>
                      </div>
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
            <span className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium mb-4">
              Powerful Tracking
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Analytics That Drive Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive tracking system helps you monitor progress,
              visualize trends, and make data-driven decisions for your ABA
              therapy practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <BarChart3 className="w-10 h-10 text-green-600 dark:text-green-400" />
                ),
                title: "Behavior Tracking",
                description:
                  "Monitor frequency, duration, and intensity of target behaviors across sessions.",
              },
              {
                icon: (
                  <TrendingUp className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                ),
                title: "Goal Progress",
                description:
                  "Track achievement of treatment objectives with visual progress indicators.",
              },
              {
                icon: (
                  <LineChart className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                ),
                title: "Intervention Analysis",
                description:
                  "Compare effectiveness of different strategies to optimize treatment plans.",
              },
              {
                icon: (
                  <PieChart className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />
                ),
                title: "Reporting & Exports",
                description:
                  "Generate professional reports and data exports for stakeholders.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ListFilter className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Customizable Data Views
                      </h3>
                      <p className="text-muted-foreground">
                        Filter, sort, and customize visualizations to focus on
                        the metrics that matter most to your clients and
                        practice.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Multi-User Collaboration
                      </h3>
                      <p className="text-muted-foreground">
                        Enable seamless collaboration between RBTs, BCBAs, and
                        other team members with shared data access and
                        role-based permissions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Goal className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Goal Alignment Tracking
                      </h3>
                      <p className="text-muted-foreground">
                        Ensure all clinical activities align with treatment
                        goals and track progress toward specific objectives with
                        automated milestone indicators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                Advanced Features
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Beyond Basic Analytics
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our tracking system goes beyond simple charts to provide
                comprehensive insights that transform your practice and help
                clients achieve better outcomes.
              </p>

              <ul className="space-y-3">
                {[
                  "Client progress comparisons against research benchmarks",
                  "Predictive analytics to forecast treatment timelines",
                  "Automatic identification of skill acquisition patterns",
                  "Early detection of regression or plateaus",
                  "Parent-friendly progress summaries and visualizations",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powerful Reporting Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Generate professional, customizable reports for all stakeholders
              in the ABA therapy process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Parent/Caregiver Reports",
                icon: <Users className="w-6 h-6 text-green-600" />,
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
                icon: <BarChart2 className="w-6 h-6 text-teal-600" />,
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
                icon: <Share2 className="w-6 h-6 text-cyan-600" />,
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      {reportType.icon}
                    </div>
                    <h3 className="text-xl font-semibold">
                      {reportType.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {reportType.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesCTA
        title="Start Making Data-Driven Decisions Today"
        description="Join hundreds of ABA practices that have improved client outcomes and treatment efficacy with our advanced tracking tools."
      />
    </>
  );
}
