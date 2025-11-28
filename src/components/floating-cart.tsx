"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { CheckoutDrawer } from "@/components/checkout-drawer";

export function FloatingCart() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { getTotalItems, getTotalPrice } = useCartStore();
  const pathname = usePathname();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  // Hide on checkout page
  if (pathname === "/checkout") {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <span className="absolute -top-2 -left-2 bg-primary text-primary-foreground text-sm md:text-base font-bold w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-md z-10">
            {totalItems}
          </span>
          <Button
            onClick={() => setIsCheckoutOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 py-6 md:px-10 md:py-8 shadow-xl shadow-accent/30 flex items-center gap-3 md:gap-4"
          >
            <ShoppingCart className="w-6 h-6 md:w-7 md:h-7" />
            <span className="font-semibold text-base md:text-xl">
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
