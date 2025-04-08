import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "website/components/ui/accordion";

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
  return (
    <section className={`py-16 md:py-24 bg-muted/50 ${className}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                <span>{badge}</span>
              </div>
            )}
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border border-border rounded-lg px-6 mb-4 last:mb-0"
              >
                <AccordionTrigger className="text-lg font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
