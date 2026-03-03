import PartnersCarousel from '@/components/PartnersCarousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import InstagramPopup from '@/components/InstagramPopup';
import Story from '@/components/Story';

export default function PartnersPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: '#fafafa' }}>
            <Navbar variant="dark" />
            <div className="pt-24">
                <PartnersCarousel />
            </div>
            <Story />
            <Footer />
            <ContactModal />
            <InstagramPopup />
        </main>
    );
}
