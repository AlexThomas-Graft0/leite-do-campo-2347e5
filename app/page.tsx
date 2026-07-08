import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustSignals } from "@/components/TrustSignals";
import { AboutUs } from "@/components/AboutUs";
import { ProductCatalog } from "@/components/ProductCatalog";
import { FaqSection } from "@/components/FaqSection";
import { FarmBlog } from "@/components/FarmBlog";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Leite Do Campo\",\"description\":\"Milk collection network for local dairy farms and producers.\",\"url\":\"https://leite-do-campo-2347e5.duckbyte.co\"}" }} />
      <Navbar />
      <section id="hero-section" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <HeroSection />
        </Suspense>
      </section>
      <section id="how-it-works" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <HowItWorks />
        </Suspense>
      </section>
      <section id="trust-signals" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <TrustSignals />
        </Suspense>
      </section>
      <section id="about-us" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <AboutUs />
        </Suspense>
      </section>
      <section id="product-catalog" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <ProductCatalog />
        </Suspense>
      </section>
      <section id="faq-section" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <FaqSection />
        </Suspense>
      </section>
      <section id="farm-blog" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <FarmBlog />
        </Suspense>
      </section>
      <section id="contact-section" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <ContactSection />
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}