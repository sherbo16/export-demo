import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { HeroSection } from "@/components/site/HeroSection";
import { AboutSection } from "@/components/site/AboutSection";
import { ProductsSection } from "@/components/site/ProductsSection";
import { CertificationsSection } from "@/components/site/CertificationsSection";
import { GlobalReachSection } from "@/components/site/GlobalReachSection";
import { WhyChooseSection } from "@/components/site/WhyChooseSection";
import { GallerySection } from "@/components/site/GallerySection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-[#F1F5F9]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <CertificationsSection />
        <GlobalReachSection />
        <WhyChooseSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
