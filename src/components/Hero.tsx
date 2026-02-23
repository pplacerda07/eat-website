'use client';

import Section from './Section';
import { motion } from 'framer-motion';

export default function Hero() {
    const AnimatedTitle = ({ text, className, delay = 0 }: { text: string; className: string; delay?: number }) => {
        return (
            <motion.div
                className="flex whitespace-nowrap"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.08, delayChildren: delay }
                    }
                }}
            >
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={className}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    return (
        <Section className="min-h-screen w-full relative overflow-hidden bg-white flex flex-col justify-center pt-24">
            <div className="w-full relative z-10 px-4 md:px-8 flex flex-col gap-[1.5vw]">

                {/* LINE 1: PREMIUM (left) + Subtitle (right, vertically centered) */}
                <div className="w-full flex items-center justify-between">
                    <AnimatedTitle
                        text="PREMIUM"
                        delay={0}
                        className="font-serif font-black text-[12vw] leading-[0.82] tracking-tighter text-black uppercase"
                    />

                    {/* Subtitle - right side, same row as PREMIUM */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
                        className="hidden md:flex flex-col gap-2 max-w-[200px] text-right"
                    >
                        <p className="text-sm font-serif text-black leading-snug">
                            We turn your business into a powerful marketing channel.
                        </p>
                        <a href="#services" className="flex items-center justify-end gap-2 text-xs font-serif text-black uppercase tracking-widest hover:opacity-60 transition-opacity">
                            <span>↳</span> What we do
                        </a>
                    </motion.div>
                </div>

                {/* LINE 2: CONTENT (Hollow) - Right */}
                <div className="w-full flex justify-end pr-[2%]">
                    <AnimatedTitle
                        text="CONTENT"
                        delay={0.1}
                        className="font-serif font-black text-[12vw] leading-[0.82] tracking-tighter text-black uppercase"
                    />
                </div>

                {/* LINE 3: CRAFTED BY - Left */}
                <div className="w-full">
                    <AnimatedTitle
                        text="CRAFTED BY"
                        delay={0.2}
                        className="font-serif font-black text-[12vw] leading-[0.82] tracking-tighter text-black uppercase block"
                    />
                </div>

                {/* LINE 4: CREATORS. - Center */}
                <div className="w-full flex justify-center">
                    <AnimatedTitle
                        text="CREATORS."
                        delay={0.3}
                        className="font-serif font-black text-[12vw] leading-[0.82] tracking-tighter text-[#00642E] uppercase"
                    />
                </div>

                {/* Mobile Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
                    className="flex md:hidden flex-col gap-3 mt-4"
                >
                    <p className="text-sm font-serif text-black leading-snug max-w-xs">
                        We turn your business into a powerful marketing channel.
                    </p>
                    <a href="#services" className="flex items-center gap-2 text-xs font-serif text-black uppercase tracking-widest hover:opacity-60 transition-opacity">
                        <span>↳</span> What we do
                    </a>
                </motion.div>

            </div>
        </Section>
    );
}
