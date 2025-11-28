"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { DietaryIcons, type DietaryType } from "@/components/dietary-icons";
import { ProductModal } from "@/components/product-modal";
import { useCartStore } from "@/store/cart-store";
import menuData from "@/data/menu.json";

const menuCategories = menuData.categories;
const menuItems = menuData.items as Record<
  string,
  Array<{
    name: string;
    description: string;
    price: number;
    dietary: DietaryType[];
    hasCustomization: boolean;
    image?: string;
  }>
>;

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("grill-beef");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof menuItems)["grill-beef"][0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { cart, addToCart, getItemQuantity, getTotalItems, getTotalPrice } =
    useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      updateScrollButtons();
      scrollContainer.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
      return () => {
        scrollContainer.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      };
    }
  }, []);

  const scrollCategories = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleProductClick = (item: (typeof menuItems)["grill-beef"][0]) => {
    if (item.hasCustomization) {
      setSelectedProduct(item);
      setIsModalOpen(true);
    } else {
      addToCart({ name: item.name, price: item.price, image: item.image });
    }
  };

  const handleAddFromModal = (product: {
    name: string;
    price: number;
    quantity: number;
    image?: string;
    toppings: { name: string; price: number }[];
  }) => {
    addToCart(product);
  };

  // Filter items based on search
  const filteredItems = searchQuery
    ? Object.entries(menuItems).flatMap(([, items]) =>
        items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : menuItems[activeCategory as keyof typeof menuItems];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Menu */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <p className="text-muted-foreground tracking-wide text-sm mb-2">
                Make It Your Way
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-primary">
                Our Menu
              </h2>
              <p className="text-muted-foreground mt-2">
                Al onze Black Angus, Beef en Chicken burgers zijn 100% procent
                halal en afkomstig uit bio vrije uitloop
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

            {/* Category tabs - scrollable with chevrons */}
            <div className="mb-6 relative grid">
              {canScrollLeft && (
                <button
                  onClick={() => scrollCategories("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
              )}
              <div
                ref={scrollContainerRef}
                className={`overflow-x-auto scrollbar-hide ${
                  canScrollLeft ? "ml-10" : ""
                } ${canScrollRight ? "mr-10" : ""}`}
              >
                <div className="flex gap-2 w-max py-1">
                  {menuCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setSearchQuery("");
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
              {canScrollRight && (
                <button
                  onClick={() => scrollCategories("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              )}
            </div>

            {/* Menu Items */}
            <div className="space-y-3">
              {filteredItems.map((item, index) => {
                const quantity = getItemQuantity(item.name);
                return (
                  <div
                    key={index}
                    onClick={() => handleProductClick(item)}
                    className={`p-4 bg-secondary rounded-xl hover:bg-muted transition-colors relative ${
                      item.hasCustomization
                        ? "cursor-pointer"
                        : "cursor-default"
                    }`}
                  >
                    {/* Mobile: Absolute positioned add button */}
                    <div
                      className="absolute top-3 right-3 z-10 sm:hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button
                        onClick={() => handleProductClick(item)}
                        size="icon"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-9 h-9 shadow-lg shadow-primary/30"
                      >
                        {quantity > 0 ? (
                          <span className="font-bold text-sm">{quantity}</span>
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </Button>
                    </div>

                    {/* Mobile: Stack layout, Desktop: Row layout */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {item.image && (
                        <div className="shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-32 sm:w-20 sm:h-20 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-foreground font-semibold">
                              {item.name}
                            </h3>
                            {item.hasCustomization && (
                              <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                Customize
                              </span>
                            )}
                          </div>
                          <span className="text-accent font-bold text-lg shrink-0 sm:hidden">
                            €{item.price.toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm my-2 line-clamp-2">
                          {item.description}
                        </p>
                        <DietaryIcons items={item.dietary} size="sm" />
                      </div>
                      {/* Desktop: Price and buttons on the right */}
                      <div
                        className="hidden sm:flex flex-col items-end gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-accent font-bold text-lg">
                          €{item.price.toFixed(2).replace(".", ",")}
                        </span>
                        <Button
                          onClick={() => handleProductClick(item)}
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                        >
                          {quantity > 0 ? (
                            <span className="font-bold text-sm">{quantity}</span>
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Delivery */}
          <div>
            <div className="bg-secondary rounded-2xl p-6 sticky top-24">
              <h3 className="text-2xl font-serif text-primary mb-2">
                Order Delivery
              </h3>
              <p className="text-muted-foreground mb-6">
                Fast delivery to your doorstep
              </p>

              <div className="mb-6">
                {cart.length > 0 ? (
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    <h4 className="text-foreground font-semibold">
                      Your Order:
                    </h4>
                    {cart.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="relative shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0 text-sm">
                          <div className="flex justify-between gap-2">
                            <span className="text-foreground font-medium truncate">
                              {item.name}
                            </span>
                            <span className="text-foreground shrink-0">
                              €
                              {(item.price * item.quantity)
                                .toFixed(2)
                                .replace(".", ",")}
                            </span>
                          </div>
                          {item.toppings && item.toppings.length > 0 && (
                            <div className="text-xs text-muted-foreground">
                              + {item.toppings.map((t) => t.name).join(", ")}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span className="text-foreground">
                          Total ({totalItems} items)
                        </span>
                        <span className="text-accent">
                          €{totalPrice.toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&h=300&fit=crop"
                    alt="Delivery"
                    className="w-full rounded-xl"
                  />
                )}
              </div>

              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 rounded-full font-medium"
                disabled={cart.length === 0}
              >
                Order Online
              </Button>

              <p className="text-muted-foreground text-xs text-center mt-4">
                Free delivery on orders over €30
              </p>
            </div>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
          onAddToCart={handleAddFromModal}
        />
      )}

    </section>
  );
}
