import { Button } from "@/components/ui/button"

export function IceCreamSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-sky-400 to-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-white/80 tracking-wide text-sm mb-2">Something Sweet</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              The Super
              <br />
              Sunday
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              Complete your meal with our delicious soft-serve ice cream. Made fresh daily with premium ingredients for
              the perfect sweet finish.
            </p>

            {/* Newsletter */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto lg:mx-0">
              <p className="text-white font-semibold mb-3">Subscribe for special offers!</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-primary hover:bg-white/90 px-6 rounded-full font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <img
              src="/soft-serve-ice-cream-cones-vanilla-chocolate-swirl.jpg"
              alt="Ice Cream Cones"
              className="w-full max-w-sm lg:max-w-md transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
