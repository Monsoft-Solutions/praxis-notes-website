import {
  Brain,
  FileText,
  MessageSquareText,
  Smartphone,
  Check,
  Sparkles,
  SearchCheck,
  BarChart3,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "website/components/ui/card";

const featuresData = [
  {
    icon: <MessageSquareText className="h-12 w-12 text-blue-500" />,
    iconBg: "bg-blue-100 dark:bg-blue-900/20",
    title: "AI-Powered Note Generation",
    description:
      "Supports CPT Codes 97153–97158. Generate detailed session notes in seconds with our advanced AI.",
    benefits: [
      "Save 3+ hours per week",
      "Reduce documentation stress",
      "Maintain clinical quality",
    ],
    color: "blue",
  },
  {
    icon: <SearchCheck className="h-12 w-12 text-indigo-500" />,
    iconBg: "bg-indigo-100 dark:bg-indigo-900/20",
    title: "Note Review & Enhancement",
    description:
      "Upload existing notes for AI analysis, receive suggestions for improvements, and ensure compliance with billing requirements.",
    benefits: [
      "Identify documentation gaps",
      "Enhance clinical clarity",
      "Ensure billing compliance",
    ],
    color: "indigo",
  },
  {
    icon: <Brain className="h-12 w-12 text-purple-500" />,
    iconBg: "bg-purple-100 dark:bg-purple-900/20",
    title: "BCBA & RBT Configurable Templates",
    description:
      "Customize templates to match your clinic's requirements and individual client needs.",
    benefits: [
      "Match your clinic's style",
      "Personalized to each client",
      "Unlimited template options",
    ],
    color: "purple",
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-emerald-500" />,
    iconBg: "bg-emerald-100 dark:bg-emerald-900/20",
    title: "Progress Tracking & Reporting",
    description:
      "Monitor client goals, track behavioral trends, and generate comprehensive progress reports for stakeholders.",
    benefits: [
      "Visualize treatment outcomes",
      "Identify intervention effectiveness",
      "Generate parent-friendly reports",
    ],
    color: "emerald",
  },
  {
    icon: <Smartphone className="h-12 w-12 text-green-500" />,
    iconBg: "bg-green-100 dark:bg-green-900/20",
    title: "Mobile-Friendly & Web Access",
    description:
      "Access your notes from anywhere on any device. Perfect for in-clinic and remote sessions.",
    benefits: [
      "Work from anywhere",
      "Easy mobile notes",
      "Real-time synchronization",
    ],
    color: "green",
  },
  {
    icon: <FileText className="h-12 w-12 text-amber-500" />,
    iconBg: "bg-amber-100 dark:bg-amber-900/20",
    title: "Billing-Compliant Formatting",
    description:
      "Insurance-ready notes formatted to meet billing requirements and reduce claim rejections.",
    benefits: [
      "Reduce claim rejections",
      "Standardized format",
      "Automatic compliance checks",
    ],
    color: "amber",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      {/* Decorative background elements */}
      <div className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/10 dark:to-transparent -z-10"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="px-4 sm:px-6 mx-auto container max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 mb-4">
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2" />
            <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
              Save 75% of documentation time
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Features Built for ABA Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Everything you need to streamline documentation and focus on what
            matters most - your clients and their progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-800 bg-background/80 backdrop-blur-sm hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div
                  className={`mb-5 inline-flex p-3 rounded-lg ${feature.iconBg}`}
                >
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base text-foreground/80 mt-2">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check
                        className={`h-5 w-5 mt-0.5 text-${feature.color}-500 shrink-0`}
                      />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
              All features included in every plan.{" "}
              <a href="/pricing" className="underline font-semibold">
                View pricing →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
