import React, { useState } from 'react';
import { ArrowLeft, Droplets, Activity, FlaskConical, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WaterInCrosshairs: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            {/* Lightbox Overlay */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 transition-all duration-300 animate-in fade-in"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsLightboxOpen(false);
                        }}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src="/chicot-aquifer.png"
                        alt="Map of the Chicot Aquifer - Large View"
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            {/* Hero Section */}
            <section className="relative text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/chicot-aquifer-hero.jpg" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-blue/85 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <Link to="/#know" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors uppercase tracking-widest text-xs font-bold">
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        Louisiana's Water Is in the Crosshairs
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-blue-100 max-w-2xl mx-auto">
                        How CCS projects endanger the Chicot Aquifer—our primary source of freshwater.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

                {/* Intro */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-brand-red pl-4">
                        A Threat to 48% of Our State's Drinking Water
                    </h2>
                    <p className="text-xl text-gray-900 leading-relaxed font-serif font-bold">
                        The Chicot Aquifer isn't just a geographical feature—it's the lifeblood of Louisiana.
                        Nearly <span className="text-brand-red underline">half (48%)</span> of our state's residents depend on this freshwater source every single day.
                    </p>

                    <div
                        className="my-10 rounded-2xl overflow-hidden shadow-2xl border border-blue-100 relative group cursor-pointer"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-300 flex items-center justify-center">
                            <div className="bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
                                <ZoomIn className="text-brand-blue" size={24} />
                            </div>
                        </div>
                        <img
                            src="/chicot-aquifer.png"
                            alt="Map of the Chicot Aquifer"
                            className="w-full h-auto"
                        />
                        <div className="bg-blue-50/50 px-6 py-3 text-sm text-gray-600 italic border-t border-blue-100 flex justify-between items-center">
                            <span>The Chicot Aquifer system spans 15 parishes and is vital to Louisiana's economy and health.</span>
                            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest hidden sm:block">Click to Enlarge</span>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed font-serif">
                        The system spans <span className="font-bold">9,500 square miles</span> and supplies over <span className="font-bold">700,000 people</span> across 15 parishes. Because it is composed of highly permeable sands and gravels, any failure in CO₂ containment isn't just a "leak"—it's a <span className="font-bold text-brand-red uppercase">permanent contamination event</span> that could render our primary water source undrinkable for generations.
                    </p>
                </section>

                {/* The 3 Risks */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-heading font-bold text-gray-900">Critical Failure Points</h2>
                    <div className="grid md:grid-cols-1 gap-8">

                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100 flex gap-6 items-start">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                                <Activity className="text-brand-red" size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">1. Unstoppable Pressure Fronts</h3>
                                <p className="text-gray-700 leading-relaxed font-serif">
                                    Injecting millions of tons of CO₂ creates massive pressure waves that force hazardous brine and toxic chemicals upward. If there is a single crack in the rock or an old, forgotten well, this pressure <span className="italic">will</span> find it—and push poison into the water you drink.
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100 flex gap-6 items-start">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                                <Droplets className="text-brand-red" size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">2. Saltwater Intrusion</h3>
                                <p className="text-gray-700 leading-relaxed font-serif">
                                    Rising saline levels don't just make water taste bad—they destroy municipal infrastructure and kill crops. Once saltwater enters a freshwater aquifer, there is <span className="font-bold">no technology on Earth</span> that can filter it out at this scale.
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100 flex gap-6 items-start">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                                <FlaskConical className="text-brand-red" size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">3. The Carbonic Acid "Acid Mine" Effect</h3>
                                <p className="text-gray-700 leading-relaxed font-serif">
                                    When CO₂ meets water, it turns into acid. This acid leaches <span className="font-bold text-red-700">Arsenic, Lead, and Manganese</span> directly out of the surrounding rock and into the aquifer. We aren't just talking about "bad" water—we're talking about heavy metal poisoning in your kitchen tap.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* --- MASSIVE NEW CONTENT BLOCK: Louisiana's Water Is in the Crosshairs --- */}
                <section className="space-y-16 py-16 border-y border-gray-100">

                    {/* Intro Block */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-dark uppercase tracking-tight">
                            Louisiana's Water Is in the Crosshairs
                        </h2>
                        <h3 className="text-2xl text-brand-red font-bold font-heading">
                            How CCS projects endanger the Chicot Aquifer—our primary source of freshwater.
                        </h3>
                    </div>

                    {/* Rivers, Wetlands, and Bayous */}
                    <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200">
                        <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Droplets className="text-brand-blue" size={32} />
                            Louisiana's Waters: Rivers, Wetlands, and Bayous
                        </h3>
                        <div className="space-y-6 text-xl text-gray-800 font-serif leading-relaxed">
                            <p>
                                While underground aquifers provide much of Louisiana's drinking water, the state is also defined by an extensive network of rivers, bayous, lakes, and wetlands that shape both its environment and its economy.
                            </p>
                            <p>
                                Major waterways such as the Mississippi River, the Red River, the Atchafalaya River, and countless bayous and marsh systems form one of the most complex surface-water landscapes in North America. These waters support commercial fisheries, recreation, agriculture, navigation, and wildlife habitats across the state.
                            </p>
                            <p className="bg-white p-6 rounded-xl border-l-4 border-brand-blue">
                                Louisiana's wetlands are particularly important. They act as natural water filtration systems, trapping sediment and pollutants while providing critical habitat for fish, birds, reptiles, and amphibians. Wetlands also serve as natural buffers against flooding and storm surge, protecting communities and infrastructure along the Gulf Coast.
                            </p>
                            <p>
                                Many of these surface-water systems are closely connected to groundwater aquifers beneath the surface. In some regions, groundwater slowly feeds streams and wetlands, while in others surface water can recharge underlying aquifers.
                            </p>
                            <p>
                                Because of this interconnected relationship, disturbances in the subsurface—such as changes in underground pressure or fluid movement—can potentially influence surface-water systems over time.
                            </p>
                            <p className="font-bold text-brand-dark">
                                Protecting Louisiana's waters therefore requires careful stewardship of both surface water and groundwater resources, recognizing that rivers, wetlands, and aquifers often function as parts of a single interconnected system.
                            </p>
                        </div>
                    </div>

                    {/* The Chicot Aquifer */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-heading font-bold text-brand-blue border-b-2 border-brand-blue pb-2 inline-block">
                            The Chicot Aquifer: Louisiana's Lifeline
                        </h3>
                        <div className="space-y-6 text-xl text-gray-800 font-serif leading-relaxed">
                            <p>
                                Beneath much of southwest and central Louisiana lies one of the most important freshwater resources in the state: the <span className="font-bold text-brand-blue">Chicot Aquifer</span>. This vast underground water system supplies drinking water to <span className="font-bold">hundreds of thousands of residents</span> and provides irrigation for farms across multiple parishes.
                            </p>
                            <p>
                                Unlike surface reservoirs that can be easily seen and monitored, aquifers exist deep underground within porous sand and sediment layers that hold and transmit groundwater. Water stored in these formations may take decades—<span className="italic">or even centuries</span>—to naturally recharge.
                            </p>
                            <p className="text-brand-red font-bold">
                                Because of this slow recharge process, contamination or disruption to an aquifer can have consequences that last for generations.
                            </p>
                            <p>
                                Protecting the Chicot Aquifer is therefore not simply an environmental concern. It is a matter of long-term public health, economic stability, and responsible stewardship of Louisiana's natural resources.
                            </p>
                        </div>
                    </div>

                    {/* How Aquifers Work */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-brand-blue pl-4">
                            How Aquifers Work
                        </h3>
                        <div className="space-y-6 text-xl text-gray-800 font-serif leading-relaxed">
                            <p>
                                Aquifers function much like underground sponges. Layers of sand, gravel, and porous rock allow water to move slowly through the subsurface while storing large volumes of groundwater.
                            </p>
                            <p>
                                In Louisiana, freshwater aquifers sit above deeper geological formations that often contain saltwater or naturally occurring minerals. These freshwater layers are protected by dense rock formations that act as natural barriers separating potable water from deeper geological zones.
                            </p>
                            <p>
                                Carbon sequestration projects typically propose injecting compressed carbon dioxide thousands of feet underground into deep saline formations. These injection zones are intended to remain isolated from freshwater aquifers by impermeable rock layers known as <span className="font-bold">caprock</span>.
                            </p>
                            <p className="bg-red-50 p-6 rounded-xl text-brand-red border border-red-200">
                                However, maintaining that separation depends on the integrity of the surrounding geology and the absence of pathways that could allow fluids or gases to migrate upward.
                            </p>
                        </div>
                    </div>

                    {/* Injection Well Image */}
                    <div className="my-16 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                        <img 
                            src="/injection_well_diagram_1773622040309.png" 
                            alt="Cross-section diagram showing CO2 injection well penetrating the Chicot Aquifer and sealing layers" 
                            className="w-full h-auto"
                        />
                        <div className="bg-gray-50 border-t border-gray-200 p-6 md:p-8">
                            <p className="text-gray-700 text-lg md:text-xl font-serif text-center max-w-4xl mx-auto leading-relaxed">
                                <span className="font-bold font-heading text-brand-dark uppercase tracking-wider block mb-2 text-sm">Cross-Section Analysis</span>
                                Simplified illustration of how carbon dioxide injection occurs beneath Louisiana's groundwater systems. Freshwater aquifers such as the Chicot Aquifer sit above deep geological formations targeted for carbon storage. Maintaining separation between these layers depends on the integrity of surrounding rock formations and the absence of pathways that could allow fluids or gases to migrate upward.
                            </p>
                        </div>
                    </div>

                    {/* Pressure Changes & Pathways */}
                    <div className="grid md:grid-cols-2 gap-12 text-xl font-serif text-gray-800 leading-relaxed">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Pressure Changes Underground</h3>
                            <p>
                                When carbon dioxide is injected underground, it does not simply occupy empty space. The process <span className="font-bold underline">increases pressure</span> within the storage formation.
                            </p>
                            <p>
                                That pressure can push existing fluids outward through surrounding rock layers. In some cases, those displaced fluids may include highly saline water or naturally occurring minerals contained within deep geological formations.
                            </p>
                            <p className="bg-blue-50 p-5 rounded-lg border-l-4 border-brand-blue">
                                If pressure changes extend beyond the intended storage zone, there is potential for these fluids to move into adjacent geological layers.
                            </p>
                            <p>
                                Because groundwater systems are interconnected across large areas, even small changes in subsurface pressure can influence how fluids move through underground formations. Understanding how pressure behaves underground is one of the central challenges in evaluating the long-term safety of CCS projects.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Pathways for Underground Migration</h3>
                            <p>
                                For carbon dioxide or formation fluids to reach freshwater aquifers, a pathway must exist through the rock layers that separate injection zones from groundwater. Several potential pathways may exist in Louisiana:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 font-bold text-brand-dark mb-4">
                                <li>natural geological faults</li>
                                <li>fractures in rock formations</li>
                                <li>poorly sealed legacy oil and gas wells</li>
                                <li>abandoned wells with degraded cement or casing</li>
                            </ul>
                            <p>
                                Louisiana has more than a century of oil and gas development history, and hundreds of thousands of wells have been drilled across the state. Many of the earliest wells were constructed long before modern environmental standards existed.
                            </p>
                            <p className="font-bold text-brand-red">
                                If any of these wells provide a vertical pathway through geological layers, they could potentially allow gases or fluids to migrate upward toward freshwater zones.
                            </p>
                        </div>
                    </div>

                    {/* What happens if CO2 reaches Groundwater & Monitoring */}
                    <div className="space-y-12 bg-zinc-900 text-gray-300 p-8 md:p-12 rounded-3xl mt-12">
                        <div className="space-y-6 text-xl font-serif leading-relaxed">
                            <h3 className="text-3xl font-heading font-bold text-white mb-6">What Happens if CO₂ Reaches Groundwater</h3>
                            <p>
                                Carbon dioxide behaves differently when it dissolves in water. When CO₂ mixes with groundwater, it forms <span className="font-bold text-brand-red">carbonic acid</span>, which can lower the pH of the water. This process is known as <span className="italic">acidification</span>.
                            </p>
                            <p>
                                Lower pH levels can alter the chemical balance of groundwater and may cause naturally occurring metals within surrounding rock formations to dissolve more easily into the water. These metals may include:
                            </p>
                            <div className="flex gap-4 mb-4">
                                <span className="bg-zinc-800 px-4 py-2 rounded font-bold text-white">iron</span>
                                <span className="bg-zinc-800 px-4 py-2 rounded font-bold text-white">manganese</span>
                                <span className="bg-zinc-800 px-4 py-2 rounded font-bold text-brand-red">arsenic</span>
                            </div>
                            <p>
                                Changes in groundwater chemistry can affect water quality and may require additional treatment before the water can be used for drinking or irrigation. Because aquifers move water slowly, changes to groundwater chemistry can persist for long periods of time once they occur.
                            </p>
                        </div>

                        <div className="space-y-6 text-xl font-serif leading-relaxed border-t border-zinc-700 pt-12">
                            <h3 className="text-3xl font-heading font-bold text-white mb-6">Monitoring Underground Carbon Storage</h3>
                            <p>
                                One of the challenges associated with underground carbon storage is that the subsurface environment cannot be directly observed.
                            </p>
                            <p>
                                Scientists and engineers rely on a combination of monitoring wells, pressure sensors, seismic imaging, and computer models to track how injected carbon dioxide behaves underground. These monitoring systems provide valuable information, but they also involve a degree of uncertainty. Geological formations can behave differently than expected, particularly over long periods of time.
                            </p>
                            <p>
                                For this reason, carbon storage projects often require long-term monitoring programs designed to track pressure changes, plume movement, and groundwater conditions for many years after injection begins. Ensuring that monitoring systems remain active and properly funded over the long term is an important part of protecting groundwater resources.
                            </p>
                        </div>
                    </div>

                    {/* Why Louisiana Aquifers Require Special Protection */}
                    <div className="bg-brand-blue/10 p-8 md:p-12 rounded-3xl mt-16 text-center max-w-4xl mx-auto space-y-6 text-xl font-serif leading-relaxed text-gray-900">
                        <h3 className="text-3xl font-heading font-bold text-brand-blue">Why Louisiana's Aquifers Require Special Protection</h3>
                        <p>
                            Louisiana's geology is complex and shaped by millions of years of sediment deposition from the Mississippi River and its tributaries. The state contains multiple stacked aquifer systems and extensive networks of faults and salt structures beneath the surface.
                        </p>
                        <p>
                            In addition, decades of oil and gas exploration have left a large number of historic wells across the state. These factors make Louisiana both attractive for certain types of industrial development and uniquely sensitive to changes in subsurface pressure and fluid movement.
                        </p>
                        <p className="font-bold text-2xl">
                            Because groundwater resources such as the Chicot Aquifer provide drinking water and support local economies across large regions of the state, protecting these aquifers requires careful evaluation of any activities that alter underground pressure conditions.
                        </p>
                    </div>

                    {/* --- THE ECONOMY THAT DEPENDS ON THE CHICOT AQUIFER --- */}
                    <div className="pt-24 space-y-16">
                        <div className="text-center space-y-6">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">The Economy That Depends on the Chicot Aquifer</h2>
                            <p className="text-2xl text-gray-600 font-serif max-w-3xl mx-auto">
                                The Chicot Aquifer is more than a geological formation... It is one of the most important freshwater resources supporting the state's economy.
                            </p>
                            <p className="text-xl text-gray-700 font-serif max-w-3xl mx-auto">
                                Across southwest and central Louisiana, the aquifer supplies water for municipalities, homes, farms, and businesses. Several major sectors of Louisiana's economy depend directly on this aquifer.
                            </p>
                        </div>

                        {/* Image Cards for Crawfish, Rice, Nursery */}
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-64 relative overflow-hidden bg-gray-100 flex-shrink-0">
                                   <img src="/crawfish_farming_1773622364641.png" alt="Crawfish Aquaculture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h4 className="text-2xl font-bold font-heading text-brand-dark mb-4">Crawfish Aquaculture</h4>
                                    <p className="text-gray-700 font-serif text-lg leading-relaxed flex-1">
                                        Louisiana produces the vast majority of crawfish consumed in the US. Many farms operate in rotation with rice production. Because they are raised in flooded ponds, water quality is critical. Changes in groundwater chemistry could affect health, reproduction, and farm productivity for thousands of families.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-64 relative overflow-hidden bg-gray-100 flex-shrink-0">
                                   <img src="/rice_farming_1773622538658.png" alt="Rice Production in flooded field" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h4 className="text-2xl font-bold font-heading text-brand-dark mb-4">Rice Production</h4>
                                    <p className="text-gray-700 font-serif text-lg leading-relaxed flex-1">
                                        Southwest Louisiana is an incredibly productive rice-growing region. Fields require large amounts of irrigation water drawn from the Chicot Aquifer. Reliable groundwater supplies are essential—generating hundreds of millions in annual value—for maintaining irrigation levels throughout the growing season.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-64 relative overflow-hidden bg-gray-100 flex-shrink-0">
                                   <img src="/nursery_landscape_greenhouse_1773619338765.png" alt="Commercial Nursery Greenhouse" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h4 className="text-2xl font-bold font-heading text-brand-dark mb-4">Nursery & Horticulture</h4>
                                    <p className="text-gray-700 font-serif text-lg leading-relaxed flex-1">
                                        Plant nurseries require consistent water to maintain large volumes of crops. Many plants are sensitive to changes in chemistry, pH levels, or minerals. Because nursery crops are grown in high-density environments, even small changes in water quality from the aquifer could affect large portions of plant inventory.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Economic Sectors */}
                        <div className="grid md:grid-cols-3 gap-6 pt-6">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                                <h4 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">Livestock Operations</h4>
                                <p className="text-gray-600 font-serif leading-relaxed">
                                    Cattle, poultry, and livestock require consistent clean water for drinking, pasture irrigation, and sanitation. In many rural areas, groundwater wells connected to the aquifer are the primary water source.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                                <h4 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">Row Crop Farming</h4>
                                <p className="text-gray-600 font-serif leading-relaxed">
                                    Beyond rice, farmers grow soybeans, corn, and commodities depending on stable groundwater. Irrigation protects yields when rainfall is limited across thousands of acres.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                                <h4 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">Municipal Drinking Water</h4>
                                <p className="text-gray-600 font-serif leading-relaxed">
                                    Communities across southwest LA rely on the Chicot Aquifer for their municipal supply. In some parishes, it is the <span className="font-bold underline">primary source of safe drinking water</span> available to residents.
                                </p>
                            </div>
                        </div>

                        <div className="bg-brand-dark text-white p-10 rounded-3xl text-center space-y-4 shadow-xl">
                            <h3 className="text-2xl font-heading font-bold text-brand-red uppercase tracking-widest">A Water System Supporting Entire Communities</h3>
                            <p className="text-xl font-serif max-w-3xl mx-auto">
                                Because aquifers recharge slowly, any disruption to groundwater quality or availability could have long-lasting consequences for communities and industries that depend on this resource. Protecting Louisiana's freshwater aquifers is not only an environmental issue—it is also an economic one.
                            </p>
                        </div>
                    </div>

                    {/* How much water CC requires & Reversing Contamination */}
                    <div className="py-16 space-y-16">
                        <div className="space-y-6 text-xl text-gray-800 font-serif leading-relaxed">
                            <h3 className="text-3xl font-heading font-bold text-gray-900">How Much Water Carbon Capture Projects Require</h3>
                            <p>
                                Carbon capture and sequestration projects are often discussed primarily in terms of carbon dioxide. However, many of the industrial facilities associated with these projects also require <span className="font-bold">large volumes of water</span> to operate.
                            </p>
                            <p>
                                Facilities involved in carbon capture, hydrogen production, biofuels, and chemical processing frequently rely on water for cooling systems, steam generation, and industrial processing. In some cases, these facilities can require millions of gallons of water each day.
                            </p>
                            <p className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                                In regions where groundwater aquifers already support municipal drinking water, agriculture, and existing industries, additional industrial demand can place new pressure on local water resources.
                            </p>
                            <p>
                                If new industrial developments significantly increase groundwater withdrawals, local water systems may face increased competition. Groundwater recharge occurs slowly, and heavy withdrawals can lower water levels—requiring deeper wells, increased pumping costs, and additional strain on municipal infrastructure.
                            </p>
                        </div>

                        <div className="space-y-6 text-xl text-gray-800 font-serif leading-relaxed border-t border-gray-200 pt-16">
                            <h3 className="text-3xl font-heading font-bold text-gray-900">Why Groundwater Contamination Is Extremely Difficult to Reverse</h3>
                            <p>
                                Groundwater systems function very differently from surface water bodies such as rivers or lakes. When contamination occurs in surface water, the affected water can often be treated, diluted, or flushed downstream over time.
                            </p>
                            <p className="text-3xl font-bold font-heading text-brand-red my-8 text-center bg-red-50 py-6 rounded-xl">
                                Aquifers do not behave this way.
                            </p>
                            <p>
                                Water within underground aquifers moves extremely slowly through layers of sand, gravel, and rock. Because of this, contaminants that enter an aquifer can remain trapped within the groundwater system for very long periods of time. Removing or treating contaminated groundwater is often technically complex, expensive, and <span className="font-bold underline">sometimes impossible</span> to fully restore.
                            </p>
                            <p>
                                In cases where contamination occurs, communities may be forced to drill deeper wells, seek alternative water sources, or install costly treatment systems. For aquifers such as the Chicot, prevention is far more effective than remediation.
                            </p>
                            <p className="text-2xl font-bold text-brand-dark border-l-4 border-brand-red pl-6 py-2 mt-8">
                                Safeguarding Louisiana's aquifers is not only an environmental priority—it is an essential responsibility for protecting the long-term water security of the state.
                            </p>
                        </div>
                    </div>

                    {/* Why the Chicot Aquifer is in the crosshairs */}
                    <div className="bg-brand-dark text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none"></div>
                        <div className="relative z-10 space-y-8 text-xl font-serif leading-relaxed text-gray-300">
                            <h3 className="text-4xl font-heading font-bold text-white mb-8 border-b border-zinc-700 pb-6 uppercase tracking-tight">Why the Chicot Aquifer Is in the Crosshairs of CCS Development</h3>
                            
                            <p>
                                As carbon capture projects expand across the US, Louisiana has emerged as one of the primary regions targeted for large-scale storage development. The state's geology, industrial infrastructure, and existing energy corridors have made it a focal point.
                            </p>
                            <p className="text-white font-bold">
                                Much of this proposed development is concentrated in regions of Louisiana that sit above or near major freshwater aquifers, including the Chicot Aquifer.
                            </p>
                            <p>
                                The same geological characteristics that make Louisiana attractive for industrial activity—thick sediment layers, deep saline formations, and an extensive history of oil and gas development—also create complex subsurface conditions. These formations contain networks of faults, historic wellbores, and layered aquifer systems that interact.
                            </p>
                            <p>
                                Carbon sequestration projects propose injecting large volumes of compressed CO₂ thousands of feet underground. While intended to remain isolated, the scale of proposed operations raises important questions about how pressure changes and fluid movement could affect surrounding systems.
                            </p>
                            
                            <div className="bg-black/30 p-8 rounded-2xl border border-white/10 my-8">
                                <p className="text-white">
                                    At the same time, many proposed CCS projects involve the construction of extensive pipeline networks to transport CO₂. These pipelines may cross rural communities, agricultural lands, wetlands, and regions directly above important aquifer systems.
                                </p>
                            </div>

                            <p className="text-2xl text-brand-red font-bold uppercase tracking-widest text-center">
                                Because once groundwater is compromised, the consequences may extend far beyond the projects themselves and persist for generations.
                            </p>
                        </div>
                    </div>

                    {/* Placeholder: Pipeline Map Image */}
                    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center my-16 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-0"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <Activity className="text-gray-400 mb-4" size={48} />
                            <h4 className="text-2xl font-bold text-gray-800 mb-2 font-heading">[Insert MAP Image]</h4>
                            <p className="text-gray-600 max-w-2xl font-serif">
                             Map showing existing and proposed carbon capture infrastructure across Louisiana in relation to major freshwater aquifers. Dozens of proposed injection wells and hundreds of miles of CO₂ pipelines are planned across multiple parishes. Many of these projects are located in regions that rely heavily on groundwater systems such as the Chicot Aquifer for drinking water, agriculture, and local economies.
                            </p>
                        </div>
                    </div>

                    {/* What happens if an aquifer is lost */}
                    <div className="space-y-8 bg-red-50 p-10 md:p-16 rounded-[3rem] border border-red-100 text-xl font-serif leading-relaxed text-gray-800 shadow-inner">
                        <h3 className="text-4xl font-heading font-black text-brand-dark uppercase tracking-tight mb-8">What Happens If an Aquifer Is Lost</h3>
                        
                        <p>
                            Freshwater aquifers are among the most valuable natural resources a region can possess. Unlike rivers or lakes, which can be replenished relatively quickly, groundwater systems recharge slowly over long periods of time.
                        </p>
                        <p>
                            Because of this slow recharge process, damage to an aquifer can have consequences that last far longer than the events that caused it.
                        </p>
                        <p>
                            If groundwater becomes contaminated or significantly altered, restoring the aquifer to its original condition can be extremely difficult. In many cases, contaminated groundwater must be pumped, treated, and monitored for years or decades. Even with extensive treatment, it may not always be possible to fully remove contaminants.
                        </p>
                        <p>
                            For communities that rely on groundwater as their primary source of drinking water, the loss of an aquifer can require major adjustments. Municipalities may need to drill deeper wells, construct new water treatment facilities, or seek alternative water sources from distant locations. These solutions can involve substantial infrastructure costs and long-term financial burdens for local residents.
                        </p>
                        
                        <div className="border-l-8 border-brand-red pl-8 py-4 my-10 bg-white shadow-sm rounded-r-2xl pr-8">
                            <p className="font-bold">
                                Louisiana's Chicot Aquifer supports drinking water systems, agriculture, and communities across a large portion of the state. Because this aquifer recharges slowly and serves such a wide region, protecting its water quality is essential for ensuring long-term water security.
                            </p>
                        </div>

                        <p className="text-2xl text-center font-bold text-brand-dark uppercase tracking-widest mt-8">
                            Protecting Louisiana's aquifers is not simply a matter of environmental protection—it is a commitment to safeguarding the water resources that future communities will depend on long after today's industrial projects have ended.
                        </p>
                    </div>

                </section>
                {/* --- END OF MASSIVE NEW SECTION --- */}

                {/* Consequences */}
                <section className="bg-red-950 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <h2 className="text-2xl font-heading font-bold mb-6 text-brand-red uppercase tracking-widest">The "No-Go" Zone</h2>
                    <ul className="space-y-4 relative z-10">
                        <li className="flex gap-3 items-start">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0 animate-pulse"></div>
                            <span className="text-gray-300 text-lg font-serif">Potable water loss is <span className="text-white font-bold">permanent</span>. There is no cleanup for a poisoned aquifer.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0 animate-pulse"></div>
                            <span className="text-gray-300 text-lg font-serif">Toxic plumes can migrate for miles, silently poisoning municipal systems without warning.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0 animate-pulse"></div>
                            <span className="text-gray-300 text-lg font-serif">Property values will plummet as the land becomes uninhabitable and un-farmable.</span>
                        </li>
                    </ul>
                </section>

                {/* Technical Deep Dive */}
                <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 flex flex-col items-center text-center">
                    <Activity className="text-brand-blue mb-4" size={32} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Analysis</h3>
                    <p className="text-gray-600 mb-6 max-w-xl font-serif">
                        For a deeper understanding of how CO₂ injection wells jeopardize our freshwater systems, read our full technical impact report.
                    </p>
                    <a
                        href="/ccs-environmental-impact-report.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-blue hover:bg-blue-800 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all shadow-md"
                    >
                        View Environmental Impact Report (PDF)
                    </a>
                </div>

                {/* Call to Action */}
                <div className="text-center pt-8">
                    <p className="text-gray-500 italic mb-6 text-sm">
                        Sources: USGS Chicot Aquifer Hydrogeologic Framework; <a href="https://www.epa.gov/uic" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue underline decoration-dotted">EPA National UIC Database</a>; Louisiana Department of Agriculture & Forestry.
                    </p>
                    <Link to="/contact" className="inline-block bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1">
                        Stop the Contamination
                    </Link>
                </div>

            </div>
        </div>
    );
};
