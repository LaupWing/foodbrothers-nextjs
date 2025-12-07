"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/store/language-store";

export function SaladSection() {
  const { t } = useLanguageStore();

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-muted-foreground tracking-wide text-sm mb-2">
              {t.freshBurgers.tagline}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              <span className="text-primary">{t.freshBurgers.title}</span>
              <br />
              <span className="text-foreground font-sans font-bold">{t.freshBurgers.subtitle}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t.freshBurgers.description}
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full font-medium">
              {t.freshBurgers.button}
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <Image
              src="/gourmet-burger-with-melted-cheese-bacon-and-fresh-.jpg"
              alt="Fresh Hamburger"
              width={512}
              height={384}
              loading="lazy"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
