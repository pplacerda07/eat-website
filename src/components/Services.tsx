'use client';

import Section from './Section';
import content from '../data/content.json';
import { motion } from 'framer-motion';

export default function Services() {
    return (
        <Section id="services" className="pt-12 pb-0 px-0 md:px-0 relative overflow-hidden">
            {/* SVG Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/services_backgorund_image.svg")' }}
            />

            {/* Massive Title Background */}
            <div className="w-full text-center mb-[-2vw] md:mb-[-3vw] relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-[14vw] md:text-[16vw] leading-[0.8] font-bold font-serif text-white uppercase tracking-tighter opacity-90"
                >
                    SERVICES
                </motion.h2>
            </div>

            {/* White Card Container */}
            <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-5 md:p-12 lg:p-16 relative z-10 min-h-[40vh] max-w-6xl mx-4 md:mx-auto shadow-lg md:shadow-2xl mb-16 md:mb-24">
                {/* Decorative corner dots */}
                <div className="absolute top-6 left-6 w-2 h-2 bg-black rounded-full opacity-20 hidden md:block" />
                <div className="absolute top-6 right-6 w-2 h-2 bg-black rounded-full opacity-20 hidden md:block" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
                    {content.services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex flex-col gap-3 md:gap-4"
                        >
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black uppercase leading-[0.9] break-words">
                                {service.title}
                            </h3>
                            <div className="prose prose-sm md:prose-base text-black/80 leading-relaxed whitespace-pre-line">
                                {service.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
