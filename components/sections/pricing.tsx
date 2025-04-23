"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "website/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "website/components/ui/card";
import { Switch } from "website/components/ui/switch";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free Forever",
    description: "Get started with no cost",
    price: "$0",
    pricePerNote: "$0",
    duration: "forever",
    billingOptions: null,
    features: [
      "1 client",
      "10 AI-generated notes",
      "10 note revisions",
      "Basic templates",
      "Web access",
      "Email support",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Individual",
    description: "Perfect for independent RBTs & BCBAs",
    price: "$19.99",
    pricePerNote: "$0.67",
    duration: "per month",
    billingOptions: [
      {
        label: "Monthly",
        price: "$19.99",
        pricePerNote: "$0.67",
        discount: null,
      },
      {
        label: "Annually",
        price: "$199.90",
        pricePerNote: "$0.56",
        discount: "2 months free",
      },
    ],
    features: [
      "1 client",
      "30 AI-generated notes/revisions",
      "Custom templates",
      "Mobile & web access",
      "Priority support",
      "Export to PDF/CSV",
      "HIPAA-compliant storage",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    description: "For growing practices & independent professionals",
    price: "$39",
    pricePerNote: "$0.65",
    duration: "per month",
    billingOptions: [
      { label: "Monthly", price: "$39", pricePerNote: "$0.65", discount: null },
      {
        label: "Annually",
        price: "$390",
        pricePerNote: "$0.54",
        discount: "2 months free",
      },
    ],
    features: [
      "Unlimited clients",
      "60 AI-generated notes/revisions",
      "Advanced templates",
      "Mobile & web access",
      "Priority support",
      "Export to PDF/CSV",
      "HIPAA-compliant storage",
      "Data analytics dashboard",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Team",
    description: "Ideal for clinics & groups",
    price: "$99",
    pricePerNote: "$0.50",
    duration: "per month",
    billingOptions: [
      { label: "Monthly", price: "$99", pricePerNote: "$0.50", discount: null },
      {
        label: "Annually",
        price: "$990",
        pricePerNote: "$0.41",
        discount: "2 months free",
      },
    ],
    features: [
      "Everything in Pro plan",
      "Unlimited clients",
      "200 AI-generated notes/revisions",
      "Shared templates library",
      "Team management dashboard",
      "Role-based permissions",
      "Advanced data analytics",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 px-8 bg-white dark:bg-deep-navy/30"
    >
      <div className="mx-auto container max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Choose the plan that works best for you. No hidden fees.
          </p>
          <div className="inline-block bg-soft-blue/10 dark:bg-soft-blue/20 rounded-full px-4 py-1 text-sm font-medium text-soft-blue mb-8">
            Start free, pay only for what you need
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <span
              className={`text-sm font-medium ${
                !isAnnual ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <div className="flex items-center space-x-2">
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                id="billing-toggle"
              />
              <label htmlFor="billing-toggle" className="sr-only">
                Toggle between monthly and annual billing
              </label>
            </div>
            <div className="flex items-center">
              <span
                className={`text-sm font-medium ${
                  isAnnual ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Annual
              </span>
              <span className="ml-1.5 inline-flex items-center rounded-full bg-mint-green/10 dark:bg-mint-green/20 px-2 py-0.5 text-xs font-medium text-mint-green">
                2 months free
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col h-full border-border ${
                plan.highlight
                  ? "border-soft-blue dark:border-soft-blue shadow-lg"
                  : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {plan.billingOptions ? (
                  <div className="mb-6">
                    <div className="flex flex-col mb-2">
                      <div className="flex items-end mb-1">
                        <span className="text-4xl font-bold">
                          {isAnnual
                            ? plan.billingOptions[1].price
                            : plan.billingOptions[0].price}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          {isAnnual ? "/year" : `/${plan.duration}`}
                        </span>
                      </div>
                      {isAnnual && plan.billingOptions[1].discount && (
                        <div className="text-xs mb-1">
                          <span className="inline-block bg-mint-green/10 dark:bg-mint-green/20 rounded-full px-2 py-0.5 text-xs font-medium text-mint-green mr-1">
                            {plan.billingOptions[1].discount}
                          </span>
                        </div>
                      )}
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium text-primary">
                          {isAnnual
                            ? plan.billingOptions[1].pricePerNote
                            : plan.billingOptions[0].pricePerNote}
                        </span>{" "}
                        per note
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">
                      /{plan.duration}
                    </span>
                  </div>
                )}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-mint-green mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href={
                    index === 3
                      ? "/contact"
                      : "https://app.praxisnotes.com/auth/sign-up"
                  }
                  className="w-full"
                >
                  <Button
                    variant={plan.highlight ? "default" : "outline"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">
            Understanding Usage & Credits
          </h3>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white dark:bg-deep-navy/50 p-5 rounded-lg shadow-sm border border-border flex-1 min-w-[240px] max-w-[280px] text-center">
              <div className="mb-2 text-soft-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto mb-1"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 18v-6"></path>
                  <path d="M8 18v-1"></path>
                  <path d="M16 18v-3"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-1">
                New Note Generation
              </h4>
              <span className="inline-block py-1 px-3 bg-soft-blue/10 dark:bg-soft-blue/20 text-soft-blue rounded-full text-sm font-medium mb-2">
                1 Note Usage
              </span>
              <p className="text-muted-foreground text-sm">
                Creating a new session note from scratch
              </p>
            </div>

            <div className="bg-white dark:bg-deep-navy/50 p-5 rounded-lg shadow-sm border border-border flex-1 min-w-[240px] max-w-[280px] text-center">
              <div className="mb-2 text-soft-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto mb-1"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-1">Note Revision</h4>
              <span className="inline-block py-1 px-3 bg-soft-blue/10 dark:bg-soft-blue/20 text-soft-blue rounded-full text-sm font-medium mb-2">
                1 Note Usage
              </span>
              <p className="text-muted-foreground text-sm">
                Updating or modifying an existing note
              </p>
            </div>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Need more notes? All plans include the option to purchase additional
            note credits at any time. Additional credits never expire.
          </p>

          <Link href="/contact">
            <Button variant="link">Contact us for enterprise pricing</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
