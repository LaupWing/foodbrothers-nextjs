import { Button } from "@/components/ui/button";

export function SauceSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/homemade-sauces.png"
              alt="Homemade Premium Sauces"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full hidden lg:flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground text-center text-sm font-bold leading-tight">
                Homemade
                <br />
                Daily
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="relative flex items-center mb-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary"></div>
              </div>
              <p className="relative bg-background px-4 text-primary tracking-wide text-sm font-medium">
                The Secret
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-2">
              Homemade Premium
            </h2>
            <p className="text-accent text-3xl font-serif mb-6">Sauces</p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              What makes our burgers unforgettable? Our handcrafted sauces, made
              fresh in-house every single day. From our creamy Dutch Burger
              Sauce to the fiery Moroccan Harissa Mayo - each recipe is a
              closely guarded family secret.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-full font-medium">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
