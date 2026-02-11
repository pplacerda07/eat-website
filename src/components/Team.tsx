'use client';

import Section from './Section';
import content from '../data/content.json';

export default function Team() {
    return (
        <Section id="team" className="bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif text-accent mb-12">Our Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {content.team.map((member, index) => (
                        <div key={index} className="flex flex-col gap-4 group">
                            <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                                <div className="w-full h-full bg-gray-300 group-hover:bg-gray-400 transition-colors duration-500" />
                                {/* Image placeholder */}
                            </div>
                            <div>
                                <h3 className="text-xl font-serif text-black">{member.name}</h3>
                                <p className="text-sm text-accent uppercase tracking-wider">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
