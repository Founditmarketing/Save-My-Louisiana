import React, { useEffect } from 'react';
import { Shield, Scale, Ban, FileText, Handshake, Globe, Landmark, Users, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Mission: React.FC = () => {
    // scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white font-sans text-gray-900">
            {/* Hero Section */}
            <section className="bg-brand-dark text-white py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full filter blur-[100px]"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-7xl font-heading font-bold tracking-tight">Know the Mission</h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Defending foundational rights and the life-sustaining environment of Louisiana.
                    </p>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 px-6 border-b border-gray-100">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-4">
                            <Users size={14} /> About Us
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
                            Who is Save My Louisiana?
                        </h2>
                        <p className="text-xl text-gray-700 font-serif leading-relaxed">
                            Save My Louisiana (SML) is a <span className="font-bold text-brand-blue">501c4 non-profit citizen volunteer organization</span> dedicated to educating and empowering fellow Louisiana citizens to defend and protect our foundational rights of Life, Liberty and Property as well as our life sustaining environment for today and for future generations.
                        </p>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            SML is strongly committed to the constitutionally guaranteed rights of Louisiana citizens to Life, Liberty and Property. We believe the Louisiana Constitution is the supreme law of Louisiana subject only to the Constitution of the United States. We believe these two Constitutions by intention and in fact, guarantee no one citizen’s natural rights can be subverted by another citizen or any industry. We are all, citizen and industry, equal before the law.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-8">
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-4">
                            <h3 className="text-xl font-bold font-heading flex items-center gap-2">
                                <Shield className="text-brand-blue" /> Unwavering Stance
                            </h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                                SML is PRO-economic development, PRO-oil and gas, and PRO-industry. <span className="font-bold text-brand-red">BUT</span>, SML is ANTI any action that would use the power and force of law to undermine Louisiana citizen’s basic, constitutionally guaranteed rights to Life, Liberty and Property for any purpose whatsoever.
                            </p>
                        </div>
                        <div className="p-8 bg-brand-blue/5 rounded-3xl border border-brand-blue/10 space-y-4">
                            <h3 className="text-xl font-bold font-heading flex items-center gap-2 text-brand-blue">
                                <Users className="text-brand-blue" /> Harmony & Industry
                            </h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                                This includes undermining guaranteed rights for the sake of economic development or industry of any kind. We strongly believe that citizen’s constitutionally protected rights can coexist in harmony under the law with both economic development and robust industry.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6">
                                <h3 className="text-2xl font-heading font-bold text-gray-900">A Vibrant Environment</h3>
                                <p className="text-lg text-gray-700 font-serif leading-relaxed">
                                    SML believes that a safe, clean and vibrant environment is essential to sustaining our lives and the lives of our posterity. Louisiana’s land, lakes, bayous, rivers, coastal regions, water aquifers and minerals beneath our surface all work together in a magnificent balance which enriches our lives with sustenance, provides opportunity for independence, and promises a secure future.
                                </p>
                                <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-8">
                                    "If we protect this amazing yet fragile environment, we will prosper and so will our future generations."
                                </p>
                            </div>
                        </div>

                        <div className="bg-brand-blue/5 p-10 rounded-3xl border border-brand-blue/10 space-y-6">
                            <h3 className="text-2xl font-bold font-heading">Coexistence & Mitigation</h3>
                            <div className="space-y-4 text-gray-700 font-serif leading-relaxed">
                                <p>
                                    SML believes that economic development and industry can coexist with a safe, clean and vibrant environment. We believe that all legitimate dangers to our environment must be deeply considered and carefully mitigated, for once we lose the environment that sustains our very lives and livelihoods, no amount of economic development will matter.
                                </p>
                                <p>
                                    We believe there are no legitimate environmental dangers that are beyond mitigation with carefully considered and implemented engineering solutions. We can have a protected environment AND robust industry.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6 pt-8">
                            <h3 className="text-2xl font-bold font-heading flex items-center gap-3 text-brand-red">
                                <Globe size={24} /> Absolute Independence
                            </h3>
                            <p className="text-lg text-gray-700 font-serif leading-relaxed">
                                Finally, SML is absolutely independent. We speak for ourselves alone and we carry no messages or purposes from and for any other organizations. The financial support SML receives comes from individual Louisiana citizens and Louisiana born organizations. We have not sought nor do we receive any financial support from any global or national affiliate groups.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Environment Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-heading font-bold text-gray-900">A Vibrant Environment</h2>
                            <p className="text-lg text-gray-700 font-serif leading-relaxed">
                                SML believes that a safe, clean and vibrant environment is essential to sustaining our lives and the lives of our posterity. Louisiana’s land, lakes, bayous, rivers, coastal regions, water aquifers and minerals beneath our surface all work together in a magnificent balance which enriches our lives with sustenance, provides opportunity for independence, and promises a secure future.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic text-sm text-gray-500 font-serif">
                            If we protect this amazing yet fragile environment, we will prosper and so will our future generations.
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                        <h3 className="text-2xl font-bold font-heading">Coexistence & Mitigation</h3>
                        <div className="space-y-4 text-gray-600 font-serif leading-relaxed">
                            <p>
                                SML believes that economic development and industry can coexist with a safe, clean and vibrant environment. We believe that all legitimate dangers to our environment must be deeply considered and carefully mitigated, for once we lose the environment that sustains our very lives and livelihoods, no amount of economic development will matter.
                            </p>
                            <p>
                                We believe there are no legitimate environmental dangers that are beyond mitigation with carefully considered and implemented engineering solutions. We can have a protected environment AND robust industry.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 pt-8 border-t border-gray-200">
                        <h3 className="text-2xl font-bold font-heading flex items-center gap-3 text-brand-red">
                            <Globe size={24} /> Absolute Independence
                        </h3>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            Finally, SML is absolutely independent. We speak for ourselves alone and we carry no messages or purposes from and for any other organizations. The financial support SML receives comes from individual Louisiana citizens and Louisiana born organizations. We have not sought nor do we receive any financial support from any global or national affiliate groups.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-20 px-6 bg-brand-dark text-white">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold">Our Mission</h2>
                        <div className="w-24 h-1 bg-brand-red mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 pt-8">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-full">
                                    <Shield className="w-6 h-6 text-brand-blue" />
                                </div>
                                <h3 className="text-xl font-bold font-heading uppercase tracking-widest">Rights Defense</h3>
                            </div>
                            <p className="text-gray-300 font-serif leading-relaxed">
                                SML’s mission is to educate and empower the citizens of Louisiana to understand, protect and defend our rights as guaranteed in the Constitution of The United States as well as the Constitution of the State of Louisiana. We will pursue all means lawfully available to challenge and defeat any and all unconstitutional actions of the State in violation of these guarantees.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-full">
                                    <Globe className="w-6 h-6 text-brand-blue" />
                                </div>
                                <h3 className="text-xl font-bold font-heading uppercase tracking-widest">Environmental Protection</h3>
                            </div>
                            <p className="text-gray-300 font-serif leading-relaxed">
                                SML’s additional though equal mission is to educate and empower the citizens of Louisiana to understand, protect and defend our life giving and sustaining environment. We are dedicated to ensuring our fellow citizens are aware of potential environmental dangers and are informed on how to take action to prevent damage to our shared environment. We will pursue all means lawfully available to challenge and defeat any activities by the state or private industry that would place our environment in danger.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Purpose of Government Section */}
            <section className="py-20 px-6 border-b border-gray-100">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
                            <Landmark size={14} /> Governance
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
                            The Purpose of Government
                        </h2>
                        <p className="text-xl text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-8">
                            "The sole purpose of government is to protect the Rights of men and those Rights are Life, Liberty and Property."
                        </p>
                    </div>

                    <div className="space-y-6 text-lg text-gray-700 font-serif leading-relaxed">
                        <p>
                            Every law created, policy enacted and action taken by a government must find its origin and result in obtaining these ends. If laws, policies and actions do not support these ends, then the government has fallen short of the Will of the People.
                        </p>
                        <p>
                            Our Louisiana Constitution established the Louisiana government, authorized it’s powers and set limits on those powers. It must be understood that the Constitution is superior to the government and therefore the government is subordinate to the Constitution’s authority. The Constitution’s authority is found in the Will of the People.
                        </p>

                        <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-xl space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                                <FileText size={160} />
                            </div>
                            <div className="space-y-6 relative z-10">
                                <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">The Preamble</h4>
                                <p className="text-2xl font-serif italic border-l-2 border-brand-red pl-6">
                                    “We, the people of Louisiana, ….desiring to protect individual rights to life, liberty, and property….do ordain and establish this constitution.”
                                </p>
                                <a href="https://legis.la.gov/legis/Law.aspx?d=206274" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline text-sm font-sans uppercase tracking-widest font-bold">Source: legis.la.gov</a>
                            </div>
                        </div>

                        <p>
                            The very first Article and Section of the Constitution repeats the point: <span className="font-bold">Article 1, Section 1. Origin and Purpose of Government</span>. It states that the rights enumerated are "inalienable by the state and shall be preserved inviolate by the state."
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 pb-8">
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                <h5 className="font-bold text-gray-900 mb-2 font-heading">Inalienable</h5>
                                <p className="text-gray-600 font-serif italic text-sm">Your rights cannot be alienated or separated from you by the state.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                <h5 className="font-bold text-gray-900 mb-2 font-heading">Inviolate</h5>
                                <p className="text-gray-600 font-serif italic text-sm">Your rights cannot be violated or broken by the state.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Right to Property section */}
            <section className="py-20 px-6 bg-gray-50 overflow-hidden">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900">Right to Property</h2>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            Of the three foundational Rights our government was formed to protect, Property is among them. The ownership and control of Property is essential to true independence, and independence is essential to one’s Life and Liberty. Our Property is the best guarantor of our freedom and it represents our generational wealth.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 space-y-8">
                        <div className="flex items-center gap-3 text-brand-blue font-bold tracking-widest uppercase text-sm">
                            <Shield size={20} /> Article 1, Section 4
                        </div>
                        <div className="space-y-6 font-serif text-gray-700">
                            <p className="italic font-bold">"Every person has the right to acquire, own, control, use, enjoy, protect, and dispose of private property."</p>
                            <div className="space-y-4 pl-6 border-l-2 border-gray-100 text-sm">
                                <p><span className="font-bold">(B)(1)</span> Property shall not be taken or damaged by the state except for public purposes and with just compensation... (a) for predominant use by any private person or entity; or (b) for transfer of ownership to any private person or entity.</p>
                                <p><span className="font-bold">(3)</span> Neither economic development, enhancement of tax revenue, or any incidental benefit shall be considered in determining whether the taking is for a public purpose.</p>
                                <p><span className="font-bold">(4)</span> Property shall not be taken by any private entity authorized by law to expropriate, except for a public and necessary purpose... whether the purpose is public and necessary shall be a judicial question.</p>
                                <p><span className="font-bold">(5)</span> In every expropriation, a party has the right to trial by jury to determine whether the compensation is just, and the owner shall be compensated to the full extent of his loss.</p>
                            </div>
                        </div>
                        <a href="https://legis.la.gov/legis/Law.aspx?d=206294" target="_blank" rel="noopener noreferrer" className="inline-block text-brand-blue font-bold hover:underline text-sm uppercase tracking-widest mt-4">Full Constitutional Text</a>
                    </div>
                </div>
            </section>

            {/* Legislative Betrayal Section */}
            <section className="py-20 px-6 bg-red-50 relative overflow-hidden">
                <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
                            <Ban size={14} /> The Betrayal
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
                            What the Legislature Has Done
                        </h2>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            In 2020, the State Legislature passed a special law (ACT 61) that subverted the fundamental guarantee of the Right to Property by the Constitution and subordinated Louisiana citizen’s right to property to private corporations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Subordinating property rights to private corporations",
                            "Removing your right to a trial by jury over eminent domain",
                            "Redefining how compensation is addressed",
                            "Usurping Judicial authority to decide “public purpose”",
                            "Granting eminent domain power to foreign corporations",
                            "Perverting mineral “unitization” into a “taking\" power",
                            "Granting immunity from liability to the carbon capture industry",
                            "Granting eventual state ownership of expropriated property"
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3 items-start p-4 bg-white/50 rounded-xl border border-red-100">
                                <Ban size={18} className="text-brand-red mt-1 shrink-0" />
                                <span className="text-gray-800 font-serif text-sm">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-red-200 space-y-6">
                        <h4 className="font-bold font-heading text-xl">The Bills of Betrayal</h4>
                        <div className="flex flex-wrap gap-3">
                            {["ACT 315 (2008)", "ACT 517 (2009)", "ACT 61 (2020)", "ACT 326 (2021)", "ACT 620 (2024)", "ACT 645 (2024)"].map(act => (
                                <a key={act} href="https://legis.la.gov/legis/BillSearch.aspx?sid=last" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-50 hover:bg-red-100 text-brand-red rounded-full text-xs font-bold transition-colors">
                                    {act}
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 font-serif italic">
                            ACT 61 specifically authorized “any storage operator... to exercise the power of eminent domain and to expropriate needed property to acquire surface and subsurface rights”. This is a clear violation of Article 3, Section 12.
                        </p>
                    </div>
                </div>
            </section>

            {/* LACAG / Vote count section (Placeholder for Link) */}
            <section className="py-16 px-6 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl font-bold font-heading">Who Voted for This?</h2>
                        <p className="text-gray-400 font-serif">Track the legislators who voted to subvert your constitutional rights.</p>
                    </div>
                    <a href="https://www.lacag.org" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all shadow-xl">
                        View LACAG Vote Counts
                    </a>
                </div>
            </section>

            {/* SML Action Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-6">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900">What SML is Doing</h2>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed max-w-2xl mx-auto">
                            We are challenging this unconstitutional law and others like it through the legal mechanisms available. We are petitioning the state’s judicial branch to recognize and declare this law unconstitutional.
                        </p>
                    </div>

                    <div className="bg-brand-blue/5 p-8 md:p-12 rounded-[40px] border border-brand-blue/10 relative">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Gavel size={120} className="text-brand-blue" />
                        </div>
                        <div className="space-y-6 relative z-10 text-center">
                            <h3 className="text-2xl font-bold font-heading text-brand-blue">Legal Petition Filed</h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                                Save My Louisiana filed a comprehensive petition in the <span className="font-bold">19th Judicial District Court in Baton Rouge on November 20, 2025</span>. This legal action targets the unconstitutional overreach of the legislature and seeks to restore property rights for all Louisianans.
                            </p>
                            <div className="pt-6">
                                <a href="#" className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg active:scale-95">
                                    <FileText size={20} /> View The Full Petition
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-8">
                        <p className="font-bold text-gray-900 text-3xl font-heading leading-tight italic">
                            "DEFENDING OUR RIGHTS!"
                        </p>
                        <p className="text-gray-500 mt-4 uppercase tracking-[0.2em] text-xs font-bold font-sans">
                            Join the Movement. Secure the Future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-24 px-6 bg-brand-red text-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">Join the Coalition</h2>
                    <p className="text-xl font-serif text-white/90 leading-relaxed">
                        Those you trusted to represent you have failed to fulfill their basic oath. Help us complete this incredibly important work.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-brand-red px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl text-lg">
                            Get Involved
                        </Link>
                        <Link to="/donate" className="bg-brand-dark text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl text-lg">
                            Donate Fund
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
