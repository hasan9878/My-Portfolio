import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900">
      <Hero />
      <About />
      <ExperienceSection />
      <ServicesSection />
    <PortfolioSection />
    <Testimonial  />
    <Contact />
    </main>
  );
}
