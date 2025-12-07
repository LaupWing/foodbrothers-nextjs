"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useLanguageStore } from "@/store/language-store";

interface CheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutDrawer({ isOpen, onClose }: CheckoutDrawerProps) {
  const router = useRouter();
  const { cart, getTotalPrice, getTotalItems, updateQuantity, removeFromCart } =
    useCartStore();
  const { t, language } = useLanguageStore();
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const labels = {
    nl: {
      yourOrder: "Jouw Bestelling",
      emptyCart: "Je winkelwagen is leeg",
      emptyCartDesc: "Voeg items toe om te bestellen",
      continueShopping: "Verder Winkelen",
      proceedToCheckout: "Doorgaan naar Afrekenen",
    },
    en: {
      yourOrder: "Your Order",
      emptyCart: "Your cart is empty",
      emptyCartDesc: "Add items to place an order",
      continueShopping: "Continue Shopping",
      proceedToCheckout: "Proceed to Checkout",
    },
  };

  const pageLabels = labels[language];

  const handleProceedToCheckout = () => {
    onClose();
    router.push("/checkout");
  };

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="max-h-[95vh]">
        {/* Header */}
        <DrawerHeader className="border-b border-border pb-4">
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-2xl font-serif text-primary">
              {pageLabels.yourOrder}
            </DrawerTitle>
            <DrawerClose asChild>
              <button
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-foreground" aria-hidden="true" />
              </button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        {/* Cart Content */}
        <div className="overflow-y-auto flex-1 px-4 py-4">
          <div className="max-w-2xl mx-auto">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <ShoppingBag className="w-16 h-16 text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {pageLabels.emptyCart}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {pageLabels.emptyCartDesc}
                </p>
                <DrawerClose asChild>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                    {pageLabels.continueShopping}
                  </Button>
                </DrawerClose>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="bg-secondary rounded-xl p-4 flex gap-4"
                  >
                    <div className="relative shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {item.name}
                          </h3>
                          {item.toppings && item.toppings.length > 0 && (
                            <p className="text-xs text-muted-foreground mt-1">
                              + {item.toppings.map((t) => t.name).join(", ")}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="text-muted-foreground hover:text-destructive transition-colors p-1"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.name, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="w-4 h-4 text-foreground" aria-hidden="true" />
                          </button>
                          <span className="w-8 text-center font-semibold text-foreground" aria-label={`Quantity: ${item.quantity}`}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.name, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="w-4 h-4 text-foreground" aria-hidden="true" />
                          </button>
                        </div>
                        <span className="text-accent font-bold">
                          €{(item.price * item.quantity).toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer with checkout button */}
        {cart.length > 0 && (
          <DrawerFooter className="border-t border-border max-w-2xl mx-auto w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-foreground font-semibold">
                {t.checkout.totalAmount} ({totalItems} {t.orderDelivery.items})
              </span>
              <span className="text-accent text-xl font-bold">
                €{totalPrice.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 rounded-full font-semibold text-lg"
              onClick={handleProceedToCheckout}
            >
              {pageLabels.proceedToCheckout}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
