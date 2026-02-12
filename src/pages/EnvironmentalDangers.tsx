
import React from 'react';
import { ArrowLeft, AlertTriangle, LandPlot, DollarSign, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EnvironmentalDangers: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/realdangers.png" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-red/85 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors uppercase tracking-widest text-xs font-bold">
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        Real Environmental Dangers
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-red-100 max-w-2xl mx-auto">
                        This isn't theoretical. Containment failures have already happened, and Louisiana's landscape is uniquely vulnerable.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

                {/* Failure Examples */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-brand-red pl-4">
                        Proof of Failure
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h3 className="font-bold text-xl text-red-900 mb-2">Decatur, Illinois</h3>
                            <p className="text-gray-700 leading-relaxed">
                                At the ADM site, often cited as a model project, authorized CO₂ migration occurred beyond the modeled limits, proving that even under federal oversight, containment is not guaranteed.
                            </p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h3 className="font-bold text-xl text-red-900 mb-2">Satartia, Mississippi</h3>
                            <p className="text-gray-700 leading-relaxed">
                                A <a href="https://www.denbury.com" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Denbury Inc.</a> pipeline rupture in 2020 released a massive cloud of CO₂, causing hospitalizations and widespread evacuations. It exposed serious gaps in safety protocols for CO₂ transport.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Legacy Wells */}
                <section className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-gray-100 p-3 rounded-full shrink-0">
                            <LandPlot size={24} className="text-gray-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">The "Pincushion" Effect</h2>
                            <p className="text-lg text-gray-700 leading-relaxed font-serif">
                                Louisiana has <span className="font-bold">250,000+ oil and gas wells</span>. Many were plugged before 1950 using outdated standards. These "legacy wells" act as straws, allowing injected CO₂ to puncture the containment zone and escape back to the surface.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pipelines */}
                <section className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-gray-100 p-3 rounded-full shrink-0">
                            <Activity size={24} className="text-gray-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">A Web of Risk</h2>
                            <p className="text-lg text-gray-700 leading-relaxed font-serif">
                                More than <span className="font-bold">700 miles</span> of new pipelines are planned, many crossing the fragile Atchafalaya Basin. A rupture in these remote wetlands would be devastating and difficult to contain.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Economic Motive */}
                <section className="bg-gray-900 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <DollarSign size={120} />
                    </div>

                    <h2 className="text-2xl font-heading font-bold mb-6 text-brand-blue relative z-10">Why Here? Follow the Money.</h2>
                    <p className="text-gray-300 text-lg leading-relaxed relative z-10 mb-6">
                        This boom is driven by the <span className="font-bold text-white">45Q Tax Credit</span>, which offers companies up to <span className="font-bold text-white">$85 per ton</span> of CO₂ stored. It is a "market-driven" rush incentivized by federal subsidies, not purely environmental benevolence. Louisiana is being used as a profitable dumping ground.
                    </p>
                </section>

                {/* Call to Action */}
                <div className="text-center pt-8">
                    <p className="text-gray-500 italic mb-6 text-sm">
                        Sources: <a href="https://www.phmsa.dot.gov" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red underline decoration-dotted">PHMSA Pipeline Incident Database (2003–2024)</a>; <a href="https://environmentalintegrity.org" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red underline decoration-dotted">Environmental Integrity Project (2023)</a>.
                    </p>
                    <Link to="/contact" className="inline-block bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1">
                        Stop The Pipelines
                    </Link>
                </div>

            </div>
        </div>
    );
};
