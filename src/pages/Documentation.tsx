import React, { useState } from 'react';
import { ArrowLeft, FileText, Download, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const DOCUMENTS = [
    {
        title: "CCS Environmental Impact Report",
        filename: "ccs-environmental-impact-report.pdf",
        description: "A comprehensive analysis of the potential environmental impacts of Carbon Capture and Storage projects in Louisiana.",
        date: "February 2026"
    },
    {
        title: "Buried in Lies: Supplemented Refs",
        filename: "buried-in-lies.pdf",
        description: "An updated annotated breakdown exposing the misleading claims surrounding carbon sequestration safety and efficacy, now with supplementary references.",
        date: "March 2026"
    }
];

export const Documentation: React.FC = () => {
    const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            {/* Header */}
            <section className="bg-gray-900 text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors uppercase tracking-widest text-xs font-bold">
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        Documentation & Reports
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-2xl mx-auto">
                        In-depth research and evidence supporting our fight to protect Louisiana.
                    </p>
                </div>
            </section>

            {/* Documents List */}
            <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-8">
                    {DOCUMENTS.map((doc, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-brand-blue/30 transition-all shadow-sm hover:shadow-md flex flex-col group">
                            <div className="flex items-start justify-between mb-6">
                                <div className="bg-white p-4 rounded-xl shadow-sm text-brand-blue">
                                    <FileText size={32} />
                                </div>
                                <span className="bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    PDF
                                </span>
                            </div>

                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                                {doc.title}
                            </h3>
                            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                {doc.description}
                            </p>

                            <div className="flex gap-4 mt-auto">
                                <button
                                    onClick={() => setSelectedDoc(doc.filename)}
                                    className="flex-1 bg-brand-blue hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2"
                                >
                                    View Report
                                </button>
                                <a
                                    href={`/${doc.filename}`}
                                    download
                                    className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 p-3 rounded-lg transition-colors"
                                    title="Download PDF"
                                >
                                    <Download size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedDoc && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white w-full h-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col relative shadow-2xl">
                        {/* Modal Header */}
                        <div className="bg-gray-900 text-white p-4 flex justify-between items-center shrink-0">
                            <h3 className="font-heading font-bold text-lg truncate pr-4">
                                {DOCUMENTS.find(d => d.filename === selectedDoc)?.title}
                            </h3>
                            <div className="flex items-center gap-3 shrink-0">
                                <a
                                    href={`/${selectedDoc}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-brand-blue hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors flex items-center gap-3 text-xs uppercase tracking-widest font-bold shadow-sm whitespace-nowrap shrink-0"
                                >
                                    Open in New Tab <ExternalLink size={18} />
                                </a>
                                <button
                                    onClick={() => setSelectedDoc(null)}
                                    className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer (Object) */}
                        <div className="flex-grow bg-gray-100 relative">
                            <object
                                data={`/${selectedDoc}`}
                                type="application/pdf"
                                className="w-full h-full"
                                aria-label="PDF Document"
                            >
                                {/* Fallback content for large files or unsupported browsers */}
                                <div className="flex flex-col items-center justify-center h-full space-y-6 p-8 text-center bg-gray-50">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-sm">
                                        <p className="text-lg font-bold text-gray-900 mb-2">
                                            Document Preview Unavailable
                                        </p>
                                        <p className="text-gray-600 mb-6 text-sm">
                                            This document (7MB+) may be too large to display in your browser.
                                        </p>
                                        <a
                                            href={`/${selectedDoc}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full bg-brand-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest transition-colors mb-3"
                                        >
                                            Open in New Tab
                                        </a>
                                        <a
                                            href={`/${selectedDoc}`}
                                            download
                                            className="block w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-bold uppercase tracking-widest transition-colors text-xs"
                                        >
                                            Download PDF
                                        </a>
                                    </div>
                                </div>
                            </object>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
