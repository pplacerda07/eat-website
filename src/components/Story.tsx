'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const paragraphs = [
    "Eatcouver was founded in 2015 with a simple mission: support local restaurants by sharing their spaces, food, and stories with Vancouver\u2019s community. What began as a passion project quickly evolved into a powerful marketing channel for hospitality businesses.",
    "We believe every restaurant has a story worth sharing \u2014 family-run gems, nostalgic diners, and new neighbourhood spots. Our role is to tell each story with care, intention & authenticity.",
    "In January 2024, our founder Ben launched @recipeincaption \u2014 by 2026, it surpassed one million followers on Instagram alone, reinforcing our team\u2019s deep understanding of how to build reach through strong storytelling.",
    "Today, we partner directly with restaurants to produce high-performing content, coordinate creator visits, and amplify local visibility \u2014 surpassing 140k+ local followers and 650M+ impressions generated organically.",
];

const stackOffsets = ['0%', '-100%', '-200%', '-300%'];

function StoryParagraph({ text, index, total }: { text: string; index: number; total: number }) {
    const rowRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: rowRef,
        offset: ['start end', 'center 0.60'],
    });

    // Start stacked (shifted up by stackOffset), end at 0% (natural position)
    const stackY = stackOffsets[index] || '0%';
    const y = useTransform(scrollYProgress, [0, 1], [stackY, '0%']);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.1, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <div ref={rowRef} className="relative w-full">
            <motion.div
                style={{ y, opacity, scale, zIndex: total - index }}
                className="border-t border-black/8 py-12 md:py-20 will-change-transform bg-white relative"
            >
                {/* Number + line */}
                <div className="flex items-center gap-6 mb-8 md:mb-10">
                    <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-accent font-semibold shrink-0">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px bg-black/10 flex-1" />
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-black/20 shrink-0">
                        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                </div>

                {/* Body text — no title */}
                <p className="text-lg md:text-xl lg:text-3xl leading-[1.6] tracking-tight text-black/70 font-light max-w-5xl">
                    {text}
                </p>
            </motion.div>
        </div>
    );
}

export default function Story() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'start 0.3'],
    });

    const titleY = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

    return (
        <section
            ref={sectionRef}
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
                        <motion.div style={{ y: titleY }}>
                        <h2
                            className="font-sans font-bold leading-[0.95] tracking-tight text-black pb-2"
                            style={{ fontSize: 'clamp(36px, 7vw, 72px)' }}
                        >
                            How we became
                            <br />
                            <span className="text-accent italic font-normal">eatcouver.</span>
                        </h2>
                        </motion.div>
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

                    {/* Scroll arrow indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-12 flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black/30"
                            >
                                <path d="M7 13l5 5 5-5" />
                                <path d="M7 7l5 5 5-5" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll-reveal paragraphs */}
                <div className="flex flex-col">
                    {paragraphs.map((text, i) => (
                        <StoryParagraph key={i} text={text} index={i} total={paragraphs.length} />
                    ))}
                    {/* Bottom border */}
                    <div className="border-t border-black/8" />
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 md:mt-28">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-black/55 leading-relaxed max-w-2xl mx-auto text-center"
                    >
                        If you&apos;re interested in partnering with us, start the conversation at{' '}
                        <a
                            href="mailto:admin@eatcouver.ca"
                            className="text-accent hover:underline font-medium"
                        >
                            admin@eatcouver.ca
                        </a>
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
