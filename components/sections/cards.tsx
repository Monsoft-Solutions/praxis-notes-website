import React from "react";
import { Card } from "website/components/ui/card";
import { cn } from "website/lib/utils";

// Team Card Component
interface TeamCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function TeamCard({
  icon,
  title,
  description,
  className,
}: TeamCardProps) {
  return (
    <Card variant="aboutTeam" className={className}>
      <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-slate-700 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </Card>
  );
}

// Value Card Component
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  className?: string;
}

export function ValueCard({
  icon,
  title,
  description,
  points,
  className,
}: ValueCardProps) {
  return (
    <Card variant="aboutValue" className={className}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 dark:bg-slate-700 rounded-bl-full z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gray-100 dark:bg-slate-700 mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2">
          {points.map((point, pointIndex) => (
            <li key={pointIndex} className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 dark:text-green-400 text-xs">
                  ✓
                </span>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

// Info Box Component
interface InfoBoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  textCenter?: boolean;
}

export function InfoBox({
  title,
  children,
  className,
  textCenter = false,
}: InfoBoxProps) {
  return (
    <Card
      variant="infoBox"
      className={cn(textCenter && "text-center", className)}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      <div className="text-gray-700 dark:text-gray-200">{children}</div>
    </Card>
  );
}

// Comparison List Item
interface ComparisonItemProps {
  text: string;
  type: "positive" | "negative";
}

export function ComparisonItem({ text, type }: ComparisonItemProps) {
  return (
    <li className="flex items-start gap-3">
      <div
        className={cn(
          "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
          type === "positive"
            ? "bg-green-100 dark:bg-green-900"
            : "bg-red-100 dark:bg-red-900"
        )}
      >
        <span
          className={cn(
            "text-sm",
            type === "positive"
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          )}
        >
          {type === "positive" ? "✓" : "✕"}
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-200 m-0">{text}</p>
    </li>
  );
}

// Comparison Box Component
interface ComparisonBoxProps {
  title: string;
  items: Array<{ text: string; type: "positive" | "negative" }>;
  className?: string;
  bgColor?: string;
}

export function ComparisonBox({
  title,
  items,
  className,
  bgColor,
}: ComparisonBoxProps) {
  const defaultBgColor = bgColor || "bg-gray-50 dark:bg-slate-900";

  return (
    <div
      className={cn(
        "relative aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          defaultBgColor
        )}
      >
        <Card variant="comparisonBox">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            {title}
          </h3>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <ComparisonItem key={index} text={item.text} type={item.type} />
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

// Section Component
interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({
  title,
  subtitle,
  children,
  className,
  dark = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        dark ? "bg-slate-900 text-white" : "bg-white text-gray-900",
        className
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          {subtitle && (
            <p
              className={cn(
                "text-xl",
                dark ? "text-gray-300" : "text-gray-600"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
