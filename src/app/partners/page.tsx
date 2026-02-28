import LogoWall from '@/components/LogoWall';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import InstagramPopup from '@/components/InstagramPopup';

const allPartners = [
    { name: 'Nook', logo: '/3. Nook.png' },
    { name: 'Via Tevere', logo: '/4. Via Tevere.png' },
    { name: 'Pan Pacific Vancouver', logo: '/17. Pan Pacific Vancouver.png' },
    { name: '21 Brewery & The Beast', logo: '/21 Brewery & The Beast.png' },
    { name: 'Ciclo Espresso', logo: '/27. Ciclo Espresso.png' },
    { name: 'Fiorino', logo: '/30. Fiorino.png' },
    { name: 'La Grotta del Formaggio', logo: '/147. La Grotta del Formaggio.png' },
];

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar variant="dark" />
            <div className="pt-32 pb-16">
                <LogoWall
                    id="all-partners"
                    title="Our 200+ Partners"
                    logos={allPartners}
                    variant="grid"
                />
            </div>
            <Footer />
            <ContactModal />
            <InstagramPopup />
        </main>
    );
}
