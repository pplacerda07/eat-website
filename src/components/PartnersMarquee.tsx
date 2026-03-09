'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const clientLogos = [
    { name: 'Nook', src: '/3. Nook.png' },
    { name: 'Via Tevere', src: '/4. Via Tevere.png' },
    { name: 'Pan Pacific Vancouver', src: '/17. Pan Pacific Vancouver.png' },
    { name: '21 Brewery & The Beast', src: '/21 Brewery & The Beast.png' },
    { name: 'Ciclo Espresso', src: '/27. Ciclo Espresso.png' },
    { name: 'Fiorino', src: '/30. Fiorino.png' },
    { name: 'La Grotta del Formaggio', src: '/147. La Grotta del Formaggio.png' },
];

function FlippingLogo({
    currentIndex,
}: {
    currentIndex: number;
    onFlip: () => void;
}) {
    const [flipping, setFlipping] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(currentIndex);

    useEffect(() => {
        if (currentIndex !== displayIndex) {
            setFlipping(true);
            const timeout = setTimeout(() => {
                setDisplayIndex(currentIndex);
                setFlipping(false);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, displayIndex]);

    return (
        <span
            className="inline-flex items-center justify-center align-middle mx-1 md:mx-3 relative z-[5]"
            style={{
                width: 'clamp(80px, 18vw, 130px)',
                height: 'clamp(28px, 6vw, 44px)',
                verticalAlign: 'middle',
                position: 'relative',
                top: '-0.05em',
                perspective: '600px',
            }}
        >
            <span
                style={{
                    display: 'inline-flex',
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                    transform: flipping ? 'rotateX(90deg)' : 'rotateX(0deg)',
                    opacity: flipping ? 0 : 1,
                    transformOrigin: 'center center',
                    position: 'relative',
                }}
            >
                <Image
                    src={clientLogos[displayIndex].src}
                    alt={clientLogos[displayIndex].name}
                    fill
                    className="object-contain"
                    sizes="110px"
                />
            </span>
        </span>
    );
}

export default function PartnersStatement() {
    const getInitialIndices = () => {
        const shuffled = [...Array(clientLogos.length).keys()].sort(() => Math.random() - 0.5);
        return [shuffled[0], shuffled[1], shuffled[2]];
    };

    const [indices, setIndices] = useState<[number, number, number]>([0, 1, 2]);
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const inView = useInView(textRef, { once: true, margin: "0px 0px -10% 0px" });

    useEffect(() => {
        setIndices(getInitialIndices() as [number, number, number]);
    }, []);

    const flipSlot = (slot: 0 | 1 | 2) => {
        setIndices((prev) => {
            const used = new Set(prev);
            const available = Array.from({ length: clientLogos.length }, (_, i) => i).filter(
                (i) => !used.has(i)
            );
            if (available.length === 0) return prev;
            const next = available[Math.floor(Math.random() * available.length)];
            const updated = [...prev] as [number, number, number];
            updated[slot] = next;
            return updated;
        });
    };

    useEffect(() => {
        const intervals = [
            setInterval(() => flipSlot(0), 2000),
            setInterval(() => flipSlot(1), 2700),
            setInterval(() => flipSlot(2), 3400),
        ];
        return () => intervals.forEach(clearInterval);
    }, []);

    const lineElements = [
        [
            "We turn ",
            <FlippingLogo key="f1" currentIndex={indices[0]} onFlip={() => flipSlot(0)} />,
            " restaurants"
        ],
        [
            "into the places ",
            <FlippingLogo key="f2" currentIndex={indices[1]} onFlip={() => flipSlot(1)} />,
            " everyone in"
        ],
        [
            "Vancouver ",
            <FlippingLogo key="f3" currentIndex={indices[2]} onFlip={() => flipSlot(2)} />,
            " is talking about."
        ]
    ];

    // Each line takes 0.5s, staggered: line1 0-0.5s, line2 0.5-1s, line3 1-1.5s
    const lineDelays = [0, 0.5, 1];

    return (
        <section
            ref={sectionRef}
            className="w-full py-28 md:py-28 lg:py-36 px-5 md:px-12 lg:px-20 overflow-hidden"
            style={{ backgroundColor: '#ffffff' }}
        >
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-6xl mx-auto"
                ref={textRef}
                animate={{ y: [0, -4, 0] }}
            >
                {/* Base text (gray) */}
                <div
                    className="font-serif leading-[1.25] tracking-tight text-center text-black/10 flex flex-col"
                    style={{ fontSize: 'clamp(36px, 5.5vw, 78px)' }}
                >
                    {lineElements.map((content, i) => (
                        <div key={`base-${i}`} className="w-full">
                            {content}
                        </div>
                    ))}
                </div>

                {/* Overlay colored text with timed clip-path */}
                <div
                    className="font-serif leading-[1.25] tracking-tight text-center absolute top-0 left-0 right-0 w-full flex flex-col"
                    style={{
                        fontSize: 'clamp(36px, 5.5vw, 78px)',
                        color: '#000000',
                    }}
                >
                    {lineElements.map((content, i) => (
                        <div
                            key={`overlay-${i}`}
                            className="w-full"
                            style={{
                                clipPath: inView ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
                                transition: `clip-path 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${lineDelays[i]}s`,
                            }}
                        >
                            {content}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center mt-7 md:mt-8 relative z-10"
            >
                <Link
                    href="/partners"
                    className="inline-flex items-center gap-2 px-6 py-2.5 md:px-7 md:py-3 rounded-full border border-black/30 text-black/70 tracking-widest uppercase transition-all duration-300 hover:border-black hover:text-black hover:bg-black/[0.04]"
                    style={{ letterSpacing: '0.15em', fontSize: '10px' }}
                >
                    See all partners
                </Link>
            </motion.div>
        </section>
    );
}