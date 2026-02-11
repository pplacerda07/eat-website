import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoWall from '@/components/LogoWall';

import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Story from '@/components/Story';
import Team from '@/components/Team';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import TestimonialShowreel from '@/components/TestimonialShowreel';
import content from '@/data/content.json';

const ENABLE_TESTIMONIALS = false;

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <Hero />

      <LogoWall
        id="trusted"
        logos={content.trustedBy}
        variant="strip"
      />



      <Services />

      <Stats />

      <LogoWall
        id="partners"
        title="Our Partners"
        logos={content.trustedBy} // Reusing for now
        variant="grid"
      />

      <Story />

      {ENABLE_TESTIMONIALS && <TestimonialShowreel />}

      <Team />

      <ContactSection />

      <Footer />

      <ContactModal />
    </main>
  );
}
