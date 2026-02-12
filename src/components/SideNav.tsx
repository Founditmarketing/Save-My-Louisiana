import React, { useEffect, useState } from 'react';
import { SectionData } from '../types';
import { AlertTriangle, Briefcase, Leaf, Sun, Handshake, Map, Heart } from 'lucide-react';

interface Props {
  sections: SectionData[];
  activeId: string;
}

export const SideNav: React.FC<Props> = ({ sections, activeId }) => {
  const [visibleLabelId, setVisibleLabelId] = useState<string | null>(null);

  // Effect to show label when active section changes, then hide after 2 seconds
  useEffect(() => {
    if (activeId) {
      setVisibleLabelId(activeId);
      const timer = setTimeout(() => {
        setVisibleLabelId(null);
      }, 2000); // 2 second timer
      return () => clearTimeout(timer);
    }
  }, [activeId]);

  const getIcon = (id: string) => {
    switch (id) {
      case 'problem': return <AlertTriangle size={14} />;
      case 'enemy': return <Briefcase size={14} />;
      case 'risk': return <Leaf size={14} />; // Changed to Leaf as per request (what hope icon likely was before Sun)
      case 'hope': return <Sun size={14} />;
      case 'help': return <Handshake size={14} />;
      default: return <Map size={14} />;
    }
  };

  return (
    // Changed from 'hidden lg:flex' to 'flex' to enable on mobile. 
    // Adjusted right spacing: right-2 for mobile, right-6 for desktop.
    <div className="hidden md:flex fixed right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-4 md:gap-6 items-end pointer-events-none">
      <div className="pointer-events-auto flex flex-col gap-4 md:gap-6 items-end">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          // Show if explicitly hovered (via group-hover in CSS) OR if the timer is active for this ID
          const isTimerVisible = visibleLabelId === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group flex items-center gap-4 relative"
              aria-label={`Scroll to ${section.menuLabel}`}
            >
              {/* Label - Visibility controlled by Timer OR Hover. Hidden on very small screens to prevent overlap. */}
              <span className={`hidden sm:block absolute right-12 text-[10px] font-bold uppercase tracking-widest bg-brand-dark/40 backdrop-blur-md text-white px-3 py-1.5 rounded shadow-lg transition-all duration-500 whitespace-nowrap border border-white/10 ${isTimerVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                }`}>
                {section.menuLabel}
              </span>

              {/* Button Container */}
              <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
                {/* Active Ring Effect */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full border-2 border-brand-red animate-ping opacity-20"></div>
                )}

                {/* Button Itself */}
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 border-2 ${isActive
                    ? 'bg-brand-red border-brand-red text-white scale-110'
                    : 'bg-white/90 backdrop-blur border-gray-200 text-gray-400 group-hover:border-brand-blue group-hover:text-brand-blue'
                  }`}>
                  {getIcon(section.id)}
                </div>
              </div>
            </a>
          );
        })}

        {/* Separator */}
        <div className="h-6 md:h-8 w-[1px] bg-gray-300 mr-[15px] md:mr-[19px] my-1"></div>

        {/* Donate Button - Simplified for mobile */}
        <a href="#help" className="group flex items-center gap-4 relative">
          <span className="hidden sm:block absolute right-12 text-[10px] font-bold uppercase tracking-widest bg-brand-blue/60 backdrop-blur-md text-white px-3 py-1.5 rounded shadow-lg opacity-0 translate-x-4 transition-all duration-300 delay-200 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
            Donate
          </span>
          <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-blue flex items-center justify-center text-white shadow-lg border-2 border-white transition-transform duration-300 group-hover:scale-110">
              <Heart size={14} className="md:w-4 md:h-4" fill="white" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};