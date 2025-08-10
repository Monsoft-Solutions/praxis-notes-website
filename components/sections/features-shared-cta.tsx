import Link from "next/link";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

type FeaturesCTAProps = {
  title?: string;
  description?: string;
};

const FeaturesCTA = ({
  title = "Ready to Transform Your ABA Documentation?",
  description = "Join thousands of ABA professionals who have streamlined their workflow and reclaimed time for what matters most.",
}: FeaturesCTAProps) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-orange-100"></div>

      {/* Hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-16 top-20 h-12 w-12 rounded-full border-2 border-blue-300 opacity-30 hidden lg:block"
          style={{ transform: "rotate(0.2deg)" }}
        ></div>
        <div
          className="absolute right-20 top-32 h-8 w-8 border-2 border-green-300 opacity-25 hidden lg:block"
          style={{
            transform: "rotate(-0.1deg)",
            borderRadius: "12px 16px 10px 18px",
          }}
        ></div>
        <div className="absolute right-1/3 bottom-20 h-3 w-3 rounded-full bg-orange-300 opacity-40 hidden lg:block"></div>
        <div className="absolute left-1/4 bottom-32 h-2 w-2 rounded-full bg-yellow-400 opacity-50 hidden lg:block"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div
            className="relative bg-white p-8 md:p-12 shadow-2xl border-2 border-blue-200"
            style={{ borderRadius: "32px 28px 36px 24px" }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <div className="h-4 w-4 rounded-full bg-blue-400 shadow-sm"></div>
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <div className="text-center space-y-8">
              {/* Badge */}
              <div
                className="relative inline-flex items-center px-5 py-3 bg-gradient-to-r from-green-100 to-blue-100 shadow-lg w-fit border-2 border-green-200 mx-auto"
                style={{ borderRadius: "20px 26px 18px 30px" }}
              >
                <div className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-orange-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-green-600 pt-1">
                  <Sparkles className="inline w-4 h-4 mr-2" />
                  Platform Ready
                </span>
              </div>

              {/* Main content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold text-gray-800 leading-tight">
                  {title}
                </h2>
                <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  {description}
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 my-12">
                {[
                  {
                    icon: Users,
                    number: "2,500+",
                    label: "ABA Professionals",
                    color: "blue",
                  },
                  {
                    icon: Zap,
                    number: "50,000+",
                    label: "Notes Generated",
                    color: "green",
                  },
                  {
                    icon: ArrowRight,
                    number: "75%",
                    label: "Time Saved",
                    color: "orange",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`relative bg-gradient-to-br from-${stat.color}-50 to-white p-6 border-2 border-${stat.color}-200 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    style={{
                      borderRadius:
                        index === 0
                          ? "20px 16px 24px 12px"
                          : index === 1
                          ? "16px 24px 12px 20px"
                          : "24px 12px 20px 16px",
                    }}
                  >
                    <div
                      className={`absolute -top-1 ${
                        index % 2 === 0 ? "left-6" : "right-6"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full bg-${stat.color}-400 shadow-sm`}
                      ></div>
                    </div>

                    <div className="pt-2">
                      <stat.icon
                        className={`w-6 h-6 mx-auto mb-3 text-${stat.color}-500`}
                      />
                      <div
                        className={`text-2xl md:text-3xl font-quicksand font-bold text-${stat.color}-600 mb-2`}
                      >
                        {stat.number}
                      </div>
                      <div className="text-sm font-nunito text-gray-600 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://app.praxisnotes.com?utm_source=website&utm_medium=cta&utm_campaign=features_page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="h-14 px-8 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center"
                    style={{ borderRadius: "16px 20px 14px 22px" }}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Creating Notes Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm font-nunito text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>Insurance Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span>Free Trial</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent cards */}
          <div
            className="absolute -left-6 top-32 bg-green-100 border-2 border-green-200 p-4 shadow-lg hidden xl:block"
            style={{
              borderRadius: "18px 22px 16px 20px",
              transform: "rotate(-2deg)",
            }}
          >
            <div className="text-center">
              <Zap className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <div className="text-xs font-quicksand font-semibold text-green-700">
                Instant
              </div>
              <div className="text-xs font-quicksand font-semibold text-green-700">
                Setup
              </div>
            </div>
          </div>

          <div
            className="absolute -right-8 bottom-20 bg-orange-100 border-2 border-orange-200 p-4 shadow-lg hidden xl:block"
            style={{
              borderRadius: "16px 20px 14px 18px",
              transform: "rotate(1.5deg)",
            }}
          >
            <div className="text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-orange-600" />
              <div className="text-xs font-quicksand font-semibold text-orange-700">
                Trusted
              </div>
              <div className="text-xs font-quicksand font-semibold text-orange-700">
                Platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCTA;
