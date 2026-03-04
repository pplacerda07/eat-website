'use client';

import { motion } from 'framer-motion';

const chapters = [
    {
        number: '01',
        title: 'The Beginning',
        text: (
            <>
                <span className="font-serif font-bold">Eatcouver</span>{' '}
                <span className="text-black/55">was founded in</span>{' '}
                <span className="font-serif italic text-accent">2015</span>{' '}
                <span className="text-black/55">
                    with a simple mission:
                </span>{' '}
                <span className="font-serif font-bold">support local restaurants</span>{' '}
                <span className="text-black/55">
                    by sharing their spaces, food, and stories with Vancouver&apos;s community. What began as a passion project quickly evolved into a powerful marketing channel for hospitality businesses.
                </span>
            </>
        ),
    },
    {
        number: '02',
        title: 'Our Philosophy',
        text: (
            <>
                <span className="text-black/55">We believe</span>{' '}
                <span className="font-serif font-bold">every restaurant</span>{' '}
                <span className="text-black/55">
                    has a story worth sharing —
                </span>{' '}
                <span className="font-serif italic text-accent">family-run gems,</span>{' '}
                <span className="text-black/55">
                    nostalgic diners, and
                </span>{' '}
                <span className="font-serif font-bold">
                    new neighbourhood spots.
                </span>{' '}
                <span className="text-black/55">
                    Our role is to tell each story with
                </span>{' '}
                <span className="font-serif italic font-semibold">
                    care, intention &amp; authenticity.
                </span>
            </>
        ),
    },
    {
        number: '03',
        title: 'The Growth',
        text: (
            <>
                <span className="text-black/55">In January 2024, our founder Ben launched</span>{' '}
                <span className="font-serif font-bold">@recipeincaption</span>{' '}
                <span className="text-black/55">
                    — by 2026, it surpassed
                </span>{' '}
                <span className="font-serif italic text-accent">one million followers</span>{' '}
                <span className="text-black/55">
                    on Instagram alone, reinforcing our team&apos;s deep understanding of how to build reach through
                </span>{' '}
                <span className="font-serif font-bold">strong storytelling.</span>
            </>
        ),
    },
    {
        number: '04',
        title: 'Today',
        text: (
            <>
                <span className="text-black/55">Today, we partner directly with restaurants to produce</span>{' '}
                <span className="font-serif italic text-accent">high-performing content,</span>{' '}
                <span className="text-black/55">coordinate</span>{' '}
                <span className="font-serif font-bold">creator visits,</span>{' '}
                <span className="text-black/55">and</span>{' '}
                <span className="font-serif font-bold">amplify local visibility</span>{' '}
                <span className="text-black/55">
                    — surpassing
                </span>{' '}
                <span className="font-serif italic text-accent">140k+ local followers</span>{' '}
                <span className="text-black/55">
                    and 650M+ impressions generated organically.
                </span>
            </>
        ),
    },
];

export default function Story() {
    return (
        <section
            id="story"
            className="relative w-full overflow-hidden"
            style={{ backgroundColor: '#fafafa' }}
        >
            {/* Header */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-16 md:pb-24 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans text-[11px] uppercase tracking-[0.35em] text-black/25 mb-6"
                >
                    Our Story
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif font-bold leading-[0.95] tracking-tight text-black"
                    style={{ fontSize: 'clamp(36px, 7vw, 72px)' }}
                >
                    How we became
                    <br />
                    <span className="text-accent italic font-normal">eatcouver.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans text-[12px] uppercase tracking-[0.2em] text-black/20 mt-10"
                >
                    Vancouver, BC — Est. 2015
                </motion.p>
            </div>

            {/* Divider */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-black/8 max-w-5xl mx-6 md:mx-auto origin-center md:origin-left"
            />

            {/* Chapters */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="flex flex-col gap-16 md:gap-24">
                    {chapters.map((chapter, i) => (
                        <motion.div
                            key={chapter.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-10"
                        >
                            {/* Left — number + title */}
                            <div className="flex flex-row md:flex-col items-baseline md:items-start gap-3 md:gap-1">
                                <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-accent font-medium">
                                    {chapter.number}
                                </span>
                                <span className="font-serif text-sm md:text-base text-black/40 tracking-tight">
                                    {chapter.title}
                                </span>
                            </div>

                            {/* Right — body text */}
                            <p className="text-xl md:text-2xl lg:text-[1.7rem] leading-[1.6] tracking-tight text-black font-light">
                                {chapter.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-36"
            >
                <div className="h-px bg-black/8 mb-10" />
                <p className="text-lg md:text-xl text-black/55 leading-relaxed max-w-2xl">
                    If you&apos;re interested in partnering with us, start the conversation at{' '}
                    <a
                        href="mailto:admin@eatcouver.ca"
                        className="text-accent hover:underline font-medium"
                    >
                        admin@eatcouver.ca
                    </a>
                </p>
            </motion.div>
        </section>
    );
}
