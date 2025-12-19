import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Destinations from "@/components/destinations";
import Packages from "@/components/packages";
import About from "@/components/about";
import Features from "@/components/features";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <About />
      <Features />
      <Gallery />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
