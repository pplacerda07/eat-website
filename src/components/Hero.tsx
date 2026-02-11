'use client';

import Section from './Section';
import { motion } from 'framer-motion';
import content from '../data/content.json';

export default function Hero() {
    return (
        <Section className="min-h-screen flex flex-col justify-center pt-32 pb-12 overflow-hidden relative">
            <div className="max-w-[90vw] mx-auto relative w-full flex flex-col items-center">
                {/* Main Title - Stacked and Massive */}
                <div className="relative z-10 font-serif leading-[0.85] tracking-tighter text-black uppercase w-full">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[11vw] md:text-[12vw] font-bold block"
                    >
                        CREATOR-LED
                    </motion.div>

                    <div className="flex items-start mt-2 md:mt-4 relative">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-[7vw] md:text-[8vw] font-bold block ml-[6vw] text-accent shrink-0"
                        >
                            RESTAURANT
                        </motion.div>

                        {/* Subtitle - Positioned next to RESTAURANT */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="ml-8 max-w-[25vw] md:max-w-[20vw] text-justify z-20 pt-[1vw]"
                        >
                            <p className="text-[1.5vw] md:text-[1.2vw] font-serif font-medium leading-tight text-black">
                                {content.hero.subheadline}
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[11vw] md:text-[12vw] font-bold block"
                    >
                        CONTENT.
                    </motion.div>
                </div>

                {/* 9:16 Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full mt-24 md:mt-32 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
                >
                    <div className="flex md:justify-center gap-4 min-w-max px-4">
                        {content.work.map((item, index) => (
                            <div
                                key={index}
                                className="snap-center shrink-0 w-[25vh] md:w-[30vh] aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden relative group"
                            >
                                <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                                {/* Placeholder for actual media */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs uppercase tracking-widest font-medium">
                                    {item.type}
                                </div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
