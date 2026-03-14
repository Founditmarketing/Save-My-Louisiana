import React, { useEffect } from 'react';
import { Gavel, FileText, Shield, Scale, Landmark, Ban, ShieldAlert, ExternalLink, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PropertyRights: React.FC = () => {
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
            houseLink: null,
            houseLinkNote: "Document link pending — original reference was a local file path",
            senateVote: { yes: 39, no: 0, absent: 0 },
            senateLink: null,
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
            senateLink: null,
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
            <section className="relative text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/statecapital.jpg" alt="Louisiana State Capitol" className="w-full h-full object-cover object-[center_80%]" />
                    <div className="absolute inset-0 bg-black/55"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <span className="inline-block bg-brand-red/90 text-white text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-4">
                        Property Rights
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight leading-tight">
                        The purpose of Government & The protection of Private property rights
                    </h1>
                </div>
            </section>

            {/* Section 1: Purpose of Government */}
            <section className="py-20 px-6 bg-brand-dark text-white" id="purpose-of-government">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-4">
                            <Landmark size={14} /> Governance
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold">The Purpose of Government</h2>
                        <div className="space-y-6 text-xl text-gray-300 font-serif leading-relaxed mt-12 max-w-3xl mx-auto">
                            <p>
                                The sole purpose of government is to protect the Rights of men and those Rights are Life, Liberty and Property.
                            </p>
                            <p>
                                Every law created, policy enacted and action taken by a government must find its origin and result in obtaining these ends. If laws, policies and actions do not support these ends, then the government has fallen short of the Will of the People.
                            </p>
                            <p>
                                Our Louisiana Constitution established the Louisiana government, authorized it's powers and set limits on those powers. It must be understood that the Constitution is superior to the government and therefore the government is subordinate to the Constitution's authority. The Constitution's authority is found in the Will of the People. Neither the Legislature, the Executive, nor the Judicial branches of government can extend their authority beyond the powers granted and limited by the Will of the People as codified in the Constitution.
                            </p>
                            <p className="pt-6 font-bold text-white">
                                The very first sentence of our Louisiana Constitution is found in it's Preamble.
                            </p>
                            <p className="italic border-l-4 border-brand-red pl-6 bg-white/5 p-6 rounded-r-xl">
                                "We, the people of Louisiana, ….desiring to protect individual rights to life, liberty, and property….do ordain and establish this constitution."
                                <a href="https://legis.la.gov/legis/Law.aspx?d=206274" target="_blank" rel="noopener noreferrer" className="block mt-4 text-brand-blue hover:underline text-sm font-sans not-italic uppercase tracking-widest font-bold">Source: legis.la.gov</a>
                            </p>
                            <p>
                                The first sentence of the Constitution tells us exactly what the purpose of the government would be. As though to ensure the message was clearly understood, the first Article and Section of the Constitution repeats the point.
                            </p>
                            <p className="italic border-l-4 border-brand-red pl-6 bg-white/5 p-6 rounded-r-xl">
                                <span className="font-bold text-white not-italic block mb-2 font-sans">Article 1, Section 1: Origin and Purpose of Government</span>
                                All government, of right, originates with the people, is founded on their will alone, and is instituted to protect the rights of the individual and for the good of the whole. Its only legitimate ends are to secure justice for all, preserve peace, protect the rights, and promote the happiness and general welfare of the people. <span className="text-brand-red font-bold">The rights enumerated in this Article are inalienable by the state and shall be preserved inviolate by the state.</span>
                                <a href="https://legis.la.gov/legis/Law.aspx?d=206274" target="_blank" rel="noopener noreferrer" className="block mt-4 text-brand-blue hover:underline text-sm font-sans not-italic uppercase tracking-widest font-bold">Source: legis.la.gov</a>
                            </p>
                            <p>
                                Note that Article 1, Section 1 says, <span className="italic">"The rights enumerated in this Article are inalienable by the state and shall be preserved inviolate by the state."</span> <span className="font-bold text-brand-blue">"Inalienable"</span> means your rights cannot be alienated or separated from you by the state. <span className="font-bold text-brand-red">"Inviolate"</span> means they cannot be violated or broken. This statement both restricts the power of the government to separate you from your Rights and obligates the government to ensure your Rights are not violated. The message is clear: <span className="font-bold text-white">not even the government can separate or take away your rights guaranteed by this Constitution.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Our Rights (Article 1, Section 4) */}
            <section className="py-20 px-6" id="our-rights">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900">Our Constitutionally Guaranteed Right to Property</h2>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            Of the three foundational Rights our government was formed to protect, Property is among them. Why would the Will of the People specifically name a Right to Property? The ownership and control of Property is essential to true independence, and independence is essential to one's Life and Liberty. Our Property is the best guarantor of our freedom and it represents our generational wealth.
                        </p>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            Because of the importance of the "Right to Property", our Louisiana Constitution is very clear as to protections and limits on government power in relation to that Right. Below are excerpts from Article 1, Section 4 Right to Property. (<a href="https://legis.la.gov/legis/law.aspx?d=206294" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-semibold">https://legis.la.gov/legis/law.aspx?d=206294</a>)
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Article 1 Section 4 */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-4">
                            <h2 className="text-2xl font-heading font-bold text-gray-900">
                                Article 1, Section 4. Right to Property.
                            </h2>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                Every person has the right to acquire, own, control, use, enjoy, protect, and dispose of private property.
                            </p>
                        </div>

                        {/* B(1) */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-4">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">(B)(1)</h4>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                Property shall not be taken or damaged by the state or its political subdivisions except for public purposes and with just compensation paid to the owner or into court for his benefit. Except as specifically authorized by Article VI, Section 21 of this Constitution property shall not be taken or damaged by the state or its political subdivisions: (a) for predominant use by any private person or entity; or (b) for transfer of ownership to any private person or entity.
                            </p>
                        </div>

                        {/* (3) */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-4">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">(3)</h4>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                Neither economic development, enhancement of tax revenue, or any incidental benefit to the public shall be considered in determining whether the taking or damaging of property is for a public purpose pursuant to Subparagraph (1) of this Paragraph or Article VI, Section 23 of this Constitution.
                            </p>
                        </div>

                        {/* (4) */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-4">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">(4)</h4>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                Property shall not be taken or damaged by any private entity authorized by law to expropriate, except for a public and necessary purpose and with just compensation paid to the owner; in such proceedings, whether the purpose is public and necessary shall be a judicial question.
                            </p>
                        </div>

                        {/* (5) */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-4">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">(5)</h4>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                In every expropriation or action to take property pursuant to the provisions of this Section, a party has the right to trial by jury to determine whether the compensation is just, and the owner shall be compensated to the full extent of his loss. Except as otherwise provided in this Constitution, the full extent of loss shall include, but not be limited to, the appraised value of the property and all costs of relocation, inconvenience, and any other damages actually incurred by the owner because of the expropriation.
                                <a href="https://legis.la.gov/legis/Law.aspx?d=206294" target="_blank" rel="noopener noreferrer" className="block mt-4 text-brand-blue hover:underline text-sm font-sans not-italic uppercase tracking-widest font-bold">Source: legis.la.gov</a>
                            </p>
                        </div>
                    </div>

                    {/* Summary & Analysis */}
                    <div className="flex items-start gap-4 pt-10 border-t border-gray-100">
                        <div className="p-3 bg-brand-blue/10 rounded-full shrink-0 mt-1">
                            <Gavel className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div className="space-y-4 text-lg text-gray-700 font-serif leading-relaxed">
                            <p>
                                The Constitution is very clear in it's intent that property "shall not be taken" for use by a private person or entity, for economic development or tax revenue, and that if a "public purpose" requires property to be taken, "public purpose" would be a judicial question and that the owner must receive "just compensation to the full extent of his loss". The owner is even guaranteed "the right to trial by jury to determine whether the compensation is just."
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Mark Guillory Videos */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl font-heading font-bold text-gray-900">Videos by Mark Guillory</h2>
                    <p className="text-lg text-gray-600 font-serif">Watch these important discussions on property rights and the CCS threat to Louisiana.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { url: "https://www.facebook.com/share/v/17CL9MRomG/", title: "Property Rights Discussion — Part 1" },
                            { url: "https://www.facebook.com/share/v/18jRAek4Ph/", title: "Property Rights Discussion — Part 2" },
                            { url: "https://www.facebook.com/share/v/1PczMXjQbR/", title: "Property Rights Discussion — Part 3" },
                        ].map((video, i) => (
                            <a
                                key={i}
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="h-40 bg-gradient-to-br from-brand-blue/20 to-brand-red/20 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 text-brand-blue ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="font-bold text-gray-900 text-sm mb-1">{video.title}</p>
                                    <p className="text-brand-blue text-xs font-bold uppercase tracking-widest group-hover:underline">Watch on Facebook →</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: What the Legislature Has Done */}
            <section className="bg-brand-red text-white py-6 px-6" id="legislative-betrayal">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3">
                        <ShieldAlert size={24} className="shrink-0" />
                        <p className="text-lg md:text-xl font-heading font-bold uppercase tracking-wide">
                            To Learn How Your Legislator Voted, Click on the Link Under the Vote Count.
                        </p>
                    </div>
                </div>
            </section>

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
                                In 2020, the State Legislature passed a special law (<a href="https://legis.la.gov/legis/ViewDocument.aspx?d=1180294" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-red hover:underline">ACT 61</a>) that subverted the fundamental guarantee of the Right to Property by the Constitution and subordinated Louisiana citizen's right to property to private corporations.
                            </p>
                            <p>
                                In violation of the Constitution, the Legislature authorized "any storage operator is herby authorized…to exercise the power of eminent domain and to expropriate needed property to acquire surface and subsurface rights and property interests necessary…". This was then codified in Louisiana law in Revised Statue, Title 30, Section 1108. (<a href="https://legis.la.gov/legis/Law.aspx?d=670794" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-bold">R.S. 30:1108</a>)
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <Ban className="text-brand-red" size={32} />
                            <h3 className="text-2xl font-bold font-heading">Constitutional Violations</h3>
                        </div>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            In passing this act, the Louisiana Legislature passed a special law in clear violation of the Constitution that gave PRIVATE companies the authority to declare eminent domain over your private property and take that property from you! No where in the Constitution is the Legislature given this power. As a matter of fact, the Legislature is specifically "prohibited" from such action in Article 3, Section 12.
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
                            Giving private corporations the the right, "to exercise the power of eminent domain and to expropriate needed property" is a "special law" granting a special "privilege". No other person or entity has such authority other than the state and its' political subdivisions under the authority of the Constitution and its prescribed limits. The Legislature even further extended this power to "foreign entities"!
                        </p>
                        <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                            <h4 className="font-bold font-sans text-sm uppercase tracking-widest text-brand-blue mb-2">R.S. 19:2:11</h4>
                            <p className="text-gray-700 font-serif italic mb-4">"Subject to any applicable limitations in this Section, any domestic or foreign corporation, limited liability company, or other legal entity created for the purpose of, or engaged in, any of the activities otherwise provided for in this Section.</p>
                            <a href="https://legis.la.gov/legis/Law.aspx?d=81784" target="_blank" rel="noopener noreferrer" className="font-bold text-sm text-brand-blue uppercase tracking-widest hover:underline hover:text-blue-800 transition-colors">Source: legis.la.gov</a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold font-heading">A Legacy of Betrayal (2020-2024)</h3>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            The above is just the surface of the betrayal the Legislature has engaged. Between 2020 and 2024, the Louisiana Legislature passed a series of laws that violated your Right to Property by;
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[
                                "subordinating your property rights to private corporations,",
                                "removing your right to a trial by jury over eminent domain,",
                                "redefining how compensation is to be addressed,",
                                "usurping Judicial authority to decide “public purpose”,",
                                "granting eminent domain power to foreign corporations,",
                                "perverting mineral “unitization” into a “taking\" power,",
                                "passing laws granting special privileges,",
                                "granting immunity from liability to the carbon capture industry,",
                                "granting eventual state ownership of expropriated property,",
                            ].map((v, i) => (
                                <li key={i} className="flex gap-3 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <ShieldAlert size={18} className="text-brand-red mt-1 shrink-0" />
                                    <span className="text-gray-800 font-serif text-sm">{v}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Carbon Capture Sequestration — Eminent Domain Voting Records */}
                    <div className="space-y-8" id="ccs-voting-records">
                        <p className="text-lg text-gray-700 font-serif leading-relaxed font-bold">
                            Shockingly, the list is longer. Below are the bills that subverted your Constitutional rights;
                        </p>

                        <div className="space-y-4">
                            {[
                                { act: "ACT 315 (H.B. 1117) in 2008", url: "https://legis.la.gov/legis/ViewDocument.aspx?d=499939" },
                                { act: "ACT 517 (H.B. 661) in 2009", url: "https://legis.la.gov/legis/ViewDocument.aspx?d=668800" },
                                { act: "ACT 61 (S.B. 353) in 2020", url: "https://legis.la.gov/legis/ViewDocument.aspx?d=1180294" },
                                { act: "ACT 326 (H.B. 572) in 2021", url: "https://legis.la.gov/legis/ViewDocument.aspx?d=1235642" },
                                { act: "ACT 620 (H.B 492) in 2024", url: "https://legis.la.gov/legis/ViewDocument.aspx?d=1382349" },
                                { act: "ACT 645 (H.B. 966) in 2024", url: "https://legis.la.gov/legis/ViewDocument.aspx?d=1382374" }
                            ].map((record, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <span className="font-bold text-lg text-gray-900 font-heading">{record.act}</span>
                                    <a href={record.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-blue-800 transition-colors">
                                        <FileText size={16} /> View Document
                                    </a>
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

            {/* Section 4: What SML Is Doing */}
            <section className="py-24 px-6 bg-white" id="what-sml-is-doing">
                <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700 font-serif leading-relaxed">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 text-center mb-12">What SML is Doing</h2>
                    
                    <p>
                        As is clearly evident, our Constitutional Right to Property is in grave danger and that danger has come from our Legislature. If left unchallenged and unchecked, what other Rights will Legislators attempt to undermine and take from us? We MUST act and correct this negligence of our Legislature.
                    </p>
                    
                    <p>
                        Save My Louisiana is exercising our Rights and challenging this unconstitutional law and others like it through the legal mechanisms available. We are petitioning the state's judicial branch to recognize and declare this law and others like it unconstitutional. Below is the petition SML filed in the 19th Judicial District Court in Baton Rouge on 20 November 2025.
                    </p>
                    
                    <div className="bg-brand-blue/5 p-8 md:p-12 rounded-[30px] border border-brand-blue/10 flex flex-col items-center justify-center text-center my-12 shadow-sm">
                        <Gavel size={48} className="text-brand-blue mb-4" />
                        <h3 className="text-2xl font-bold font-heading text-brand-blue mb-6">Legal Petition Filed</h3>
                        <a href="#" className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg active:scale-95">
                            <FileText size={20} /> View The Full Petition
                        </a>
                    </div>

                    <p className="font-bold">
                        These are your Rights of which those you trusted to represent you in Baton Rouge have trampled and in so doing, failed to fulfill their basic oath of office to uphold the Constitution. Please join us to complete this incredibly important work in <span className="text-brand-red italic">DEFENDING OUR RIGHTS!</span>
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-brand-dark text-white text-center font-sans">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">Defend Your Property Rights</h2>
                    <p className="text-xl font-serif text-gray-300 leading-relaxed">
                        Join us in holding government accountable to the constitutional protections that every Louisianan deserves.
                    </p>
                    <div className="pt-4">
                        <Link
                            to="/contact"
                            className="inline-block bg-brand-red text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-brand-red/90 transition-all shadow-xl text-lg"
                        >
                            Join the Movement
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};
