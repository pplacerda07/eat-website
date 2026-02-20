'use client';

import Image from 'next/image';

// Client logo files from /public
const clientLogos = [

    { name: 'Nook', src: '/3. Nook.png' },
    { name: 'Via Tevere', src: '/4. Via Tevere.png' },
    { name: 'Pan Pacific Vancouver', src: '/17. Pan Pacific Vancouver.png' },
    { name: '21 Brewery & The Beast', src: '/21 Brewery & The Beast.png' },
    { name: 'Ciclo Espresso', src: '/27. Ciclo Espresso.png' },
    { name: 'Fiorino', src: '/30. Fiorino.png' },
    { name: 'La Grotta del Formaggio', src: '/147. La Grotta del Formaggio.png' },
];

// Duplicate for continuous loop
const loopedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

export default function PartnersMarquee() {
    return (
        <section className="w-full bg-white py-16 overflow-hidden">
            <div className="px-4 md:px-8 mb-8">
                <h2 className="text-xs font-serif uppercase tracking-[0.3em] text-black/50">Our Partners — 200+ Partners</h2>
            </div>

            {/* Marquee container */}
            <div className="relative w-full overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

                <div
                    className="flex items-center gap-12 w-max"
                    style={{
                        animation: 'marquee 22s linear infinite',
                    }}
                >
                    {loopedLogos.map((logo, i) => (
                        <div
                            key={i}
                            className="shrink-0 h-14 w-32 relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                fill
                                className="object-contain"
                                sizes="128px"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(calc(-100% / 3)); }
                }
            `}</style>
        </section>
    );
}
