import Image from "next/image";
import Link from "next/link";
import { Button } from "website/components/ui/button";
import { ArrowRight, CheckCircle, Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-deep-navy">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-soft-blue/10 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-lavender/10 blur-3xl" />
      </div>

      <div className="relative pt-20 md:pt-28 pb-20 px-4 sm:px-6 mx-auto container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-soft-blue/10 dark:bg-soft-blue/20 border border-soft-blue/20 dark:border-soft-blue/30 mb-2">
              <span className="text-xs font-medium text-soft-blue dark:text-soft-blue">
                New: AI-Powered RBT Notes
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
                Effortless ABA Session Notes.{" "}
                <span className="bg-gradient-to-r from-soft-blue to-lavender bg-clip-text text-transparent">
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
                  variant="default"
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
                    <CheckCircle className="h-4 w-4 text-mint-green" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
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
                    className="mr-1 text-soft-blue"
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
                    className="mr-1 text-mint-green"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  HIPAA-ready, secure
                </p>
              </div>
            </div>
          </div>

          <div className=" relative aspect-video rounded-xl">
            <Image
              src="/images/illustrations/aba-progress.jpg"
              alt="ABA professional working on documentation"
              fill
              className="object-cover m-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
