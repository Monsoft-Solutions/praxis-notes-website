import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "website/components/ui/accordion";
import { HelpCircle, ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  items: FAQItem[];
  className?: string;
}

const FAQ = ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
  badge = "Common Questions",
  items,
  className = "",
}: FAQProps) => {
  // ABA theme colors for accordion items with enhanced styling
  const itemColors = [
    {
      border: "border-blue-200",
      bg: "bg-blue-50",
      hover: "hover:bg-blue-100",
      thumbTack: "bg-blue-400",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      border: "border-green-200",
      bg: "bg-green-50",
      hover: "hover:bg-green-100",
      thumbTack: "bg-green-400",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      border: "border-orange-200",
      bg: "bg-orange-50",
      hover: "hover:bg-orange-100",
      thumbTack: "bg-orange-400",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      border: "border-yellow-200",
      bg: "bg-yellow-50",
      hover: "hover:bg-yellow-100",
      thumbTack: "bg-yellow-400",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      border: "border-blue-200",
      bg: "bg-blue-50",
      hover: "hover:bg-blue-100",
      thumbTack: "bg-blue-400",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    }, // Cycle back
  ];

  // Irregular border radius options for hand-drawn effect
  const borderRadiusOptions = [
    "25px 32px 22px 35px",
    "28px 35px 25px 38px",
    "30px 38px 28px 42px",
    "26px 33px 24px 36px",
    "32px 40px 30px 44px",
  ];

  // Thumb tack styles
  const thumbTackStyles = ["round", "square", "triangle"];

  return (
    <section className={`relative ${className}`} id="faq">
      {/* Background gradients - matching pricing section */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 via-yellow-50/60 to-green-50/80"></div>

      {/* Subtle transition overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-blue-50/20"></div>

      {/* Hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div
          className="absolute left-20 top-32 h-16 w-16 rounded-full border-2 border-green-300 opacity-25 hidden sm:block"
          style={{ transform: "rotate(-0.2deg)" }}
        ></div>

        <div
          className="absolute right-16 top-1/4 h-14 w-14 border-2 border-blue-300 opacity-30 hidden sm:block"
          style={{
            transform: "rotate(0.3deg)",
            borderRadius: "20px 26px 18px 30px",
          }}
        ></div>

        <div
          className="absolute left-1/3 bottom-48 h-12 w-12 border-2 border-orange-300 opacity-25 hidden sm:block"
          style={{
            transform: "rotate(-0.1deg)",
            borderRadius: "16px 22px 14px 26px",
          }}
        ></div>

        {/* Scattered dots */}
        <div className="absolute right-1/4 bottom-40 h-3 w-3 rounded-full bg-yellow-300 opacity-40 hidden sm:block"></div>
        <div className="absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-green-300 opacity-50 hidden sm:block"></div>
        <div className="absolute right-1/3 top-2/3 h-2 w-2 rounded-full bg-blue-300 opacity-45 hidden sm:block"></div>
      </div>

      <div className="relative py-20 md:py-28 px-4 sm:px-6 mx-auto container max-w-4xl">
        {/* Header - always show with improved styling */}
        <div className="text-center mb-16">
          {/* Badge with thumb tack */}
          <div
            className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-green-300 mb-8 shadow-lg relative"
            style={{
              borderRadius: "22px 30px 20px 34px",
              transform: "rotate(-0.1deg)",
            }}
          >
            {/* Badge thumb tack */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-green-400 shadow-sm"></div>
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <HelpCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm font-quicksand font-bold text-green-700">
              {badge}
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-quicksand font-bold tracking-tight mb-8 text-gray-900 leading-tight"
            style={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            {title.includes("Questions") ? (
              <>
                Frequently Asked
                <br />
                <span className="text-green-600">Questions</span>
              </>
            ) : (
              title
            )}
          </h2>

          <p className="text-xl md:text-2xl font-nunito text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-6">
          {items.map((item, index) => {
            const colorTheme = itemColors[index % itemColors.length];
            const borderRadius =
              borderRadiusOptions[index % borderRadiusOptions.length];
            const thumbTackStyle =
              thumbTackStyles[index % thumbTackStyles.length];

            return (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="relative transition-all duration-300 hover:scale-[1.02] hover:z-10 border-0"
              >
                <div
                  className={`relative bg-white/95 backdrop-blur-sm border-2 ${colorTheme.border} shadow-xl transition-all duration-300 hover:shadow-2xl overflow-visible`}
                  style={{
                    borderRadius: borderRadius,
                  }}
                >
                  {/* Thumb tack effects */}
                  {thumbTackStyle === "round" && (
                    <div className="absolute -top-3 right-8 h-5 w-5 transform z-10">
                      <div
                        className={`h-full w-full rounded-full ${colorTheme.thumbTack} shadow-lg`}
                      ></div>
                      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                    </div>
                  )}

                  {thumbTackStyle === "square" && (
                    <div
                      className={`absolute -top-2 right-8 h-4 w-4 rotate-45 transform ${colorTheme.thumbTack} shadow-lg z-10`}
                    ></div>
                  )}

                  {thumbTackStyle === "triangle" && (
                    <div className="absolute -top-3 left-8 z-10">
                      <div
                        className="h-0 w-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent"
                        style={{
                          borderBottomColor:
                            colorTheme.thumbTack === "bg-orange-400"
                              ? "#fb923c"
                              : colorTheme.thumbTack === "bg-green-400"
                              ? "#4ade80"
                              : colorTheme.thumbTack === "bg-blue-400"
                              ? "#60a5fa"
                              : "#facc15",
                        }}
                      ></div>
                    </div>
                  )}

                  <AccordionTrigger
                    className="text-left font-quicksand font-semibold text-gray-800 py-8 px-8 hover:no-underline [&[data-state=open]>div>svg]:rotate-180"
                    style={{
                      borderRadius: borderRadius,
                    }}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className={`flex items-center justify-center w-12 h-12 ${colorTheme.iconBg} border-2 ${colorTheme.border} shadow-md flex-shrink-0`}
                        style={{
                          borderRadius: "12px 16px 10px 18px",
                        }}
                      >
                        <HelpCircle
                          className={`h-6 w-6 ${colorTheme.iconColor}`}
                        />
                      </div>
                      <span className="flex-1 text-lg md:text-xl leading-relaxed text-gray-900">
                        {item.question}
                      </span>
                      <ChevronDown className="h-6 w-6 text-gray-500 transition-transform duration-300 flex-shrink-0" />
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-8 pb-8">
                    <div className="pl-16">
                      {" "}
                      {/* Align with question text */}
                      <div
                        className={`p-6 ${colorTheme.bg} border-2 ${colorTheme.border} border-dashed font-nunito text-gray-700 leading-relaxed text-base shadow-inner`}
                        style={{
                          borderRadius: "16px 22px 14px 26px",
                        }}
                      >
                        {item.answer}
                      </div>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
