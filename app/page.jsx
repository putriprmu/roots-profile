import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Teams from "@/components/Teams";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Teams />
      <Menu />
      <Reviews />
      <Reservation />
      <Footer />
    </main>
  );
}
