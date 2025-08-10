import Image from "next/image";
import Link from "next/link";
import { Button } from "website/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Star,
  Shield,
  Globe,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen relative">
      {/* Main background gradient */}
      <div className="absolute inset-0 gradient-aba-main"></div>

      {/* Seamless transition overlay to features */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-100/60"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-orange-100/80"></div>

      {/* More colorful background decorations like the image */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Blue dots */}
        <div className="decoration-hidden-mobile left-10 top-20 dot-blue-md"></div>
        <div className="decoration-hidden-mobile left-20 top-32 dot-blue-sm"></div>

        {/* Green dots */}
        <div className="decoration-hidden-mobile left-1/4 top-16 dot-green-lg"></div>
        <div className="decoration-hidden-mobile left-1/3 bottom-40 dot-green-sm"></div>

        {/* Orange dots */}
        <div className="decoration-hidden-mobile right-16 top-24 dot-orange-md"></div>
        <div className="decoration-hidden-mobile right-1/4 bottom-20 dot-orange-sm"></div>

        {/* Yellow dots */}
        <div className="decoration-hidden-mobile right-20 bottom-32 dot-yellow-md"></div>
        <div className="decoration-hidden-mobile left-1/2 top-12 dot-yellow-sm"></div>

        {/* Additional scattered dots */}
        <div className="decoration-hidden-mobile left-3/4 top-40 dot-blue-sm"></div>
        <div className="decoration-hidden-mobile right-1/3 top-60 dot-green-xs"></div>
      </div>

      <div className="relative pt-20 md:pt-28 pb-20 px-4 sm:px-6 mx-auto container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {/* Badge Card with dashed border */}
            <div className="relative inline-flex items-center px-4 py-2 bg-white shadow-lg w-fit card-badge border-dashed-blue">
              {/* Thumb tack */}
              <div className="thumb-tack-square thumb-tack-blue"></div>

              <span className="text-sm font-quicksand font-semibold text-blue-500 pt-1">
                New: AI-Powered RBT Notes
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold leading-tight tracking-tight text-gray-800 text-hand-drawn">
                Effortless ABA Session Notes.{" "}
                <span className="text-blue-500">Instantly.</span>
              </h1>
              <p className="text-xl md:text-2xl font-nunito text-gray-600 md:pr-8 leading-relaxed">
                Generate detailed, insurance-ready ABA session notes with AI.
                Save 75% of your documentation time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <Link href="https://app.praxisnotes.com/auth/sign-up">
                <Button className="w-full sm:w-auto h-12 bg-blue-400 hover:bg-blue-500 text-white button-quicksand hover-lift button-hand-drawn-1">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Sign Up Free
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-12 text-green-500 hover:bg-green-50 button-quicksand hover-lift button-hand-drawn-2 border-dashed-green"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Trust indicators card with dashed border */}
            <div className="relative bg-white p-6 shadow-lg card-hand-drawn-1 border-dashed-green">
              {/* Triangle thumb tack */}
              <div className="thumb-tack-triangle thumb-tack-triangle-green"></div>

              <div className="pt-2 space-y-3">
                <p className="text-sm font-quicksand font-semibold text-gray-600">
                  Trusted by ABA professionals nationwide
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    "No credit card required",
                    "Cancel anytime",
                    "HIPAA compliant",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm font-nunito text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social proof card with dashed border */}
            <div className="relative bg-white p-6 shadow-lg card-hand-drawn-2 border-dashed-orange">
              {/* Round thumb tack */}
              <div className="thumb-tack-round thumb-tack-orange"></div>

              <div className="pt-2 flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current mr-1"
                        />
                      ))}
                  </div>
                  <p className="text-sm font-nunito text-gray-600 mt-2 font-medium">
                    Trusted by 1,000+ professionals
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>
                  <p className="text-sm font-nunito text-gray-600 mt-2 font-medium">
                    Used by leading ABA clinics
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="text-sm font-nunito text-gray-600 mt-2 font-medium">
                    HIPAA-ready, secure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image card with dashed border */}
          <div className="relative bg-white shadow-xl card-hand-drawn-3 border-dashed-blue rounded-xl">
            {/* Round thumb tack */}

            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="/images/illustrations/praxis-notes-hero.png"
                alt="ABA professional working on documentation"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
