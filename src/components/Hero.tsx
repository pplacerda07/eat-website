'use client';

import Section from './Section';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <Section className="min-h-screen w-full relative overflow-hidden bg-white flex flex-col justify-center pt-24">
            <div className="w-full relative z-10 px-4 md:px-8 flex flex-col gap-[1.5vw]">

                {/* LINE 1: PREMIUM (left) + Subtitle (right, vertically centered) */}
                <div className="w-full flex items-center justify-between">
                    <motion.span
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="font-serif font-black text-[12vw] leading-[0.82] tracking-tighter text-black uppercase"
                    >
                        PREMIUM
                    </motion.span>

                    {/* Subtitle - right side, same row as PREMIUM */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="hidden md:flex flex-col gap-2 max-w-[200px] text-right"
                    >
                        <p className="text-sm font-serif text-black leading-snug">
                            Built by Vancouverites, for Vancouver restaurants. We turn your story into a powerful marketing channel.
                        </p>
                        <a href="#services" className="flex items-center justify-end gap-2 text-xs font-serif text-black uppercase tracking-widest hover:opacity-60 transition-opacity">
                            <span>↳</span> What we do
                        </a>
                    </motion.div>
                </div>

                {/* LINE 2: CONTENT (Hollow) - Right */}
                <div className="w-full flex justify-end pr-[2%]">
                    <motion.span
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                        className="font-serif font-black text-[12vw] leading-[0.82] tracking-tighter text-transparent uppercase"
                        style={{ WebkitTextStroke: '2px black' }}
                    >
                        CONTENT
                    </motion.span>
                </div>

                {/* LINE 3: CRAFTED BY - Left */}
                <div className="w-full">
                    <motion.span
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                        className="font-serif font-black text-[12vw] leading-[0.82] tracking-tighter text-black uppercase block"
                    >
                        CRAFTED BY
                    </motion.span>
                </div>

                {/* LINE 4: CREATORS. - Center */}
                <div className="w-full flex justify-center">
                    <motion.span
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                        className="font-serif font-black text-[12vw] leading-[0.82] tracking-tighter text-[#00642E] uppercase"
                    >
                        CREATORS.
                    </motion.span>
                </div>

                {/* Mobile Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex md:hidden flex-col gap-3 mt-4"
                >
                    <p className="text-sm font-serif text-black leading-snug max-w-xs">
                        Built by Vancouverites, for Vancouver restaurants. We turn your story into a powerful marketing channel.
                    </p>
                    <a href="#services" className="flex items-center gap-2 text-xs font-serif text-black uppercase tracking-widest hover:opacity-60 transition-opacity">
                        <span>↳</span> What we do
                    </a>
                </motion.div>

            </div>
        </Section>
    );
}
