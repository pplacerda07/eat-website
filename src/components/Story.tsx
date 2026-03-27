'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const chapters = [
    {
        number: '01',
        title: 'The Beginning',
        text: "Eatcouver was founded in 2015 with a simple mission: support local restaurants by sharing their spaces, food, and stories with Vancouver\u2019s community. What began as a passion project quickly evolved into a powerful marketing channel for hospitality businesses.",
    },
    {
        number: '02',
        title: 'Our Philosophy',
        text: "We believe every restaurant has a story worth sharing \u2014 family-run gems, nostalgic diners, and new neighbourhood spots. Our role is to tell each story with care, intention & authenticity.",
    },
    {
        number: '03',
        title: 'The Growth',
        text: "In January 2024, our founder Ben launched @recipeincaption \u2014 by 2026, it surpassed one million followers on Instagram alone, reinforcing our team\u2019s deep understanding of how to build reach through strong storytelling.",
    },
    {
        number: '04',
        title: 'Today',
        text: "Today, we partner directly with restaurants to produce high-performing content, coordinate creator visits, and amplify local visibility \u2014 surpassing 140k+ local followers and 650M+ impressions generated organically.",
    },
];

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 80 : -80,
        opacity: 0,
        filter: 'blur(6px)',
    }),
    center: {
        x: 0,
        opacity: 1,
        filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -80 : 80,
        opacity: 0,
        filter: 'blur(6px)',
    }),
};

export default function Story() {
    const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        const nextIndex = activeIndex + newDirection;
        if (nextIndex < 0 || nextIndex >= chapters.length) return;
        setActiveIndex([nextIndex, newDirection]);
    };

    const goTo = (index: number) => {
        setActiveIndex([index, index > activeIndex ? 1 : -1]);
    };

    const chapter = chapters[activeIndex];

    return (
        <section
            id="story"
            className="relative w-full overflow-hidden border-t border-black/10"
            style={{ backgroundColor: '#ffffff' }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36">
                {/* Header */}
                <div className="text-center mb-20 md:mb-28">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-sans text-[11px] uppercase tracking-[0.35em] text-black/25 mb-6"
                    >
                        Our Story
                    </motion.p>
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: '100%' }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                            className="font-sans font-bold leading-[0.95] tracking-tight text-black pb-2"
                            style={{ fontSize: 'clamp(36px, 7vw, 72px)' }}
                        >
                            How we became
                            <br />
                            <span className="text-accent italic font-normal">eatcouver.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-sans text-[12px] uppercase tracking-[0.2em] text-black/20 mt-10"
                    >
                        Vancouver, BC &mdash; Est. 2015
                    </motion.p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    {/* Chapter content area */}
                    <div className="relative min-h-[280px] md:min-h-[260px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.5,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="w-full"
                            >
                                {/* Number + line */}
                                <div className="flex items-center gap-6 mb-8 md:mb-10">
                                    <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-accent font-semibold shrink-0">
                                        {chapter.number}
                                    </span>
                                    <div className="h-px bg-black/10 flex-1" />
                                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-black/20 shrink-0">
                                        {chapter.number} / {String(chapters.length).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3
                                    className="font-sans font-bold tracking-tight text-black leading-[1.0] mb-6 md:mb-8"
                                    style={{ fontSize: 'clamp(32px, 6vw, 64px)' }}
                                >
                                    {chapter.title}
                                </h3>

                                {/* Body */}
                                <p className="text-lg md:text-xl lg:text-3xl leading-[1.6] tracking-tight text-black/70 font-light max-w-5xl">
                                    {chapter.text}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation controls */}
                    <div className="flex items-center justify-between mt-14 md:mt-20 border-t border-black/8 pt-8">
                        {/* Progress dots */}
                        <div className="flex gap-2.5">
                            {chapters.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className="group relative p-1 -m-1"
                                    aria-label={`Go to chapter ${i + 1}`}
                                >
                                    <div
                                        className="h-[3px] rounded-full transition-all duration-500"
                                        style={{
                                            width: i === activeIndex ? '32px' : '10px',
                                            backgroundColor:
                                                i === activeIndex
                                                    ? 'var(--color-accent, #000)'
                                                    : 'rgba(0,0,0,0.12)',
                                        }}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Prev / Next arrows */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => paginate(-1)}
                                disabled={activeIndex === 0}
                                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-green-500 text-white flex items-center justify-center transition-all duration-300 hover:bg-green-600 disabled:opacity-20 disabled:cursor-not-allowed"
                                aria-label="Previous chapter"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => paginate(1)}
                                disabled={activeIndex === chapters.length - 1}
                                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-green-500 text-white flex items-center justify-center transition-all duration-300 hover:bg-green-600 disabled:opacity-20 disabled:cursor-not-allowed"
                                aria-label="Next chapter"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 md:mt-28">
                    <div className="h-px bg-black/8 mb-10" />
                    <p className="text-lg md:text-xl text-black/55 leading-relaxed max-w-2xl mx-auto text-center">
                        If you&apos;re interested in partnering with us, start the conversation at{' '}
                        <a
                            href="mailto:admin@eatcouver.ca"
                            className="text-accent hover:underline font-medium"
                        >
                            admin@eatcouver.ca
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
