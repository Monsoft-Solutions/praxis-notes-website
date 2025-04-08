import Image from "next/image";
import Link from "next/link";
import { Button } from "website/components/ui/button";
import { ArrowRight, CheckCircle, Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient with more vibrant colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-70 dark:from-blue-950/30 dark:to-purple-950/30" />

      <div className="relative pt-20 md:pt-28 pb-20 px-4 sm:px-6 mx-auto container max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-2">
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                New: AI-Powered RBT Notes
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
                Effortless ABA Session Notes.{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Instantly.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground md:pr-8 leading-relaxed">
                Generate detailed, insurance-ready ABA session notes with AI.
                Save 75% of your documentation time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <Link href="/waitlist">
                <Button
                  variant="gradient"
                  size="xl"
                  className="w-full sm:w-auto font-medium"
                >
                  Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto font-medium"
                >
                  <Play className="mr-2 h-5 w-5" /> Watch Demo
                </Button>
              </Link>
            </div>

            <div className="space-y-3 pt-6">
              <p className="text-sm font-medium text-muted-foreground">
                Trusted by ABA professionals nationwide
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "No credit card required",
                  "Cancel anytime",
                  "HIPAA compliant",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 border-t">
              <div className="flex flex-col">
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="text-yellow-500 mr-1">
                        ⭐
                      </div>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  Trusted by 1,000+ professionals
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image
                    src="/window.svg"
                    alt="Window icon"
                    width={20}
                    height={20}
                    className="mr-1 text-blue-500"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  Used by leading ABA clinics
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image
                    src="/globe.svg"
                    alt="Globe icon"
                    width={20}
                    height={20}
                    className="mr-1 text-green-500"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  HIPAA-ready, secure
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-[550px] rounded-2xl overflow-hidden border-2 border-purple-200/50 dark:border-purple-900/30 bg-background shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/40 dark:to-purple-950/40" />
              <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="relative p-4 pt-14 h-full">
                {/* App mockup with better placeholder visuals */}
                <div className="w-full h-full rounded-lg bg-white dark:bg-gray-800 flex flex-col p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-32 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-md"></div>
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-full"></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="w-full h-12 bg-gray-100 dark:bg-gray-700 rounded-md"></div>
                    <div className="w-full h-24 bg-blue-50 dark:bg-blue-900/20 rounded-md"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-36 bg-gray-100 dark:bg-gray-700 rounded-md"></div>
                      <div className="h-36 bg-gray-100 dark:bg-gray-700 rounded-md"></div>
                    </div>
                    <div className="w-full h-32 bg-purple-50 dark:bg-purple-900/20 rounded-md"></div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <div className="w-28 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
