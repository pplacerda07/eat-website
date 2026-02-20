'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const videos = [
    { src: '/v3.mp4', label: 'Reel 1' },
    { src: '/video 1 version 2.mp4', label: 'Reel 2' },
    { src: '/video 2 (Version 2).mp4', label: 'Reel 3' },
    { src: '/video 2.mp4', label: 'Reel 4' },
    { src: '/video 3.mp4', label: 'Reel 5' },
    { src: '/video 5 (text option 2) (1).mp4', label: 'Reel 6' },
];

// Rotation angles for each card position relative to the center
// Center card is straight (0), edges fan outward
const getRotation = (offset: number, total: number) => {
    const maxAngle = 12; // max degrees of tilt on the outermost cards
    const half = (total - 1) / 2;
    return ((offset - half) / half) * maxAngle;
};

// Vertical offset — cards further from center drop down slightly (arc effect)
const getVerticalOffset = (offset: number, total: number) => {
    const half = (total - 1) / 2;
    const normalized = (offset - half) / half; // -1 to 1
    return Math.abs(normalized) * 24; // px drop at edges
};

export default function VideoCarousel() {
    const [current, setCurrent] = useState(2);
    const [playing, setPlaying] = useState<number | null>(null);
    const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
    const dragStartX = useRef<number>(0);

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

    return (
        <section className="w-full bg-white pt-0 pb-12 overflow-hidden">
            {/* Header */}
            <div className="px-2 md:px-8 mb-0 flex items-end justify-between">
                <p className="text-xs font-serif uppercase tracking-[0.3em] text-black/50">Our Work</p>
                <div className="flex items-center gap-4">
                    <span className="text-xs font-serif text-black/40">{current + 1} / {videos.length}</span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => goTo(current - 1)}
                            className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black/60 hover:border-black/60 hover:text-black transition-all"
                        >←</button>
                        <button
                            onClick={() => goTo(current + 1)}
                            className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black/60 hover:border-black/60 hover:text-black transition-all"
                        >→</button>
                    </div>
                </div>
            </div>

            {/* Fan stage — all cards visible, spread horizontally */}
            <div
                className="relative flex justify-center items-end h-[90vw] md:h-[640px] select-none"
                onPointerDown={(e) => { dragStartX.current = e.clientX; }}
                onPointerUp={(e) => {
                    const delta = dragStartX.current - e.clientX;
                    if (delta > 50) goTo(current + 1);
                    else if (delta < -50) goTo(current - 1);
                }}
            >
                {videos.map((video, i) => {
                    const total = videos.length;
                    // Compute position offset relative to `current`, wrapping circularly
                    let offset = i - current;
                    if (offset > total / 2) offset -= total;
                    if (offset < -total / 2) offset += total;

                    const absOffset = Math.abs(offset);

                    // Only show cards within 2 positions of center (left-2, left-1, center, right+1, right+2)
                    if (absOffset > 2) return null;

                    // Visual position in the spread (0 = leftmost visible, 4 = rightmost visible)
                    const spreadPos = offset + 2; // maps -2..2 → 0..4
                    const spreadTotal = 5;

                    const rotate = getRotation(spreadPos, spreadTotal);
                    const dropY = getVerticalOffset(spreadPos, spreadTotal);
                    const isCenter = offset === 0;

                    // Scale: center is biggest, edges are smallest
                    const scale = isCenter ? 1 : absOffset === 1 ? 0.90 : 0.80;
                    const opacity = isCenter ? 1 : absOffset === 1 ? 0.75 : 0.50;
                    const zIndex = isCenter ? 30 : absOffset === 1 ? 20 : 10;

                    // Horizontal position: spread evenly, centered
                    // Gap between card centers in px
                    const cardWidth = 120; // rough approximate for spacing calc
                    const gap = 190; // px gap between center points of adjacent cards
                    const xOffset = offset * gap;

                    return (
                        <motion.div
                            key={i}
                            className="absolute bottom-0 cursor-pointer"
                            animate={{
                                x: xOffset,
                                rotate,
                                y: dropY,
                                scale,
                                opacity,
                                zIndex,
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            onClick={() => togglePlay(i)}
                            style={{ originY: 1 }} // rotate from bottom center
                        >
                            {/* Card */}
                            <div
                                className="relative rounded-2xl overflow-hidden bg-black shadow-xl"
                                style={{
                                    width: isCenter ? '260px' : absOffset === 1 ? '220px' : '190px',
                                    aspectRatio: '9/16',
                                }}
                            >
                                <video
                                    ref={(el) => { videoRefs.current[i] = el; }}
                                    src={video.src}
                                    className="w-full h-full object-cover"
                                    loop
                                    playsInline
                                    muted={playing !== i}
                                    preload="metadata"
                                />

                                {/* Play overlay — always visible on non-playing cards */}
                                {isCenter && (
                                    <div
                                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing === i ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/40">
                                            {playing === i
                                                ? <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z" /></svg>
                                                : <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                            }
                                        </div>
                                    </div>
                                )}

                                {/* Label */}
                                <div className="absolute bottom-2 left-2 text-[9px] text-white/60 uppercase tracking-widest font-serif">
                                    {video.label}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {videos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`rounded-full transition-all duration-300 ${i === current ? 'w-4 h-1.5 bg-black' : 'w-1.5 h-1.5 bg-black/25'}`}
                    />
                ))}
            </div>
        </section>
    );
}
