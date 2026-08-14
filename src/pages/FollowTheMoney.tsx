import React, { useEffect } from 'react';
import { DollarSign, ChevronRight, AlertTriangle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageSEO } from '../components/PageSEO';

export const FollowTheMoney: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen font-sans selection:bg-brand-red selection:text-white pb-0">
            <PageSEO
                title="Follow the Money: Why Carbon Capture Exists Financially"
                description="The CCS boom in Louisiana is driven by the 45Q tax credit—up to $85 per ton of CO2 stored—equating to billions in corporate rewards at taxpayer expense."
                path="/follow-the-money"
            />

            {/* Editorial Hero */}
            <header className="bg-brand-dark text-white pt-40 pb-32 px-6 relative overflow-hidden border-b-8 border-brand-red">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/political-bribery.png" 
                        alt="Political Bribery transaction" 
                        className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/95 to-brand-dark"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red font-bold tracking-widest uppercase text-sm mb-4 backdrop-blur-sm">
                        <FileText size={16} />
                        Special Report
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight leading-[1.1] max-w-4xl">
                        Why Carbon Capture Exists Financially
                    </h1>
                    <p className="text-2xl md:text-3xl font-serif text-gray-300 max-w-3xl leading-relaxed border-l-4 border-brand-red pl-6">
                        An in-depth analysis of the financial engine driving carbon capture and sequestration (CCS) in Louisiana.
                    </p>
                </div>
            </header>

            {/* Chunk 1: Intro - bg-[#FAF9F6] */}
            <section className="bg-[#FAF9F6] text-gray-900 py-24 px-6 relative">
                <div className="max-w-4xl mx-auto space-y-24">
                    <div id="section-1">
                        <h2 className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4">1. Follow the Money</h2>
                        <h3 className="text-4xl font-heading font-black text-brand-dark mb-8 leading-tight">The Financial Engine Behind Carbon Capture and Sequestration</h3>
                        <div className="prose prose-xl font-serif leading-relaxed max-w-none space-y-6">
                            <p className="text-2xl font-light text-gray-600 leading-relaxed mb-8">
                                Carbon capture and sequestration (CCS) projects are often presented to the public as environmental initiatives designed to reduce greenhouse gas emissions. While environmental goals are frequently emphasized, the rapid expansion of carbon capture infrastructure across the United States is also driven by a complex financial framework built around federal tax credits, carbon markets, energy subsidies, infrastructure fees, and global climate finance.
                            </p>
                            <p>
                                Understanding how money flows through this system helps explain why energy companies, industrial corporations, financial institutions, and investment funds are investing billions of dollars into carbon capture development.
                            </p>
                            <p>
                                At its core, the CCS industry is built on a financial model in which every ton of carbon dioxide captured can generate multiple streams of revenue simultaneously.
                            </p>
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm my-10">
                                <h4 className="font-sans font-bold text-lg mb-4 text-brand-dark uppercase tracking-wide">Those revenue streams can include:</h4>
                                <ul className="grid md:grid-cols-2 gap-4 font-sans text-lg font-medium">
                                    {["Federal tax credits", "Carbon credit markets", "Enhanced oil recovery profits", "Pipeline transportation fees", "Low-carbon fuel incentives", "State tax subsidies", "ESG investment capital"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p>
                                When these incentives are combined, the financial returns associated with large carbon capture projects can reach hundreds of millions — and in some cases billions — of dollars over the lifetime of a project.
                            </p>
                        </div>
                    </div>

                    <div id="section-2">
                        <h2 className="text-4xl font-heading font-black text-brand-dark mb-8 leading-tight">
                            <span className="block text-brand-red font-bold tracking-widest uppercase text-sm mb-4 font-sans">2. Market Transformation</span>
                            How Carbon Dioxide Becomes a Financial Commodity
                        </h2>
                        <div className="prose prose-xl font-serif leading-relaxed max-w-none space-y-6">
                            <p>Carbon dioxide is a naturally occurring component of the Earth's atmosphere and part of the global carbon cycle. Through modern climate policy and financial markets, however, carbon dioxide has increasingly been transformed into an economic commodity.</p>
                            <p>Under current regulatory and financial frameworks, the capture, transportation, and underground storage of carbon dioxide can generate multiple forms of financial value. Federal tax credits, carbon credit markets, and investment programs tied to emissions reduction have created a system in which captured carbon dioxide can produce revenue at several stages of the process.</p>
                            <blockquote className="border-l-4 border-brand-blue pl-6 italic text-2xl text-gray-600 my-10">
                                "Instead of simply being treated as an industrial byproduct, carbon dioxide can now function as a tradable asset within a growing global carbon management economy."
                            </blockquote>
                            <p>Once carbon dioxide is captured from industrial facilities, it can move through a series of financial channels that generate income for project developers, infrastructure operators, and investment partners. These revenue streams may include federal tax credits, pipeline transportation fees, underground storage service payments, and the sale of carbon credits in emissions trading markets.</p>
                            <p>Because several of these incentives can apply to the same ton of captured carbon dioxide, the system allows companies to generate financial value multiple times from a single unit of captured gas. This layered financial structure is one of the primary reasons large energy companies, investment funds, and industrial developers are pursuing carbon capture and sequestration projects across the United States.</p>
                            <p>Understanding how carbon dioxide becomes part of this financial system helps explain the rapid expansion of carbon capture infrastructure and why certain regions—particularly states with existing industrial facilities and suitable geological formations—have become focal points for development.</p>
                        </div>
                    </div>

                    <div id="section-3">
                        <h2 className="text-4xl font-heading font-black text-brand-dark mb-8 leading-tight">
                            <span className="block text-brand-red font-bold tracking-widest uppercase text-sm mb-4 font-sans">3. Federal Policy</span>
                            The Origin of the Carbon Capture Subsidy System
                        </h2>
                        
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold font-sans text-brand-dark mb-4">3.1 The History of Section 45Q</h3>
                                <p className="prose prose-xl font-serif">The financial foundation of the modern carbon capture industry is Section 45Q of the U.S. Internal Revenue Code, commonly referred to simply as "45Q." The 45Q tax credit was originally created by Congress in 2008 as part of the Energy Improvement and Extension Act. At the time, the credit was relatively small and designed primarily to support experimental carbon capture technology and enhanced oil recovery operations. The original version of 45Q provided <strong>$10 per ton</strong> of CO₂ used for enhanced oil recovery and <strong>$20 per ton</strong> permanently stored underground.</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold font-sans text-brand-dark mb-4">3.2 Expansion Under the Bipartisan Budget Act of 2018</h3>
                                <p className="prose prose-xl font-serif">In 2018, Congress dramatically expanded the 45Q program as part of the Bipartisan Budget Act of 2018. The revised law significantly increased the value of the tax credit and extended its availability for new carbon capture projects, increasing incentives to approximately <strong>$35 per ton</strong> for CO₂ used in enhanced oil recovery and <strong>$50 per ton</strong> for CO₂ permanently stored.</p>
                                <a href="https://crsreports.congress.gov/product/pdf/IF/IF11455" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-sans font-bold hover:underline mt-4">Source: Congressional Research Service – Carbon Capture Tax Credit <ChevronRight size={16}/></a>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold font-sans text-brand-dark mb-4">3.3 Further Expansion Under the Inflation Reduction Act</h3>
                                <p className="prose prose-xl font-serif">The most dramatic expansion of 45Q occurred in 2022, when Congress passed the Inflation Reduction Act (IRA). The IRA significantly increased the value of carbon capture incentives and expanded eligibility for new projects. Under the updated system, qualifying projects can receive:</p>
                                <ul className="bg-brand-dark text-white p-8 rounded-2xl font-sans text-xl font-medium list-none mt-6 space-y-4 shadow-lg">
                                    <li className="flex items-center gap-4"><DollarSign className="text-brand-red"/> $85 per metric ton for CO₂ permanently stored</li>
                                    <li className="flex items-center gap-4"><DollarSign className="text-brand-red"/> $60 per metric ton for CO₂ used in enhanced oil recovery</li>
                                    <li className="flex items-center gap-4"><DollarSign className="text-brand-red"/> Up to $180 per metric ton for direct air capture projects</li>
                                </ul>
                                <a href="https://www.irs.gov/credits-deductions/credit-for-carbon-oxide-sequestration" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-sans font-bold hover:underline mt-6">Source: IRS – Carbon Oxide Sequestration Credit <ChevronRight size={16}/></a>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold font-sans text-brand-dark mb-6">3.4 Example: Federal 45Q Revenue Potential</h3>
                                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                                    <table className="w-full text-left font-sans">
                                        <thead className="bg-[#EAE8DD] text-brand-dark uppercase text-sm tracking-wider">
                                            <tr>
                                                <th className="p-4 font-bold">CO₂ Stored/Year</th>
                                                <th className="p-4 font-bold">Credit Rate</th>
                                                <th className="p-4 font-bold">Annual Federal Revenue</th>
                                                <th className="p-4 font-bold">12-Year Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {[
                                                {tons: "500,000 tons", rate: "$85 per ton", annual: "$42.5 million", total: "$510 million"},
                                                {tons: "1 million tons", rate: "$85 per ton", annual: "$85 million", total: "$1.02 billion"},
                                                {tons: "5 million tons", rate: "$85 per ton", annual: "$425 million", total: "$5.1 billion"},
                                                {tons: "10 million tons", rate: "$85 per ton", annual: "$850 million", total: "$10.2 billion"}
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-gray-50">
                                                    <td className="p-4 font-bold text-brand-dark">{row.tons}</td>
                                                    <td className="p-4 text-gray-600">{row.rate}</td>
                                                    <td className="p-4 text-brand-red font-bold">{row.annual}</td>
                                                    <td className="p-4 font-black">{row.total}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREAK IMAGE 1 */}
            <div className="w-full h-96 md:h-[500px] relative">
                <img src="/tax_credits_cash.png" alt="Tax credits turning to cash" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-dark/20"></div>
            </div>

            {/* Chunk 2: Sections 4-6 - bg-white */}
            <section className="bg-white text-gray-900 py-24 px-6 border-b border-gray-100">
                <div className="max-w-4xl mx-auto space-y-20">
                    <div>
                        <h2 className="text-3xl font-heading font-black text-brand-dark mb-6">
                            <span className="text-brand-red mr-3">4.</span> Turning Tax Credits Into Cash
                        </h2>
                        <div className="prose prose-xl font-serif leading-relaxed max-w-none space-y-4">
                            <p>Although 45Q is structured as a tax credit, federal policy allows companies to convert these credits into immediate financial value. Developers can monetize the credit through direct pay, transferability, or tax equity financing.</p>
                            <a href="https://www.irs.gov/credits-deductions/elective-pay-and-transferability" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-sans font-bold hover:underline">Source: U.S. Treasury – Elective Pay and Transferability <ChevronRight size={16}/></a>
                            <p className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 font-sans italic text-base">Example: If a facility generates $100 million in 45Q credits, the developer may sell those credits to an investor for roughly $85–$95 million in cash, providing immediate financing for project construction.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-heading font-black text-brand-dark mb-6">
                            <span className="text-brand-red mr-3">5.</span> ESG Investment Capital
                        </h2>
                        <div className="prose prose-xl font-serif leading-relaxed max-w-none space-y-4">
                            <p>Another major financial driver behind carbon capture development is the global expansion of Environmental, Social, and Governance (ESG) investing. Large investment funds increasingly evaluate companies based on climate-related performance. Companies investing in carbon capture may gain access to climate-focused investment funds, sustainability-linked financing, and lower borrowing costs.</p>
                            <a href="https://www.bloomberg.com/professional/insights/esg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-sans font-bold hover:underline">Source: Bloomberg Intelligence – ESG Market Outlook <ChevronRight size={16}/></a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-heading font-black text-brand-dark mb-6">
                            <span className="text-brand-red mr-3">6.</span> Carbon Credit Markets
                        </h2>
                        <div className="prose prose-xl font-serif leading-relaxed max-w-none space-y-6">
                            <p>Captured carbon dioxide can also generate value in carbon credit markets, where companies purchase credits to offset their emissions.</p>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm font-sans mb-6">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-100 text-brand-dark uppercase text-sm tracking-wider">
                                        <tr>
                                            <th className="p-4 font-bold">Carbon Price</th>
                                            <th className="p-4 font-bold">1 Million Tons CO₂</th>
                                            <th className="p-4 font-bold">5 Million Tons CO₂</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {[
                                            {price: "$10 per ton", one: "$10 million", five: "$50 million"},
                                            {price: "$25 per ton", one: "$25 million", five: "$125 million"},
                                            {price: "$50 per ton", one: "$50 million", five: "$250 million"},
                                            {price: "$100 per ton", one: "$100 million", five: "$500 million"}
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50">
                                                <td className="p-4 font-bold text-gray-600">{row.price}</td>
                                                <td className="p-4 text-brand-dark">{row.one}</td>
                                                <td className="p-4 text-brand-dark font-black">{row.five}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <a href="https://carbonpricingdashboard.worldbank.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-sans font-bold hover:underline">Source: World Bank – Carbon Pricing Dashboard <ChevronRight size={16}/></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chunk 3: Sections 7-9 - bg-gray-50 */}
            <section className="bg-gray-50 text-gray-900 py-24 px-6 relative">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="max-w-4xl mx-auto space-y-20 relative z-10">
                    <div>
                        <h2 className="text-3xl font-heading font-black text-brand-dark mb-6">
                            <span className="text-brand-red mr-3">7.</span> Pipeline Transportation Fees
                        </h2>
                        <div className="prose prose-xl font-serif leading-relaxed max-w-none space-y-6">
                            <p>Carbon capture networks require pipelines to transport CO₂ from capture facilities to underground storage sites. Pipeline operators may charge transportation fees per ton of CO₂ transported.</p>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm font-sans mb-6">
                                <table className="w-full text-left bg-white">
                                    <thead className="bg-gray-100 text-brand-dark uppercase text-sm tracking-wider">
                                        <tr>
                                            <th className="p-4 font-bold">CO₂ Transported</th>
                                            <th className="p-4 font-bold">Fee per Ton</th>
                                            <th className="p-4 font-bold">Annual Pipeline Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {[
                                            {tons: "1 million tons", fee: "$5", rev: "$5 million"},
                                            {tons: "1 million tons", fee: "$15", rev: "$15 million"},
                                            {tons: "5 million tons", fee: "$10", rev: "$50 million"},
                                            {tons: "10 million tons", fee: "$10", rev: "$100 million"}
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50">
                                                <td className="p-4 font-bold text-brand-dark">{row.tons}</td>
                                                <td className="p-4 text-gray-600">{row.fee}</td>
                                                <td className="p-4 text-brand-dark font-black">{row.rev}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <a href="https://www.energy.gov/fecm/carbon-transport" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-sans font-bold hover:underline">Source: U.S. Department of Energy – Carbon Transport Infrastructure <ChevronRight size={16}/></a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-heading font-black text-brand-dark mb-6">
                            <span className="text-brand-red mr-3">8.</span> Enhanced Oil Recovery Revenue
                        </h2>
                        <div className="prose prose-xl font-serif leading-relaxed max-w-none space-y-6">
                            <p>Historically, most carbon dioxide pipelines in the United States have been used for enhanced oil recovery (EOR). In this process, CO₂ is injected into aging oil reservoirs to push additional oil toward production wells. Projects may receive both oil revenue and federal 45Q tax credits, creating two revenue streams at once.</p>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm font-sans mb-6">
                                <table className="w-full text-left bg-white">
                                    <thead className="bg-gray-100 text-brand-dark uppercase text-sm tracking-wider">
                                        <tr>
                                            <th className="p-4 font-bold">CO₂ Injected</th>
                                            <th className="p-4 font-bold">Additional Oil Produced</th>
                                            <th className="p-4 font-bold">Oil Price</th>
                                            <th className="p-4 font-bold">Estimated Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {[
                                            {tons: "1 million tons", oil: "2 million barrels", price: "$75/barrel", rev: "$150 million"},
                                            {tons: "1 million tons", oil: "3 million barrels", price: "$75/barrel", rev: "$225 million"},
                                            {tons: "5 million tons", oil: "10 million barrels", price: "$75/barrel", rev: "$750 million"}
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50">
                                                <td className="p-4 font-bold text-gray-600">{row.tons}</td>
                                                <td className="p-4 text-gray-800">{row.oil}</td>
                                                <td className="p-4 text-gray-600">{row.price}</td>
                                                <td className="p-4 text-brand-dark font-black">{row.rev}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <a href="https://www.energy.gov/fecm/co2-enhanced-oil-recovery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-sans font-bold hover:underline">Source: U.S. Department of Energy – CO₂ Enhanced Oil Recovery <ChevronRight size={16}/></a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-heading font-black text-brand-dark mb-6">
                            <span className="text-brand-red mr-3">9.</span> State and Local Incentives (Louisiana ITEP)
                        </h2>
                        <div className="prose prose-xl font-serif leading-relaxed max-w-none space-y-6">
                            <p>In addition to federal incentives, carbon capture projects may also receive state and local subsidies. In Louisiana, companies may qualify for the Industrial Tax Exemption Program (ITEP), which can significantly reduce property taxes for large industrial investments.</p>
                            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm font-sans mb-6">
                                <table className="w-full text-left bg-white">
                                    <thead className="bg-gray-100 text-brand-dark uppercase text-sm tracking-wider">
                                        <tr>
                                            <th className="p-4 font-bold">Project Investment</th>
                                            <th className="p-4 font-bold">Estimated Property Tax</th>
                                            <th className="p-4 font-bold">80% ITEP Reduction</th>
                                            <th className="p-4 font-bold">Annual Tax Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {[
                                            {inv: "$500 million", tax: "$5 million", itep: "$4 million", save: "$4 million"},
                                            {inv: "$1 billion", tax: "$10 million", itep: "$8 million", save: "$8 million"},
                                            {inv: "$2 billion", tax: "$20 million", itep: "$16 million", save: "$16 million"}
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50">
                                                <td className="p-4 font-bold text-gray-800">{row.inv}</td>
                                                <td className="p-4 text-gray-600">{row.tax}</td>
                                                <td className="p-4 text-gray-500">{row.itep}</td>
                                                <td className="p-4 text-brand-red font-black">{row.save}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <a href="https://www.opportunitylouisiana.gov/incentive/industrial-tax-exemption" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-sans font-bold hover:underline">Source: Louisiana Economic Dev – Industrial Tax Exemption <ChevronRight size={16}/></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREAK IMAGE 2 */}
            <div className="w-full h-96 md:h-[500px] relative">
                <img src="/stacked_revenue.png" alt="Stacked profit tower" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-dark/20"></div>
            </div>

            {/* Chunk 4: Sections 10-12 - bg-brand-dark text-white */}
            <section className="bg-brand-dark text-white py-24 px-6 relative border-t-8 border-brand-red">
                <div className="max-w-4xl mx-auto space-y-20 relative z-10">
                    <div>
                        <h2 className="text-4xl font-heading font-black mb-8 leading-tight">
                            <span className="block text-brand-red font-bold tracking-widest uppercase text-sm mb-4 font-sans">10. Integration</span>
                            The Stacked Revenue Model
                        </h2>
                        <div className="prose prose-xl font-serif text-gray-300 leading-relaxed max-w-none">
                            <p>Carbon capture projects often combine several financial incentives at once.</p>
                            <div className="bg-black/50 border border-white/10 p-8 rounded-2xl font-sans text-center my-10 shadow-xl">
                                <div className="text-lg font-bold mb-2">CO₂ Captured</div>
                                <div className="text-brand-red font-bold text-xl my-1">↓</div>
                                <div className="text-lg font-medium">Federal 45Q Tax Credit</div>
                                <div className="text-brand-red font-bold text-xl my-1">↓</div>
                                <div className="text-lg font-medium">Carbon Credit Markets</div>
                                <div className="text-brand-red font-bold text-xl my-1">↓</div>
                                <div className="text-lg font-medium">ESG Investment Capital</div>
                                <div className="text-brand-red font-bold text-xl my-1">↓</div>
                                <div className="text-lg font-medium">Low-Carbon Fuel Incentives</div>
                                <div className="text-brand-red font-bold text-xl my-1">↓</div>
                                <div className="text-lg font-medium">Pipeline Transportation Fees</div>
                                <div className="text-brand-red font-bold text-xl my-1">↓</div>
                                <div className="text-lg font-medium">Enhanced Oil Recovery Revenue</div>
                                <div className="text-brand-red font-bold text-xl my-1">↓</div>
                                <div className="text-lg font-medium">State Tax Incentives</div>
                                <div className="text-brand-red font-bold text-xl my-1">↓</div>
                                <div className="text-3xl font-black text-white mt-4 uppercase border-t border-brand-red/30 pt-4">Corporate Revenue</div>
                            </div>
                            <p className="font-bold text-2xl text-center text-white">
                                For large projects capturing 5–10 million tons of CO₂ per year, the combined financial value of these incentives can reach hundreds of millions—or even billions—of dollars annually.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-heading font-black mb-6">
                            <span className="text-brand-red mr-3">11.</span> How One Ton of CO₂ Generates Profit at Every Step
                        </h2>
                        <div className="prose prose-lg font-serif text-gray-300 leading-relaxed max-w-none space-y-6">
                            <p>From a financial perspective, each ton of carbon dioxide captured can generate value multiple times as it moves through the carbon capture system. The same ton of CO₂ can produce revenue at several stages of the process.</p>

                            <div className="space-y-6 mt-10">
                                <div className="border-l-4 border-brand-red pl-6 py-2">
                                    <h3 className="font-sans font-bold text-white text-xl mb-2 uppercase">Step 1 — Carbon Capture</h3>
                                    <p>Industrial facilities capture CO₂. It becomes an asset under 45Q, matching up to $85/ton.</p>
                                </div>
                                <div className="border-l-4 border-brand-red pl-6 py-2">
                                    <h3 className="font-sans font-bold text-white text-xl mb-2 uppercase">Step 2 — Pipeline Transportation</h3>
                                    <p>Pipeline operators charge transport fees per ton ($5 to $15).</p>
                                </div>
                                <div className="border-l-4 border-brand-red pl-6 py-2">
                                    <h3 className="font-sans font-bold text-white text-xl mb-2 uppercase">Step 3 — Carbon Storage Services</h3>
                                    <p>Companies owning storage sites charge industrial emitters service fees to permanently dispose of their CO₂.</p>
                                </div>
                                <div className="border-l-4 border-brand-red pl-6 py-2">
                                    <h3 className="font-sans font-bold text-white text-xl mb-2 uppercase">Step 4 — Carbon Credit Markets</h3>
                                    <p>Projects generate credits in voluntary markets where companies purchase offsets.</p>
                                </div>
                                <div className="border-l-4 border-brand-red pl-6 py-2">
                                    <h3 className="font-sans font-bold text-white text-xl mb-2 uppercase">Step 5 — Enhanced Oil Recovery</h3>
                                    <p>CO₂ is injected into oil reservoirs to multiply oil production.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-heading font-black mb-6">
                            <span className="text-brand-red mr-3">12.</span> When These Revenue Streams Are Combined
                        </h2>
                        <div className="prose prose-xl font-serif text-gray-300 leading-relaxed max-w-none bg-black/40 p-10 rounded-3xl space-y-4 border border-white/10">
                            <p>Because multiple incentives can apply to the same ton of carbon dioxide, the total financial value associated with carbon capture can be significant.</p>
                            <p>When combined, the total financial value associated with one ton of carbon dioxide can reach <strong className="text-white">$300 to $500 or more</strong>, depending on the project structure and market conditions.</p>
                            <h3 className="text-2xl font-sans font-bold text-white mt-8 uppercase tracking-widest border-b border-gray-700 pb-2">Why This Matters</h3>
                            <p>The system is designed so that every ton of carbon dioxide moving through the network can generate financial value multiple times, creating a powerful economic incentive to build capture facilities, pipelines, and underground storage hubs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chunk 5: Sections 13-18 - bg-[#F5F5F0] */}
            <section className="bg-[#F5F5F0] text-gray-900 py-24 px-6 border-b border-gray-200">
                <div className="max-w-4xl mx-auto space-y-20">
                    <div>
                        <h2 className="text-4xl font-heading font-black text-brand-dark mb-8 leading-tight">
                            <span className="block text-brand-red font-bold tracking-widest uppercase text-sm mb-4 font-sans">13. Scale & Perspective</span>
                            What $1 Billion in Carbon Capture Subsidies Looks Like
                        </h2>
                        <div className="prose prose-xl font-serif text-gray-800 leading-relaxed max-w-none">
                            <p>The scale of financial incentives supporting carbon capture projects can be difficult to visualize. Numbers such as "billions of dollars" often appear abstract, but those funds represent real economic resources that could otherwise flow into communities, public infrastructure, or local industries.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold font-sans text-brand-dark mb-6">14. Public Services Comparison</h3>
                            <div className="prose prose-lg font-serif text-gray-800 leading-relaxed max-w-none">
                                <p>A billion dollars is large enough to fund major public investments. For example, $1 billion could fund approximately:</p>
                                <ul className="bg-white border border-gray-200 p-6 rounded-xl space-y-3 font-sans mt-4 shadow-sm">
                                    <li>20,000 public school teachers for an entire year at an average salary of $50,000</li>
                                    <li>Major highway construction projects across multiple parishes</li>
                                    <li>Hundreds of rural bridge repairs and replacements</li>
                                    <li>Hospital infrastructure upgrades across the state</li>
                                </ul>
                                <p className="mt-4 text-sm text-gray-500 italic">Public infrastructure and public services often depend on tax revenues generated by local industries. When large industrial projects receive long-term tax exemptions, it shifts how resources are allocated.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold font-sans text-brand-dark mb-6">15. Natural Resource Comparison</h3>
                            <div className="prose prose-lg font-serif text-gray-800 leading-relaxed max-w-none">
                                <p>Many existing industries in Louisiana generate economic value comparable to — or smaller than — the financial incentives offered to individual carbon capture projects.</p>
                                <div className="border border-gray-200 rounded-xl overflow-hidden font-sans my-4 shadow-sm">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-[#EAE8DD] text-brand-dark">
                                            <tr>
                                                <th className="p-3">Industry</th>
                                                <th className="p-3">Annual Economic Value</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white font-medium">
                                            <tr><td className="p-3">Louisiana Crawfish</td><td className="p-3">~$250 million</td></tr>
                                            <tr><td className="p-3">Louisiana Rice</td><td className="p-3">~$500 million</td></tr>
                                            <tr><td className="p-3">Louisiana Fisheries</td><td className="p-3 text-brand-dark font-black">~$1.3 billion</td></tr>
                                            <tr><td className="p-3">Louisiana Nursery</td><td className="p-3 text-brand-dark font-black">~$2.5 billion</td></tr>
                                            <tr><td className="p-3">Louisiana Forestry</td><td className="p-3 text-brand-dark font-black">~$11–13 billion</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <a href="https://www.lsuagcenter.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm font-sans font-bold">Source: LSU AgCenter</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-heading font-black text-brand-dark mb-6">16. Comparing One Large CCS Project</h3>
                        <div className="prose prose-xl font-serif text-gray-800 leading-relaxed max-w-none">
                            <p>A single large carbon capture project capturing 5 million tons of CO₂ per year could generate:</p>
                            
                            <div className="overflow-hidden rounded-2xl shadow-xl mt-6 font-sans border border-brand-red/20 max-w-2xl">
                                <table className="w-full text-left">
                                    <thead className="bg-brand-dark text-white uppercase text-sm tracking-wider">
                                        <tr>
                                            <th className="p-4 font-bold">Revenue Source</th>
                                            <th className="p-4 font-bold">Estimated Annual Value</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        <tr><td className="p-4 font-medium">Federal 45Q Tax Credits</td><td className="p-4 text-brand-red font-bold">$425 million</td></tr>
                                        <tr><td className="p-4 font-medium">Carbon Credit Sales</td><td className="p-4 text-brand-red font-bold">$125 million</td></tr>
                                        <tr><td className="p-4 font-medium">Pipeline Transportation Fees</td><td className="p-4 text-brand-red font-bold">$50 million</td></tr>
                                        <tr><td className="p-4 font-medium">Enhanced Oil Recovery Revenue</td><td className="p-4 text-brand-red font-bold">$750 million</td></tr>
                                        <tr><td className="p-4 font-medium">State Tax Incentives</td><td className="p-4 text-brand-red font-bold">$16 million</td></tr>
                                        <tr className="bg-red-50"><td className="p-4 font-black uppercase text-brand-dark">Estimated Annual Total:</td><td className="p-4 font-black text-3xl text-brand-red">~$1.36 billion / yr</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="font-bold mt-6 text-brand-dark bg-yellow-100 p-4 rounded-xl border border-yellow-300 inline-block">Over a 12-year federal credit period, the federal tax incentives alone could exceed $5 billion.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold font-sans text-brand-dark mb-4">17. Why These Comparisons Matter</h3>
                            <p className="prose prose-lg font-serif text-gray-800 leading-relaxed">
                                Carbon capture projects represent some of the largest industrial subsidies in modern energy policy. At the same time, the physical infrastructure—pipelines, compressor stations, and underground injection wells—must be located within Louisiana communities and landscapes that support agriculture, forestry, fisheries, and other natural resource industries.
                            </p>
                        </div>
                        <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold font-sans text-brand-red mb-4">18. The Broader Economic Question</h3>
                            <p className="prose prose-lg font-serif text-gray-300 leading-relaxed italic">
                                "How should the state balance the financial incentives offered to large industrial developers with the long-term protection of existing industries that depend on Louisiana's land, water, and natural resources?"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BREAK IMAGE 3 */}
            <div className="w-full h-96 md:h-[500px] relative">
                <img src="/industrial_swamp.png" alt="Industrial pipes in swamp" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-dark/20"></div>
            </div>

            {/* Chunk 6: Sections 19-21 - bg-white */}
            <section className="bg-white text-gray-900 py-24 px-6 border-b border-gray-100">
                <div className="max-w-4xl mx-auto space-y-16">
                    <h2 className="text-4xl font-heading font-black text-brand-dark mb-8 leading-tight">
                        <span className="block text-brand-red font-bold tracking-widest uppercase text-sm mb-4 font-sans">19 - 21. Mechanism & Risk</span>
                        Profit Models and Risk Distribution
                    </h2>

                    <div className="prose prose-xl font-serif text-gray-800 leading-relaxed max-w-none space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold font-sans text-brand-dark mb-2">19. The Stacked Profit Model</h3>
                            <p>One of the reasons carbon capture projects attract significant investment is that multiple revenue streams can be layered on top of each other. A single ton of captured carbon dioxide can generate value in several ways at once.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-2xl font-bold font-sans text-brand-dark mb-2">20. Example Financial Stack for a Large CCS Project</h3>
                            <p>Assume a project captures 5 million tons of CO₂ per year. Potential Annual Revenue equates to approximately <strong className="text-brand-red border-b-2 border-brand-red/30 pb-1">$1.36 billion per year</strong>. These figures illustrate why carbon capture development has expanded rapidly following the increase in federal incentives.</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold font-sans text-brand-dark mb-2">21. Who Profits — and Who Carries the Risk?</h3>
                            <p>Understanding the financial incentives also requires examining the other side of the equation. While large industrial developers may receive federal subsidies, tax incentives, and carbon market revenue, the physical infrastructure required to support these projects is located within real communities, across private land, and above critical natural resources.</p>
                            <p className="font-bold border-l-4 border-brand-red pl-6 bg-red-50 p-6 rounded-r-xl mt-6 text-gray-900">
                                This creates an important policy question: who benefits financially from carbon capture infrastructure, and who bears the long-term risks and potential costs if problems occur?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chunk 7: Sections 22-26 - bg-gray-900 text-gray-300 */}
            <section className="bg-gray-900 text-gray-300 py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                
                <div className="max-w-4xl mx-auto space-y-20 relative z-10">
                    <div>
                        <h2 className="text-4xl font-heading font-black text-white mb-8 leading-tight">
                            <span className="block text-brand-red font-bold tracking-widest uppercase text-sm mb-4 font-sans">22. Focus on Louisiana</span>
                            Louisiana: The Emerging Epicenter of Carbon Capture Profits
                        </h2>
                        <div className="prose prose-xl font-serif leading-relaxed max-w-none text-gray-300">
                            <p>In recent years, Louisiana has rapidly become one of the primary targets for carbon capture and sequestration development in the United States. While projects are proposed across several states, the concentration in Louisiana is significantly higher.</p>
                            <p>Louisiana possesses extensive deep geological formations that industry believes may be suitable for underground carbon storage. The state also has one of the largest concentrations of refineries, chemical plants, LNG export terminals, fertilizer plants, and other heavy industrial facilities in North America.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-heading font-black text-white mb-6">23. The Scale of Proposed Carbon Storage in Louisiana</h3>
                        <div className="prose prose-xl font-serif leading-relaxed max-w-none text-gray-300">
                            <p>According to filings submitted to the Louisiana Department of Energy and Natural Resources, dozens of carbon sequestration projects involving more than one hundred proposed injection wells have been announced or submitted for regulatory review across multiple parishes.</p>
                            <a href="https://www.dnr.louisiana.gov" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-sans font-bold hover:underline mb-6">Source: LA Dept. of Energy and Natural Resources <ChevronRight size={16}/></a>
                            <p className="text-lg text-white">Parishes currently associated with CCS project proposals include:</p>
                            <div className="bg-black/30 p-8 rounded-xl columns-2 md:columns-3 font-sans text-sm font-medium text-gray-400 border border-white/5">
                                <ul className="list-disc list-inside space-y-3">
                                    <li>Allen Parish</li>
                                    <li>Ascension Parish</li>
                                    <li>Assumption Parish</li>
                                    <li>Beauregard Parish</li>
                                    <li>Calcasieu Parish</li>
                                    <li>Caldwell Parish</li>
                                    <li>Cameron Parish</li>
                                    <li>Iberville Parish</li>
                                    <li>Livingston Parish</li>
                                    <li>Pointe Coupee Parish</li>
                                    <li>Rapides Parish</li>
                                    <li>Sabine Parish</li>
                                    <li>St. Charles Parish</li>
                                    <li>St. Helena Parish</li>
                                    <li>St. John the Baptist Parish</li>
                                    <li>Vermilion Parish</li>
                                    <li>Vernon Parish</li>
                                    <li>W. Baton Rouge Parish</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="bg-black/40 p-8 border border-white/10 rounded-3xl">
                            <h3 className="text-2xl font-bold font-sans text-white mb-4">24. Estimated Revenue Potential</h3>
                            <p className="font-serif text-gray-400 leading-relaxed mb-4">When the federal incentives, carbon credit markets, and infrastructure revenues discussed earlier are applied to the scale of projects proposed in Louisiana, the financial magnitude becomes clear. Over a 12-year credit period, a single project of 5M tons/year could generate more than $5 billion in federal tax incentives alone.</p>
                        </div>
                        <div className="bg-white text-brand-dark p-8 rounded-3xl shadow-lg">
                            <h3 className="text-2xl font-bold font-sans text-brand-red mb-4">25. What the Statewide Financial Picture Could Look Like</h3>
                            <p className="font-serif leading-relaxed mb-4">If multiple projects move forward, the combined scale could become enormous. Assume 10 major projects operate, each storing 5 million tons of CO₂ per year:</p>
                            <div className="bg-gray-50 p-5 rounded-xl font-sans mt-4 border border-gray-200 shadow-inner">
                                <div className="text-sm text-gray-600 mb-1">Number of Projects: <strong>10</strong></div>
                                <div className="text-sm text-gray-600 mb-1">CO₂ Stored Per Year: <strong>50 million tons</strong></div>
                                <div className="text-sm text-gray-600 mb-2">Annual 45Q Value: <strong className="text-brand-red">$4.25 billion per year</strong></div>
                                <div className="text-sm text-gray-600 pt-2 border-t border-gray-200 mt-2">12-Year Total: <strong className="text-brand-dark text-xl">$51 billion</strong></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-heading font-black text-white mb-6">26. Why Louisiana Has Become the Target</h3>
                        <p className="prose prose-xl font-serif text-gray-300 leading-relaxed max-w-none">
                            The combination of Industrial Carbon Supply (refineries, LNG terminals), Geological Storage Formations (deep saline formations), Existing Energy Infrastructure (pipelines), and Federal Incentives (expansion of 45Q) have created a powerful incentive structure encouraging companies to pursue projects across Louisiana.
                        </p>
                    </div>
                </div>
            </section>

            {/* BREAK IMAGE 4 */}
            <div className="w-full h-96 md:h-[500px] relative border-b-8 border-brand-red">
                <img src="/louisiana_epicenter.png" alt="Louisiana abstraction of pipelines" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-dark/20"></div>
            </div>

            {/* Chunk 8: Sections 27-31 - bg-[#FAF9F6] text-gray-900 */}
            <section className="bg-[#FAF9F6] text-gray-900 py-24 px-6 relative">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="prose prose-xl font-serif leading-relaxed max-w-none">
                        <h3 className="text-3xl font-heading font-black text-brand-dark mb-4 mt-8">27. Public Subsidies Supporting Private Projects</h3>
                        <p>These incentives are funded through the federal tax system and represent a form of public subsidy intended to encourage carbon capture development.</p>

                        <h3 className="text-3xl font-heading font-black text-brand-dark mb-4 mt-16">28. Local Governments and Lost Tax Revenue</h3>
                        <p>While state and parish governments often provide additional incentives like ITEP, they also reduce local tax revenues that support public services. This shrinks funding for schools, law enforcement, fire protection, and roads, shifting the burden toward other taxpayers within the community.</p>

                        <h3 className="text-3xl font-heading font-black text-brand-dark mb-4 mt-16">29. Landowners and Property Rights</h3>
                        <p>Carbon capture infrastructure often requires access to large areas of land. These projects affect landowners through pipeline easements, land use restrictions, and uncertainty surrounding subsurface property rights. In some cases, companies may seek to use eminent domain authority.</p>

                        <h3 className="text-3xl font-heading font-black text-brand-dark mb-4 mt-16">30. Long-Term Liability Questions</h3>
                        <p>Projects store CO₂ underground for centuries, raising questions over responsibility for long-term monitoring. In some regulatory frameworks, responsibility may eventually transfer to the state, meaning future remediation costs could fall on public agencies or taxpayers if problems emerge decades later.</p>
                        
                        <h3 className="text-3xl font-heading font-black text-brand-dark mb-4 mt-16">31. Economic Exposure for Natural Resource Industries</h3>
                        <p>Louisiana's natural-resource economy (agriculture, forestry, crawfish, fisheries, nurseries) collectively represents billions of dollars annually. If environmental changes affect groundwater or wetlands, these industries face profound economic impacts.</p>
                    </div>
                </div>
            </section>

            {/* Chunk 9: Sections 32-35 - bg-white */}
            <section className="bg-white text-gray-900 py-24 px-6 border-y border-gray-200">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div>
                        <h3 className="text-4xl font-heading font-black text-brand-dark mb-8 leading-tight">32. Risk Concentration</h3>
                        <div className="prose prose-xl font-serif text-gray-800 leading-relaxed max-w-none">
                            <p>A key concern is that the financial rewards are distributed broadly, while physical infrastructure and environmental exposure are concentrated locally. This means that host communities experience the greatest direct exposure.</p>
                            
                            <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-lg mt-10 font-sans">
                                <table className="w-full text-left">
                                    <thead className="bg-[#EAE8DD] text-brand-dark text-sm tracking-wider uppercase font-bold">
                                        <tr>
                                            <th className="p-5 border-b border-gray-300">Revenue Stream</th>
                                            <th className="p-5 border-b border-gray-300">How Revenue Is Generated</th>
                                            <th className="p-5 border-b border-gray-300">Potential Area of Economic Exposure</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white text-sm">
                                        <tr><td className="p-5 font-bold">Federal 45Q</td><td className="p-5">Up to $85/ton stored for 12 years</td><td className="p-5 text-gray-600">Federal taxpayers fund the incentive</td></tr>
                                        <tr className="bg-gray-50"><td className="p-5 font-bold">Carbon Credit Markets</td><td className="p-5">Companies sell credits to corporations</td><td className="p-5 text-gray-600">Local ecosystems host the infrastructure</td></tr>
                                        <tr><td className="p-5 font-bold">Enhanced Oil Recovery</td><td className="p-5">CO₂ injected increases oil production</td><td className="p-5 text-gray-600">Oil extraction occurs within specific regions</td></tr>
                                        <tr className="bg-gray-50"><td className="p-5 font-bold">Pipeline Transport Fees</td><td className="p-5">Operators charge fees per ton</td><td className="p-5 text-gray-600">Pipelines cross private land, forests, farms</td></tr>
                                        <tr><td className="p-5 font-bold">Low-Carbon Fuel</td><td className="p-5">Captured CO₂ allows fuels to qualify for credits</td><td className="p-5 text-gray-600">Industrial facilities near communities</td></tr>
                                        <tr className="bg-gray-50"><td className="p-5 font-bold">ESG Investment Capital</td><td className="p-5">Projects attract sustainability funds</td><td className="p-5 text-gray-600">Long-term monitoring in local jurisdictions</td></tr>
                                        <tr><td className="p-5 font-bold">State Tax Incentives</td><td className="p-5">ITEP reduces property tax obligations</td><td className="p-5 text-gray-600">Local governments receive reduced revenue</td></tr>
                                        <tr className="bg-gray-50"><td className="p-5 font-bold">Storage Service Fees</td><td className="p-5">Companies charge industrial emitters</td><td className="p-5 text-gray-600">Injection wells located within parishes</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-xl font-serif text-gray-800 leading-relaxed max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold font-sans text-brand-dark mb-4">33. Where the Money Goes vs. Where the Economic Exposure Occurs</h3>
                        <p>Projects operate within a financial structure allowing multiple revenue streams. At the same time, the physical infrastructure—pipelines, injection wells, and monitoring systems—must be built within communities that support existing industries and natural resources.</p>

                        <h3 className="text-2xl font-bold font-sans text-brand-dark mb-4 mt-12">34. A Defining Question for Louisiana's Future</h3>
                        <p>The rapid expansion of carbon capture proposals raises an important question for Louisiana residents and policymakers. The decisions made today will influence Louisiana’s land use, water resources, and economic structure for decades to come. For many citizens, the question is not simply whether carbon capture technology will expand—but how the benefits, risks, and responsibilities associated with that expansion will be distributed.</p>
                        
                        <h3 className="text-2xl font-bold font-sans text-brand-dark mb-4 mt-12">35. Why This Financial Structure Matters</h3>
                        <p>These incentives have created a powerful economic driver encouraging rapid expansion. Understanding this structure helps provide context for why carbon capture is expanding quickly and why Louisiana has become a focal point.</p>
                    </div>
                </div>
            </section>

            {/* Chunk 10: Section 36 - Final Callout bg-brand-red */}
            <section className="bg-brand-red text-white py-32 px-6 relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 opacity-5 pointer-events-none">
                        <AlertTriangle size={600} />
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-heading font-black mb-10 relative z-10 uppercase tracking-tight">36. The Policy Question</h2>
                    
                    <div className="bg-black/20 p-10 rounded-3xl backdrop-blur-sm border border-white/20 mb-12 relative z-10">
                        <p className="text-2xl md:text-4xl font-serif leading-relaxed mb-0 font-bold text-white italic">
                            "Should the state encourage large-scale carbon storage development through public incentives if the long-term environmental and financial risks are carried primarily by local communities, landowners, and natural-resource industries?"
                        </p>
                    </div>
                    
                    <p className="text-xl font-serif leading-relaxed relative z-10 max-w-3xl mx-auto mb-16 text-red-50">
                        Answering that question requires careful consideration of both the financial benefits and the potential costs associated with these projects. Understanding how money flows through the carbon capture system is an important step toward evaluating whether the long-term trade-offs align with the interests of Louisiana’s people, land, and economy.
                    </p>
                    
                    <div className="relative z-10">
                        <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-brand-red px-12 py-6 rounded-full font-bold uppercase tracking-widest text-lg transition-all hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2 shadow-xl">
                            Join the Conversation <ChevronRight size={24} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};
