'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
    onFlip,
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
    }, [currentIndex]);

    return (
        <span
            className="inline-flex items-center justify-center align-middle mx-1 md:mx-3 relative"
            style={{
                width: 'clamp(40px, 10vw, 110px)',
                height: 'clamp(14px, 2.5vw, 36px)',
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

    return (
        <section
            className="w-full py-28 md:py-28 lg:py-36 px-5 md:px-12 lg:px-20 overflow-hidden"
            style={{ backgroundColor: '#fafafa' }}
        >
            <p
                className="font-serif leading-[1.25] tracking-tight text-black text-center"
                style={{ fontSize: 'clamp(32px, 4.5vw, 64px)' }}
            >
                {/* Line 1: We turn [logo] restaurants */}
                We turn
                <FlippingLogo currentIndex={indices[0]} onFlip={() => flipSlot(0)} />
                restaurants
                <br className="sm:hidden" />
                {/* Line 2 mobile / continues on desktop */}
                <span className="hidden sm:inline"> </span>
                into the places
                <FlippingLogo currentIndex={indices[1]} onFlip={() => flipSlot(1)} />
                <br className="hidden sm:block" />
                <br className="sm:hidden" />
                {/* Line 3 mobile */}
                everyone in Vancouver
                <br className="sm:hidden" />
                {/* Line 4 mobile */}
                <FlippingLogo currentIndex={indices[2]} onFlip={() => flipSlot(2)} />
                is talking about.
            </p>

            {/* Button */}
            <div className="flex justify-center mt-7 md:mt-8">
                <Link
                    href="/partners"
                    className="inline-flex items-center gap-2 px-6 py-2.5 md:px-7 md:py-3 rounded-full border border-black/30 text-black/70 tracking-widest uppercase transition-all duration-300 hover:border-black hover:text-black hover:bg-black/[0.04]"
                    style={{ letterSpacing: '0.15em', fontSize: '10px' }}
                >
                    See all partners
                </Link>
            </div>
        </section>
    );
}