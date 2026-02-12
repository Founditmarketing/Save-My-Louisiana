import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [threatsOpen, setThreatsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const threatLinks = [
    { name: 'Water & Aquifers', href: '/water-in-crosshairs' },
    { name: 'Environmental Dangers', href: '/environmental-dangers' },
    { name: 'Wildlife & Wetlands', href: '/wildlife-threats' },
    { name: 'Oversight Gaps', href: '/oversight-gaps' },
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
      `}</style>

      {/* Top Bar - Scrolling Marquee */}
      <div className="flex bg-brand-red text-white text-[10px] font-medium py-2 overflow-hidden z-50 relative border-b border-white/10">
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

      {/* Main Header */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md py-2 transition-all duration-300">
        <div className="w-full pl-[10px] pr-[10px] lg:pr-8 relative flex items-center justify-between h-14">

          {/* Left: Logo Area */}
          <div className="flex items-center gap-3 z-10 shrink-0">
            <Link to="/" className="flex items-center gap-3 font-heading font-semibold text-xl md:text-xl tracking-tighter text-gray-900 uppercase leading-[0.85]">
              <img src="/Save-My-LA-logo.png" alt="Logo" className="w-10 h-10 md:w-16 md:h-16 object-contain" />
              <span>Save My<br /><span className="text-brand-blue">Louisiana</span></span>
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            <Link to="/" className="text-sm font-medium tracking-[0.1em] uppercase text-gray-600 hover:text-brand-blue transition-colors relative group py-1">Home</Link>
            <Link to="/mission" className="text-sm font-medium tracking-[0.1em] uppercase text-gray-600 hover:text-brand-blue transition-colors relative group py-1">Our Mission</Link>

            {/* Dropdown for Threats */}
            <div className="relative group">
              <button className="text-sm font-medium tracking-[0.1em] uppercase text-gray-600 hover:text-brand-blue transition-colors relative py-1 flex items-center gap-1">
                The Threats <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-gray-100">
                {threatLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-blue transition-colors border-b border-gray-50 last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <a href="https://www.youtube.com/@SAVEMYLOUISIANA-p4l" target="_blank" rel="noopener noreferrer" className="text-sm font-medium tracking-[0.1em] uppercase text-gray-600 hover:text-brand-blue transition-colors relative group py-1">Videos</a>
            <Link to="/contact" className="text-sm font-medium tracking-[0.1em] uppercase text-gray-600 hover:text-brand-blue transition-colors relative group py-1">Contact</Link>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 z-10 shrink-0">
            <Link to="/donate" className="bg-brand-blue hover:bg-blue-800 text-white px-6 py-2 rounded-full font-medium transition-all uppercase text-[10px] tracking-widest shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hidden sm:block animate-pulse-border">
              Donate
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group lg:hidden"
              aria-label="Open Menu"
            >
              <div className="bg-gray-900 text-white p-2 rounded-full group-hover:bg-gray-700 transition-colors">
                <Menu size={18} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] transition-visibility duration-300 ${menuOpen ? 'visible' : 'invisible delay-300'}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        ></div>

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
            <nav className="flex flex-col gap-4">
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-2xl font-heading font-light text-gray-900 hover:text-brand-blue transition-colors">Home</Link>
              <Link to="/mission" onClick={() => setMenuOpen(false)} className="text-2xl font-heading font-light text-gray-900 hover:text-brand-blue transition-colors">Our Mission</Link>

              <div className="border-t border-b border-gray-100 py-4">
                <button onClick={() => setThreatsOpen(!threatsOpen)} className="flex items-center justify-between w-full text-2xl font-heading font-light text-gray-900">
                  The Threats <ChevronDown size={20} className={`transform transition-transform ${threatsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`mt-4 space-y-3 pl-4 border-l-2 border-gray-100 transition-all duration-300 ${threatsOpen ? 'block' : 'hidden'}`}>
                  {threatLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-lg text-gray-600 hover:text-brand-blue"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <a href="https://www.youtube.com/@SAVEMYLOUISIANA-p4l" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="text-2xl font-heading font-light text-gray-900 hover:text-brand-blue transition-colors">Videos</a>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-2xl font-heading font-light text-gray-900 hover:text-brand-blue transition-colors">Contact</Link>
            </nav>

            <div className="mt-auto space-y-4 text-sm text-gray-500">
              <Link to="/donate" onClick={() => setMenuOpen(false)} className="block w-full bg-brand-blue text-white py-4 rounded-full font-bold text-center uppercase tracking-wider shadow-lg hover:bg-blue-800 transition-colors">
                Donate Now
              </Link>
              <p className="pt-4">
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