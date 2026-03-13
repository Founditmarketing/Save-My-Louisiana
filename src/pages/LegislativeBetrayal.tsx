import React, { useEffect } from 'react';
import { Ban, ShieldAlert, Gavel, FileText, ExternalLink, Link as LinkIcon, Handshake, Users, Landmark, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LegislativeBetrayal: React.FC = () => {
    // scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const violations = [
        "Subordinating your property rights to private corporations",
        "Removing your right to a trial by jury over eminent domain",
        "Redefining how compensation is to be addressed",
        "Usurping Judicial authority to decide \"public purpose\"",
        "Granting eminent domain power to foreign corporations",
        "Perverting mineral \"unitization\" into a \"taking\" power",
        "Passing laws granting special privileges",
        "Granting immunity from liability to the carbon capture industry",
        "Granting eventual state ownership of expropriated property"
    ];

    const votingRecords = [
        {
            year: "2008",
            act: "ACT 315",
            bill: "HB 1117",
            author: "Rep. Jim Morris",
            description: "provides for the use of eminent domain for the storage of carbon dioxide.",
            houseVote: { yes: 95, no: 0, absent: 10 },
            houseLink: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=483670",
            senateVote: { yes: 33, no: 0, absent: 5 },
            senateLink: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=492264",
        },
        {
            year: "2009",
            act: "ACT 517",
            bill: "HB 661",
            author: "Rep. Jim Morris",
            description: "provides for the use of eminent domain for CCS pipelines and injections wells.",
            houseVote: { yes: 97, no: 0, absent: 7 },
            houseLink: null, // broken local file link
            houseLinkNote: "Document link pending — original reference was a local file path",
            senateVote: { yes: 39, no: 0, absent: 0 },
            senateLink: null, // broken local file link
            senateLinkNote: "Document link pending — original reference was a local file path",
        },
        {
            year: "2020",
            act: "ACT 61",
            bill: "SB 353",
            author: "Sen. Sharon Hewitt",
            description: "provides that CCS is a public good as a matter of Louisiana public policy, and provides for eminent domain by private companies for CCS pipelines and injection wells.",
            senateVote: { yes: 36, no: 0, absent: 3 },
            senateLink: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=1171202",
            houseVote: { yes: 98, no: 0, absent: 7 },
            houseLink: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=1177407",
        },
        {
            year: "2021",
            act: "ACT 326",
            bill: "HB 572",
            author: "Rep. Malinda White",
            description: "adds hydrogen, nitrogen, ammonia, compressed air, and noble gases to the list of substances for which eminent domain may be used for underground storage.",
            houseVote: { yes: 92, no: 0, absent: 12 },
            houseLink: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=1221342",
            senateVote: { yes: 37, no: 0, absent: 1 },
            senateLink: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=1232462",
        },
        {
            year: "2024",
            act: "ACT 620",
            bill: "HB 492",
            author: "Rep. Brett Geymann",
            description: "expands eminent domain authority by private corporations for CCS pipelines.",
            houseVote: { yes: 94, no: 4, absent: 7 },
            houseLink: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=1366250",
            senateVote: { yes: 38, no: 0, absent: 1 },
            senateLink: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=1377374",
        },
        {
            year: "2024",
            act: "ACT 645",
            bill: "HB 966",
            author: "Rep. Brett Geymann",
            description: 'authorizes "unitization" for CCS projects, if 75% of the affected landowners agree. Unitization would allow eminent domain to acquire the other 25%.',
            houseVote: { yes: 92, no: 6, absent: 7 },
            houseLink: "https://www.legis.la.gov/legis/ViewDocument.aspx?d=1366351",
            senateVote: { yes: 36, no: 0, absent: 3 },
            senateLink: null, // incomplete ViewDocument.aspx link
            senateLinkNote: "Document link pending — full URL needed",
        },
    ];

    const VoteBlock = ({ chamber, vote, link, linkNote }: { chamber: string; vote: { yes: number; no: number; absent: number }; link: string | null; linkNote?: string }) => (
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest w-20 shrink-0">{chamber}:</span>
            <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">YES-{vote.yes}</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold">NO-{vote.no}</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">ABSENT-{vote.absent}</span>
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1">
                        <ExternalLink size={12} /> View Vote Record
                    </a>
                ) : linkNote ? (
                    <span className="text-amber-600 text-xs italic">[{linkNote}]</span>
                ) : null}
            </div>
        </div>
    );

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

            {/* Voting Records Banner */}
            <section className="bg-brand-red text-white py-6 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3">
                        <AlertTriangle size={24} className="shrink-0" />
                        <p className="text-lg md:text-xl font-heading font-bold uppercase tracking-wide">
                            To Learn How Your Legislator Voted, Click on the Link Under the Vote Count.
                        </p>
                    </div>
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
                                In 2020, the State Legislature passed a special law (<span className="font-bold text-brand-red">ACT 61</span>) that subverted the fundamental guarantee of the Right to Property by the Constitution and subordinated Louisiana citizen's right to property to private corporations.
                            </p>
                            <p className="bg-gray-50 p-8 rounded-3xl border border-gray-100 italic">
                                In violation of the Constitution, the Legislature authorized "any storage operator is herby authorized…to exercise the power of eminent domain and to expropriate needed property to acquire surface and subsurface rights and property interests necessary…".
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
                            In passing this act, the Louisiana Legislature passed a special law in clear violation of the Constitution that gave PRIVATE companies the authority to declare eminent domain over your private property and take that property from you! No where in the Constitution is the Legislature given this power. As a matter of fact, the Legislature is specifically "prohibited" from such action in <span className="font-bold text-brand-red">Article 3, Section 12</span>.
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
                            Giving private corporations the the right, "to exercise the power of eminent domain and to expropriate needed property" is a "special law" granting a special "privilege". No other person or entity has such authority other than the state and its' political subdivisions under the authority of the Constitution and its prescribed limits. The Legislature even further extended this power to <span className="font-bold text-brand-blue">"foreign entities"</span>!
                        </p>
                        <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                            <h4 className="font-bold font-sans text-sm uppercase tracking-widest text-brand-blue mb-2">R.S. 19:2:11</h4>
                            <p className="text-gray-700 font-serif italic">"Subject to any applicable limitations in this Section, any domestic or foreign corporation, limited liability company, or other legal entity created for the purpose of, or engaged in, any of the activities otherwise provided for in this Section."</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold font-heading">A Legacy of Betrayal (2008-2024)</h3>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            The above is just the surface. Between 2008 and 2024, the Louisiana Legislature passed a series of laws that violated your Right to Property by:
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

                    {/* Carbon Capture Sequestration — Eminent Domain Voting Records */}
                    <div className="space-y-8" id="ccs-voting-records">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 border-l-4 border-brand-red pl-4">
                            Carbon Capture Sequestration — Eminent Domain
                        </h2>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            Below is the complete record of legislative acts that have expanded eminent domain powers for Carbon Capture and Sequestration projects in Louisiana.
                        </p>

                        <div className="space-y-6">
                            {votingRecords.map((record) => (
                                <div key={`${record.act}-${record.year}`} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
                                    <div className="flex flex-wrap items-start gap-3">
                                        <span className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold">{record.year}</span>
                                        <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold">{record.act}</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">({record.bill})</span>
                                    </div>
                                    <p className="text-gray-700 font-serif leading-relaxed">
                                        <span className="font-bold">by {record.author}</span> — {record.description}
                                    </p>
                                    <div className="space-y-3 pt-2 border-t border-gray-100">
                                        <VoteBlock chamber="House" vote={record.houseVote} link={record.houseLink || null} linkNote={(record as any).houseLinkNote} />
                                        <VoteBlock chamber="Senate" vote={record.senateVote} link={record.senateLink || null} linkNote={(record as any).senateLinkNote} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* How did this happen? */}
                    <div className="bg-brand-red/5 p-12 rounded-[40px] border border-brand-red/10 space-y-8 text-center" id="how-did-this-happen">
                        <h3 className="text-3xl font-heading font-bold text-gray-900">How did this happen?</h3>
                        <p className="text-xl text-gray-700 font-serif leading-relaxed">
                            Who voted for this? Track the legislators who voted to subvert your constitutional rights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://www.lacag.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl active:scale-95"
                            >
                                <Users size={20} /> View LACAG Vote Counts
                            </a>
                            <a
                                href="https://www.lacag.org/action-center?vvsrc=%2fscorecard"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl active:scale-95"
                            >
                                <Landmark size={20} /> LACAG Scorecard
                            </a>
                        </div>
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
                        <Link to="/property-rights" className="bg-white text-brand-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl text-lg">
                            Property Rights
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
