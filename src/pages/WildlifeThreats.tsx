
import React from 'react';
import { ArrowLeft, Fish, DollarSign, Skull, Droplets, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WildlifeThreats: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/wildlifethreats.png" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-green-900/85 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <Link to="/#know" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors uppercase tracking-widest text-xs font-bold">
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        Threats to Wildlife and Wetlands
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-green-100 max-w-2xl mx-auto">
                        Our bayous are not just scenery. They are an economic engine and a delicate ecosystem that acidic leaks would destroy.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

                {/* Acidification */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 border-l-4 border-green-600 pl-4">
                        The Chemistry of Collapse
                    </h2>
                    <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                        <h3 className="text-xl font-bold text-green-900 mb-4">Carbonic Acid & Shellfish</h3>
                        <p className="text-gray-700 leading-relaxed font-serif">
                            When CO₂ leaks into water, it creates <span className="font-bold">carbonic acid</span>. This lowers the pH of the water, making it acidic. In high enough concentrations, this acidity literally <span className="font-bold text-red-600">dissolves the calcium carbonate shells</span> of crawfish, oysters, and mussels—the foundation of our wetland food chain.
                        </p>
                    </div>
                </section>

                {/* Economic Hit */}
                <section className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-gray-100 p-3 rounded-full shrink-0">
                            <DollarSign size={24} className="text-green-700" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">The $2.4 Billion Risk</h2>
                            <p className="text-lg text-gray-700 leading-relaxed font-serif">
                                Louisiana’s commercial fisheries are a <span className="font-bold">$2.4 billion industry</span>. One major leak acidification event could wipe out entire seasons of harvest, devastating safe coastal communities that have relied on the water for generations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Toxic Chain */}
                <section className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-gray-100 p-3 rounded-full shrink-0">
                            <Skull size={24} className="text-gray-700" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Metal Mobilization & The Food Chain</h2>
                            <p className="text-lg text-gray-700 leading-relaxed font-serif">
                                Acidified water doesn't just kill fish directly. It pulls heavy metals like iron and manganese from the soil. This creates toxic orange bacterial mats and allows metals to bioaccumulate, travelling up the food chain to herons, alligators, and eventually, humans.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Gulf Coast & Estuaries Section */}
                <section className="space-y-8 py-8 border-y border-gray-100">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 text-center">
                        The Estuary Crisis: Our Coastal Lifeblood
                    </h2>
                    <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto font-serif">
                        Louisiana's estuaries are the nursery for the entire Gulf of Mexico. CCS leaks in these fragile zones don't just stay local—they ripple through our entire coastal economy.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-green-50/50 p-8 rounded-3xl border border-green-100 space-y-4">
                            <h3 className="font-bold text-xl text-green-900 flex items-center gap-2">
                                <Fish size={20} /> Shrimp & Oysters
                            </h3>
                            <p className="text-gray-700 font-serif leading-relaxed">
                                Shrimp and oysters are the cornerstones of our coastal economy. They require specific pH levels and clean water to thrive. Carbonic acid from CCS leaks can <span className="font-bold">decimate larval populations</span> and erode the very shells that oysters need to survive, effectively killing the harvest before it even begins.
                            </p>
                            {/* Shrimp Farmers image placeholder */}
                            <div className="rounded-2xl overflow-hidden border border-green-200 shadow-sm bg-green-50/30 mt-4">
                                <div className="h-48 flex items-center justify-center bg-green-100/50">
                                    <div className="text-center p-4">
                                        <ImageIcon size={40} className="mx-auto text-green-300 mb-2" />
                                        <p className="text-green-600 font-bold uppercase tracking-widest text-xs">[PLACEHOLDER]</p>
                                        <p className="text-green-500 text-xs mt-1">Shrimp Farmers image pending</p>
                                    </div>
                                </div>
                                <div className="p-3 bg-white text-center">
                                    <p className="font-bold text-green-900 text-sm">Shrimp Farmers</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50/50 p-8 rounded-3xl border border-green-100 space-y-4">
                            <h3 className="font-bold text-xl text-green-900 flex items-center gap-2">
                                <Droplets size={20} /> Swamp Lands & Wetlands
                            </h3>
                            <p className="text-gray-700 font-serif leading-relaxed">
                                Our swamp lands are nature's filter, but they cannot handle the chemical assault of acidified water. Soil degradation and the loss of wetland vegetation to corrosion weaken our <span className="font-bold">natural hurricane protection</span>, leaving inland communities more vulnerable to storm surges and coastal erosion.
                            </p>
                            {/* Bayou image placeholder */}
                            <div className="rounded-2xl overflow-hidden border border-green-200 shadow-sm bg-green-50/30 mt-4">
                                <div className="h-48 flex items-center justify-center bg-green-100/50">
                                    <div className="text-center p-4">
                                        <ImageIcon size={40} className="mx-auto text-green-300 mb-2" />
                                        <p className="text-green-600 font-bold uppercase tracking-widest text-xs">[PLACEHOLDER]</p>
                                        <p className="text-green-500 text-xs mt-1">Bayou image pending</p>
                                    </div>
                                </div>
                                <div className="p-3 bg-white text-center">
                                    <p className="font-bold text-green-900 text-sm">Bayou</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-dark text-white p-8 rounded-3xl text-center space-y-4 shadow-xl">
                        <p className="text-xl font-serif italic text-green-100">
                            "If we lose the estuaries, we lose the Gulf. Once the chemistry changes, the traditional Louisiana way of life becomes a memory."
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="text-center pt-8">
                    <p className="text-gray-500 italic mb-6 text-sm">
                        Sources: <a href="https://www.wlf.louisiana.gov" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red underline decoration-dotted">Louisiana Department of Wildlife & Fisheries (2023)</a>; <a href="https://www.noaa.gov" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red underline decoration-dotted">NOAA Gulf Ecology Division (2022)</a>.
                    </p>
                    <Link to="/contact" className="inline-block bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1">
                        Protect Our Sportsman's Paradise
                    </Link>
                </div>

            </div>
        </div>
    );
};
