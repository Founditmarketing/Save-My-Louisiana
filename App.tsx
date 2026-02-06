import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { PerspectiveSwitch } from './components/PerspectiveSwitch';
import { Section } from './components/Section';
import { ContactFooter } from './components/ContactFooter';
import { SideNav } from './components/SideNav';
import { SECTIONS } from './constants';
import { Perspective } from './types';
import { ArrowRight, Play, Scale, ArrowDown } from 'lucide-react';

// --- Loading Screen Component ---
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start progress animation
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);

    // Trigger exit animation after reading time + progress
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      onComplete(); // Notify parent that reveal has started
    }, 3500); // 3.5s total load time for impact

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-visibility duration-0 delay-[1500ms] ${isExiting ? 'invisible pointer-events-none' : 'visible'}`}>

      {/* Left Door Panel - White Legal Paper Theme */}
      <div className={`absolute left-0 top-0 w-1/2 h-full bg-white z-20 transition-transform duration-[1.8s] ease-[cubic-bezier(0.87,0,0.13,1)] border-r border-gray-100 ${isExiting ? '-translate-x-full' : 'translate-x-0'}`}>
      </div>

      {/* Right Door Panel - White Legal Paper Theme */}
      <div className={`absolute right-0 top-0 w-1/2 h-full bg-white z-20 transition-transform duration-[1.8s] ease-[cubic-bezier(0.87,0,0.13,1)] border-l border-gray-100 ${isExiting ? 'translate-x-full' : 'translate-x-0'}`}>
      </div>

      {/* Center Content (Z-30 to sit on top of doors) */}
      <div className={`relative z-30 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 ${isExiting ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100'}`}>

        {/* Legal Seal / Icon Area */}
        <div className="mb-10 relative flex flex-col items-center">
          <div className="w-24 h-24 mb-6 relative">
            <img src="/Save-My-LA-logo.png" alt="Save My Louisiana Logo" className="w-full h-full object-contain" />
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-gray-900 uppercase tracking-tight leading-none whitespace-nowrap">
              Public Notice
            </h2>
            <div className="h-1 w-24 bg-brand-red mx-auto"></div>
          </div>
        </div>

        <p className="text-gray-600 font-serif italic text-xl md:text-3xl max-w-2xl leading-relaxed mb-12 text-center mx-auto">
          Formal Notice: Imminent threat to property and sovereignty.
        </p>

        {/* Progress Bar Container - Refined for Legal Look */}
        <div className="w-64 md:w-80 h-0.5 bg-gray-200 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gray-900 relative"
            style={{
              width: `${progress}%`,
              transition: 'width 3.4s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
          </div>
        </div>

        <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-serif">
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

// Globe Component - Rotating with pulsing rings
const Globe = () => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center perspective-[1000px]">
      {/* Logo Container */}
      <div className="w-full h-full rounded-full bg-white shadow-[0_0_50px_rgba(25,118,210,0.2)] flex items-center justify-center relative z-10 p-2">
        <img
          src="/Save-My-LA-logo.png"
          alt="Save My Louisiana Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Outer Rings - Pulsing Effect */}
      <div className="absolute inset-[-15px] border border-brand-blue/30 rounded-full animate-ring-pulse z-0"></div>
      <div className="absolute inset-[-30px] border border-brand-blue/10 rounded-full animate-ring-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

// Scroll Animation Effect - Expands from contained to Full Width
const JourneyMedia = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress: 0 when element enters, 1 when it's fully centered/scrolled past
      const start = viewportHeight * 0.8;
      const end = viewportHeight * 0.2;
      const current = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

      setProgress(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic styles based on scroll progress
  const widthPercentage = 60 + (progress * 40); // Goes from 60% to 100%
  const borderRadius = 40 - (progress * 40); // Goes from 40px to 0px
  const opacityOverlay = 0.3 - (progress * 0.3); // Overlay fades out as it grows

  return (
    <div ref={containerRef} className="py-12 w-full flex justify-center items-center overflow-hidden relative z-20">
      <div
        style={{
          width: `${widthPercentage}%`,
          borderRadius: `${borderRadius}px`,
          height: '600px', // Fixed height for dramatic effect
        }}
        className="relative overflow-hidden transition-all duration-100 ease-out will-change-transform bg-black group"
      >
        <img
          src="https://picsum.photos/id/10/1920/1080"
          alt="Journey visual"
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
        />

        {/* Dark Overlay that fades as it gets bigger */}
        <div
          className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-300"
          style={{ opacity: opacityOverlay }}
        ></div>

        {/* Play Button Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 cursor-pointer group-hover:-translate-y-2 transition-transform duration-300">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 hover:bg-white/30 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <Play size={40} className="text-white ml-2 fill-white" />
            </div>
            <span className="text-white font-heading font-bold tracking-[0.2em] uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
              Watch the Film
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [perspective, setPerspective] = useState<Perspective>('environmental');
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [isRevealed, setIsRevealed] = useState(false);

  // Setup intersection observer to track active section for Focus Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
      <LoadingScreen onComplete={() => setIsRevealed(true)} />

      <Header />
      <SideNav sections={SECTIONS} activeId={activeSectionId} />

      {/* Intro / Hero Container */}
      <div className="px-4 md:px-6 pb-12 bg-white relative flex justify-center items-center min-h-[90vh]">

        {/* The "Banner" Text that sits underneath/behind the animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          {/* Reduced weight from black to bold/semibold for cleaner look */}
          <h1 className="text-6xl md:text-9xl font-heading font-bold text-gray-100 uppercase tracking-tighter text-center leading-none select-none">
            Save My<br />Louisiana
          </h1>
        </div>

        {/* Hero Section - Static now, revealed by the loading screen doors */}
        <section
          className="relative w-full min-h-[85vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center z-10 origin-center"
        >
          {/* Background Image with Slow Zoom */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem]">
            <img
              src="/herosectionpic.png"
              alt="Louisiana Bayou Landscape"
              className="w-full h-full object-cover animate-zoom-slow"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto space-y-12 px-6 mt-12 w-full">
            <div>
              {/* Two Lines - Wider Container */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] drop-shadow-2xl tracking-tight mb-8 flex flex-col items-center pb-4">
                <span className={`block transition-all duration-1000 delay-500 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Preserving Our <span className="relative inline-block px-2 -rotate-1 bg-green-900/60 text-white transform mx-1 rounded-sm shadow-sm backdrop-blur-sm">Land.</span></span>
                <span className={`block transition-all duration-1000 delay-[1200ms] ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Protecting Our <span className="relative inline-block px-2 rotate-1 bg-blue-900/60 text-white transform mx-1 rounded-sm shadow-sm backdrop-blur-sm">Water.</span></span>
                <span className={`block transition-all duration-1000 delay-[1900ms] ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Securing Our <span className="relative inline-block px-2 -rotate-1 bg-red-900/60 text-white transform mx-1 rounded-sm shadow-sm backdrop-blur-sm">Future.</span></span>
              </h1>
            </div>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row gap-5 justify-center pt-8 pb-4 transition-all duration-1000 delay-500 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a href="#donate" className="bg-brand-red hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl hover:shadow-red-500/30 transform hover:-translate-y-1">
                Join the Mission
              </a>
              <a href="#problem" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/50 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-lg transform hover:-translate-y-1">
                Watch Video
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Intro Journey Text & Media */}
      <section className="pt-24 pb-0 px-6 bg-white text-center relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 mb-20">
          <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left space-y-8">
            {/* Highlight Effect instead of underline */}
            <h2 className="text-4xl md:text-6xl font-heading font-semibold text-gray-900 leading-tight">
              Understanding <br />
              <span className="text-brand-blue bg-brand-blue/10 px-2 leading-relaxed decoration-clone italic">The Journey.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-serif leading-relaxed">
              Explore the evidence: from the industrial expansion challenging our sovereignty to the risks threatening our ecosystem. This journey maps out exactly what is at stake and how we can secure a safer future.
            </p>
          </div>

          {/* Globe Restored - Hidden on Mobile */}
          <div className="shrink-0 hidden md:flex justify-center">
            <Globe />
          </div>
        </div>

        {/* Scroll Indicator - Added as requested */}
        <div className="flex flex-col items-center justify-center gap-2 mb-12 animate-bounce">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Examine the Evidence</span>
          <ArrowDown className="text-gray-400" size={16} />
        </div>

        {/* Expanding Video Section */}
        <div className="-mx-6"> {/* Negative margin to allow full bleed */}
          <JourneyMedia />
        </div>
      </section>

      {/* Switch Control - Sticky */}
      {/* Removed mix-blend-multiply to ensure opacity of switch buttons */}
      <div className="sticky top-24 z-30 pointer-events-none pb-4">
        <div className="pointer-events-auto">
          <PerspectiveSwitch perspective={perspective} setPerspective={setPerspective} />
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="-mt-12 bg-white relative z-10">
        {SECTIONS.map((section, index) => (
          <Section
            key={section.id}
            data={section}
            perspective={perspective}
            index={index}
            isActive={activeSectionId === section.id}
          />
        ))}
      </main>

      <ContactFooter />
    </div>
  );
};

export default App;