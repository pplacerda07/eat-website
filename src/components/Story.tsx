'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const slides = [
    {
        id: 'title',
        render: () => (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
                <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-black/25 mb-6">
                    Our Story
                </p>
                <h2 className="font-serif text-3xl md:text-5xl font-bold leading-[0.95] tracking-tight text-black">
                    How we became
                    <br />
                    <span className="text-accent italic font-normal">eatcouver.</span>
                </h2>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/20 mt-10">
                    Vancouver, BC — Est. 2015
                </p>
            </div>
        ),
    },
    {
        id: 'origin',
        render: () => (
            <div className="flex flex-col items-center justify-center h-full text-center px-8 md:px-16 max-w-2xl mx-auto">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-black/20 mb-5">
                    01
                </span>
                <p className="text-lg md:text-2xl leading-[1.5] tracking-tight text-black">
                    <span className="font-serif font-bold">Eatcouver</span>{' '}
                    <span className="font-sans font-light text-black/55">was founded in</span>{' '}
                    <span className="font-serif italic text-accent">2015</span>{' '}
                    <span className="font-sans font-light text-black/55">
                        with a simple mission:
                    </span>{' '}
                    <span className="font-serif font-bold tracking-tight">
                        support local restaurants
                    </span>{' '}
                    <span className="font-sans font-light text-black/55">
                        by sharing their spaces, food, and stories with Vancouver&apos;s community.
                    </span>
                </p>
            </div>
        ),
    },
    {
        id: 'philosophy',
        render: () => (
            <div className="flex flex-col items-center justify-center h-full text-center px-8 md:px-16 max-w-2xl mx-auto">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-black/20 mb-5">
                    02
                </span>
                <p className="text-lg md:text-2xl leading-[1.5] tracking-tight text-black">
                    <span className="font-sans font-light text-black/55">We believe</span>{' '}
                    <span className="font-serif font-bold">every restaurant</span>{' '}
                    <span className="font-sans font-light text-black/55">
                        has a story worth sharing
                    </span>{' '}
                    <span className="font-serif italic text-accent">family-run gems,</span>{' '}
                    <span className="font-sans font-extralight text-black/45 tracking-wide">
                        nostalgic diners,
                    </span>{' '}
                    <span className="font-sans font-light text-black/55">and</span>{' '}
                    <span className="font-serif font-bold tracking-tight">
                        new neighbourhood spots
                    </span>{' '}
                    <span className="font-sans font-light text-black/55">
                        told with{' '}
                    </span>
                    <span className="font-serif italic font-semibold">
                        care, intention & authenticity.
                    </span>
                </p>
            </div>
        ),
    },
    {
        id: 'growth',
        render: () => (
            <div className="flex flex-col items-center justify-center h-full text-center px-8 md:px-16 max-w-2xl mx-auto">
                <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-black/20 mb-5">
                    03
                </span>
                <p className="text-lg md:text-2xl leading-[1.5] tracking-tight text-black">
                    <span className="font-sans font-light text-black/55">Today we partner</span>{' '}
                    <span className="font-serif font-bold tracking-tight">
                        directly with restaurants
                    </span>{' '}
                    <span className="font-sans font-light text-black/55">to produce</span>{' '}
                    <span className="font-serif italic text-accent">
                        high-performing content
                    </span>
                    <span className="font-sans font-light text-black/55">, coordinate</span>{' '}
                    <span className="font-serif font-bold">creator visits</span>
                    <span className="font-sans font-light text-black/55">, and</span>{' '}
                    <span className="font-serif font-bold tracking-tight">
                        amplify local visibility
                    </span>
                    <span className="font-sans font-light text-black/55"> — surpassing </span>
                    <span className="font-serif italic text-accent">
                        1M followers
                    </span>
                    <span className="font-sans font-light text-black/55"> by 2026.</span>
                </p>
            </div>
        ),
    },
];

export default function Story() {
    const sectionRef = useRef<HTMLElement>(null);
    const [current, setCurrent] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    // Map scroll progress to discrete slide index
    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        const index = Math.min(
            slides.length - 1,
            Math.floor(v * slides.length)
        );
        setCurrent(index);
    });

    return (
        <section
            ref={sectionRef}
            id="story"
            className="relative bg-white"
            style={{
                // Each slide gets 100vh of scroll space — user stays "stuck"
                height: `${slides.length * 70}vh`,
            }}
        >
            {/* Sticky viewport — locks in view while scrolling through */}
            <div className="sticky top-[15vh] h-[70vh] w-full overflow-hidden">
                {slides.map((slide, i) => (
                    <motion.div
                        key={slide.id}
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                            x: i < current ? '-100%' : i === current ? '0%' : '100%',
                            opacity: i === current ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {slide.render()}
                    </motion.div>
                ))}

            </div>
        </section>
    );
}