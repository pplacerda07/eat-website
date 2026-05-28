'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const paragraphs = [
    {
        description: "Eatcouver was founded in 2015 with a simple mission: to support local restaurants by sharing their food, spaces, and stories with Vancouver\u2019s community.",
        image: "/4.jpg",
    },
    {
        description: "We believe every restaurant has a story worth sharing. Our role is to tell it with care, intention, and authenticity.",
        image: "/7.jpg",
    },
    {
        description: "In January 2024, our founder, Ben Chelin, launched @recipeincaption. By 2026, the page had surpassed one million followers on Instagram alone. That same understanding of social media, storytelling, and audience behaviour now shapes the work we do to drive results for restaurant partners.",
        image: "/5.jpg",
    },
    {
        description: "Today, we partner directly with restaurants to produce high-performing content, coordinate creator visits, and amplify local visibility. To date, our content has generated over 650M organic impressions.",
        image: "/13.jpg",
    },
];

const stackOffsets = ['0%', '-50%', '-200%', '-300%'];

const galleryImages = [
    { src: '/herosection_bg.png', span: 'col-span-2' },
    { src: '/8.jpg', span: 'col-span-1' },
    { src: '/16.jpg', span: 'col-span-1' },
    { src: '/2.jpg', span: 'col-span-1' },
    { src: '/25.jpg', span: 'col-span-1' },
    { src: '/24.jpg', span: 'col-span-2' },
];

function StoryParagraph({
    item,
    index,
    total,
}: {
    item: (typeof paragraphs)[0];
    index: number;
    total: number;
}) {
    const rowRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: rowRef,
        offset: ['start end', 'center 0.60'],
    });

    // Start stacked (shifted up by stackOffset), end at 0% (natural position)
    const stackY = stackOffsets[index] || '0%';
    const y = useTransform(scrollYProgress, [0, 1], [stackY, '0%']);
    const opacity =
        index === 0
            ? 1
            : useTransform(scrollYProgress, [0, 0.2, 1], [0.1, 1, 1]);
    const scale =
        index === 0
            ? 1
            : useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <div ref={rowRef} className="relative w-full">
            <motion.div
                style={{ y, opacity, scale, zIndex: total - index }}
                className={`border-t border-black/8 py-10 md:py-16 grid grid-cols-1 gap-6 md:gap-10 items-start will-change-transform bg-white relative ${index % 2 === 0
                    ? 'md:grid-cols-[40px_1fr_280px] lg:grid-cols-[50px_1fr_340px]'
                    : 'md:grid-cols-[40px_280px_1fr] lg:grid-cols-[50px_340px_1fr]'
                    }`}
            >
                {/* Desktop Number Column */}
                <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-accent font-semibold pt-2 hidden md:block">
                    {String(index + 1).padStart(2, '0')}
                </span>

                {index % 2 === 0 ? (
                    <>
                        {/* Text column */}
                        <div>
                            <div className="flex items-center gap-6 mb-6 md:hidden">
                                <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-accent font-semibold shrink-0">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="h-px bg-black/10 flex-1" />
                            </div>

                            <p className="text-lg md:text-xl lg:text-3xl leading-[1.6] tracking-tight text-black/70 font-light max-w-4xl">
                                {item.description}
                            </p>
                        </div>

                        {/* Image */}
                        <div className="w-full">
                            <div
                                className="overflow-hidden rounded-md"
                                style={{ aspectRatio: '4 / 5' }}
                            >
                                <img
                                    src={item.image}
                                    alt={`Story image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Image */}
                        <div className="w-full">
                            <div
                                className="overflow-hidden rounded-md"
                                style={{ aspectRatio: '4 / 5' }}
                            >
                                <img
                                    src={item.image}
                                    alt={`Story image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Text column */}
                        <div>
                            <div className="flex items-center gap-6 mb-6 md:hidden">
                                <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-accent font-semibold shrink-0">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="h-px bg-black/10 flex-1" />
                            </div>

                            <p className="text-lg md:text-xl lg:text-3xl leading-[1.6] tracking-tight text-black/70 font-light max-w-4xl">
                                {item.description}
                            </p>
                        </div>
                    </>
                )}
            </motion.div>
        </div>
    );
}

function EditorialGallery() {
    return (
        <section className="w-full bg-white">
            <div className="grid grid-rows-2 grid-cols-4 gap-0 w-full">
                {galleryImages.map((img, i) => (
                    <div
                        key={i}
                        className={`${img.span} overflow-hidden`}
                    >
                        <img
                            src={img.src}
                            className="w-full h-full object-cover"
                            style={{ aspectRatio: '16 / 9' }} // keeps row height consistent
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
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
            <div className="">
                {/* Header */}
                <div className="text-center max-w-7xl mx-auto px-6 md:px-12 py-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-sans text-[11px] uppercase tracking-[0.2em] text-black/25 mt-6 mb-6"
                    >
                        Our Story
                    </motion.p>
                    <div className="overflow-hidden">
                        <motion.div style={{ y: titleY }}>
                            <h2
                                className="font-sans font-bold leading-[0.95] tracking-tight text-black pb-2"
                                style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
                            >
                                HOW WE BECAME
                                <br />
                                <span className="text-accent font-serif font-normal"
                                    style={{ fontSize: 'clamp(42px, 8vw, 80px)' }}>
                                    eatcouver.
                                </span>
                            </h2>
                        </motion.div>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-sans text-[12px] uppercase tracking-[0.2em] text-black/20 mt-5"
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
                <div className="flex flex-col max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-24">
                    {paragraphs.map((item, i) => (
                        <StoryParagraph
                            key={i}
                            item={item}
                            index={i}
                            total={paragraphs.length}
                        />
                    ))}
                    {/* Bottom border */}
                    <div className="border-t border-black/8" />
                </div>

                {/* New Gallery */}
                <EditorialGallery />

                {/* Bottom CTA */}
                <div className="md:mt-28 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-24">
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
        </section >
    );
}
