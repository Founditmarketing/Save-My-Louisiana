
import React from 'react';
import { ArrowLeft, ShieldAlert, Users, Gavel, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OversightGaps: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/oversightgaps.png" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors uppercase tracking-widest text-xs font-bold">
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        Oversight and Accountability Gaps
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-2xl mx-auto">
                        Who is watching the wells? And when something goes wrong, who pays?
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

                {/* The Primacy Problem */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-gray-900 pl-4">
                        The Primacy Problem
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed font-serif">
                        Unlike many other states, Louisiana (specifically the LDENR) has been granted "<a href="https://www.epa.gov/uic/class-vi-wells-used-geologic-sequestration-co2" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">primacy</a>" to regulate Class VI injection wells, removing direct EPA oversight. This creates a potential <span className="font-bold text-brand-red">Conflict of Interest</span>, where the same state that benefits from tax revenue is responsible for pausing projects due to safety concerns.
                    </p>
                </section>

                {/* Lack of Manpower */}
                <section className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-gray-100 p-3 rounded-full shrink-0">
                            <Users size={24} className="text-gray-900" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Fewer Than 5 Inspectors</h2>
                            <p className="text-lg text-gray-700 leading-relaxed font-serif">
                                Despite planning for hundreds of wells, the state currently employs fewer than 5 dedicated inspectors for these complex projects. How can we ensure safety when the watchdog is understaffed?
                            </p>
                        </div>
                    </div>
                </section>

                {/* Liability Transfer */}
                <section className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-gray-100 p-3 rounded-full shrink-0">
                            <ShieldAlert size={24} className="text-red-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">The Taxpayer Bailout</h2>
                            <p className="text-lg text-gray-700 leading-relaxed font-serif">
                                Under current Louisiana law, liability for these storage sites transfers to the State (meaning <span className="font-bold">you, the taxpayer</span>) just 10 years after injection stops. If a leak happens in year 11, the corporation walks away, and we pay the bill.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Eminent Domain & Property Rights */}
                <section className="bg-gray-50 p-10 rounded-3xl shadow-lg border border-gray-200">
                    <div className="flex gap-4 items-center mb-6">
                        <Gavel size={32} className="text-brand-blue" />
                        <h2 className="text-2xl font-heading font-bold text-gray-900">Your Property Rights</h2>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                            Current statutes (La. R.S. 30:1108) allow private companies to seize land by declaring CCS a "public utility." This is a violation of the spirit of our laws.
                        </p>
                        <blockquote className="border-l-4 border-brand-blue pl-4 italic text-gray-600 my-4">
                            "This violates Article 1, Section 4 of the Louisiana Constitution. Taking private property for private profit (tax credits) is not public use."
                        </blockquote>
                        <p className="text-brand-red font-bold text-sm uppercase tracking-widest">
                            We are fighting this in court.
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="text-center pt-8">
                    <p className="text-gray-500 italic mb-6 text-sm">
                        Sources: <a href="https://www.epa.gov/uic/class-vi-wells-used-geologic-sequestration-co2" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red underline decoration-dotted">EPA Region 6 Class VI Program Comparison (2024)</a>; <a href="https://lailluminator.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red underline decoration-dotted">Louisiana Illuminator (2024)</a>; <a href="https://www.allenparishpolicejury.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red underline decoration-dotted">Allen Parish Police Jury CO₂ Risk Assessment (2025)</a>.
                    </p>
                    <Link to="/contact" className="inline-block bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1">
                        Demand Accountability
                    </Link>
                </div>

            </div>
        </div>
    );
};
