import Link from "next/link";
import { Button } from "website/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "website/lib/utils";
import Image from "next/image";
type CTAPlainProps = {
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
  dark?: boolean;
};

const CTAPlain = ({
  subtitle = "Join our growing community of ABA professionals.",
  description = "Experience the power of AI-assisted documentation and focus on what matters most - your clients.",
  primaryButtonText = "Get started for free",
  primaryButtonLink = "/waitlist",
  secondaryButtonText = "Learn about pricing",
  secondaryButtonLink = "/pricing",
  className = "",
  dark = false,
}: CTAPlainProps) => {
  return (
    <section
      className={cn(
        "py-16 md:py-24 relative",
        dark ? "bg-slate-900" : "bg-white dark:bg-slate-900",
        className
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            {subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
            <Link href={primaryButtonLink} className="w-full">
              <Button
                variant="default"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
              >
                {primaryButtonText} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            {secondaryButtonText && (
              <Link href={secondaryButtonLink} className="w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 font-medium"
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="image-container lg:absolute left-0 bottom-0 block">
          <Image
            src="/images/illustrations/kid-playing-with-toys.jpg"
            alt="CTA Plain"
            width={300}
            height={100}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CTAPlain;
