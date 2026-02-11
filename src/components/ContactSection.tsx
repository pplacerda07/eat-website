'use client';

import Section from './Section';
import content from '../data/content.json';

export default function ContactSection() {
    return (
        <Section id="connect" className="bg-white py-32 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent">Let&apos;s Connect</h2>
                <p className="text-xl text-gray-600 font-light">
                    Ready to elevate your restaurant&apos;s story? We&apos;d love to hear from you.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href={content.contact.calendar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-accent text-white rounded-full text-lg hover:bg-black transition-colors duration-300"
                    >
                        Book a Meeting
                    </a>
                    <a
                        href={`mailto:${content.contact.email}`}
                        className="px-8 py-4 border border-accent text-accent rounded-full text-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                        Email Us
                    </a>
                </div>

                <div className="mt-8 text-gray-500">
                    <p className="mb-2">Or call us at</p>
                    <a href={`tel:${content.contact.phone}`} className="text-xl text-black hover:text-accent font-serif">
                        {content.contact.phone}
                    </a>
                </div>
            </div>
        </Section>
    );
}
