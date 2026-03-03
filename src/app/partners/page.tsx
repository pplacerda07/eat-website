import PartnersCarousel from '@/components/PartnersCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import InstagramPopup from '@/components/InstagramPopup';

export default function PartnersPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: '#fafafa' }}>
            <Navbar variant="dark" />
            <div className="pt-24">
                <PartnersCarousel />
            </div>
            <Footer />
            <ContactModal />
            <InstagramPopup />
        </main>
    );
}
