
import React from 'react';
import { ArrowLeft, Droplets, Activity, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WaterInCrosshairs: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/watersincrosshairs.png" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-blue/85 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors uppercase tracking-widest text-xs font-bold">
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
                    <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-brand-blue pl-4">
                        The Chicot Aquifer System
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed font-serif">
                        The Chicot Aquifer System spans roughly <span className="font-bold">9,500 square miles</span> and supplies over <span className="font-bold">700,000 people</span> across 15 parishes with drinking, irrigation, and industrial water. It is composed of highly permeable sands and gravels that store fresh water at shallow depths—making it extremely vulnerable to both pressure migration and contamination from deeper CO₂ injection.
                    </p>
                </section>

                {/* The 3 Risks */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-heading font-bold text-gray-900">The Three Critical Risks</h2>
                    <div className="grid md:grid-cols-1 gap-8">

                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 flex gap-6 items-start">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                                <Activity className="text-brand-blue" size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900">1. Pressure Transmission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    CO₂ injection creates large pressure fronts that can extend miles from each well. If the caprock integrity is imperfect or faults exist, these pressure changes can push brine and dissolved CO₂ upward into freshwater zones.
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 flex gap-6 items-start">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                                <Droplets className="text-brand-blue" size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900">2. Brine Displacement</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Rising saline water can raise chloride, sulfate, and TDS levels, harming rice crops, municipal systems, and private wells. Once saltwater intrudes, it is nearly impossible to remove.
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 flex gap-6 items-start">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                                <FlaskConical className="text-brand-blue" size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900">3. Chemical Reactions</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Dissolved CO₂ forms carbonic acid, which lowers pH. This acidic water dissolves minerals in the rock, mobilizing toxic heavy metals like <span className="font-bold text-red-600">arsenic and lead</span> into the water supply.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Consequences */}
                <section className="bg-brand-dark text-white p-10 rounded-3xl shadow-xl">
                    <h2 className="text-2xl font-heading font-bold mb-6 text-brand-red">The Consequences of Failure</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-3 items-start">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0"></div>
                            <span className="text-gray-300 text-lg">Permanent loss of potable water through acidification and salinity increase.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0"></div>
                            <span className="text-gray-300 text-lg">Contamination migration through interconnected sand lenses, impacting municipal and agricultural wells.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0"></div>
                            <span className="text-gray-300 text-lg">Infrastructure corrosion due to altered groundwater chemistry.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <div className="text-center pt-8">
                    <p className="text-gray-500 italic mb-6 text-sm">
                        Sources: <a href="https://www.epa.gov/uic/class-vi-wells-used-geologic-sequestration-co2" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue underline decoration-dotted">U.S. EPA Class VI Technical Guidance (2013)</a>; USGS Chicot Aquifer Hydrogeologic Framework; <a href="https://www.epa.gov/uic" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue underline decoration-dotted">EPA’s national UIC database</a>.
                    </p>
                    <Link to="/contact" className="inline-block bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1">
                        Take Action Now
                    </Link>
                </div>

            </div>
        </div>
    );
};
