import React from 'react';
import { ArrowLeft, AlertTriangle, LandPlot, Activity, ImageIcon, Map, Leaf, Tractor, Anchor, Wheat, TreePine, Trees, Fish as FishIcon, Droplets, MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EnvironmentalDangers: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-900 leading-relaxed">

            {/* Hero Section */}
            <section className="relative text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/co2-leak.jpg" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-red/85 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <Link to="/#know" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors uppercase tracking-widest text-xs font-bold">
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                        Environmental &<br />Economic Dangers
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-red-100 max-w-2xl mx-auto">
                        This isn't theoretical. Containment failures have already happened, and Louisiana's landscape is uniquely vulnerable.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-16 lg:space-y-24">

                {/* Section 1: Opening Statement & What This Means */}
                <section className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-brand-red pl-4 mb-4">
                        </h2>
                        <div className="prose prose-lg prose-red font-serif text-gray-700 max-w-none space-y-4">
                            <p>Louisiana’s environment is one of its greatest treasures. Our forests, wetlands, farms, rivers, and aquifers support the livelihoods of families, provide drinking water to communities, and sustain the wildlife and natural beauty that define our state. Beneath this landscape lies a complex network of underground water systems that millions of people depend on every day.</p>
                            <p>Today, these natural resources face growing pressure from large-scale industrial development tied to carbon capture and sequestration (CCS), CO₂ pipelines, and deep subsurface injection projects. While these projects are often promoted as climate solutions or economic opportunities, they also raise serious environmental questions that deserve careful public scrutiny.</p>
                            <p>Industrial injection at massive scale introduces new uncertainties beneath the ground—changes in underground pressure, interactions with natural faults and old wells, and the potential movement of fluids through geological formations that have supported freshwater systems for generations. Louisiana’s aquifers, wetlands, and ecosystems are not just geological formations; they are living resources that sustain communities, agriculture, forestry, and wildlife.</p>
                            <p>Understanding the potential environmental consequences of these projects is essential. The purpose of this section is to examine the risks, explain the science, and provide citizens with the information needed to evaluate how these developments could affect Louisiana’s land, water, and natural heritage.</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">What This Means for Louisiana Families</h3>
                        <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                            <p>Carbon capture and carbon storage are often discussed in technical or policy terms, but the decisions surrounding these projects ultimately affect the daily lives of Louisiana residents. Pipelines, injection wells, and related industrial infrastructure are not built in abstract locations—they are built near farms, forests, wetlands, towns, and family properties.</p>
                            <p>For many Louisiana residents, the questions surrounding carbon storage are practical ones:</p>
                            <ul className="list-disc pl-6 space-y-2 text-brand-red font-bold">
                                <li>Will this affect the water we drink?</li>
                                <li>Will it affect the land we farm or hunt?</li>
                                <li>Will pipelines cross private property?</li>
                                <li>What happens if something goes wrong?</li>
                            </ul>
                            <p>Understanding how these projects interact with Louisiana’s land, water, and communities is important not only for policymakers, but for the citizens who live and work in these regions.</p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Why Louisiana & The Science */}
                <section className="space-y-12">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-brand-red pl-4 mb-4">
                            Why Louisiana Is Being Targeted for CCS Development
                        </h2>
                        <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                            <p>Louisiana has become one of the primary locations in the United States for proposed carbon capture and sequestration projects.</p>
                            <p>Several factors make the state attractive for this type of development. Louisiana has a long history of oil and gas production, extensive industrial infrastructure, and geological formations that industry believes may be capable of storing carbon dioxide underground.</p>
                            <p>Because of these factors, companies have proposed numerous CCS projects across multiple Louisiana parishes. While this concentration of projects may offer certain economic opportunities, it also means Louisiana communities may experience a greater share of the environmental and infrastructure risks associated with large-scale carbon storage.</p>
                            <p>Understanding why Louisiana is at the center of these proposals helps explain why the issue has become increasingly important for residents across the state.</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-brand-red pl-4 mb-4">
                            Understanding the Effects of CO₂ Pipelines and Carbon Storage on the Environment
                        </h2>
                        <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                            <p>Before examining the environmental dangers associated with carbon capture and storage, it is important to understand how the system works and why large networks of pipelines and underground injection wells are being proposed across Louisiana.</p>
                            <p>Carbon dioxide (CO₂) is a naturally occurring gas that exists in the Earth’s atmosphere and is produced by many natural processes, including respiration and plant decay. However, industrial facilities such as power plants, chemical plants, fertilizer facilities, and refineries also produce large quantities of CO₂ as a byproduct of energy production and manufacturing.</p>
                            <p>Carbon capture projects are designed to intercept this gas before it enters the atmosphere. The CO₂ is separated from industrial emissions using specialized equipment and then purified so it can be transported.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Compression and Transportation</h3>
                            <p className="font-serif text-gray-700 text-lg">Once captured, the CO₂ must be compressed to extremely high pressures. Under these conditions, carbon dioxide enters what scientists call a supercritical state, where it behaves partly like a gas and partly like a liquid. This dense form allows large volumes of CO₂ to be transported efficiently through pipelines. The compressed CO₂ is then transported through dedicated pipelines that can stretch hundreds of miles from industrial facilities to underground storage sites. Across Louisiana, hundreds of miles of new pipelines have been proposed to move captured CO₂ from industrial plants to injection wells.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Underground Storage</h3>
                            <p className="font-serif text-gray-700 text-lg">At the storage site, the compressed CO₂ is injected deep underground into porous rock formations thousands of feet below the surface. These formations are typically saline aquifers or depleted oil and gas reservoirs that are believed to be capable of storing large volumes of carbon dioxide. The intention is for the injected CO₂ to remain trapped within these rock layers for long periods of time, sealed beneath layers of impermeable rock that act as a cap.</p>
                        </div>
                    </div>

                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                        <h3 className="text-2xl font-bold text-red-900 mb-4">What Happens if a Pipeline Ruptures</h3>
                        <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                            <p>Although carbon dioxide is not flammable, it behaves very differently from ordinary atmospheric gases when transported under high pressure. If a pipeline carrying compressed CO₂ ruptures, the sudden pressure drop causes the gas to rapidly expand, <strong>cooling to temperatures as low as negative 100 degrees Fahrenheit</strong>.</p>
                            <p>This rapid expansion can create extremely cold temperatures and may form dry ice particles around the rupture site. The escaping gas can also produce a dense cloud that spreads outward from the release point.</p>
                            <p>Because CO₂ is heavier than air, the gas tends to settle in low-lying areas rather than rising and dispersing quickly. In valleys, wetlands, or drainage areas, this type of cloud can linger and displace oxygen in the surrounding air.</p>
                            <p>In 2020, a CO₂ pipeline rupture near Satartia, Mississippi released a large plume of carbon dioxide that spread through the surrounding area. Dozens of residents required medical attention, and vehicles stalled as oxygen levels in the air dropped.</p>
                        </div>
                        <div className="mt-6 rounded-2xl overflow-hidden shadow-md max-w-xl mx-auto border border-red-200">
                            <img src="/pipeline-rupture-bayou.png" alt="Gas Pipeline Rupture in Louisiana Bayou" className="w-full h-auto object-cover" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Why This Matters for Louisiana</h3>
                            <p className="font-serif text-gray-700 text-lg">Louisiana’s landscape includes extensive wetlands, forests, and low-lying terrain where heavier-than-air gases could accumulate if a large release occurred. Many proposed pipeline routes also cross remote areas where emergency response and containment could be challenging. As the state considers the expansion of carbon capture infrastructure, it is important for citizens and policymakers to understand not only how these systems are designed to operate, but also what can happen when failures occur. Understanding the technology is the first step toward evaluating the potential environmental risks associated with large-scale CO₂ transportation and underground injection.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Infrastructure and Water Demand</h3>
                            <p className="font-serif text-gray-700 text-lg">Many carbon capture projects are associated with large industrial facilities that require significant amounts of electricity, water, and transportation infrastructure. Facilities involved in hydrogen production, biofuels, chemical processing, or carbon capture operations may place additional demands on local water supplies, power systems, and transportation networks. In regions where groundwater already supports agriculture, municipal water systems, and existing industries, increased industrial demand may place additional pressure on local water resources.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Emergency Response Challenges in Rural Louisiana</h3>
                        <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                            <p>Responding to a large-scale carbon dioxide release presents unique challenges that differ significantly from other industrial incidents. Unlike fires or chemical spills that produce visible smoke or flames, CO₂ releases may be difficult to detect and can spread silently across the landscape.</p>
                            <p>Carbon dioxide is colorless and odorless. When released in large quantities, it can form dense clouds that remain close to the ground, particularly in low-lying areas such as wetlands, drainage ditches, valleys, and bayous. In rural environments where terrain naturally channels air movement, these clouds may travel along the landscape before dispersing.</p>
                            <p>Many Louisiana parishes rely heavily on volunteer fire departments and small local emergency response agencies. These departments often operate with limited equipment and personnel, and specialized training for large-scale CO₂ releases may not currently be available.</p>
                            <p>In areas such as forests, wetlands, and agricultural regions, road access may be limited. Remote pipeline corridors and injection sites could require emergency responders to navigate difficult terrain or waterways in order to reach an incident site. These logistical challenges raise important questions about preparedness, response times, and the resources that would be required to manage a large CO₂ release in rural Louisiana communities.</p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Proof of Failures */}
                <section className="space-y-8 border-t border-gray-200 pt-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-brand-red pl-4 mb-4">
                            Proof of Failures
                        </h2>
                        <p className="text-lg text-gray-700 font-serif">
                            Advocates of carbon capture and sequestration often describe the technology as safe, proven, and ready for widespread expansion. Yet real-world events have already demonstrated that serious failures can and do occur when large volumes of compressed carbon dioxide are transported or injected underground. Four incidents in particular serve as stark warnings.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-1 gap-12">
                        {/* Satartia */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                            <h3 className="font-bold text-2xl text-red-900 mb-2 border-b border-red-100 pb-2">Satartia, Mississippi: When a CO₂ Pipeline Failed</h3>
                            <div className="prose prose-lg font-serif text-gray-700 max-w-none">
                                <p>On February 22, 2020, a CO₂ pipeline operated by Denbury ruptured near the small town of Satartia, Mississippi. The rupture released a large plume of compressed carbon dioxide that quickly spread across the surrounding area.</p>
                                <p>Unlike natural gas, carbon dioxide is heavier than air. When released in large quantities, it can accumulate in low-lying areas and displace oxygen. Residents reported sudden breathing difficulties, dizziness, confusion, and loss of motor control. Vehicles stalled as engines were starved of oxygen.</p>
                                <p>The incident sent dozens of people to local hospitals and required the evacuation of hundreds of residents. Emergency responders later reported that the event exposed major gaps in training and preparedness for CO₂ pipeline emergencies.</p>
                                <p>The Satartia rupture demonstrated that while carbon dioxide is commonly described as non-toxic, high concentrations can quickly create life-threatening conditions when released unexpectedly.</p>
                            </div>
                            <div className="max-w-2xl mx-auto w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-red-200 mt-6">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/yGIXeWktiWU"
                                    title="Satartia Incident Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Decatur */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                            <h3 className="font-bold text-2xl text-red-900 mb-2 border-b border-red-100 pb-2">Decatur, Illinois: The Reality of Large-Scale CO₂ Injection</h3>
                            <div className="prose prose-lg font-serif text-gray-700 max-w-none">
                                <p>The carbon storage project in Decatur, Illinois, operated by Archer Daniels Midland (ADM), is often cited as a flagship example of carbon capture and storage in the United States. The project injects captured carbon dioxide deep underground into a saline formation for long-term storage.</p>
                                <p>While the project has provided valuable scientific data, it has also highlighted the complexity and risks associated with underground injection at industrial scale. Monitoring programs have documented induced seismic activity, meaning small earthquakes triggered by changes in underground pressure from injection.</p>
                                <p>Induced seismicity is a known risk of subsurface fluid injection, and similar effects have been observed in other types of underground injection operations. These events underscore the importance of careful site selection, monitoring, and long-term management.</p>
                                <p>The Decatur project demonstrates that even highly monitored and carefully designed carbon storage projects involve uncertainties that must be taken seriously when considering expansion to new locations.</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-red-200">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/ckeoUanNgmU"
                                        title="Decatur CO2 Leak Update"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-red-200">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/GRN-3RWCefk"
                                        title="Decatur Incident Analysis"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Petra Nova & Gorgon */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-xl text-red-900 mb-3">Petra Nova, Texas: Billions Spent, Then Shut Down</h3>
                                <p className="font-serif text-gray-700 mb-4">The Petra Nova carbon capture project near Houston, Texas, was once promoted as one of the largest and most successful carbon capture facilities in the world. Petra Nova began operating in 2017 and received substantial financial support. However, in 2020 the facility was shut down after only three years of operation.</p>
                                <p className="font-serif text-gray-700">The operators cited economic challenges tied to falling oil prices and the high cost of operating the system. During its operation, the project frequently failed to meet its intended capture targets. The shutdown raised broader questions about the economic viability of carbon capture projects that depend heavily on subsidies and favorable market conditions to operate.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-xl text-red-900 mb-3">Gorgon Project, Australia: Promised Storage That Fell Far Short</h3>
                                <p className="font-serif text-gray-700 mb-4">The Gorgon carbon storage project operated by Chevron in Western Australia was designed to capture and inject millions of tons of carbon dioxide and was presented as one of the largest carbon storage efforts in the world.</p>
                                <p className="font-serif text-gray-700">When approved, the project was expected to capture and store roughly 80 percent of the CO₂ emissions generated by the facility. However, technical problems delayed the program for years. Even when operational, it captured and stored significantly less carbon dioxide than originally promised, forcing the operator to purchase carbon offset credits.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 text-white p-8 rounded-3xl mt-8">
                        <h3 className="text-2xl font-bold text-brand-red mb-4">Lessons from These Projects</h3>
                        <ul className="list-disc pl-6 space-y-2 font-serif text-lg mb-6">
                            <li>CO₂ pipelines can pose serious safety risks if failures occur.</li>
                            <li>Underground injection can create complex geological challenges that require constant monitoring.</li>
                            <li>Carbon capture facilities are expensive and often depend heavily on government subsidies.</li>
                            <li>Even the largest and most heavily promoted projects have struggled to meet performance expectations.</li>
                        </ul>
                        <p className="font-serif text-gray-300">As Louisiana becomes a focal point for proposed carbon capture projects and CO₂ pipeline networks, these real-world experiences provide valuable lessons. Responsible decision-making requires more than promises—it requires honest evaluation of the technology's real-world performance.</p>
                    </div>
                </section>

                {/* Section 4: Louisiana's Vulnerability */}
                <section className="space-y-12 border-t border-gray-200 pt-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-brand-red pl-4 mb-4">
                            Louisiana: The Emerging Epicenter of Carbon Storage Development
                        </h2>
                        <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                            <p>Louisiana possesses extensive geological formations that industry believes may be suitable for underground carbon storage. The state also has an existing network of pipelines, refineries, chemical plants, and industrial facilities that produce large volumes of carbon dioxide as part of normal operations.</p>
                            <p>According to filings submitted to the Louisiana Department of Energy and Natural Resources, dozens of carbon sequestration projects involving more than one hundred proposed injection wells have been announced or submitted for regulatory review.</p>
                            <p>While this concentration of projects may create economic opportunities for certain sectors, it also means that Louisiana communities, landowners, and ecosystems could bear a disproportionate share of the environmental and infrastructure risks associated with large-scale carbon sequestration.</p>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-orange-100 p-3 rounded-full shrink-0">
                                <LandPlot size={24} className="text-orange-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">The "Pincushion" Effect</h3>
                        </div>
                        <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4 mb-6">
                            <p>Louisiana’s subsurface is already heavily perforated from more than a century of oil and gas development. The state has over <strong>400,000 documented oil and gas wells</strong>, many of which were drilled and abandoned long before modern environmental regulations existed. A large number of these wells were plugged prior to 1950 using outdated materials and standards that were never designed to withstand long-term underground pressure changes.</p>
                            <p>These older “legacy wells” can act like vertical pathways through the rock layers beneath Louisiana. If large volumes of carbon dioxide are injected underground, the increased pressure within the storage formation may seek the weakest available routes. In areas with dense historical drilling, those routes can include old wells that no longer have reliable seals.</p>
                            <p>This situation is sometimes described as a “pincushion effect”—a landscape where thousands of old wellbores puncture the geologic layers that are supposed to contain injected CO₂. Each poorly sealed well represents a potential pathway through which gas could migrate upward toward groundwater zones or the surface.</p>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-orange-200 shadow-sm bg-white max-w-2xl mx-auto">
                            <img src="/pincushion-effect-diagram.png" alt="Pincushion Effect in Louisiana Geology" className="w-full h-auto object-cover" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-start gap-3 mb-3">
                                <Activity size={24} className="text-brand-red shrink-0 mt-1" />
                                <h3 className="text-2xl font-bold text-gray-900">A Web of Risk</h3>
                            </div>
                            <p className="font-serif text-gray-700 text-lg mb-4">More than 700 miles of new CO₂ pipelines are proposed across Louisiana. Many of these planned routes pass through environmentally sensitive areas, including the fragile wetlands of the Atchafalaya Basin, one of the largest and most important river swamp ecosystems in North America.</p>
                            <p className="font-serif text-gray-700 text-lg">A pipeline rupture in this environment could release large volumes of compressed carbon dioxide into wetlands that are extremely difficult to access. Emergency response and containment efforts in such remote terrain would be challenging, increasing the potential for environmental damage and delayed mitigation.</p>
                        </div>
                        <div>
                            <div className="flex items-start gap-3 mb-3">
                                <Trees size={24} className="text-brand-red shrink-0 mt-1" />
                                <h3 className="text-2xl font-bold text-gray-900">Industrialization of Rural Landscapes</h3>
                            </div>
                            <p className="font-serif text-gray-700 text-lg mb-4">Carbon capture infrastructure involves far more than underground injection wells. Large-scale CCS systems require a network of industrial components including compressor stations, pipeline corridors, monitoring wells, access roads, and supporting facilities.</p>
                            <p className="font-serif text-gray-700 text-lg">These installations can introduce industrial activity into landscapes that have historically been dominated by forests, farms, wetlands, and rural communities. Pipeline corridors often require vegetation clearing and long-term access easements that can fragment forests and alter wildlife habitats.</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
                        <div className="max-w-3xl mx-auto space-y-6">
                            <Map size={48} className="mx-auto text-brand-blue opacity-50" />
                            <h3 className="text-2xl font-bold text-gray-900">CO₂ Pipeline Network in Louisiana</h3>
                            <p className="font-serif text-gray-700 text-lg">The map below illustrates the growing network of existing and proposed carbon dioxide pipelines across Louisiana. Many of these proposed routes pass through rural communities, forests, agricultural land, and environmentally sensitive areas such as the Atchafalaya Basin.</p>
                            <div className="rounded-2xl overflow-hidden shadow-md max-w-2xl mx-auto border border-gray-200 mt-4">
                                <img src="/louisiana-pipeline-map.png" alt="CO2 Pipeline Network Map in Louisiana" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Threats to Wildlife and Wetlands */}
                <section className="space-y-8 border-t border-gray-200 pt-16">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-green-600 pl-4 mb-4">
                            Threats to Wildlife and Wetlands
                        </h2>
                        <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                            <p>Louisiana’s wetlands and coastal ecosystems represent one of the most biologically productive environments in North America. These landscapes support vast populations of fish, birds, reptiles, amphibians, and mammals while serving as critical nursery grounds for Gulf fisheries that sustain both local economies and national seafood markets.</p>
                            <p>The state’s wetlands also play an essential role in protecting communities from storm surge, filtering pollutants from water, and maintaining the natural balance of coastal ecosystems.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                            <Droplets size={32} className="text-green-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Ecosystem Sensitivity</h3>
                            <p className="font-serif text-gray-700">Small shifts in acidity or salinity can disrupt delicate biological processes. If carbon dioxide leaks into shallow groundwater systems, it can dissolve into water and form carbonic acid, lowering pH levels. Acidification can affect organisms that rely on calcium carbonate to form shells, including oysters and crawfish.</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                            <Leaf size={32} className="text-green-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Habitat Disruption</h3>
                            <p className="font-serif text-gray-700">Pipeline construction disturbs wetland environments. Installing corridors often requires clearing vegetation, dredging channels, and altering soil structures. This construction fragments habitats used by migratory birds and amphibians, and can alter natural drainage patterns, increasing erosion.</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                            <FishIcon size={32} className="text-green-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Risks to Coastal Fisheries</h3>
                            <p className="font-serif text-gray-700">Louisiana’s coastal fisheries depend on healthy estuaries where freshwater mixes with saltwater. If CO₂ were to enter wetland waters, the resulting acidification could disrupt these nursery environments and impact the very species that support our $2.4 billion seafood industry.</p>
                        </div>
                    </div>

                    <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-lg text-center mt-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-4">Why Wetlands Can Trap CO₂ Plumes</h3>
                        <p className="font-serif text-lg text-gray-200 max-w-3xl mx-auto">
                            Because CO₂ is heavier than air, it does not immediately rise and disperse. Instead, it tends to settle and move along the ground, flowing into low-lying areas much like water. Louisiana’s landscape contains vast regions of swamps, marshes, and bayous where the terrain naturally forms shallow basins. In these environments, standing water and dense vegetation may allow CO₂ to remain concentrated near the surface for longer periods of time, making emergency response in the Atchafalaya Basin significantly more difficult.
                        </p>
                    </div>
                </section>

                {/* Section 6: Louisiana's Water Is in the Crosshairs */}
                <section className="space-y-12 border-t border-gray-200 pt-16">
                    <div className="text-center max-w-3xl mx-auto border-b border-gray-200 pb-12">
                        <Droplets size={48} className="mx-auto text-blue-700 mb-4" />
                        <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                            Louisiana's Water Is in the Crosshairs
                        </h2>
                        <p className="text-xl font-serif text-gray-600">
                            How CCS projects endanger the Chicot Aquifer—our primary source of freshwater.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Louisiana’s Waters: Rivers, Wetlands, and Bayous</h3>
                            <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                                <p>While underground aquifers provide much of Louisiana’s drinking water, the state is also defined by an extensive network of rivers, bayous, lakes, and wetlands that shape both its environment and its economy.</p>
                                <p>Major waterways such as the Mississippi River, the Red River, the Atchafalaya River, and countless bayous and marsh systems form one of the most complex surface-water landscapes in North America. These waters support commercial fisheries, recreation, agriculture, navigation, and wildlife habitats across the state.</p>
                                <p>Louisiana’s wetlands are particularly important. They act as natural water filtration systems, trapping sediment and pollutants while providing critical habitat for fish, birds, reptiles, and amphibians. Wetlands also serve as natural buffers against flooding and storm surge, protecting communities and infrastructure along the Gulf Coast.</p>
                                <p>Many of these surface-water systems are closely connected to groundwater aquifers beneath the surface. In some regions, groundwater slowly feeds streams and wetlands, while in others surface water can recharge underlying aquifers.</p>
                                <p>Because of this interconnected relationship, disturbances in the subsurface—such as changes in underground pressure or fluid movement—can potentially influence surface-water systems over time.</p>
                                <p>Protecting Louisiana’s waters therefore requires careful stewardship of both surface water and groundwater resources, recognizing that rivers, wetlands, and aquifers often function as parts of a single interconnected system.</p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">The Chicot Aquifer: Louisiana’s Lifeline</h3>
                            <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                                <p>Beneath much of southwest and central Louisiana lies one of the most important freshwater resources in the state: the <strong>Chicot Aquifer</strong>. This vast underground water system supplies drinking water to hundreds of thousands of residents and provides irrigation for farms across multiple parishes.</p>
                                <p>Unlike surface reservoirs that can be easily seen and monitored, aquifers exist deep underground within porous sand and sediment layers that hold and transmit groundwater. Water stored in these formations may take decades—or even centuries—to naturally recharge.</p>
                                <p>Because of this slow recharge process, contamination or disruption to an aquifer can have consequences that last for generations.</p>
                                <p>Protecting the Chicot Aquifer is therefore not simply an environmental concern. It is a matter of long-term public health, economic stability, and responsible stewardship of Louisiana’s natural resources.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">How Aquifers Work</h3>
                            <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                                <p>Aquifers function much like underground sponges. Layers of sand, gravel, and porous rock allow water to move slowly through the subsurface while storing large volumes of groundwater.</p>
                                <p>In Louisiana, freshwater aquifers sit above deeper geological formations that often contain saltwater or naturally occurring minerals. These freshwater layers are protected by dense rock formations that act as natural barriers separating potable water from deeper geological zones.</p>
                                <p>Carbon sequestration projects typically propose injecting compressed carbon dioxide thousands of feet underground into deep saline formations. These injection zones are intended to remain isolated from freshwater aquifers by impermeable rock layers known as <strong>caprock</strong>.</p>
                                <p>However, maintaining that separation depends on the integrity of the surrounding geology and the absence of pathways that could allow fluids or gases to migrate upward.</p>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-md max-w-2xl mx-auto border border-gray-200 mt-8 mb-8">
                            <div className="h-64 flex flex-col items-center justify-center bg-gray-100 p-6 text-center">
                                <ImageIcon size={40} className="text-gray-400 mb-4" />
                                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">[Insert Image Injection Well]</p>
                                <p className="text-sm text-gray-600 font-serif">Simplified illustration of how carbon dioxide injection occurs beneath Louisiana’s groundwater systems. Freshwater aquifers such as the Chicot Aquifer sit above deep geological formations targeted for carbon storage. Maintaining separation between these layers depends on the integrity of surrounding rock formations and the absence of pathways that could allow fluids or gases to migrate upward.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pressure Changes Underground</h3>
                                <p className="font-serif text-gray-700 text-lg mb-4">When carbon dioxide is injected underground, it does not simply occupy empty space. The process increases pressure within the storage formation.</p>
                                <p className="font-serif text-gray-700 text-lg mb-4">That pressure can push existing fluids outward through surrounding rock layers. In some cases, those displaced fluids may include highly saline water or naturally occurring minerals contained within deep geological formations. If pressure changes extend beyond the intended storage zone, there is potential for these fluids to move into adjacent geological layers.</p>
                                <p className="font-serif text-gray-700 text-lg">Because groundwater systems are interconnected across large areas, even small changes in subsurface pressure can influence how fluids move through underground formations. Understanding how pressure behaves underground is one of the central challenges in evaluating the long-term safety of carbon sequestration projects.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pathways for Underground Migration</h3>
                                <p className="font-serif text-gray-700 text-lg mb-4">For carbon dioxide or formation fluids to reach freshwater aquifers, a pathway must exist through the rock layers that separate injection zones from groundwater systems. Several potential pathways may exist in Louisiana’s subsurface:</p>
                                <ul className="list-disc pl-6 space-y-2 text-brand-red font-bold mb-4 font-serif">
                                    <li>natural geological faults</li>
                                    <li>fractures in rock formations</li>
                                    <li>poorly sealed legacy oil and gas wells</li>
                                    <li>abandoned wells with degraded cement or casing</li>
                                </ul>
                                <p className="font-serif text-gray-700 text-lg">Louisiana has more than a century of oil and gas development history, and hundreds of thousands of wells have been drilled across the state. Many of the earliest wells were constructed long before modern environmental standards existed. If any of these wells provide a vertical pathway through geological layers, they could potentially allow gases or fluids to migrate upward toward freshwater zones. This possibility is one reason why identifying and evaluating historic wells is an important part of assessing carbon sequestration proposals.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens if CO₂ Reaches Groundwater</h3>
                            <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                                <p>Carbon dioxide behaves differently when it dissolves in water. When CO₂ mixes with groundwater, it forms carbonic acid, which can lower the pH of the water. This process is known as <strong>acidification</strong>.</p>
                                <p>Lower pH levels can alter the chemical balance of groundwater and may cause naturally occurring metals within surrounding rock formations to dissolve more easily into the water.</p>
                                <p>These metals may include:</p>
                                <ul className="list-disc pl-6 space-y-1 text-brand-red font-bold">
                                    <li>iron</li>
                                    <li>manganese</li>
                                    <li>arsenic</li>
                                    <li>other naturally occurring elements</li>
                                </ul>
                                <p>Changes in groundwater chemistry can affect water quality and may require additional treatment before the water can be used for drinking or irrigation. Because aquifers move water slowly, changes to groundwater chemistry can persist for long periods of time once they occur.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Monitoring Underground Carbon Storage</h3>
                                <p className="font-serif text-gray-700 text-lg mb-4">One of the challenges associated with underground carbon storage is that the subsurface environment cannot be directly observed. Scientists and engineers rely on a combination of monitoring wells, pressure sensors, seismic imaging, and computer models to track how injected carbon dioxide behaves underground.</p>
                                <p className="font-serif text-gray-700 text-lg">These monitoring systems provide valuable information, but they also involve a degree of uncertainty. Geological formations can behave differently than expected, particularly over long periods of time. For this reason, carbon storage projects often require long-term monitoring programs designed to track pressure changes, plume movement, and groundwater conditions for many years after injection begins. Ensuring that monitoring systems remain active and properly funded over the long term is an important part of protecting groundwater resources.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Why Louisiana’s Aquifers Require Special Protection</h3>
                                <p className="font-serif text-gray-700 text-lg mb-4">Louisiana’s geology is complex and shaped by millions of years of sediment deposition from the Mississippi River and its tributaries. The state contains multiple stacked aquifer systems and extensive networks of faults and salt structures beneath the surface. In addition, decades of oil and gas exploration have left a large number of historic wells across the state.</p>
                                <p className="font-serif text-gray-700 text-lg">These factors make Louisiana both attractive for certain types of industrial development and uniquely sensitive to changes in subsurface pressure and fluid movement. Because groundwater resources such as the <strong>Chicot Aquifer</strong> provide drinking water and support local economies across large regions of the state, protecting these aquifers requires careful evaluation of any activities that alter underground pressure conditions.</p>
                            </div>
                        </div>

                        <div className="mt-16 border-t border-gray-200 pt-16">
                            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8 border-l-4 border-brand-red pl-4 inline-block">The Economy That Depends on the Chicot Aquifer</h3>
                            <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4 mb-12">
                                <p>The Chicot Aquifer is more than a geological formation beneath Louisiana’s surface. It is one of the most important freshwater resources supporting the state’s economy.</p>
                                <p>Across southwest and central Louisiana, the Chicot Aquifer supplies water for municipalities, homes, farms, and businesses. In many parishes, it serves as the primary source of groundwater for drinking water systems and agricultural irrigation. Several major sectors of Louisiana’s economy depend directly on this aquifer.</p>
                            </div>

                            {/* Primary Agricultural Callouts */}
                            <div className="grid md:grid-cols-3 gap-8 mb-12">
                                {/* Rice */}
                                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg flex flex-col">
                                    <div className="h-48 bg-gray-200 relative">
                                        <img src="/rice-production-field.png" alt="Louisiana Rice Production Field" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Rice Production</h4>
                                        <p className="text-gray-700 font-serif flex-1">
                                            Southwest Louisiana is one of the most productive rice-growing regions in the United States. Rice fields require large amounts of irrigation water, and much of that water is drawn from the Chicot Aquifer. According to the LSU AgCenter, Louisiana rice production generates hundreds of millions of dollars in annual economic value. Much of this production occurs in parishes located directly above the Chicot Aquifer. Reliable groundwater supplies are essential for maintaining irrigation levels throughout the growing season.
                                        </p>
                                    </div>
                                </div>

                                {/* Crawfish */}
                                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg flex flex-col">
                                    <div className="h-48 bg-gray-200 relative">
                                        <img src="/crawfish-aquaculture.png" alt="Louisiana Crawfish Aquaculture" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Crawfish Aquaculture</h4>
                                        <p className="text-gray-700 font-serif flex-1">
                                            Louisiana produces the vast majority of crawfish consumed in the United States. Many crawfish farms operate in rotation with rice production, meaning the same irrigation systems and groundwater sources support both industries. Because crawfish are raised in flooded ponds and rice fields, water quality is critical. Changes in groundwater chemistry could affect crawfish health, reproduction, and overall farm productivity. For thousands of families involved in crawfish production, the Chicot Aquifer provides the water needed to sustain this uniquely Louisiana industry.
                                        </p>
                                    </div>
                                </div>

                                {/* Nursery */}
                                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg flex flex-col">
                                    <div className="h-48 bg-gray-200 relative">
                                        <img src="/nursery-landscape-greenhouse.png" alt="Louisiana Commercial Nursery Greenhouse" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">Nursery & Horticulture Industry</h4>
                                        <p className="text-gray-700 font-serif flex-1">
                                            Louisiana’s nursery and landscape industry is another sector that depends heavily on groundwater quality. Plant nurseries require consistent irrigation water to maintain large volumes of crops. Many of these plants are sensitive to changes in water chemistry, including shifts in pH levels or dissolved minerals. Groundwater drawn from regional aquifers, including the Chicot Aquifer, provides irrigation for wholesale plant nurseries, greenhouse operations, and landscape plant production. Because nursery crops are often grown in high-density environments, even small changes in water quality could affect large portions of plant inventory.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Agricultural Callouts List */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                <div className="flex gap-4">
                                    <Tractor size={24} className="text-green-700 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900">Livestock Operations</h4>
                                        <p className="text-sm font-serif text-gray-600 mt-1">Livestock operations across southwest and central Louisiana also depend on reliable groundwater supplies. Cattle, poultry, and other livestock require consistent sources of clean water for daily operations. Farm wells drawing from the Chicot Aquifer provide water for livestock drinking water, pasture irrigation, and farm sanitation and maintenance. In many rural areas, groundwater wells connected to the aquifer are the primary water source supporting livestock operations.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Leaf size={24} className="text-green-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900">Row Crop Farming</h4>
                                        <p className="text-sm font-serif text-gray-600 mt-1">In addition to rice, Louisiana farmers grow a variety of crops including soybeans, corn, and other commodities that depend on stable groundwater resources. Groundwater irrigation can help farmers maintain crop production during dry periods and protect yields when rainfall is limited. Because crop production often spans thousands of acres across multiple parishes, access to dependable groundwater supplies plays an important role in maintaining Louisiana’s agricultural productivity.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Droplets size={24} className="text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900">Municipal Drinking Water</h4>
                                        <p className="text-sm font-serif text-gray-600 mt-1">Beyond agriculture, many communities across southwest Louisiana rely on groundwater wells drawing from the Chicot Aquifer for their municipal water supply. These systems provide drinking water for homes, schools, hospitals, and businesses across the region. In some parishes, groundwater from the Chicot Aquifer is the primary source of safe drinking water available to residents. Protecting this resource is therefore essential not only for economic activity, but for public health.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-brand-blue text-white p-8 rounded-2xl shadow-lg mt-12 text-center">
                                <h3 className="text-2xl font-bold mb-4">A Water System Supporting Entire Communities</h3>
                                <p className="font-serif text-lg max-w-3xl mx-auto opacity-90">Taken together, these industries illustrate how deeply Louisiana’s economy depends on the Chicot Aquifer. Agriculture, aquaculture, municipal water systems, and rural businesses all rely on the long-term availability of clean groundwater stored within this aquifer. Because aquifers recharge slowly, any disruption to groundwater quality or availability could have long-lasting consequences for communities and industries that depend on this resource. For this reason, protecting Louisiana’s freshwater aquifers is not only an environmental issue—it is also an economic one.</p>
                            </div>
                        </div>

                        <div className="space-y-12 mt-16 pt-16 border-t border-gray-200">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">How Much Water Carbon Capture Projects Require</h3>
                                <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                                    <p>Carbon capture and sequestration projects are often discussed primarily in terms of carbon dioxide. However, many of the industrial facilities associated with these projects also require large volumes of water to operate.</p>
                                    <p>Facilities involved in carbon capture, hydrogen production, biofuels, and chemical processing frequently rely on water for cooling systems, steam generation, and industrial processing. In some cases, these facilities can require millions of gallons of water each day depending on the size and type of operation.</p>
                                    <p>In regions where groundwater aquifers already support municipal drinking water, agriculture, and existing industries, additional industrial demand can place new pressure on local water resources. Across southwest and central Louisiana, the <strong>Chicot Aquifer</strong> already supplies water for farms, crawfish production, municipal water systems, and rural communities. If new industrial developments significantly increase groundwater withdrawals, local water systems may face increased competition for limited resources.</p>
                                    <p>Groundwater recharge occurs slowly, and heavy withdrawals over long periods can lower water levels within an aquifer. Declining groundwater levels may require deeper wells, increased pumping costs, and additional strain on municipal water infrastructure.</p>
                                    <p>Because aquifers serve as long-term freshwater reserves, understanding the water requirements of proposed industrial developments is an important part of evaluating how these projects may affect Louisiana’s groundwater systems. Careful planning and responsible water management are essential to ensure that industrial water demand does not compromise the long-term sustainability of freshwater aquifers that communities depend on every day.</p>
                                </div>
                            </div>

                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                                <h3 className="text-2xl font-bold text-red-900 mb-4">Why Groundwater Contamination Is Extremely Difficult to Reverse</h3>
                                <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                                    <p>Groundwater systems function very differently from surface water bodies such as rivers, lakes, or reservoirs. When contamination occurs in surface water, the affected water can often be treated, diluted, or flushed downstream over time.</p>
                                    <p>Aquifers do not behave this way.</p>
                                    <p>Water within underground aquifers moves extremely slowly through layers of sand, gravel, and rock. In some formations, groundwater may take decades—or even centuries—to travel through the subsurface. Because of this slow movement, contaminants that enter an aquifer can remain trapped within the groundwater system for very long periods of time. Removing or treating contaminated groundwater is often technically complex, expensive, and sometimes impossible to fully restore to its original condition.</p>
                                    <p>In cases where groundwater contamination occurs, communities may be forced to drill deeper wells, seek alternative water sources, or install costly treatment systems to ensure safe drinking water.</p>
                                    <p>For aquifers such as the <strong>Chicot Aquifer</strong>, which provide freshwater to large portions of Louisiana, prevention is far more effective than remediation.</p>
                                    <p>Protecting groundwater resources requires careful evaluation of activities that could introduce contaminants or alter underground pressure conditions. Once groundwater systems are affected, the consequences may extend far beyond the original source of contamination and persist for generations. For this reason, safeguarding Louisiana’s aquifers is not only an environmental priority—it is an essential responsibility for protecting the long-term water security of the state.</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why the Chicot Aquifer Is in the Crosshairs of CCS Development</h3>
                                <div className="prose prose-lg font-serif text-gray-700 max-w-none space-y-4">
                                    <p>As carbon capture and sequestration projects expand across the United States, Louisiana has emerged as one of the primary regions targeted for large-scale carbon storage development. The state’s geology, industrial infrastructure, and existing energy corridors have made it a focal point for companies seeking locations to capture, transport, and inject carbon dioxide underground.</p>
                                    <p>Much of this proposed development is concentrated in regions of Louisiana that sit above or near major freshwater aquifers, including the <strong>Chicot Aquifer</strong>, which serves as a critical source of drinking water and agricultural irrigation for large portions of the state.</p>
                                    <p>The same geological characteristics that make Louisiana attractive for industrial activity—thick sediment layers, deep saline formations, and an extensive history of oil and gas development—also create complex subsurface conditions. These formations contain networks of faults, historic wellbores, and layered aquifer systems that interact with one another beneath the surface.</p>
                                    <p>Carbon sequestration projects propose injecting large volumes of compressed carbon dioxide thousands of feet underground into deep geological formations. While these injection zones are intended to remain isolated from freshwater aquifers, the scale of proposed storage operations raises important questions about how underground pressure changes and fluid movement could affect surrounding geological systems.</p>
                                    <p>In addition, Louisiana’s long history of oil and gas exploration has left hundreds of thousands of wells across the state. Some of these wells were drilled and abandoned decades ago using construction standards that were never designed to withstand modern injection pressures or long-term subsurface storage operations. If any of these historic wells provide pathways through underground rock layers, they could potentially allow gases or fluids to migrate upward toward freshwater zones.</p>
                                    <p>At the same time, many proposed CCS projects involve the construction of extensive pipeline networks designed to transport compressed carbon dioxide from industrial facilities to underground injection sites. These pipelines may cross rural communities, agricultural lands, wetlands, and regions directly above important aquifer systems.</p>
                                    <p>Taken together, these factors place Louisiana’s groundwater resources—particularly the <strong>Chicot Aquifer</strong>—at the center of a rapidly expanding industrial development effort. For communities that rely on groundwater for drinking water, agriculture, and local economies, the stakes are significant. Aquifers represent long-term freshwater reserves that cannot easily be replaced once damaged. Understanding how carbon sequestration development may interact with these underground water systems is therefore essential.</p>
                                    <p>Protecting Louisiana’s aquifers requires careful scientific evaluation, transparent regulatory oversight, and thoughtful consideration of how large-scale subsurface industrial activity could affect one of the state’s most valuable natural resources. Because once groundwater is compromised, the consequences may extend far beyond the projects themselves and persist for generations.</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center mt-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proposed CO₂ Pipelines and Storage Projects in Relation to Louisiana Aquifers</h3>
                                <div className="rounded-2xl overflow-hidden shadow-md max-w-2xl mx-auto border border-gray-200 mt-4 mb-4 text-center">
                                    <div className="h-64 flex flex-col items-center justify-center bg-gray-200 p-6">
                                        <ImageIcon size={40} className="text-gray-400 mb-2" />
                                        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">[Insert MAP Image]</p>
                                        <p className="text-sm text-gray-500 font-serif">Map showing existing and proposed carbon capture infrastructure across Louisiana in relation to major freshwater aquifers. Dozens of proposed injection wells and hundreds of miles of CO₂ pipelines are planned across multiple parishes. Many of these projects are located in regions that rely heavily on groundwater systems such as the Chicot Aquifer for drinking water, agriculture, and local economies.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-brand-red text-white p-8 rounded-2xl shadow-lg mt-12">
                                <h3 className="text-2xl font-bold mb-4">What Happens If an Aquifer Is Lost</h3>
                                <div className="prose prose-lg font-serif text-white max-w-none space-y-4 opacity-90">
                                    <p>Freshwater aquifers are among the most valuable natural resources a region can possess. Unlike rivers or lakes, which can be replenished relatively quickly through rainfall and surface runoff, groundwater systems recharge slowly over long periods of time. In some aquifers, water may take decades—or even centuries—to move through underground formations.</p>
                                    <p>Because of this slow recharge process, damage to an aquifer can have consequences that last far longer than the events that caused it. If groundwater becomes contaminated or significantly altered, restoring the aquifer to its original condition can be extremely difficult. In many cases, contaminated groundwater must be pumped, treated, and monitored for years or even decades. Even with extensive treatment efforts, it may not always be possible to fully remove contaminants from the subsurface.</p>
                                    <p>For communities that rely on groundwater as their primary source of drinking water, the loss of an aquifer can require major adjustments. Municipalities may need to drill deeper wells, construct new water treatment facilities, or seek alternative water sources from distant locations. These solutions can involve substantial infrastructure costs and long-term financial burdens for local residents. Agricultural operations may also be affected. Farms that depend on groundwater irrigation may face increased costs, reduced water availability, or the need to modify cropping systems if water quality changes. In rural regions where groundwater wells serve homes, farms, and small businesses, the consequences of aquifer damage can extend throughout the local economy.</p>
                                    <p>Louisiana’s <strong>Chicot Aquifer</strong> supports drinking water systems, agriculture, and communities across a large portion of the state. Because this aquifer recharges slowly and serves such a wide region, protecting its water quality is essential for ensuring long-term water security. Once groundwater systems are compromised, the effects may persist for generations. For this reason, protecting Louisiana’s aquifers is not simply a matter of environmental protection—it is a commitment to safeguarding the water resources that future communities will depend on long after today’s industrial projects have ended.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Section 7: Geographic Overlap & The Big Picture */}
                <section className="space-y-12 border-t border-gray-200 pt-16">
                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                        <h2 className="text-2xl font-bold text-red-900 mb-4">Geographic Overlap: Communities in the Crosshairs</h2>
                        <p className="font-serif text-gray-700 mb-6">
                            According to the Louisiana Department of Energy and Natural Resources Class VI application tracker, 33 carbon sequestration projects representing more than 100 proposed injection wells have been filed. These projects sit directly beneath several of the state's most important natural-resource economies.
                        </p>

                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {["Allen", "Ascension", "Assumption", "Beauregard", "Calcasieu", "Caldwell", "Cameron", "Iberville", "Livingston", "Pointe Coupee", "Rapides", "Sabine", "St. Charles", "St. Helena", "St. John the Baptist", "Vermilion", "Vernon", "West Baton Rouge"].map(parish => (
                                <div key={parish} className="bg-white py-2 px-3 rounded-md shadow-sm border border-red-100 text-sm font-bold text-gray-700 flex items-center gap-2">
                                    <MapPin size={14} className="text-brand-red opacity-60" /> {parish}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-red-900">Central Louisiana</h4>
                                <p className="text-sm font-serif text-gray-700">Parishes like Rapides, Vernon, Allen, and Beauregard sit above portions of the Chicot Aquifer, raising massive concerns for timber and nursery groundwater.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-900">Southwest Louisiana</h4>
                                <p className="text-sm font-serif text-gray-700">Calcasieu, Cameron, and Vermilion support fragile coastal ecosystems already experiencing land loss. Hubs here intersect directly with nursery habitats.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-red-900">River Parishes and South Louisiana</h4>
                                <p className="text-sm font-serif text-gray-700">Ascension, Iberville, and surrounding parishes host major industrial infrastructure but also support sugarcane, which relies on stable hydrology.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Public Risk & Private Benefit</h3>
                            <p className="font-serif text-gray-700 mb-4">While CCS incentives support industrial development, the environmental and economic risks are concentrated on local landowners and farmers. The financial benefits of carbon credits are distributed broadly, but the physical pipelines and injection wells fall entirely on rural communities to manage.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Long-Term Liability</h3>
                            <p className="font-serif text-gray-700 mb-4">Carbon sequestration projects are designed to store CO₂ for centuries. If a project stops operating, who is responsible for monitoring decades into the future? Ensuring long-term environmental oversight is properly funded is a monumental policy gap currently left unanswered.</p>
                        </div>
                    </div>

                    <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Search size={32} className="text-brand-blue" />
                            <h3 className="text-3xl font-bold">Key Questions the Public Should Ask</h3>
                        </div>
                        <ul className="space-y-4 font-serif text-lg text-gray-200">
                            <li className="flex items-start gap-3"><span className="text-brand-red font-bold mt-1">?</span> How will emergency responders be trained and equipped to manage CO₂ pipeline incidents?</li>
                            <li className="flex items-start gap-3"><span className="text-brand-red font-bold mt-1">?</span> What long-term monitoring systems will be required to ensure underground storage integrity?</li>
                            <li className="flex items-start gap-3"><span className="text-brand-red font-bold mt-1">?</span> How will legacy oil and gas wells be identified and evaluated before injection occurs?</li>
                            <li className="flex items-start gap-3"><span className="text-brand-red font-bold mt-1">?</span> What protections exist for groundwater resources that support drinking water and agriculture?</li>
                            <li className="flex items-start gap-3"><span className="text-brand-red font-bold mt-1">?</span> What safeguards exist to protect landowners and rural communities from economic losses?</li>
                            <li className="flex items-start gap-3"><span className="text-brand-red font-bold mt-1">?</span> Who exactly will be responsible for long-term remediation decades into the future?</li>
                        </ul>
                    </div>

                    <div className="text-center pt-8 border-t border-gray-100">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">The Big Picture: A Policy Trade-Off</h2>
                        <p className="text-xl font-serif text-gray-700 max-w-3xl mx-auto mb-8">
                            Should Louisiana risk long-established natural-resource industries that depend on clean water and healthy ecosystems in order to support a developing carbon-storage sector whose long-term environmental and economic outcomes remain uncertain?
                        </p>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                            For Louisiana residents, the issue ultimately comes down to balancing potential benefits with the responsibility to protect the state’s land, water, wildlife, and existing industries.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="inline-block bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1">
                                Join The Movement
                            </Link>
                            <a href="/ccs-environmental-impact-report.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-blue hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2">
                                Read Full Report
                            </a>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
};
