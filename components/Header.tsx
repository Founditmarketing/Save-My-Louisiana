import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const navLinks = [
    { name: 'The Situation', href: '#problem' },
    { name: 'Our Mission', href: '#hope' },
    { name: 'Documentation', href: '#risk' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Get Involved', href: '#help' },
  ];

  const marqueeContent = [
    "Official Advocacy for Louisiana's Future",
    "Protect Our Land. Protect Our Water. Protect Our Future.",
    "Donate Today to Support the Legal Defense Fund."
  ];

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* Pause on hover if desired, but user asked for constant smooth scroller */
        /* .animate-marquee:hover {
          animation-play-state: paused;
        } */
      `}</style>

      {/* Top Bar - Scrolling Marquee - UPDATED COLORS */}
      <div className="hidden md:flex bg-brand-blue text-white text-[10px] font-medium py-2 overflow-hidden z-50 relative border-b border-white/10">
        {/* We render the content twice to create a seamless infinite loop */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee flex gap-12 items-center shrink-0 min-w-full px-6 justify-around">
            {marqueeContent.map((text, i) => (
              <React.Fragment key={i}>
                <span className="tracking-[0.2em] uppercase">{text}</span>
                <span className="text-white/70">•</span>
              </React.Fragment>
            ))}
          </div>
          <div className="animate-marquee flex gap-12 items-center shrink-0 min-w-full px-6 justify-around">
            {marqueeContent.map((text, i) => (
              <React.Fragment key={`dup-${i}`}>
                <span className="tracking-[0.2em] uppercase">{text}</span>
                <span className="text-white/70">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header - Skinnier (py-2) */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-2 transition-all duration-300">
        <div className="max-w-[95%] mx-auto px-2 relative flex items-center justify-between h-14">

          {/* Left: Logo Area */}
          <div className="flex items-center gap-3 z-10 shrink-0">
            <a href="#" className="flex items-center gap-3 font-heading font-semibold text-xl md:text-2xl tracking-tighter text-gray-900 uppercase leading-none">
              <img src="/Save-My-LA-logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              <span>Save My<br /><span className="text-brand-blue">Louisiana</span></span>
            </a>
          </div>

          {/* Center: Desktop Nav - Absolute Positioned to be perfectly centered */}
          <nav className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-[0.1em] uppercase text-gray-600 hover:text-brand-blue transition-colors relative group py-1"
              >
                {link.name}
                {/* Hover Underline Effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right: Actions (Donate + Hamburger) */}
          <div className="flex items-center gap-4 z-10 shrink-0">
            {/* Donate Button with Pulse Border Animation */}
            <a href="#donate" className="bg-brand-blue hover:bg-blue-800 text-white px-6 py-2 rounded-full font-medium transition-all uppercase text-[10px] tracking-widest shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hidden sm:block animate-pulse-border">
              Donate
            </a>

            {/* Menu Toggle - Always Visible now as requested */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              aria-label="Open Menu"
            >
              <div className="bg-gray-900 text-white p-2 rounded-full group-hover:bg-gray-700 transition-colors">
                <Menu size={18} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Side Menu Portal */}
      {/* Using fixed position outside of header flow to avoid clipping issues */}
      <div
        className={`fixed inset-0 z-[100] transition-visibility duration-300 ${menuOpen ? 'visible' : 'invisible delay-300'}`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
            <span className="font-heading font-semibold text-lg uppercase tracking-widest">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
            >
              <X size={24} className="text-gray-500 group-hover:text-red-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-heading font-light text-gray-900 hover:text-brand-blue transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-blue" />
                </a>
              ))}
            </nav>

            <div className="h-px bg-gray-100"></div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase text-gray-400 tracking-widest">Get Involved</h4>
              <div className="grid gap-4">
                <a href="#donate" onClick={() => setMenuOpen(false)} className="bg-brand-blue text-white py-4 rounded-full font-bold text-center uppercase tracking-wider shadow-lg hover:bg-blue-800 transition-colors">
                  Donate Now
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="border-2 border-gray-200 text-gray-900 py-4 rounded-full font-bold text-center uppercase tracking-wider hover:border-gray-900 transition-colors">
                  Volunteer
                </a>
              </div>
            </div>

            <div className="mt-auto space-y-4 text-sm text-gray-500">
              <p>
                318.542.6856<br />
                info@savemylouisiana.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};