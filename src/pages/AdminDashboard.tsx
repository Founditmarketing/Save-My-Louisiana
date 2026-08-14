import React, { useState, useEffect } from 'react';
import { Plus, Trash2, LogOut, FileText, Upload, ArrowLeft, Eye, Video, Megaphone, DollarSign, Edit2, Users, LayoutDashboard, Mail, Download, CalendarDays, Clock, MapPin } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
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

interface Lead {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    parish: string;
    message: string;
    sourceurl: string;
    createdat: any;
}

interface CalendarEventItem {
    id: string;
    title: string;
    description: string;
    location: string;
    start_date: string;
    end_date: string;
    all_day: boolean;
    imageUrl?: string;
}

export const AdminDashboard: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Content Display State
    const [activeTab, setActiveTab] = useState<'content' | 'submissions' | 'events'>('content');
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [leads, setLeads] = useState<Lead[]>([]);
    const [events, setEvents] = useState<CalendarEventItem[]>([]);

    // Shared Form State
    const [showForm, setShowForm] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
    const [editingEvent, setEditingEvent] = useState<CalendarEventItem | null>(null);

    // Event Form State
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventStartDate, setEventStartDate] = useState('');
    const [eventEndDate, setEventEndDate] = useState('');
    const [eventAllDay, setEventAllDay] = useState(false);
    const [eventFile, setEventFile] = useState<File | null>(null);
    const [eventRemoveImage, setEventRemoveImage] = useState(false);

    // News & Updates Form
    const [newsTitle, setNewsTitle] = useState('');
    const [newsType, setNewsType] = useState<'article' | 'video' | 'announcement' | 'gofundme' | 'resource'>('article');
    const [newsContent, setNewsContent] = useState('');
    const [newsGofundmeUrl, setNewsGofundmeUrl] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [documentFile, setDocumentFile] = useState<File | null>(null);

    const navigate = useNavigate();

    // Database Setup trigger (hidden)
    useEffect(() => {
        fetch('/api/admin/setup').catch(console.error);
    }, []);

    // Auth check
    useEffect(() => {
        const token = localStorage.getItem('sml_admin_token');
        if (!token) {
            navigate('/admin/login');
        } else {
            setUser({ loggedIn: true });
            setLoading(false);
        }
    }, [navigate]);

    const fetchNewsItems = async () => {
        try {
            const res = await fetch(`/api/admin/news?t=${Date.now()}`);
            if (res.ok) {
                const data = await res.json();
                setNewsItems(data.map((i: any) => ({
                    ...i,
                    fileUrl: i.fileurl,
                    fileName: i.filename,
                    gofundmeUrl: i.gofundmeurl,
                    documentUrl: i.documenturl,
                    documentName: i.documentname,
                    createdAt: i.createdat
                })));
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchLeads = async () => {
        try {
            const token = localStorage.getItem('sml_admin_token');
            const res = await fetch('/api/admin/leads', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setLeads(data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchEvents = async () => {
        try {
            const token = localStorage.getItem('sml_admin_token');
            const res = await fetch('/api/admin/events', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                setEvents(data.map((ev: any) => ({
                    ...ev,
                    imageUrl: ev.image_url
                })));
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (user) {
            fetchNewsItems();
            fetchLeads();
            fetchEvents();
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem('sml_admin_token');
        navigate('/admin/login');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const clearForm = () => {
        setFile(null);
        setDocumentFile(null);
        setNewsTitle(''); setNewsContent(''); setNewsGofundmeUrl(''); setNewsType('article');
        setEditingItem(null);

        setEventTitle(''); setEventDescription(''); setEventLocation('');
        setEventStartDate(''); setEventEndDate(''); setEventAllDay(false);
        setEditingEvent(null);
        setEventFile(null);
        setEventRemoveImage(false);
    };

    const handleEditClick = (item: NewsItem) => {
        setEditingItem(item);
        setNewsType(item.type);
        setNewsTitle(item.title);
        setNewsContent(item.content || '');
        setNewsGofundmeUrl(item.gofundmeUrl || '');
        setShowForm(true);
        setFile(null);
        setDocumentFile(null);
        setEditingEvent(null);
    };

    const handleEditEventClick = (ev: CalendarEventItem) => {
        setEditingEvent(ev);
        setEventTitle(ev.title);
        setEventDescription(ev.description || '');
        setEventLocation(ev.location || '');
        
        // Format dates for datetime-local input
        const formatForInput = (d: string) => {
            if (!d) return '';
            const date = new Date(d);
            return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
        };
        
        setEventStartDate(formatForInput(ev.start_date));
        setEventEndDate(formatForInput(ev.end_date));
        setEventAllDay(ev.all_day || false);
        setEventFile(null);
        setEventRemoveImage(false);
        
        setShowForm(true);
        setEditingItem(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        const token = localStorage.getItem('sml_admin_token');

        try {
            let finalFileUrl = editingItem ? editingItem.fileUrl : '';
            let finalFileName = editingItem ? editingItem.fileName : '';
            let finalDocumentUrl = editingItem ? editingItem.documentUrl : '';
            let finalDocumentName = editingItem ? editingItem.documentName : '';

            if (file) {
                const uploadRes = await fetch(`/api/admin/upload?filename=${encodeURIComponent(file.name)}`, {
                    method: 'POST',
                    body: file,
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (!uploadRes.ok) {
                    const errText = await uploadRes.text();
                    throw new Error(`Cover Upload failed: ${uploadRes.status} ${errText}`);
                }
                const blob = await uploadRes.json();
                finalFileUrl = blob.url;
                finalFileName = file.name;
            }

            if (documentFile) {
                const uploadRes = await fetch(`/api/admin/upload?filename=${encodeURIComponent(documentFile.name)}`, {
                    method: 'POST',
                    body: documentFile,
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (!uploadRes.ok) {
                    const errText = await uploadRes.text();
                    throw new Error(`Document Upload failed: ${uploadRes.status} ${errText}`);
                }
                const blob = await uploadRes.json();
                finalDocumentUrl = blob.url;
                finalDocumentName = documentFile.name;
            }

            const method = editingItem ? 'PUT' : 'POST';
            const endpointSuffix = editingItem ? `?id=${editingItem.id}` : '';
            const endpoint = '/api/admin/news' + endpointSuffix;

            const body = {
                title: newsTitle, type: newsType, content: newsContent, gofundmeUrl: newsGofundmeUrl, fileUrl: finalFileUrl, fileName: finalFileName, documentUrl: finalDocumentUrl, documentName: finalDocumentName
            };

            const res = await fetch(endpoint, {
                method,
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(body)
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(`Save failed: ${res.status} ${errText}`);
            }

            // Reset
            clearForm();
            setShowForm(false);

            fetchNewsItems();
        } catch (err: any) {
            console.error(err);
            alert(`An error occurred during submission.\n\nDetails: ${err.message}`);
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this item?')) return;

        try {
            const token = localStorage.getItem('sml_admin_token');
            const endpoint = `/api/admin/news?id=${id}`;
            await fetch(endpoint, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            fetchNewsItems();
        } catch (err) {
            console.error(err);
        }
    };

    const handleEventSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        const token = localStorage.getItem('sml_admin_token');

        try {
            let finalImageUrl = editingEvent ? editingEvent.imageUrl : '';
            if (eventRemoveImage) {
                finalImageUrl = '';
            }

            if (eventFile) {
                const uploadRes = await fetch(`/api/admin/upload?filename=${encodeURIComponent(eventFile.name)}`, {
                    method: 'POST',
                    body: eventFile,
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (!uploadRes.ok) {
                    const errText = await uploadRes.text();
                    throw new Error(`Event Image Upload failed: ${uploadRes.status} ${errText}`);
                }
                const blob = await uploadRes.json();
                finalImageUrl = blob.url;
            }

            const method = editingEvent ? 'PUT' : 'POST';
            const endpointSuffix = editingEvent ? `?id=${editingEvent.id}` : '';
            const endpoint = '/api/admin/events' + endpointSuffix;

            const body = {
                title: eventTitle,
                description: eventDescription,
                location: eventLocation,
                start_date: new Date(eventStartDate).toISOString(),
                end_date: eventEndDate ? new Date(eventEndDate).toISOString() : null,
                all_day: eventAllDay,
                imageUrl: finalImageUrl
            };

            const res = await fetch(endpoint, {
                method,
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(body)
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(`Save failed: ${res.status} ${errText}`);
            }

            clearForm();
            setShowForm(false);
            fetchEvents();
        } catch (err: any) {
            console.error(err);
            alert(`An error occurred during submission.\n\nDetails: ${err.message}`);
        } finally {
            setSubmitting(false);
        }
    };

    const handleEventDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this event?')) return;

        try {
            const token = localStorage.getItem('sml_admin_token');
            const endpoint = `/api/admin/events?id=${id}`;
            await fetch(endpoint, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            fetchEvents();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDownloadCSV = () => {
        if (leads.length === 0) return;

        const headers = ['Date', 'First Name', 'Last Name', 'Email', 'Phone', 'Parish', 'Message'];
        const escapeCSV = (str: string) => `"${(str || '').replace(/"/g, '""')}"`;

        const rows = leads.map(lead => [
            new Date(lead.createdat).toLocaleString(),
            escapeCSV(lead.firstname),
            escapeCSV(lead.lastname),
            escapeCSV(lead.email),
            escapeCSV(lead.phone),
            escapeCSV(lead.parish),
            escapeCSV(lead.message)
        ].join(','));

        const csvContent = [headers.join(','), ...rows].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', `SML_Leads_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const adminSEO = (
        <PageSEO
            title="Admin Dashboard"
            description="Save My Louisiana admin dashboard."
            path="/admin"
            noIndex
        />
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                {adminSEO}
                <div className="animate-spin w-8 h-8 border-4 border-brand-blue border-t-transparent rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {adminSEO}
            <header className="bg-brand-dark text-white px-6 py-4 shadow-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <div>
                            <h1 className="text-xl font-heading font-bold">SML Portal</h1>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Admin Dashboard</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/news" target="_blank" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest hidden sm:flex">
                            <Eye size={16} /> View Live Page
                        </Link>
                        <button onClick={handleLogout} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest transition-colors">
                            <LogOut size={16} /> Sign Out
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Tabs */}
                <div className="flex items-center gap-6 mb-8 border-b border-gray-100 flex-wrap">
                    <button
                        onClick={() => { setActiveTab('content'); setShowForm(false); }}
                        className={`flex items-center gap-2 pb-4 border-b-2 font-bold uppercase tracking-widest text-sm transition-colors ${activeTab === 'content' ? 'border-brand-blue text-brand-blue' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
                    >
                        <LayoutDashboard size={18} /> News & Content
                    </button>
                    <button
                        onClick={() => { setActiveTab('events'); setShowForm(false); }}
                        className={`flex items-center gap-2 pb-4 border-b-2 font-bold uppercase tracking-widest text-sm transition-colors ${activeTab === 'events' ? 'border-brand-blue text-brand-blue' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
                    >
                        <CalendarDays size={18} /> Calendar Events
                    </button>
                    <button
                        onClick={() => { setActiveTab('submissions'); setShowForm(false); }}
                        className={`flex items-center gap-2 pb-4 border-b-2 font-bold uppercase tracking-widest text-sm transition-colors ${activeTab === 'submissions' ? 'border-brand-blue text-brand-blue' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
                    >
                        <Users size={18} /> Form Submissions
                    </button>
                </div>

                {activeTab === 'content' ? (
                    <>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                            <h2 className="text-3xl font-heading font-bold text-gray-900">
                                Current News & Updates
                            </h2>
                    {!showForm && (
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <button onClick={() => { clearForm(); setShowForm(true); }} className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg text-sm">
                                <Plus size={18} /> Add News Update
                            </button>
                        </div>
                    )}
                </div>

                {showForm ? (
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
                        <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                            <h3 className="text-xl font-heading font-bold">
                                {editingItem
                                    ? `Edit News Update`
                                    : `Create New News Update`
                                }
                            </h3>
                            <button type="button" onClick={() => { setShowForm(false); clearForm(); }} className="text-gray-400 hover:text-gray-900 flex items-center gap-1 text-sm font-bold uppercase tracking-widest">
                                <ArrowLeft size={16} /> Back
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                {[
                                    { id: 'article', icon: FileText, label: 'Article / Post' },
                                    { id: 'video', icon: Video, label: 'Video Clip' },
                                    { id: 'announcement', icon: Megaphone, label: 'Announcement' },
                                    { id: 'gofundme', icon: DollarSign, label: 'GoFundMe Block' },
                                    { id: 'resource', icon: Upload, label: 'Resource Block' },
                                ].map(type => (
                                    <div
                                        key={type.id}
                                        onClick={() => setNewsType(type.id as any)}
                                        className={`cursor-pointer rounded-xl p-4 border-2 flex flex-col items-center justify-center gap-3 text-center transition-all ${newsType === type.id ? 'border-brand-blue bg-blue-50 text-brand-blue shadow-sm' : 'border-gray-100 bg-white text-gray-400 hover:bg-gray-50 hover:border-gray-200'}`}
                                    >
                                        <type.icon size={24} />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{type.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Post Title</label>
                                <input type="text" value={newsTitle} onChange={(e) => setNewsTitle(e.target.value)} required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50" placeholder={newsType === 'gofundme' ? "e.g. Help Fund the Legal Battle" : "e.g. Special Committee Hearing Recap"} />
                            </div>

                            {newsType === 'gofundme' && (
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-green-600 mb-2">GoFundMe Campaign URL</label>
                                    <input type="url" value={newsGofundmeUrl} onChange={(e) => setNewsGofundmeUrl(e.target.value)} required className="w-full bg-green-50 border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50" placeholder="https://gofund.me/..." />
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Content / Description</label>
                                <textarea value={newsContent} onChange={(e) => setNewsContent(e.target.value)} rows={6} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50" placeholder="Write the content here..." />
                            </div>

                            {/* FILE UPLOAD */}
                            {(newsType === 'article' || newsType === 'video' || newsType === 'resource') && (
                                <div>
                                    {editingItem && editingItem.fileName && !file && (
                                        <div className="mb-4 inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-4 py-2 rounded-lg text-sm font-bold border border-blue-100">
                                            <FileText size={16} /> Currently Attached Cover/Media: {editingItem.fileName}
                                        </div>
                                    )}
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors">
                                        <input
                                            type="file"
                                            id="file-upload"
                                            className="hidden"
                                            onChange={(e) => {
                                                const selected = e.target.files?.[0];
                                                if (selected && selected.size > 4.5 * 1024 * 1024) {
                                                    alert("File is too large. The maximum upload size is 4.5 MB.");
                                                    e.target.value = ''; // Reset
                                                    return;
                                                }
                                                setFile(selected || null);
                                            }}
                                            accept={newsType === 'video' ? "video/*" : ".pdf,.doc,.docx,image/*"}
                                        />
                                        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-4">
                                            <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center">
                                                <Upload size={24} />
                                            </div>
                                            <div>
                                                <p className="text-gray-900 font-bold font-heading text-lg">
                                                    {editingItem ? 'Upload a new cover/media file to replace the old one' : (newsType === 'resource' ? 'Upload Cover Picture' : 'Select a file to upload')}
                                                </p>
                                                <p className="text-gray-500 text-sm mt-1">
                                                    {newsType === 'video' ? 'MP4, MOV, WebM' : 'PDF, DOC, Images (JPG, PNG)'} {newsType === 'resource' ? '(Image Required)' : '(Optional)'}
                                                </p>
                                                <p className="text-sm font-bold text-red-500 mt-2">Max file size: 4.5 MB</p>
                                            </div>
                                            {file && (
                                                <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-bold">
                                                    <FileText size={16} /> {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                </div>
                            )}

                            {newsType === 'resource' && (
                                <div>
                                    {editingItem && editingItem.documentName && !documentFile && (
                                        <div className="mb-4 inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-lg text-sm font-bold border border-amber-100">
                                            <FileText size={16} /> Attached Document: {editingItem.documentName}
                                        </div>
                                    )}
                                    <div className="border-2 border-dashed border-amber-300 rounded-xl p-8 text-center hover:bg-amber-50 transition-colors">
                                        <input
                                            type="file"
                                            id="document-upload"
                                            className="hidden"
                                            onChange={(e) => {
                                                const selected = e.target.files?.[0];
                                                if (selected && selected.size > 4.5 * 1024 * 1024) {
                                                    alert("Document is too large. The maximum upload size is 4.5 MB.");
                                                    e.target.value = ''; // Reset
                                                    return;
                                                }
                                                setDocumentFile(selected || null);
                                            }}
                                            accept=".pdf,.doc,.docx"
                                        />
                                        <label htmlFor="document-upload" className="cursor-pointer flex flex-col items-center gap-4">
                                            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                                                <FileText size={24} />
                                            </div>
                                            <div>
                                                <p className="text-gray-900 font-bold font-heading text-lg">
                                                    Upload Document Link File
                                                </p>
                                                <p className="text-gray-500 text-sm mt-1">
                                                    PDF, DOC, DOCX (Required for Resource)
                                                </p>
                                                <p className="text-sm font-bold text-red-500 mt-2">Max file size: 4.5 MB</p>
                                            </div>
                                            {documentFile && (
                                                <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-bold">
                                                    <FileText size={16} /> {documentFile.name} ({(documentFile.size / (1024 * 1024)).toFixed(2)} MB)
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                </div>
                            )}

                            <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
                                <button type="button" onClick={() => { setShowForm(false); clearForm(); }} className="px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-100 transition-colors text-sm">
                                    Cancel
                                </button>
                                <button type="submit" disabled={submitting} className="bg-brand-blue hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg disabled:opacity-50 text-sm flex items-center gap-2">
                                    {submitting ? (
                                        <>
                                            <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                                            Saving...
                                        </>
                                    ) : (
                                        <>{editingItem ? 'Save Changes' : 'Publish Item'} <ArrowLeft size={16} className="rotate-180" /></>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
                        {newsItems.length === 0 ? (
                            <div className="p-12 text-center text-gray-500 font-serif">No news updates posted yet.</div>
                        ) : newsItems.map((item) => (
                            <div key={item.id} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-gray-50 transition-colors">
                                <div className="flex gap-4 sm:gap-6 items-start">
                                    {/* Image Preview Block */}
                                    {isImage(item.fileName) && item.fileUrl && (
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                                            <img src={item.fileUrl} alt="Preview" className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">
                                                {item.type}
                                            </span>
                                            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                                                {item.createdAt && new Date(item.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-gray-900">{item.title}</h3>
                                        {item.fileName && !isImage(item.fileName) && (
                                            <div className="flex items-center gap-2 text-sm text-brand-blue mt-2 font-medium">
                                                {item.type === 'video' ? <Video size={16} /> : <FileText size={16} />} Attached: {item.fileName}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="md:ml-auto flex flex-row md:flex-col gap-2 mt-4 md:mt-0">
                                    <button onClick={() => handleEditClick(item)} className="flex items-center gap-2 text-brand-blue hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors text-sm font-bold uppercase tracking-widest w-fit">
                                        <Edit2 size={16} /> Edit
                                    </button>
                                    <button onClick={() => handleDelete(item.id)} className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors text-sm font-bold uppercase tracking-widest w-fit">
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                    </>
                ) : activeTab === 'events' ? (
                    <>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                            <h2 className="text-3xl font-heading font-bold text-gray-900">
                                Calendar Events
                            </h2>
                            {!showForm && (
                                <button onClick={() => { clearForm(); setShowForm(true); }} className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg text-sm">
                                    <Plus size={18} /> Add Event
                                </button>
                            )}
                        </div>

                        {showForm ? (
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
                                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                                    <h3 className="text-xl font-heading font-bold">
                                        {editingEvent ? 'Edit Event' : 'Create New Event'}
                                    </h3>
                                    <button type="button" onClick={() => { setShowForm(false); clearForm(); }} className="text-gray-400 hover:text-gray-900 flex items-center gap-1 text-sm font-bold uppercase tracking-widest">
                                        <ArrowLeft size={16} /> Back
                                    </button>
                                </div>

                                <form onSubmit={handleEventSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Event Title</label>
                                        <input type="text" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50" placeholder="e.g. Town Hall Meeting" />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Location</label>
                                        <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50" placeholder="e.g. 123 Main St, Baton Rouge, LA" />
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input type="checkbox" id="allDayToggle" checked={eventAllDay} onChange={(e) => setEventAllDay(e.target.checked)} className="w-5 h-5 text-brand-blue border-gray-300 rounded focus:ring-brand-blue" />
                                        <label htmlFor="allDayToggle" className="text-sm font-bold uppercase tracking-widest text-gray-700 cursor-pointer">All Day Event</label>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Start {eventAllDay ? 'Date' : 'Date & Time'}</label>
                                            <input type={eventAllDay ? "date" : "datetime-local"} value={eventStartDate} onChange={(e) => setEventStartDate(e.target.value)} required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">End {eventAllDay ? 'Date' : 'Date & Time'} (Optional)</label>
                                            <input type={eventAllDay ? "date" : "datetime-local"} value={eventEndDate} onChange={(e) => setEventEndDate(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Description</label>
                                        <textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} rows={6} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50" placeholder="Write event details here..." />
                                    </div>

                                    <div>
                                        {editingEvent && editingEvent.imageUrl && !eventFile && !eventRemoveImage && (
                                            <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-blue-50 px-4 py-3 rounded-xl border border-blue-100">
                                                <div className="flex items-center gap-2 text-brand-blue text-sm font-bold">
                                                    <Upload size={16} /> Currently Attached Image
                                                    <img src={editingEvent.imageUrl} alt="Event Flyer" className="w-10 h-10 rounded object-cover ml-2 border border-blue-200" />
                                                </div>
                                                <button type="button" onClick={() => setEventRemoveImage(true)} className="flex items-center gap-1.5 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors text-xs font-bold uppercase tracking-widest sm:ml-auto">
                                                    <Trash2 size={14} /> Remove Image
                                                </button>
                                            </div>
                                        )}
                                        {eventRemoveImage && (
                                            <div className="mb-4 inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-3 rounded-xl border border-red-100 text-sm font-bold">
                                                <Trash2 size={16} /> Image will be removed upon saving.
                                                <button type="button" onClick={() => setEventRemoveImage(false)} className="ml-2 text-gray-500 hover:text-gray-700 underline text-xs">Undo</button>
                                            </div>
                                        )}
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors">
                                            <input
                                                type="file"
                                                id="event-file-upload"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const selected = e.target.files?.[0];
                                                    if (selected && selected.size > 4.5 * 1024 * 1024) {
                                                        alert("Image is too large. The maximum upload size is 4.5 MB.");
                                                        e.target.value = '';
                                                        return;
                                                    }
                                                    setEventFile(selected || null);
                                                }}
                                                accept="image/*"
                                            />
                                            <label htmlFor="event-file-upload" className="cursor-pointer flex flex-col items-center gap-4">
                                                <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center">
                                                    <Upload size={24} />
                                                </div>
                                                <div>
                                                    <p className="text-gray-900 font-bold font-heading text-lg">
                                                        Upload Flyer / Image
                                                    </p>
                                                    <p className="text-gray-500 text-sm mt-1">
                                                        Images (JPG, PNG) (Optional)
                                                    </p>
                                                    <p className="text-sm font-bold text-red-500 mt-2">Max file size: 4.5 MB</p>
                                                </div>
                                            </label>
                                            {eventFile && (
                                                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 bg-green-50 text-green-700 px-4 py-3 rounded-xl text-sm font-bold border border-green-100">
                                                    <div className="flex items-center gap-2 text-left">
                                                        <Upload size={16} className="shrink-0" /> 
                                                        <span className="truncate max-w-[150px] sm:max-w-[200px]">{eventFile.name}</span> 
                                                        <span className="shrink-0">({(eventFile.size / (1024 * 1024)).toFixed(2)} MB)</span>
                                                    </div>
                                                    <img src={URL.createObjectURL(eventFile)} alt="New Preview" className="w-12 h-12 rounded object-cover border border-green-200" />
                                                    <button 
                                                        type="button" 
                                                        onClick={() => setEventFile(null)} 
                                                        className="flex items-center gap-1.5 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors text-xs font-bold uppercase tracking-widest sm:ml-auto shrink-0"
                                                    >
                                                        <Trash2 size={14} /> Remove
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
                                        <button type="button" onClick={() => { setShowForm(false); clearForm(); }} className="px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-100 transition-colors text-sm">
                                            Cancel
                                        </button>
                                        <button type="submit" disabled={submitting} className="bg-brand-blue hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg disabled:opacity-50 text-sm flex items-center gap-2">
                                            {submitting ? 'Saving...' : <>{editingEvent ? 'Save Event' : 'Publish Event'} <ArrowLeft size={16} className="rotate-180" /></>}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
                                {events.length === 0 ? (
                                    <div className="p-12 text-center text-gray-500 font-serif">No events scheduled.</div>
                                ) : events.map((ev) => (
                                    <div key={ev.id} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-gray-50 transition-colors">
                                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start w-full">
                                            {ev.imageUrl ? (
                                                <div className="w-full sm:w-40 h-32 shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                                                    <img src={ev.imageUrl} alt="Flyer" className="w-full h-full object-cover" />
                                                </div>
                                            ) : (
                                                <div className="w-full sm:w-40 h-32 shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50 flex flex-col items-center justify-center text-gray-400">
                                                    <CalendarDays size={32} className="mb-2 opacity-50" />
                                                    <span className="text-[10px] font-bold uppercase tracking-widest">No Image</span>
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <h3 className="text-xl font-heading font-bold text-gray-900">{ev.title}</h3>
                                                <div className="flex flex-col gap-1 mt-2 text-sm text-gray-500">
                                                <span className="flex items-center gap-1.5"><Clock size={14} /> 
                                                    {new Date(ev.start_date).toLocaleString()} {ev.all_day && '(All Day)'}
                                                </span>
                                                {ev.location && <span className="flex items-center gap-1.5"><MapPin size={14} /> {ev.location}</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:ml-auto flex gap-2 mt-4 md:mt-0 shrink-0">
                                            <button onClick={() => handleEditEventClick(ev)} className="flex items-center gap-2 text-brand-blue hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors text-sm font-bold uppercase tracking-widest">
                                                <Edit2 size={16} /> Edit
                                            </button>
                                            <button onClick={() => handleEventDelete(ev.id)} className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors text-sm font-bold uppercase tracking-widest">
                                                <Trash2 size={16} /> Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="animate-fade-in-up">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                            <h2 className="text-3xl font-heading font-bold text-gray-900">
                                Contact Form Submissions
                            </h2>
                            {leads.length > 0 && (
                                <button onClick={handleDownloadCSV} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg text-sm shrink-0">
                                    <Download size={18} /> Download Excel (.CSV)
                                </button>
                            )}
                        </div>
                        
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-100">
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">Date</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">Name</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">Contact</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">Parish</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500 max-w-sm">Message</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {leads.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="px-6 py-12 text-center text-gray-500 font-serif">
                                                    No submissions yet, or database not synced.
                                                </td>
                                            </tr>
                                        ) : leads.map((lead) => (
                                            <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                    {new Date(lead.createdat).toLocaleDateString()} <br />
                                                    <span className="text-xs text-gray-400">{new Date(lead.createdat).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                                                </td>
                                                <td className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">
                                                    {lead.firstname} {lead.lastname}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-600">
                                                    <a href={`mailto:${lead.email}`} className="text-brand-blue hover:underline mb-1 block flex items-center gap-1">
                                                        <Mail size={12} className="inline" /> {lead.email}
                                                    </a>
                                                    {lead.phone && <span className="text-gray-500">{lead.phone}</span>}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                                                    {lead.parish || '-'}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-600 max-w-sm">
                                                    <div className="line-clamp-3 overflow-hidden text-ellipsis mb-1" title={lead.message}>
                                                        {lead.message || '-'}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};
