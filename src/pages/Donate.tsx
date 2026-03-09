
import React from 'react';
import { ArrowLeft, Check, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Donate: React.FC = () => {

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">

            {/* Header / Hero */}
            <section className="bg-brand-blue text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute -right-24 -top-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors uppercase tracking-widest text-xs font-bold">
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        Support the Legal Defense Fund
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-blue-100 max-w-2xl mx-auto">
                        Your contribution directly funds the legal battles to stop unsafe carbon injection in our communities.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16">

                {/* Left: Impact Info (Sticky) */}
                <div className="space-y-8 sticky top-32 self-start">
                    <div>
                        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Why Donate?</h2>
                        <div className="w-12 h-1 bg-brand-red mb-6"></div>
                        <p className="text-gray-700 leading-relaxed font-serif text-lg mb-6">
                            Multi-national corporations have unlimited budgets. We have the truth, the law, and <span className="font-bold">you</span>.
                        </p>
                        <p className="text-gray-700 leading-relaxed font-serif">
                            Donations are used exclusively for:
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {[
                            "Expert Environmental Attorneys.",
                            "Commissioning independent geological studies.",
                            "Filing injunctions against unsafe permits.",
                            "Community outreach and town hall organization."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 items-start">
                                <div className="bg-brand-blue/10 p-1 rounded-full text-brand-blue mt-0.5">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-4 items-center">
                        <ShieldCheck size={32} className="text-green-600 shrink-0" />
                        <div>
                            <h3 className="font-bold text-gray-900">Secure & Encrypted</h3>
                            <p className="text-sm text-gray-500">All transactions are processed securely. Save My Louisiana is a registered non-profit organization.</p>
                        </div>
                    </div>
                </div>

                {/* Right: Donation Widget (Live) */}
                <div className="h-fit">
                    <iframe
                        src="https://secure.anedot.com/save-my-louisiana-2cabe2c0-de92-4c5a-9a77-4c52254a3cfe/87a89357-11ef-4038-9719-47a11dad5287?exitIntent=true"
                        title="Donate to Save My Louisiana"
                        className="w-full h-[1800px] border-none rounded-2xl shadow-xl overflow-hidden"
                        allowFullScreen
                        scrolling="no"
                    ></iframe>

                    <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                        <p className="text-sm text-gray-500 font-serif">
                            Payments are processed securely through <span className="font-bold">Anedot</span>.
                            Your data is encrypted and protected.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};
