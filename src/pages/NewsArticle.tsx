import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileText, Video as VideoIcon, Megaphone, DollarSign, Calendar, Download, ExternalLink, ArrowLeft } from 'lucide-react';
import { Lightbox } from '../components/Lightbox';
import { PageSEO } from '../components/PageSEO';
import { ShareButtons } from '../components/ShareButtons';

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
    createdAt: Date | null;
}

const isImage = (fileName?: string) => {
    if (!fileName) return false;
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(fileName);
};

const TYPE_META: Record<string, { label: string; icon: React.ReactNode }> = {
    article: { label: 'Article / Post', icon: <FileText size={16} /> },
    announcement: { label: 'Official Announcement', icon: <Megaphone size={16} /> },
    video: { label: 'Video Clip', icon: <VideoIcon size={16} /> },
    gofundme: { label: 'Fundraiser', icon: <DollarSign size={16} /> },
    resource: { label: 'Resource', icon: <Download size={16} /> },
};

export const NewsArticle: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<NewsItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchItem = async () => {
            try {
                const res = await fetch(`/api/admin/news?id=${id}&t=${Date.now()}`);
                if (!res.ok) {
                    setNotFound(true);
                    return;
                }
                const i = await res.json();
                setItem({
                    ...i,
                    fileUrl: i.fileurl,
                    fileName: i.filename,
                    gofundmeUrl: i.gofundmeurl,
                    documentUrl: i.documenturl,
                    documentName: i.documentname,
                    createdAt: i.createdat ? new Date(i.createdat) : null,
                });
            } catch (err) {
                console.error('Error fetching article:', err);
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };
        fetchItem();
    }, [id]);

    if (loading) {
        return (
            <div className="bg-gray-50 min-h-screen flex justify-center pt-48">
                <div className="animate-spin w-12 h-12 border-4 border-brand-blue border-t-transparent rounded-full"></div>
            </div>
        );
    }

    if (notFound || !item) {
        return (
            <div className="bg-gray-50 min-h-screen pb-24 font-sans text-gray-900">
                <PageSEO title="Update Not Found" description="This news update could not be found." path={`/news/${id}`} noIndex />
                <div className="max-w-3xl mx-auto px-6 pt-40 text-center">
                    <Megaphone size={64} className="text-gray-200 mx-auto mb-6" />
                    <h1 className="text-3xl font-heading font-bold text-gray-900 mb-3">Update Not Found</h1>
                    <p className="text-gray-500 mb-8">This news update may have been removed.</p>
                    <Link to="/news" className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-blue-800 transition-all">
                        <ArrowLeft size={14} /> Back to News & Updates
                    </Link>
                </div>
            </div>
        );
    }

    const dateStr = item.createdAt ? item.createdAt.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }) : '';
    const meta = TYPE_META[item.type] || TYPE_META.article;
    const hasImagePreview = isImage(item.fileName) && item.fileUrl;
    const shareUrl = `https://savemylouisiana.org/news/${item.id}`;
    const description = (item.content || 'News from the Save My Louisiana campaign.').replace(/\s+/g, ' ').trim().slice(0, 200);

    return (
        <div className="bg-gray-50 min-h-screen pb-24 font-sans text-gray-900">
            <PageSEO
                title={item.title}
                description={description}
                path={`/news/${item.id}`}
                image={hasImagePreview ? item.fileUrl : undefined}
            />

            {/* Hero Section */}
            <section className="bg-brand-dark text-white pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full filter blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full filter blur-[100px]"></div>
                </div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <Link to="/news" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px] mb-8">
                        <ArrowLeft size={14} /> All News & Updates
                    </Link>
                    <div className="flex items-center gap-3 mb-4 text-gray-300">
                        <span className="bg-white/10 p-2 rounded-full shrink-0">{meta.icon}</span>
                        <span className="font-bold uppercase tracking-widest text-[10px] flex gap-3 flex-wrap">
                            {meta.label}
                            {dateStr && <span className="flex items-center gap-1"><Calendar size={12} /> {dateStr}</span>}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">{item.title}</h1>
                </div>
            </section>

            <div className="max-w-3xl mx-auto px-6 mt-10">
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden">
                    {item.type === 'video' && item.fileUrl && (
                        <div className="w-full bg-black aspect-video">
                            <video src={item.fileUrl} controls className="w-full h-full object-contain" preload="metadata">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}

                    {item.type !== 'video' && hasImagePreview && (
                        <button
                            onClick={() => setLightboxImage(item.fileUrl || null)}
                            className="block w-full focus:outline-none group relative"
                            aria-label="View larger image"
                        >
                            <img src={item.fileUrl} alt={item.fileName} className="w-full max-h-[560px] object-cover group-hover:opacity-95 transition-opacity" />
                        </button>
                    )}

                    <div className="p-8 md:p-10">
                        {item.content && (
                            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">{item.content}</p>
                        )}

                        {item.type === 'gofundme' && item.gofundmeUrl && (
                            <a
                                href={item.gofundmeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex justify-center items-center bg-green-600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-green-700 hover:scale-105 transition-all gap-2"
                            >
                                Donate Here <ExternalLink size={14} />
                            </a>
                        )}

                        {item.type !== 'video' && !hasImagePreview && item.fileUrl && (
                            <a
                                href={item.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-800 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-md transition-all"
                            >
                                <Download size={14} /> View / Download {item.fileName || 'Attachment'}
                            </a>
                        )}

                        {item.documentUrl && (
                            <a
                                href={item.documentUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-800 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-md transition-all"
                            >
                                <Download size={14} /> Download {item.documentName || 'Document'}
                            </a>
                        )}

                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <ShareButtons url={shareUrl} title={item.title} />
                        </div>
                    </div>
                </div>
            </div>

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
