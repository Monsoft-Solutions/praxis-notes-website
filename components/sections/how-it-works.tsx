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
  Play,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Enter Session Details",
    description:
      "Add basic information about your session, including client name, goals, and activities completed.",
    icon: <Clipboard className="h-10 w-10 text-blue-600" />,
    bulletPoints: [
      "Quick form with customizable fields",
      "Save client templates for faster entry",
      "Support for all CPT codes (97153-97158)",
    ],
    cardBorder: "border-blue-200",
    borderStyle: "border-solid",
    thumbTackStyle: "round",
    thumbTackColor: "bg-blue-400",
    cardRotation: "rotate-[-0.3deg]",
    iconBg: "bg-blue-100",
  },
  {
    number: "02",
    title: "AI Generates Your Note",
    description:
      "Our AI instantly creates a detailed, comprehensive session note based on your input.",
    icon: <Zap className="h-10 w-10 text-green-600" />,
    bulletPoints: [
      "Generates in less than 5 seconds",
      "Professional clinical language",
      "Automatically formats for billing",
    ],
    cardBorder: "border-green-200",
    borderStyle: "border-dashed",
    thumbTackStyle: "square",
    thumbTackColor: "bg-green-400",
    cardRotation: "rotate-[0.2deg]",
    iconBg: "bg-green-100",
  },
  {
    number: "03",
    title: "Review and Submit",
    description:
      "Make any adjustments needed or use as-is. The note is ready for submission to your EHR system.",
    icon: <CheckCircle className="h-10 w-10 text-orange-600" />,
    bulletPoints: [
      "Easy editing capabilities",
      "Export as PDF or copy to clipboard",
      "Integrates with popular EHR systems",
    ],
    cardBorder: "border-orange-200",
    borderStyle: "border-solid",
    thumbTackStyle: "triangle",
    thumbTackColor: "bg-orange-400",
    cardRotation: "rotate-[0.4deg]",
    iconBg: "bg-orange-100",
  },
];

