'use client';

import content from '../data/content.json';
import { motion } from 'framer-motion';

export default function Team() {
    return (
        <section className="w-full bg-white min-h-screen px-4 md:px-10 lg:px-14 overflow-hidden pt-14 md:pt-24"> {/* Aumentei o padding-top aqui */}

            {/* Wrapper relativo para sobrepor título e cards */}
            <div className="relative w-full">

                {/* "People" — atrás dos cards, opaco e fino */}
                <h1
                    className="font-serif text-black select-none leading-[0.85] text-center w-full absolute top-0 left-0 right-0 z-0"
                    style={{
                        fontSize: 'clamp(70px, 18vw, 320px)',
                        letterSpacing: '0.05em',
                        fontWeight: 100, // Font mais fina
                        opacity: 0.1,
                        pointerEvents: 'none',
                    }}
                >
                    Team
                </h1>

                {/* Cards — na frente, sobrepostos ao título */}
                <div
                    className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 max-w-5xl mx-auto pb-16 md:pb-24"
                    style={{ paddingTop: 'clamp(60px, 10vw, 140px)' }} // Mantive o padding-top nos cards para posicioná-los
                >
                    {content.team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative overflow-hidden"
                            style={{
                                aspectRatio: '3/4',
                                borderRadius: '16px',
                            }}
                        >
                            {/* Foto / placeholder */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundColor: '#c8c4b8',
                                    filter: 'grayscale(100%)',
                                }}
                            >
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-20">
                                    <div
                                        className="rounded-full bg-black"
                                        style={{ width: '28%', aspectRatio: '1' }}
                                    />
                                    <div
                                        className="rounded-full bg-black"
                                        style={{ width: '55%', height: '38%' }}
                                    />
                                </div>
                            </div>

                            {/* Overlay gradiente inferior */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 45%, transparent 70%)',
                                }}
                            />

                            {/* Tags topo */}
                            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                                <span
                                    className="uppercase tracking-[0.18em] text-white/60"
                                    style={{
                                        fontSize: '7px',
                                        fontFamily: 'sans-serif',
                                        background: 'rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(6px)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        padding: '3px 8px',
                                        borderRadius: '999px',
                                    }}
                                >
                                    eatcouver
                                </span>
                                <span
                                    className="uppercase tracking-[0.18em] text-white/60"
                                    style={{
                                        fontSize: '7px',
                                        fontFamily: 'sans-serif',
                                        background: 'rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(6px)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        padding: '3px 8px',
                                        borderRadius: '999px',
                                    }}
                                >
                                    {member.role}
                                </span>
                            </div>

                            {/* Nome e cargo — rodapé */}
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5">
                                <h3
                                    className="font-serif font-bold text-white leading-tight tracking-tight"
                                    style={{ fontSize: 'clamp(18px, 2.2vw, 28px)' }}
                                >
                                    {member.name}
                                </h3>
                                <p
                                    className="text-white/50 mt-1 uppercase tracking-[0.18em]"
                                    style={{ fontSize: '7px', fontFamily: 'sans-serif' }}
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