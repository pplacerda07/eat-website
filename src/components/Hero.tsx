'use client';

import Section from './Section';
import Link from 'next/link';
import Navbar from './Navbar';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const [socialPlatform, setSocialPlatform] = useState(0);

    const socialPlatforms = ["Instagram", "Facebook", "TikTok"];

    useEffect(() => {
        const interval = setInterval(() => {
            setSocialPlatform((current) => (current + 1) % socialPlatforms.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

    const AnimatedTitle = ({
        text,
        className,
        delay = 0
    }: {
        text: string;
        className: string;
        delay?: number;
    }) => {
        return (
            <motion.div
                className="flex flex-wrap max-w-full"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.04,
                            delayChildren: delay
                        }
                    }
                }}
            >
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 30,
                                filter: "blur(8px)"
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)"
                            }
                        }}
                        transition={{
                            duration: 1.0,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className={className}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    const [isMounted, setIsMounted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setIsMounted(true);
        // Force play the video to ensure autoplay works on all devices and low-power modes
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Ignore play error
            });
        }
    }, []);

    return (
        <div
            ref={ref}
            style={{ position: 'sticky', top: 0, zIndex: 0, height: '95vh', overflow: 'hidden' }}
        >
            <motion.div
                style={{ scale, opacity, height: '100%' }}
                className="w-full relative flex flex-col"
            >
                {/* Background Video */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/Video Website without transitions.m4v" type="video/mp4" />
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

                    <div className="flex flex-col items-end text-right w-full max-w-full">

                        {/* Static headline */}
                        <div className="font-sans font-black text-[8vw] sm:text-[8vw] md:text-[6vw] leading-[0.9] tracking-tighter text-white uppercase max-w-full">
                            Vancouver's Leading
                        </div>

                        <div className="font-sans font-black text-[8vw] sm:text-[8vw] md:text-[6vw] leading-[0.9] tracking-tighter text-white uppercase max-w-full">
                            Restaurant Discovery
                        </div>

                        {/* Platform + rotating word */}
                        <div className="flex flex-col md:flex-row items-end md:items-baseline justify-end w-full max-w-full">

                            {/* Static "Platform on" */}
                            <div className="font-sans font-black text-[8vw] sm:text-[8vw] md:text-[6vw] leading-[0.9] tracking-tighter text-white uppercase shrink-0">
                                Platform on
                            </div>

                            {/* Rotating final word */}
                            <div className="relative md:ml-[0.25em] overflow-visible shrink-0">
                                <div className="invisible font-sans font-black text-[8vw] sm:text-[8vw] md:text-[6vw] leading-[0.9] tracking-tighter text-white uppercase whitespace-nowrap">
                                    &nbsp;Instagram
                                </div>

                                <div className="absolute inset-0 text-right overflow-visible">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={socialPlatforms[socialPlatform]}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.92
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 1.02
                                            }}
                                            transition={{
                                                duration: 0.2,
                                                ease: [0.16, 1, 0.3, 1]
                                            }}
                                            className="font-sans font-black text-[8vw] sm:text-[8vw] md:text-[6vw] leading-[0.9] tracking-tighter text-white uppercase whitespace-nowrap"
                                        >
                                            {socialPlatforms[socialPlatform]}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </motion.div>
        </div>
    );
}

