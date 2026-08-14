import React, { useState, useEffect } from 'react';
import { FileText, Video as VideoIcon, Megaphone, DollarSign, Calendar, Download, ExternalLink, Maximize2 } from 'lucide-react';
import { Lightbox } from '../components/Lightbox';
import { PageSEO } from '../components/PageSEO';

interface NewsItem {
    id: string;
    title: string;
    type: 'article' | 'video' | 'announcement' | 'gofundme' | 'resource';
    content: string;
    fileUrl?: string;
    fileName?: string;
    gofundmeUrl?: string;
    documentUrl?: string;
    documentName?: string;
    createdAt: any;
}

const isImage = (fileName?: string) => {
    if (!fileName) return false;
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(fileName);
};

export const NewsUpdates: React.FC = () => {
    const [items, setItems] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchNews = async () => {
            try {
                const res = await fetch(`/api/admin/news?t=${Date.now()}`);
                if (res.ok) {
                    const data = await res.json();
                    setItems(data.map((i: any) => ({
                        ...i,
                        fileUrl: i.fileurl,
                        fileName: i.filename,
                        gofundmeUrl: i.gofundmeurl,
                        documentUrl: i.documenturl,
                        documentName: i.documentname,
                        createdAt: new Date(i.createdat)
                    })));
                }
            } catch (err) {
                console.error('Error fetching news:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const renderItemContent = (item: NewsItem) => {
        const dateStr = item.createdAt ? item.createdAt.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }) : '';

        switch (item.type) {


            case 'video':
                return (
                    <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col gap-6 w-full h-full">
                        <div className="flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-red-50 text-red-600 p-2 rounded-full shrink-0">
                                    <VideoIcon size={18} />
                                </span>
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] flex gap-3 flex-wrap">
                                    VIDEO CLIP
                                    {dateStr && <span className="flex items-center gap-1"><Calendar size={12} /> {dateStr}</span>}
                                </span>
                            </div>
                            <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">{item.title}</h2>
                            {item.content && (
                                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap flex-1">{item.content}</p>
                            )}
                        </div>
                        {item.fileUrl && (
                            <div className="w-full shrink-0 bg-black rounded-xl overflow-hidden shadow-inner group relative mt-auto aspect-video">
                                <video 
                                    src={item.fileUrl} 
                                    controls 
                                    className="w-full h-full object-cover"
                                    preload="metadata"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </div>
                );

            case 'gofundme':
                return (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50/20 p-6 rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-all text-center flex flex-col items-center gap-6 w-full h-full">
                        <div className="bg-green-100 p-5 rounded-full text-green-600 shrink-0 shadow-inner mt-4">
                            <DollarSign size={32} />
                        </div>
                        <div className="flex-1 flex flex-col items-center w-full">
                            <div className="text-green-600/60 font-bold uppercase tracking-widest text-[10px] mb-2 flex justify-center items-center gap-2">
                                <Calendar size={12} /> {dateStr}
                            </div>
                            <h2 className="text-xl font-heading font-bold text-green-900 mb-3">{item.title}</h2>
                            {item.content && (
                                <p className="text-green-800/80 text-sm leading-relaxed mb-6 flex-1">{item.content}</p>
                            )}
                            {item.gofundmeUrl && (
                                <a 
                                    href={item.gofundmeUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="mt-auto w-full inline-flex justify-center items-center bg-green-600 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all gap-2"
                                >
                                    Donate Here <ExternalLink size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                );

            case 'article':
            case 'announcement':
            default:
                const isAnnounce = item.type === 'announcement';
                const hasImagePreview = isImage(item.fileName) && item.fileUrl;
                
                return (
                    <div className={`bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col overflow-hidden w-full h-full ${isAnnounce ? 'border-amber-200' : 'border-gray-100'}`}>
                        {item.fileUrl && (
                            <div className="w-full h-48 shrink-0 bg-gray-50 border-b border-gray-100 flex flex-col items-center justify-center p-6 relative group overflow-hidden">
                                {hasImagePreview ? (
                                    <button
                                        onClick={() => setLightboxImage(item.fileUrl || null)}
                                        className="absolute inset-0 w-full h-full text-left focus:outline-none"
                                        aria-label="View larger image"
                                    >
                                        <img src={item.fileUrl} alt={item.fileName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                            <div className="bg-black/30 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                                                <Maximize2 size={24} />
                                            </div>
                                        </div>
                                    </button>
                                ) : (
                                    <div className="flex flex-col items-center text-center gap-2">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isAnnounce ? 'bg-amber-100 text-amber-600' : 'bg-blue-50 text-brand-blue'}`}>
                                            <FileText size={24} />
                                        </div>
                                        <span className="text-xs font-medium text-gray-500 break-words w-full truncate px-4">{item.fileName || 'Attached Document'}</span>
                                    </div>
                                )}
                                
                                {hasImagePreview ? (
                                    <button 
                                        onClick={() => setLightboxImage(item.fileUrl || null)}
                                        className="relative z-10 mt-4 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-md flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                                    >
                                        <Maximize2 size={12} /> View Full Image
                                    </button>
                                ) : (
                                    <a 
                                        href={item.fileUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`relative z-10 mt-4 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-md flex items-center gap-2 ${isAnnounce ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-brand-blue hover:bg-blue-800 text-white'}`}
                                    >
                                        <Download size={12} /> View / Download
                                    </a>
                                )}
                            </div>
                        )}
                        
                        <div className={`p-6 flex-1 flex flex-col ${isAnnounce ? 'bg-amber-50/30' : ''}`}>
                            <div className="flex items-center gap-2 mb-4">
                                <span className={`p-1.5 rounded-full shrink-0 ${isAnnounce ? 'bg-amber-100 text-amber-600' : 'bg-blue-50 text-brand-blue'}`}>
                                    {isAnnounce ? <Megaphone size={16} /> : <FileText size={16} />}
                                </span>
                                <span className={`font-bold uppercase tracking-widest text-[9px] flex gap-3 flex-wrap ${isAnnounce ? 'text-amber-800/60' : 'text-gray-400'}`}>
                                    {isAnnounce ? 'OFFICIAL ANNOUNCEMENT' : 'ARTICLE / POST'}
                                    {dateStr && <span className="flex items-center gap-1"><Calendar size={10} /> {dateStr}</span>}
                                </span>
                            </div>
                            <h2 className={`text-xl font-heading font-bold mb-3 ${isAnnounce ? 'text-amber-900' : 'text-gray-900'}`}>{item.title}</h2>
                            
                            <div className="prose prose-sm max-w-none flex-1">
                                {item.content && (
                                    <p className={`text-sm leading-relaxed whitespace-pre-wrap ${isAnnounce ? 'text-amber-800/80' : 'text-gray-600'}`}>{item.content}</p>
                                )}
                            </div>
                        </div>
                    </div>
                );
        }
    };

    const mainNews = items.filter(i => i.type !== 'resource');
    const resourceBlocks = items.filter(i => i.type === 'resource');

    return (
        <div className="bg-gray-50 min-h-screen pb-24 font-sans text-gray-900">
            <PageSEO
                title="News & Updates"
                description="The latest articles, announcements, and videos from the Save My Louisiana campaign against unsafe carbon capture and sequestration (CCS) projects."
                path="/news"
            />
            {/* Hero Section */}
            <section className="bg-brand-dark text-white py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full filter blur-[100px]"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-7xl font-heading font-bold tracking-tight">News & <span className="text-brand-red">Updates</span></h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        The latest articles, announcements, and videos from the Save My Louisiana campaign.
                    </p>
                </div>
            </section>

            <div className="max-w-[1600px] mx-auto px-6 mt-16 md:mt-24">
                {loading ? (
                    <div className="flex justify-center py-32">
                        <div className="animate-spin w-12 h-12 border-4 border-brand-blue border-t-transparent rounded-full"></div>
                    </div>
                ) : mainNews.length === 0 && resourceBlocks.length === 0 ? (
                    <div className="text-center py-32 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-3xl mx-auto">
                        <Megaphone size={64} className="text-gray-200 mx-auto mb-6" />
                        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">No Updates Yet</h3>
                        <p className="text-gray-500">Check back later for the latest news and announcements.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 items-stretch">
                        {mainNews.map((item, index) => (
                            <div key={item.id} className="animate-fade-in-up flex" style={{ animationDelay: `${index * 50}ms` }}>
                                {renderItemContent(item)}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {resourceBlocks.length > 0 && (
                <div className="max-w-[1600px] mx-auto px-6 mt-16 md:mt-24 border-t border-gray-200 pt-16">
                    <div className="flex flex-col items-center mb-12 text-center">
                        <span className="bg-blue-50 text-brand-blue px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-4">Official Downloads</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900">Important Documents & Resources</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center max-w-6xl mx-auto">
                        {resourceBlocks.map((item, index) => (
                            <div key={item.id} className="animate-fade-in-up bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all" style={{ animationDelay: `${index * 50}ms` }}>
                                {item.fileUrl && (
                                    <div className="w-full h-56 shrink-0 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
                                        <img src={item.fileUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                )}
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{item.title}</h3>
                                    {item.content && (
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">{item.content}</p>
                                    )}
                                    {item.documentUrl && (
                                        <a href={item.documentUrl} target="_blank" rel="noopener noreferrer" className="mt-auto w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-800 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-md transition-all group-hover:shadow-lg">
                                            <Download size={16} /> Download {item.documentName || 'Document'}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {lightboxImage && (
                <Lightbox 
                    images={[lightboxImage]} 
                    initialIndex={0} 
                    isOpen={!!lightboxImage} 
                    onClose={() => setLightboxImage(null)} 
                />
            )}
        </div>
    );
};
