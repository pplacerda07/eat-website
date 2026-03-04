import Team from '@/components/Team';
import Story from '@/components/Story';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import InstagramPopup from '@/components/InstagramPopup';

export default function TeamPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: '#fafafa' }}>
            <div className="relative z-[200]">
                <Navbar variant="dark" />
            </div>
            <Team />
            <Story />
            <Footer />
            <ContactModal />
            <InstagramPopup />
        </main>
    );
}
