'use client';

import { useRef } from 'react';
import content from '../data/content.json';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'center center'],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ['60%', '0%']);

    return (
        <section
            ref={sectionRef}
            id="connect"
            className="w-full relative overflow-hidden"
            style={{ backgroundColor: '#ffffff' }}
        >
            {/* Top divider */}
            <div className="w-full border-t border-black/10" />

            <div className="relative py-20 md:py-28 lg:py-36 px-4 md:px-8">
                {/* Massive text block — fills width, overflows edges */}
                <div className="overflow-hidden">
                    <motion.div
                        style={{ y: textY }}
                        className="flex flex-col items-center select-none"
                    >
                        <span
                            className="font-sans font-black uppercase tracking-tighter text-black leading-[0.85] text-center block"
                            style={{ fontSize: 'clamp(32px, 9.5vw, 150px)', textShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
                        >
                            READY TO TURN
                        </span>
                        <span
                            className="font-sans font-black uppercase tracking-tighter text-black leading-[0.85] text-center block"
                            style={{ fontSize: 'clamp(32px, 9.5vw, 150px)' }}
                        >
                            TABLES INTO
                        </span>
                        <span
                            className="font-sans font-black uppercase tracking-tighter text-black leading-[0.85] text-center block"
                            style={{ fontSize: 'clamp(32px, 9.5vw, 150px)' }}
                        >
                            REVENUE?
                        </span>
                    </motion.div>
                </div>

                {/* Standardized CTA button — placed below the text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center mt-10 md:mt-14"
                >
                    <a
                        href={content.contact.calendar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 md:px-10 md:py-4 bg-white border-2 border-black text-black tracking-wide font-medium transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none font-sans"
                        style={{ fontSize: '14px', borderRadius: '12px', boxShadow: '4px 4px 0px 0px #00642E' }}
                    >
                        Contact us
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
