
import React, { useEffect } from 'react';
import { Shield, Scale, Ban, FileText } from 'lucide-react';

export const Mission: React.FC = () => {
    // scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white font-sans text-gray-900">
            {/* Hero Section */}
            <section className="bg-brand-dark text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold">Our Mission</h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Defending our foundational rights, ensuring public safety, and guarding our future generations.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <p className="text-lg md:text-xl text-gray-700 font-serif leading-relaxed">
                        <span className="font-bold text-brand-blue">Save My Louisiana</span> is a non-profit organization composed of citizen volunteers dedicated to informing, educating, and empowering fellow Louisiana citizens to defend and protect our foundational rights, ensure our public safety, and guard our future generations.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 font-serif leading-relaxed">
                        Our current efforts are robustly aligned with the <span className="font-bold">Coalition Against Carbon Capture and Sequestration (CCS)</span>. Our role in this vital Coalition is to legally challenge the steps the State Legislature has taken to authorize CCS corporations the power of eminent domain over the property rights of Louisiana citizens as guaranteed in our Louisiana Constitution, protect our life giving and sustaining water sources from possible carbon dioxide contamination, and secure the future of our generations to come.
                    </p>
                </div>
            </section>

            {/* The Purpose of Government */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-brand-blue/10 rounded-full">
                            <Shield className="w-8 h-8 text-brand-blue" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">The Purpose of Government</h2>
                    </div>

                    <div className="space-y-6 text-gray-700 font-serif text-lg leading-relaxed">
                        <p>
                            The sole purpose of government is to protect the Rights of men and those Rights are Life, Liberty and Property. Every law created, policy enacted and action taken by a government must find its origin and result in obtaining these ends. If laws, policies and actions do not support these ends, then the government has fallen short of the Will of the People.
                        </p>
                        <p>
                            Our Louisiana Constitution established the Louisiana government, authorized its powers and set limits on those powers. It must be understood that the Constitution is superior to the government and therefore the government is subordinate to the Constitution’s authority. The Constitution’s authority is found in the Will of the People. This means neither the Legislature, the Executive, nor the Judicial can extend their power beyond the Will of the People as defined and limited in the Constitution.
                        </p>
                        <p>
                            The very first sentence of our Constitution is found in its Preamble:
                        </p>
                        <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-600 my-6 bg-white p-6 rounded-r-lg shadow-sm">
                            “We, the people of Louisiana, ….desiring to protect individual rights to life, liberty, and property….do ordain and establish this constitution.”
                            <a href="https://legis.la.gov/legis/Law.aspx?d=206274" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm block mt-2 not-italic font-sans">Source: legis.la.gov</a>
                        </blockquote>
                        <p>
                            The first sentence of the Constitution tells us exactly what the purpose of the government would be. As though to ensure the message was clearly understood, the first Article and Section of the Constitution repeats the point.
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-6">
                            <h3 className="font-bold text-xl mb-3 font-heading">Article 1, Section 1: Origin and Purpose of Government</h3>
                            <p className="italic">
                                "All government, of right, originates with the people, is founded on their will alone, and is instituted to protect the rights of the individual and for the good of the whole. Its only legitimate ends are to secure justice for all, preserve peace, protect the rights, and promote the happiness and general welfare of the people. The rights enumerated in this Article are inalienable by the state and shall be preserved inviolate by the state."
                                <a href="https://legis.la.gov/legis/Law.aspx?d=206274" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm block mt-2 font-sans not-italic">Source: legis.la.gov</a>
                            </p>
                        </div>

                        <p>
                            Note that Article 1, Section 1 says, “The rights enumerated in this Article are inalienable by the state and shall be preserved inviolate by the state.” “Inalienable” means your rights cannot be alienated or separated from you by the state. “Inviolate” means they cannot be violated or broken. This statement both restricts the power of the government to separate you from your Rights and obligates the government to ensure your Rights are not violated. The message is clear, not even the government can separate or take away your rights guaranteed by this Constitution.
                        </p>
                        <p>
                            In the event the first two declarations are not fully understood, Article 1, Section 2, reiterates the matter and prescribes the ONLY manner these Rights can be taken away.
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-6">
                            <h3 className="font-bold text-xl mb-3 font-heading">Article 1, Section 2: Due Process of Law</h3>
                            <p className="italic">
                                "No person shall be deprived of life, liberty, or property, except by due process of law."
                                <a href="https://legis.la.gov/legis/Law.aspx?d=206285" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm block mt-2 font-sans not-italic">Source: legis.la.gov</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Guaranteed Right to Property */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-brand-red/10 rounded-full">
                            <FileText className="w-8 h-8 text-brand-red" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Our Guaranteed Right to Property</h2>
                    </div>

                    <div className="space-y-6 text-gray-700 font-serif text-lg leading-relaxed">
                        <p>
                            Of the three foundational Rights our government was formed to protect, Property is among them. Why would the Will of the People specifically name a Right to Property? The ownership and control of Property is essential to true independence, and independence is essential to one’s Liberty. Our Property is the best guarantor of our freedom and our generational wealth.
                        </p>
                        <p>
                            Because of the importance of the “Right to Property”, our Louisiana Constitution is very clear as to protections and limits on government power in relation to that Right. Below are excerpts from Article 1, Section 4 Right to Property.
                        </p>

                        <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-brand-red">
                            <h3 className="font-bold text-xl mb-4 font-heading">Article 1, Section 4. Right to Property.</h3>
                            <div className="space-y-4 italic text-gray-600">
                                <p>Every person has the right to acquire, own, control, use, enjoy, protect, and dispose of private property.</p>
                                <p>**(B)(1)** Property shall not be taken or damaged by the state or its political subdivisions except for public purposes and with just compensation paid to the owner or into court for his benefit. Except as specifically authorized by Article VI, Section 21 of this Constitution property shall not be taken or damaged by the state or its political subdivisions: (a) for predominant use by any private person or entity; or (b) for transfer of ownership to any private person or entity.</p>
                                <p>**(3)** Neither economic development, enhancement of tax revenue, or any incidental benefit to the public shall be considered in determining whether the taking or damaging of property is for a public purpose pursuant to Subparagraph (1) of this Paragraph or Article VI, Section 23 of this Constitution.</p>
                                <p>**(4)** Property shall not be taken or damaged by any private entity authorized by law to expropriate, except for a public and necessary purpose and with just compensation paid to the owner; in such proceedings, whether the purpose is public and necessary shall be a judicial question.</p>
                                <p>**(5)** In every expropriation or action to take property pursuant to the provisions of this Section, a party has the right to trial by jury to determine whether the compensation is just, and the owner shall be compensated to the full extent of his loss. Except as otherwise provided in this Constitution, the full extent of loss shall include, but not be limited to, the appraised value of the property and all costs of relocation, inconvenience, and any other damages actually incurred by the owner because of the expropriation.</p>
                            </div>
                            <a href="https://legis.la.gov/legis/Law.aspx?d=206294" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm block mt-4 font-sans font-bold">Read Full Text on legis.la.gov</a>
                        </div>

                        <p>
                            The Constitution is very clear in its intent that property “shall not be taken” for use by a private person or entity, for economic development or tax revenue, and that if a “public purpose” requires property to be taken, “public purpose” would be a judicial question and that the owner must receive “just compensation”. The owner is even guaranteed “the right to trial by jury to determine whether the compensation is just.”
                        </p>
                    </div>
                </div>
            </section>

            {/* What the Legislature Has Done */}
            <section className="py-16 px-6 bg-red-50">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-red-100 rounded-full">
                            <Ban className="w-8 h-8 text-red-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">What the Legislature Has Done</h2>
                    </div>

                    <div className="space-y-6 text-gray-700 font-serif text-lg leading-relaxed">
                        <p>
                            In 2020, the State Legislature passed a special law <a href="https://legis.la.gov/legis/ViewDocument.aspx?d=1180294" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-bold">(ACT 61)</a> that subverted the fundamental guarantee of the Right to Property by the Constitution and subordinated Louisiana citizen’s right to property to private corporations. In violation of the Constitution, the Legislature authorized “any storage operator is hereby authorized…to exercise the power of eminent domain and to expropriate needed property to acquire surface and subsurface rights and property interests necessary…”. This was then codified in Louisiana law in Revised Statue, Title 30, Section 1108. <a href="https://legis.la.gov/legis/Law.aspx?d=670794" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-bold">(R.S. 30:1108)</a>.
                        </p>
                        <p>
                            In taking this act, the Louisiana Legislature passed a special law in clear violation of the Constitution that gave PRIVATE companies the authority to declare eminent domain over your private property and take that property from you! Nowhere in the Constitution is the Legislature given this power. As a matter of fact, the Legislature is specifically “prohibited” from such action in Article 3, Section 12.
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-red-200 my-4">
                            <h3 className="font-bold text-xl mb-3 font-heading text-red-700">Article 3, Section 12. Prohibited Local and Special Laws</h3>
                            <div className="italic text-gray-600 space-y-2">
                                <p>Section 12.(A) Prohibitions. Except as otherwise provided in this constitution, the legislature shall not pass a local or special law:</p>
                                <p>(7) Creating private corporations, or amending, renewing, extending, or explaining the charters thereof; granting to any private corporation, association, or individual any special or exclusive right, privilege, or immunity.</p>
                            </div>
                            <a href="https://legis.la.gov/legis/Law.aspx?p=y&d=206408" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm block mt-2 font-sans not-italic">Source: legis.la.gov</a>
                        </div>

                        <p>
                            Giving private corporations the right, “to exercise the power of eminent domain and to expropriate needed property” is a “special law” granting a special “privilege”. No other person or entity has such authority other than the state and its political subdivisions under the authority of the Constitution and its prescribed limits. But wait, it gets worse. The Legislature even further extended this power to “foreign entities”!
                            <br /><br />
                            <span className="italic">R.S. 19:2:12 “Subject to any applicable limitations in this Section, any domestic or foreign corporation, limited liability company, or other legal entity created for the purpose of, or engaged in, any of the activities otherwise provided for in this Section."</span> <a href="https://legis.la.gov/legis/Law.aspx?d=81784" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm inline-block ml-1 font-sans">(Link)</a>
                        </p>

                        <p>
                            The above is just the surface of the web of deceit and betrayal the Legislature has engaged. Between 2020 and 2024, the Louisiana Legislature passed a series of laws that violate your Right to Property and given private corporations engaged in the carbon capture and sequestration industry dominance over you, removed your right to a trial by jury and redefined how compensation is to be addressed. (ACT 315 (H.B. 1117) in 2008, ACT 517 (H.B. 661) in 2009, ACT 61 (S.B. 353) in 2020, ACT 326 (H.B. 572) in 2021, ACT 620 (H.B 492) in 2024 and ACT 645 (H.B. 966) in 2024.)
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action - What Save My Louisiana is Doing */}
            <section className="py-20 px-6 bg-brand-dark text-white relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full filter blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-10 text-center">
                    <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm mb-4">
                        <Scale className="w-12 h-12 text-brand-blue" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold">What Save My Louisiana is Doing</h2>

                    <div className="text-lg md:text-xl font-serif text-gray-200 space-y-6 leading-relaxed text-left">
                        <p>
                            As is clearly evident, our Constitutional Right to Property is in grave danger and that danger has come from our Legislature. If left unchallenged and unchecked, what other Rights will Legislators attempt to undermine and take from us? We MUST act and correct this malfeasance of our Legislature.
                        </p>
                        <p>
                            Save My Louisiana is exercising our Rights and challenging this unconstitutional law and others like it through the legal mechanisms available. We are petitioning the state’s judicial branch to recognize and declare this law and others like it unconstitutional.
                        </p>
                        <p className="font-bold text-white text-2xl text-center pt-8">
                            "These are your Rights of which those you trusted to represent you in Baton Rouge have trampled and in so doing, failed to fulfill their basic oath of office to uphold the Constitution. Please join us to complete this incredibly important work in DEFENDING OUR RIGHTS!"
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
