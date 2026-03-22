import Catalog from "@/components/landing/Catalog";
import ContactButton from "@/components/landing/ContactButton";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import History from "@/components/landing/History";
import LandingCards from "@/components/landing/LandingCards";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Catalog />
      <ContactButton />
      <LandingCards />
      <History />
      <Footer />
    </main>
  );
}
