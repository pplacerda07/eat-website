'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
                    style={{ backgroundColor: '#fafafa' }}
                >
                    {/* Logo */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-4xl md:text-5xl text-accent tracking-tight"
                    >
                        eatcouver
                    </motion.p>

                    {/* Loader bar */}
                    <div className="w-32 md:w-40 h-[2px] bg-black/10 rounded-full mt-6 overflow-hidden">
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: '#00642E' }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
