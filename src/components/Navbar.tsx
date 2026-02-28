'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/#work' },
    { name: 'Team', href: '/team' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#connect' },
];

interface NavbarProps {
    variant?: 'light' | 'dark';
}

export default function Navbar({ variant = 'dark' }: NavbarProps) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const logoColor = 'text-accent';
    const linkColor = variant === 'light' ? 'text-white/70 hover:text-white' : 'text-black/50 hover:text-black';
    const activeBorder = variant === 'light' ? 'border-white/40 text-white' : 'border-black/30 text-black';
    const inactiveBorder = 'border-transparent';
    const hamburgerColor = variant === 'light' ? 'bg-white' : 'bg-black';

    return (
        <>
            <div className="w-full flex items-center justify-between px-5 md:px-10 lg:px-14 pt-6 md:pt-10 relative z-[100]">
                {/* Logo */}
                <Link
                    href="/"
                    className={`font-sans text-sm md:text-base tracking-wide ${logoColor} hover:opacity-80 transition-opacity lowercase font-medium`}
                >
                    eatcouver
                </Link>

                {/* Desktop nav links */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive =
                            (item.href === '/team' && pathname === '/team') ||
                            (item.href === '/partners' && pathname === '/partners') ||
                            (item.href === '/' && pathname === '/');

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`font-sans text-[11px] md:text-xs tracking-wider px-4 py-1.5 rounded-full border transition-all duration-200 ${isActive ? activeBorder : `${inactiveBorder} ${linkColor}`
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-[110]"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-5 h-[1.5px] ${menuOpen ? 'bg-black' : hamburgerColor} transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                            }`}
                    />
                    <span
                        className={`block w-5 h-[1.5px] ${menuOpen ? 'bg-black' : hamburgerColor} transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                            }`}
                    />
                    <span
                        className={`block w-5 h-[1.5px] ${menuOpen ? 'bg-black' : hamburgerColor} transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                            }`}
                    />
                </button>

                {/* Desktop spacer to balance logo */}
                <div className="w-16 hidden md:block" />
            </div>

            {/* Mobile fullscreen overlay menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[105] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden"
                    >
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: i * 0.06, duration: 0.3 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-serif text-3xl tracking-tight text-black/80 hover:text-accent transition-colors"
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
