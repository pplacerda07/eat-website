'use client';

import Section from './Section';
import content from '../data/content.json';
import { motion } from 'framer-motion';

const statIcons = [
    // Eye icon — Impressions
    <svg key="impressions" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2 16s5.5-10 14-10 14 10 14 10-5.5 10-14 10S2 16 2 16z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="4.5" />
    </svg>,
    // Play icon — Views
    <svg key="views" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <polygon points="11,6 26,16 11,26" fill="currentColor" opacity="0.15" stroke="currentColor" strokeLinejoin="round" />
        <polygon points="11,6 26,16 11,26" strokeLinejoin="round" />
    </svg>,
    // Users icon — Followers
    <svg key="followers" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="10" r="4" />
        <path d="M4 26c0-4.418 3.582-8 8-8s8 3.582 8 8" strokeLinecap="round" />
        <circle cx="22" cy="10" r="3" opacity="0.5" />
        <path d="M24 18c2.761 0 5 2.239 5 5v3" strokeLinecap="round" opacity="0.5" />
    </svg>,
    // Trending up icon — Sales
    <svg key="sales" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <polyline points="4,24 12,14 18,18 28,6" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,6 28,6 28,12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
];

const statDescriptions = [
    "Total organic reach across platforms",
    "Average local viewers per reel",
    "Engaged community members",
    "Revenue lift from a single post",
];

export default function Stats() {
    return (
        <Section id="impact" className="bg-white text-black py-20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none select-none">
                {/* Large faded number */}
                <div className="absolute -top-16 -right-8 text-[28vw] font-serif font-bold text-black/[0.03] leading-none select-none">
                    650M
                </div>

            </div>

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
                        className="text-black/60 font-serif text-lg max-w-md md:text-right leading-relaxed"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                    {content.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.6 }}
                            className={`flex flex-col gap-5 p-8 lg:p-10 relative group ${index < content.stats.length - 1 ? 'border-b sm:border-b lg:border-b-0 lg:border-r border-black/10' : ''
                                } ${index === 1 ? 'sm:border-r sm:border-black/10 lg:border-r' : ''} ${index === 0 ? 'sm:border-r sm:border-black/10 lg:border-r' : ''}`}
                        >
                            {/* Icon */}
                            <div className="text-accent group-hover:text-black transition-colors duration-500">
                                {statIcons[index]}
                            </div>

                            {/* Value */}
                            <span className="text-5xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-none">
                                {stat.value}
                            </span>

                            {/* Label */}
                            <span className="text-xs uppercase tracking-[0.2em] text-black/80 font-semibold">
                                {stat.label}
                            </span>

                            {/* Description */}
                            <span className="text-sm text-black/40 font-serif leading-relaxed">
                                {statDescriptions[index]}
                            </span>

                            {/* Hover accent line */}
                            <div className="absolute bottom-0 left-8 right-8 lg:left-10 lg:right-10 h-[2px] bg-black/0 group-hover:bg-accent transition-all duration-500 rounded-full" />
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
                        <span className="text-sm text-black/50 tracking-wide font-serif">
                            All metrics organic. No paid promotion.
                        </span>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
