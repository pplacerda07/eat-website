'use client';

import Section from './Section';
import content from '../data/content.json';

export default function Stats() {
    return (
        <Section id="impact" className="bg-accent text-white py-32">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif mb-20 opacity-90 border-b border-white/20 pb-6 inline-block">Our Impact</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {content.stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight">
                                {stat.value}
                            </span>
                            <span className="text-sm uppercase tracking-widest opacity-80 font-medium">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
