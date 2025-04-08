import Link from "next/link";
import { ArrowRight } from "lucide-react";

type FeaturesCTAProps = {
  title?: string;
  description?: string;
};

const FeaturesCTA = ({
  title = "Ready to Transform Your ABA Documentation?",
  description = "Join thousands of ABA professionals who have streamlined their workflow and reclaimed time for what matters most.",
}: FeaturesCTAProps) => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-xl opacity-90 mb-8">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing"
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center"
            >
              Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-transparent border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCTA;
