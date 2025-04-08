import { Card, CardContent } from "website/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Praxis Note cut my documentation time by 75%. I'm able to spend more time with my clients and less time writing notes. The AI quality is phenomenal.",
    author: "Jessica R.",
    role: "BCBA, Private Practice",
    rating: 5,
    highlight: "75% time saved",
    avatarColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    quote:
      "As an RBT with multiple clients, keeping up with session notes was overwhelming. This app has been a lifesaver for me and my clinic loves the consistency.",
    author: "Michael T.",
    role: "RBT, ABC Therapy Center",
    rating: 5,
    highlight: "Perfect for RBTs",
    avatarColor: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
  {
    quote:
      "The AI understands ABA terminology perfectly. The notes are detailed, accurate, and insurance-ready every time. We've had zero claim rejections.",
    author: "Sarah K.",
    role: "Clinical Director",
    rating: 5,
    highlight: "Insurance-ready",
    avatarColor: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-600 dark:text-green-400",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    quote:
      "I was skeptical about AI writing clinical notes, but the quality exceeded my expectations. It captures all the clinical details while saving me hours each week.",
    author: "David L.",
    role: "BCBA-D, Regional Director",
    rating: 5,
    highlight: "Clinical accuracy",
    avatarColor: "bg-amber-100 dark:bg-amber-900/30",
    textColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-950/10 -z-10"></div>
      <div className="absolute -left-20 top-20 w-40 h-40 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -right-20 bottom-20 w-40 h-40 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="px-4 sm:px-6 mx-auto container max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 mb-4">
            <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">
              ⭐⭐⭐⭐⭐ 4.9/5 Average Rating
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Loved by ABA Professionals
          </h2>
          <p className="text-xl text-muted-foreground">
            Don&apos;t just take our word for it. See what our users have to say
            about Praxis Note.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`overflow-hidden border ${testimonial.borderColor} hover:shadow-lg transition-shadow duration-300`}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center`}
                  >
                    <span className="text-lg font-bold">
                      {testimonial.author[0]}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${testimonial.avatarColor} ${testimonial.textColor}`}
                      >
                        {testimonial.highlight}
                      </div>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-200 dark:text-gray-700" />
                      <blockquote className="text-lg font-medium mb-4 pt-4 pl-4">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                    </div>

                    <footer className="mt-4 flex items-center justify-between border-t pt-4">
                      <div>
                        <cite className="font-bold text-sm not-italic">
                          {testimonial.author}
                        </cite>
                        <span className="block text-sm text-muted-foreground">
                          {testimonial.role}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Verified Customer
                      </div>
                    </footer>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 px-6 py-3 text-sm text-muted-foreground">
            Join 1,000+ ABA professionals already using Praxis Note
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
