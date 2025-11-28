"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Search } from "lucide-react"
import { DietaryIcons, type DietaryType } from "@/components/dietary-icons"
import { ProductModal } from "@/components/product-modal"

const menuCategories = [
  { id: "grill-beef", name: "Grill Beef Burgers" },
  { id: "grill-chicken", name: "Grill Chicken Burgers" },
  { id: "double-beef", name: "Double Grill Beef" },
  { id: "double-chicken", name: "Double Grill Chicken" },
  { id: "vega", name: "Vega Burgers" },
  { id: "fried-chicken", name: "Fried Chicken Filet" },
  { id: "fries", name: "Fresh Fries" },
  { id: "loaded-fries", name: "Loaded Fries" },
  { id: "chicken-sides", name: "Chicken Sides" },
  { id: "chicken-buckets", name: "Chicken Buckets" },
  { id: "cold-drinks", name: "Cold Drinks" },
  { id: "warm-drinks", name: "Warm Drinks" },
  { id: "sauces", name: "Sauces" },
]

const menuItems: Record<
  string,
  Array<{
    name: string
    description: string
    price: number
    dietary: DietaryType[]
    hasCustomization: boolean
    image?: string
  }>
> = {
  "grill-beef": [
    {
      name: "Traditional Grill Beef",
      description: "160 grams of grilled beef, lettuce, beef tomato, hand-cut pickle and Dutch burger sauce",
      price: 12.5,
      dietary: ["halal", "egg", "gluten", "mustard", "celery", "sesame", "soy", "milk"],
      hasCustomization: true,
      image: "/beef-burger.png",
    },
    {
      name: "Traditional Grill Beef Cheese",
      description: "160 grams grilled beef, lettuce, beef tomato, red cheddar, hand-cut pickle and Dutch burger sauce",
      price: 13.5,
      dietary: ["halal", "egg", "gluten", "milk", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/classic-cheeseburger.png",
    },
    {
      name: "Spicy Grill Beef",
      description:
        "160 grams of grilled beef, lettuce, beef tomato, red onions, hand-cut pickle and Moroccan Harissa mayo",
      price: 13.5,
      dietary: ["halal", "egg", "gluten", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/spicy-burger.png",
    },
    {
      name: "American Smoked BBQ Grill Beef",
      description: "160 grams of grilled beef, lettuce, beef tomato, pickle and American Smoked BBQ sauce",
      price: 13.5,
      dietary: ["halal", "gluten", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/bbq-burger.jpg",
    },
    {
      name: "Mexican Grill Beef",
      description: "160 grams grilled beef, lettuce, beef tomato, nachos, red cheddar and Mexican Jalapeño mayonnaise",
      price: 13.5,
      dietary: ["halal", "egg", "gluten", "milk", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/mexican-burger.jpg",
    },
    {
      name: "Hot Java Grill Beef",
      description: "160 grams of grilled beef, lettuce, beef tomato, hand-cut pickle and spicy Indo sauce",
      price: 13.5,
      dietary: ["halal", "gluten", "mustard", "celery", "soy"],
      hasCustomization: true,
      image: "/spicy-indonesian-burger.jpg",
    },
    {
      name: "Black Truffle Grill Beef",
      description: "160 grams grilled beef, lettuce, beef tomato, hand-cut pickle and Italian Black truffle mayonnaise",
      price: 15.0,
      dietary: ["halal", "gluten", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/truffle-burger.jpg",
    },
    {
      name: "Premium Australian Black Angus",
      description:
        "200gr. grilled black angus, lettuce, beef tomato, hand-cut pickle, red cheddar, veal bacon and Italian black truffle mayo. A5 CAT.",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/premium-angus-burger.jpg",
    },
  ],
  "grill-chicken": [
    {
      name: "Traditional Grill Chicken",
      description: "160 grams of grilled chicken, lettuce, beef tomato, hand-cut pickle and homemade sauce",
      price: 12.5,
      dietary: ["halal", "gluten", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/grilled-chicken-burger.jpg",
    },
    {
      name: "Traditional Grill Chicken Cheese",
      description: "160 grams grilled chicken, lettuce, beef tomato, red cheddar, hand-cut pickle and homemade sauce",
      price: 13.5,
      dietary: ["halal", "gluten", "milk", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/chicken-cheese-burger.jpg",
    },
    {
      name: "Spicy Grill Chicken",
      description:
        "160 grams grilled chicken, lettuce, beef tomato, red onions, hand-cut pickle and Moroccan harissa mayonnaise",
      price: 13.5,
      dietary: ["halal", "egg", "gluten", "mustard", "celery", "sesame"],
      hasCustomization: true,
      image: "/spicy-chicken-burger.png",
    },
    {
      name: "American Smoked BBQ Grill Chicken",
      description: "160 grams of grilled chicken, lettuce, beef tomato, hand-cut pickle and American smoked BBQ sauce",
      price: 13.5,
      dietary: ["halal", "gluten", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/bbq-chicken-burger.jpg",
    },
    {
      name: "Mexican Grill Chicken",
      description:
        "160 grams grilled chicken, lettuce, beef tomato, nachos, red cheddar and Mexican jalapeño mayonnaise",
      price: 13.5,
      dietary: ["halal", "egg", "gluten", "milk", "mustard", "celery", "sesame"],
      hasCustomization: true,
      image: "/mexican-chicken-burger.jpg",
    },
    {
      name: "Hot Java Grill Chicken",
      description: "160 grams of grilled chicken, lettuce, beef tomato, hand-cut pickle and hot spicy Indo sauce",
      price: 13.5,
      dietary: ["halal", "gluten", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/indonesian-chicken-burger.jpg",
    },
    {
      name: "Black Truffle Grill Chicken",
      description:
        "160 grams grilled chicken, lettuce, beef tomato, hand-cut pickle and Italian black truffle mayonnaise",
      price: 15.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/truffle-chicken-burger.jpg",
    },
  ],
  "double-beef": [
    {
      name: "The Dutch XL Grill Beef",
      description:
        "2 x 160 grams grilled beef, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and Dutch burger sauce",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/double-dutch-burger.jpg",
    },
    {
      name: "The Moroccan XL Grill Beef",
      description:
        "2 x 160 grams grilled beef, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and Moroccan harissa mayonnaise",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/double-moroccan-burger.jpg",
    },
    {
      name: "The Indonesian XL Grill Beef",
      description:
        "2 x 160 grams grilled beef, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and spicy Indo sauce",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard", "celery", "sesame", "soy"],
      hasCustomization: true,
      image: "/double-indonesian-burger.jpg",
    },
    {
      name: "The Mexican XL Grill Beef",
      description:
        "2 x 160 grams grilled beef, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and Mexican jalapeño mayonnaise",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard", "celery", "sesame"],
      hasCustomization: true,
      image: "/double-mexican-burger.jpg",
    },
    {
      name: "The American XL Grill Beef",
      description:
        "2 x 160 grams grilled beef, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and American smoked BBQ sauce",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard", "celery", "sesame"],
      hasCustomization: true,
      image: "/double-american-burger.jpg",
    },
    {
      name: "The Italian XL Grill Beef",
      description:
        "2 x 160 grams grilled beef, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and Italian Black Truffle mayonnaise",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard", "celery", "sesame"],
      hasCustomization: true,
      image: "/double-italian-burger.jpg",
    },
  ],
  "double-chicken": [
    {
      name: "The Dutch XL Grill Chicken",
      description:
        "2 x 160 grams grilled chicken, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and Dutch burger sauce",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard"],
      hasCustomization: true,
      image: "/double-dutch-chicken.jpg",
    },
    {
      name: "The Italian XL Grill Chicken",
      description:
        "2 x 160 grams grilled chicken, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and Italian Black truffle mayonnaise",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard"],
      hasCustomization: true,
      image: "/double-italian-chicken.jpg",
    },
    {
      name: "The American XL Grill Chicken",
      description:
        "2 x 160 grams grilled chicken, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and American smoked BBQ sauce",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard"],
      hasCustomization: true,
      image: "/double-american-chicken.jpg",
    },
    {
      name: "The Moroccan XL Grill Chicken",
      description:
        "2x 160 grams grilled chicken, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and Moroccan harissa mayonnaise",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard"],
      hasCustomization: true,
      image: "/double-moroccan-chicken.jpg",
    },
    {
      name: "The Indonesian XL Grill Chicken",
      description:
        "2 x 160 grams grilled chicken, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and spicy Indo sauce",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard"],
      hasCustomization: true,
      image: "/double-indonesian-chicken.jpg",
    },
    {
      name: "The Mexican XL Grill Chicken",
      description:
        "2 x 160 grams grilled chicken, lettuce, beef tomato, red cheddar, hand-cut pickle, veal bacon and Mexican jalapeño mayonnaise",
      price: 26.0,
      dietary: ["halal", "egg", "gluten", "milk", "mustard"],
      hasCustomization: true,
      image: "/double-mexican-chicken.jpg",
    },
  ],
  vega: [
    {
      name: "Vega Burger Classic",
      description: "Plant-based patty with fresh lettuce, tomato, pickle and vegan mayo",
      price: 12.5,
      dietary: ["halal", "gluten", "soy"],
      hasCustomization: true,
      image: "/vega-burger-classic.jpg",
    },
    {
      name: "Vega Burger Cheese",
      description: "Plant-based patty with vegan cheese, lettuce, tomato and special sauce",
      price: 13.5,
      dietary: ["halal", "gluten", "soy"],
      hasCustomization: true,
      image: "/vega-burger-cheese.jpg",
    },
  ],
  "fried-chicken": [
    {
      name: "Fried Chicken Filet Burger",
      description: "Crispy fried chicken filet with lettuce, tomato and signature sauce",
      price: 12.5,
      dietary: ["halal", "egg", "gluten"],
      hasCustomization: true,
      image: "/fried-chicken-burger.jpg",
    },
    {
      name: "Fried Chicken Filet Cheese",
      description: "Crispy fried chicken filet with red cheddar, lettuce and special mayo",
      price: 13.5,
      dietary: ["halal", "egg", "gluten", "milk"],
      hasCustomization: true,
      image: "/fried-chicken-cheese-burger.jpg",
    },
  ],
  fries: [
    {
      name: "Verse Boerenfriet met Schil",
      description: "Farmer's fries fresh from the field, cut and prepared according to traditional methods",
      price: 5.5,
      dietary: ["halal"],
      hasCustomization: false,
      image: "/fresh-fries.jpg",
    },
    {
      name: "Boerenfriet met Schil Large",
      description:
        "Farmer's fries fresh from the field, cut and prepared according to traditional methods. Portion for 2 persons",
      price: 7.0,
      dietary: ["halal"],
      hasCustomization: false,
      image: "/fresh-fries-large.jpg",
    },
  ],
  "loaded-fries": [
    {
      name: "Loaded Fries",
      description:
        "Fresh hand-cut fries, sprinkled with organic veal bacon, spring onion, Mexican jalapeños and topped with melted red cheddar cheese",
      price: 15.0,
      dietary: ["halal", "milk"],
      hasCustomization: false,
      image: "/loaded-fries.jpg",
    },
    {
      name: "Loaded Fries Large",
      description:
        "Fresh hand-cut fries, sprinkled with organic veal bacon, spring onion, Mexican jalapeños and topped with melted red cheddar cheese",
      price: 19.0,
      dietary: ["halal", "milk"],
      hasCustomization: false,
      image: "/loaded-fries-large.jpg",
    },
    {
      name: "Loaded Fries Chicken",
      description:
        "Fresh hand-cut fries, sprinkled with pieces of spicy chicken fillet, spring onion, Mexican jalapeños and topped with melted red cheddar cheese",
      price: 15.0,
      dietary: ["halal", "milk", "gluten"],
      hasCustomization: false,
      image: "/loaded-fries-chicken.jpg",
    },
    {
      name: "Loaded Fries Chicken Large",
      description:
        "Fresh hand-cut fries, sprinkled with pieces of spicy chicken fillet, spring onion, Mexican jalapeños and topped with melted red cheddar cheese",
      price: 23.0,
      dietary: ["halal", "milk", "gluten"],
      hasCustomization: false,
      image: "/loaded-fries-chicken-large.jpg",
    },
    {
      name: "Loaded Fries Vega",
      description:
        "Fresh hand-cut fries, sprinkled with spring onion, Mexican jalapeños and topped with melted red cheddar cheese",
      price: 15.0,
      dietary: ["halal", "milk"],
      hasCustomization: false,
      image: "/loaded-fries-vega.jpg",
    },
    {
      name: "Loaded Fries Vega Large",
      description:
        "Fresh hand-cut fries, sprinkled with spring onion, Mexican jalapeños and topped with melted red cheddar cheese",
      price: 19.0,
      dietary: ["halal", "milk"],
      hasCustomization: false,
      image: "/loaded-fries-vega-large.jpg",
    },
  ],
  "chicken-sides": [
    {
      name: "Original Chicken Wings",
      description: "Choice of: 6, 9 or 12 pieces",
      price: 7.5,
      dietary: ["halal", "celery"],
      hasCustomization: false,
      image: "/chicken-wings.jpg",
    },
    {
      name: "Original Texas Chicken Tenders",
      description: "Crispy chicken tenders with your choice of sauce",
      price: 8.5,
      dietary: ["halal", "gluten"],
      hasCustomization: false,
      image: "/chicken-tenders.jpg",
    },
    {
      name: "Kipcorn",
      description: "The Kipkorn is made from tender chicken meat wrapped in a crispy coating",
      price: 3.75,
      dietary: ["halal", "gluten"],
      hasCustomization: false,
      image: "/kipcorn.jpg",
    },
    {
      name: "Real American Nuggets",
      description: "Choice of: 6, 9 or 12 pieces",
      price: 5.5,
      dietary: ["halal", "gluten"],
      hasCustomization: false,
      image: "/chicken-nuggets.jpg",
    },
  ],
  "chicken-buckets": [
    {
      name: "Original Chicken Wings 15 stuks",
      description: "15 pieces of our signature chicken wings",
      price: 17.5,
      dietary: ["halal", "celery"],
      hasCustomization: false,
      image: "/chicken-wings-bucket-15.jpg",
    },
    {
      name: "Original Chicken Wings 20 stuks",
      description: "20 pieces of our signature chicken wings",
      price: 23.0,
      dietary: ["halal", "celery"],
      hasCustomization: false,
      image: "/chicken-wings-bucket-20.jpg",
    },
  ],
  "cold-drinks": [
    {
      name: "Uludağ Gazoz Orange",
      description: "The cooling, flavorful orange taste of the Legendary Uludağ Gazoz Orange",
      price: 3.5,
      dietary: ["halal"],
      hasCustomization: false,
      image: "/uludag-orange.jpg",
    },
    {
      name: "Uludağ Gazoz Mixed Fruit",
      description: "Fruit Flavoured Fizzy Soft Drink",
      price: 3.5,
      dietary: ["halal"],
      hasCustomization: false,
      image: "/uludag-mixed-fruit.jpg",
    },
    {
      name: "AA Drink High Energy",
      description: "Energy drink (inclusief statiegeld)",
      price: 3.75,
      dietary: ["halal"],
      hasCustomization: false,
      image: "/energy-drink.jpg",
    },
    {
      name: "Coca-Cola",
      description: "Classic Coca-Cola",
      price: 3.0,
      dietary: ["halal"],
      hasCustomization: false,
      image: "/coca-cola.jpg",
    },
    {
      name: "Fanta Orange",
      description: "Refreshing orange soda",
      price: 3.0,
      dietary: ["halal"],
      hasCustomization: false,
      image: "/fanta-orange.jpg",
    },
    {
      name: "Sprite",
      description: "Lemon-lime soda",
      price: 3.0,
      dietary: ["halal"],
      hasCustomization: false,
      image: "/sprite.jpg",
    },
  ],
  "warm-drinks": [
    {
      name: "Arabica Café",
      description: "Arabica selection zwarte koffie",
      price: 2.8,
      dietary: ["halal"],
      hasCustomization: false,
      image: "/black-coffee.jpg",
    },
    {
      name: "Cortado",
      description: "Espresso met een scheut warme melk",
      price: 2.8,
      dietary: ["halal", "milk"],
      hasCustomization: false,
      image: "/cortado.jpg",
    },
    {
      name: "Espresso",
      description: "Arabica Espresso",
      price: 2.8,
      dietary: ["halal"],
      hasCustomization: false,
      image: "/espresso.jpg",
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk foam",
      price: 3.5,
      dietary: ["halal", "milk"],
      hasCustomization: false,
      image: "/cappuccino.jpg",
    },
    {
      name: "Latte Macchiato",
      description: "Layered espresso and steamed milk",
      price: 3.5,
      dietary: ["halal", "milk"],
      hasCustomization: false,
      image: "/latte-macchiato.jpg",
    },
  ],
  sauces: [
    {
      name: "Dutch Burger Sauce",
      description: "Our signature Dutch burger sauce",
      price: 0.75,
      dietary: ["halal", "egg"],
      hasCustomization: false,
      image: "/dutch-sauce.jpg",
    },
    {
      name: "Mexican Jalapeño Mayo",
      description: "Spicy jalapeño mayonnaise",
      price: 0.75,
      dietary: ["halal", "egg"],
      hasCustomization: false,
      image: "/jalapeno-mayo.jpg",
    },
    {
      name: "Italian Black Truffle Mayo",
      description: "Premium Italian black truffle mayonnaise",
      price: 1.0,
      dietary: ["halal", "egg"],
      hasCustomization: false,
      image: "/truffle-mayo.jpg",
    },
    {
      name: "Moroccan Harissa Mayo",
      description: "Spicy North African harissa mayonnaise",
      price: 0.75,
      dietary: ["halal", "egg"],
      hasCustomization: false,
      image: "/harissa-mayo.jpg",
    },
    {
      name: "American Smoked BBQ",
      description: "Classic American smoked BBQ sauce",
      price: 0.75,
      dietary: ["halal", "mustard"],
      hasCustomization: false,
      image: "/bbq-sauce.jpg",
    },
    {
      name: "Hot Spicy Indo Sauce",
      description: "Indonesian style hot sauce",
      price: 0.75,
      dietary: ["halal"],
      hasCustomization: false,
      image: "/indo-sauce.jpg",
    },
  ],
}

interface CartItem {
  name: string
  quantity: number
  price: number
  toppings?: { name: string; price: number }[]
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("grill-beef")
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedProduct, setSelectedProduct] = useState<(typeof menuItems)["grill-beef"][0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const addToCart = (item: {
    name: string
    price: number
    quantity?: number
    toppings?: { name: string; price: number }[]
  }) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.name === item.name && JSON.stringify(i.toppings) === JSON.stringify(item.toppings),
      )
      if (existing) {
        return prev.map((i) =>
          i.name === item.name && JSON.stringify(i.toppings) === JSON.stringify(item.toppings)
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i,
        )
      }
      return [...prev, { ...item, quantity: item.quantity || 1, toppings: item.toppings || [] }]
    })
  }

  const removeFromCart = (itemName: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === itemName)
      if (existing && existing.quantity > 1) {
        return prev.map((i) => (i.name === itemName ? { ...i, quantity: i.quantity - 1 } : i))
      }
      return prev.filter((i) => i.name !== itemName)
    })
  }

  const getItemQuantity = (itemName: string) => {
    return cart.filter((i) => i.name === itemName).reduce((sum, i) => sum + i.quantity, 0)
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => {
    const toppingsPrice = item.toppings?.reduce((t, topping) => t + topping.price, 0) || 0
    return sum + (item.price + toppingsPrice) * item.quantity
  }, 0)

  const handleProductClick = (item: (typeof menuItems)["grill-beef"][0]) => {
    if (item.hasCustomization) {
      setSelectedProduct(item)
      setIsModalOpen(true)
    } else {
      addToCart({ name: item.name, price: item.price })
    }
  }

  const handleAddFromModal = (product: {
    name: string
    price: number
    quantity: number
    toppings: { name: string; price: number }[]
  }) => {
    addToCart(product)
  }

  // Filter items based on search
  const filteredItems = searchQuery
    ? Object.entries(menuItems).flatMap(([, items]) =>
        items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      )
    : menuItems[activeCategory as keyof typeof menuItems]

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Menu */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <p className="text-muted-foreground tracking-wide text-sm mb-2">Make It Your Way</p>
              <h2 className="text-4xl md:text-5xl font-serif text-primary">Our Menu</h2>
              <p className="text-muted-foreground mt-2">
                Al onze Black Angus, Beef en Chicken burgers zijn 100% procent halal en afkomstig uit bio vrije uitloop
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Zoeken..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary rounded-full border-0 focus:ring-2 focus:ring-primary focus:outline-none text-foreground"
              />
            </div>

            {/* Category tabs - scrollable */}
            <div className="mb-6 -mx-4 px-4">
              <div className="overflow-x-auto pb-2 max-w-full">
                <div className="flex gap-2 w-fit">
                  {menuCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id)
                        setSearchQuery("")
                      }}
                      className={`px-4 py-2 text-sm font-medium transition-colors rounded-full whitespace-nowrap ${
                        activeCategory === category.id && !searchQuery
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground hover:bg-muted"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="space-y-3">
              {filteredItems.map((item, index) => {
                const quantity = getItemQuantity(item.name)
                return (
                  <div
                    key={index}
                    onClick={() => handleProductClick(item)}
                    className={`flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-muted transition-colors ${item.hasCustomization ? "cursor-pointer" : "cursor-default"}`}
                  >
                    {item.image && (
                      <div className="flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-foreground font-semibold">{item.name}</h3>
                        {item.hasCustomization && (
                          <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">Customize</span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{item.description}</p>
                      <DietaryIcons items={item.dietary} size="sm" />
                    </div>
                    <div className="flex flex-col items-end gap-2" onClick={(e) => e.stopPropagation()}>
                      <span className="text-accent font-bold text-lg">€{item.price.toFixed(2).replace(".", ",")}</span>
                      {quantity > 0 ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(item.name)}
                            className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-foreground font-bold w-6 text-center">{quantity}</span>
                          <button
                            onClick={() =>
                              item.hasCustomization
                                ? handleProductClick(item)
                                : addToCart({ name: item.name, price: item.price })
                            }
                            className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <Button
                          onClick={() =>
                            item.hasCustomization
                              ? handleProductClick(item)
                              : addToCart({ name: item.name, price: item.price })
                          }
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Order Delivery */}
          <div>
            <div className="bg-secondary rounded-2xl p-6 sticky top-24">
              <h3 className="text-2xl font-serif text-primary mb-2">Order Delivery</h3>
              <p className="text-muted-foreground mb-6">Fast delivery to your doorstep</p>

              <div className="space-y-4 mb-6">
                <img src="/placeholder.svg?height=200&width=300" alt="Delivery" className="w-full rounded-xl" />

                {cart.length > 0 ? (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    <h4 className="text-foreground font-semibold">Your Order:</h4>
                    {cart.map((item, index) => (
                      <div key={index} className="text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            {item.quantity}x {item.name}
                          </span>
                          <span className="text-foreground">
                            €{(item.price * item.quantity).toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                        {item.toppings && item.toppings.length > 0 && (
                          <div className="text-xs text-muted-foreground pl-4">
                            + {item.toppings.map((t) => t.name).join(", ")}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span className="text-foreground">Total ({totalItems} items)</span>
                        <span className="text-accent">€{totalPrice.toFixed(2).replace(".", ",")}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">Your cart is empty</p>
                )}
              </div>

              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 rounded-full font-medium"
                disabled={cart.length === 0}
              >
                Order Online
              </Button>

              <p className="text-muted-foreground text-xs text-center mt-4">Free delivery on orders over €30</p>
            </div>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedProduct(null)
          }}
          product={selectedProduct}
          onAddToCart={handleAddFromModal}
        />
      )}
    </section>
  )
}
