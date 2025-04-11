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
    avatarColor: "bg-soft-blue/10 dark:bg-soft-blue/20",
    textColor: "text-soft-blue",
    borderColor: "border-soft-blue/20 dark:border-soft-blue/30",
  },
  {
    quote:
      "As an RBT with multiple clients, keeping up with session notes was overwhelming. This app has been a lifesaver for me and my clinic loves the consistency.",
    author: "Michael T.",
    role: "RBT, ABC Therapy Center",
    rating: 5,
    highlight: "Perfect for RBTs",
    avatarColor: "bg-lavender/10 dark:bg-lavender/20",
    textColor: "text-lavender",
    borderColor: "border-lavender/20 dark:border-lavender/30",
  },
  {
    quote:
      "The AI understands ABA terminology perfectly. The notes are detailed, accurate, and insurance-ready every time. We've had zero claim rejections.",
    author: "Sarah K.",
    role: "Clinical Director",
    rating: 5,
    highlight: "Insurance-ready",
    avatarColor: "bg-mint-green/10 dark:bg-mint-green/20",
    textColor: "text-mint-green",
    borderColor: "border-mint-green/20 dark:border-mint-green/30",
  },
  {
    quote:
      "I was skeptical about AI writing clinical notes, but the quality exceeded my expectations. It captures all the clinical details while saving me hours each week.",
    author: "David L.",
    role: "BCBA-D, Regional Director",
    rating: 5,
    highlight: "Clinical accuracy",
    avatarColor: "bg-amber/10 dark:bg-amber/20",
    textColor: "text-amber",
    borderColor: "border-amber/20 dark:border-amber/30",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 relative bg-ivory/30 dark:bg-deep-navy/30">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-1/4 top-1/3 h-64 w-64 bg-lavender/5 dark:bg-lavender/10 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-1/3 h-64 w-64 bg-soft-blue/5 dark:bg-soft-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="px-4 sm:px-6 mx-auto container max-w-7xl relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-amber/10 dark:bg-amber/20 border border-amber/20 dark:border-amber/30 mb-4">
            <span className="text-xs font-medium text-amber">
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
              className="relative border border-border hover:shadow-aba-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
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
                            className="w-4 h-4 text-amber fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-6 h-6 text-muted-foreground/20" />
                      <blockquote className="text-lg font-medium mb-4 pt-4 pl-4">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                    </div>

                    <footer className="mt-6 flex items-center justify-between border-t border-border pt-4">
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
          <div className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm text-muted-foreground">
            Join 1,000+ ABA professionals already using Praxis Note
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
