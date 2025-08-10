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
  // ABA theme colors for accordion items
  const itemColors = [
    { border: "border-blue-200", bg: "bg-blue-50", hover: "hover:bg-blue-100" },
    {
      border: "border-green-200",
      bg: "bg-green-50",
      hover: "hover:bg-green-100",
    },
    {
      border: "border-orange-200",
      bg: "bg-orange-50",
      hover: "hover:bg-orange-100",
    },
    {
      border: "border-yellow-200",
      bg: "bg-yellow-50",
      hover: "hover:bg-yellow-100",
    },
    { border: "border-blue-200", bg: "bg-blue-50", hover: "hover:bg-blue-100" }, // Cycle back
  ];

  // Irregular border radius options
  const borderRadiusOptions = [
    "18px 22px 16px 25px",
    "20px 16px 24px 18px",
    "22px 25px 18px 20px",
    "16px 20px 22px 16px",
    "24px 18px 20px 22px",
  ];

  return (
    <section className={`${className}`}>
      <div className="w-full">
        <div className="w-full">
          {/* Header - only show if not embedded (when we have title/subtitle) */}
          {(title !== "Frequently Asked Questions" ||
            subtitle !==
              "Find answers to common questions about our services") && (
            <div className="text-center mb-12">
              {badge && (
                <div className="relative inline-block mb-6">
                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-200 font-quicksand font-semibold text-gray-800 shadow-lg"
                    style={{
                      borderRadius: "20px 25px 18px 28px",
                    }}
                  >
                    <HelpCircle className="w-4 h-4 text-blue-400" />
                    <span>{badge}</span>
                  </div>
                  {/* Thumb tack */}
                  <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
                    <div className="h-full w-full rounded-full bg-blue-400 shadow-sm"></div>
                    <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                  </div>
                </div>
              )}

              <h2
                className="text-3xl font-quicksand font-bold mb-4 text-gray-800"
                style={{
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                }}
              >
                {title}
              </h2>
              <p className="text-lg text-gray-600 font-nunito">{subtitle}</p>
            </div>
          )}

          <Accordion type="single" collapsible className="w-full space-y-4">
            {items.map((item, index) => {
              const colorTheme = itemColors[index % itemColors.length];
              const borderRadius =
                borderRadiusOptions[index % borderRadiusOptions.length];

              return (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className={`relative bg-white border-2 ${colorTheme.border} shadow-lg transition-all duration-200 ${colorTheme.hover}`}
                  style={{
                    borderRadius: borderRadius,
                  }}
                >
                  <AccordionTrigger
                    className="text-left font-quicksand font-semibold text-gray-800 py-6 px-6 hover:no-underline [&[data-state=open]>svg]:rotate-180"
                    style={{
                      borderRadius: borderRadius,
                    }}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-lg ${colorTheme.bg} flex-shrink-0`}
                      >
                        <HelpCircle className="h-4 w-4 text-gray-600" />
                      </div>
                      <span className="flex-1 text-lg leading-relaxed">
                        {item.question}
                      </span>
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0" />
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-11">
                      {" "}
                      {/* Align with question text */}
                      <div
                        className={`p-4 ${colorTheme.bg} border ${colorTheme.border} font-nunito text-gray-700 leading-relaxed`}
                        style={{
                          borderRadius: "12px 15px 10px 18px",
                        }}
                      >
                        {item.answer}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
