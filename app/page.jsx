import ContactSection from "./components/ContactSection";
import CodeluxeCredit from "./components/CodeluxeCredit";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OrderSection from "./components/OrderSection";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProductsSection />
      <OrderSection />
      <ContactSection />
      <CodeluxeCredit />
    </main>
  );
}
