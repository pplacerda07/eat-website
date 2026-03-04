'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clientLogos = [
    { name: 'Anh and Chi', src: '/1. Anh and Chi.png' },
    { name: 'JoeFortes', src: '/2. JoeFortes.png' },
    { name: 'Nook', src: '/3. Nook.png' },
    { name: 'Via Tevere', src: '/4. Via Tevere.png' },
    { name: 'Hotel Georgia', src: '/16. Hotel Georgia.png' },
    { name: 'Pan Pacific Vancouver', src: '/17. Pan Pacific Vancouver.png' },
    { name: 'Elem', src: '/18. Elem.png' },
    { name: 'Brooklyn Dumpling Shop', src: '/19. Brooklyn Dumpling Shop.png' },
    { name: 'Shipyards Night Market', src: '/20. Shipyards Night Market.png' },
    { name: 'Brewery & The Beast', src: '/21 Brewery & The Beast.png' },
    { name: 'Le Crocodile', src: '/22. Le Crocodile.png' },
    { name: 'The Acorn', src: '/23. The Acorn.png' },
    { name: 'Call Me Back', src: '/24. Call Me Back.png' },
    { name: 'Baan Lao', src: '/25. Baan Lao.png' },
    { name: 'Melo Patisserie', src: '/26. Melo Patisserie.png' },
    { name: 'Ciclo Espresso', src: '/27. Ciclo Espresso.png' },
    { name: 'Odd Burger', src: '/28. Odd Burger.png' },
    { name: 'Folke', src: '/29. Folke.png' },
    { name: 'Fiorino', src: '/30. Fiorino.png' },
    { name: 'Wildlight Kitchen & Bar', src: '/32. Wildlight Kitchen & Bar.png' },
    { name: 'Ophelia', src: '/33. Ophelia.png' },
    { name: 'St. Lawrence', src: '/34. St. Lawrence.png' },
    { name: 'Fanny Bay Oysters', src: '/35. Fanny Bay Oysters.png' },
    { name: "Steve's Poke", src: "/36. Steve's Poke.png" },
    { name: 'Kozak', src: '/37. Kozak.png' },
    { name: 'Sula Indian Restaurant', src: '/38.  Sula Indian Restaurant.png' },
    { name: 'Di Beppe', src: '/40. Di Beppe.png' },
    { name: 'Dockside', src: '/41. Dockside.png' },
    { name: 'Brix & Mortar', src: '/42. Brix & Mortar.png' },
    { name: 'Atlas Steak House', src: '/43. Atlas Steak House.png' },
    { name: 'Bar Asra', src: '/45. Bar Asra.png' },
    { name: 'La Ruota Pizza', src: '/46. La Ruota Pizza.png' },
    { name: "AJ's Pizza", src: "/47. AJ_s Pizza.png" },
    { name: 'Grounds for Coffee', src: '/48. Grounds for Coffee.png' },
    { name: 'Soft Peaks', src: '/49. Soft Peaks.png' },
    { name: 'One Under', src: '/50. One Under.png' },
    { name: "Big Mama & Papa's Pizza", src: "/51. Big Mama & Papa's Pizza.png" },
    { name: 'Park Drive Bar', src: '/52. Park Drive Bar.png' },
    { name: 'FlyOver Vancouver', src: '/53. FlyOver Vancouver.png' },
    { name: '49th Parallel', src: '/54. 49th Parallel.png' },
    { name: 'Prado Café', src: '/55. Prado Café.png' },
    { name: 'Pallet Coffee', src: '/56. Pallet Coffee.png' },
    { name: 'Earl of Sandwich', src: '/57. Earl of Sandwich.png' },
    { name: "Leopold's Tavern", src: "/58. Leopold's Tavern.png" },
    { name: 'Barcelos', src: '/59. Barcelos.png' },
    { name: 'Vancouver Cherry Blossom Festival', src: '/60. Vancouver Cherry Blossom Festival.png' },
    { name: 'Kitchen Table Group', src: '/61. Kitchen Table Group.png' },
    { name: 'BC Halal Food Fest', src: '/62. BC Halal Food Fest.png' },
    { name: 'Afghan Kitchen', src: '/63. Afghan Kitchen.png' },
    { name: 'Afghan Horseman', src: '/64. Afghan Horseman.png' },
    { name: 'HellCrust', src: '/65. HellCrust.png' },
    { name: 'Pizza Maru', src: '/66. Pizza Maru.png' },
    { name: 'Uncle Fatih', src: '/67. Uncle Fatih.png' },
    { name: 'Fuwa Fuwa', src: '/68. Fuwa Fuwa.png' },
    { name: 'Horin Tonkotsu Ramen', src: '/70. Horin Tonkotsu Ramen.png' },
    { name: 'Katsu San', src: '/71. Katsu San.png' },
    { name: 'Saku', src: '/72. Saku.png' },
    { name: 'La Grotta del Formaggio', src: '/147. La Grotta del Formaggio.png' },
];

// Distribute logos across 4 rows for a fuller display
const perRow = Math.ceil(clientLogos.length / 4);
const row1Logos = clientLogos.slice(0, perRow);
const row2Logos = clientLogos.slice(perRow, perRow * 2);
const row3Logos = clientLogos.slice(perRow * 2, perRow * 3);
const row4Logos = clientLogos.slice(perRow * 3);


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
                            width={120}
                            height={50}
                            loading="lazy"
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
            id="partners"
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

            {/* Carousel rows — 4 rows for a full logo wall */}
            <div className="relative z-10 flex flex-col gap-1 sm:gap-2 md:gap-4">
                <MarqueeRow logos={row1Logos} direction="right" speed={45} />
                <MarqueeRow logos={row2Logos} direction="left" speed={40} />
                <MarqueeRow logos={row3Logos} direction="right" speed={50} />
                <MarqueeRow logos={row4Logos} direction="left" speed={42} />
            </div>
        </section>
    );
}

