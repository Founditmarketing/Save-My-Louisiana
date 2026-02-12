
import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
    const [visible, setVisible] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // Start fade out after 1.5s
        const timer = setTimeout(() => {
            setFade(true);
        }, 1500);

        // Remove from DOM after transition (1.5s + 0.5s transition)
        const removeTimer = setTimeout(() => {
            setVisible(false);
        }, 2000);

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
            <div className="relative flex flex-col items-center">
                <img src="/Save-My-LA-logo.png" alt="Save My Louisiana Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain mb-6 animate-pulse" />
                <h1 className="font-heading font-bold text-2xl md:text-3xl tracking-tighter uppercase text-gray-900 text-center">
                    Save My <span className="text-brand-blue">Louisiana</span>
                </h1>

                <div className="mt-8 text-center space-y-2">
                    <p className="text-red-600 font-bold uppercase tracking-widest text-sm animate-pulse">
                        Urgent Message
                    </p>
                    <p className="text-gray-600 font-serif italic text-lg max-w-md mx-auto px-4">
                        "Louisiana's future is on the line. Protect our land. Protect our water."
                    </p>
                </div>

                <div className="mt-8 h-1 w-24 bg-gray-100 mx-auto rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue w-full animate-progress-indeterminate origin-left"></div>
                </div>
            </div>
        </div>
    );
};
