'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'home', href: '/' },
    { name: 'team', href: '/team' },
    { name: 'services', href: '/#services' },
    { name: 'work', href: '/#work' },
];

interface NavbarProps {
    variant?: 'light' | 'dark';
}

export default function Navbar({ variant = 'dark' }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const textColor = variant === 'light' ? 'text-white' : 'text-black/70';
    const logoColor = 'text-accent';
    const hamburgerColor = variant === 'light' ? 'bg-white' : 'bg-black';

    return (
        <>
            <div className="w-full flex items-start justify-between px-6 md:px-10 lg:px-14 pt-8 md:pt-10 relative z-[100]">
                {/* Logo — big serif, same as original */}
                <Link
                    href="/"
                    className={`font-serif text-[8vw] md:text-[4.5vw] lg:text-[3.5vw] leading-none tracking-tight ${logoColor} hover:opacity-80 transition-opacity`}
                >
                    eatcouver
                </Link>

                {/* Desktop nav links — plain text, same as original */}
                <nav className="hidden md:flex items-center gap-6 md:gap-8 pt-2 md:pt-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-xs md:text-sm tracking-wider ${textColor} hover:opacity-70 transition-opacity lowercase`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-[110] mt-2"
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
