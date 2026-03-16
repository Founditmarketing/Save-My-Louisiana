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

                {/* Section 6: Devastating Louisiana Agriculture */}
                <section className="space-y-12 border-t border-gray-200 pt-16">
                    <div className="text-center max-w-3xl mx-auto border-b border-gray-200 pb-12">
                        <Tractor size={48} className="mx-auto text-green-700 mb-4" />
                        <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                            Devastating Louisiana Agriculture
                        </h2>
                        <p className="text-xl font-serif text-gray-600">
                            When Environmental Risk Becomes Economic Risk
                        </p>
                        <p className="text-lg font-serif text-gray-700 mt-6 text-left">
                            The same water systems and soil conditions that sustain Louisiana’s wetlands also support the state’s agricultural economy, meaning environmental disruptions in these landscapes can extend beyond wildlife and into the industries that depend on healthy ecosystems.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Existing Louisiana Industries Potentially Exposed to CCS Risks</h3>

                    {/* Primary Agricultural Callouts */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Crawfish */}
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg flex flex-col">
                            <div className="h-48 bg-gray-200 relative">
                                <img src="/crawfish-aquaculture.png" alt="Louisiana Crawfish Aquaculture" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Crawfish Aquaculture</h4>
                                <p className="text-brand-blue font-bold text-sm mb-4">$258 Million Annual Farm-Gate Value</p>
                                <p className="text-gray-700 font-serif flex-1">
                                    Crawfish are particularly sensitive to water chemistry. Changes in pH, salinity, or dissolved metals from CO₂ leaks can severely affect shell formation, molting cycles, and juvenile survival rates in our shallow, groundwater-fed ponds.
                                </p>
                            </div>
                        </div>

                        {/* Rice */}
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg flex flex-col">
                            <div className="h-48 bg-gray-200 relative">
                                <img src="/rice-production-field.png" alt="Louisiana Rice Production Field" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Rice Production</h4>
                                <p className="text-brand-blue font-bold text-sm mb-4">$713 Million Annual Economic Impact</p>
                                <p className="text-gray-700 font-serif flex-1">
                                    Rice relies heavily on irrigation from the Chicot Aquifer. Increased salinity, metal mobilization, or acidity from CCS could destroy soil health across flooded fields, spreading rapid contamination across massive agricultural areas.
                                </p>
                            </div>
                        </div>

                        {/* Nursery */}
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg flex flex-col">
                            <div className="h-48 bg-gray-200 relative">
                                <ImageIcon size={40} className="absolute inset-0 m-auto text-gray-400" />
                                <div className="absolute inset-0 flex items-end justify-center pb-4 text-xs font-bold text-gray-500 uppercase tracking-widest">[Nursery Image Pending]</div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Nursery & Landscape</h4>
                                <p className="text-brand-blue font-bold text-sm mb-4">$2.5 Billion Annual Economic Impact</p>
                                <p className="text-gray-700 font-serif flex-1">
                                    Nursery crops are high-value specialty plants highly sensitive to subtle groundwater changes. Even small shifts in pH or dissolved metals can stunt plant growth and ruin entire greenhouse inventories simultaneously.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Agricultural Callouts List */}
                    <div className="grid md:grid-cols-2 gap-6 mt-12 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        <div className="flex gap-4">
                            <TreePine size={24} className="text-green-700 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">Forestry & Timber ($11–13B)</h4>
                                <p className="text-sm font-serif text-gray-600 mt-1">CO₂ migration can lower soil pH, mobilizing iron and manganese. With timber requiring 20–30 years to reach harvest, disrupted root systems pose drastic long-term economic hits to landowners.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Anchor size={24} className="text-blue-700 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">Fisheries ($1.3B)</h4>
                                <p className="text-sm font-serif text-gray-600 mt-1">Carbonic acid from wetland CO₂ leaks rapidly lowers pH levels, directly threatening shell-forming organisms like oysters, and disrupting critical shrimp nursery habitats.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Wheat size={24} className="text-yellow-600 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">Sugarcane ($1.2–1.4B)</h4>
                                <p className="text-sm font-serif text-gray-600 mt-1">Grown heavily in low-lying coastal parishes targeted by CCS. Susceptible to groundwater salinity increases and disrupted wetland drainage required for the 400+ cane farms.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Leaf size={24} className="text-green-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">Soybeans, Corn & Cotton</h4>
                                <p className="text-sm font-serif text-gray-600 mt-1">These major row crops generate over $1.2B combined annually. Like all commodity crops, their sheer acreage makes them wholly dependent on the stability of existing groundwater and soil chemistry.</p>
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
