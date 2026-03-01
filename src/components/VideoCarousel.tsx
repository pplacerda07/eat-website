'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const videos = [
    { src: '/v3.mp4', label: 'Reel' },
    { src: '/video 1 version 2.mp4', label: 'Welcome' },
    { src: '/video 2 (Version 2).mp4', label: 'Service' },
    { src: '/video 2.mp4', label: 'Reel' },
    { src: '/video 3.mp4', label: 'Reel' },
];

/* Desktop fan — percentage-based instead of fixed px */
const fanDesktop = [
    { x: '-17vw', rotate: -14, scale: 0.62, y: 60, zIndex: 10, opacity: 0.85 },
    { x: '-9vw', rotate: -7, scale: 0.8, y: 25, zIndex: 20, opacity: 0.92 },
    { x: '0vw', rotate: 0, scale: 1, y: 0, zIndex: 30, opacity: 1 },
    { x: '9vw', rotate: 7, scale: 0.8, y: 25, zIndex: 20, opacity: 0.92 },
    { x: '17vw', rotate: 14, scale: 0.62, y: 60, zIndex: 10, opacity: 0.85 },
];

/* Mobile — only show center + immediate neighbours, tighter */
const fanMobile = [
    { x: '-30vw', rotate: -10, scale: 0.65, y: 30, zIndex: 10, opacity: 0.7 },
    { x: '-15vw', rotate: -5, scale: 0.82, y: 12, zIndex: 20, opacity: 0.85 },
    { x: '0vw', rotate: 0, scale: 1, y: 0, zIndex: 30, opacity: 1 },
    { x: '15vw', rotate: 5, scale: 0.82, y: 12, zIndex: 20, opacity: 0.85 },
    { x: '30vw', rotate: 10, scale: 0.65, y: 30, zIndex: 10, opacity: 0.7 },
];

const stats = [
    { value: '650M+', label: 'impressions generated' },
    { value: '75K', label: 'avg local views per video' },
    { value: '140K+', label: 'local followers' },
    { value: '2.4×', label: 'increase in sales from one video' },
];

export default function VideoCarousel() {
    const [current, setCurrent] = useState(2);
    const [playing, setPlaying] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
    const dragStartX = useRef<number>(0);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const fanConfig = isMobile ? fanMobile : fanDesktop;

    const goTo = (index: number) => {
        const total = videos.length;
        const newIndex = ((index % total) + total) % total;
        if (playing !== null && videoRefs.current[playing]) {
            videoRefs.current[playing]!.pause();
            setPlaying(null);
        }
        setCurrent(newIndex);
    };

    const togglePlay = (index: number) => {
        if (index !== current) {
            goTo(index);
            return;
        }
        const vid = videoRefs.current[index];
        if (!vid) return;
        if (playing === index) {
            vid.pause();
            setPlaying(null);
        } else {
            vid.play();
            setPlaying(index);
        }
    };

    const cardWidth = isMobile ? 'clamp(160px, 45vw, 220px)' : '240px';

    return (
        <section
            id="work"
            className="w-full relative pt-0 pb-10 md:pb-20 overflow-hidden"
            style={{ backgroundColor: '#fafafa' }}
        >
            <div className="relative flex justify-center items-end h-[100vw] sm:h-[80vw] md:h-[520px] lg:h-[580px] select-none">

                {/* Title — left side, hidden on small mobile */}
                <div
                    className="absolute left-4 md:left-16 z-[5] pointer-events-none hidden sm:block"
                    style={{ bottom: '50%' }}
                >
                    <h2 className="font-serif font-bold text-[8vw] sm:text-[7vw] md:text-[5vw] leading-[1.05] tracking-tight text-black/80 text-left">
                        Results over<br />words.
                    </h2>
                </div>

                {/* Stats — right side, hidden on mobile */}
                <div
                    className="absolute z-[5] pointer-events-none hidden lg:flex flex-col justify-center"
                    style={{ top: '28%', bottom: '10%', right: '11%' }}
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col py-3 border-t border-black/[0.07] last:border-b">
                            <span
                                className="font-serif leading-none"
                                style={{ color: '#00642E', fontSize: 'clamp(20px, 1.9vw, 28px)', fontWeight: 600 }}
                            >
                                {stat.value}
                            </span>
                            <span
                                className="uppercase tracking-widest text-black/30 mt-1 leading-tight"
                                style={{ fontSize: '8.5px', maxWidth: '115px' }}
                            >
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Carousel */}
                <div
                    className="absolute inset-0 z-[10] flex justify-center items-end touch-pan-y"
                    onPointerDown={(e) => { dragStartX.current = e.clientX; }}
                    onPointerUp={(e) => {
                        const delta = dragStartX.current - e.clientX;
                        if (delta > 40) goTo(current + 1);
                        else if (delta < -40) goTo(current - 1);
                    }}
                >
                    {videos.map((video, i) => {
                        const total = videos.length;
                        let offset = i - current;
                        if (offset > total / 2) offset -= total;
                        if (offset < -total / 2) offset += total;

                        if (Math.abs(offset) > 2) return null;

                        const configIndex = offset + 2;
                        const config = fanConfig[configIndex];
                        const isCenter = offset === 0;

                        return (
                            <motion.div
                                key={i}
                                className="absolute cursor-pointer"
                                animate={{
                                    x: config.x,
                                    y: config.y,
                                    scale: config.scale,
                                    rotate: config.rotate,
                                    opacity: config.opacity,
                                    zIndex: config.zIndex,
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.8 }}
                                onClick={() => togglePlay(i)}
                                style={{
                                    transformOrigin: 'center bottom',
                                    willChange: 'transform',
                                }}
                            >
                                <div
                                    className="relative rounded-2xl overflow-hidden bg-black"
                                    style={{
                                        width: cardWidth,
                                        aspectRatio: '9/16',
                                        boxShadow: isCenter
                                            ? '0 20px 60px -12px rgba(0,0,0,0.35)'
                                            : '0 10px 30px -8px rgba(0,0,0,0.2)',
                                    }}
                                >
                                    <video
                                        ref={(el) => { videoRefs.current[i] = el; }}
                                        src={video.src}
                                        className="w-full h-full object-cover"
                                        loop
                                        playsInline
                                        preload="metadata"
                                        autoPlay
                                        muted
                                    />

                                    {isCenter && (
                                        <div
                                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing === i ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                                                }`}
                                        >
                                            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/40">
                                                {playing === i
                                                    ? <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z" /></svg>
                                                    : <svg className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                                }
                                            </div>
                                        </div>
                                    )}

                                    <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 text-[8px] md:text-[9px] text-white/60 uppercase tracking-widest">
                                        {video.label}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile stats — shown below carousel on small screens */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 px-6 mt-16 lg:hidden">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className="flex flex-col py-4 border-t border-black/[0.07]"
                    >
                        <span className="font-serif text-xl font-semibold" style={{ color: '#00642E' }}>
                            {stat.value}
                        </span>
                        <span className="text-[11px] uppercase tracking-widest text-black/40 mt-1 leading-tight">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Dots */}
            <div className="relative z-[10] flex justify-center gap-2 md:gap-2.5 mt-5 md:mt-6">
                {videos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`rounded-full transition-all duration-300 ${i === current ? 'w-5 h-1.5 md:h-2 bg-black' : 'w-1.5 h-1.5 md:w-2 md:h-2 bg-black/25 hover:bg-black/40'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}