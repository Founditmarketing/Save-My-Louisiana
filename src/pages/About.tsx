import React, { useEffect } from 'react';
import { Shield, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
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
                    <h1 className="text-4xl md:text-7xl font-heading font-bold tracking-tight">About Us</h1>
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
                        <div className="space-y-6 text-lg text-gray-700 font-serif leading-relaxed mt-8">
                            <p>
                                Save My Louisiana (SML) is a <span className="font-bold text-brand-blue">501c4 non-profit citizen volunteer organization</span> dedicated to educating and empowering fellow Louisiana citizens to defend and protect our foundational rights of Life, Liberty and Property as well as our life sustaining environment for today and for future generations.
                            </p>
                            <p>
                                SML is strongly committed to the constitutionally guaranteed rights of Louisiana citizens to Life, Liberty and Property. We believe the Louisiana Constitution is the supreme law of Louisiana subject only to the Constitution of the United States. We believe these two Constitutions by intention and in fact, guarantee no one citizen’s natural rights can be subverted by another citizen or any industry. We are all, citizen and industry, equal before the law.
                            </p>
                            <p>
                                SML is PRO-economic development, PRO-oil and gas, and PRO-industry. <span className="font-bold text-brand-red">BUT</span>, SML is ANTI any action that would use the power and force of law to undermine Louisiana citizen’s basic, constitutionally guaranteed rights to Life, Liberty and Property for any purpose whatsoever. This includes undermining guaranteed rights for the sake of economic development or industry of any kind. We strongly believe that citizen’s constitutionally protected rights can coexist in harmony under the law with both economic development and robust industry.
                            </p>
                            <p>
                                SML believes that a safe, clean and vibrant environment is essential to sustaining our lives and the lives of our posterity. Louisiana’s land, lakes, bayous, rivers, coastal regions, water aquifers and minerals beneath our surface all work together in a magnificent balance which enriches our lives with sustenance, provides opportunity for independence, and promises a secure future. If we protect this amazing yet fragile environment, we will prosper and so will our future generations.
                            </p>
                            <p>
                                SML believes that economic development and industry can coexist with a safe, clean and vibrant environment. We believe that all legitimate dangers to our environment must be deeply considered and carefully mitigated, for once we lose the environment that sustains our very lives and livelihoods, no amount of economic development will matter. We believe there are no legitimate environmental dangers that are beyond mitigation with carefully considered and implemented engineering solutions. We can have a protected environment AND robust industry.
                            </p>
                            <p>
                                Finally, SML is absolutely independent. We speak for ourselves alone and we carry no messages or purposes from and for any other organizations. The financial support SML receives comes from individual Louisiana citizens and Louisiana born organizations. We have not sought nor do we receive any financial support from any global or national affiliate groups.
                            </p>
                        </div>
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