const stats = [
  {
    value: "75%",
    label: "Time Saved",
    icon: <Clock className="h-6 w-6 text-blue-500" />,
    cardBorder: "border-blue-200",
    iconBg: "bg-blue-100",
    thumbTackColor: "bg-blue-400",
    rotation: "rotate-[-0.1deg]",
  },
  {
    value: "97%",
    label: "Acceptance Rate",
    icon: <FileText className="h-6 w-6 text-green-500" />,
    cardBorder: "border-green-200",
    iconBg: "bg-green-100",
    thumbTackColor: "bg-green-400",
    rotation: "rotate-[0.2deg]",
  },
  {
    value: "3.5h",
    label: "Weekly Time Saved",
    icon: <Clock className="h-6 w-6 text-orange-500" />,
    cardBorder: "border-orange-200",
    iconBg: "bg-orange-100",
    thumbTackColor: "bg-orange-400",
    rotation: "rotate-[-0.1deg]",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative">
      {/* Seamless background transition from Features */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-blue-50/60 to-yellow-50/80"></div>

      {/* Subtle transition overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-orange-50/20"></div>

      {/* Hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div
          className="absolute left-16 top-24 h-14 w-14 rounded-full border-2 border-green-300 opacity-25 hidden sm:block"
          style={{ transform: "rotate(0.1deg)" }}
        ></div>

        <div
          className="absolute right-20 top-1/3 h-10 w-10 border-2 border-blue-300 opacity-30 hidden sm:block"
          style={{
            transform: "rotate(-0.2deg)",
            borderRadius: "18px 22px 16px 28px",
          }}
        ></div>

        {/* Small decorative dots */}
        <div className="absolute left-1/4 bottom-20 h-2 w-2 rounded-full bg-orange-300 opacity-50 hidden sm:block"></div>
        <div className="absolute right-1/3 top-2/3 h-3 w-3 rounded-full bg-yellow-300 opacity-40 hidden sm:block"></div>
      </div>

      <div className="relative py-20 md:py-28 px-4 sm:px-6 mx-auto container max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Badge with thumb tack */}
          <div
            className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-green-300 mb-8 shadow-lg relative"
            style={{
              borderRadius: "22px 28px 20px 32px",
              transform: "rotate(-0.1deg)",
            }}
          >
            {/* Badge thumb tack */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-green-400 shadow-sm"></div>
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <span className="text-sm font-quicksand font-bold text-green-700">
              3 Simple Steps to Perfect Notes
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-quicksand font-bold tracking-tight mb-8 text-gray-900 leading-tight"
            style={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            How Praxis Notes
            <br />
            <span className="text-green-600">Works</span>
          </h2>

          <p className="text-xl md:text-2xl font-nunito text-gray-700 leading-relaxed">
            From session details to perfect documentation in seconds. No more
            hours spent writing notes.
          </p>
        </div>

        {/* Process steps with connecting lines */}
        <div className="relative mb-20">
          {/* Connector Line (visible on medium screens and up) */}
          <div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-orange-200 transform -translate-y-1/2 mx-16 z-0 opacity-60"
            style={{ borderRadius: "2px 4px 2px 6px" }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-300 hover:scale-[1.02] hover:z-20 ${step.cardRotation}`}
              >
                <Card
                  className={`relative ${step.cardBorder} ${step.borderStyle} border-2 bg-white/95 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl overflow-visible h-full`}
                  style={{
                    borderRadius: "28px 35px 25px 40px",
                  }}
                >
                  {/* Step number badge */}
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white font-quicksand font-bold border-4 border-white shadow-lg z-10"
                    style={{ fontSize: "18px" }}
                  >
                    {index + 1}
                  </div>

                  {/* Thumb tack effects */}
                  {step.thumbTackStyle === "round" && (
                    <div className="absolute -top-2 right-8 h-4 w-4 transform z-10">
                      <div
                        className={`h-full w-full rounded-full ${step.thumbTackColor} shadow-sm`}
                      ></div>
                      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                    </div>
                  )}

                  {step.thumbTackStyle === "square" && (
                    <div
                      className={`absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform ${step.thumbTackColor} shadow-sm z-10`}
                    ></div>
                  )}

                  {step.thumbTackStyle === "triangle" && (
                    <div className="absolute -top-2 left-8 z-10">
                      <div
                        className="h-0 w-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent"
                        style={{
                          borderBottomColor:
                            step.thumbTackColor === "bg-orange-400"
                              ? "#fb923c"
                              : "#60a5fa",
                        }}
                      ></div>
                    </div>
                  )}

                  <div className="p-8 pt-12">
                    {/* Icon */}
                    <div
                      className={`mb-6 w-16 h-16 flex items-center justify-center mx-auto ${step.iconBg} ${step.cardBorder} border-2 shadow-md`}
                      style={{
                        borderRadius: "15px 18px 12px 20px",
                      }}
                    >
                      {step.icon}
                    </div>

                    <h3 className="text-2xl font-quicksand font-bold text-gray-900 mb-4 leading-tight text-center">
                      {step.title}
                    </h3>

                    <p className="text-base font-nunito text-gray-600 mb-6 leading-relaxed text-center">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.bulletPoints.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm font-nunito text-gray-700"
                        >
                          <div className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0"></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section with hand-drawn styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 ${stat.rotation}`}
            >
              <div
                className={`relative bg-white/90 backdrop-blur-sm p-6 border-2 ${stat.cardBorder} border-dashed shadow-lg flex items-center space-x-4 overflow-visible`}
                style={{
                  borderRadius: "20px 25px 18px 28px",
                }}
              >
                {/* Small thumb tack */}
                <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 transform bg-yellow-400 shadow-sm"></div>

                <div
                  className={`p-3 rounded-full ${stat.iconBg} border-2 ${stat.cardBorder} shadow-sm`}
                >
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-quicksand font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm font-nunito text-gray-600">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video demo section with call-to-action */}
        <div
          className="relative bg-white/90 backdrop-blur-sm p-8 md:p-12 border-2 border-blue-200 border-dashed shadow-xl"
          style={{
            borderRadius: "32px 40px 28px 45px",
          }}
        >
          {/* Large thumb tack */}
          <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 transform">
            <div className="h-full w-full rounded-full bg-blue-400 shadow-lg"></div>
            <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center pt-4">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-3xl md:text-4xl font-quicksand font-bold text-gray-900">
                See It In Action
              </h3>
              <p className="text-lg font-nunito text-gray-700 leading-relaxed">
                Watch how Praxis Notes transforms a few simple inputs into
                detailed, professional ABA session notes in seconds.
              </p>

              <div className="pt-2">
                <Link href="https://app.praxisnotes.com/auth/sign-up">
                  <Button
                    size="lg"
                    className="h-12 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all hover:shadow-md"
                    style={{
                      borderRadius: "15px 18px 12px 20px",
                    }}
                  >
                    Try It Yourself <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3 relative">
              <div
                className="aspect-video w-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center p-6 shadow-xl border-2 border-blue-300"
                style={{
                  borderRadius: "25px 32px 22px 35px",
                }}
              >
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 cursor-pointer hover:bg-white/30 transition-colors group">
                    <Play className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-xl font-quicksand font-bold text-white">
                    Praxis Notes Demo
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
