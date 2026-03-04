
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
                    <img src="/co2-leak.jpg" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-red/85 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <Link to="/#know" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors uppercase tracking-widest text-xs font-bold">
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
                    <div className="grid md:grid-cols-1 gap-8">
                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100 space-y-6">
                            <div>
                                <h3 className="font-bold text-2xl text-red-900 mb-2">Decatur, Illinois</h3>
                                <p className="text-gray-700 leading-relaxed font-serif">
                                    At the ADM site, often cited as a model project, unauthorized CO₂ migration occurred beyond the modeled limits, proving that even under federal oversight, containment is not guaranteed.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-red-200">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/ckeoUanNgmU"
                                        title="Decatur CO2 Leak Update"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-red-200">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/GRN-3RWCefk"
                                        title="Decatur Incident Analysis"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100 space-y-6">
                            <div>
                                <h3 className="font-bold text-2xl text-red-900 mb-2">Satartia, Mississippi</h3>
                                <p className="text-gray-700 leading-relaxed font-serif">
                                    A <a href="https://www.denbury.com" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Denbury Inc.</a> pipeline rupture in 2020 released a massive cloud of CO₂, causing hospitalizations and widespread evacuations. It exposed serious gaps in safety protocols for CO₂ transport.
                                </p>
                            </div>
                            <div className="max-w-2xl mx-auto w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-red-200">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/yGIXeWktiWU"
                                    title="Satartia Incident Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
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
                                Louisiana has <span className="font-bold">over 400,000 oil and gas wells</span>. Many were plugged before 1950 using outdated standards. These "legacy wells" act as straws, allowing injected CO₂ to puncture the containment zone and escape back to the surface.
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

                {/* Call to Action */}
                <div className="text-center pt-8 border-t border-gray-100">
                    <div className="bg-brand-blue/5 p-8 rounded-2xl mb-12 flex flex-col items-center">
                        <AlertTriangle className="text-brand-blue mb-4" size={32} />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Deep Dive</h3>
                        <p className="text-gray-600 mb-6 max-w-xl">
                            For a comprehensive analysis of the environmental risks associated with Class VI injection wells, review our complete impact report.
                        </p>
                        <a
                            href="/ccs-environmental-impact-report.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-blue hover:bg-blue-800 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all shadow-md flex items-center gap-2"
                        >
                            View Environmental Impact Report (PDF)
                        </a>
                    </div>

                    <p className="text-gray-500 italic mb-6 text-sm">
                        Sources: <a href="https://www.phmsa.dot.gov" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red underline decoration-dotted">PHMSA Pipeline Incident Database (2003–2024)</a>.
                    </p>
                    <Link to="/contact" className="inline-block bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1">
                        Join The Movement
                    </Link>
                </div>

            </div>
        </div>
    );
};
