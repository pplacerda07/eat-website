'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'Partners', href: '#partners' },
    { name: 'Story', href: '#story' },
    { name: 'Team', href: '#team' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[95vw] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center">

                {/* Left: First 3 Nav Items */}
                <nav className="hidden md:flex items-center justify-start gap-8">
                    {navItems.slice(0, 3).map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs uppercase tracking-wider text-black hover:text-accent transition-colors font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Center: Logo */}
                <Link href="/" className="text-2xl font-serif tracking-tight text-accent hover:opacity-80 transition-opacity justify-self-start md:justify-self-center">
                    eatcouver
                </Link>

                {/* Right: Last 3 Nav Items */}
                <nav className="hidden md:flex items-center justify-end gap-8">
                    {navItems.slice(3, 6).map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs uppercase tracking-wider text-black hover:text-accent transition-colors font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button aria-label="Open navigation menu" className="md:hidden text-accent justify-self-end col-start-2">
                    Menu
                </button>
            </div>
        </header>
    );
}
