
import React, { useEffect } from 'react';
import { Shield, Scale, Landmark, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PurposeOfGovernment: React.FC = () => {
    // scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white font-sans text-gray-900">
            {/* Hero Section */}
            <section className="relative text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/statecapital.jpg" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-blue/85 mix-blend-multiply"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-7xl font-heading font-bold tracking-tight">The Purpose of Government</h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        To protect the individual rights to life, liberty, and property.
                    </p>
                </div>
            </section>

            {/* Core Philosophy Section */}
            <section className="py-20 px-6 font-sans">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6 text-lg text-gray-700 font-serif leading-relaxed">
                        <p>
                            The sole purpose of government is to protect the Rights of men and those Rights are Life, Liberty and Property. Every law created, policy enacted and action taken by a government must find its origin and result in obtaining these ends. If laws, policies and actions do not support these ends, then the government has fallen short of the Will of the People.
                        </p>
                        <p>
                            Our Louisiana Constitution established the Louisiana government, authorized its powers and set limits on those powers. It must be understood that the Constitution is superior to the government and therefore the government is subordinate to the Constitution’s authority. The Constitution’s authority is found in the Will of the People. This means neither the Legislature, the Executive, nor the Judicial can extend their power beyond the Will of the People as defined and limited in the Constitution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-4">
                            <div className="p-3 bg-brand-blue/10 rounded-full w-fit">
                                <Shield className="w-6 h-6 text-brand-blue" />
                            </div>
                            <h3 className="text-xl font-bold font-heading">Constitutional Supremacy</h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                                The Constitution is the supreme law of Louisiana, subject only to the US Constitution. All government branches must operate within its limits.
                            </p>
                        </div>
                        <div className="p-8 bg-brand-blue/5 rounded-3xl border border-brand-blue/10 space-y-4">
                            <div className="p-3 bg-brand-blue/10 rounded-full w-fit">
                                <Scale className="w-6 h-6 text-brand-blue" />
                            </div>
                            <h3 className="text-xl font-bold font-heading">The Will of the People</h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                                Government power originates with the people and is founded on their will alone, as instituted to protect individual rights.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Constitutional Excerpts */}
            <section className="py-20 px-6 bg-gray-50 font-sans">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 text-center">Constitutional Guarantees</h2>

                    <div className="space-y-8">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-6">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">The Preamble</h4>
                            <p className="text-2xl font-serif italic text-gray-800 border-l-4 border-brand-red pl-6 leading-relaxed">
                                “We, the people of Louisiana, ….desiring to protect individual rights to life, liberty, and property….do ordain and establish this constitution.”
                            </p>
                            <a href="https://legis.la.gov/legis/Law.aspx?d=206274" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm font-sans block mt-4 px-10">Source: legis.la.gov</a>
                        </div>

                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-6">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">Article 1, Section 1</h4>
                            <h3 className="text-xl font-bold font-heading">Origin and Purpose of Government</h3>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                "All government, of right, originates with the people, is founded on their will alone, and is instituted to protect the rights of the individual and for the good of the whole. Its only legitimate ends are to secure justice for all, preserve peace, protect the rights, and promote the happiness and general welfare of the people. The rights enumerated in this Article are inalienable by the state and shall be preserved inviolate by the state."
                            </p>
                            <a href="https://legis.la.gov/legis/Law.aspx?d=206274" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm font-sans block mt-4 px-10">Source: legis.la.gov</a>
                        </div>

                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-6">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">Article 1, Section 2</h4>
                            <h3 className="text-xl font-bold font-heading">Due Process of Law</h3>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                "No person shall be deprived of life, liberty, or property, except by due process of law."
                            </p>
                            <a href="https://legis.la.gov/legis/Law.aspx?d=206285" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm font-sans block mt-4 px-10">Source: legis.la.gov</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-brand-dark text-white text-center font-sans">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">Defend Your Rights</h2>
                    <p className="text-xl font-serif text-gray-300 leading-relaxed">
                        Help us correct the malfeasance of the Legislature and restore the foundational rights of all Louisianans.
                    </p>
                    <div className="pt-4">
                        <Link to="/contact" className="inline-block bg-brand-red text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-brand-red/90 transition-all shadow-xl text-lg">
                            Join the Movement
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
