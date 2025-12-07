"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
  ShoppingBag,
} from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useCheckoutStore } from "@/store/checkout-store";
import { useLanguageStore } from "@/store/language-store";
import Link from "next/link";

export default function CheckoutPage() {
  const router = useRouter();
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "address"
  );

  const { cart, getTotalPrice, getTotalItems } = useCartStore();
  const { formData, updateFormData, setShippingMethod } = useCheckoutStore();
  const { t, language } = useLanguageStore();
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
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

  const labels = {
    nl: {
      backToMenu: "Terug naar menu",
      emptyCart: "Je winkelwagen is leeg",
      emptyCartDesc: "Voeg items toe om te bestellen",
      goToMenu: "Ga naar Menu",
    },
    en: {
      backToMenu: "Back to menu",
      emptyCart: "Your cart is empty",
      emptyCartDesc: "Add items to place an order",
      goToMenu: "Go to Menu",
    },
  };

  const pageLabels = labels[language];

  // If cart is empty, show empty state
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <ShoppingBag className="w-20 h-20 text-muted-foreground/50 mb-6 mx-auto" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              {pageLabels.emptyCart}
            </h2>
            <p className="text-muted-foreground mb-8">
              {pageLabels.emptyCartDesc}
            </p>
            <Link href="/menu">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6">
                {pageLabels.goToMenu}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Back button and title */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-3xl font-serif text-primary">
            {t.checkout.title}
          </h1>
        </div>

        {/* Shipping Method Toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setShippingMethod("delivery")}
            className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl border-2 transition-all duration-200 ${
              formData.shippingMethod === "delivery"
                ? "border-primary bg-primary/10"
                : "border-border bg-secondary hover:bg-muted"
            }`}
          >
            <Bike
              className={`w-6 h-6 ${formData.shippingMethod === "delivery" ? "text-primary" : "text-muted-foreground"}`}
            />
            <span
              className={`font-medium ${formData.shippingMethod === "delivery" ? "text-primary" : "text-foreground"}`}
            >
              {t.checkout.delivery}
            </span>
          </button>
          <button
            onClick={() => setShippingMethod("pickup")}
            className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl border-2 transition-all duration-200 ${
              formData.shippingMethod === "pickup"
                ? "border-primary bg-primary/10"
                : "border-border bg-secondary hover:bg-muted"
            }`}
          >
            <Store
              className={`w-6 h-6 ${formData.shippingMethod === "pickup" ? "text-primary" : "text-muted-foreground"}`}
            />
            <span
              className={`font-medium ${formData.shippingMethod === "pickup" ? "text-primary" : "text-foreground"}`}
            >
              {t.checkout.pickup}
            </span>
          </button>
        </div>

        {/* Address Section */}
        {formData.shippingMethod === "delivery" && (
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
                    {t.checkout.deliveryAddress}
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
                        className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none text-base"
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
                        className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none text-base"
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
                      className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none text-base"
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
                      className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none text-base"
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
                  {t.checkout.personalInfo}
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
                    className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none text-base"
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
                    className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none text-base"
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
                    className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none text-base"
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
                    className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none text-base"
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
                    className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none text-base"
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
                  {t.checkout.deliveryTime}
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
                  className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none text-base"
                >
                  <option value="">Selecteer tijdstip</option>
                  <option value="Zo snel mogelijk">Zo snel mogelijk</option>
                  <option value="17:30">17:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
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
                  {t.checkout.paymentMethod}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {formData.paymentMethod === "ideal" ? t.checkout.ideal : t.checkout.cash}
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
                    <span className="font-medium text-foreground">{t.checkout.ideal}</span>
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
                      alt="Cash"
                      className="w-8 h-8"
                    />
                    <span className="font-medium text-foreground">{t.checkout.cash}</span>
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
            <div className="flex-1 flex gap-2 min-w-0">
              <input
                type="text"
                name="discountCode"
                value={formData.discountCode}
                onChange={handleInputChange}
                placeholder={t.checkout.discountCode}
                className="flex-1 min-w-0 px-3 py-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none text-base"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 shrink-0">
                OK
              </Button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mb-6 bg-secondary rounded-xl p-4">
          <h3 className="font-semibold text-foreground mb-3">
            {t.checkout.orderSummary}
          </h3>
          <div className="space-y-2">
            {cart.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="relative shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={40}
                    height={40}
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
                      + {item.toppings.map((topping) => topping.name).join(", ")}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout footer */}
        <div className="pt-4 border-t border-border pb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-foreground font-semibold">
              {t.checkout.totalAmount} ({totalItems} {t.orderDelivery.items})
            </span>
            <span className="text-accent text-xl font-bold">
              €{totalPrice.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <Button
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 rounded-full font-semibold text-lg"
            disabled={cart.length === 0}
          >
            {t.checkout.placeOrder}
          </Button>
          <p className="text-muted-foreground text-xs text-center mt-4">
            {t.orderDelivery.freeDelivery}
          </p>
        </div>
      </div>
    </main>
  );
}
