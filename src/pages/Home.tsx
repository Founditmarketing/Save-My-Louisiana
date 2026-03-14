import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_CONTENT, SITUATION_CONTENT } from '../constants';

const HERO_IMAGES = ['/atchafalaya-basin.jpg', '/sugar_cane_field.png', '/soccer_match.png', '/state-capital-hero.jpg'];

export const Home: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // Determine animation delay: if intro has been seen, 0s, otherwise 2.5s
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    const animationDelay = hasSeenIntro ? '0s' : '2.5s';

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000); // Change image every 6 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Section A: Hero (The Hook) */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-32">
                {/* Background Slider */}
                <div className="absolute inset-0 z-0">
                    {HERO_IMAGES.map((img, index) => (
                        <div
                            key={img}
                            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Louisiana Hero ${index + 1}`}
                                className="w-full h-full object-cover animate-zoom-slow"
                            />
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay, animationFillMode: 'forwards' }}>
                    {/* Animated Louisiana Flag */}
                    <img
                        src="/louisiana-flag.gif"
                        alt="Louisiana Flag"
                        className="w-16 md:w-24 h-auto mx-auto mb-6 opacity-90 filter drop-shadow-2xl"
                    />
                    <h1 className="text-3xl md:text-7xl font-heading font-bold leading-tight drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">
                        <span className="text-white">Protect Louisiana's Land, Water, Future</span>
                        <span className="text-brand-red"> against carbon capture and sequestration (CCS)</span>
                    </h1>
                    <div className="space-y-4">
                        <p className="text-xl md:text-2xl font-serif italic max-w-3xl mx-auto text-white font-medium leading-relaxed">
                            "Louisiana's most precious resource — its people — is under threat from Carbon Capture & Sequestration (the permanent burial of industrial waste under our land and our water, which affects our future generations)."
                        </p>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-sm md:text-base font-bold text-white uppercase tracking-widest">— Gary Musgrove</span>
                            <span className="text-[10px] md:text-xs font-semibold text-white/70 uppercase tracking-[0.2em]">President of Save My Louisiana</span>
                        </div>
                    </div>
                    <div className="pt-8 flex flex-col items-center">
                        <a href="#situation" className="inline-block bg-brand-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1 mb-12">
                            Learn The Truth
                        </a>

                        {/* Scroll Cue */}
                        <div className="animate-bounce">
                            <ChevronDown size={32} className="text-white/70" />
                            <ChevronDown size={32} className="text-white/40 -mt-4" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section B: The Situation (Intro) */}
            <section id="situation" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-center space-y-8">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 uppercase">
                            The Situation
                        </h2>
                        <div className="w-24 h-1 bg-brand-red mx-auto"></div>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-serif">
                            Across Louisiana, energy companies are planning to inject millions of tons of carbon dioxide deep underground in so-called carbon capture and storage (CCS) projects. Many of these wells sit directly above the <Link to="/water-in-crosshairs" className="font-bold text-brand-blue hover:underline">Chicot Aquifer</Link>, the main drinking-water source for more than 700,000 residents across 15 parishes. If this experiment fails, the CO2 forms carbonic acid—potentially acidifying brine and dissolving rock to release hazardous concentrations of lead, arsenic, and manganese into our water, soil, and crops.
                        </p>
                    </div>
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/VqGIHbSprVk?si=u-5C_ofomPJ49CUS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                {/* Scroll Cue */}
                <div className="mt-16 flex justify-center animate-bounce">
                    <div className="flex flex-col items-center">
                        <ChevronDown size={32} className="text-gray-400" />
                        <ChevronDown size={32} className="text-gray-200 -mt-4" />
                    </div>
                </div>
            </section>

            {/* Section C: "What You Need to Know" (The Core Navigation) */}
            <section id="know" className="py-24 px-6 bg-gray-50 relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-10 space-y-6">
                        <img src="/Save-My-LA-logo.png" alt="Logo Stamp" className="w-20 mx-auto opacity-90" />
                        <h2 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 tracking-tight leading-none uppercase">
                            What You Need <br className="hidden md:block" /> to Know
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-800 font-serif italic max-w-4xl mx-auto font-medium mt-4 inline-block">
                            The facts are clear. The risks are documented. The threat is real.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1: Water in the Crosshairs */}
                        <Link to="/water-in-crosshairs" className="group bg-white border border-gray-200 hover:border-brand-blue/30 transition-all duration-300 flex flex-col items-start relative overflow-hidden h-full shadow-sm hover:shadow-lg rounded-xl">
                            <div className="w-full h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src="/chicot-aquifer.png"
                                    alt="Water in Crosshairs"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col h-full w-full">
                                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-widest text-gray-900 group-hover:text-brand-blue transition-colors">
                                    Water in the Crosshairs
                                </h3>

                                <p className="text-gray-900 text-base leading-relaxed mb-6 font-medium">
                                    33 CCS projects and 107 wells targeting the Chicot Aquifer, threatening the water supply for 15 parishes.
                                </p>

                                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-brand-blue transition-colors flex items-center border-b-2 border-transparent group-hover:border-brand-blue pb-1 mt-auto">
                                    Read Report <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>

                        {/* Card 2: Environmental Danger */}
                        <Link to="/environmental-dangers" className="group bg-white border border-gray-200 hover:border-brand-red/30 transition-all duration-300 flex flex-col items-start relative overflow-hidden h-full shadow-sm hover:shadow-lg rounded-xl">
                            <div className="w-full h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-brand-red/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src="/co2-leak.jpg"
                                    alt="Environmental Danger"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col h-full w-full">
                                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-widest text-gray-900 group-hover:text-brand-red transition-colors">
                                    Environmental Danger
                                </h3>

                                <p className="text-gray-900 text-base leading-relaxed mb-6 font-medium">
                                    Documented failures and acidification risks to our $2.4B fisheries and fragile wetlands ecosystem.
                                </p>

                                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-brand-red transition-colors flex items-center border-b-2 border-transparent group-hover:border-brand-red pb-1 mt-auto">
                                    Read Dossier <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>

                        {/* Card 3: Oversight Gaps */}
                        <Link to="/oversight-gaps" className="group bg-white border border-gray-200 hover:border-gray-800/30 transition-all duration-300 flex flex-col items-start relative overflow-hidden h-full shadow-sm hover:shadow-lg rounded-xl">
                            <div className="w-full h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gray-800/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src="/oversight-gaps-new.jpg"
                                    alt="Oversight Gaps"
                                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col h-full w-full">
                                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-widest text-gray-900 group-hover:text-gray-800 transition-colors">
                                    Oversight Gaps
                                </h3>

                                <p className="text-gray-900 text-base leading-relaxed mb-6 font-medium">
                                    A look at "Primacy," the lack of state inspectors, and the unconstitutional use of Eminent Domain.
                                </p>

                                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-gray-800 transition-colors flex items-center border-b-2 border-transparent group-hover:border-gray-800 pb-1 mt-auto">
                                    View Evidence <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>

                        {/* Card 4: Follow The Money */}
                        <Link to="/follow-the-money" className="group bg-white border border-gray-200 hover:border-brand-blue/30 transition-all duration-300 flex flex-col items-start relative overflow-hidden h-full shadow-sm hover:shadow-lg rounded-xl">
                            <div className="w-full h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src="/atchafalaya-basin.jpg"
                                    alt="Follow The Money"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col h-full w-full">
                                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-widest text-gray-900 group-hover:text-brand-blue transition-colors">
                                    Follow The Money
                                </h3>

                                <p className="text-gray-900 text-base leading-relaxed mb-6 font-medium">
                                    See how corporate lobbying and political contributions are driving the CCS expansion in Louisiana.
                                </p>

                                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-brand-blue transition-colors flex items-center border-b-2 border-transparent group-hover:border-brand-blue pb-1 mt-auto">
                                    Track Funds <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section D: The Closing (Pre-Footer) */}
            <section className="py-24 px-6 bg-brand-dark text-white relative overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red rounded-full filter blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                        The Chicot Aquifer is Louisiana's lifeline. <span className="text-brand-red">Once polluted, it cannot be restored.</span>
                    </h2>
                    <p className="text-xl text-gray-300 font-serif max-w-2xl mx-auto">
                        Join Save My Louisiana in demanding a moratorium on CO₂ injection beneath our water.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1">
                            Join The Movement
                        </Link>
                        <Link to="/donate" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/50 px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg transform hover:-translate-y-1">
                            Donate Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
