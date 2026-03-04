'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';

function AnimatedCounter({ value, suffix = '', isFloat = false }: { value: number, suffix?: string, isFloat?: boolean }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
    const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 15 });

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, spring, value]);

    const display = useTransform(spring, (current) => {
        if (isFloat) {
            return current.toFixed(1) + suffix;
        }
        return Math.floor(current) + suffix;
    });

    return <motion.span ref={ref}>{display}</motion.span>;
}

const videos = [
    { src: '/v3.mp4', label: 'Reel' },
    { src: '/video 1 version 2.mp4', label: 'Welcome' },
    { src: '/video 2 (Version 2).mp4', label: 'Service' },
    { src: '/video 2.mp4', label: 'Reel' },
    { src: '/video 3.mp4', label: 'Reel' },
];

/* Desktop fan — percentage-based instead of fixed px */
const fanDesktop = [
    { x: '-17vw', rotate: 0, scale: 0.62, y: 0, zIndex: 10, opacity: 0.85 },
    { x: '-9vw', rotate: 0, scale: 0.8, y: 0, zIndex: 20, opacity: 0.92 },
    { x: '0vw', rotate: 0, scale: 1, y: 0, zIndex: 30, opacity: 1 },
    { x: '9vw', rotate: 0, scale: 0.8, y: 0, zIndex: 20, opacity: 0.92 },
    { x: '17vw', rotate: 0, scale: 0.62, y: 0, zIndex: 10, opacity: 0.85 },
];

/* Mobile — only show center + immediate neighbours, tighter */
const fanMobile = [
    { x: '-30vw', rotate: 0, scale: 0.65, y: 0, zIndex: 10, opacity: 0.7 },
    { x: '-15vw', rotate: 0, scale: 0.82, y: 0, zIndex: 20, opacity: 0.85 },
    { x: '0vw', rotate: 0, scale: 1, y: 0, zIndex: 30, opacity: 1 },
    { x: '15vw', rotate: 0, scale: 0.82, y: 0, zIndex: 20, opacity: 0.85 },
    { x: '30vw', rotate: 0, scale: 0.65, y: 0, zIndex: 10, opacity: 0.7 },
];

const stats = [
    { value: 650, suffix: 'M+', label: 'impressions generated' },
    { value: 75, suffix: 'K', label: 'avg local views per video' },
    { value: 140, suffix: 'K+', label: 'local followers' },
    { value: 2.4, suffix: '×', label: 'increase in sales from one video', isFloat: true },
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

    // Auto-rotate carousel every 4 seconds
    const autoRotate = useCallback(() => {
        goTo(current + 1);
    }, [current]);

    useEffect(() => {
        if (playing !== null) return; // Don't auto-rotate while video is playing
        const interval = setInterval(autoRotate, 4000);
        return () => clearInterval(interval);
    }, [autoRotate, playing]);

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

    const cardWidth = isMobile ? 'clamp(180px, 50vw, 260px)' : '300px';

    return (
        <section
            id="work"
            className="w-full relative pt-0 pb-10 md:pb-20 overflow-hidden"
            style={{ backgroundColor: '#fafafa' }}
        >
            <div className="relative flex justify-center items-end h-[120vw] sm:h-[90vw] md:h-[620px] lg:h-[720px] select-none">

                {/* Title — left side, static, hidden on small mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-4 md:left-16 z-[5] pointer-events-none hidden sm:block"
                    style={{ bottom: '50%' }}
                >
                    <h2 className="font-serif font-bold text-[6vw] sm:text-[5vw] md:text-[3.5vw] leading-[1.05] tracking-tighter text-black uppercase text-left">
                        <span className="underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">
                            RESULTS
                        </span>
                        {' '}OVER
                        <br />
                        WORDS.
                    </h2>
                </motion.div>

                {/* Stats — right side, hidden on mobile */}
                <div
                    className="absolute z-[5] pointer-events-none hidden lg:flex flex-col justify-center"
                    style={{ top: '28%', bottom: '10%', right: '11%' }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.15, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col py-3 border-t border-black/[0.07] last:border-b"
                        >
                            <span
                                className="font-serif leading-none"
                                style={{ color: '#00642E', fontSize: 'clamp(20px, 1.9vw, 28px)', fontWeight: 600 }}
                            >
                                <AnimatedCounter value={stat.value as number} suffix={stat.suffix} isFloat={stat.isFloat} />
                            </span>
                            <span
                                className="uppercase tracking-widest text-black/30 mt-1 leading-tight"
                                style={{ fontSize: '8.5px', maxWidth: '115px' }}
                            >
                                {stat.label}
                            </span>
                        </motion.div>
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
                                transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 1 }}
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
                        transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col py-4 border-t border-black/[0.07]"
                    >
                        <span className="font-serif text-xl font-semibold" style={{ color: '#00642E' }}>
                            <AnimatedCounter value={stat.value as number} suffix={stat.suffix} isFloat={stat.isFloat} />
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

            {/* Buttons — Our story + See all partners */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10 md:mt-14 px-5"
            >
                <Link
                    href="/#story"
                    className="inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 bg-white border-2 border-black text-black tracking-wide font-medium transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                    style={{ fontSize: '14px', borderRadius: '12px', boxShadow: '4px 4px 0px 0px #00642E' }}
                >
                    Our story
                </Link>
                <Link
                    href="/partners"
                    className="inline-flex items-center justify-center px-8 py-3.5 md:px-10 md:py-4 bg-white border-2 border-black text-black tracking-wide font-medium transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                    style={{ fontSize: '14px', borderRadius: '12px', boxShadow: '4px 4px 0px 0px #00642E' }}
                >
                    See all partners
                </Link>
            </motion.div>
        </section>
    );
}