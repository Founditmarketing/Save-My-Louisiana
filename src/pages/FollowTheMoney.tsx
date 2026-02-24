
import React from 'react';
import { ArrowLeft, DollarSign, TrendingUp, Landmark, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FollowTheMoney: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">

            {/* Hero Section */}
            <section className="bg-brand-dark text-white py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full filter blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <Link to="/#know" className="inline-flex items-center text-white/50 hover:text-white mb-4 transition-colors uppercase tracking-widest text-xs font-bold">
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-7xl font-heading font-bold tracking-tight">
                        Follow The Money
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        The explosion of CCS in Louisiana isn't about the environment—it's about a massive federal subsidy rush.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

                {/* The 45Q Subsidy */}
                <section className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                            <DollarSign size={24} className="text-yellow-700" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">The 45Q Tax Credit</h2>
                            <p className="text-lg text-gray-700 leading-relaxed font-serif">
                                The primary driver behind these projects is the federal <span className="font-bold">45Q Tax Credit</span>. Revamped in recent years, this subsidy now pays companies up to <span className="font-bold text-brand-red">$85 for every metric ton</span> of CO₂ they permanently store underground. For a single industrial project, this can translate into <span className="font-bold">billions of dollars</span> in federal payouts over the next decade.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Corporate Incentives */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-4">
                        <TrendingUp className="text-brand-blue" size={32} />
                        <h3 className="text-xl font-bold text-gray-900">Market-Driven Rush</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Because these credits are guaranteed by the federal government, CCS has become a low-risk, high-reward investment for energy giants. They aren't just offsetting their emissions; they are creating a new, highly profitable business line funded by your tax dollars.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-4">
                        <Landmark className="text-brand-blue" size={32} />
                        <h3 className="text-xl font-bold text-gray-900">Primacy & Power</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Louisiana's rush to obtain "Primacy" (state control over federal permitting) was designed to speed up this process. By removing the EPA's direct oversight, the state can fast-track these multibillion-dollar projects to capture tax revenue as quickly as possible.
                        </p>
                    </div>
                </section>

                {/* Liability Shift */}
                <section className="bg-brand-dark text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <ShieldCheck size={120} />
                    </div>
                    <h2 className="text-2xl font-heading font-bold mb-6 text-brand-red relative z-10">The Ultimate Pass-Through</h2>
                    <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                        Perhaps the most alarming detail is the push for <span className="font-bold text-white">liability transfer</span>. Legislation in Louisiana has been crafted to eventually transfer the long-term monitoring and legal responsibility of these wells from the corporations to the <span className="font-bold text-white">taxpayers</span>. If a leak occurs 50 years from now, the companies may be gone, leaving Louisianans to foot the bill for the environmental damage.
                    </p>
                </section>

                {/* Call to Action */}
                <div className="text-center pt-8">
                    <p className="text-gray-500 italic mb-6 text-sm">
                        Research the financial incentives behind CCS at the <a href="https://www.irs.gov/newsroom/irs-issues-guidance-on-the-tax-credit-for-carbon-oxide-sequestration" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue underline decoration-dotted">Internal Revenue Service (45Q Guidance)</a> and the <a href="https://www.energy.gov/fecm/carbon-capture-and-storage-tax-credit-45q" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue underline decoration-dotted">Department of Energy</a>.
                    </p>
                    <Link to="/contact" className="inline-block bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1">
                        Join The Movement
                    </Link>
                </div>

            </div>
        </div>
    );
};
