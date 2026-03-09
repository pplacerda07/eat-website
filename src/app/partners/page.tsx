import PartnersWall from '@/components/PartnersWall';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function PartnersPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
            <div className="relative z-[200]">
                <Navbar variant="dark" />
            </div>
            <PartnersWall />
            <Footer />
            <ContactModal />
        </main>
    );
}
