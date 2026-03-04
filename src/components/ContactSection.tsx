'use client';

import content from '../data/content.json';
import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <section id="connect" className="w-full" style={{ backgroundColor: '#fafafa' }}>
            <div className="px-5 md:px-12 lg:px-20 py-20 md:py-32 lg:py-40 flex flex-col items-center text-center">
                {/* Main CTA Text */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif font-bold text-black uppercase tracking-tighter leading-[0.85] whitespace-nowrap"
                    style={{ fontSize: 'clamp(28px, 9vw, 160px)' }}
                >
                    MAKE IT DELICIOUS.
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif font-bold text-black uppercase tracking-tighter leading-[0.85] mt-2 md:mt-4 whitespace-nowrap"
                    style={{ fontSize: 'clamp(28px, 9vw, 160px)' }}
                >
                    MAKE IT SELL.
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-black/60 font-medium tracking-wide mt-6 md:mt-8 max-w-xl"
                >
                    Ready to elevate your restaurant&apos;s story? We&apos;d love to hear from you.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row justify-center gap-3 md:gap-6 w-full sm:w-auto mt-8 md:mt-10"
                >
                    <a
                        href={content.contact.calendar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 bg-white border-2 border-black text-black tracking-wide font-medium transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                        style={{ fontSize: '14px', borderRadius: '12px', boxShadow: '4px 4px 0px 0px #00642E' }}
                    >
                        Book a Meeting
                    </a>
                    <a
                        href={`mailto:${content.contact.email}`}
                        className="inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 bg-white border-2 border-black text-black tracking-wide font-medium transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                        style={{ fontSize: '14px', borderRadius: '12px', boxShadow: '4px 4px 0px 0px #00642E' }}
                    >
                        Email Us
                    </a>
                </motion.div>

                {/* Phone */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 md:mt-12 text-black/50 hover:text-black/80 transition-colors duration-300 font-medium flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${content.contact.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                        {content.contact.phone}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
