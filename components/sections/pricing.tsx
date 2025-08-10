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
import { Check, FileText, Edit3, DollarSign } from "lucide-react";

const pricingPlans = [
  {
    name: "Free Forever",
    description: "Get started with no cost",
    price: "$0",
    pricePerNote: "$0.00",
    duration: "forever",
    billingOptions: [
      {
        label: "Forever",
        price: "$0",
        pricePerNote: "$0.00",
        discount: null,
      },
    ],
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
    cardBorder: "border-green-200",
    borderStyle: "border-solid",
    thumbTackStyle: "round",
    thumbTackColor: "bg-green-400",
    cardRotation: "rotate-[-0.2deg]",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
    buttonColor: "bg-green-400 hover:bg-green-500",
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
    cardBorder: "border-blue-200",
    borderStyle: "border-dashed",
    thumbTackStyle: "square",
    thumbTackColor: "bg-blue-400",
    cardRotation: "rotate-[0.3deg]",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    buttonColor: "bg-blue-400 hover:bg-blue-500",
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
    cardBorder: "border-orange-200",
    borderStyle: "border-solid",
    thumbTackStyle: "triangle",
    thumbTackColor: "bg-orange-400",
    cardRotation: "rotate-[-0.1deg]",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
    buttonColor: "bg-orange-400 hover:bg-orange-500",
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative">
      {/* Seamless background transition from Testimonials */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-green-50/60 to-orange-50/80"></div>

      {/* Subtle transition overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-yellow-50/20"></div>

      {/* Hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div
          className="absolute left-16 top-40 h-14 w-14 rounded-full border-2 border-blue-300 opacity-25 hidden sm:block"
          style={{ transform: "rotate(0.2deg)" }}
        ></div>

        <div
          className="absolute right-20 top-1/3 h-12 w-12 border-2 border-orange-300 opacity-30 hidden sm:block"
          style={{
            transform: "rotate(-0.1deg)",
            borderRadius: "18px 24px 16px 28px",
          }}
        ></div>

        <div
          className="absolute left-1/4 bottom-40 h-16 w-16 border-2 border-green-300 opacity-25 hidden sm:block"
          style={{
            transform: "rotate(0.3deg)",
            borderRadius: "22px 28px 20px 32px",
          }}
        ></div>

        {/* Scattered dots */}
        <div className="absolute right-1/3 bottom-32 h-3 w-3 rounded-full bg-yellow-300 opacity-40 hidden sm:block"></div>
        <div className="absolute left-1/3 top-1/2 h-2 w-2 rounded-full bg-blue-300 opacity-50 hidden sm:block"></div>
        <div className="absolute right-1/4 top-2/3 h-2 w-2 rounded-full bg-orange-300 opacity-45 hidden sm:block"></div>
      </div>

      <div className="relative py-20 md:py-28 px-4 sm:px-6 mx-auto container max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Badge with thumb tack */}
          <div
            className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-blue-300 mb-8 shadow-lg relative"
            style={{
              borderRadius: "22px 30px 20px 34px",
              transform: "rotate(-0.1deg)",
            }}
          >
            {/* Badge thumb tack */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-blue-400 shadow-sm"></div>
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <DollarSign className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-quicksand font-bold text-blue-700">
              Start free, pay only for what you need
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-quicksand font-bold tracking-tight mb-8 text-gray-900 leading-tight"
            style={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Simple, Transparent
            <br />
            <span className="text-blue-600">Pricing</span>
          </h2>

          <p className="text-xl md:text-2xl font-nunito text-gray-700 mb-8 leading-relaxed">
            Choose the plan that works best for you. No hidden fees.
          </p>

          {/* Billing toggle */}
          <div
            className="inline-flex items-center gap-4 px-6 py-4 bg-white/90 backdrop-blur-sm border-2 border-green-200 border-dashed shadow-lg"
            style={{
              borderRadius: "20px 28px 18px 32px",
            }}
          >
            {/* Small decorative thumb tack */}
            <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm"></div>

            <span
              className={`text-sm font-quicksand font-bold ${
                !isAnnual ? "text-blue-600" : "text-gray-500"
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
                className={`text-sm font-quicksand font-bold ${
                  isAnnual ? "text-blue-600" : "text-gray-500"
                }`}
              >
                Annual
              </span>
              <span
                className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-quicksand font-bold border border-green-200"
                style={{
                  borderRadius: "8px 12px 6px 10px",
                }}
              >
                2 months free
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 hover:z-10 ${plan.cardRotation}`}
            >
              <Card
                className={`relative ${plan.cardBorder} ${
                  plan.borderStyle
                } border-2 bg-white/95 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl overflow-visible h-full flex flex-col ${
                  plan.highlight ? "border-4" : ""
                }`}
                style={{
                  borderRadius: "30px 38px 28px 42px",
                }}
              >
                {/* Popular badge for highlighted plan */}
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-orange-400 text-white text-xs font-quicksand font-bold shadow-lg z-10"
                    style={{
                      borderRadius: "12px 18px 10px 16px",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                {/* Thumb tack effects */}
                {plan.thumbTackStyle === "round" && (
                  <div className="absolute -top-3 right-8 h-5 w-5 transform z-10">
                    <div
                      className={`h-full w-full rounded-full ${plan.thumbTackColor} shadow-lg`}
                    ></div>
                    <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                  </div>
                )}

                {plan.thumbTackStyle === "square" && (
                  <div
                    className={`absolute -top-2 right-8 h-4 w-4 rotate-45 transform ${plan.thumbTackColor} shadow-lg z-10`}
                  ></div>
                )}

                {plan.thumbTackStyle === "triangle" && (
                  <div className="absolute -top-3 left-8 z-10">
                    <div
                      className="h-0 w-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent"
                      style={{
                        borderBottomColor:
                          plan.thumbTackColor === "bg-orange-400"
                            ? "#fb923c"
                            : "#facc15",
                      }}
                    ></div>
                  </div>
                )}

                <CardHeader className={`${plan.highlight ? "pt-10" : "pt-8"}`}>
                  <CardTitle className="text-2xl font-quicksand font-bold text-gray-900 text-center">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="font-nunito text-gray-600 text-center">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col">
                  <div className="mb-6 text-center">
                    <div className="flex flex-col mb-2">
                      <div className="flex items-end justify-center mb-1">
                        <span className="text-4xl font-quicksand font-bold text-gray-900">
                          {plan.billingOptions.length > 1 && isAnnual
                            ? plan.billingOptions[1].price
                            : plan.billingOptions[0].price}
                        </span>
                        <span className="text-gray-600 ml-1 font-nunito">
                          {plan.billingOptions.length > 1 && isAnnual
                            ? "/year"
                            : `/${plan.duration}`}
                        </span>
                      </div>
                      {plan.billingOptions.length > 1 &&
                        isAnnual &&
                        plan.billingOptions[1].discount && (
                          <div
                            className="inline-block mx-auto px-2 py-1 bg-green-100 text-green-700 text-xs font-quicksand font-bold border border-green-200 mb-2"
                            style={{
                              borderRadius: "8px 12px 6px 10px",
                            }}
                          >
                            {plan.billingOptions[1].discount}
                          </div>
                        )}
                      <div className="text-xs font-nunito text-gray-600">
                        <span className={`font-bold ${plan.iconColor}`}>
                          {plan.billingOptions.length > 1 && isAnnual
                            ? plan.billingOptions[1].pricePerNote
                            : plan.billingOptions[0].pricePerNote}
                        </span>{" "}
                        per note
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div
                            className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5 ${
                              index === 0
                                ? "bg-green-600"
                                : index === 1
                                ? "bg-blue-600"
                                : "bg-orange-600"
                            }`}
                          >
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm font-nunito text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="mt-auto pt-6">
                  <Link
                    href="https://app.praxisnotes.com/auth/sign-up?utm_source=website&utm_medium=cta&utm_campaign=pricing-cards&utm_content=get-started-button"
                    className="w-full"
                  >
                    <Button
                      className={`w-full h-12 ${plan.buttonColor} text-white font-quicksand font-semibold transition-all hover:shadow-md`}
                      style={{
                        borderRadius: "15px 20px 12px 18px",
                      }}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {/* Usage explanation section */}
        <div className="mt-20">
          <div
            className="text-center mb-12 px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-yellow-300 border-dashed shadow-lg relative max-w-md mx-auto"
            style={{
              borderRadius: "25px 32px 22px 35px",
              transform: "rotate(0.1deg)",
            }}
          >
            {/* CTA thumb tack */}
            <div className="absolute -top-2 right-8 h-4 w-4 rotate-45 transform bg-yellow-400 shadow-lg"></div>

            <h3 className="text-2xl font-quicksand font-bold text-yellow-700">
              Understanding Usage & Credits
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* New Note Generation Card */}
            <div
              className="relative bg-white/95 backdrop-blur-sm p-6 border-2 border-blue-200 border-dashed shadow-lg flex-1 min-w-[280px] max-w-[320px] text-center transition-all duration-300 hover:scale-105"
              style={{
                borderRadius: "25px 32px 22px 35px",
                transform: "rotate(-0.1deg)",
              }}
            >
              {/* Small thumb tack */}
              <div className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm"></div>

              <div
                className="mb-4 w-16 h-16 flex items-center justify-center mx-auto bg-blue-100 border-2 border-blue-200 shadow-md"
                style={{
                  borderRadius: "15px 20px 12px 18px",
                }}
              >
                <FileText className="h-8 w-8 text-blue-600" />
              </div>

              <h4 className="text-lg font-quicksand font-bold mb-2 text-gray-900">
                New Note Generation
              </h4>

              <span
                className="inline-block py-1 px-3 bg-blue-100 text-blue-600 text-sm font-quicksand font-bold border border-blue-200 mb-3"
                style={{
                  borderRadius: "10px 14px 8px 12px",
                }}
              >
                1 Note Usage
              </span>

              <p className="text-sm font-nunito text-gray-600">
                Creating a new session note from scratch
              </p>
            </div>

            {/* Note Revision Card */}
            <div
              className="relative bg-white/95 backdrop-blur-sm p-6 border-2 border-green-200 shadow-lg flex-1 min-w-[280px] max-w-[320px] text-center transition-all duration-300 hover:scale-105"
              style={{
                borderRadius: "28px 35px 25px 38px",
                transform: "rotate(0.2deg)",
              }}
            >
              {/* Round thumb tack */}
              <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-green-400 shadow-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div
                className="mb-4 w-16 h-16 flex items-center justify-center mx-auto bg-green-100 border-2 border-green-200 shadow-md"
                style={{
                  borderRadius: "15px 20px 12px 18px",
                }}
              >
                <Edit3 className="h-8 w-8 text-green-600" />
              </div>

              <h4 className="text-lg font-quicksand font-bold mb-2 text-gray-900">
                Note Revision
              </h4>

              <span
                className="inline-block py-1 px-3 bg-green-100 text-green-600 text-sm font-quicksand font-bold border border-green-200 mb-3"
                style={{
                  borderRadius: "10px 14px 8px 12px",
                }}
              >
                1 Note Usage
              </span>

              <p className="text-sm font-nunito text-gray-600">
                Updating or modifying an existing note
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-base font-nunito text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              Need more notes? All plans include the option to purchase
              additional note credits at any time. Additional credits never
              expire.
            </p>

            <Link href="/contact">
              <Button
                variant="outline"
                className="font-quicksand font-semibold border-2 border-orange-200 text-orange-600 hover:bg-orange-50"
                style={{
                  borderRadius: "12px 16px 10px 14px",
                }}
              >
                Contact us for enterprise pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
