'use client';

import Section from './Section';
import content from '../data/content.json';
import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <Section id="connect" className="bg-white py-16 md:py-32 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 md:gap-12 px-5 md:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-serif text-accent"
                    style={{ textShadow: '0 2px 20px rgba(0,100,46,0.08)' }}
                >
                    Let&apos;s Connect
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-base md:text-xl text-gray-600 font-light"
                >
                    Ready to elevate your restaurant&apos;s story? We&apos;d love to hear from you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-center gap-3 md:gap-6 w-full sm:w-auto"
                >
                    <a
                        href={content.contact.calendar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 md:py-4 bg-accent text-white rounded-full text-base md:text-lg hover:bg-black transition-colors duration-300 text-center shadow-md hover:shadow-lg"
                    >
                        Book a Meeting
                    </a>
                    <a
                        href={`mailto:${content.contact.email}`}
                        className="px-8 py-3.5 md:py-4 border border-accent text-accent rounded-full text-base md:text-lg hover:bg-gray-50 transition-colors duration-300 text-center"
                    >
                        Email Us
                    </a>
                </motion.div>

                <div className="mt-4 md:mt-8 text-gray-500">
                    <p className="mb-2 text-sm md:text-base">Or call us at</p>
                    <a href={`tel:${content.contact.phone}`} className="text-lg md:text-xl text-black hover:text-accent font-serif">
                        {content.contact.phone}
                    </a>
                </div>
            </div>
        </Section>
    );
}
