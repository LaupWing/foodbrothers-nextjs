import { Button } from "@/components/ui/button"

export function SauceSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/homemade-tomato-sauce-in-glass-jar-with-fresh-toma.jpg"
              alt="Tomato Original Sauce"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full hidden lg:flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground text-center text-sm font-bold leading-tight">
                100%
                <br />
                Natural
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="relative flex items-center mb-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary"></div>
              </div>
              <p className="relative bg-background px-4 text-primary tracking-wide text-sm font-medium">Present</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-2">Tomato Original</h2>
            <p className="text-accent text-3xl font-serif mb-6">Sauce</p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our signature handmade tomato sauce, crafted with sun-ripened tomatoes, fresh herbs, and a secret blend of
              spices. The perfect complement to our premium beef patties.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-full font-medium">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
