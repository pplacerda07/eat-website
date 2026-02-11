import React from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({ id, className = '', children }: SectionProps) {
    return (
        <section id={id} className={`w-full py-20 px-6 md:px-12 lg:px-24 ${className}`}>
            {children}
        </section>
    );
}
