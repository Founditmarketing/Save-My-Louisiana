
import React, { useState } from 'react';
import { ArrowLeft, Check, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Donate: React.FC = () => {
    const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);

    const amounts = [25, 50, 100, 250, 500];

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

                {/* Left: Impact Info */}
                <div className="space-y-8">
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
                            "Hiring expert environmental attorneys.",
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

                {/* Right: Donation Form (Visual Only) */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 h-fit relative overflow-hidden">
                    {/* Decorative top border */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-brand-red"></div>

                    <h3 className="text-xl font-bold text-gray-900 mb-6">Select Donation Amount</h3>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {amounts.map((amount) => (
                            <button
                                key={amount}
                                onClick={() => setSelectedAmount(amount)}
                                className={`py-3 rounded-lg font-bold border transition-all ${selectedAmount === amount
                                        ? 'bg-brand-blue text-white border-brand-blue shadow-md transform scale-105'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                                    }`}
                            >
                                ${amount}
                            </button>
                        ))}
                        <button
                            onClick={() => setSelectedAmount('custom')}
                            className={`py-3 rounded-lg font-bold border transition-all ${selectedAmount === 'custom'
                                    ? 'bg-brand-blue text-white border-brand-blue shadow-md'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                                }`}
                        >
                            Custom
                        </button>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all" placeholder="Jane Doe" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                            <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all" placeholder="jane@example.com" />
                        </div>
                    </div>

                    <button className="w-full bg-brand-red hover:bg-red-700 text-white py-4 rounded-lg font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Donate {typeof selectedAmount === 'number' ? `$${selectedAmount}` : ''}
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-4">
                        By donating, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>

            </div>
        </div>
    );
};
