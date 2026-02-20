'use client';

import { motion } from 'framer-motion';

const timeline = [
    {
        year: '2015',
        label: 'Founded',
        caption: 'Eatcouver is born',
        rotate: -7,
        left: -18,
    },
    {
        year: '2024',
        label: '@recipeincaption',
        caption: '1M+ followers by 2026',
        rotate: 9,
        left: 22,
    },
    {
        year: '2025',
        label: '100k Local Fans',
        caption: "Vancouver's #1 food platform",
        rotate: - 5,
        left: -10,
    },
    {
        year: 'Today',
        label: 'Full‑Scale Media',
        caption: 'Content. Creators. Growth.',
        rotate: 8,
        left: 16,
    },
];

const ROPE = 'M 55 0 C 75 140, 32 280, 58 420 C 78 560, 30 660, 55 800';

export default function Story() {
    return (
        <section className="w-full bg-white py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-0 items-start">

                {/* ── LEFT: copy ── */}
                <div className="flex-1 md:pr-20 pt-0 md:pt-4">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="text-xs font-serif uppercase tracking-[0.3em] text-black/40 mb-4"
                    >
                        Our Story
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.08 }}
                        className="font-serif font-black text-4xl md:text-5xl text-black leading-[1.05] mb-10"
                    >
                        How we became<br />
                        <span className="text-[#00642E]">Eatcouver</span>
                    </motion.h2>

                    {[
                        `Eatcouver was founded in 2015 with a simple mission: support local restaurants by sharing their spaces, food, and stories with Vancouver's community. What began as a passion project quickly evolved into a powerful marketing channel for hospitality businesses.`,

                        `Our philosophy is straightforward: tell each restaurant's story in the way they want it told. Visibility is great, but far less so when messaging doesn't align with a restaurant's brand. This is why collaboration with our partners is at the core of our operations.`,

                        `We believe great content is not reserved for only the most prized venues. Family-run gems, nostalgic diners, and new neighbourhood spots deserve just as much visibility as any fine dining room. Every restaurant has a story worth sharing — our role is to tell it with care, intention, and authenticity.`,

                        `In January 2024, our founder Ben launched @recipeincaption, applying the same principles used to grow Eatcouver. By 2026, the page surpassed one million Instagram followers, reinforcing our team's understanding of how to build reach through strong storytelling.`,

                        `After Eatcouver surpassed 100,000 local followers in summer 2025, we expanded into full-scale hospitality media. Today, we partner directly with restaurants to produce native, high-performing content, coordinate creator visits, and amplify local visibility.`,
                    ].map((para, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                            className="font-serif text-black/60 text-[14px] md:text-[15px] leading-relaxed mb-5 last:mb-0"
                        >
                            {para}
                        </motion.p>
                    ))}
                </div>

                {/* ── RIGHT: vertical clothesline timeline ── */}
                <div className="relative flex-shrink-0 w-[200px] md:w-[240px] h-[820px] self-stretch mx-auto md:mx-0">

                    {/* Wavy rope */}
                    <svg
                        viewBox="0 0 110 800"
                        className="absolute inset-0 w-full h-full"
                        preserveAspectRatio="none"
                    >
                        <path
                            d={ROPE}
                            fill="none"
                            stroke="#3a2510"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            opacity="0.28"
                            strokeDasharray="6 4"
                        />
                    </svg>

                    {/* Timeline polaroids */}
                    {timeline.map((item, i) => {
                        const topPx = 30 + i * 190;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.75, y: -20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.13 }}
                                className="absolute"
                                style={{
                                    top: `${topPx}px`,
                                    left: `calc(50% + ${item.left}px)`,
                                    transform: `translateX(-50%) rotate(${item.rotate}deg)`,
                                    transformOrigin: 'top center',
                                }}
                            >
                                {/* Pin */}
                                <div className="flex justify-center mb-[-5px] relative z-10">
                                    <div className="w-3.5 h-3.5 rounded-full bg-[#00642E] border-[1.5px] border-[#003d1a] shadow-md" />
                                </div>

                                {/* Polaroid */}
                                <div className="bg-white rounded-sm shadow-[0_6px_30px_rgba(0,0,0,0.14)] p-2.5 pb-6 w-[112px] md:w-[130px] cursor-default hover:scale-105 hover:shadow-2xl transition-all duration-300">
                                    {/* Photo placeholder */}
                                    <div
                                        className="w-full aspect-square relative overflow-hidden"
                                        style={{ background: `hsl(${100 + i * 42},16%,${88 - i * 3}%)` }}
                                    >
                                        <div
                                            className="absolute inset-0 opacity-10"
                                            style={{ backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 6px,rgba(0,0,0,.5) 6px,rgba(0,0,0,.5) 7px)' }}
                                        />
                                        {/* Year badge */}
                                        <span className="absolute top-1.5 left-2 font-serif font-black text-[13px] text-black/40">
                                            {item.year}
                                        </span>
                                    </div>

                                    {/* Caption */}
                                    <div className="mt-2 text-center space-y-0.5">
                                        <p className="font-serif font-bold text-[10px] text-black/80 leading-tight">{item.label}</p>
                                        <p className="font-serif text-[9px] text-black/40 leading-tight">{item.caption}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
