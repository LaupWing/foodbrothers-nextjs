"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DietaryIcons, type DietaryType } from "@/components/dietary-icons";
import { ProductModal } from "@/components/product-modal";
import { useCartStore } from "@/store/cart-store";
import menuData from "@/data/menu.json";

// Get featured burgers from menu data
const allBurgers = Object.values(menuData.items).flat();
const featuredBurgers = menuData.featuredBurgers
  .map((name) => allBurgers.find((item) => item.name === name))
  .filter(Boolean) as Array<{
  name: string;
  description: string;
  price: number;
  dietary: DietaryType[];
  hasCustomization: boolean;
  image?: string;
}>;

export function BurgersSection() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof featuredBurgers)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addToCart, getItemQuantity } = useCartStore();

  const handleProductClick = (burger: (typeof featuredBurgers)[0]) => {
    setSelectedProduct(burger);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product: {
    name: string;
    price: number;
    quantity: number;
    toppings: { name: string; price: number }[];
  }) => {
    addToCart(product);
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-sky-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-white/70 tracking-wide text-sm mb-2">
            Signature Collection
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
            Our Burgers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {featuredBurgers.map((burger, index) => {
            const quantity = getItemQuantity(burger.name);
            return (
              <div key={index} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-4">
                  <img
                    src={burger.image || "/placeholder.svg"}
                    alt={burger.name}
                    className="w-full aspect-square object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <Button
                    size="icon"
                    onClick={() => handleProductClick(burger)}
                    className="absolute top-6 right-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-10 h-10 shadow-xl shadow-black/40"
                  >
                    {quantity > 0 ? (
                      <span className="font-bold text-base">{quantity}</span>
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </Button>
                <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
                  <span className="text-accent text-xl font-bold">
                    €{burger.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {burger.name}
              </h3>
              <p className="text-white/70 mb-3">{burger.description}</p>
              <div className="flex justify-center mb-3">
                <DietaryIcons items={burger.dietary} size="sm" />
              </div>
            </div>
            );
          })}
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
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
}
