import Hero from '@/components/Hero';

import Services from '@/components/Services';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

import TestimonialShowreel from '@/components/TestimonialShowreel';
import VideoCarousel from '@/components/VideoCarousel';
import PartnersMarquee from '@/components/PartnersMarquee';
import PartnersCarousel from '@/components/PartnersCarousel';
import content from '@/data/content.json';

const ENABLE_TESTIMONIALS = false;

// Stacking section wrapper — slides over the hero with rounded top corners
function StackSection({
  children,
  zIndex,
  className = '',
}: {
  children: React.ReactNode;
  zIndex: number;
  className?: string;
}) {
  return (
    <div
      className={`relative bg-white ${className}`}
      style={{
        zIndex,
        borderRadius: '20px 20px 0 0',
        marginTop: '-20px',
      }}
    >
      {children}
    </div>
  );
}

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

      {/* Hero — sticky, sits behind all stacking sections */}
      <Hero />

      {/* Stacking sections — each one slides up over the hero */}
      <StackSection zIndex={10}>
        <VideoCarousel />
      </StackSection>

      <StackSection zIndex={20}>
        <Services />
      </StackSection>

      <StackSection zIndex={25} className="!bg-white">
        <PartnersCarousel />
      </StackSection>

      {ENABLE_TESTIMONIALS && (
        <StackSection zIndex={40}>
          <TestimonialShowreel />
        </StackSection>
      )}

      <StackSection zIndex={50} className="!bg-[#fafafa]">
        <ContactSection />
      </StackSection>

      <StackSection zIndex={60}>
        <Footer />
      </StackSection>

      <ContactModal />

    </main>
  );
}
