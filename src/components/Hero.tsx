'use client';

import Section from './Section';
import Link from 'next/link';
import Navbar from './Navbar';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

    const AnimatedTitle = ({ text, className, delay = 0 }: { text: string; className: string; delay?: number }) => {
        return (
            <motion.div
                className="flex flex-wrap"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.04, delayChildren: delay }
                    }
                }}
            >
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                        }}
                        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                        className={className}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    return (
        <div
            ref={ref}
            style={{ position: 'sticky', top: 0, zIndex: 0, height: '100vh', overflow: 'hidden' }}
        >
            <motion.div
                style={{ scale, opacity, height: '100%' }}
                className="w-full relative flex flex-col"
            >
                {/* Background Video */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/video_hero_section.mp4" type="video/mp4" />
                    </video>
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Top Bar: Navbar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10"
                >
                    <Navbar variant="light" />
                </motion.div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Bottom Content */}
                <div className="relative z-10 w-full px-5 md:px-10 lg:px-14 pb-14 md:pb-16 lg:pb-20 flex flex-col items-end gap-2 md:gap-3">


                    <div className="flex flex-col items-end text-right">
                        <AnimatedTitle
                            text="PREMIUM"
                            delay={0}
                            className="font-sans font-black text-[11vw] md:text-[7vw] leading-[0.9] tracking-tighter text-white uppercase"
                        />
                        <AnimatedTitle
                            text="CONTENT"
                            delay={0.08}
                            className="font-sans font-black text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter text-white uppercase"
                        />
                        <AnimatedTitle
                            text="CRAFTED BY"
                            delay={0.16}
                            className="font-sans font-black text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter text-white uppercase"
                        />
                        <AnimatedTitle
                            text="CREATORS"
                            delay={0.24}
                            className="font-sans font-black text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter text-white uppercase"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

