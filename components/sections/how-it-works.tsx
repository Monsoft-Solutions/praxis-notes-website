import Link from "next/link";
import { Card } from "website/components/ui/card";
import { Button } from "website/components/ui/button";
import {
  Clipboard,
  Zap,
  CheckCircle,
  ArrowRight,
  FileText,
  Clock,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Enter Session Details",
    description:
      "Add basic information about your session, including client name, goals, and activities completed.",
    icon: <Clipboard className="h-10 w-10 text-blue-500" />,
    color: "blue",
    bulletPoints: [
      "Quick form with customizable fields",
      "Save client templates for faster entry",
      "Support for all CPT codes (97153-97158)",
    ],
  },
  {
    number: "02",
    title: "AI Generates Your Note",
    description:
      "Our AI instantly creates a detailed, comprehensive session note based on your input.",
    icon: <Zap className="h-10 w-10 text-purple-500" />,
    color: "purple",
    bulletPoints: [
      "Generates in less than 5 seconds",
      "Professional clinical language",
      "Automatically formats for billing",
    ],
  },
  {
    number: "03",
    title: "Review and Submit",
    description:
      "Make any adjustments needed or use as-is. The note is ready for submission to your EHR system.",
    icon: <CheckCircle className="h-10 w-10 text-green-500" />,
    color: "green",
    bulletPoints: [
      "Easy editing capabilities",
      "Export as PDF or copy to clipboard",
      "Integrates with popular EHR systems",
    ],
  },
];

const stats = [
  {
    value: "75%",
    label: "Time Saved",
    icon: <Clock className="h-6 w-6 text-blue-500" />,
  },
  {
    value: "97%",
    label: "Acceptance Rate",
    icon: <FileText className="h-6 w-6 text-green-500" />,
  },
  {
    value: "3.5h",
    label: "Weekly Time Saved",
    icon: <Clock className="h-6 w-6 text-purple-500" />,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50 dark:from-transparent dark:to-blue-950/10 -z-10"></div>

      <div className="px-4 sm:px-6 mx-auto container max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-4">
            <span className="text-xs font-medium text-green-600 dark:text-green-400">
              3 Simple Steps to Perfect Notes
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            How Praxis Note Works
          </h2>
          <p className="text-xl text-muted-foreground">
            From session details to perfect documentation in seconds. No more
            hours spent writing notes.
          </p>
        </div>

        {/* Process steps with connecting lines */}
        <div className="relative mb-20">
          {/* Connector Line (visible on medium screens and up) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 mx-16 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card
                key={index}
                className={`p-8 border border-${step.color}-100 dark:border-${step.color}-900/30 bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10`}
              >
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-${step.color}-500 flex items-center justify-center text-white font-bold border-4 border-white dark:border-gray-900`}
                >
                  {index + 1}
                </div>

                <div
                  className={`inline-flex p-3 rounded-lg bg-${step.color}-100 dark:bg-${step.color}-900/20 mb-5`}
                >
                  {step.icon}
                </div>

                <h3
                  className={`text-2xl font-bold mb-3 text-${step.color}-600 dark:text-${step.color}-400`}
                >
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-5">{step.description}</p>

                <ul className="space-y-2">
                  {step.bulletPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                    >
                      <div
                        className={`mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-${step.color}-500 shrink-0`}
                      ></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center space-x-4"
            >
              <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                {stat.icon}
              </div>
              <div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video demo section with call-to-action */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 md:p-10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">See It In Action</h3>
            <p className="text-lg text-muted-foreground">
              Watch how Praxis Note transforms a few simple inputs into
              detailed, professional ABA session notes in seconds.
            </p>

            <div className="pt-2">
              <Link href="/auth?signup=true">
                <Button variant="gradient" size="lg" className="font-medium">
                  Try It Yourself <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 relative rounded-xl overflow-hidden shadow-xl">
            <div className="aspect-video w-full">
              {/* Placeholder for video - can be replaced with actual video component */}
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-6">
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                  </div>
                  <p className="text-xl font-medium text-white">
                    Praxis Note Demo
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
