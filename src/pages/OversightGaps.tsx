
import React, { useEffect } from 'react';
import { ShieldAlert, Users, Gavel, Scale, Ban, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OversightGaps: React.FC = () => {
    // scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white font-sans text-gray-900">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/statecapital.jpg"
                        alt="Louisiana State Capitol"
                        className="w-full h-full object-cover object-top brightness-50"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-7xl font-heading font-bold tracking-tight text-white">Closing the Oversight Gaps</h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-200 leading-relaxed max-w-3xl mx-auto">
                        "The system is only as strong as its weakest link. We are here to ensure that link never breaks."
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 font-sans">
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Primary Gaps */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Scale className="text-brand-blue" size={32} />
                                <h2 className="text-2xl font-bold font-heading">Regulatory Primacy</h2>
                            </div>
                            <p className="text-gray-700 font-serif leading-relaxed">
                                Currently, Louisiana is seeking "Primacy" over Class VI injection wells. This means moving safety oversight from the federal EPA to state-level agencies that may lack the resources or staffing for proper enforcement.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Users className="text-brand-blue" size={32} />
                                <h2 className="text-2xl font-bold font-heading">Staffing & Inspection</h2>
                            </div>
                            <p className="text-gray-700 font-serif leading-relaxed">
                                Regulatory agencies often depend on self-reporting from industry actors. We need more independent, state-funded inspectors to ensure compliance on every single well site.
                            </p>
                        </div>
                    </div>

                    {/* Legal Risks */}
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                        <div className="bg-white p-6 rounded-full shadow-inner">
                            <Gavel className="text-brand-red" size={48} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Liability Transfer</h2>
                            <p className="text-gray-700 font-serif leading-relaxed mb-6">
                                Recent legislation attempts to transfer long-term liability for CCS sites from private companies to the taxpayers of Louisiana after a certain number of years.
                            </p>
                            <Link to="/mission" className="font-bold text-brand-blue hover:underline uppercase tracking-widest text-sm flex items-center gap-2">
                                Read our full analysis <Scale size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Eminent Domain Issues */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <Ban className="text-brand-red" size={32} />
                            <h2 className="text-2xl font-bold font-heading">Eminent Domain Overreach</h2>
                        </div>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            Private corporations are being granted the power of eminent domain to seize subsurface property for carbon storage without the same public necessity requirements as traditional public works projects.
                        </p>
                        <div className="p-8 bg-red-50 border border-red-100 rounded-2xl flex gap-6 italic text-gray-600 font-serif">
                            Article 1, Section 4 of our Constitution is being subverted to prioritize corporate profit over private property rights.
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-6 text-center bg-brand-dark text-white rounded-[50px] mb-20 mx-6 font-sans">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">Stay Informed</h2>
                    <p className="text-xl font-serif text-gray-300 leading-relaxed">
                        Sign up for updates as we track new legislation and identify further gaps in environmental and property protections.
                    </p>
                    <Link to="/contact" className="inline-block bg-brand-blue text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
                        Subscribe to Alerts
                    </Link>
                </div>
            </section>
        </div>
    );
};
