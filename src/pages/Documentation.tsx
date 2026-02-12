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
        title: "Buried in Lies: Analysis",
        filename: "buried-in-lies.pdf",
        description: "An annotated breakdown exposing the misleading claims surrounding carbon sequestration safety and efficacy.",
        date: "January 2026"
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
                            <div className="flex items-center gap-4">
                                <a
                                    href={`/${selectedDoc}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
                                >
                                    Open in New Tab <ExternalLink size={14} />
                                </a>
                                <button
                                    onClick={() => setSelectedDoc(null)}
                                    className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer (Google Docs Viewer) */}
                        <div className="flex-grow bg-gray-100 relative">
                            <iframe
                                src={`https://docs.google.com/viewer?url=${window.location.origin}/${selectedDoc}&embedded=true`}
                                className="w-full h-full border-0"
                                title="PDF Viewer"
                            />
                            {/* Fallback/Localhost Notice */}
                            <div className="absolute bottom-0 text-center w-full p-2 bg-yellow-100 text-yellow-800 text-xs text-opacity-80 pointer-events-none">
                                Note: Viewer requires public URL (deploy to view). Localhost may show "No Preview".
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
