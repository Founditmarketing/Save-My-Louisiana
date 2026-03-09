import React, { useEffect } from 'react';
import { Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PropertyRights: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        The Threats
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight leading-tight">
                        Our Constitutionally Guaranteed Right to Property
                    </h1>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 font-serif leading-relaxed">
                    <p>
                        Of the three foundational Rights our government was formed to protect, Property is among them. Why would the Will of the People specifically name a Right to Property? The ownership and control of Property is essential to true independence, and independence is essential to one's Life and Liberty. Our Property is the best guarantor of our freedom and it represents our generational wealth.
                    </p>
                    <p>
                        Because of the importance of the "Right to Property", our Louisiana Constitution is very clear as to protections and limits on government power in relation to that Right. Below are excerpts from{' '}
                        <a
                            href="https://legis.la.gov/legis/Law.aspx?d=206294"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-blue hover:underline font-semibold"
                        >
                            Article 1, Section 4 Right to Property
                        </a>.
                    </p>
                </div>
            </section>

            {/* Constitutional Excerpts */}
            <section className="py-10 px-6 pb-20 bg-gray-50">
                <div className="max-w-4xl mx-auto space-y-8">

                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 pt-10">
                        Article 1, Section 4. Right to Property.
                    </h2>

                    {/* Every person */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-4">
                        <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                            Every person has the right to acquire, own, control, use, enjoy, protect, and dispose of private property.
                        </p>
                    </div>

                    {/* B(1) */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-4">
                        <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">(B)(1)</h4>
                        <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                            Property <strong className="not-italic text-gray-900">shall not be taken</strong> or damaged by the state or its political subdivisions except for public purposes and with just compensation paid to the owner or into court for his benefit. Except as specifically authorized by Article VI, Section 21 of this Constitution property shall not be taken or damaged by the state or its political subdivisions: (a) for predominant use by any private person or entity; or (b) for transfer of ownership to any private person or entity.
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
                            Property <strong className="not-italic text-gray-900">shall not be taken</strong> or damaged by any private entity authorized by law to expropriate, except for a public and necessary purpose and with just compensation paid to the owner; in such proceedings, whether the purpose is public and necessary shall be a judicial question.
                        </p>
                    </div>

                    {/* (5) */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-4">
                        <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">(5)</h4>
                        <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                            In every expropriation or action to take property pursuant to the provisions of this Section, a party has the right to trial by jury to determine whether the compensation is just, and the owner shall be compensated to the <strong className="not-italic text-gray-900">full extent of his loss</strong>. Except as otherwise provided in this Constitution, the full extent of loss shall include, but not be limited to, the appraised value of the property and all costs of relocation, inconvenience, and any other damages actually incurred by the owner because of the expropriation.
                        </p>
                        <a
                            href="https://legis.la.gov/legis/Law.aspx?d=206294"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-blue hover:underline text-sm font-sans block"
                        >
                            Source: legis.la.gov — Article 1, Section 4
                        </a>
                    </div>

                </div>
            </section>

            {/* Summary & Analysis */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-brand-blue/10 rounded-full shrink-0 mt-1">
                            <Gavel className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div className="space-y-4 text-lg text-gray-700 font-serif leading-relaxed">
                            <p>
                                The Constitution is very clear in it's intent that property <strong>"shall not be taken"</strong> for use by a private person or entity, for economic development or tax revenue, and that if a "public purpose" requires property to be taken, "public purpose" would be a judicial question and that the owner must receive <strong>"just compensation to the full extent of his loss"</strong>. The owner is even guaranteed <strong>"the right to trial by jury to determine whether the compensation is just."</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-brand-dark text-white text-center font-sans">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">Defend Your Property Rights</h2>
                    <p className="text-xl font-serif text-gray-300 leading-relaxed">
                        Join us in holding government accountable to the constitutional protections that every Louisianan deserves.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-brand-red text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-brand-red/90 transition-all shadow-xl text-lg"
                        >
                            Join the Movement
                        </Link>
                        <Link
                            to="/donate"
                            className="inline-block bg-white/10 border border-white/30 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/20 transition-all shadow-xl text-lg"
                        >
                            Donate Today
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};
