import React, { useState, useEffect } from 'react';

export const Calendar: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const calendarMode = isMobile ? 'AGENDA' : 'MONTH';

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            {/* Header */}
            <section className="bg-gray-900 text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        Events Calendar
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-2xl mx-auto">
                        Stay updated with our upcoming town halls, community meetings, and legislative sessions.
                    </p>
                </div>
            </section>

            {/* Calendar Content */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="bg-white p-4 md:p-12 rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-100 shadow-inner bg-gray-50 h-[600px] md:h-auto md:aspect-video">
                        <iframe
                            src={`https://calendar.google.com/calendar/embed?src=532b4f922a19c1f7006401dfcae37f1c81d08120edf0c1c1ee71baa1c9efd262%40group.calendar.google.com&ctz=America%2FChicago&mode=${calendarMode}`}
                            style={{ border: 0 }}
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            scrolling="no"
                            title="Events Calendar"
                        ></iframe>
                    </div>
                </div>

                <div className="mt-12 text-center space-y-6">
                    <p className="text-gray-600 font-serif italic max-w-2xl mx-auto">
                        Our coalition is active across 15 parishes. Join us at these events to make your voice heard and protect Louisiana's future.
                    </p>
                    <div className="pt-8">
                        <a
                            href="https://calendar.google.com/calendar/u/0/r?cid=532b4f922a19c1f7006401dfcae37f1c81d08120edf0c1c1ee71baa1c9efd262@group.calendar.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-blue hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1"
                        >
                            Add to My Calendar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
