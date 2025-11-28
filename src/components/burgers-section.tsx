import { Button } from "@/components/ui/button"
import { DietaryIcons, type DietaryType } from "@/components/dietary-icons"

const burgers = [
  {
    name: "Fish Burger",
    description: "Crispy fish fillet with tartar sauce and fresh lettuce",
    price: "$12.99",
    image: "/crispy-fish-burger-with-tartar-sauce-lettuce-on-wo.jpg",
    dietary: ["halal", "gluten"] as DietaryType[],
  },
  {
    name: "Beef Burger",
    description: "Premium Angus beef with cheddar cheese and special sauce",
    price: "$14.99",
    image: "/gourmet-beef-burger-with-melted-cheddar-cheese-bac.jpg",
    dietary: ["halal", "egg", "gluten", "milk"] as DietaryType[],
  },
  {
    name: "Veggie Burger",
    description: "Plant-based patty with avocado and fresh vegetables",
    price: "$11.99",
    image: "/veggie-burger-with-avocado-fresh-vegetables-plant-.jpg",
    dietary: ["halal", "gluten"] as DietaryType[],
  },
]

export function BurgersSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-sky-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-white/70 tracking-wide text-sm mb-2">Signature Collection</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">Our Burgers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {burgers.map((burger, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-4">
                <img
                  src={burger.image || "/placeholder.svg"}
                  alt={burger.name}
                  className="w-full aspect-square object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <Button className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-accent hover:bg-accent/90 text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                  Add to Cart
                </Button>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{burger.name}</h3>
              <p className="text-white/70 mb-3">{burger.description}</p>
              <div className="flex justify-center mb-3">
                <DietaryIcons items={burger.dietary} size="sm" />
              </div>
              <p className="text-accent text-xl font-bold">{burger.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
