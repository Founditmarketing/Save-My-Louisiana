import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_CONTENT, SITUATION_CONTENT } from '../constants';

const HERO_IMAGES = ['/atchafalaya-basin.jpg', '/sugar_cane_field.png', '/soccer_match.png', '/state-capital-hero.jpg'];

export const Home: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // Determine animation delay: if intro has been seen, 0s, otherwise 2.5s
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    const animationDelay = hasSeenIntro ? '0s' : '2.5s';

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000); // Change image every 6 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Section A: Hero (The Hook) */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-32">
                {/* Background Slider */}
                <div className="absolute inset-0 z-0">
                    {HERO_IMAGES.map((img, index) => (
                        <div
                            key={img}
                            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Louisiana Hero ${index + 1}`}
                                className="w-full h-full object-cover animate-zoom-slow"
                            />
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay, animationFillMode: 'forwards' }}>
                    {/* Animated Louisiana Flag */}
                    <img
                        src="/louisiana-flag.gif"
                        alt="Louisiana Flag"
                        className="w-16 md:w-24 h-auto mx-auto mb-6 opacity-90 filter drop-shadow-2xl"
                    />
                    <h1 className="text-3xl md:text-7xl font-heading font-bold leading-tight drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">
                        <span className="text-white">Protect Louisiana's Land, Water, Future</span>
                        <span className="text-red-500"> against carbon capture and sequestration (CCS)</span>
                    </h1>
                    <div className="space-y-4">
                        <p className="text-xl md:text-2xl font-serif italic max-w-3xl mx-auto text-white font-medium leading-relaxed">
                            "Louisiana's most precious resource — its people — is under threat from Carbon Capture & Sequestration (the permanent burial of industrial waste under our land and our water, which affects our future generations)."
                        </p>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-sm md:text-base font-bold text-white uppercase tracking-widest">— Gary Musgrove</span>
                            <span className="text-[10px] md:text-xs font-semibold text-white/70 uppercase tracking-[0.2em]">President of Save My Louisiana</span>
                        </div>
                    </div>
                    <div className="pt-8 flex flex-col items-center">
                        <a href="#situation" className="inline-block bg-brand-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1 mb-12">
                            Learn The Truth
                        </a>

                        {/* Scroll Cue */}
                        <div className="animate-bounce">
                            <ChevronDown size={32} className="text-white/70" />
                            <ChevronDown size={32} className="text-white/40 -mt-4" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section B: The Situation (Intro) */}
            <section id="situation" className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto flex flex-col gap-16 items-center">
                    <div className="w-full space-y-8 text-left">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 uppercase">
                                THE SITUATION
                            </h2>
                            <div className="w-24 h-1 bg-brand-red"></div>
                        </div>
                        
                        <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed font-serif">
                            <p>
                                Carbon capture and sequestration (CCS) is brick one of the climate change hoax road. The climate change hoax claims that green house gases, specifically carbon dioxide (CO2), are warming the planet and careening it toward emanate destruction. This claim of cataclysmic destruction has been predicted by politically motivated, perverted science since the 1970s. Multiple dates of destruction have come and gone yet, we're still here. The climate change hoax has been a decades long far left, elitist agenda born among, fostered and promulgated by such extreme far left foreign organizations as the <a href="https://www.weforum.org" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-bold">World Economic Forum</a> (<a href="https://en.wikipedia.org/wiki/Climate_change" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-bold break-words">https://en.wikipedia.org/wiki/Climate_change</a>)
                            </p>
                            <p>
                                The primary claim of the climate change hoax is that man-made CO2 resulting from the use of fossil fuels is the destructive culprit. The hoax demands that, in order to save the planet, we must mitigate man-made CO2 by reducing, eliminating or capture and burying (sequestering) fossil fuel emissions. For perspective and context, natural occurring CO2 makes up .04% of the total atmosphere and man-made CO2 accounts for only .11% of that .04%. CCS is a pointless climate change scheme costing billions of our tax dollars to capture and bury .11% of .04%. <a href="https://co2coalition.org" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-bold break-words">https://co2coalition.org</a>. From the creation of second rate "alternative" fuels such as bio-fuels, solar and wind to the unnecessary and dangerous CCS scheme itself, the concepts and agendas of climate change are founded in absurd and distorted science claiming environmental preservation while devastating actual environmental ecosystems, economic development and genuine longterm prosperity. <a href="https://co2coalition.org/publication_category/climate-issues-in-depth/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-bold break-words">https://co2coalition.org/publication_category/climate-issues-in-depth/</a>
                            </p>
                            <p>
                                Surprisingly, numerous fossil fuel companies and new opportunistic industries who produce massive amounts of man-made CO2 have paradoxically yet enthusiastically embraced the climate change hoax agenda only because doing so creates a new stream of income from federal tax incentive payments called <a href="https://www.irs.gov/credits-deductions/credit-for-carbon-oxide-sequestration" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-bold">45Q tax credits</a>. (As a reminder, those 45Q tax credit payments are coming from your paychecks, its not "free government money".) These tax "credits" created a payment scheme for the worst alleged polluters to create their "planet killing" greenhouse gas emissions and then receive payment from your tax dollars to pump the leftover compressed industrial CO2 waste beneath your feet. Its like committing a crime and then being paid for the offense as opposed to being held appropriately accountable.
                            </p>
                            <p>
                                The problem of course is, burning fossil fuels is NOT a crime. Burning fossil fuels is NOT warming the planet. Burning fossil fuels is NOT destroying the planet. Few other technologies throughout the history of mankind has created more opportunities, lifted more people from the scourge of poverty globally and advanced global civilization more than fossil fuels. Without fossil fuels, our modern civilization and all its wonders would not exist. And Louisiana has been a key player in fueling our modern civilization for nearly 100 years!
                            </p>
                            <p>
                                It is one thing to understand why the fossil fuel industry would embrace the climate change hoax (to take government money, i.e. your tax dollars to increase "profits"), but there is still the question as to why a "conservative" Republican legislature and governor would embrace and empower the far left radical ideology of climate change. Not only would they embrace it and begin using the language of climate change, they would pass laws violating the state's constitution to make it happen! It makes one wonder, who are these people and what would motivate them to support such far left ideology in an overwhelmingly conservative state?
                            </p>
                            <p>
                                As you will learn through this website, in order to make the climate change agenda hoax CCS scheme possible, our legislature and governor have not only failed to defend us against this threat, they have actively encouraged and empowered the threat through the passing of laws that violate our constitution and overtly subordinate our property rights to private industry through the force of law. On this site with multiple links to the state's official legislative website, you'll learn that the legislature granted the power of eminent domain to the CCS industry in order to take private land that private industry deems necessary for its private profits. Taking private property in the name of "economic development" is a clear violation of both the US Constitution and the Louisiana Constitution and constitutes an immoral and clear violation of traditional western governmental values to protect Life, Liberty and Property.
                            </p>
                            <p>
                                Across Louisiana, existing and emerging opportunist industries have bought into the climate change agenda hoax solely to profit from federal tax payments of the Biden Green New Deal and they have done so with the blessing and aid of "conservative" Republicans. They intend to inject millions of tons of captured industrial carbon dioxide (CO2) waste deep underground in what is called carbon capture and storage (CCS) projects. These projects, made up of numerous injection wells, sit directly above the Chicot Aquifer, the main drinking-water source for more than 700,000 residents across 15 parishes. There are also numerous CCS storage projects slated across our lands, wetlands and lakes such as Lake Maurepas as well as many other locations. If this experiment fails and the industrial CO2 waste enters our water sources, it will form carbonic acid contaminating our drinking water forever. No amount of economic development is worth the permanent risk to our land, our water or the future generations to come.
                            </p>
                        </div>

                        <div className="space-y-4 pt-10">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 uppercase">
                                THE SOLUTION
                            </h2>
                            <div className="w-24 h-1 bg-brand-red"></div>
                        </div>

                        <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed font-serif">
                            <p>
                                Louisiana citizens must take action. No one will stand up for us if we don't stand for ourselves. We must make our voices of disapproval of the CCS hoax and the radicalism of climate change heard by the Louisiana Legislature and the Governor.
                            </p>
                            <p>
                                The first step SML took was to challenge this threat to constitutional authority by filing a suit against the state petitioning the Judicial branch to strike the unconstitutional laws from the state statutes thereby returning constitutionally guaranteed property rights to the citizens of Louisiana. The suit was filed on 20 November 2025 in the 19th Judicial District Court in Baton Rouge. <Link to="/legal-action" className="text-brand-blue hover:underline font-bold">(Link to law suit document)</Link>.
                            </p>
                            <p>
                                Second, we must see with clear eyes what CCS is and understand its origins. NATURAL CO2 is required for our world to live and thrive. It is the gas that fuels plant life from trees to the food we eat. It is an essential part of the circle of life. But when you capture industrial CO2 waste, compress it at high pressure levels and inject it into the ground, we take enormous risks to the stability of our amazing land and water ecosystem that sustains our lives. No amount of "economic development" is worth the risk of losing the land and water that sustains our lives.
                            </p>
                            <p>
                                The governor, members of the legislature, and industry insiders have mocked us with contempt for asking questions about their CCS schemes that, if they succeed, will be a permanent situation of which we will have to bear the consequences. We must challenge them none the same. It is our duty to ourselves and our posterity. Let us begin....
                            </p>
                        </div>
                    </div>
                    
                    <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl flex-shrink-0">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/VqGIHbSprVk?si=u-5C_ofomPJ49CUS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                {/* Scroll Cue */}
                <div className="mt-16 flex justify-center animate-bounce">
                    <div className="flex flex-col items-center">
                        <ChevronDown size={32} className="text-gray-400" />
                        <ChevronDown size={32} className="text-gray-200 -mt-4" />
                    </div>
                </div>
            </section>

            {/* Section B2: Condensed About Us */}
            <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div className="flex-1 space-y-8 text-left">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 uppercase">
                                ABOUT US
                            </h2>
                            <div className="w-24 h-1 bg-brand-blue"></div>
                        </div>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif">
                            Save My Louisiana (SML) is a 501(c)(4) non-profit citizen volunteer organization dedicated to educating and empowering Louisianans to defend our foundational rights of Life, Liberty, and Property. We believe in protecting our life-sustaining environment—our land, lakes, bayous, aquifers, and coastal regions—for today and future generations. While we are strongly PRO-economic development and PRO-industry, we are actively fighting against any action that uses the force of law to undermine citizens' constitutionally guaranteed rights. SML is absolutely independent; we carry no messages for any other organizations and rely solely on the financial support of individual Louisiana citizens.
                        </p>
                        <div className="pt-4">
                            <Link to="/about" className="inline-block bg-brand-blue hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    
                    {/* Right Column: Image */}
                    <div className="flex-1 w-full relative">
                        {/* Decorative Background Element */}
                        <div className="absolute -inset-4 bg-brand-blue/10 rounded-[2rem] transform rotate-3 scale-105 z-0 hidden md:block"></div>
                        <img 
                            src="/about_us_signup.png" 
                            alt="Non-profit volunteers signing people up" 
                            className="w-full h-auto object-cover rounded-2xl shadow-xl relative z-10"
                        />
                    </div>
                </div>
            </section>

            {/* Section C: "THE THREATS" (The Core Navigation) */}
            <section id="know" className="py-24 px-6 bg-gray-200 relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-10 space-y-6">
                        <img src="/cropped-Save-My-LA-logo.png" alt="Logo Stamp" className="w-20 mx-auto opacity-90" />
                        <h2 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 tracking-tight leading-none uppercase">
                            THE THREATS
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-800 font-serif italic max-w-4xl mx-auto font-medium mt-4 inline-block">
                            The facts are clear. The risks are documented. The threat is real.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Property Rights */}
                        <Link to="/property-rights" className="group bg-white border border-gray-200 hover:border-brand-blue/30 transition-all duration-300 flex flex-col items-start relative overflow-hidden h-full shadow-sm hover:shadow-lg rounded-xl">
                            <div className="w-full h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src="/oversight-gaps-new.jpg"
                                    alt="Property Rights"
                                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col h-full w-full">
                                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-widest text-gray-900 group-hover:text-brand-blue transition-colors">
                                    Property Rights
                                </h3>

                                <p className="text-gray-900 text-base leading-relaxed mb-6 font-medium">
                                    Eminent domain is unconstitutionally being handed to private companies for CCS projects, threatening Louisiana land owners.
                                </p>

                                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-brand-blue transition-colors flex items-center border-b-2 border-transparent group-hover:border-brand-blue pb-1 mt-auto">
                                    Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>

                        {/* Card 2: Environmental Danger */}
                        <Link to="/environmental-dangers" className="group bg-white border border-gray-200 hover:border-brand-red/30 transition-all duration-300 flex flex-col items-start relative overflow-hidden h-full shadow-sm hover:shadow-lg rounded-xl">
                            <div className="w-full h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-brand-red/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src="/co2-leak.jpg"
                                    alt="Environmental Danger"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col h-full w-full">
                                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-widest text-gray-900 group-hover:text-brand-red transition-colors">
                                    Environmental & Economic Dangers
                                </h3>

                                <p className="text-gray-900 text-base leading-relaxed mb-6 font-medium">
                                    Documented failures and acidification risks to our $2.4B fisheries and fragile wetlands ecosystem.
                                </p>

                                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-brand-red transition-colors flex items-center border-b-2 border-transparent group-hover:border-brand-red pb-1 mt-auto">
                                    Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                        
                        {/* Card 3: Water & Aquifers */}
                        <Link to="/water-in-crosshairs" className="group bg-white border border-gray-200 hover:border-gray-800/30 transition-all duration-300 flex flex-col items-start relative overflow-hidden h-full shadow-sm hover:shadow-lg rounded-xl">
                            <div className="w-full h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gray-800/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src="/chicot-aquifer.png"
                                    alt="Water & Aquifers"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col h-full w-full">
                                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-widest text-gray-900 group-hover:text-gray-800 transition-colors">
                                    Water & Aquifers
                                </h3>

                                <p className="text-gray-900 text-base leading-relaxed mb-6 font-medium">
                                    33 CCS projects and 107 wells targeting the Chicot Aquifer, threatening the water supply for 15 parishes.
                                </p>

                                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-gray-800 transition-colors flex items-center border-b-2 border-transparent group-hover:border-gray-800 pb-1 mt-auto">
                                    Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section C2: More Resources — Card Grid */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-10 space-y-6">
                        <h2 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 tracking-tight leading-none uppercase">
                            GET INFORMED & ACT
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-800 font-serif italic max-w-4xl mx-auto font-medium mt-4 inline-block">
                            Follow the money, read the documents, and take a stand for Louisiana.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 4: Follow The Money */}
                        <Link to="/follow-the-money" className="group bg-white border border-gray-200 hover:border-brand-red/30 transition-all duration-300 flex flex-col items-start relative overflow-hidden h-full shadow-sm hover:shadow-lg rounded-xl">
                            <div className="w-full h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-brand-red/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src="/political_bribery.png"
                                    alt="Follow The Money"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col h-full w-full">
                                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-widest text-gray-900 group-hover:text-brand-red transition-colors">
                                    Follow The Money
                                </h3>

                                <p className="text-gray-900 text-base leading-relaxed mb-6 font-medium">
                                    The CCS explosion in Louisiana is driven by the 45Q Tax Credit—up to $85 per ton of CO₂ stored, equating to billions in corporate rewards at taxpayer expense.
                                </p>

                                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-brand-red transition-colors flex items-center border-b-2 border-transparent group-hover:border-brand-red pb-1 mt-auto">
                                    Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>

                        {/* Card 5: Documentation & Reporting */}
                        <Link to="/documentation" className="group bg-white border border-gray-200 hover:border-brand-blue/30 transition-all duration-300 flex flex-col items-start relative overflow-hidden h-full shadow-sm hover:shadow-lg rounded-xl">
                            <div className="w-full h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src="/court_documents.png"
                                    alt="Documentation & Reporting"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col h-full w-full">
                                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-widest text-gray-900 group-hover:text-brand-blue transition-colors">
                                    Reports & Documents
                                </h3>

                                <p className="text-gray-900 text-base leading-relaxed mb-6 font-medium">
                                    SML has filed suit challenging unconstitutional eminent domain provisions related to CCUS. Review the legal filings and key documents.
                                </p>

                                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-brand-blue transition-colors flex items-center border-b-2 border-transparent group-hover:border-brand-blue pb-1 mt-auto">
                                    Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>

                        {/* Card 6: Take Action */}
                        <Link to="/contact" className="group bg-white border border-gray-200 hover:border-gray-800/30 transition-all duration-300 flex flex-col items-start relative overflow-hidden h-full shadow-sm hover:shadow-lg rounded-xl">
                            <div className="w-full h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gray-800/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                                <img
                                    src="/working_class_petition.png"
                                    alt="Take Action"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 flex flex-col h-full w-full">
                                <h3 className="text-xl font-bold mb-4 font-heading uppercase tracking-widest text-gray-900 group-hover:text-gray-800 transition-colors">
                                    Take Action
                                </h3>

                                <p className="text-gray-900 text-base leading-relaxed mb-6 font-medium">
                                    Stand up for Louisiana. Your voice, your vote, and your support are critical to keeping SML in the courtroom and securing our future.
                                </p>

                                <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-gray-800 transition-colors flex items-center border-b-2 border-transparent group-hover:border-gray-800 pb-1 mt-auto">
                                    Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section D: The Closing (Pre-Footer) */}
            <section className="py-24 px-6 bg-brand-dark text-white relative overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red rounded-full filter blur-[100px]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                        The Chicot Aquifer is Louisiana's lifeline. <span className="text-brand-red">Once polluted, it cannot be restored.</span>
                    </h2>https://open.spotify.com/track/4epWIVSZM9MLbBZE6hQNEh
                    <p className="text-xl text-gray-300 font-serif max-w-2xl mx-auto">
                        Join Save My Louisiana in demanding a moratorium on CO₂ injection beneath our water.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1">
                            Join The Movement
                        </Link>
                        <Link to="/donate" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/50 px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg transform hover:-translate-y-1">
                            Donate Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
