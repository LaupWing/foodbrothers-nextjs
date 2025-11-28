"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { CheckoutDrawer } from "@/components/checkout-drawer";

export function FloatingCart() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { getTotalItems, getTotalPrice } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <span className="absolute -top-2 -left-2 bg-primary text-primary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md z-10">
            {totalItems}
          </span>
          <Button
            onClick={() => setIsCheckoutOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 py-6 shadow-xl shadow-accent/30 flex items-center gap-3"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold">
              €{totalPrice.toFixed(2).replace(".", ",")}
            </span>
          </Button>
        </div>
      </div>

      <CheckoutDrawer
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}
