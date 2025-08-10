import Link from "next/link";
import Image from "next/image";
import {
  ClipboardCheck,
  RefreshCw,
  BarChart2,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "website/components/ui/button";

export default function FeaturesHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100"></div>

      {/* Hand-drawn background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div
          className="absolute left-16 top-32 h-16 w-16 rounded-full border-2 border-blue-200 opacity-20 hidden lg:block"
          style={{ transform: "rotate(0.1deg)" }}
        ></div>

        <div
          className="absolute right-20 top-40 h-12 w-12 border-2 border-green-200 opacity-25 hidden lg:block"
          style={{
            transform: "rotate(-0.15deg)",
            borderRadius: "16px 20px 14px 22px",
          }}
        ></div>

        <div
          className="absolute left-1/4 bottom-40 h-10 w-10 border-2 border-orange-200 opacity-30 hidden lg:block"
          style={{
            transform: "rotate(0.2deg)",
            borderRadius: "14px 18px 12px 20px",
          }}
        ></div>

        <div
          className="absolute right-1/3 bottom-32 h-8 w-8 border-2 border-yellow-200 opacity-25 hidden lg:block"
          style={{
            transform: "rotate(-0.1deg)",
            borderRadius: "12px 16px 10px 18px",
          }}
        ></div>

        {/* Small decorative dots */}
        <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-yellow-300 opacity-40 hidden lg:block"></div>
        <div className="absolute left-1/5 bottom-1/3 h-2 w-2 rounded-full bg-blue-300 opacity-35 hidden lg:block"></div>
        <div className="absolute right-1/5 top-1/4 h-4 w-4 rounded-full bg-green-200 opacity-30 hidden lg:block"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <div
              className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-blue-200"
              style={{ borderRadius: "20px 26px 18px 30px" }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-1.5 left-8 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm"></div>
              <span className="text-sm font-quicksand font-semibold text-blue-600 pt-1">
                <Zap className="inline w-4 h-4 mr-2" />
                AI-Powered ABA Documentation
              </span>
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold leading-tight text-gray-800">
                Streamline Your
                <span className="text-blue-500"> ABA Practice</span>
                <br />
                with <span className="text-green-500">Smart Features</span>
              </h1>

              <p className="text-xl md:text-2xl font-nunito text-gray-600 leading-relaxed max-w-2xl">
                Create, review, track, and ensure compliance for all your ABA
                documentation with our comprehensive suite of AI-powered tools
                designed specifically for RBTs and BCBAs.
              </p>
            </div>

            {/* Feature highlight cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  icon: ClipboardCheck,
                  label: "Create Notes",
                  color: "blue",
                },
                {
                  icon: RefreshCw,
                  label: "Review & Enhance",
                  color: "green",
                },
                {
                  icon: BarChart2,
                  label: "Track Progress",
                  color: "orange",
                },
                {
                  icon: Shield,
                  label: "Ensure Compliance",
                  color: "yellow",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`relative bg-white p-4 shadow-md border-2 border-${feature.color}-200 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  style={{
                    borderRadius:
                      index === 0
                        ? "16px 20px 14px 22px"
                        : index === 1
                        ? "18px 14px 20px 16px"
                        : index === 2
                        ? "20px 16px 18px 24px"
                        : "14px 22px 16px 18px",
                  }}
                >
                  {/* Mini thumb tack */}
                  <div
                    className={`absolute -top-1 ${
                      index === 0
                        ? "left-1/2 -translate-x-1/2"
                        : index === 1
                        ? "right-3"
                        : index === 2
                        ? "left-3"
                        : "right-1/2 translate-x-1/2"
                    }`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full bg-${feature.color}-400 shadow-sm`}
                    ></div>
                  </div>

                  <div className="pt-2">
                    <feature.icon
                      className={`w-6 h-6 mx-auto mb-2 text-${feature.color}-500`}
                    />
                    <div className="text-xs font-nunito font-semibold text-gray-700 leading-tight">
                      {feature.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#create">
                <Button
                  className="h-12 px-8 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all hover:shadow-md"
                  style={{ borderRadius: "14px 18px 12px 20px" }}
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Explore Features
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="h-12 px-8 border-2 border-green-300 text-green-600 hover:bg-green-50 font-quicksand font-semibold transition-all hover:shadow-md"
                  style={{ borderRadius: "12px 16px 14px 18px" }}
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Featured visual */}
          <div className="relative">
            {/* Main image container */}
            <div
              className="relative bg-white p-4 shadow-xl border-2 border-orange-200"
              style={{ borderRadius: "32px 28px 36px 30px" }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-2 right-12 h-4 w-4 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-orange-400 shadow-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div
                className="relative h-80 lg:h-96 w-full overflow-hidden"
                style={{ borderRadius: "24px 20px 28px 22px" }}
              >
                <Image
                  src="/images/features-hero.jpg"
                  alt="ABA professionals using AI-powered documentation tools"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4">
                  <div
                    className="bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md border border-blue-200"
                    style={{ borderRadius: "12px 16px 10px 14px" }}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-quicksand font-semibold text-gray-700">
                        Compliance Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <div
              className="absolute -left-6 top-16 bg-green-100 border-2 border-green-200 p-3 shadow-lg hidden lg:block"
              style={{
                borderRadius: "16px 20px 14px 18px",
                transform: "rotate(-2deg)",
              }}
            >
              <div className="text-center">
                <ClipboardCheck className="w-5 h-5 mx-auto mb-1 text-green-600" />
                <div className="text-xs font-quicksand font-semibold text-green-700">
                  Create
                </div>
              </div>
            </div>

            <div
              className="absolute -right-4 bottom-20 bg-yellow-100 border-2 border-yellow-200 p-3 shadow-lg hidden lg:block"
              style={{
                borderRadius: "14px 18px 12px 16px",
                transform: "rotate(1.5deg)",
              }}
            >
              <div className="text-center">
                <Shield className="w-5 h-5 mx-auto mb-1 text-yellow-600" />
                <div className="text-xs font-quicksand font-semibold text-yellow-700">
                  Comply
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
