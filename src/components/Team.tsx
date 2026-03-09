'use client';

import Image from 'next/image';
import content from '../data/content.json';
import { motion } from 'framer-motion';

export default function Team() {
    return (
        <section
            className="w-full min-h-screen px-4 md:px-10 lg:px-14 overflow-hidden pt-14 md:pt-24"
            style={{ backgroundColor: '#ffffff' }}
        >

            {/* Wrapper relativo para sobrepor título e cards */}
            <div className="relative w-full">

                {/* "Team" — atrás dos cards, opaco e fino */}
                <div className="absolute top-0 left-0 right-0 z-0 overflow-hidden text-center w-full" style={{ paddingTop: '20px' }}>
                    <motion.h1
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-black select-none leading-none inline-block"
                        style={{
                            fontSize: 'clamp(70px, 18vw, 320px)',
                            letterSpacing: '0.05em',
                            fontWeight: 100,
                            opacity: 0.1,
                            pointerEvents: 'none',
                            lineHeight: 1
                        }}
                    >
                        Team
                    </motion.h1>
                </div>

                {/* Cards */}
                <div
                    className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 max-w-5xl mx-auto pb-16 md:pb-24"
                    style={{ paddingTop: 'clamp(60px, 10vw, 140px)' }}
                >
                    {content.team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.0,
                                delay: index * 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group relative overflow-hidden bg-[#e0e0e0]"
                            style={{
                                aspectRatio: '3/4',
                                borderRadius: '16px',
                            }}
                        >
                            {/* Photo */}
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover object-top"
                                priority={index < 3}
                            />

                            {/* Overlay gradiente inferior */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 45%, transparent 70%)',
                                }}
                            />



                            {/* Nome e cargo — rodapé */}
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5">
                                <h3
                                    className="font-serif font-bold text-white leading-tight tracking-tight"
                                    style={{ fontSize: 'clamp(18px, 2.2vw, 28px)' }}
                                >
                                    {member.name}
                                </h3>
                                <p
                                    className="text-white/90 mt-1 uppercase tracking-[0.18em]"
                                    style={{ fontSize: '11px', fontFamily: 'sans-serif', fontWeight: 500 }}
                                >
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
