'use client';

import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { ProcessSection } from '@/components/process-section';
import { AuthoritySection } from '@/components/authority-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { AboutSection } from '@/components/about-section';
import { FAQSection } from '@/components/faq-section';
import { MapSection } from '@/components/map-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AuthoritySection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <MapSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
