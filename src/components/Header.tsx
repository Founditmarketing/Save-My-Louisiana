import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Youtube } from 'lucide-react';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const [threatsOpen, setThreatsOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const homeLinks = [
    { name: 'About Us', href: '/mission' },
    { name: 'Our Mission', href: '/mission' },
  ];

  const homeSubLinks: { parent: string; items: { name: string; href: string; external?: boolean }[] }[] = [];

  const threatLinks = [
    { name: 'Property Rights', href: '/property-rights' },
    { name: 'Water & Aquifers', href: '/water-in-crosshairs' },
    { name: 'Environmental Danger', href: '/environmental-dangers' },
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
      <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md py-2 transition-all duration-300 shadow-md">
        <div className="w-full px-4 xl:px-6 flex items-center justify-between h-14 gap-4">

          {/* Left: Logo Area */}
          <div className="flex items-center gap-3 z-10 shrink-0">
            <Link to="/" className="flex items-center gap-2 md:gap-3 font-heading font-semibold text-lg md:text-xl tracking-tighter text-gray-900 uppercase leading-[0.85]">
              <img src="/Save-My-LA-logo.png" alt="Logo" className="w-10 h-10 md:w-16 md:h-16 object-contain" />
              <span className="hidden sm:inline">Save My<br /><span className="text-brand-blue">Louisiana</span></span>
              <span className="sm:hidden text-sm">Save My<br /><span className="text-brand-blue">Louisiana</span></span>
            </Link>
          </div>

          {/* Center: Desktop Nav — 6 items */}
          <nav className="hidden xl:flex flex-1 justify-center items-center gap-2 2xl:gap-4 whitespace-nowrap">

            {/* Home Dropdown */}
            <div className="relative group">
              <Link to="/" className="text-[11px] 2xl:text-[12px] font-bold tracking-[0.05em] uppercase text-gray-900 hover:text-brand-blue transition-colors relative py-1 flex items-center gap-1 whitespace-nowrap">
                Home <ChevronDown size={14} />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-gray-100 z-50">
                {homeLinks.map((link) => (
                  <React.Fragment key={link.name}>
                    <Link
                      to={link.href}
                      className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-blue transition-colors border-b border-gray-50 last:border-0"
                    >
                      {link.name}
                    </Link>
                    {/* Sub-items for "What the Legislature has done" */}
                    {homeSubLinks.filter(s => s.parent === link.name).map(sub => (
                      sub.items.map(item => (
                        item.external ? (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block pl-8 pr-4 py-2 text-xs text-gray-500 hover:bg-gray-50 hover:text-brand-blue transition-colors border-b border-gray-50"
                          >
                            ↳ {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block pl-8 pr-4 py-2 text-xs text-gray-500 hover:bg-gray-50 hover:text-brand-blue transition-colors border-b border-gray-50"
                          >
                            ↳ {item.name}
                          </Link>
                        )
                      ))
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* The Threats Dropdown */}
            <div className="relative group">
              <button className="text-[11px] 2xl:text-[12px] font-bold tracking-[0.05em] uppercase text-gray-900 hover:text-brand-blue transition-colors relative py-1 flex items-center gap-1 whitespace-nowrap">
                The Threats <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-gray-100 z-50">
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

            <Link to="/follow-the-money" className="text-[11px] 2xl:text-[12px] font-bold tracking-[0.05em] uppercase text-gray-900 hover:text-brand-blue transition-colors relative group py-1 whitespace-nowrap">Follow The Money</Link>
            <Link to="/documentation" className="text-[11px] 2xl:text-[12px] font-bold tracking-[0.05em] uppercase text-gray-900 hover:text-brand-blue transition-colors relative group py-1 whitespace-nowrap">Document Reports</Link>
            <Link to="/contact" className="text-[11px] 2xl:text-[12px] font-bold tracking-[0.05em] uppercase text-brand-red hover:text-red-700 font-bold transition-colors relative group py-1 whitespace-nowrap">Take Action</Link>
            <Link to="/calendar" className="text-[11px] 2xl:text-[12px] font-bold tracking-[0.05em] uppercase text-gray-900 hover:text-brand-blue transition-colors relative group py-1 whitespace-nowrap">Calendar</Link>
          </nav>

          {/* Right: Actions + Social Icons */}
          <div className="flex items-center gap-2 md:gap-3 z-10 shrink-0">
            {/* Social Media Icons — Desktop */}
            <div className="hidden xl:flex items-center gap-2">
              <a href="https://www.facebook.com/savemylouisiana/photos" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-brand-blue hover:text-white transition-all" title="Facebook">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://x.com/savemylouisiana" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all" title="X (Twitter)">
                <span className="sr-only">X</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@SAVEMYLOUISIANA-p4l" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#FF0000] hover:text-white transition-all" title="YouTube">
                <span className="sr-only">YouTube</span>
                <Youtube size={16} />
              </a>
            </div>

            <Link to="/donate" className="bg-brand-blue hover:bg-blue-800 text-white px-4 md:px-6 py-2 rounded-full font-medium transition-all uppercase text-[9px] md:text-[10px] tracking-widest shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hidden sm:block animate-pulse-border">
              Donate
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors group xl:hidden"
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

              {/* Home Dropdown (Mobile) */}
              <div className="border-b border-gray-100 pb-4">
                <button onClick={() => setHomeOpen(!homeOpen)} className="flex items-center justify-between w-full text-2xl font-heading font-light text-gray-900">
                  Home <ChevronDown size={20} className={`transform transition-transform ${homeOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`mt-4 space-y-3 pl-4 border-l-2 border-gray-100 transition-all duration-300 ${homeOpen ? 'block' : 'hidden'}`}>
                  {homeLinks.map((link) => (
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

              {/* The Threats Dropdown (Mobile) */}
              <div className="border-b border-gray-100 pb-4">
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

              <Link to="/follow-the-money" onClick={() => setMenuOpen(false)} className="text-2xl font-heading font-light text-gray-900 hover:text-brand-blue transition-colors">Follow The Money</Link>
              <Link to="/documentation" onClick={() => setMenuOpen(false)} className="text-2xl font-heading font-light text-gray-900 hover:text-brand-blue transition-colors">Document Reports</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-2xl font-heading font-light text-gray-900 hover:text-brand-blue transition-colors">Take Action</Link>
              <Link to="/calendar" onClick={() => setMenuOpen(false)} className="text-2xl font-heading font-light text-gray-900 hover:text-brand-blue transition-colors">Calendar</Link>
            </nav>

            {/* Social Media Links — Mobile */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-widest">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/savemylouisiana/photos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://x.com/savemylouisiana" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all shadow-sm" title="X">
                  <span className="sr-only">X</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@SAVEMYLOUISIANA-p4l" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#FF0000] hover:text-white transition-all shadow-sm" title="YouTube">
                  <span className="sr-only">YouTube</span>
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            <div className="mt-auto space-y-4 text-sm text-gray-500">
              <Link to="/donate" onClick={() => setMenuOpen(false)} className="block w-full bg-brand-blue text-white py-4 rounded-full font-bold text-center uppercase tracking-wider shadow-lg hover:bg-blue-800 transition-colors">
                Donate Now
              </Link>
              <p className="pt-4">
                info@savemylouisiana.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};