
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { ContactFooter } from './components/ContactFooter';
import { LoadingScreen } from './components/LoadingScreen';

export const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LoadingScreen />
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            {/* Floating Donate Button (Mobile Only) */}
            <a href="/donate" className="fixed bottom-4 right-4 z-50 bg-brand-blue text-white font-medium uppercase tracking-widest text-[10px] px-6 py-3 rounded-full shadow-2xl lg:hidden hover:bg-blue-800 transition-colors animate-pulse-border transform hover:-translate-y-0.5">
                Donate
            </a>
            <ContactFooter />
        </div>
    );
};
