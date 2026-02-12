
import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
    const [visible, setVisible] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // Start fade out after 2s
        const timer = setTimeout(() => {
            setFade(true);
        }, 2000);

        // Remove from DOM after transition (2s + 0.5s transition)
        const removeTimer = setTimeout(() => {
            setVisible(false);
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ${fade ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="relative flex flex-col items-center justify-center">
                {/* Spinner Container */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                    {/* Rotating Border */}
                    <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-brand-blue rounded-full border-t-transparent animate-spin"></div>

                    {/* Logo in Center */}
                    <img src="/Save-My-LA-logo.png" alt="Save My Louisiana" className="w-24 h-auto object-contain" />
                </div>

                {/* Urgent Message */}
                <div className="mt-8 text-center space-y-2 animate-pulse">
                    <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                        Defending Louisiana's Future
                    </p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">
                        Loading...
                    </p>
                </div>
            </div>
        </div>
    );
};
