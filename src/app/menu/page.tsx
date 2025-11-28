import { Header } from "@/components/header";
import { MenuSection } from "@/components/menu-section";
import { Footer } from "@/components/footer";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <MenuSection />
      </div>
      <Footer />
    </main>
  );
}
