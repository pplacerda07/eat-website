'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function RouteLoader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [prevPath, setPrevPath] = useState(pathname);

    useEffect(() => {
        if (pathname !== prevPath) {
            setLoading(true);
            setPrevPath(pathname);
            const timer = setTimeout(() => setLoading(false), 600);
            return () => clearTimeout(timer);
        }
    }, [pathname, prevPath]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 right-0 z-[9998] h-[3px]"
                >
                    <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-r-full"
                        style={{ backgroundColor: '#00642E' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
