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
    icon: <MessageSquareText className="h-12 w-12 text-soft-blue" />,
    iconBg: "bg-soft-blue/10 dark:bg-soft-blue/20",
    title: "AI-Powered Note Generation",
    description:
      "Supports CPT Codes 97153–97158. Generate detailed session notes in seconds with our advanced AI.",
    benefits: [
      "Save 3+ hours per week",
      "Reduce documentation stress",
      "Maintain clinical quality",
    ],
    color: "soft-blue",
  },
  {
    icon: <SearchCheck className="h-12 w-12 text-lavender" />,
    iconBg: "bg-lavender/10 dark:bg-lavender/20",
    title: "Note Review & Enhancement",
    description:
      "Upload existing notes for AI analysis, receive suggestions for improvements, and ensure compliance with billing requirements.",
    benefits: [
      "Identify documentation gaps",
      "Enhance clinical clarity",
      "Ensure billing compliance",
    ],
    color: "lavender",
  },
  {
    icon: <Brain className="h-12 w-12 text-deep-purple" />,
    iconBg: "bg-deep-purple/10 dark:bg-deep-purple/20",
    title: "BCBA & RBT Configurable Templates",
    description:
      "Customize templates to match your clinic's requirements and individual client needs.",
    benefits: [
      "Match your clinic's style",
      "Personalized to each client",
      "Unlimited template options",
    ],
    color: "deep-purple",
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-mint-green" />,
    iconBg: "bg-mint-green/10 dark:bg-mint-green/20",
    title: "Progress Tracking & Reporting",
    description:
      "Monitor client goals, track behavioral trends, and generate comprehensive progress reports for stakeholders.",
    benefits: [
      "Visualize treatment outcomes",
      "Identify intervention effectiveness",
      "Generate parent-friendly reports",
    ],
    color: "mint-green",
  },
  {
    icon: <Smartphone className="h-12 w-12 text-teal" />,
    iconBg: "bg-teal/10 dark:bg-teal/20",
    title: "Mobile-Friendly & Web Access",
    description:
      "Access your notes from anywhere on any device. Perfect for in-clinic and remote sessions.",
    benefits: [
      "Work from anywhere",
      "Easy mobile notes",
      "Real-time synchronization",
    ],
    color: "teal",
  },
  {
    icon: <FileText className="h-12 w-12 text-amber" />,
    iconBg: "bg-amber/10 dark:bg-amber/20",
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
    <section
      id="features"
      className="py-20 md:py-28 relative bg-ivory/50 dark:bg-deep-navy/50"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 bg-soft-blue/5 dark:bg-soft-blue/10 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-1/4 h-64 w-64 bg-lavender/5 dark:bg-lavender/10 rounded-full blur-3xl" />
      </div>

      <div className="px-4 sm:px-6 mx-auto container max-w-7xl relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-lavender/10 dark:bg-lavender/20 border border-lavender/20 dark:border-lavender/30 mb-4">
            <Sparkles className="h-4 w-4 text-lavender mr-2" />
            <span className="text-xs font-medium text-lavender">
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
              className="relative border border-border hover:shadow-aba-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <CardHeader className="pb-4">
                <div
                  className={`mb-5 inline-flex p-3 rounded-lg ${feature.iconBg}`}
                >
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-soft-blue dark:group-hover:text-soft-blue transition-colors">
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
                        className={`h-5 w-5 mt-0.5 text-${feature.color} shrink-0`}
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
          <div className="inline-block px-6 py-3 rounded-full bg-soft-blue/10 dark:bg-soft-blue/20 border border-soft-blue/20 dark:border-soft-blue/30">
            <p className="text-sm font-medium text-soft-blue dark:text-soft-blue">
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
