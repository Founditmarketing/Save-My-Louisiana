import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, MapPin, Phone, Instagram, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

export const ContactFooter: React.FC = () => {
    return (
        <footer id="contact" className="bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-block">
                            <img src="/Save-My-LA-logo.png" alt="Save My Louisiana" className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Empowering citizens to protect our land, water, and constitutional rights against unchecked industrial expansion.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://www.facebook.com/savemylouisiana/photos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Facebook"><Facebook size={20} /></a>
                            <a href="https://x.com/savemylouisiana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="X">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-blue">The Threats</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link to="/property-rights" className="hover:text-white transition-colors">Property Rights</Link></li>
                            <li><Link to="/water-in-crosshairs" className="hover:text-white transition-colors">Water & Aquifers</Link></li>
                            <li><Link to="/environmental-dangers" className="hover:text-white transition-colors">Environmental Dangers</Link></li>
                            <li><Link to="/legislative-betrayal" className="hover:text-white transition-colors">Legislative Betrayal</Link></li>
                            <li><Link to="/follow-the-money" className="hover:text-white transition-colors">Follow The Money</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-blue">Get Involved</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-brand-red mt-1 shrink-0" />
                                <span>123 Bayou Road,<br />Lafayette, LA 70501</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-brand-red shrink-0" />
                                <span>318.542.6856</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-brand-red shrink-0" />
                                <a href="mailto:info@savemylouisiana.org" className="hover:text-white transition-colors">info@savemylouisiana.org</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-wider">
                    <p>&copy; 2025 Save My Louisiana. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};