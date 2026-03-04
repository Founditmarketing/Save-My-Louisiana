
import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">

            {/* Header */}
            <section className="bg-gray-900 text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                        Get Involved
                    </h1>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 max-w-2xl mx-auto">
                        Have information? Want to volunteer? Join the coalition to protect our future.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">

                    {/* Contact Info (2 cols) */}
                    <div className="lg:col-span-2 space-y-10">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Take Action</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                We are a grassroots organization run by dedicated volunteers and legal experts. We want to hear from you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-full text-brand-blue">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Email Us</h4>
                                        <a href="mailto:info@savemylouisiana.org" className="text-gray-600 hover:text-brand-blue transition-colors">info@savemylouisiana.org</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-full text-brand-blue">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Call Us</h4>
                                        <span className="text-gray-600">318.542.6856</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-full text-brand-blue">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Mailing Address</h4>
                                        <p className="text-gray-600">
                                            123 Bayou Road<br />
                                            Lafayette, LA 70501
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Follow The Movement</h3>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/savemylouisiana/photos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="https://x.com/savemylouisiana" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all shadow-sm" title="X">
                                    <span className="sr-only">X</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/@SAVEMYLOUISIANA-p4l" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#FF0000] hover:text-white transition-all shadow-sm" title="YouTube">
                                    <span className="sr-only">YouTube</span>
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form (3 cols) */}
                    <div className="lg:col-span-3 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">Join The Movement</h2>
                        <p className="text-gray-500 mb-8">Sign up for updates or send us a secure message.</p>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                                    <input type="email" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Account of Incident / Message</label>
                                <textarea rows={5} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all" placeholder="Tell us how you can help or what you have witnessed..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-brand-blue hover:bg-blue-800 text-white py-4 rounded-lg font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

                {/* Movement Calendar */}
                <div className="mt-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center uppercase tracking-tight">Movement Calendar</h2>
                        <div className="relative w-full overflow-hidden rounded-2xl border border-gray-100 shadow-inner bg-gray-50 h-[600px] md:h-auto md:aspect-video">
                            <iframe
                                src="https://calendar.google.com/calendar/embed?src=532b4f922a19c1f7006401dfcae37f1c81d08120edf0c1c1ee71baa1c9efd262%40group.calendar.google.com&ctz=America%2FChicago"
                                style={{ border: 0 }}
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                scrolling="no"
                                title="Movement Calendar"
                            ></iframe>
                        </div>
                        <p className="mt-6 text-center text-gray-500 font-serif italic">
                            Stay updated with our upcoming town halls, community meetings, and legislative sessions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
