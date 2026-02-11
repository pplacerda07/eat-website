'use client';

import Section from './Section';
import content from '../data/content.json';
import { motion } from 'framer-motion';

export default function Services() {
    return (
        <Section id="services" className="bg-accent pt-24 pb-0 px-0 md:px-0 relative overflow-hidden">
            {/* Massive Title Background */}
            <div className="w-full text-center mb-[-2vw] md:mb-[-3vw] relative z-0">
                <h2 className="text-[16vw] leading-[0.8] font-bold font-serif text-white uppercase tracking-tighter opacity-90">
                    SERVICES
                </h2>
            </div>

            {/* White Card Container */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative z-10 min-h-[40vh] max-w-6xl mx-auto shadow-2xl mb-24">
                {/* Decorative corner dots (reference style) */}
                <div className="absolute top-6 left-6 w-2 h-2 bg-black rounded-full opacity-20 hidden md:block"></div>
                <div className="absolute top-6 right-6 w-2 h-2 bg-black rounded-full opacity-20 hidden md:block"></div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                    {content.services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex flex-col gap-4"
                        >
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-black uppercase leading-[0.9] break-words">
                                {service.title}
                            </h3>
                            <div className="prose prose-base text-black/80 font-serif leading-relaxed whitespace-pre-line">
                                {service.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
