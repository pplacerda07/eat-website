'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clientLogos = [
    { name: 'Anh and Chi', src: '/1. Anh and Chi.png' },
    { name: 'JoeFortes', src: '/2. JoeFortes.png' },
    { name: 'Nook', src: '/3. Nook.png' },
    { name: 'Via Tevere', src: '/4. Via Tevere.png' },
    { name: 'Pan Pacific Vancouver', src: '/17. Pan Pacific Vancouver.png' },
    { name: '21 Brewery & The Beast', src: '/21 Brewery & The Beast.png' },
    { name: 'Ciclo Espresso', src: '/27. Ciclo Espresso.png' },
    { name: 'Fiorino', src: '/30. Fiorino.png' },
    { name: 'La Grotta del Formaggio', src: '/147. La Grotta del Formaggio.png' },
];

// Distribute logos across 3 rows, repeating if needed to fill each row
const row1Logos = [...clientLogos.slice(0, 5), ...clientLogos.slice(5, 9), ...clientLogos.slice(0, 3)];
const row2Logos = [...clientLogos.slice(3, 9), ...clientLogos.slice(0, 6)];
const row3Logos = [...clientLogos.slice(6, 9), ...clientLogos.slice(0, 9)];

function MarqueeRow({
    logos,
    direction = 'right',
    speed = 35,
}: {
    logos: typeof clientLogos;
    direction?: 'left' | 'right';
    speed?: number;
}) {
    // Duplicate logos for seamless loop
    const duped = [...logos, ...logos];

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ padding: '10px 0' }}
        >
            <div
                className="flex items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 w-max"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`,
                }}
            >
                {duped.map((logo, idx) => (
                    <div
                        key={`${logo.name}-${idx}`}
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{
                            width: 'clamp(70px, 14vw, 160px)',
                            height: 'clamp(30px, 6vw, 70px)',
                        }}
                    >
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            width={160}
                            height={70}
                            className="object-contain w-full h-full opacity-70 hover:opacity-100 transition-all duration-500"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function PartnersCarousel() {
    return (
        <section
            className="relative w-full overflow-hidden py-14 sm:py-20 md:py-28 lg:py-36"
            style={{ backgroundColor: '#fafafa' }}
        >
            {/* Section title */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-bold tracking-tight text-black/80 text-center mb-10 sm:mb-12 md:mb-16 px-5"
                style={{ fontSize: 'clamp(32px, 7vw, 64px)', lineHeight: 1.05 }}
            >
                Driven by Design, <br className="md:hidden" />Trusted by Brands.
            </motion.h2>

            {/* Background "PARTNERS" text */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                aria-hidden="true"
            >
                <span
                    className="font-serif font-bold uppercase whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(80px, 18vw, 300px)',
                        letterSpacing: '0.08em',
                        color: 'rgba(0, 0, 0, 0.04)',
                        lineHeight: 1,
                    }}
                >
                    PARTNERS
                </span>
            </div>

            {/* Carousel rows */}
            <div className="relative z-10 flex flex-col gap-1 sm:gap-2 md:gap-4">
                <MarqueeRow logos={row1Logos} direction="right" speed={40} />
                <MarqueeRow logos={row2Logos} direction="left" speed={35} />
                <MarqueeRow logos={row3Logos} direction="right" speed={45} />
            </div>

            {/* Keyframes */}
            <style jsx global>{`
                @keyframes marquee-right {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                @keyframes marquee-left {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </section>
    );
}

