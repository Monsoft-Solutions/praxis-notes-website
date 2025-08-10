import { Card, CardContent } from "website/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Praxis Notes cut my documentation time by 75%. I'm able to spend more time with my clients and less time writing notes. The AI quality is phenomenal.",
    author: "Jessica R.",
    role: "BCBA, Private Practice",
    rating: 5,
    highlight: "75% time saved",
    avatarColor: "bg-blue-100",
    textColor: "text-blue-600",
    cardBorder: "border-blue-200",
    borderStyle: "border-solid",
    thumbTackStyle: "round",
    thumbTackColor: "bg-blue-400",
    cardRotation: "rotate-[-0.2deg]",
  },
  {
    quote:
      "As an RBT with multiple clients, keeping up with session notes was overwhelming. This app has been a lifesaver for me and my clinic loves the consistency.",
    author: "Michael T.",
    role: "RBT, ABC Therapy Center",
    rating: 5,
    highlight: "Perfect for RBTs",
    avatarColor: "bg-green-100",
    textColor: "text-green-600",
    cardBorder: "border-green-200",
    borderStyle: "border-dashed",
    thumbTackStyle: "square",
    thumbTackColor: "bg-green-400",
    cardRotation: "rotate-[0.3deg]",
  },
  {
    quote:
      "The AI understands ABA terminology perfectly. The notes are detailed, accurate, and insurance-ready every time. We've had zero claim rejections.",
    author: "Sarah K.",
    role: "Clinical Director",
    rating: 5,
    highlight: "Insurance-ready",
    avatarColor: "bg-orange-100",
    textColor: "text-orange-600",
    cardBorder: "border-orange-200",
    borderStyle: "border-solid",
    thumbTackStyle: "triangle",
    thumbTackColor: "bg-orange-400",
    cardRotation: "rotate-[-0.1deg]",
  },
  {
    quote:
      "I was skeptical about AI writing clinical notes, but the quality exceeded my expectations. It captures all the clinical details while saving me hours each week.",
    author: "David L.",
    role: "BCBA-D, Regional Director",
    rating: 5,
    highlight: "Clinical accuracy",
    avatarColor: "bg-yellow-100",
    textColor: "text-yellow-700",
    cardBorder: "border-yellow-300",
    borderStyle: "border-dashed",
    thumbTackStyle: "round",
    thumbTackColor: "bg-yellow-400",
    cardRotation: "rotate-[0.4deg]",
  },
];

