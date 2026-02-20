import Header from '@/components/Header';
import Hero from '@/components/Hero';

import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Story from '@/components/Story';
import Team from '@/components/Team';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import InstagramPopup from '@/components/InstagramPopup';
import TestimonialShowreel from '@/components/TestimonialShowreel';
import VideoCarousel from '@/components/VideoCarousel';
import PartnersMarquee from '@/components/PartnersMarquee';
import content from '@/data/content.json';

const ENABLE_TESTIMONIALS = false;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Eatcouver",
    description:
      "Premium social media and content agency for restaurants in Vancouver. Creator-led content that helps restaurants fill tables.",
    url: "https://eatcouver.ca",
    email: "admin@eatcouver.ca",
    telephone: "604-404-1222",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    founder: {
      "@type": "Person",
      name: "Ben",
    },
    foundingDate: "2015",
    areaServed: {
      "@type": "City",
      name: "Vancouver",
    },
    knowsAbout: [
      "Restaurant Marketing",
      "Social Media Content",
      "Food Photography",
      "Video Production",
      "Influencer Marketing",
    ],
    sameAs: [
      "https://www.instagram.com/eatcouver",
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <Hero />

      <VideoCarousel />


      <Stats />

      <Services />

      <PartnersMarquee />

      <Story />

      {ENABLE_TESTIMONIALS && <TestimonialShowreel />}

      <Team />

      <ContactSection />

      <Footer />

      <ContactModal />
      <InstagramPopup />
    </main>
  );
}
