import Team from '@/components/Team';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';


export default function TeamPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
            <div className="relative z-[200]">
                <Navbar variant="dark" />
            </div>
            <Team />
            <Footer />
            <ContactModal />

        </main>
    );
}
