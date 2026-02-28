'use client';

import Section from './Section';
import content from '../data/content.json';
import { motion } from 'framer-motion';


export default function Stats() {
    return (
        <Section id="impact" className="bg-white text-black py-20 relative overflow-hidden">
            {/* Removed background decorative 650M element for a cleaner look */}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header area */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xs uppercase tracking-[0.3em] text-accent font-medium block mb-4"
                        >
                            The Numbers
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight"
                        >
                            Our Impact
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-black/60 text-lg max-w-md md:text-right leading-relaxed"
                    >
                        Real results, built organically over 10 years of telling Vancouver's food stories.
                    </motion.p>
                </div>

                {/* Divider line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-px bg-black/10 mb-10 origin-left"
                />

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-0">
                    {content.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.6 }}
                            className={`flex flex-col gap-3 lg:p-10 relative group ${index < content.stats.length - 1 ? 'lg:border-r border-black/10' : ''}`}
                        >
                            {/* Value */}
                            <span className="text-5xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-black group-hover:text-accent transition-colors duration-500">
                                {stat.value}
                            </span>

                            {/* Label */}
                            <span className="text-xs uppercase tracking-[0.2em] text-black/80 font-semibold">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-14 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-center gap-4 text-center"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm text-black/50 tracking-wide">
                            All metrics organic. No paid promotion.
                        </span>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
