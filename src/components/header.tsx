"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/image.png"
              alt="Food Brothers"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="#menu" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Our Menu
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              About Us
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-medium rounded-full px-6">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="#home" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                Home
              </Link>
              <Link href="#menu" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                Our Menu
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                About Us
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Contact
              </Link>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-medium w-full mt-2 rounded-full">
                Order Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
