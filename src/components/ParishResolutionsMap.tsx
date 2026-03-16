import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { ExternalLink, Info } from 'lucide-react';

const geoUrl = '/us-counties.json';

// Map of parish names to their specific resolution PDF files
const PARISH_RESOLUTIONS: Record<string, string> = {
    'Iberia': '/15 parishes/#2026-04 - Iberia P  Resolution to State of Louisiana Opposing Class VI Injection Wells of Carbon Dioxide Gases.pdf',
    'Jefferson Davis': '/15 parishes/19. Jeff Davis CO2 Letter to Governor Landry.pdf',
    'Allen': '/15 parishes/6674 Resolution - October 2025 Allen P.pdf',
    'Bienville': '/15 parishes/Document_20260220_0001 Bienvile Parish.pdf',
    'Evangeline': '/15 parishes/Evangeline Resolution Opposing Class VI Carbon sequestration Wells 3.2.26.pdf',
    'Livingston': '/15 parishes/FILE_7910 Livingston Parish.pdf',
    'Grant': '/15 parishes/Grant P Resolution 34-2025 Opposistion of Carbon Capture.pdf',
    'Cameron': '/15 parishes/R 1222 CCS Cameron P.pdf',
    'Beauregard': '/15 parishes/RES 20251007 BPPJ 42-2025 Opposition to Class VI Injection Wells - Exe.pdf',
    'Sabine': '/15 parishes/Res. No. 9748-Resolution in Opposition to all Carbon Capture Facilities in Sabine Parish.pdf',
    'St. Mary': '/15 parishes/Resolution St. Mary Parish Carbon Capture .pdf',
    'St. Martin': '/15 parishes/St Martin  Resolution Xerox Scan_03112026095220.PDF',
    'St. Helena': '/15 parishes/St. Helena Resolution Carbon Capture.pdf',
    'Vernon': '/15 parishes/Vernon P 2025.11.17 Res No 48 - Oppose CCS.pdf',
    'West Baton Rouge': '/15 parishes/WB Rouge Resolution 13of2025_Carbon_Capture_Sequestration_Storage_Moratorium_05222025.pdf'
};

export const ParishResolutionsMap: React.FC = () => {
    const [tooltipContent, setTooltipContent] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (name: string, e: React.MouseEvent) => {
        setTooltipContent(name);
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
        setTooltipContent('');
    };

    const handleParishClick = (name: string) => {
        const link = PARISH_RESOLUTIONS[name];
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="w-full relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-200 shadow-xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-8">
            {/* Context/Legend Side */}
            <div className="flex-1 space-y-6 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 text-brand-red rounded-full font-bold uppercase tracking-widest text-sm">
                    <Info size={18} /> Interactive Map
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight">
                    15 Parishes Have Passed Anti-CCS Resolutions
                </h3>
                <p className="text-lg text-gray-700 font-serif leading-relaxed">
                    Local governments across Louisiana are pushing back against the dangerous expansion of Carbon Capture and Sequestration. They recognize the threat to our aquifers, property rights, and local economies.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        How to use this map:
                    </p>
                    <ul className="text-gray-600 space-y-2 text-base font-medium">
                        <li className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-brand-red inline-block flex-shrink-0"></span>
                            <span>Hover over highlighted <strong className="text-gray-900">Red Parishes</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                            <ExternalLink size={16} className="text-brand-blue flex-shrink-0" />
                            <span><strong className="text-gray-900">Click</strong> to open and read their official anti-CCS resolution</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 w-full relative min-h-[400px]">
                <ComposableMap 
                    projection="geoMercator" 
                    projectionConfig={{ 
                        center: [-92.2, 31.0], // Center on Louisiana
                        scale: 5000 
                    }}
                    className="w-full h-full"
                    style={{ background: "transparent" }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies
                                // Filter to only show Louisiana (State FIPS code is 22)
                                .filter(geo => geo.id.startsWith('22'))
                                .map(geo => {
                                    const parishName = geo.properties.name;
                                    const hasResolution = Object.keys(PARISH_RESOLUTIONS).includes(parishName);

                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onClick={() => handleParishClick(parishName)}
                                            onMouseEnter={(e) => handleMouseEnter(parishName, e)}
                                            onMouseMove={handleMouseMove}
                                            onMouseLeave={handleMouseLeave}
                                            style={{
                                                default: {
                                                    fill: hasResolution ? '#fde8e8' : '#e5e7eb', // brand-red very light vs gray-200
                                                    stroke: hasResolution ? '#e90000' : '#ffffff', // brand-red stroke vs white
                                                    strokeWidth: hasResolution ? 1.5 : 1,
                                                    outline: "none",
                                                    transition: "all 250ms"
                                                },
                                                hover: {
                                                    fill: hasResolution ? '#e90000' : '#d1d5db', // brand-red vs gray-300
                                                    stroke: hasResolution ? '#990000' : '#ffffff',
                                                    strokeWidth: 2,
                                                    outline: "none",
                                                    cursor: hasResolution ? "pointer" : "default",
                                                    transition: "all 250ms"
                                                },
                                                pressed: {
                                                    fill: hasResolution ? '#b90000' : '#d1d5db',
                                                    stroke: '#ffffff',
                                                    outline: "none"
                                                }
                                            }}
                                        />
                                    );
                                })
                        }
                    </Geographies>
                </ComposableMap>
                
                {/* Tooltip */}
                {tooltipContent && (
                    <div 
                        className="fixed z-50 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl font-bold uppercase tracking-wider text-sm pointer-events-none transform -translate-x-1/2 -translate-y-[150%] flex items-center gap-2"
                        style={{ left: mousePosition.x, top: mousePosition.y }}
                    >
                        {tooltipContent} Parish
                        {Object.keys(PARISH_RESOLUTIONS).includes(tooltipContent) && (
                           <span className="bg-brand-red text-white text-[10px] px-2 py-0.5 rounded-full ml-2">Click to View PDF</span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
