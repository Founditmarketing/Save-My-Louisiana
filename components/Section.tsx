import React, { useEffect, useRef, useState } from 'react';
import { Perspective, SectionData } from '../types';
import { ChevronRight, Info, Heart, Users, ArrowRight, Trees, Droplets, Clock, ZoomIn } from 'lucide-react';
import { Lightbox } from './Lightbox';

interface Props {
  data: SectionData;
  perspective: Perspective;
  index: number;
  isActive: boolean;
}

// Helper to animate numbers
const AnimatedNumber = ({ value, isActive }: { value: string, isActive: boolean }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isActive) return;

    // Check if it's purely a number (or number with suffix) to animate
    const match = value.match(/\d+/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numberValue = parseInt(match[0], 10);
    const prefix = value.substring(0, match.index);
    const suffix = value.substring((match.index || 0) + match[0].length);

    // Simple start from 0 animation
    let startTime: number | null = null;
    const duration = 1500;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      const currentNumber = Math.floor(numberValue * ease);
      setDisplayValue(`${prefix}${currentNumber}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isActive, value]);

  return <>{displayValue}</>;
};

export const Section: React.FC<Props> = ({ data, perspective, index, isActive }) => {
  const content = data[perspective];
  const isEven = index % 2 === 0;

  // Special handling for layouts
  const isHelpSection = data.id === 'help';
  const isRiskSection = data.id === 'risk';

  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEntered(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // --- UNIQUE LAYOUT FOR "YOUR HELP" SECTION ---
  if (isHelpSection) {
    return (
      <section
        id={data.id}
        ref={sectionRef}
        className={`relative py-20 md:py-32 scroll-mt-0 transition-all duration-700 ease-in-out overflow-hidden bg-brand-dark text-white opacity-100`}
      >
        {/* Background Ambient Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-[#111] to-black"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

          {/* Header */}
          <div className={`space-y-6 mb-12 transition-all duration-1000 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* 05 Counter added */}
            <div className="flex flex-col items-center gap-2 mb-2">
              <span className="font-heading font-medium text-6xl opacity-20 select-none text-brand-red">05</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight">
              {content.title}
            </h2>
            <h3 className="text-xl md:text-2xl font-serif italic text-gray-300 max-w-2xl mx-auto">
              {content.subtitle}
            </h3>
          </div>

          {/* Body Text */}
          <div className={`space-y-6 leading-relaxed text-lg font-sans text-gray-400 max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-200 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {content.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* THE 2 BIG OPTIONS (Donate vs Volunteer) */}
          <div className={`grid md:grid-cols-2 gap-6 w-full transition-all duration-1000 delay-300 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Option 1: Donate */}
            <a href="#donate" className="group relative bg-white/5 border border-white/10 hover:bg-brand-red hover:border-brand-red rounded-[2rem] p-10 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-brand-red transition-colors relative z-10">
                <Heart size={32} />
              </div>

              <h3 className="text-2xl font-bold uppercase tracking-wider mb-3 relative z-10 text-white">Make a Donation</h3>
              <p className="text-gray-400 group-hover:text-white/90 mb-8 text-sm relative z-10 leading-relaxed">
                Fund the legal defense, expert witnesses, and advocacy needed to protect our homes.
              </p>

              <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs border-b border-transparent group-hover:border-white pb-1 relative z-10">
                Give Now <ArrowRight size={14} />
              </div>
            </a>

            {/* Option 2: Volunteer */}
            <a href="#volunteer" className="group relative bg-white/5 border border-white/10 hover:bg-brand-blue hover:border-brand-blue rounded-[2rem] p-10 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center justify-center text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-brand-blue transition-colors relative z-10">
                <Users size={32} />
              </div>

              <h3 className="text-2xl font-bold uppercase tracking-wider mb-3 relative z-10 text-white">Get Involved</h3>
              <p className="text-gray-400 group-hover:text-white/90 mb-8 text-sm relative z-10 leading-relaxed">
                Join the coalition of citizens attending town halls and signing petitions.
              </p>

              <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs border-b border-transparent group-hover:border-white pb-1 relative z-10">
                Volunteer <ArrowRight size={14} />
              </div>
            </a>

          </div>
        </div>
      </section>
    );
  }

  // --- UNIQUE LAYOUT FOR "WHAT IS AT RISK" SECTION ---
  if (isRiskSection) {
    const icons = [<Trees size={32} />, <Droplets size={32} />, <Clock size={32} />];

    return (
      <section
        id={data.id}
        ref={sectionRef}
        className={`relative py-20 md:py-32 scroll-mt-0 transition-all duration-700 ease-in-out overflow-hidden bg-gray-50 opacity-100`}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-left md:text-center max-w-3xl md:mx-auto mb-20 space-y-6">
            <div className="flex items-center gap-4 mb-2 w-full md:justify-center">
              <span className="font-heading font-medium text-6xl opacity-20 select-none text-brand-red">03</span>
              <div className="h-px flex-1 bg-gradient-to-r to-transparent from-brand-red/50 md:hidden"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-gray-900">
              {content.title}
            </h2>
            <h3 className="text-xl md:text-2xl font-serif italic text-gray-600">
              {content.subtitle}
            </h3>
            <div className="h-1 w-24 bg-brand-red md:mx-auto mt-8 rounded-full"></div>

            {/* Added Description */}
            <div className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-700 leading-relaxed font-serif text-center">
              <p>
                While affecting us all, the burden falls heaviest on our working families, farmers, and future generations. <br className="hidden md:block" />
                This is a stand for <span className="font-bold text-gray-900">safety, sovereignty, and fairness.</span>
              </p>
            </div>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {content.features?.map((feature, i) => (
              <div key={i} className={`group bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-300 relative overflow-hidden border-2 border-transparent hover:border-brand-red ${feature.backgroundImage ? 'text-white' : 'hover:bg-white border-gray-200'}`}>

                {/* Optional Background Image */}
                {feature.backgroundImage && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={feature.backgroundImage}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-100" // Opacity to ensure text readability
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                )}

                <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-brand-dark group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 ${feature.backgroundImage ? 'bg-white/10 text-white backdrop-blur-sm' : ''}`}>
                  {icons[i] || <Info size={32} />}
                </div>

                <h4 className={`relative z-10 text-2xl font-heading font-bold mb-4 ${feature.backgroundImage ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h4>
                <p className={`relative z-10 leading-relaxed ${feature.backgroundImage ? 'text-white/90' : 'text-gray-600'}`}>
                  {feature.description}
                </p>

                {/* Arrow Icon on Hover */}
                <div className={`absolute bottom-8 right-8 transition-all duration-300 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ${feature.backgroundImage ? 'text-white' : 'text-brand-red'}`}>
                  <ArrowRight size={24} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Fact */}
          {content.fact && (
            <div className={`mt-20 max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border-2 border-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-1000 delay-500 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="shrink-0 text-center md:text-left">
                <span className="block text-5xl md:text-6xl font-heading font-bold text-brand-red">
                  <AnimatedNumber value={content.fact.statistic} isActive={isActive} />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{content.fact.label}</span>
              </div>
              <div className="h-px w-full md:w-px md:h-20 bg-gray-200"></div>
              <p className="text-lg text-gray-600 italic font-serif text-center md:text-left">
                "{content.fact.description}"
              </p>
            </div>
          )}
        </div>
      </section>
    );
  }

  // --- STANDARD SPLIT LAYOUT FOR OTHER SECTIONS ---
  return (
    <section
      id={data.id}
      ref={sectionRef}
      className={`relative py-20 md:py-32 scroll-mt-0 transition-all duration-700 ease-in-out overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} opacity-100`}
    >
      {/* The "Thread" - Connecting Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -z-0 hidden md:block bg-gray-200"></div>
      {/* Dot on the thread for this section */}
      <div className={`absolute left-6 md:left-1/2 top-40 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-colors duration-500 z-10 hidden md:block ${isActive ? 'border-brand-red scale-125 bg-white' : 'border-gray-300 bg-white'
        }`}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className={`relative group transition-all duration-1000 delay-200 ease-out ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {/* Decorative Offset Border */}
              <div className={`absolute top-4 left-4 right-4 bottom-4 border-2 rounded-[2.5rem] z-0 transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100'
                } border-brand-blue/20`} />

              {/* Main Media Container */}
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video bg-gray-100 h-full">
                {data.galleryImages && data.galleryImages.length > 0 ? (
                  /* Image Slider Logic */
                  (() => {
                    const [currentSlide, setCurrentSlide] = useState(0);

                    useEffect(() => {
                      if (!isActive) return;
                      const timer = setInterval(() => {
                        setCurrentSlide((prev) => (prev + 1) % (data.galleryImages?.length || 1));
                      }, 4000); // Change slide every 4 seconds
                      return () => clearInterval(timer);
                    }, [isActive]);

                    return (
                      <div className="w-full h-full relative">
                        {data.galleryImages.map((img, idx) => (
                          <div
                            key={idx}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-zoom-in ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            onClick={() => openLightbox(idx)}
                          >
                            <img
                              src={img}
                              alt={`${data.baseTitle} gallery slide ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {/* Zoom Hint Overlay */}
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                              <ZoomIn className="text-white drop-shadow-lg" size={48} />
                            </div>
                            {/* Gradient Overlay for text readability if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                          </div>
                        ))}

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                          {data.galleryImages.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentSlide(idx)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })()
                ) : data.videoUrl ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={data.videoUrl}
                    title={data.baseTitle}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={data.imageSrc}
                      alt={data.imageAlt}
                      className="w-full h-full object-cover transform transition-transform duration-[2s] ease-in-out hover:scale-110"
                    />

                    {/* Badge Overlay - Only show for images */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">{data.baseTitle}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 ${hasEntered ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-10' : '-translate-x-10'}`}`}>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-heading font-medium text-6xl opacity-20 select-none -ml-1 text-brand-red">0{index + 1}</span>
                <div className="h-px flex-1 bg-gradient-to-r to-transparent from-brand-red/50"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-none tracking-tight text-gray-900">
                {content.title}
              </h2>

              <h3 className="text-xl font-serif italic text-brand-blue">
                {content.subtitle}
              </h3>
            </div>

            <div className="space-y-6 leading-relaxed text-lg font-sans border-l-2 pl-6 text-gray-600 border-gray-100">
              {content.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Interesting Fact Box - UPDATED */}
            {content.fact && (
              <div className="mt-8 group relative p-8 rounded-2xl shadow-sm border-2 border-gray-100 transition-all duration-500 overflow-hidden transform hover:-translate-y-1 bg-white hover:border-brand-red/30">
                {/* Removed Sliding Accent Background and Persistent Accent Line (the left border effect) */}

                <div className="relative flex items-start gap-6 z-10">
                  {/* Icon Container */}
                  <div className="shrink-0 p-3 rounded-full border transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:rotate-12 bg-gray-50 text-brand-red border-gray-100 group-hover:bg-brand-red group-hover:text-white">
                    <Info size={24} strokeWidth={2.5} />
                  </div>

                  <div className="space-y-3 w-full">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 text-gray-400 group-hover:text-brand-red">
                        Did you know?
                      </span>
                      <div className="flex flex-wrap items-baseline gap-3 mt-1">
                        <span className="text-4xl font-heading font-bold leading-none transition-colors text-gray-900 group-hover:text-brand-dark">
                          <AnimatedNumber value={content.fact.statistic} isActive={isActive} />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b-2 border-transparent group-hover:border-brand-red group-hover:text-brand-red transition-all duration-500 pb-0.5">
                          {content.fact.label}
                        </span>
                      </div>
                    </div>
                    <p className="italic leading-relaxed text-sm border-l-2 pl-4 transition-colors duration-500 text-gray-600 border-gray-200 group-hover:border-brand-red/40">
                      "{content.fact.description}"
                    </p>
                  </div>
                </div>
              </div>
            )}

            {content.bulletPoints && (
              <div className="pt-4">
                <ul className="space-y-3">
                  {content.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-brand-blue" />
                      <span className="font-medium text-sm text-brand-dark">{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.cta && (
              <div className="pt-6">
                {content.ctaLink ? (
                  <a href={content.ctaLink} className="group inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs border-b-2 border-transparent hover:border-brand-red pb-1 transition-all text-brand-dark">
                    {content.cta}
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-brand-red" />
                  </a>
                ) : (
                  <button className="group inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs border-b-2 border-transparent hover:border-brand-red pb-1 transition-all text-brand-dark">
                    {content.cta}
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-brand-red" />
                  </button>
                )}
              </div>
            )}
          </div>

        </div>
      </div>


      {/* Lightbox Component - Rendered at section level but used only when active */}
      {
        data.galleryImages && (
          <Lightbox
            images={data.galleryImages}
            initialIndex={lightboxIndex}
            isOpen={isLightboxOpen}
            onClose={() => setIsLightboxOpen(false)}
          />
        )
      }
    </section >
  );
};