import React, { useEffect } from 'react';
import { Ban, ShieldAlert, Gavel, FileText, ExternalLink, Link as LinkIcon, Handshake, Users, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LegislativeBetrayal: React.FC = () => {
    // scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const legislativeActs = [
        { id: "ACT 61", year: "2020", bill: "S.B. 353", link: "https://legis.la.gov/legis/ViewDocument.aspx?d=1180294" },
        { id: "ACT 315", year: "2008", bill: "H.B. 1117", link: "https://legis.la.gov/legis/BillSearch.aspx?sid=last" },
        { id: "ACT 517", year: "2009", bill: "H.B. 661", link: "https://legis.la.gov/legis/BillSearch.aspx?sid=last" },
        { id: "ACT 326", year: "2021", bill: "H.B. 572", link: "https://legis.la.gov/legis/BillSearch.aspx?sid=last" },
        { id: "ACT 620", year: "2024", bill: "H.B. 492", link: "https://legis.la.gov/legis/BillSearch.aspx?sid=last" },
        { id: "ACT 645", year: "2024", bill: "H.B. 966", link: "https://legis.la.gov/legis/BillSearch.aspx?sid=last" }
    ];

    const violations = [
        "Subordinating your property rights to private corporations",
        "Removing your right to a trial by jury over eminent domain",
        "Redefining how compensation is to be addressed",
        "Usurping Judicial authority to decide “public purpose”",
        "Granting eminent domain power to foreign corporations",
        "Perverting mineral “unitization” into a “taking\" power",
        "Passing laws granting special privileges",
        "Granting immunity from liability to the carbon capture industry",
        "Granting eventual state ownership of expropriated property"
    ];

    return (
        <div className="bg-white font-sans text-gray-900">
            {/* Hero Section */}
            <section className="bg-brand-dark text-white py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full filter blur-[100px]"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-7xl font-heading font-bold tracking-tight">Legislative Betrayal</h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        How the Louisiana Legislature subordinated citizen's rights to private corporations.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
                            <ShieldAlert size={14} /> The Betrayal
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
                            What the Legislature Has Done
                        </h2>
                        <div className="text-lg text-gray-700 font-serif leading-relaxed space-y-6">
                            <p>
                                In 2020, the State Legislature passed a special law (<span className="font-bold text-brand-red">ACT 61</span>) that subverted the fundamental guarantee of the Right to Property by the Constitution and subordinated Louisiana citizen’s right to property to private corporations.
                            </p>
                            <p className="bg-gray-50 p-8 rounded-3xl border border-gray-100 italic">
                                In violation of the Constitution, the Legislature authorized “any storage operator is herby authorized…to exercise the power of eminent domain and to expropriate needed property to acquire surface and subsurface rights and property interests necessary…”.
                                <span className="block mt-4 font-sans font-bold text-sm not-italic uppercase tracking-widest">Codified in R.S. 30:1108</span>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <Ban className="text-brand-red" size={32} />
                            <h3 className="text-2xl font-bold font-heading">Constitutional Violations</h3>
                        </div>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            In passing this act, the Louisiana Legislature passed a special law in clear violation of the Constitution that gave PRIVATE companies the authority to declare eminent domain over your private property and take that property from you! No where in the Constitution is the Legislature given this power. As a matter of fact, the Legislature is specifically “prohibited” from such action in <span className="font-bold text-brand-red">Article 3, Section 12</span>.
                        </p>

                        <div className="bg-brand-dark text-white p-10 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm relative z-10">Article 3, Section 12. Prohibited Local and Special Laws</h4>
                            <p className="text-xl font-serif italic border-l-2 border-brand-red pl-6 relative z-10 leading-relaxed">
                                "Section 12.(A) Prohibitions. Except as otherwise provided in this constitution, the legislature shall not pass a local or special law: ... (7) Creating private corporations, or amending, renewing, extending, or explaining the charters thereof; granting to any private corporation, association, or individual any special or exclusive right, privilege, or immunity."
                            </p>
                            <a href="https://legis.la.gov/legis/Law.aspx?p=y&d=206408" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-red font-bold hover:underline text-xs uppercase tracking-widest relative z-10">
                                <ExternalLink size={14} /> Source: legis.la.gov
                            </a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            Giving private corporations the the right, “to exercise the power of eminent domain and to expropriate needed property” is a “special law” granting a special “privilege”. No other person or entity has such authority other than the state and its’ political subdivisions under the authority of the Constitution and its prescribed limits. The Legislature even further extended this power to <span className="font-bold text-brand-blue">“foreign entities”</span>!
                        </p>
                        <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                            <h4 className="font-bold font-sans text-sm uppercase tracking-widest text-brand-blue mb-2">R.S. 19:2:11</h4>
                            <p className="text-gray-700 font-serif italic">“Subject to any applicable limitations in this Section, any domestic or foreign corporation, limited liability company, or other legal entity created for the purpose of, or engaged in, any of the activities otherwise provided for in this Section."</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold font-heading">A Legacy of Betrayal (2020-2024)</h3>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            The above is just the surface. Between 2020 and 2024, the Louisiana Legislature passed a series of laws that violated your Right to Property by:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {violations.map((v, i) => (
                                <div key={i} className="flex gap-3 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <ShieldAlert size={18} className="text-brand-red mt-1 shrink-0" />
                                    <span className="text-gray-800 font-serif text-sm">{v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200 space-y-8">
                        <h4 className="text-xl font-bold font-heading uppercase tracking-widest text-brand-dark">Legislative Record</h4>
                        <p className="text-gray-600 font-serif">Shockingly, the list is longer. Below are the bills that subverted your Constitutional rights:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {legislativeActs.map((act) => (
                                <a
                                    key={act.id}
                                    href={act.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-red transition-all group"
                                >
                                    <div className="text-brand-red font-bold text-lg mb-1">{act.id}</div>
                                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">({act.year})</div>
                                    <div className="text-gray-600 text-sm font-medium">{act.bill}</div>
                                    <ExternalLink size={14} className="mt-4 text-gray-300 group-hover:text-brand-red transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-red/5 p-12 rounded-[40px] border border-brand-red/10 space-y-8 text-center">
                        <h3 className="text-3xl font-heading font-bold text-gray-900">How did this happen?</h3>
                        <p className="text-xl text-gray-700 font-serif leading-relaxed">
                            Who voted for this? Track the legislators who voted to subvert your constitutional rights.
                        </p>
                        <a
                            href="https://www.lacag.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl active:scale-95"
                        >
                            <Users size={20} /> View LACAG Vote Counts
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-brand-dark text-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">Defend Your Property</h2>
                    <p className="text-xl font-serif text-gray-300 leading-relaxed">
                        We MUST act and correct this negligence of our Legislature. Help us challenge these unconstitutional laws.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-brand-red text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl text-lg">
                            Take Action
                        </Link>
                        <Link to="/legal-action" className="bg-white text-brand-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl text-lg">
                            See Our Legal Strategy
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
