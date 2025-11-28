import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { BurgersSection } from "@/components/burgers-section";
import { SauceSection } from "@/components/sauce-section";
import { SaladSection } from "@/components/salad-section";
import { MenuSection } from "@/components/menu-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BurgersSection />
      <SauceSection />
      <SaladSection />
      <MenuSection />
      <Footer />
    </main>
  );
}
