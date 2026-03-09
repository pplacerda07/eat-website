import Story from '@/components/Story';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function StoryPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
            <div className="relative z-[200]">
                <Navbar variant="dark" />
            </div>
            <Story />
            <Footer />
            <ContactModal />
        </main>
    );
}