const Testimonials = () => {
  return (
    <section className="relative">
      {/* Seamless background transition from How-it-works */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/80 via-orange-50/60 to-blue-50/40"></div>

      {/* Subtle transition overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-green-50/30"></div>

      {/* Hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div
          className="absolute left-20 top-32 h-12 w-12 rounded-full border-2 border-orange-300 opacity-25 hidden sm:block"
          style={{ transform: "rotate(-0.1deg)" }}
        ></div>

        <div
          className="absolute right-16 top-1/4 h-16 w-16 border-2 border-blue-300 opacity-30 hidden sm:block"
          style={{
            transform: "rotate(0.2deg)",
            borderRadius: "20px 28px 18px 32px",
          }}
        ></div>

        <div
          className="absolute left-1/3 bottom-32 h-10 w-10 border-2 border-yellow-300 opacity-35 hidden sm:block"
          style={{
            transform: "rotate(-0.3deg)",
            borderRadius: "16px 22px 14px 26px",
          }}
        ></div>

        {/* Scattered dots */}
        <div className="absolute right-1/4 bottom-20 h-3 w-3 rounded-full bg-green-300 opacity-40 hidden sm:block"></div>
        <div className="absolute left-1/4 top-2/3 h-2 w-2 rounded-full bg-blue-300 opacity-50 hidden sm:block"></div>
        <div className="absolute right-1/3 top-1/2 h-2 w-2 rounded-full bg-orange-300 opacity-45 hidden sm:block"></div>
      </div>

      <div className="relative py-20 md:py-28 px-4 sm:px-6 mx-auto container max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Badge with thumb tack */}
          <div
            className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-yellow-300 mb-8 shadow-lg relative"
            style={{
              borderRadius: "20px 28px 18px 32px",
              transform: "rotate(0.1deg)",
            }}
          >
            {/* Badge thumb tack */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-yellow-400 shadow-sm"></div>
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <Star className="h-4 w-4 text-yellow-600 mr-2 fill-current" />
            <span className="text-sm font-quicksand font-bold text-yellow-700">
              ⭐⭐⭐⭐⭐ 4.9/5 Average Rating
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-quicksand font-bold tracking-tight mb-8 text-gray-900 leading-tight"
            style={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Loved by ABA
            <br />
            <span className="text-orange-600">Professionals</span>
          </h2>

          <p className="text-xl md:text-2xl font-nunito text-gray-700 leading-relaxed">
            Don&apos;t just take our word for it. See what our users have to say
            about Praxis Notes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 hover:z-10 ${testimonial.cardRotation}`}
            >
              <Card
                className={`relative ${testimonial.cardBorder} ${testimonial.borderStyle} border-2 bg-white/95 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl overflow-visible h-full`}
                style={{
                  borderRadius: "32px 40px 28px 45px",
                }}
              >
                {/* Thumb tack effects */}
                {testimonial.thumbTackStyle === "round" && (
                  <div className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 transform z-10">
                    <div
                      className={`h-full w-full rounded-full ${testimonial.thumbTackColor} shadow-lg`}
                    ></div>
                    <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                  </div>
                )}

                {testimonial.thumbTackStyle === "square" && (
                  <div
                    className={`absolute -top-2 right-8 h-4 w-4 rotate-45 transform ${testimonial.thumbTackColor} shadow-lg z-10`}
                  ></div>
                )}

                {testimonial.thumbTackStyle === "triangle" && (
                  <div className="absolute -top-3 left-8 z-10">
                    <div
                      className="h-0 w-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent"
                      style={{
                        borderBottomColor:
                          testimonial.thumbTackColor === "bg-orange-400"
                            ? "#fb923c"
                            : "#facc15",
                      }}
                    ></div>
                  </div>
                )}

                <CardContent className="p-8 pt-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Avatar */}
                    <div
                      className={`flex-shrink-0 w-14 h-14 ${testimonial.avatarColor} border-2 ${testimonial.cardBorder} shadow-md flex items-center justify-center`}
                      style={{
                        borderRadius: "15px 20px 12px 18px",
                      }}
                    >
                      <span className="text-lg font-quicksand font-bold text-gray-800">
                        {testimonial.author[0]}
                      </span>
                    </div>

                    <div className="flex-1">
                      {/* Header with highlight and rating */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`text-xs font-quicksand font-bold px-3 py-1.5 ${testimonial.avatarColor} ${testimonial.textColor} border ${testimonial.cardBorder}`}
                          style={{
                            borderRadius: "12px 16px 10px 14px",
                          }}
                        >
                          {testimonial.highlight}
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-500 fill-current"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative mb-6">
                        <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-300" />
                        <blockquote className="text-base font-nunito text-gray-700 leading-relaxed pt-4 pl-4 italic">
                          &quot;{testimonial.quote}&quot;
                        </blockquote>
                      </div>

                      {/* Author info */}
                      <footer className="mt-6 flex items-center justify-between border-t-2 border-dashed border-gray-200 pt-4">
                        <div>
                          <cite className="font-quicksand font-bold text-sm not-italic text-gray-900">
                            {testimonial.author}
                          </cite>
                          <span className="block text-sm font-nunito text-gray-600">
                            {testimonial.role}
                          </span>
                        </div>
                        <div
                          className="text-xs font-quicksand font-medium text-gray-500 px-2 py-1 bg-gray-100 border border-gray-200"
                          style={{
                            borderRadius: "8px 10px 6px 12px",
                          }}
                        >
                          Verified
                        </div>
                      </footer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div
            className="inline-block px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-green-300 border-dashed shadow-lg relative"
            style={{
              borderRadius: "28px 35px 25px 38px",
              transform: "rotate(-0.1deg)",
            }}
          >
            {/* CTA thumb tack */}
            <div className="absolute -top-2 right-8 h-4 w-4 rotate-45 transform bg-green-400 shadow-lg"></div>

            <p className="text-lg font-quicksand font-bold text-green-700">
              Join 1,000+ ABA professionals already using Praxis Notes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
