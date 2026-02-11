'use client';

import Section from './Section';
import Image from 'next/image';

interface LogoWallProps {
    id?: string;
    title?: string;
    logos: Array<{ name: string; logo: string }>;
    variant?: 'strip' | 'grid';
}

export default function LogoWall({ id, title, logos, variant = 'grid' }: LogoWallProps) {
    return (
        <Section id={id} className={variant === 'strip' ? 'py-12 bg-white border-b border-gray-100' : 'bg-gray-50'}>
            {title && <h2 className="text-3xl md:text-4xl font-serif text-accent mb-12 max-w-7xl mx-auto">{title}</h2>}

            <div className={`max-w-7xl mx-auto ${variant === 'grid' ? 'grid grid-cols-2 md:grid-cols-4 gap-12' : 'flex flex-wrap justify-center gap-16 items-center'}`}>
                {logos.map((partner, index) => (
                    <div key={index} className="flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                        {/* Placeholder for now since we don't have real logos */}
                        <div className="h-12 w-32 bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded font-serif italic">
                            {partner.name}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
