import React, { useState } from 'react';
import { ArrowLeft, Droplets, Activity, FlaskConical, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WaterInCrosshairs: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            {/* Lightbox Overlay */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 transition-all duration-300 animate-in fade-in"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsLightboxOpen(false);
                        }}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src="/chicot-aquifer.png"
                        alt="Map of the Chicot Aquifer - Large View"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            {/* Hero Section */}
            <section className="relative text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/chicot-hero.jpg" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-blue/85 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <Link to="/#know" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors uppercase tracking-widest text-xs font-bold">
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        Louisiana's Water Is in the Crosshairs
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-blue-100 max-w-2xl mx-auto">
                        How CCS projects endanger the Chicot Aquifer—our primary source of freshwater.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

                {/* Intro */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-brand-red pl-4">
                        A Threat to 48% of Our State's Drinking Water
                    </h2>
                    <p className="text-xl text-gray-900 leading-relaxed font-serif font-bold">
                        The Chicot Aquifer isn't just a geographical feature—it's the lifeblood of Louisiana.
                        Nearly <span className="text-brand-red underline">half (48%)</span> of our state's residents depend on this freshwater source every single day.
                    </p>

                    <div
                        className="my-10 rounded-2xl overflow-hidden shadow-2xl border border-blue-100 relative group cursor-pointer"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-300 flex items-center justify-center">
                            <div className="bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                                <ZoomIn className="text-brand-blue" size={24} />
                            </div>
                        </div>
                        <img
                            src="/chicot-aquifer.png"
                            alt="Map of the Chicot Aquifer"
                            className="w-full h-auto"
                        />
                        <div className="bg-blue-50/50 px-6 py-3 text-sm text-gray-600 italic border-t border-blue-100 flex justify-between items-center">
                            <span>The Chicot Aquifer system spans 15 parishes and is vital to Louisiana's economy and health.</span>
                            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest hidden sm:block">Click to Enlarge</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed font-serif">
                        The system spans <span className="font-bold">9,500 square miles</span> and supplies over <span className="font-bold">700,000 people</span> across 15 parishes. Because it is composed of highly permeable sands and gravels, any failure in CO₂ containment isn't just a "leak"—it's a <span className="font-bold text-brand-red uppercase">permanent contamination event</span> that could render our primary water source undrinkable for generations.
                    </p>
                </section>

                {/* The 3 Risks */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-heading font-bold text-gray-900">Critical Failure Points</h2>
                    <div className="grid md:grid-cols-1 gap-8">

                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100 flex gap-6 items-start">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                                <Activity className="text-brand-red" size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">1. Unstoppable Pressure Fronts</h3>
                                <p className="text-gray-700 leading-relaxed font-serif">
                                    Injecting millions of tons of CO₂ creates massive pressure waves that force hazardous brine and toxic chemicals upward. If there is a single crack in the rock or an old, forgotten well, this pressure <span className="italic">will</span> find it—and push poison into the water you drink.
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100 flex gap-6 items-start">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                                <Droplets className="text-brand-red" size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">2. Saltwater Intrusion</h3>
                                <p className="text-gray-700 leading-relaxed font-serif">
                                    Rising saline levels don't just make water taste bad—they destroy municipal infrastructure and kill crops. Once saltwater enters a freshwater aquifer, there is <span className="font-bold">no technology on Earth</span> that can filter it out at this scale.
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100 flex gap-6 items-start">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                                <FlaskConical className="text-brand-red" size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">3. The Carbonic Acid "Acid Mine" Effect</h3>
                                <p className="text-gray-700 leading-relaxed font-serif">
                                    When CO₂ meets water, it turns into acid. This acid leaches <span className="font-bold text-red-700">Arsenic, Lead, and Manganese</span> directly out of the surrounding rock and into the aquifer. We aren't just talking about "bad" water—we're talking about heavy metal poisoning in your kitchen tap.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Agricultural Industry Section */}
                <section className="space-y-8 py-8 border-y border-gray-100">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 text-center">
                        Devastating Louisiana Agriculture
                    </h2>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto font-serif">
                        A contaminated Chicot Aquifer is a death sentence for the industries that define our culture and economy.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <h3 className="font-bold text-xl text-gray-900">Crawfish Farmers</h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                                Our world-famous crawfish industry relies on pristine freshwater. Saltwater intrusion or heavy metal contamination would wipe out entire seasons and destroy the livelihoods of multi-generational farming families.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-xl text-gray-900">Rice Farmers</h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                                Rice is incredibly sensitive to salinity. Even a minor increase in chloride levels from brine displacement makes irrigation water toxic to the plants, turning fertile fields into barren land.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-xl text-gray-900">Local Nurseries</h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                                Louisiana's nurseries and greenhouse industries depend on reliable, high-quality water. Contaminated groundwater would kill inventories and make business operations impossible across the region.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Consequences */}
                <section className="bg-red-950 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <h2 className="text-2xl font-heading font-bold mb-6 text-brand-red uppercase tracking-widest">The "No-Go" Zone</h2>
                    <ul className="space-y-4 relative z-10">
                        <li className="flex gap-3 items-start">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0 animate-pulse"></div>
                            <span className="text-gray-300 text-lg font-serif">Potable water loss is <span className="text-white font-bold">permanent</span>. There is no cleanup for a poisoned aquifer.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0 animate-pulse"></div>
                            <span className="text-gray-300 text-lg font-serif">Toxic plumes can migrate for miles, silently poisoning municipal systems without warning.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0 animate-pulse"></div>
                            <span className="text-gray-300 text-lg font-serif">Property values will plummet as the land becomes uninhabitable and un-farmable.</span>
                        </li>
                    </ul>
                </section>

                {/* Technical Deep Dive */}
                <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 flex flex-col items-center text-center">
                    <Activity className="text-brand-blue mb-4" size={32} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Analysis</h3>
                    <p className="text-gray-600 mb-6 max-w-xl font-serif">
                        For a deeper understanding of how CO₂ injection wells jeopardize our freshwater systems, read our full technical impact report.
                    </p>
                    <a
                        href="/ccs-environmental-impact-report.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-blue hover:bg-blue-800 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all shadow-md"
                    >
                        View Environmental Impact Report (PDF)
                    </a>
                </div>

                {/* Call to Action */}
                <div className="text-center pt-8">
                    <p className="text-gray-500 italic mb-6 text-sm">
                        Sources: USGS Chicot Aquifer Hydrogeologic Framework; <a href="https://www.epa.gov/uic" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue underline decoration-dotted">EPA National UIC Database</a>; Louisiana Department of Agriculture & Forestry.
                    </p>
                    <Link to="/contact" className="inline-block bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1">
                        Stop the Contamination
                    </Link>
                </div>

            </div>
        </div>
    );
};
