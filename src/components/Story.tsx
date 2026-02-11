'use client';

import Section from './Section';
import content from '../data/content.json';

export default function Story() {
    return (
        <Section id="story" className="bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif text-accent mb-12">Our Story</h2>

                <div className="prose prose-lg text-gray-700 font-serif leading-relaxed space-y-6 mb-24">
                    {content.story.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* We Hear You Block */}
                <div className="bg-gray-50 p-12 md:p-16 border-l-4 border-accent">
                    <h3 className="text-2xl font-serif text-accent mb-8">{content.weHearYou.title}</h3>
                    <div className="space-y-4">
                        {content.weHearYou.lines.map((line, index) => (
                            <p key={index} className="text-xl font-light text-black italic">
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
