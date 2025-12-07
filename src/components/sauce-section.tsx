"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/store/language-store";

export function SauceSection() {
  const { t } = useLanguageStore();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/homemade-sauces.png"
              alt="Homemade Premium Sauces"
              width={512}
              height={512}
              loading="lazy"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full hidden lg:flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground text-center text-sm font-bold leading-tight whitespace-pre-line">
                {t.sauce.badge}
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="relative flex items-center mb-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary"></div>
              </div>
              <p className="relative bg-background px-4 text-primary tracking-wide text-sm font-medium">
                {t.sauce.tagline}
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-2">
              {t.sauce.title}
            </h2>
            <p className="text-accent text-3xl font-serif mb-6">{t.sauce.subtitle}</p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t.sauce.description}
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-full font-medium">
              {t.sauce.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
