import React, { useEffect } from 'react';
import { Shield, Scale, Gavel, Home, ArrowLeft } from 'lucide-react';
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
                        Our Constitutionally Guaranteed<br className="hidden md:block" /> Right to Property
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Of the three foundational Rights our government was formed to protect, Property is among them.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 px-6 font-sans">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6 text-lg text-gray-700 font-serif leading-relaxed">
                        <p>
                            Why would the Will of the People specifically name a Right to Property? The ownership and control of Property is essential to true independence, and independence is essential to one's Life and Liberty. Our Property is the best guarantor of our freedom and it represents our generational wealth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-4">
                            <div className="p-3 bg-brand-blue/10 rounded-full w-fit">
                                <Home className="w-6 h-6 text-brand-blue" />
                            </div>
                            <h3 className="text-xl font-bold font-heading">Independence</h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                                Property ownership is the foundation of true independence — freedom from coercion and control by others.
                            </p>
                        </div>
                        <div className="p-8 bg-brand-blue/5 rounded-3xl border border-brand-blue/10 space-y-4">
                            <div className="p-3 bg-brand-blue/10 rounded-full w-fit">
                                <Shield className="w-6 h-6 text-brand-blue" />
                            </div>
                            <h3 className="text-xl font-bold font-heading">Freedom's Guarantor</h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                                Property is the best guarantor of liberty — it creates a sphere of autonomy the state cannot lawfully breach without cause.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-4">
                            <div className="p-3 bg-brand-blue/10 rounded-full w-fit">
                                <Scale className="w-6 h-6 text-brand-blue" />
                            </div>
                            <h3 className="text-xl font-bold font-heading">Generational Wealth</h3>
                            <p className="text-gray-600 font-serif leading-relaxed">
                                Property represents the wealth families build and pass down through generations — a tangible expression of life's work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal Context Section */}
            <section className="py-20 px-6 bg-gray-50 font-sans">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900">Louisiana Constitutional Protections</h2>
                        <p className="text-lg font-serif text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Because of the importance of the "Right to Property," our Louisiana Constitution is very clear as to protections and limits on government power in relation to that Right. Below are excerpts from{' '}
                            <a
                                href="https://legis.la.gov/legis/Law.aspx?d=206287"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-blue hover:underline font-semibold"
                            >
                                Article 1, Section 4: Right to Property
                            </a>.
                        </p>
                    </div>

                    {/* Constitutional Excerpt Cards */}
                    <div className="space-y-8">

                        {/* Section: Every person */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-6">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">Article 1, Section 4</h4>
                            <h3 className="text-xl font-bold font-heading">Right to Property</h3>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                "Every person has the right to acquire, own, control, use, enjoy, protect, and dispose of private property."
                            </p>
                            <a
                                href="https://legis.la.gov/legis/Law.aspx?d=206287"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-blue hover:underline text-sm font-sans block mt-4"
                            >
                                Source: legis.la.gov — Article 1, Section 4
                            </a>
                        </div>

                        {/* Section B(1): Shall not be taken */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-6">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">Article 1, Section 4 — (B)(1)</h4>
                            <h3 className="text-xl font-bold font-heading">Limits on Government Taking</h3>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                "Property <strong className="not-italic text-gray-900">shall not be taken</strong> or damaged by the state or its political subdivisions except for public purposes and with just compensation paid to the owner or into court for his benefit. [...] Property <strong className="not-italic text-gray-900">shall not be taken</strong> or damaged:
                                <br /><br />
                                (a) for predominant use by any private person or entity; or
                                <br />
                                (b) for transfer of ownership to any private person or entity."
                            </p>
                            <a
                                href="https://legis.la.gov/legis/Law.aspx?d=206287"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-blue hover:underline text-sm font-sans block mt-4"
                            >
                                Source: legis.la.gov — Article 1, Section 4(B)(1)
                            </a>
                        </div>

                        {/* Section (3): Economic development */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-6">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">Article 1, Section 4 — (B)(3)</h4>
                            <h3 className="text-xl font-bold font-heading">Economic Development Is Not Justification</h3>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                "Neither economic development, enhancement of tax revenue, or any incidental benefit to the public shall be considered in determining whether the taking [...] is for a public purpose."
                            </p>
                            <a
                                href="https://legis.la.gov/legis/Law.aspx?d=206287"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-blue hover:underline text-sm font-sans block mt-4"
                            >
                                Source: legis.la.gov — Article 1, Section 4(B)(3)
                            </a>
                        </div>

                        {/* Section (4): Private entity */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-6">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">Article 1, Section 4 — (B)(4)</h4>
                            <h3 className="text-xl font-bold font-heading">Private Entity Takings Require Judicial Review</h3>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                "Property <strong className="not-italic text-gray-900">shall not be taken</strong> or damaged by any private entity [...] except for a public and necessary purpose; whether the purpose is public and necessary shall be a judicial question."
                            </p>
                            <a
                                href="https://legis.la.gov/legis/Law.aspx?d=206287"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-blue hover:underline text-sm font-sans block mt-4"
                            >
                                Source: legis.la.gov — Article 1, Section 4(B)(4)
                            </a>
                        </div>

                        {/* Section (5): Just compensation */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 space-y-6">
                            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm">Article 1, Section 4 — (B)(5)</h4>
                            <h3 className="text-xl font-bold font-heading">Right to Just Compensation & Trial by Jury</h3>
                            <p className="text-gray-700 font-serif leading-relaxed italic border-l-4 border-brand-red pl-6">
                                "A party has the right to trial by jury to determine whether the compensation is just, and the owner shall be compensated to the <strong className="not-italic text-gray-900">full extent of his loss</strong>."
                            </p>
                            <a
                                href="https://legis.la.gov/legis/Law.aspx?d=206287"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-blue hover:underline text-sm font-sans block mt-4"
                            >
                                Source: legis.la.gov — Article 1, Section 4(B)(5)
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* Summary & Analysis Section */}
            <section className="py-20 px-6 font-sans">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-brand-blue/10 rounded-full shrink-0 mt-1">
                            <Gavel className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">What the Constitution Demands</h2>
                            <div className="space-y-5 text-lg text-gray-700 font-serif leading-relaxed">
                                <p>
                                    The Constitution is very clear in its intent that property <strong>"shall not be taken"</strong> for use by a private person or entity, for economic development or tax revenue. If a "public purpose" requires property to be taken, that purpose remains a judicial question — not a political one.
                                </p>
                                <p>
                                    Owners are guaranteed just compensation to the <strong>"full extent of his loss"</strong> and the right to a trial by jury to ensure fairness. These are not suggestions — they are constitutional mandates that protect every Louisianan's right to the land, home, and property they have lawfully acquired.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Key Principles Callout */}
                    <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-3xl p-10 space-y-6">
                        <h3 className="text-xl font-bold font-heading text-brand-blue uppercase tracking-wide">Key Constitutional Protections at a Glance</h3>
                        <ul className="space-y-3 text-gray-700 font-serif text-base leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-red font-bold mt-0.5">✦</span>
                                <span>Property <strong>shall not be taken</strong> for predominant use by any private person or entity.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-red font-bold mt-0.5">✦</span>
                                <span><strong>Economic development</strong> or <strong>tax revenue enhancement</strong> do not constitute a valid public purpose.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-red font-bold mt-0.5">✦</span>
                                <span>Whether a taking is for a "public and necessary purpose" is a <strong>judicial question</strong> — not a legislative or executive decision.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-red font-bold mt-0.5">✦</span>
                                <span>Owners have the right to a <strong>trial by jury</strong> to determine just compensation.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-red font-bold mt-0.5">✦</span>
                                <span>Compensation must cover the <strong>full extent of the owner's loss</strong> — not merely market value.</span>
                            </li>
                        </ul>
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
