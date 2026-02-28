import Team from '@/components/Team';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import InstagramPopup from '@/components/InstagramPopup';

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="relative z-10">
                <Navbar variant="dark" />
            </div>
            <Team />
            <Footer />
            <ContactModal />
            <InstagramPopup />
        </main>
    );
}
