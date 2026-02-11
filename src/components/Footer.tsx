import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    <h2 className="text-3xl font-serif text-accent mb-6">eatcouver</h2>
                    <p className="text-gray-500 max-w-xs">
                        Premium social media and content agency for restaurants in Vancouver.
                    </p>
                </div>

                <div className="flex gap-12 text-sm text-gray-600">
                    <div className="flex flex-col gap-4">
                        <Link href="#work" className="hover:text-accent">Work</Link>
                        <Link href="#services" className="hover:text-accent">Services</Link>
                        <Link href="#impact" className="hover:text-accent">Impact</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link href="#partners" className="hover:text-accent">Partners</Link>
                        <Link href="#story" className="hover:text-accent">Story</Link>
                        <Link href="#team" className="hover:text-accent">Team</Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between text-xs text-gray-400">
                <p>&copy; {new Date().getFullYear()} Eatcouver. All rights reserved.</p>
                <p>Vancouver, BC</p>
            </div>
        </footer>
    );
}
