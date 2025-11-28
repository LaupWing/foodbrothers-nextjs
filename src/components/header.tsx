"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useLanguageStore } from "@/store/language-store";
import { CheckoutDrawer } from "@/components/checkout-drawer";
import { LanguageToggle } from "@/components/language-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { getTotalItems } = useCartStore();
  const { t } = useLanguageStore();
  const totalItems = getTotalItems();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Mobile: Menu button on left */}
            <button
              className="md:hidden text-foreground w-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo - left on desktop, center on mobile */}
            <Link href="/" className="flex items-center md:flex-none absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <Image
                src="/logo.png"
                alt="Food Brothers"
                width={280}
                height={80}
                className="h-14 md:h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation - centered */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <Link
                href="#home"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {t.header.home}
              </Link>
              <Link
                href="#menu"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {t.header.ourMenu}
              </Link>
              <Link
                href="#about"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {t.header.aboutUs}
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {t.header.contact}
              </Link>
            </nav>

            {/* Right side - Language toggle and cart */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <LanguageToggle />
              </div>
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="text-foreground hover:text-primary relative"
              >
                <ShoppingCart className="w-6 h-6 md:w-7 md:h-7" />
                {totalItems > 0 && (
                  <span className="absolute -top-3 -right-3 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-4">
                <Link
                  href="#home"
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.header.home}
                </Link>
                <Link
                  href="#menu"
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.header.ourMenu}
                </Link>
                <Link
                  href="#about"
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.header.aboutUs}
                </Link>
                <Link
                  href="#contact"
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.header.contact}
                </Link>
                <div className="pt-2">
                  <LanguageToggle />
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <CheckoutDrawer
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}
