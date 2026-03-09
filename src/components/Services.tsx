'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
    {
        number: '01',
        title: 'Reels',
        tags: ['Short form Video', 'Eatcouver Platform', 'Local Reach'],
        description:
            'Averaging 75K+ local views, our Eatcouver reels deliver high impact exposure for Vancouver restaurants. We collaborate closely to align messaging with your brand.',
        image: '/JDM07580 (1).jpg',
    },
    {
        number: '02',
        title: 'Partnerships',
        tags: ['Ongoing Content', 'Strategy', 'Brand Growth'],
        description:
            'Continuous content and visibility campaigns for a hand-selected group of exceptional restaurants. Collaborative, strategic, and built for long-term outcomes.',
        image: '/JDM09960.jpg',
    },
    {
        number: '03',
        title: 'Creators',
        tags: ['Coordination', 'Creator Visits', 'UGC'],
        description:
            'We coordinate local content creators to visit your restaurant and produce authentic content on your behalf. We handle everything — you get the visibility.',
        image: '/JDM08301 (1).jpg',
    },
    {
        number: '04',
        title: 'Strategy',
        tags: ['Positioning', 'Creative Direction', 'Messaging'],
        description:
            'Messaging, positioning, and creative direction aligned with your story. We help define how your restaurant shows up across every touchpoint.',
        image: '/JDM06300 (1).jpg',
    },
];



const stackOffsets = ['0%', '-100%', '-200%', '-300%']; // initial Y shift to stack them visually

function ServiceRow({
    service,
    index,
}: {
    service: (typeof services)[0];
    index: number;
}) {
    // The ref goes on a non-animated wrapper so framer-motion scroll tracking is stable
    const rowRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: rowRef,
        offset: ['start end', 'center 0.60'],
    });

    // Start stacked (shifted up by stackOffset), end at 0% (natural position)
    const stackY = stackOffsets[index] || '0%';
    const y = useTransform(scrollYProgress, [0, 1], [stackY, '0%']);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.1, 1, 1]); // darker start to emphasize coming from behind
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <div ref={rowRef} className="relative w-full">
            <motion.div
                style={{ y, opacity, scale, zIndex: services.length - index }}
                className="border-t border-black/10 py-8 md:py-12 grid grid-cols-1 md:grid-cols-[40px_minmax(200px,1fr)_1fr_220px] lg:grid-cols-[50px_360px_1fr_260px] gap-5 md:gap-8 items-start will-change-transform bg-white relative"
            >
                {/* Number */}
                <span className="font-sans text-xs text-black/30 tracking-wide pt-2 hidden md:block">
                    {service.number}
                </span>

                {/* Title + Tags */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-3 md:hidden">
                        <span className="font-sans text-xs text-black/30 tracking-wide">
                            {service.number}
                        </span>
                    </div>
                    <h3
                        className="font-sans font-bold text-black tracking-tight leading-[1]"
                        style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
                    >
                        {service.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                        {service.tags.map((tag) => (
                            <span
                                key={tag}
                                className="font-sans text-[11px] text-black/35 tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <p className="font-sans text-sm md:text-[15px] text-black/55 leading-relaxed max-w-md pt-1">
                    {service.description}
                </p>

                {/* Service image */}
                <div className="hidden md:block">
                    <div
                        className="w-full rounded-md overflow-hidden"
                        style={{ aspectRatio: '16/9' }}
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'start 0.3'],
    });

    const titleY = useTransform(scrollYProgress, [0, 1], ['120%', '0%']);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="w-full pt-20 md:pt-32 lg:pt-40 pb-8 md:pb-12 px-6 md:px-12 lg:px-20"
            style={{ backgroundColor: '#ffffff' }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Massive centered title — mask reveal */}
                <div className="overflow-hidden mb-16 md:mb-24">
                    <motion.div style={{ y: titleY }}>
                        <motion.h2
                            style={{ fontSize: 'clamp(60px, 14vw, 200px)' }}
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="font-sans font-black uppercase tracking-tighter text-black leading-[0.85] text-center"
                        >
                            SERVICES
                        </motion.h2>
                    </motion.div>
                </div>

                {/* Service rows */}
                <div className="flex flex-col">
                    {services.map((service, i) => (
                        <ServiceRow key={service.number} service={service} index={i} />
                    ))}
                    {/* Bottom border */}
                    <div className="border-t border-black/10" />
                </div>
            </div>
        </section>
    );
}
