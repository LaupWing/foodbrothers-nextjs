"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  User,
  Clock,
  CreditCard,
  Ticket,
  Bike,
  Store,
  ChevronRight,
} from "lucide-react";
import { useCartStore } from "@/store/cart-store";

interface CheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type ShippingMethod = "delivery" | "pickup";

interface FormData {
  postalCode: string;
  houseNumber: string;
  streetName: string;
  city: string;
  name: string;
  phone: string;
  email: string;
  companyName: string;
  orderNote: string;
  deliveryTime: string;
  paymentMethod: string;
  discountCode: string;
}

export function CheckoutDrawer({ isOpen, onClose }: CheckoutDrawerProps) {
  const [shippingMethod, setShippingMethod] =
    useState<ShippingMethod>("delivery");
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "address"
  );
  const [formData, setFormData] = useState<FormData>({
    postalCode: "",
    houseNumber: "",
    streetName: "",
    city: "",
    name: "",
    phone: "",
    email: "",
    companyName: "",
    orderNote: "",
    deliveryTime: "",
    paymentMethod: "ideal",
    discountCode: "",
  });

  const { cart, getTotalPrice, getTotalItems } = useCartStore();
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const getSectionPreview = (section: string) => {
    switch (section) {
      case "address":
        if (formData.streetName && formData.houseNumber) {
          return `${formData.streetName} ${formData.houseNumber}, ${formData.postalCode} ${formData.city}`;
        }
        return null;
      case "personal":
        if (formData.name) {
          return formData.name;
        }
        return null;
      case "time":
        return formData.deliveryTime || null;
      case "payment":
        return formData.paymentMethod === "ideal" ? "iDeal" : "Contant";
      default:
        return null;
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="max-h-[95vh]">
        {/* Header */}
        <DrawerHeader className="border-b border-border pb-4 max-w-md mx-auto w-full">
          <div className="flex items-center gap-3">
            <DrawerClose asChild>
              <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
            </DrawerClose>
            <DrawerTitle className="text-2xl font-serif text-primary">
              Afrekenen
            </DrawerTitle>
          </div>
        </DrawerHeader>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-4 py-4">
          <div className="max-w-md mx-auto">
            {/* Shipping Method Toggle */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setShippingMethod("delivery")}
                className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl border-2 transition-all duration-200 ${
                  shippingMethod === "delivery"
                    ? "border-primary bg-primary/10"
                    : "border-border bg-secondary hover:bg-muted"
                }`}
              >
                <Bike
                  className={`w-6 h-6 ${shippingMethod === "delivery" ? "text-primary" : "text-muted-foreground"}`}
                />
                <span
                  className={`font-medium ${shippingMethod === "delivery" ? "text-primary" : "text-foreground"}`}
                >
                  Bezorgen
                </span>
              </button>
              <button
                onClick={() => setShippingMethod("pickup")}
                className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl border-2 transition-all duration-200 ${
                  shippingMethod === "pickup"
                    ? "border-primary bg-primary/10"
                    : "border-border bg-secondary hover:bg-muted"
                }`}
              >
                <Store
                  className={`w-6 h-6 ${shippingMethod === "pickup" ? "text-primary" : "text-muted-foreground"}`}
                />
                <span
                  className={`font-medium ${shippingMethod === "pickup" ? "text-primary" : "text-foreground"}`}
                >
                  Afhalen
                </span>
              </button>
            </div>

            {/* Address Section */}
            {shippingMethod === "delivery" && (
              <div className="mb-4 bg-secondary rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection("address")}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">
                        Bezorgadres
                      </h3>
                      {getSectionPreview("address") ? (
                        <p className="text-sm text-muted-foreground">
                          {getSectionPreview("address")}
                        </p>
                      ) : (
                        <p className="text-sm text-destructive">
                          Vul uw adresgegevens in
                        </p>
                      )}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${expandedSection === "address" ? "rotate-90" : ""}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${expandedSection === "address" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-muted-foreground mb-1 block">
                            Postcode <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            placeholder="1234 AB"
                            className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground mb-1 block">
                            Huisnummer <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            name="houseNumber"
                            value={formData.houseNumber}
                            onChange={handleInputChange}
                            placeholder="123"
                            className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">
                          Straatnaam <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="streetName"
                          value={formData.streetName}
                          onChange={handleInputChange}
                          placeholder="Straatnaam"
                          className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">
                          Woonplaats <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Woonplaats"
                          className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Personal Info Section */}
            <div className="mb-4 bg-secondary rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection("personal")}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">
                      Persoonlijke gegevens
                    </h3>
                    {getSectionPreview("personal") ? (
                      <p className="text-sm text-muted-foreground">
                        {getSectionPreview("personal")}
                      </p>
                    ) : (
                      <p className="text-sm text-destructive">
                        Vul uw persoonlijke gegevens in
                      </p>
                    )}
                  </div>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${expandedSection === "personal" ? "rotate-90" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${expandedSection === "personal" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">
                        Naam <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Naam"
                        className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">
                        Telefoonnummer <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Telefoonnummer"
                        className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">
                        E-mailadres <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="E-mailadres"
                        className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">
                        Bedrijfsnaam{" "}
                        <span className="text-muted-foreground text-xs">
                          (optioneel)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Bedrijfsnaam"
                        className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">
                        Bestelling opmerking{" "}
                        <span className="text-muted-foreground text-xs">
                          (optioneel)
                        </span>
                      </label>
                      <input
                        type="text"
                        name="orderNote"
                        value={formData.orderNote}
                        onChange={handleInputChange}
                        placeholder="Bestelling opmerking"
                        className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Time Section */}
            <div className="mb-4 bg-secondary rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection("time")}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">
                      {shippingMethod === "delivery" ? "Bezorgtijd" : "Afhaaltijd"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {formData.deliveryTime || "Selecteer tijdstip"}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${expandedSection === "time" ? "rotate-90" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${expandedSection === "time" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4">
                    <select
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                    >
                      <option value="">Selecteer tijdstip</option>
                      <option value="Vandaag om 18:00">Vandaag om 18:00</option>
                      <option value="Vandaag om 18:30">Vandaag om 18:30</option>
                      <option value="Vandaag om 19:00">Vandaag om 19:00</option>
                      <option value="Vandaag om 19:30">Vandaag om 19:30</option>
                      <option value="Vandaag om 20:00">Vandaag om 20:00</option>
                      <option value="Vandaag om 20:30">Vandaag om 20:30</option>
                      <option value="Vandaag om 21:00">Vandaag om 21:00</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="mb-4 bg-secondary rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection("payment")}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">
                      Betaalmethode
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {formData.paymentMethod === "ideal" ? "iDeal" : "Contant"}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${expandedSection === "payment" ? "rotate-90" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${expandedSection === "payment" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 space-y-2">
                    <label
                      className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 ${formData.paymentMethod === "ideal" ? "bg-primary/10 border-2 border-primary" : "bg-background border-2 border-transparent hover:bg-muted"}`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src="https://cdn-03.ultimatumapp.com/images/order-icons/ideal.png"
                          alt="iDeal"
                          className="w-8 h-8"
                        />
                        <span className="font-medium text-foreground">iDeal</span>
                      </div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="ideal"
                        checked={formData.paymentMethod === "ideal"}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-primary"
                      />
                    </label>
                    <label
                      className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 ${formData.paymentMethod === "cash" ? "bg-primary/10 border-2 border-primary" : "bg-background border-2 border-transparent hover:bg-muted"}`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src="https://cdn-03.ultimatumapp.com/images/order-icons/cash.svg"
                          alt="Contant"
                          className="w-8 h-8"
                        />
                        <span className="font-medium text-foreground">Contant</span>
                      </div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === "cash"}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-primary"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Discount Code */}
            <div className="mb-4 bg-secondary rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Ticket className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    name="discountCode"
                    value={formData.discountCode}
                    onChange={handleInputChange}
                    placeholder="Kortingscode"
                    className="flex-1 px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                    OK
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            {cart.length > 0 && (
              <div className="mb-4 bg-secondary rounded-xl p-4">
                <h3 className="font-semibold text-foreground mb-3">
                  Jouw bestelling
                </h3>
                <div className="space-y-2">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="relative shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-10 h-10 object-cover rounded-lg"
                        />
                        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2 text-sm">
                          <span className="text-foreground truncate">
                            {item.name}
                          </span>
                          <span className="text-foreground shrink-0">
                            €{(item.price * item.quantity).toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                        {item.toppings && item.toppings.length > 0 && (
                          <p className="text-xs text-muted-foreground">
                            + {item.toppings.map((t) => t.name).join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer with total and order button */}
        <DrawerFooter className="border-t border-border max-w-md mx-auto w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-foreground font-semibold">
              Totaal ({totalItems} items)
            </span>
            <span className="text-accent text-xl font-bold">
              €{totalPrice.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <Button
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 rounded-full font-semibold text-lg"
            disabled={cart.length === 0}
          >
            Bestelling plaatsen
          </Button>
          <p className="text-muted-foreground text-xs text-center">
            Gratis bezorging bij bestellingen boven €30
          </p>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
