'use client';

import Preloader from './Preloader';
import RouteLoader from './RouteLoader';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Preloader />
            <RouteLoader />
            {children}
        </>
    );
}
