"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from "lucide-react"
import { useLanguageStore } from "@/store/language-store"
import Link from "next/link"

export function HeroSection() {
  const { t } = useLanguageStore()
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 md:pt-20 pb-40 md:pb-20 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-orange-50"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Google Reviews Badge */}
            <a
              href="https://www.google.com/maps/place/Food+Brothers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex items-center gap-1">
                <span className="font-bold text-foreground">4,8</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`w-4 h-4 ${i <= 4 ? "fill-yellow-400" : "fill-yellow-400/80"} text-yellow-400`} />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">(1.522 reviews)</span>
              </div>
            </a>
            <p className="text-primary font-medium tracking-wide text-sm mb-4">Welcome to Food Brothers</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary leading-tight mb-6">
              Delicious Food,
              <br />
              <span className="text-foreground font-sans font-bold">Made Fresh Daily</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-md mx-auto lg:mx-0">
              Experience handcrafted burgers, crispy chicken, and fresh salads made with love and premium ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/menu">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full font-medium">
                  {t.hero.viewMenu}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <img
                src="/juicy-beef-burger-floating-with-ingredients-explod.jpg"
                alt="Delicious Burger"
                className="relative w-full max-w-lg rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
