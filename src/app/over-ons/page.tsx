"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/store/language-store";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const { t, language } = useLanguageStore();

  const content = {
    nl: {
      tagline: "Ons Verhaal",
      title: "Over Food Brothers",
      intro: "Welkom bij Food Brothers, waar passie voor eten en familie samenkomen. Sinds onze oprichting hebben we ons toegewijd aan het serveren van de lekkerste burgers met de hoogste kwaliteit ingrediënten.",
      story: {
        title: "Hoe Het Begon",
        text: "Food Brothers is geboren uit een simpele droom: eerlijk, smaakvol en vers eten serveren aan onze gemeenschap. Wat begon als een klein familieproject is uitgegroeid tot een geliefde bestemming voor burgerliefhebbers.",
      },
      mission: {
        title: "Onze Missie",
        text: "Wij geloven dat goed eten mensen samenbrengt. Daarom gebruiken we alleen 100% halal gecertificeerd vlees, verse ingrediënten van lokale leveranciers, en bereiden we al onze sauzen dagelijks vers in huis.",
      },
      values: {
        title: "Waar Wij Voor Staan",
        items: [
          { title: "Kwaliteit", desc: "100% premium Black Angus en biologisch rundvlees" },
          { title: "Versheid", desc: "Dagelijks verse ingrediënten en huisgemaakte sauzen" },
          { title: "Halal", desc: "Al ons vlees is 100% halal gecertificeerd" },
          { title: "Familie", desc: "Een warme sfeer waar iedereen welkom is" },
        ],
      },
      cta: "Bekijk Ons Menu",
    },
    en: {
      tagline: "Our Story",
      title: "About Food Brothers",
      intro: "Welcome to Food Brothers, where passion for food and family come together. Since our founding, we have dedicated ourselves to serving the most delicious burgers with the highest quality ingredients.",
      story: {
        title: "How It Started",
        text: "Food Brothers was born from a simple dream: to serve honest, flavorful, and fresh food to our community. What started as a small family project has grown into a beloved destination for burger lovers.",
      },
      mission: {
        title: "Our Mission",
        text: "We believe that good food brings people together. That's why we only use 100% halal certified meat, fresh ingredients from local suppliers, and prepare all our sauces fresh in-house every day.",
      },
      values: {
        title: "What We Stand For",
        items: [
          { title: "Quality", desc: "100% premium Black Angus and organic beef" },
          { title: "Freshness", desc: "Daily fresh ingredients and homemade sauces" },
          { title: "Halal", desc: "All our meat is 100% halal certified" },
          { title: "Family", desc: "A warm atmosphere where everyone is welcome" },
        ],
      },
      cta: "View Our Menu",
    },
  };

  const c = content[language];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70 tracking-wide text-sm mb-2">{c.tagline}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            {c.title}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {c.intro}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/gourmet-burger-with-melted-cheese-bacon-and-fresh-.jpg"
                alt="Food Brothers Story"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full hidden lg:flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground text-center text-sm font-bold leading-tight">
                  Since<br />2010
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                {c.story.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {c.story.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                {c.mission.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {c.mission.text}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/homemade-sauces.png"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-12">
            {c.values.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.values.items.map((item, index) => (
              <div key={index} className="bg-secondary rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            {language === "nl" ? "Kom Langs of Bestel Online" : "Visit Us or Order Online"}
          </h2>
          <Link href="/menu">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-full font-medium text-lg">
              {c.cta}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
