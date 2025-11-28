import { Button } from "@/components/ui/button";

export function SaladSection() {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-muted-foreground tracking-wide text-sm mb-2">
              Always Fresh
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              <span className="text-green-500">Fresh</span>
              <br />
              <span className="text-foreground font-sans font-bold">Salad</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Life is like a burger - the more you add to it, the better it
              becomes. Our fresh garden salads are made with locally sourced
              vegetables, crisp greens, and house-made dressings.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full font-medium">
              View Salads
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <img
              src="/fresh-healthy-salad-bowl-with-avocado-tomatoes-cuc.jpg"
              alt="Fresh Salad"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
