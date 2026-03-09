import React, { useEffect } from 'react';
import { Gavel, FileText, Scale, Shield, Users, Landmark, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LegalAction: React.FC = () => {
    // scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white font-sans text-gray-900">
            {/* Hero Section */}
            <section className="bg-brand-blue text-white py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-dark rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-dark rounded-full filter blur-[100px]"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-7xl font-heading font-bold tracking-tight">Legal Action</h1>
                    <p className="text-xl md:text-2xl font-serif text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Challenging unconstitutional overreach in Louisiana's courts.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-4">
                            <Scale size={14} /> Our Strategy
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
                            What SML is Doing
                        </h2>
                        <div className="text-lg text-gray-700 font-serif leading-relaxed space-y-6">
                            <p>
                                As is clearly evident, our Constitutional Right to Property is in grave danger and that danger has come from our Legislature. If left unchallenged and unchecked, what other Rights will Legislators attempt to undermine and take from us? We MUST act and correct this negligence of our Legislature.
                            </p>
                            <p>
                                Save My Louisiana is exercising our Rights and challenging this unconstitutional law and others like it through the legal mechanisms available. We are petitioning the state’s judicial branch to recognize and declare this law and others like it unconstitutional.
                            </p>
                        </div>
                    </div>

                    {/* The Petition */}
                    <div className="bg-gray-900 text-white p-10 md:p-16 rounded-[50px] shadow-2xl space-y-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Landmark size={200} />
                        </div>
                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center gap-3 text-brand-red font-bold uppercase tracking-[0.2em] text-sm">
                                <Gavel size={20} /> 19th Judicial District Court
                            </div>
                            <h3 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                                The Petition Filed in Baton Rouge
                            </h3>
                            <p className="text-xl text-gray-400 font-serif leading-relaxed">
                                On <span className="text-white font-bold underline decoration-brand-red">20 November 2025</span>, Save My Louisiana filed a historic petition challenging the constitutionality of ACT 61 and the legislative framework that grants eminent domain power to private corporations.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8 relative z-10">
                            <div className="flex items-center gap-4 text-brand-red">
                                <AlertCircle size={24} />
                                <h4 className="text-lg font-bold font-heading uppercase tracking-widest">Document Pending</h4>
                            </div>
                            <p className="text-gray-300 font-serif">
                                We will be posting the full text of the lawsuit and the petition here shortly. Please check back soon for the complete legal documentation.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                                    <FileText size={14} /> Case No: Pending
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                                    <Landmark size={14} /> Baton Rouge, LA
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <h3 className="text-2xl md:text-4xl font-heading font-bold text-gray-900">Defending Our Rights</h3>
                            <div className="w-20 h-1 bg-brand-red mx-auto"></div>
                        </div>
                        <div className="text-lg text-gray-700 font-serif leading-relaxed text-center max-w-2xl mx-auto italic">
                            "These are your Rights of which those you trusted to represent you in Baton Rouge have trampled and in so doing, failed to fulfill their basic oath of office to uphold the Constitution."
                        </div>
                        <div className="text-center pt-6">
                            <p className="font-bold text-gray-900 text-3xl font-heading leading-tight italic uppercase tracking-widest">
                                PLEASE JOIN US!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-brand-red text-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">Complete the Work</h2>
                    <p className="text-xl font-serif text-white/90 leading-relaxed">
                        Join us to complete this incredibly important work in DEFENDING OUR RIGHTS!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-brand-red px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl text-lg">
                            Join The Call To Action
                        </Link>
                        <Link to="/donate" className="bg-brand-dark text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl text-lg">
                            Donate to Legal Fund
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
