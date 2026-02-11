'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import content from '../data/content.json';

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasAutomaticallyOpened, setHasAutomaticallyOpened] = useState(false);

    useEffect(() => {
        // Event listener for opening modal
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('openContactModal', handleOpen);

        // Scroll listener for auto-open
        const handleScroll = () => {
            if (hasAutomaticallyOpened) return;
            const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
            const hasSeenModal = sessionStorage.getItem('hasSeenContactModal');

            if (scrollPercent > 0.35 && !hasSeenModal) {
                setIsOpen(true);
                setHasAutomaticallyOpened(true);
                sessionStorage.setItem('hasSeenContactModal', 'true');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('openContactModal', handleOpen);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasAutomaticallyOpened]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    if (typeof window === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white w-full max-w-lg p-8 md:p-12 rounded shadow-2xl overflow-hidden"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                        >
                            ✕
                        </button>

                        <h2 className="text-3xl font-serif text-accent mb-6">Let&apos;s Connect</h2>
                        <p className="text-gray-600 mb-8 font-light">
                            We&apos;re currently taking on new partners for Q1 2026. Let&apos;s discuss how we can tell your story.
                        </p>

                        <div className="space-y-4">
                            <a
                                href={content.contact.calendar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-4 bg-accent text-white rounded font-medium hover:bg-black transition-colors"
                            >
                                Book a Brief Call
                            </a>
                            <a
                                href={`mailto:${content.contact.email}`}
                                className="block w-full text-center py-4 border border-gray-200 text-black rounded font-medium hover:bg-gray-50 transition-colors"
                            >
                                Email Us
                            </a>
                        </div>

                        <div className="mt-8 text-center text-sm text-gray-400">
                            <p>Or find us at {content.contact.email}</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
